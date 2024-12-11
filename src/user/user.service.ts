import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThan, Like } from 'typeorm';
import { USERS } from './entity/user.entity';
import { UserDTO } from './dto/userDTO.dto';
import { NotificationService } from '../notification/notification.service';

@Injectable()
export class UserService {
  constructor(
    private readonly notificationService: NotificationService,
    @InjectRepository(USERS) private readonly userRepository: Repository<USERS>,
  ) {}


  async createUser(userDto: UserDTO): Promise<UserDTO> {
    try {
      const existingEntity = await this.userRepository.findOne({
        where: { email: userDto.email },
      });
      if (existingEntity) {
        throw new HttpException(
          `${userDto.name} already exists`,
          HttpStatus.CONFLICT,
        );
      }

      const user = await this.userRepository.save({ ...userDto });
      this.notificationService.sendNotification(`Email to ${user.name}`, {
        email: user.email,
        subject: 'Registration Successful',
        body: `Dear ${user.name}, Thank you for signing up...`,
      });
      return user;
    } catch (err) {
      throw new HttpException(
        err.message || 'Internal Server Error',
        err.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }


  async getUsers(
    ageSearch?: number | undefined ): Promise<UserDTO[]> {
    const whereConditions: Record<string, any>[] = [];

    if (ageSearch && ageSearch > 0)
      whereConditions.push({ age: MoreThan(ageSearch) });

    return await this.userRepository.find({
      select: ['name', 'age', 'email'],
      where: whereConditions.length > 0 ? whereConditions : undefined,
      order: { name: 'ASC' },
    });
  }
}
