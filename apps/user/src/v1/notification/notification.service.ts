import { CursorPaginationResDto } from '@libs/common/dto/pagination-response.dto'
import { BaseException } from '@libs/common/exception/base.exception'
import { NOTIFICATION_ERROR } from '@libs/common/exception/error.code'
import { Injectable } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { NotificationPaginationRequestDto } from './dto/notification-pagination-request.dto'
import { NotificationResponseDto } from './dto/notification-response.dto'
import { NotificationRepository } from './notification.repository'

@Injectable()
export class NotificationService {
    constructor(private readonly repository: NotificationRepository) {}

    async getMyNotifications(
        userId: number,
        searchCondition: NotificationPaginationRequestDto
    ): Promise<CursorPaginationResDto<NotificationResponseDto>> {
        const { items, nextCursor } = await this.repository.getNotifications({
            pagination: { lastCursor: searchCondition.lastCursor, size: searchCondition.size, order: searchCondition.order },
            searchCondition: { userId, isRead: searchCondition.isRead, type: searchCondition.type }
        })

        const mappedItems = items.map((item) => ({
            ...item,
            isRead: item.NotificationRead.length > 0,
            readAt: item.NotificationRead[0]?.createdAt ?? null
        }))

        return new CursorPaginationResDto(
            plainToInstance(NotificationResponseDto, mappedItems, { excludeExtraneousValues: true }),
            nextCursor
        )
    }

    async getNotification(userId: number, notificationId: number): Promise<NotificationResponseDto> {
        const notification = await this.repository.getNotification(notificationId, userId)
        if (!notification) {
            throw new BaseException(NOTIFICATION_ERROR.NOT_FOUND, this.constructor.name)
        }

        const mappedNotification = {
            ...notification,
            isRead: notification.NotificationRead.length > 0,
            readAt: notification.NotificationRead[0]?.createdAt ?? null
        }

        return plainToInstance(NotificationResponseDto, mappedNotification, { excludeExtraneousValues: true })
    }

    async updateNotification(userId: number, notificationId: number): Promise<void> {
        const notification = await this.repository.getNotification(notificationId, userId)
        if (!notification) {
            throw new BaseException(NOTIFICATION_ERROR.NOT_FOUND, this.constructor.name)
        }
        await this.repository.readNotification(userId, notificationId)
    }

    async bulkUpdateNotifications(userId: number): Promise<void> {
        await this.repository.readAllNotifications(userId)
    }

    async deleteNotification(userId: number, notificationId: number): Promise<void> {
        const notification = await this.repository.getNotification(notificationId, userId)
        if (!notification) {
            throw new BaseException(NOTIFICATION_ERROR.NOT_FOUND, this.constructor.name)
        }
        await this.repository.deleteNotification({ id: notificationId })
    }
}
