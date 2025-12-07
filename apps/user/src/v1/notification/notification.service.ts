import { CursorPaginationResDto } from '@libs/common/dto/pagination-res.dto'
import { BaseException } from '@libs/common/exception/base.exception'
import { NOTIFICATION_ERROR } from '@libs/common/exception/error.code'
import { JwtPayload } from '@libs/common/utils/jwt.util'
import { ExtendedPrismaClient, PRISMA_CLIENT } from '@libs/prisma/prisma.factory'
import { Inject, Injectable } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { NotificationBulkUpdateDto } from './dto/notification-bulk-update.dto'
import { NotificationCursorPaginationReqDto } from './dto/notification-cursor-pagination-req.dto'
import { NotificationResDto } from './dto/notification-res.dto'
import { NotificationUpdateDto } from './dto/notification-update.dto'
import { NotificationQuery } from './notification.query'

@Injectable()
export class NotificationService {
    constructor(
        @Inject(PRISMA_CLIENT) private readonly prisma: ExtendedPrismaClient,
        private readonly notificationQuery: NotificationQuery
    ) {}

    async getMyNotifications(payload: JwtPayload, searchCondition: NotificationCursorPaginationReqDto): Promise<CursorPaginationResDto<NotificationResDto>> {
        const userId = payload.id
        const { items, nextCursor } = await this.notificationQuery.getNotificationsCursor(userId, searchCondition)

        return new CursorPaginationResDto(plainToInstance(NotificationResDto, items, { excludeExtraneousValues: true }), nextCursor)
    }

    async getNotification(payload: JwtPayload, notificationId: number): Promise<NotificationResDto> {
        const userId = payload.id

        const notification = await this.prisma.notification.findFirst({
            where: { id: notificationId, userId }
        })

        if (!notification) {
            throw new BaseException(NOTIFICATION_ERROR.NOT_FOUND, this.constructor.name)
        }

        return plainToInstance(NotificationResDto, notification, { excludeExtraneousValues: true })
    }

    async updateNotification(payload: JwtPayload, notificationId: number, reqDto: NotificationUpdateDto): Promise<void> {
        const userId = payload.id

        // 알림 조회 및 권한 확인
        const notification = await this.prisma.notification.findFirst({
            where: { id: notificationId, userId }
        })

        if (!notification) {
            throw new BaseException(NOTIFICATION_ERROR.NOT_FOUND, this.constructor.name)
        }

        // 알림 업데이트
        await this.prisma.notification.update({
            where: { id: notificationId },
            data: {
                ...reqDto,
                ...(reqDto.isRead === true && { readAt: new Date() })
            }
        })
    }

    async bulkUpdateNotifications(payload: JwtPayload, reqDto: NotificationBulkUpdateDto): Promise<{ updatedCount: number }> {
        const userId = payload.id

        const result = await this.prisma.notification.updateMany({
            where: {
                userId,
                ...(reqDto.ids && reqDto.ids.length > 0 && { id: { in: reqDto.ids } }),
                ...(reqDto.isRead === true && { isRead: false }) // isRead를 true로 설정하는 경우 현재 false인 것만 업데이트
            },
            data: {
                isRead: reqDto.isRead,
                ...(reqDto.isRead === true && { readAt: new Date() })
            }
        })

        return { updatedCount: result.count }
    }

    async deleteNotification(payload: JwtPayload, notificationId: number): Promise<void> {
        const userId = payload.id

        // 알림 조회 및 권한 확인
        const notification = await this.prisma.notification.findFirst({
            where: { id: notificationId, userId }
        })

        if (!notification) {
            throw new BaseException(NOTIFICATION_ERROR.NOT_FOUND, this.constructor.name)
        }

        // 알림 삭제
        await this.prisma.notification.delete({
            where: { id: notificationId }
        })
    }

    // Deprecated: Use updateNotification instead
    async markAsRead(payload: JwtPayload, notificationId: number): Promise<void> {
        await this.updateNotification(payload, notificationId, { isRead: true })
    }

    // Deprecated: Use bulkUpdateNotifications instead
    async markAllAsRead(payload: JwtPayload): Promise<void> {
        await this.bulkUpdateNotifications(payload, { isRead: true })
    }
}
