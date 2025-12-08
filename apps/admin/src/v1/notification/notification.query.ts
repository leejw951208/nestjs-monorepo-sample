import { type ExtendedPrismaClient, PRISMA_CLIENT } from '@libs/prisma/prisma.factory'
import { Inject, Injectable } from '@nestjs/common'
import { NotificationType, Owner, Prisma } from '@prisma/client'

interface NotificationsOffsetParams {
    pagination: {
        page: number
        size: number
        order?: 'asc' | 'desc'
    }
    searchCondition: {
        userId?: number
        type?: NotificationType
        keyword?: string
    }
}

@Injectable()
export class NotificationQuery {
    constructor(@Inject(PRISMA_CLIENT) private readonly prisma: ExtendedPrismaClient) {}

    async createNotification(data: Prisma.NotificationCreateInput): Promise<void> {
        await this.prisma.notification.create({ data })
    }

    async getNotifications(params: NotificationsOffsetParams) {
        const { pagination, searchCondition } = params

        const [totalCount, items] = await Promise.all([
            this.prisma.notification.count({ where: searchCondition }),
            this.prisma.notification.findMany({
                where: searchCondition,
                skip: (pagination.page - 1) * pagination.size,
                take: pagination.size,
                orderBy: { id: pagination.order ?? 'desc' }
            })
        ])

        return { totalCount, items }
    }
}
