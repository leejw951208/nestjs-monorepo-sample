import { NotificationType } from '@prisma/client'

export class NotificationModel {
    static create(data: { userId: number; title: string; content: string; type: NotificationType }) {
        return {
            ...data,
            isRead: false,
            readAt: null,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    }
}
