import { CursorPaginationResDto } from '@libs/common/dto/pagination-res.dto'
import { BaseException } from '@libs/common/exception/base.exception'
import { NOTIFICATION_ERROR } from '@libs/common/exception/error.code'
import { Injectable } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { NotificationPaginationReqDto } from './dto/notification-pagination-req.dto'
import { NotificationResDto } from './dto/notification-res.dto'
import { NotificationQuery } from './notification.query'

@Injectable()
export class NotificationService {
    constructor(private readonly notificationQuery: NotificationQuery) {}

    async getMyNotifications(
        userId: number,
        searchCondition: NotificationPaginationReqDto
    ): Promise<CursorPaginationResDto<NotificationResDto>> {
        const { items, nextCursor } = await this.notificationQuery.getNotifications({
            pagination: { lastCursor: searchCondition.lastCursor, size: searchCondition.size, order: searchCondition.order },
            searchCondition: { userId, isRead: searchCondition.isRead, type: searchCondition.type }
        })

        const mappedItems = items.map((item) => ({
            ...item,
            isRead: item.NotificationRead.length > 0,
            readAt: item.NotificationRead[0]?.createdAt ?? null
        }))

        return new CursorPaginationResDto(plainToInstance(NotificationResDto, mappedItems, { excludeExtraneousValues: true }), nextCursor)
    }

    async getNotification(userId: number, notificationId: number): Promise<NotificationResDto> {
        const notification = await this.notificationQuery.getNotification(notificationId, userId)
        if (!notification) {
            throw new BaseException(NOTIFICATION_ERROR.NOT_FOUND, this.constructor.name)
        }

        const mappedNotification = {
            ...notification,
            isRead: notification.NotificationRead.length > 0,
            readAt: notification.NotificationRead[0]?.createdAt ?? null
        }

        return plainToInstance(NotificationResDto, mappedNotification, { excludeExtraneousValues: true })
    }

    async updateNotification(userId: number, notificationId: number): Promise<void> {
        const notification = await this.notificationQuery.getNotification(notificationId, userId)
        if (!notification) {
            throw new BaseException(NOTIFICATION_ERROR.NOT_FOUND, this.constructor.name)
        }
        await this.notificationQuery.readNotification(userId, notificationId)
    }

    async bulkUpdateNotifications(userId: number): Promise<void> {
        await this.notificationQuery.readAllNotifications(userId)
    }

    async deleteNotification(userId: number, notificationId: number): Promise<void> {
        const notification = await this.notificationQuery.getNotification(notificationId, userId)
        if (!notification) {
            throw new BaseException(NOTIFICATION_ERROR.NOT_FOUND, this.constructor.name)
        }
        await this.notificationQuery.deleteNotification({ id: notificationId })
    }
}
