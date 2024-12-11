import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserDTO } from './dto/userDTO.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() userDto: UserDTO) {
    return this.userService.createUser(userDto);
  }

  @Get()
  getUsers(@Query('age') age?: string) {
    return this.userService.getUsers(
      age ? Number(age) : undefined
    );
  }
}
