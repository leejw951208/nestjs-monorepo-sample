import { PrismaModule } from '@libs/prisma/prisma.module'
import { Module } from '@nestjs/common'
import { NotificationController } from './notification.controller'
import { NotificationQuery } from './notification.query'
import { NotificationService } from './notification.service'

@Module({
    imports: [PrismaModule],
    controllers: [NotificationController],
    providers: [NotificationService, NotificationQuery],
    exports: [NotificationService]
})
export class NotificationModule {}
