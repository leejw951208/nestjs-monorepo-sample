import { Test, TestingModule } from '@nestjs/testing'
import { NotificationService } from './notification.service'
import { type ExtendedPrismaClient, PRISMA_CLIENT } from '@libs/prisma/prisma.factory'
import { NotificationRepository } from './notification.repository'
import { BaseException } from '@libs/common/exception/base.exception'
import { NotificationCursorRequestDto } from './dto/notification-cursor-request.dto'

describe('NotificationService', () => {
    let service: NotificationService
    let prisma: jest.Mocked<ExtendedPrismaClient>
    let repository: jest.Mocked<NotificationRepository>

    const mockPrisma = {
        notification: {
            findFirst: jest.fn(),
            findMany: jest.fn(),
            softDelete: jest.fn()
        },
        notificationRead: {
            findFirst: jest.fn(),
            findMany: jest.fn(),
            create: jest.fn(),
            createMany: jest.fn()
        }
    }

    const mockRepository = {
        findNotificationsCursor: jest.fn()
    }

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationService,
                { provide: PRISMA_CLIENT, useValue: mockPrisma },
                { provide: NotificationRepository, useValue: mockRepository }
            ]
        }).compile()

        service = module.get<NotificationService>(NotificationService)
        prisma = module.get(PRISMA_CLIENT)
        repository = module.get(NotificationRepository)
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })

    describe('getMyNotifications', () => {
        const userId = 1
        const searchCondition: NotificationCursorRequestDto = {
            size: 10,
            order: 'desc',
            lastCursor: undefined,
            isRead: undefined,
            type: undefined
        }

        it('should return notifications with read status', async () => {
            const mockItems = [
                { id: 1, userId: 1, title: 'Test 1', content: 'Content 1', type: 'SYSTEM', createdAt: new Date() },
                { id: 2, userId: 1, title: 'Test 2', content: 'Content 2', type: 'SYSTEM', createdAt: new Date() }
            ]
            const mockReads = [{ notificationId: 1, createdAt: new Date() }]

            mockRepository.findNotificationsCursor.mockResolvedValue({ items: mockItems, nextCursor: null })
            mockPrisma.notificationRead.findMany.mockResolvedValue(mockReads)

            const result = await service.getMyNotifications(searchCondition, userId)

            expect(result.data).toHaveLength(2)
            expect(result.data[0].isRead).toBe(true)
            expect(result.data[1].isRead).toBe(false)
            expect(mockRepository.findNotificationsCursor).toHaveBeenCalledWith(searchCondition, userId)
        })

        it('should return empty array when no notifications', async () => {
            mockRepository.findNotificationsCursor.mockResolvedValue({ items: [], nextCursor: null })
            mockPrisma.notificationRead.findMany.mockResolvedValue([])

            const result = await service.getMyNotifications(searchCondition, userId)

            expect(result.data).toHaveLength(0)
        })
    })

    describe('getNotification', () => {
        const userId = 1
        const notificationId = 1

        it('should return notification with read status', async () => {
            const mockNotification = { id: 1, userId: 1, title: 'Test', content: 'Content', type: 'SYSTEM', isDeleted: false }
            const mockRead = { notificationId: 1, createdAt: new Date() }

            mockPrisma.notification.findFirst.mockResolvedValue(mockNotification)
            mockPrisma.notificationRead.findFirst.mockResolvedValue(mockRead)

            const result = await service.getNotification(userId, notificationId)

            expect(result.isRead).toBe(true)
            expect(result.readAt).toBeDefined()
        })

        it('should return unread notification', async () => {
            const mockNotification = { id: 1, userId: 1, title: 'Test', content: 'Content', type: 'SYSTEM', isDeleted: false }

            mockPrisma.notification.findFirst.mockResolvedValue(mockNotification)
            mockPrisma.notificationRead.findFirst.mockResolvedValue(null)

            const result = await service.getNotification(userId, notificationId)

            expect(result.isRead).toBe(false)
            expect(result.readAt).toBeNull()
        })

        it('should throw exception if notification not found', async () => {
            mockPrisma.notification.findFirst.mockResolvedValue(null)

            await expect(service.getNotification(userId, 999)).rejects.toThrow(BaseException)
        })
    })

    describe('readNotification', () => {
        const userId = 1
        const notificationId = 1

        it('should create notification read record', async () => {
            const mockNotification = { id: 1, userId: 1, title: 'Test', content: 'Content', isDeleted: false }

            mockPrisma.notification.findFirst.mockResolvedValue(mockNotification)
            mockPrisma.notificationRead.findFirst.mockResolvedValue(null)
            mockPrisma.notificationRead.create.mockResolvedValue({})

            await service.readNotification(userId, notificationId)

            expect(mockPrisma.notificationRead.create).toHaveBeenCalledWith({
                data: { userId, notificationId }
            })
        })

        it('should not create duplicate read record', async () => {
            const mockNotification = { id: 1, userId: 1, title: 'Test', content: 'Content', isDeleted: false }
            const existingRead = { userId, notificationId, createdAt: new Date() }

            mockPrisma.notification.findFirst.mockResolvedValue(mockNotification)
            mockPrisma.notificationRead.findFirst.mockResolvedValue(existingRead)

            await service.readNotification(userId, notificationId)

            expect(mockPrisma.notificationRead.create).not.toHaveBeenCalled()
        })

        it('should throw exception if notification not found', async () => {
            mockPrisma.notification.findFirst.mockResolvedValue(null)

            await expect(service.readNotification(userId, 999)).rejects.toThrow(BaseException)
        })
    })

    describe('readAllNotifications', () => {
        const userId = 1

        it('should create read records for all unread notifications', async () => {
            const unreadNotifications = [{ id: 1 }, { id: 2 }, { id: 3 }]

            mockPrisma.notification.findMany.mockResolvedValue(unreadNotifications)
            mockPrisma.notificationRead.createMany.mockResolvedValue({ count: 3 })

            await service.readAllNotifications(userId)

            expect(mockPrisma.notificationRead.createMany).toHaveBeenCalledWith({
                data: [
                    { userId, notificationId: 1 },
                    { userId, notificationId: 2 },
                    { userId, notificationId: 3 }
                ]
            })
        })

        it('should not create any records when all notifications are read', async () => {
            mockPrisma.notification.findMany.mockResolvedValue([])

            await service.readAllNotifications(userId)

            expect(mockPrisma.notificationRead.createMany).not.toHaveBeenCalled()
        })
    })

    describe('deleteNotification', () => {
        const userId = 1
        const notificationId = 1

        it('should soft delete notification', async () => {
            const mockNotification = { id: 1, userId: 1, title: 'Test', content: 'Content', isDeleted: false }

            mockPrisma.notification.findFirst.mockResolvedValue(mockNotification)
            mockPrisma.notification.softDelete.mockResolvedValue({})

            await service.deleteNotification(userId, notificationId)

            expect(mockPrisma.notification.softDelete).toHaveBeenCalledWith({
                where: { id: notificationId }
            })
        })

        it('should throw exception if notification not found', async () => {
            mockPrisma.notification.findFirst.mockResolvedValue(null)

            await expect(service.deleteNotification(userId, 999)).rejects.toThrow(BaseException)
        })
    })
})
