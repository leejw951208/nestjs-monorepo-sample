import { Module } from '@nestjs/common'
import { NotificationController } from './notification.controller'
import { NotificationQuery } from './notification.query'
import { NotificationService } from './notification.service'

@Module({
    controllers: [NotificationController],
    providers: [NotificationService, NotificationQuery]
})
export class NotificationModule {}
