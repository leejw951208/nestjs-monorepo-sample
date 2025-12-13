import { OffsetPaginationResDto } from '@libs/common/dto/pagination-response.dto'
import { Inject, Injectable } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { CreateNotificationRequestDto } from './dto/notification-create-request.dto'
import { NotificationPaginationRequestDto } from './dto/notification-pagination-request.dto'
import { NotificationResponseDto } from './dto/notification-response.dto'
import { NotificationRepository } from './notification.repository'

@Injectable()
export class NotificationService {
    constructor(private readonly notificationQuery: NotificationRepository) {}

    async createNotification(adminId: number, dto: CreateNotificationRequestDto): Promise<void> {
        await this.notificationQuery.createNotification({
            title: dto.title,
            content: dto.content,
            type: dto.type,
            createdBy: adminId,
            ...(dto.userId && { user: { connect: { id: dto.userId } } })
        })
    }

    async getNotifications(dto: NotificationPaginationRequestDto): Promise<OffsetPaginationResDto<NotificationResponseDto>> {
        const { totalCount, items } = await this.notificationQuery.getNotifications({
            pagination: { page: dto.page, size: dto.size, order: dto.order },
            searchCondition: {
                userId: dto.userId,
                type: dto.type,
                keyword: dto.keyword
            }
        })
        const data = plainToInstance(NotificationResponseDto, items, { excludeExtraneousValues: true })

        return new OffsetPaginationResDto(data, { page: dto.page, totalCount })
    }
}
