import { Test, TestingModule } from '@nestjs/testing'
import { NotificationService } from './notification.service'
import { PrismaService } from '@libs/prisma'
import { NotificationRepository } from './notification.repository'
import { BaseException } from '@libs/common/exception/base.exception'
import { NotificationCursorRequestDto } from './dto/notification-cursor-request.dto'
import { ClsService } from 'nestjs-cls'

describe('NotificationService', () => {
    let service: NotificationService

    const mockPrisma = {
        notification: {
            findFirst: jest.fn(),
            findMany: jest.fn(),
            update: jest.fn()
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

    const mockClsService = {
        get: jest.fn()
    }

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationService,
                { provide: PrismaService, useValue: mockPrisma },
                { provide: NotificationRepository, useValue: mockRepository },
                { provide: ClsService, useValue: mockClsService }
            ]
        }).compile()

        service = module.get<NotificationService>(NotificationService)
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

            mockClsService.get.mockReturnValue(userId)
            mockPrisma.notification.findFirst.mockResolvedValue(mockNotification)
            mockPrisma.notificationRead.findFirst.mockResolvedValue(null)
            mockPrisma.notificationRead.create.mockResolvedValue({})

            await service.readNotification(userId, notificationId)

            expect(mockPrisma.notificationRead.create).toHaveBeenCalledWith({
                data: { userId, notificationId, createdBy: userId }
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

            mockClsService.get.mockReturnValue(userId)
            mockPrisma.notification.findMany.mockResolvedValue(unreadNotifications)
            mockPrisma.notificationRead.createMany.mockResolvedValue({ count: 3 })

            await service.readAllNotifications(userId)

            expect(mockPrisma.notificationRead.createMany).toHaveBeenCalledWith({
                data: [
                    { userId, notificationId: 1, createdBy: userId },
                    { userId, notificationId: 2, createdBy: userId },
                    { userId, notificationId: 3, createdBy: userId }
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

            mockClsService.get.mockReturnValue(userId)
            mockPrisma.notification.findFirst.mockResolvedValue(mockNotification)
            mockPrisma.notification.update.mockResolvedValue({})

            await service.deleteNotification(userId, notificationId)

            expect(mockPrisma.notification.update).toHaveBeenCalledWith({
                where: { id: notificationId },
                data: {
                    isDeleted: true,
                    deletedAt: expect.any(Date),
                    deletedBy: userId,
                    updatedBy: userId
                }
            })
        })

        it('should throw exception if notification not found', async () => {
            mockPrisma.notification.findFirst.mockResolvedValue(null)

            await expect(service.deleteNotification(userId, 999)).rejects.toThrow(BaseException)
        })
    })
})
