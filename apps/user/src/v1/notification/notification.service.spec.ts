import { Test, TestingModule } from '@nestjs/testing'
import { NotificationService } from './notification.service'
import { type ExtendedPrismaClient, PRISMA_CLIENT } from '@libs/prisma/prisma.factory'
import { NotificationRepository } from './notification.repository'
import { BaseException } from '@libs/common/exception/base.exception'
import { NotificationPaginationRequestDto } from './dto/notification-pagination-request.dto'
import { type JwtPayload } from '@libs/common/util/jwt.util'

describe('NotificationService', () => {
    let service: NotificationService
    let prisma: ExtendedPrismaClient
    let notificationQuery: NotificationRepository

    const mockPrisma = {
        notification: {
            findFirst: jest.fn(),
            update: jest.fn(),
            updateMany: jest.fn(),
            delete: jest.fn()
        }
    }

    const mockNotificationQuery = {
        getNotifications: jest.fn(),
        getNotification: jest.fn(),
        readNotification: jest.fn(),
        readAllNotifications: jest.fn(),
        deleteNotification: jest.fn()
    }

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationService,
                { provide: PRISMA_CLIENT, useValue: mockPrisma },
                { provide: NotificationRepository, useValue: mockNotificationQuery }
            ]
        }).compile()

        service = module.get<NotificationService>(NotificationService)
        prisma = module.get<ExtendedPrismaClient>(PRISMA_CLIENT)
        notificationQuery = module.get<NotificationRepository>(NotificationRepository)
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
            const searchCondition: NotificationPaginationRequestDto = {
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
                    createdAt: new Date(),
                    NotificationRead: []
                }
            ]
            const mockNextCursor = null

            mockNotificationQuery.getNotifications.mockResolvedValue({
                items: mockItems,
                nextCursor: mockNextCursor
            })

            const result = await service.getMyNotifications(payload.id, searchCondition)

            expect(result.data).toBeDefined()
            expect(result.data[0].isRead).toBe(false)
            expect(result.nextCursor).toBe(mockNextCursor)
            expect(mockNotificationQuery.getNotifications).toHaveBeenCalledWith({
                pagination: { lastCursor: searchCondition.lastCursor, size: searchCondition.size, order: searchCondition.order },
                searchCondition: { userId: payload.id, isRead: searchCondition.isRead, type: searchCondition.type }
            })
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
                NotificationRead: []
            }

            mockNotificationQuery.getNotification.mockResolvedValue(notification)

            const result = await service.getNotification(payload.id, notificationId)

            expect(result).toBeDefined()
            expect(result.isRead).toBe(false)
            expect(mockNotificationQuery.getNotification).toHaveBeenCalledWith(notificationId, payload.id)
        })

        it('should throw exception if notification not found', async () => {
            const payload = { id: 1, jti: 'test-jti', type: 'ac' } as JwtPayload
            const notificationId = 999

            mockNotificationQuery.getNotification.mockResolvedValue(null)

            await expect(service.getNotification(payload.id, notificationId)).rejects.toThrow(BaseException)
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
                NotificationRead: []
            }

            mockNotificationQuery.getNotification.mockResolvedValue(notification)
            mockNotificationQuery.readNotification.mockResolvedValue(undefined)

            await service.updateNotification(payload.id, notificationId)

            expect(mockNotificationQuery.getNotification).toHaveBeenCalledWith(notificationId, payload.id)
            expect(mockNotificationQuery.readNotification).toHaveBeenCalledWith(payload.id, notificationId)
        })

        it('should throw exception if notification not found', async () => {
            const payload = { id: 1, jti: 'test-jti', type: 'ac' } as JwtPayload
            const notificationId = 999

            mockNotificationQuery.getNotification.mockResolvedValue(null)

            await expect(service.updateNotification(payload.id, notificationId)).rejects.toThrow(BaseException)
        })
    })

    describe('bulkUpdateNotifications', () => {
        it('should successfully mark all unread notifications as read', async () => {
            const payload = { id: 1, jti: 'test-jti', type: 'ac' } as JwtPayload

            mockNotificationQuery.readAllNotifications.mockResolvedValue(undefined)

            await service.bulkUpdateNotifications(payload.id)

            expect(mockNotificationQuery.readAllNotifications).toHaveBeenCalledWith(payload.id)
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

            mockNotificationQuery.getNotification.mockResolvedValue(notification)
            mockNotificationQuery.deleteNotification.mockResolvedValue(undefined)

            await service.deleteNotification(payload.id, notificationId)

            expect(mockNotificationQuery.deleteNotification).toHaveBeenCalledWith({ id: notificationId })
        })

        it('should throw exception if notification not found', async () => {
            const payload = { id: 1, jti: 'test-jti', type: 'ac' } as JwtPayload
            const notificationId = 999

            mockNotificationQuery.getNotification.mockResolvedValue(null)

            await expect(service.deleteNotification(payload.id, notificationId)).rejects.toThrow(BaseException)
        })
    })
})
