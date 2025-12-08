import { Test, TestingModule } from '@nestjs/testing'
import { NotificationType } from '@prisma/client'
import { CreateNotificationReqDto } from './dto/notification-create-req.dto'
import { NotificationPaginationReqDto } from './dto/notification-pagination-req.dto'
import { NotificationQuery } from './notification.query'
import { NotificationService } from './notification.service'

describe('NotificationService', () => {
    let service: NotificationService
    let notificationQuery: NotificationQuery

    const mockNotificationQuery = {
        createNotification: jest.fn(),
        getNotifications: jest.fn()
    }

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [NotificationService, { provide: NotificationQuery, useValue: mockNotificationQuery }]
        }).compile()

        service = module.get<NotificationService>(NotificationService)
        notificationQuery = module.get<NotificationQuery>(NotificationQuery)
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })

    describe('createNotification', () => {
        it('should create notification successfully', async () => {
            const adminId = 1
            const dto: CreateNotificationReqDto = {
                title: 'Test',
                content: 'Test Content',
                type: NotificationType.SYSTEM
            }

            mockNotificationQuery.createNotification.mockResolvedValue({})

            await service.createNotification(adminId, dto)

            expect(mockNotificationQuery.createNotification).toHaveBeenCalledWith({
                title: dto.title,
                content: dto.content,
                type: dto.type,
                createdBy: adminId
            })
        })
    })

    describe('getNotifications', () => {
        it('should return list of notifications', async () => {
            const dto: NotificationPaginationReqDto = {
                page: 1,
                size: 10,
                order: 'desc'
            }

            const mockData = {
                totalCount: 1,
                items: [
                    {
                        id: 1,
                        userId: null,
                        adminId: null,
                        title: 'Test',
                        content: 'Content',
                        type: NotificationType.SYSTEM,
                        createdAt: new Date(),
                        createdBy: 1
                    }
                ]
            }

            mockNotificationQuery.getNotifications.mockResolvedValue(mockData)

            const result = await service.getNotifications(dto)

            expect(result.data).toHaveLength(1)
            expect(result.totalCount).toBe(1)
            expect(mockNotificationQuery.getNotifications).toHaveBeenCalledWith({
                pagination: { page: dto.page, size: dto.size, order: dto.order },
                searchCondition: { userId: dto.userId, type: dto.type, keyword: dto.keyword }
            })
        })
    })
})
