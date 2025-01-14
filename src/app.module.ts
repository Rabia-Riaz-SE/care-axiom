import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeORMConfigAsync} from '../config/typeorm.config'
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeORMConfigAsync),
    UserModule,
  ],
  controllers : [AppController],
  providers : [AppService],
})

export class AppModule {}