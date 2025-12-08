import { type ExtendedPrismaClient, PRISMA_CLIENT } from '@libs/prisma/prisma.factory'
import { Inject, Injectable } from '@nestjs/common'
import { NotificationType, Prisma } from '@prisma/client'
import { NotificationPaginationReqDto } from './dto/notification-pagination-req.dto'

interface NotificationsCursorParams {
    pagination: {
        lastCursor?: number
        size: number
        order?: 'asc' | 'desc'
    }
    searchCondition: {
        userId: number
        isRead?: boolean
        type?: NotificationType
    }
}

@Injectable()
export class NotificationQuery {
    constructor(@Inject(PRISMA_CLIENT) private readonly prisma: ExtendedPrismaClient) {}

    async getNotifications(params: NotificationsCursorParams) {
        const { pagination, searchCondition } = params
        const order = pagination.order === 'asc' ? 'asc' : 'desc'

        const cursorCondition: Prisma.NotificationWhereInput = pagination.lastCursor
            ? order === 'desc'
                ? { id: { lt: pagination.lastCursor } }
                : { id: { gt: pagination.lastCursor } }
            : {}

        const where: Prisma.NotificationWhereInput = {
            AND: [
                {
                    OR: [{ userId: searchCondition.userId }, { userId: null }]
                },
                {
                    ...(searchCondition.isRead === true && { NotificationRead: { some: { userId: searchCondition.userId } } }),
                    ...(searchCondition.isRead === false && { NotificationRead: { none: { userId: searchCondition.userId } } }),
                    ...(searchCondition.type && { type: searchCondition.type }),
                    ...cursorCondition
                }
            ]
        }

        const items = await this.prisma.notification.findMany({
            where,
            include: {
                NotificationRead: {
                    where: { userId: searchCondition.userId },
                    select: { createdAt: true }
                }
            },
            orderBy: { id: order },
            take: pagination.size + 1
        })

        const hasMore = items.length > pagination.size
        const data = hasMore ? items.slice(0, pagination.size) : items
        const nextCursor = hasMore && data.length > 0 ? data[data.length - 1].id : null

        return { items: data, nextCursor }
    }

    async getNotification(id: number, userId: number) {
        return await this.prisma.notification.findFirst({
            where: {
                id,
                OR: [{ userId }, { userId: null }]
            },
            include: {
                NotificationRead: {
                    where: { userId },
                    select: { createdAt: true }
                }
            }
        })
    }

    async readNotification(userId: number, notificationId: number): Promise<void> {
        const exists = await this.prisma.notificationRead.findFirst({
            where: { userId, notificationId }
        })

        if (exists) return

        await this.prisma.notificationRead.create({
            data: {
                userId,
                notificationId,
                createdBy: userId
            }
        })
    }

    async readAllNotifications(userId: number): Promise<void> {
        const unreadNotifications = await this.prisma.notification.findMany({
            where: {
                OR: [{ userId }, { userId: null }],
                NotificationRead: {
                    none: { userId }
                }
            },
            select: { id: true }
        })

        if (unreadNotifications.length === 0) return

        await this.prisma.notificationRead.createMany({
            data: unreadNotifications.map((n) => ({
                userId,
                notificationId: n.id,
                createdBy: userId
            }))
        })
    }

    async deleteNotification(where: Prisma.NotificationWhereUniqueInput): Promise<void> {
        await this.prisma.notification.softDelete({ where })
    }
}
