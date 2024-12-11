import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class NotificationService {
  public readonly notificationQueue: Queue;

  constructor(private readonly configService: ConfigService) {
    this.notificationQueue = new Queue('notification-queue', {
      connection: {
        host: this.configService.get<string>('REDIS_HOST') || 'localhost',
        port: this.configService.get<number>('REDIS_PORT') || 6379,
      },
    });
  }

  async sendNotification(jobName: string, payload: any) {
    try {
      await this.notificationQueue.add(jobName, payload);
    } catch (err) {
      console.error('Failed to enqueue notification', err);
    }
  }
}
