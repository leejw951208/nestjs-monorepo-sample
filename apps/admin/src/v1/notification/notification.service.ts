import { OffsetPaginationResDto } from '@libs/common/dto/pagination-res.dto'
import { Inject, Injectable } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { CreateNotificationReqDto } from './dto/notification-create-req.dto'
import { NotificationPaginationReqDto } from './dto/notification-pagination-req.dto'
import { NotificationResDto } from './dto/notification-res.dto'
import { NotificationQuery } from './notification.query'

@Injectable()
export class NotificationService {
    constructor(private readonly notificationQuery: NotificationQuery) {}

    async createNotification(adminId: number, dto: CreateNotificationReqDto): Promise<void> {
        await this.notificationQuery.createNotification({
            title: dto.title,
            content: dto.content,
            type: dto.type,
            createdBy: adminId,
            ...(dto.userId && { user: { connect: { id: dto.userId } } })
        })
    }

    async getNotifications(dto: NotificationPaginationReqDto): Promise<OffsetPaginationResDto<NotificationResDto>> {
        const { totalCount, items } = await this.notificationQuery.getNotifications({
            pagination: { page: dto.page, size: dto.size, order: dto.order },
            searchCondition: {
                userId: dto.userId,
                type: dto.type,
                keyword: dto.keyword
            }
        })
        const data = plainToInstance(NotificationResDto, items, { excludeExtraneousValues: true })

        return new OffsetPaginationResDto(data, dto.page, totalCount)
    }
}
