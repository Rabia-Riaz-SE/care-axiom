import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NotificationService } from './notification.service';

@Module({
  providers: [NotificationService, ConfigService],
  exports: [NotificationService], // Export it so other modules can use it
})

export class NotificationModule {}
