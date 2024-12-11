import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { USERS } from './entity/user.entity';  // Check this import path
import { TypeOrmModule } from '@nestjs/typeorm';
import {NotificationModule} from '../notification/notification.module'

@Module({
  imports: [TypeOrmModule.forFeature([USERS]), NotificationModule],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}

