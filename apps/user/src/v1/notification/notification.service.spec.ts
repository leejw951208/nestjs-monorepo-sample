import { Test, TestingModule } from '@nestjs/testing'
import { NotificationService } from './notification.service'
import { ExtendedPrismaClient, PRISMA_CLIENT } from '@libs/prisma/prisma.factory'
import { NotificationQuery } from './notification.query'
import { BaseException } from '@libs/common/exception/base.exception'
import { NOTIFICATION_ERROR } from '@libs/common/exception/error.code'
import { NotificationCursorPaginationReqDto } from './dto/notification-cursor-pagination-req.dto'
import { JwtPayload } from '@libs/common/utils/jwt.util'

describe('NotificationService', () => {
    let service: NotificationService
    let prisma: ExtendedPrismaClient
    let notificationQuery: NotificationQuery

    const mockPrisma = {
        notification: {
            findFirst: jest.fn(),
            update: jest.fn(),
            updateMany: jest.fn(),
            delete: jest.fn()
        }
    }

    const mockNotificationQuery = {
        getNotificationsCursor: jest.fn()
    }

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationService,
                { provide: PRISMA_CLIENT, useValue: mockPrisma },
                { provide: NotificationQuery, useValue: mockNotificationQuery }
            ]
        }).compile()

        service = module.get<NotificationService>(NotificationService)
        prisma = module.get<ExtendedPrismaClient>(PRISMA_CLIENT)
        notificationQuery = module.get<NotificationQuery>(NotificationQuery)
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })

    describe('getMyNotifications', () => {
        it('should successfully get user notifications', async () => {
            const payload = { id: 1, jti: 'test-jti', type: 'ac' } as JwtPayload
            const searchCondition: NotificationCursorPaginationReqDto = {
                size: 10,
                order: 'desc',
                lastCursor: undefined,
                isRead: undefined,
                type: undefined
            }
            const mockItems = [
                {
                    id: 1,
                    userId: 1,
                    type: 'SYSTEM',
                    title: 'Test Notification',
                    content: 'Test Content',
                    isRead: false,
                    readAt: null,
                    createdAt: new Date()
                }
            ]
            const mockNextCursor = null

            mockNotificationQuery.getNotificationsCursor.mockResolvedValue({
                items: mockItems,
                nextCursor: mockNextCursor
            })

            const result = await service.getMyNotifications(payload, searchCondition)

            expect(result.data).toBeDefined()
            expect(result.nextCursor).toBe(mockNextCursor)
            expect(mockNotificationQuery.getNotificationsCursor).toHaveBeenCalledWith(payload.id, searchCondition)
        })
    })

    describe('getNotification', () => {
        it('should successfully get notification by id', async () => {
            const payload = { id: 1, jti: 'test-jti', type: 'ac' } as JwtPayload
            const notificationId = 1
            const notification = {
                id: notificationId,
                userId: payload.id,
                type: 'SYSTEM',
                title: 'Test',
                content: 'Test',
                isRead: false,
                readAt: null
            }

            mockPrisma.notification.findFirst.mockResolvedValue(notification)

            const result = await service.getNotification(payload, notificationId)

            expect(result).toBeDefined()
            expect(mockPrisma.notification.findFirst).toHaveBeenCalledWith({
                where: { id: notificationId, userId: payload.id }
            })
        })

        it('should throw exception if notification not found', async () => {
            const payload = { id: 1, jti: 'test-jti', type: 'ac' } as JwtPayload
            const notificationId = 999

            mockPrisma.notification.findFirst.mockResolvedValue(null)

            await expect(service.getNotification(payload, notificationId)).rejects.toThrow(BaseException)
        })
    })

    describe('updateNotification', () => {
        it('should successfully update notification', async () => {
            const payload = { id: 1, jti: 'test-jti', type: 'ac' } as JwtPayload
            const notificationId = 1
            const notification = {
                id: notificationId,
                userId: payload.id,
                type: 'SYSTEM',
                title: 'Test',
                content: 'Test',
                isRead: false,
                readAt: null
            }

            mockPrisma.notification.findFirst.mockResolvedValue(notification)
            mockPrisma.notification.update.mockResolvedValue({
                ...notification,
                isRead: true,
                readAt: new Date()
            })

            await service.updateNotification(payload, notificationId, { isRead: true })

            expect(mockPrisma.notification.findFirst).toHaveBeenCalledWith({
                where: { id: notificationId, userId: payload.id }
            })
            expect(mockPrisma.notification.update).toHaveBeenCalled()
        })

        it('should throw exception if notification not found', async () => {
            const payload = { id: 1, jti: 'test-jti', type: 'ac' } as JwtPayload
            const notificationId = 999

            mockPrisma.notification.findFirst.mockResolvedValue(null)

            await expect(service.updateNotification(payload, notificationId, { isRead: true })).rejects.toThrow(BaseException)
        })
    })

    describe('deleteNotification', () => {
        it('should successfully delete notification', async () => {
            const payload = { id: 1, jti: 'test-jti', type: 'ac' } as JwtPayload
            const notificationId = 1
            const notification = {
                id: notificationId,
                userId: payload.id
            }

            mockPrisma.notification.findFirst.mockResolvedValue(notification)
            mockPrisma.notification.delete = jest.fn().mockResolvedValue(notification)

            await service.deleteNotification(payload, notificationId)

            expect(mockPrisma.notification.delete).toHaveBeenCalledWith({
                where: { id: notificationId }
            })
        })

        it('should throw exception if notification not found', async () => {
            const payload = { id: 1, jti: 'test-jti', type: 'ac' } as JwtPayload
            const notificationId = 999

            mockPrisma.notification.findFirst.mockResolvedValue(null)

            await expect(service.deleteNotification(payload, notificationId)).rejects.toThrow(BaseException)
        })
    })

    describe('bulkUpdateNotifications', () => {
        it('should successfully mark all unread notifications as read', async () => {
            const payload = { id: 1, jti: 'test-jti', type: 'ac' } as JwtPayload

            mockPrisma.notification.updateMany.mockResolvedValue({ count: 5 })

            const result = await service.bulkUpdateNotifications(payload, { isRead: true })

            expect(result.updatedCount).toBe(5)
            expect(mockPrisma.notification.updateMany).toHaveBeenCalled()
        })

        it('should handle case with no unread notifications', async () => {
            const payload = { id: 1, jti: 'test-jti', type: 'ac' } as JwtPayload

            mockPrisma.notification.updateMany.mockResolvedValue({ count: 0 })

            const result = await service.bulkUpdateNotifications(payload, { isRead: true })

            expect(result.updatedCount).toBe(0)
            expect(mockPrisma.notification.updateMany).toHaveBeenCalled()
        })

        it('should update specific notifications by ids', async () => {
            const payload = { id: 1, jti: 'test-jti', type: 'ac' } as JwtPayload
            const ids = [1, 2, 3]

            mockPrisma.notification.updateMany.mockResolvedValue({ count: 3 })

            const result = await service.bulkUpdateNotifications(payload, { isRead: true, ids })

            expect(result.updatedCount).toBe(3)
            expect(mockPrisma.notification.updateMany).toHaveBeenCalled()
        })
    })
})
