import { CursorResponseDto } from '@libs/common/dto/pagination-response.dto'
import { BaseException } from '@libs/common/exception/base.exception'
import { NOTIFICATION_ERROR } from '@libs/common/exception/error.code'
import { type ExtendedPrismaClient, PRISMA_CLIENT } from '@libs/prisma/prisma.factory'
import { Inject, Injectable } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { NotificationCursorRequestDto } from './dto/notification-cursor-request.dto'
import { NotificationResponseDto } from './dto/notification-response.dto'
import { NotificationRepository } from './notification.repository'

@Injectable()
export class NotificationService {
    constructor(
        @Inject(PRISMA_CLIENT) private readonly prisma: ExtendedPrismaClient,
        private readonly repository: NotificationRepository
    ) {}

    async getMyNotifications(
        searchCondition: NotificationCursorRequestDto,
        userId: number
    ): Promise<CursorResponseDto<NotificationResponseDto>> {
        const { items, nextCursor } = await this.repository.findNotificationsCursor(searchCondition, userId)

        const notificationReads = await this.prisma.notificationRead.findMany({
            where: { userId, notificationId: { in: items.map((item) => item.id) } }
        })
        const notificationReadMap = new Map(notificationReads.map((item) => [item.notificationId, item.createdAt]))

        const mappedItems = items.map((item) => ({
            ...item,
            isRead: notificationReadMap.has(item.id),
            readAt: notificationReadMap.get(item.id) ?? null
        }))

        return new CursorResponseDto<NotificationResponseDto>(
            plainToInstance(NotificationResponseDto, mappedItems, { excludeExtraneousValues: true }),
            { nextCursor }
        )
    }

    async getNotification(userId: number, notificationId: number): Promise<NotificationResponseDto> {
        const notification = await this.prisma.notification.findFirst({
            where: {
                id: notificationId,
                isDeleted: false,
                OR: [{ userId }, { userId: null }]
            }
        })

        if (!notification) {
            throw new BaseException(NOTIFICATION_ERROR.NOT_FOUND, this.constructor.name)
        }

        const notificationRead = await this.prisma.notificationRead.findFirst({
            where: { userId, notificationId }
        })

        return plainToInstance(
            NotificationResponseDto,
            {
                ...notification,
                isRead: notificationRead !== null,
                readAt: notificationRead?.createdAt ?? null
            },
            { excludeExtraneousValues: true }
        )
    }

    async readNotification(userId: number, notificationId: number): Promise<void> {
        const foundNotification = await this.prisma.notification.findFirst({
            where: {
                id: notificationId,
                isDeleted: false,
                OR: [{ userId }, { userId: null }]
            }
        })

        if (!foundNotification) {
            throw new BaseException(NOTIFICATION_ERROR.NOT_FOUND, this.constructor.name)
        }

        const notificationRead = await this.prisma.notificationRead.findFirst({
            where: { userId, notificationId }
        })

        if (notificationRead) return

        await this.prisma.notificationRead.create({ data: { userId, notificationId } })
    }

    async readAllNotifications(userId: number): Promise<void> {
        const unreadNotifications = await this.prisma.notification.findMany({
            where: {
                isDeleted: false,
                OR: [{ userId }, { userId: null }],
                notificationReads: { none: { userId } }
            },
            select: { id: true }
        })

        if (unreadNotifications.length === 0) return

        await this.prisma.notificationRead.createMany({
            data: unreadNotifications.map((notification) => ({
                userId,
                notificationId: notification.id
            }))
        })
    }

    async deleteNotification(userId: number, notificationId: number): Promise<void> {
        const notification = await this.prisma.notification.findFirst({
            where: {
                id: notificationId,
                isDeleted: false,
                OR: [{ userId }, { userId: null }]
            }
        })

        if (!notification) {
            throw new BaseException(NOTIFICATION_ERROR.NOT_FOUND, this.constructor.name)
        }

        await this.prisma.notification.softDelete({ where: { id: notificationId } })
    }
}
