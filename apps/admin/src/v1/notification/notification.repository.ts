import { NotificationType, Prisma, PrismaService } from '@libs/prisma'
import { Injectable } from '@nestjs/common'

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
export class NotificationRepository {
    constructor(private readonly prisma: PrismaService) {}

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
