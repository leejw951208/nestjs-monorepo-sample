import { Injectable } from '@nestjs/common'
import { NotificationCursorRequestDto } from './dto/notification-cursor-request.dto'
import { Notification, Prisma, PrismaService } from '@libs/prisma/index'

export type NotificationCursorResponse = {
    items: Notification[]
    nextCursor: number | null
}

@Injectable()
export class NotificationRepository {
    constructor(private readonly prisma: PrismaService) {}

    async findNotificationsCursor(searchCondition: NotificationCursorRequestDto, userId: number): Promise<NotificationCursorResponse> {
        const { lastCursor, size, order = 'desc', isRead, type } = searchCondition

        const where: Prisma.NotificationWhereInput = {
            isDeleted: false,
            OR: [{ userId }, { userId: null }],
            ...(isRead === true && { notificationReads: { some: { userId } } }),
            ...(isRead === false && { notificationReads: { none: { userId } } }),
            ...(type && { type }),
            ...(lastCursor && {
                id: order === 'asc' ? { gt: lastCursor } : { lt: lastCursor }
            })
        }

        const items = await this.prisma.notification.findMany({
            where,
            orderBy: { id: order },
            take: size + 1
        })

        const hasNext = items.length > size
        if (hasNext) items.pop()

        const nextCursor = hasNext && items.length > 0 ? items[items.length - 1].id : null

        return { items, nextCursor }
    }
}
