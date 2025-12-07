import { ExtendedPrismaClient, PRISMA_CLIENT } from '@libs/prisma/prisma.factory'
import { Inject, Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { NotificationCursorPaginationReqDto } from './dto/notification-cursor-pagination-req.dto'

@Injectable()
export class NotificationQuery {
    constructor(@Inject(PRISMA_CLIENT) private readonly prisma: ExtendedPrismaClient) {}

    async getNotificationsCursor(userId: number, searchCondition: NotificationCursorPaginationReqDto) {
        const order = searchCondition.order === 'asc' ? 'asc' : 'desc'

        // Cursor 조건: lastCursor가 있으면 해당 ID 이후/이전 데이터 조회
        const cursorCondition: Prisma.NotificationWhereInput = searchCondition.lastCursor
            ? order === 'desc'
                ? { id: { lt: searchCondition.lastCursor } }
                : { id: { gt: searchCondition.lastCursor } }
            : {}

        const where: Prisma.NotificationWhereInput = {
            userId,
            ...(searchCondition.isRead !== undefined && { isRead: searchCondition.isRead }),
            ...(searchCondition.type && { type: searchCondition.type }),
            ...cursorCondition
        }

        // size + 1개 조회하여 다음 페이지 존재 여부 확인
        const items = await this.prisma.notification.findMany({
            where,
            orderBy: { id: order },
            take: searchCondition.size + 1
        })

        // 다음 페이지가 있는지 확인
        const hasMore = items.length > searchCondition.size
        const data = hasMore ? items.slice(0, searchCondition.size) : items
        const nextCursor = hasMore && data.length > 0 ? data[data.length - 1].id : null

        return { items: data, nextCursor }
    }
}
