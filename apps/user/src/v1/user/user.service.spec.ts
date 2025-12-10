import { Test, TestingModule } from '@nestjs/testing'
import { UserService } from './user.service'
import { type ExtendedPrismaClient, PRISMA_CLIENT } from '@libs/prisma/prisma.factory'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { UserStatus } from '@prisma/client'
import userEnvConfig from '../../config/env/user-env.config'
import { type ConfigType } from '@nestjs/config'
import { type JwtPayload } from '@libs/common/utils/jwt.util'
import { UserResponseDto } from './dto/user-response.dto'
import { UserUpdateDto } from './dto/user-update.dto'
import { BaseException } from '@libs/common/exception/base.exception'
import { USER_ERROR } from '@libs/common/exception/error.code'

describe('UserService', () => {
    let service: UserService
    let prisma: ExtendedPrismaClient

    const mockPrisma = {
        user: {
            findFirst: jest.fn(),
            update: jest.fn(),
            softDelete: jest.fn()
        }
    }

    const mockCacheManager = {}

    const mockUserEnvConfig: ConfigType<typeof userEnvConfig> = {
        // Add mock config properties if needed, currently empty as per usage in service
    } as any

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UserService,
                { provide: PRISMA_CLIENT, useValue: mockPrisma },
                { provide: CACHE_MANAGER, useValue: mockCacheManager },
                { provide: userEnvConfig.KEY, useValue: mockUserEnvConfig }
            ]
        }).compile()

        service = module.get<UserService>(UserService)
        prisma = module.get<ExtendedPrismaClient>(PRISMA_CLIENT)
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })

    describe('getMe', () => {
        it('should return user info', async () => {
            const payload: JwtPayload = { id: 1, type: 'ac', aud: 'api', jti: 'jti', issuer: 'monorepo' }
            const user = {
                id: 1,
                email: 'test@example.com',
                loginId: 'testuser',
                name: 'Test User',
                status: UserStatus.ACTIVE,
                createdAt: new Date(),
                updatedAt: new Date()
            }

            mockPrisma.user.findFirst.mockResolvedValue(user)

            const result = await service.getMe(payload)

            expect(prisma.user.findFirst).toHaveBeenCalledWith({ where: { id: payload.id } })
            expect(result).toBeInstanceOf(UserResponseDto)
            expect(result.id).toBe(user.id)
        })
    })

    describe('updateMe', () => {
        it('should update user info', async () => {
            const payload: JwtPayload = { id: 1, type: 'ac', aud: 'api', jti: 'jti', issuer: 'monorepo' }
            const updateDto: UserUpdateDto = {
                email: 'updated@example.com'
            }
            const updatedUser = {
                id: 1,
                ...updateDto
            }

            mockPrisma.user.update.mockResolvedValue(updatedUser)

            await service.updateMe(payload, updateDto)

            expect(prisma.user.update).toHaveBeenCalledWith({ where: { id: payload.id }, data: updateDto })
        })

        it('should throw exception if user not found (update failed)', async () => {
            const payload: JwtPayload = { id: 1, type: 'ac', aud: 'api', jti: 'jti', issuer: 'monorepo' }
            const updateDto: UserUpdateDto = {
                email: 'updated@example.com'
            }

            mockPrisma.user.update.mockResolvedValue(null)

            await expect(service.updateMe(payload, updateDto)).rejects.toThrow(BaseException)
            await expect(service.updateMe(payload, updateDto)).rejects.toThrow(USER_ERROR.NOT_FOUND.message)
        })
    })

    describe('deleteMe', () => {
        it('should successfully soft delete user', async () => {
            const payload: JwtPayload = { id: 1, type: 'ac', aud: 'api', jti: 'jti', issuer: 'monorepo' }
            const user = {
                id: 1,
                email: 'test@example.com',
                loginId: 'testuser',
                name: 'Test User',
                status: UserStatus.ACTIVE,
                isDeleted: false,
                deletedAt: null,
                createdAt: new Date(),
                updatedAt: new Date()
            }

            mockPrisma.user.findFirst.mockResolvedValue(user)
            mockPrisma.user.softDelete.mockResolvedValue(undefined)

            await service.deleteMe(payload)

            expect(prisma.user.findFirst).toHaveBeenCalledWith({ where: { id: payload.id } })
            expect(prisma.user.softDelete).toHaveBeenCalledWith({ where: { id: payload.id } })
        })

        it('should throw exception if user not found', async () => {
            const payload: JwtPayload = { id: 1, type: 'ac', aud: 'api', jti: 'jti', issuer: 'monorepo' }

            mockPrisma.user.findFirst.mockResolvedValue(null)

            await expect(service.deleteMe(payload)).rejects.toThrow(BaseException)
            await expect(service.deleteMe(payload)).rejects.toThrow(USER_ERROR.NOT_FOUND.message)
        })

        it('should throw exception if user is already deleted', async () => {
            const payload: JwtPayload = { id: 1, type: 'ac', aud: 'api', jti: 'jti', issuer: 'monorepo' }
            const deletedUser = {
                id: 1,
                email: 'test@example.com',
                loginId: 'testuser',
                name: 'Test User',
                status: UserStatus.ACTIVE,
                isDeleted: true,
                deletedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date()
            }

            mockPrisma.user.findFirst.mockResolvedValue(deletedUser)

            await expect(service.deleteMe(payload)).rejects.toThrow(BaseException)
            await expect(service.deleteMe(payload)).rejects.toThrow(USER_ERROR.ALREADY_DELETED.message)
        })
    })
})
