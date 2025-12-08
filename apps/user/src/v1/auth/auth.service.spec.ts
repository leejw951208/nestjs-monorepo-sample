import { Test, TestingModule } from '@nestjs/testing'
import { AuthService } from './auth.service'
import { type ExtendedPrismaClient, PRISMA_CLIENT } from '@libs/prisma/prisma.factory'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { BcryptUtil } from '@libs/common/utils/bcrypt.util'
import { JwtUtil } from '@libs/common/utils/jwt.util'
import { ClsService } from 'nestjs-cls'
import { BaseException } from '@libs/common/exception/base.exception'
import { USER_ERROR } from '@libs/common/exception/error.code'
import { ResetPasswordReqDto } from './dto/reset-password-req.dto'
import { UserStatus } from '@prisma/client'

describe('AuthService', () => {
    let service: AuthService
    let prisma: ExtendedPrismaClient
    let bcryptUtil: BcryptUtil

    const mockPrisma = {
        user: {
            findFirst: jest.fn(),
            findMany: jest.fn(),
            create: jest.fn(),
            update: jest.fn()
        }
    }

    const mockCacheManager = {
        get: jest.fn(),
        set: jest.fn(),
        del: jest.fn()
    }

    const mockBcryptUtil = {
        hash: jest.fn(),
        compare: jest.fn()
    }

    const mockJwtUtil = {
        createAccessToken: jest.fn(),
        createRefreshToken: jest.fn(),
        verify: jest.fn()
    }

    const mockClsService = {}

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AuthService,
                { provide: PRISMA_CLIENT, useValue: mockPrisma },
                { provide: CACHE_MANAGER, useValue: mockCacheManager },
                { provide: BcryptUtil, useValue: mockBcryptUtil },
                { provide: JwtUtil, useValue: mockJwtUtil },
                { provide: ClsService, useValue: mockClsService }
            ]
        }).compile()

        service = module.get<AuthService>(AuthService)
        prisma = module.get<ExtendedPrismaClient>(PRISMA_CLIENT)
        bcryptUtil = module.get<BcryptUtil>(BcryptUtil)
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })

    describe('signup', () => {
        it('should successfully create a new user', async () => {
            const reqDto = {
                loginId: 'newuser',
                email: 'newuser@example.com',
                password: 'password123',
                name: 'New User',
                phone: '01012345678'
            }
            const hashedPassword = 'hashedpassword123'

            mockPrisma.user.findMany.mockResolvedValue([])
            mockBcryptUtil.hash.mockResolvedValue(hashedPassword)
            mockPrisma.user.create.mockResolvedValue({
                id: 1,
                ...reqDto,
                password: hashedPassword,
                status: UserStatus.ACTIVE
            })

            await service.signup(reqDto)

            expect(prisma.user.findMany).toHaveBeenCalledWith({
                where: { OR: [{ loginId: reqDto.loginId }, { email: reqDto.email }] },
                select: { loginId: true, email: true },
                take: 2
            })
            expect(bcryptUtil.hash).toHaveBeenCalledWith(reqDto.password)
            expect(prisma.user.create).toHaveBeenCalled()
        })

        it('should throw exception if loginId already exists', async () => {
            const reqDto = {
                loginId: 'existinguser',
                email: 'newuser@example.com',
                password: 'password123',
                name: 'New User',
                phone: '01012345678'
            }

            mockPrisma.user.findMany.mockResolvedValue([{ loginId: 'existinguser', email: 'other@example.com' }])

            await expect(service.signup(reqDto)).rejects.toThrow(BaseException)
            await expect(service.signup(reqDto)).rejects.toThrow(USER_ERROR.ALREADY_EXISTS_LOGIN_ID.message)
        })

        it('should throw exception if email already exists', async () => {
            const reqDto = {
                loginId: 'newuser',
                email: 'existing@example.com',
                password: 'password123',
                name: 'New User',
                phone: '01012345678'
            }

            mockPrisma.user.findMany.mockResolvedValue([{ loginId: 'otheruser', email: 'existing@example.com' }])

            await expect(service.signup(reqDto)).rejects.toThrow(BaseException)
            await expect(service.signup(reqDto)).rejects.toThrow(USER_ERROR.ALREADY_EXISTS_EMAIL.message)
        })
    })

    describe('signin', () => {
        it('should successfully sign in and return tokens', async () => {
            const reqDto = { loginId: 'testuser', password: 'password123' }
            const user = {
                id: 1,
                loginId: 'testuser',
                password: 'hashedpassword',
                email: 'test@example.com',
                name: 'Test User',
                phone: '01012345678',
                status: UserStatus.ACTIVE
            }
            const accessToken = 'access-token'
            const refreshToken = 'refresh-token'
            const hashedRefreshToken = 'hashed-refresh-token'

            mockPrisma.user.findFirst.mockResolvedValue(user)
            mockBcryptUtil.compare.mockResolvedValue(true)
            mockJwtUtil.createAccessToken.mockResolvedValue(accessToken)
            mockJwtUtil.createRefreshToken.mockResolvedValue(refreshToken)
            mockBcryptUtil.hash.mockResolvedValue(hashedRefreshToken)
            mockCacheManager.set.mockResolvedValue(undefined)

            const result = await service.signin(reqDto)

            expect(result.resDto.accessToken).toBe(accessToken)
            expect(result.refreshToken).toBe(refreshToken)
            expect(prisma.user.findFirst).toHaveBeenCalledWith({ where: { loginId: reqDto.loginId } })
            expect(bcryptUtil.compare).toHaveBeenCalledWith(reqDto.password, user.password)
            expect(mockCacheManager.set).toHaveBeenCalled()
        })

        it('should throw exception if user not found', async () => {
            const reqDto = { loginId: 'nonexistent', password: 'password123' }

            mockPrisma.user.findFirst.mockResolvedValue(null)

            await expect(service.signin(reqDto)).rejects.toThrow(BaseException)
            await expect(service.signin(reqDto)).rejects.toThrow(USER_ERROR.NOT_FOUND.message)
        })

        it('should throw exception if password does not match', async () => {
            const reqDto = { loginId: 'testuser', password: 'wrongpassword' }
            const user = {
                id: 1,
                loginId: 'testuser',
                password: 'hashedpassword',
                email: 'test@example.com'
            }

            mockPrisma.user.findFirst.mockResolvedValue(user)
            mockBcryptUtil.compare.mockResolvedValue(false)

            await expect(service.signin(reqDto)).rejects.toThrow(BaseException)
        })
    })

    describe('signout', () => {
        it('should successfully sign out and delete refresh token from cache', async () => {
            const refreshToken = 'valid-refresh-token'
            const payload = { id: 1, jti: 'test-jti', type: 'rf' }
            const user = {
                id: 1,
                loginId: 'testuser',
                email: 'test@example.com'
            }

            mockJwtUtil.verify.mockResolvedValue(payload)
            mockPrisma.user.findFirst.mockResolvedValue(user)
            mockCacheManager.del.mockResolvedValue(undefined)

            await service.signout(refreshToken)

            expect(mockJwtUtil.verify).toHaveBeenCalledWith(refreshToken, 're')
            expect(mockCacheManager.del).toHaveBeenCalledWith(`rt:${payload.jti}`)
        })
    })

    describe('refreshToken', () => {
        it('should successfully refresh tokens', async () => {
            const oldRefreshToken = 'old-refresh-token'
            const payload = { id: 1, jti: 'old-jti', type: 'rf' }
            const user = {
                id: 1,
                loginId: 'testuser',
                email: 'test@example.com'
            }
            const cachedToken = 'cached-hashed-token'
            const newAccessToken = 'new-access-token'
            const newRefreshToken = 'new-refresh-token'
            const hashedNewRefreshToken = 'hashed-new-refresh-token'

            mockJwtUtil.verify.mockResolvedValue(payload)
            mockPrisma.user.findFirst.mockResolvedValue(user)
            mockCacheManager.get.mockResolvedValue(cachedToken)
            mockBcryptUtil.compare.mockResolvedValue(true)
            mockCacheManager.del.mockResolvedValue(undefined)
            mockJwtUtil.createAccessToken.mockResolvedValue(newAccessToken)
            mockJwtUtil.createRefreshToken.mockResolvedValue(newRefreshToken)
            mockBcryptUtil.hash.mockResolvedValue(hashedNewRefreshToken)
            mockCacheManager.set.mockResolvedValue(undefined)

            const result = await service.refreshToken(oldRefreshToken)

            expect(result.resDto.accessToken).toBe(newAccessToken)
            expect(result.refreshToken).toBe(newRefreshToken)
            expect(mockCacheManager.del).toHaveBeenCalledWith(`rt:${payload.jti}`)
            expect(mockCacheManager.set).toHaveBeenCalled()
        })

        it('should throw exception if cached token not found', async () => {
            const refreshToken = 'refresh-token'
            const payload = { id: 1, jti: 'test-jti', type: 'rf' }
            const user = { id: 1, loginId: 'testuser' }

            mockJwtUtil.verify.mockResolvedValue(payload)
            mockPrisma.user.findFirst.mockResolvedValue(user)
            mockCacheManager.get.mockResolvedValue(null)

            await expect(service.refreshToken(refreshToken)).rejects.toThrow(BaseException)
        })

        it('should throw exception if token does not match', async () => {
            const refreshToken = 'refresh-token'
            const payload = { id: 1, jti: 'test-jti', type: 'rf' }
            const user = { id: 1, loginId: 'testuser' }
            const cachedToken = 'cached-hashed-token'

            mockJwtUtil.verify.mockResolvedValue(payload)
            mockPrisma.user.findFirst.mockResolvedValue(user)
            mockCacheManager.get.mockResolvedValue(cachedToken)
            mockBcryptUtil.compare.mockResolvedValue(false)

            await expect(service.refreshToken(refreshToken)).rejects.toThrow(BaseException)
        })
    })

    describe('resetPassword', () => {
        it('should successfully reset password', async () => {
            const reqDto: ResetPasswordReqDto = {
                loginId: 'testuser',
                name: 'Test User',
                newPassword: 'newpass1234'
            }
            const user = {
                id: 1,
                email: 'test@example.com',
                loginId: 'testuser',
                name: 'Test User',
                password: 'oldhashedpassword',
                status: UserStatus.ACTIVE,
                isDeleted: false,
                deletedAt: null,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            const hashedPassword = 'newhashedpassword'

            mockPrisma.user.findFirst.mockResolvedValue(user)
            mockBcryptUtil.hash.mockResolvedValue(hashedPassword)
            mockPrisma.user.update.mockResolvedValue({ ...user, password: hashedPassword })

            await service.resetPassword(reqDto)

            expect(prisma.user.findFirst).toHaveBeenCalledWith({
                where: {
                    loginId: reqDto.loginId,
                    name: reqDto.name,
                    isDeleted: false
                }
            })
            expect(bcryptUtil.hash).toHaveBeenCalledWith(reqDto.newPassword)
            expect(prisma.user.update).toHaveBeenCalledWith({
                where: { id: user.id },
                data: { password: hashedPassword }
            })
        })

        it('should throw exception if user not found', async () => {
            const reqDto: ResetPasswordReqDto = {
                loginId: 'testuser',
                name: 'Test User',
                newPassword: 'newpass1234'
            }

            mockPrisma.user.findFirst.mockResolvedValue(null)

            await expect(service.resetPassword(reqDto)).rejects.toThrow(BaseException)
            await expect(service.resetPassword(reqDto)).rejects.toThrow(USER_ERROR.VERIFICATION_FAILED.message)
        })

        it('should throw exception if user verification fails (wrong name)', async () => {
            const reqDto: ResetPasswordReqDto = {
                loginId: 'testuser',
                name: 'Wrong Name',
                newPassword: 'newpass1234'
            }

            mockPrisma.user.findFirst.mockResolvedValue(null)

            await expect(service.resetPassword(reqDto)).rejects.toThrow(BaseException)
            await expect(service.resetPassword(reqDto)).rejects.toThrow(USER_ERROR.VERIFICATION_FAILED.message)
        })

        it('should not reset password for deleted users', async () => {
            const reqDto: ResetPasswordReqDto = {
                loginId: 'testuser',
                name: 'Test User',
                newPassword: 'newpass1234'
            }

            mockPrisma.user.findFirst.mockResolvedValue(null)

            await expect(service.resetPassword(reqDto)).rejects.toThrow(BaseException)
            await expect(service.resetPassword(reqDto)).rejects.toThrow(USER_ERROR.VERIFICATION_FAILED.message)
        })
    })
})
