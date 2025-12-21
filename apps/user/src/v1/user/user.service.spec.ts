import { Test, TestingModule } from '@nestjs/testing'
import { UserService } from './user.service'
import { PrismaService, UserStatus } from '@libs/prisma/index'
import { UserResponseDto } from './dto/user-response.dto'
import { UserUpdateDto } from './dto/user-update.dto'
import { BaseException } from '@libs/common/exception/base.exception'
import { USER_ERROR } from '@libs/common/exception/error.code'
import { ClsService } from 'nestjs-cls'

describe('UserService', () => {
    let service: UserService

    const mockPrisma = {
        user: {
            findFirst: jest.fn(),
            update: jest.fn()
        }
    }

    const mockClsService = {
        get: jest.fn()
    }

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UserService, { provide: PrismaService, useValue: mockPrisma }, { provide: ClsService, useValue: mockClsService }]
        }).compile()

        service = module.get<UserService>(UserService)
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })

    describe('getMe', () => {
        it('should return user info', async () => {
            const userId = 1
            const user = {
                id: userId,
                email: 'test@example.com',
                name: 'Test User',
                status: UserStatus.ACTIVE,
                createdAt: new Date(),
                updatedAt: new Date()
            }

            mockPrisma.user.findFirst.mockResolvedValue(user)

            const result = await service.getMe(userId)

            expect(mockPrisma.user.findFirst).toHaveBeenCalledWith({ where: { id: userId, isDeleted: false } })
            expect(result).toBeInstanceOf(UserResponseDto)
            expect(result.id).toBe(user.id)
        })

        it('should throw exception if user not found', async () => {
            const userId = 1

            mockPrisma.user.findFirst.mockResolvedValue(null)

            await expect(service.getMe(userId)).rejects.toThrow(BaseException)
            await expect(service.getMe(userId)).rejects.toThrow(USER_ERROR.NOT_FOUND.message)
        })
    })

    describe('updateMe', () => {
        it('should update user info', async () => {
            const userId = 1
            const updateDto: UserUpdateDto = {
                email: 'updated@example.com',
                phone: '01012345678'
            }
            const user = {
                id: userId,
                email: 'test@example.com',
                name: 'Test User'
            }
            const updatedUser = {
                ...user,
                ...updateDto
            }

            mockClsService.get.mockReturnValue(userId)
            mockPrisma.user.findFirst.mockResolvedValue(user)
            mockPrisma.user.update.mockResolvedValue(updatedUser)

            await service.updateMe(userId, updateDto)

            expect(mockPrisma.user.findFirst).toHaveBeenCalledWith({ where: { id: userId, isDeleted: false } })
            expect(mockPrisma.user.update).toHaveBeenCalledWith({
                where: { id: userId },
                data: { ...updateDto, updatedBy: userId }
            })
        })

        it('should throw exception if user not found', async () => {
            const userId = 1
            const updateDto: UserUpdateDto = {
                email: 'updated@example.com',
                phone: '01012345678'
            }

            mockPrisma.user.findFirst.mockResolvedValue(null)

            await expect(service.updateMe(userId, updateDto)).rejects.toThrow(BaseException)
            await expect(service.updateMe(userId, updateDto)).rejects.toThrow(USER_ERROR.NOT_FOUND.message)
        })
    })

    describe('withdraw', () => {
        it('should successfully withdraw user', async () => {
            const userId = 1
            const user = {
                id: userId,
                email: 'test@example.com',
                name: 'Test User',
                status: UserStatus.ACTIVE,
                isDeleted: false,
                deletedAt: null,
                createdAt: new Date(),
                updatedAt: new Date()
            }

            mockClsService.get.mockReturnValue(userId)
            mockPrisma.user.findFirst.mockResolvedValue(user)
            mockPrisma.user.update.mockResolvedValue({ ...user, status: UserStatus.WITHDRAWN, isDeleted: true })

            await service.withdraw(userId)

            expect(mockPrisma.user.findFirst).toHaveBeenCalledWith({ where: { id: userId, isDeleted: false } })
            expect(mockPrisma.user.update).toHaveBeenCalledWith({
                where: { id: userId },
                data: {
                    status: UserStatus.WITHDRAWN,
                    isDeleted: true,
                    deletedAt: expect.any(Date),
                    deletedBy: userId,
                    updatedBy: userId
                }
            })
        })

        it('should throw exception if user not found', async () => {
            const userId = 1

            mockPrisma.user.findFirst.mockResolvedValue(null)

            await expect(service.withdraw(userId)).rejects.toThrow(BaseException)
            await expect(service.withdraw(userId)).rejects.toThrow(USER_ERROR.NOT_FOUND.message)
        })

        it('should throw exception if user is already deleted', async () => {
            const userId = 1
            const deletedUser = {
                id: userId,
                email: 'test@example.com',
                name: 'Test User',
                status: UserStatus.ACTIVE,
                isDeleted: true,
                deletedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date()
            }

            mockPrisma.user.findFirst.mockResolvedValue(deletedUser)

            await expect(service.withdraw(userId)).rejects.toThrow(BaseException)
            await expect(service.withdraw(userId)).rejects.toThrow(USER_ERROR.ALREADY_DELETED.message)
        })
    })
})
