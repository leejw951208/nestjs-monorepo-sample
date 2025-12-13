import { Test, TestingModule } from '@nestjs/testing'
import { AuthService } from './auth.service'
import { type ExtendedPrismaClient, PRISMA_CLIENT } from '@libs/prisma/prisma.factory'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { BcryptUtil } from '@libs/common/util/bcrypt.util'
import { JwtUtil } from '@libs/common/util/jwt.util'
import { OtpUtil } from '@libs/common/util/otp.util'
import { EmailUtil } from '@libs/common/util/email.util'
import { ClsService } from 'nestjs-cls'
import { BaseException } from '@libs/common/exception/base.exception'
import { AUTH_ERROR, USER_ERROR } from '@libs/common/exception/error.code'
import { PasswordResetConfirmRequestDto } from './dto/password-reset-confirm.request.dto'
import { PasswordResetInitRequestDto } from './dto/password-reset-init.request.dto'
import { PasswordResetVerifyRequestDto } from './dto/password-reset-verify.request.dto'
import { UserStatus } from '@prisma/client'
import { UserRepository } from '../user/user.repository'
import { TokenService } from '../token/token.service'

describe('AuthService', () => {
    let service: AuthService
    let prisma: ExtendedPrismaClient
    let bcryptUtil: BcryptUtil

    const mockPrisma = {
        user: {
            findFirst: jest.fn(),
            findUnique: jest.fn(),
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

    const mockOtpUtil = {
        generateOtp: jest.fn(),
        generateResetToken: jest.fn(),
        createOtpData: jest.fn(),
        createOtpKey: jest.fn(),
        createFlowKey: jest.fn(),
        isExpired: jest.fn(),
        verifyOtpCode: jest.fn(),
        incrementAttempts: jest.fn(),
        isMaxAttemptsReached: jest.fn()
    }

    const mockEmailUtil = {
        normalize: jest.fn()
    }

    const mockClsService = {}

    const mockUserRepository = {
        findUser: jest.fn(),
        createUser: jest.fn(),
        updateUser: jest.fn()
    }

    const mockTokenService = {
        saveRefreshToken: jest.fn(),
        getRefreshToken: jest.fn(),
        deleteRefreshToken: jest.fn(),
        deleteAllRefreshTokens: jest.fn()
    }

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AuthService,
                { provide: PRISMA_CLIENT, useValue: mockPrisma },
                { provide: CACHE_MANAGER, useValue: mockCacheManager },
                { provide: BcryptUtil, useValue: mockBcryptUtil },
                { provide: JwtUtil, useValue: mockJwtUtil },
                { provide: OtpUtil, useValue: mockOtpUtil },
                { provide: EmailUtil, useValue: mockEmailUtil },
                { provide: ClsService, useValue: mockClsService },
                { provide: UserRepository, useValue: mockUserRepository },
                { provide: TokenService, useValue: mockTokenService }
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
                email: 'newuser@example.com',
                password: 'password123',
                name: 'New User',
                phone: '01012345678'
            }
            const hashedPassword = 'hashedpassword123'

            mockUserRepository.findUser.mockResolvedValue(null)
            mockBcryptUtil.hash.mockResolvedValue(hashedPassword)
            mockUserRepository.createUser.mockResolvedValue({
                id: 1,
                ...reqDto,
                password: hashedPassword,
                status: UserStatus.ACTIVE
            })

            await service.signup(reqDto)

            expect(mockUserRepository.findUser).toHaveBeenCalledWith({
                where: { email: reqDto.email }
            })
            expect(bcryptUtil.hash).toHaveBeenCalledWith(reqDto.password)
            expect(mockUserRepository.createUser).toHaveBeenCalled()
        })

        it('should throw exception if email already exists', async () => {
            const reqDto = {
                email: 'existing@example.com',
                password: 'password123',
                name: 'New User',
                phone: '01012345678'
            }

            mockUserRepository.findUser.mockResolvedValue({ id: 1, email: 'existing@example.com' })

            await expect(service.signup(reqDto)).rejects.toThrow(BaseException)
            await expect(service.signup(reqDto)).rejects.toThrow(USER_ERROR.ALREADY_EXISTS_EMAIL.message)
        })
    })

    describe('signin', () => {
        it('should successfully sign in and return tokens', async () => {
            const reqDto = { email: 'test@example.com', password: 'password123' }
            const user = {
                id: 1,
                password: 'hashedpassword',
                email: 'test@example.com',
                name: 'Test User',
                phone: '01012345678',
                status: UserStatus.ACTIVE
            }
            const accessToken = 'access-token'
            const refreshToken = 'refresh-token'
            const hashedRefreshToken = 'hashed-refresh-token'

            mockUserRepository.findUser.mockResolvedValue(user)
            mockBcryptUtil.compare.mockResolvedValue(true)
            mockJwtUtil.createAccessToken.mockResolvedValue(accessToken)
            mockJwtUtil.createRefreshToken.mockResolvedValue(refreshToken)
            mockBcryptUtil.hash.mockResolvedValue(hashedRefreshToken)
            mockTokenService.saveRefreshToken.mockResolvedValue(undefined)

            const result = await service.signin(reqDto)

            expect(result.resDto.accessToken).toBe(accessToken)
            expect(result.refreshToken).toBe(refreshToken)
            expect(mockUserRepository.findUser).toHaveBeenCalledWith({ where: { email: reqDto.email } })
            expect(bcryptUtil.compare).toHaveBeenCalledWith(reqDto.password, user.password)
            expect(mockTokenService.saveRefreshToken).toHaveBeenCalled()
        })

        it('should throw exception if user not found', async () => {
            const reqDto = { email: 'nonexistent@example.com', password: 'password123' }

            mockUserRepository.findUser.mockResolvedValue(null)

            await expect(service.signin(reqDto)).rejects.toThrow(BaseException)
            await expect(service.signin(reqDto)).rejects.toThrow(USER_ERROR.NOT_FOUND.message)
        })

        it('should throw exception if password does not match', async () => {
            const reqDto = { email: 'test@example.com', password: 'wrongpassword' }
            const user = {
                id: 1,
                password: 'hashedpassword',
                email: 'test@example.com'
            }

            mockUserRepository.findUser.mockResolvedValue(user)
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
                email: 'test@example.com'
            }

            mockJwtUtil.verify.mockResolvedValue(payload)
            mockUserRepository.findUser.mockResolvedValue(user)
            mockTokenService.deleteRefreshToken.mockResolvedValue(undefined)

            await service.signout(refreshToken)

            expect(mockJwtUtil.verify).toHaveBeenCalledWith(refreshToken, 're')
            expect(mockTokenService.deleteRefreshToken).toHaveBeenCalledWith(user.id, payload.jti)
        })
    })

    describe('refreshToken', () => {
        it('should successfully refresh tokens', async () => {
            const oldRefreshToken = 'old-refresh-token'
            const payload = { id: 1, jti: 'old-jti', type: 'rf' }
            const user = {
                id: 1,
                email: 'test@example.com'
            }
            const cachedToken = 'cached-hashed-token'
            const newAccessToken = 'new-access-token'
            const newRefreshToken = 'new-refresh-token'
            const hashedNewRefreshToken = 'hashed-new-refresh-token'

            mockJwtUtil.verify.mockResolvedValue(payload)
            mockUserRepository.findUser.mockResolvedValue(user)
            mockTokenService.getRefreshToken.mockResolvedValue(cachedToken)
            mockBcryptUtil.compare.mockResolvedValue(true)
            mockTokenService.deleteRefreshToken.mockResolvedValue(undefined)
            mockJwtUtil.createAccessToken.mockResolvedValue(newAccessToken)
            mockJwtUtil.createRefreshToken.mockResolvedValue(newRefreshToken)
            mockBcryptUtil.hash.mockResolvedValue(hashedNewRefreshToken)
            mockTokenService.saveRefreshToken.mockResolvedValue(undefined)

            const result = await service.refreshToken(oldRefreshToken)

            expect(result.resDto.accessToken).toBe(newAccessToken)
            expect(result.refreshToken).toBe(newRefreshToken)
            expect(mockTokenService.deleteRefreshToken).toHaveBeenCalledWith(user.id, payload.jti)
            expect(mockTokenService.saveRefreshToken).toHaveBeenCalled()
        })

        it('should throw exception if cached token not found', async () => {
            const refreshToken = 'refresh-token'
            const payload = { id: 1, jti: 'test-jti', type: 'rf' }
            const user = { id: 1, email: 'test@example.com' }

            mockJwtUtil.verify.mockResolvedValue(payload)
            mockUserRepository.findUser.mockResolvedValue(user)
            mockTokenService.getRefreshToken.mockResolvedValue(undefined)

            await expect(service.refreshToken(refreshToken)).rejects.toThrow(BaseException)
        })

        it('should throw exception if token does not match', async () => {
            const refreshToken = 'refresh-token'
            const payload = { id: 1, jti: 'test-jti', type: 'rf' }
            const user = { id: 1, email: 'test@example.com' }
            const cachedToken = 'cached-hashed-token'

            mockJwtUtil.verify.mockResolvedValue(payload)
            mockUserRepository.findUser.mockResolvedValue(user)
            mockTokenService.getRefreshToken.mockResolvedValue(cachedToken)
            mockBcryptUtil.compare.mockResolvedValue(false)

            await expect(service.refreshToken(refreshToken)).rejects.toThrow(BaseException)
        })
    })

    describe('issueOtp', () => {
        it('should successfully issue OTP', async () => {
            const reqDto: PasswordResetInitRequestDto = {
                email: 'test@example.com'
            }
            const normalizedEmail = 'test@example.com'
            const user = {
                id: 1,
                email: 'test@example.com',
                name: 'Test User'
            }
            const otp = '123456'
            const flowId = 'flow-id-123'
            const otpData = {
                otp,
                flowId,
                createdAt: Date.now(),
                expiresAt: Date.now() + 5 * 60 * 1000,
                attempts: 0
            }

            mockEmailUtil.normalize.mockReturnValue(normalizedEmail)
            mockUserRepository.findUser.mockResolvedValue(user)
            mockCacheManager.get.mockResolvedValue(0)
            mockOtpUtil.generateOtp.mockReturnValue(otp)
            mockOtpUtil.createOtpData.mockReturnValue(otpData)
            mockOtpUtil.createOtpKey.mockReturnValue(`password-reset:otp:${user.id}`)
            mockOtpUtil.createFlowKey.mockReturnValue(`password-reset:flow:${user.id}`)
            mockCacheManager.set.mockResolvedValue(undefined)

            await service.issueOtp(reqDto)

            expect(mockEmailUtil.normalize).toHaveBeenCalledWith(reqDto.email)
            expect(mockUserRepository.findUser).toHaveBeenCalledWith({
                where: { email: normalizedEmail }
            })
            expect(mockOtpUtil.generateOtp).toHaveBeenCalled()
        })

        it('should not throw exception if user not found (email enumeration prevention)', async () => {
            const reqDto: PasswordResetInitRequestDto = {
                email: 'nonexistent@example.com'
            }
            const normalizedEmail = 'nonexistent@example.com'

            mockEmailUtil.normalize.mockReturnValue(normalizedEmail)
            mockUserRepository.findUser.mockResolvedValue(null)

            // Should not throw - returns early for email enumeration prevention
            await expect(service.issueOtp(reqDto)).resolves.not.toThrow()
        })
    })

    describe('verifyOtp', () => {
        it('should successfully verify OTP and return reset token', async () => {
            const reqDto: PasswordResetVerifyRequestDto = {
                email: 'test@example.com',
                otp: '123456'
            }
            const normalizedEmail = 'test@example.com'
            const user = { id: 1, email: normalizedEmail }
            const flowId = 'flow-id-123'
            const otpData = {
                otp: '123456',
                flowId,
                createdAt: Date.now(),
                expiresAt: Date.now() + 5 * 60 * 1000,
                attempts: 0
            }
            const resetToken = 'reset-token-abc123'
            const otpKey = `password-reset:otp:${user.id}`
            const flowKey = `password-reset:flow:${user.id}`
            const rateLimitKey = `rate-limit:password-verify:${user.id}`

            mockEmailUtil.normalize.mockReturnValue(normalizedEmail)
            mockUserRepository.findUser.mockResolvedValue(user)

            // Use mockImplementation to handle different keys
            mockCacheManager.get.mockImplementation((key: string) => {
                if (key === rateLimitKey) return Promise.resolve(0)
                if (key === otpKey) return Promise.resolve(JSON.stringify(otpData))
                if (key === flowKey) return Promise.resolve(flowId)
                return Promise.resolve(null)
            })

            mockOtpUtil.createOtpKey.mockReturnValue(otpKey)
            mockOtpUtil.createFlowKey.mockReturnValue(flowKey)
            mockOtpUtil.isExpired.mockReturnValue(false)
            mockOtpUtil.verifyOtpCode.mockReturnValue(true)
            mockOtpUtil.generateResetToken.mockReturnValue(resetToken)
            mockCacheManager.del.mockResolvedValue(undefined)
            mockCacheManager.set.mockResolvedValue(undefined)

            const result = await service.verifyOtp(reqDto)

            expect(result.resetToken).toBe(resetToken)
        })

        it('should throw exception if OTP expired', async () => {
            const reqDto: PasswordResetVerifyRequestDto = {
                email: 'test@example.com',
                otp: '123456'
            }
            const normalizedEmail = 'test@example.com'
            const user = { id: 1, email: normalizedEmail }
            const otpKey = `password-reset:otp:${user.id}`
            const rateLimitKey = `rate-limit:password-verify:${user.id}`

            mockEmailUtil.normalize.mockReturnValue(normalizedEmail)
            mockUserRepository.findUser.mockResolvedValue(user)

            // Use mockImplementation to handle different keys
            mockCacheManager.get.mockImplementation((key: string) => {
                if (key === rateLimitKey) return Promise.resolve(0)
                if (key === otpKey) return Promise.resolve(null) // OTP data not found
                return Promise.resolve(null)
            })

            mockOtpUtil.createOtpKey.mockReturnValue(otpKey)

            await expect(service.verifyOtp(reqDto)).rejects.toThrow(BaseException)
            await expect(service.verifyOtp(reqDto)).rejects.toThrow(AUTH_ERROR.OTP_EXPIRED.message)
        })

        it('should throw exception if OTP is invalid', async () => {
            const reqDto: PasswordResetVerifyRequestDto = {
                email: 'test@example.com',
                otp: '999999'
            }
            const normalizedEmail = 'test@example.com'
            const user = { id: 1, email: normalizedEmail }
            const flowId = 'flow-id-123'
            const otpData = {
                otp: '123456',
                flowId,
                createdAt: Date.now(),
                expiresAt: Date.now() + 5 * 60 * 1000,
                attempts: 0
            }
            const otpKey = `password-reset:otp:${user.id}`
            const flowKey = `password-reset:flow:${user.id}`
            const rateLimitKey = `rate-limit:password-verify:${user.id}`

            mockEmailUtil.normalize.mockReturnValue(normalizedEmail)
            mockUserRepository.findUser.mockResolvedValue(user)

            // Use mockImplementation to handle different keys
            mockCacheManager.get.mockImplementation((key: string) => {
                if (key === rateLimitKey) return Promise.resolve(0)
                if (key === otpKey) return Promise.resolve(JSON.stringify(otpData))
                if (key === flowKey) return Promise.resolve(flowId)
                return Promise.resolve(null)
            })

            mockOtpUtil.createOtpKey.mockReturnValue(otpKey)
            mockOtpUtil.createFlowKey.mockReturnValue(flowKey)
            mockOtpUtil.isExpired.mockReturnValue(false)
            mockOtpUtil.verifyOtpCode.mockReturnValue(false)
            mockOtpUtil.incrementAttempts.mockReturnValue({ ...otpData, attempts: 1 })
            mockOtpUtil.isMaxAttemptsReached.mockReturnValue(false)
            mockCacheManager.set.mockResolvedValue(undefined)

            await expect(service.verifyOtp(reqDto)).rejects.toThrow(BaseException)
            await expect(service.verifyOtp(reqDto)).rejects.toThrow(AUTH_ERROR.OTP_INVALID.message)
        })
    })

    describe('resetPassword', () => {
        it('should successfully reset password with valid reset token', async () => {
            const reqDto: PasswordResetConfirmRequestDto = {
                resetToken: 'valid-reset-token',
                newPassword: 'newpass1234'
            }
            const payload = { id: 1, flowId: 'flow-id-123' }
            const flowId = 'flow-id-123'
            const user = {
                id: 1,
                email: 'test@example.com',
                name: 'Test User',
                password: 'oldhashedpassword'
            }
            const hashedPassword = 'newhashedpassword'
            const flowKey = `password-reset:flow:${user.id}`
            const tokenKey = `password-reset:token:${reqDto.resetToken}`

            // Use mockImplementation to handle different keys
            mockCacheManager.get.mockImplementation((key: string) => {
                if (key === tokenKey) return Promise.resolve(JSON.stringify(payload))
                if (key === flowKey) return Promise.resolve(flowId)
                return Promise.resolve(null)
            })

            mockOtpUtil.createFlowKey.mockReturnValue(flowKey)
            mockUserRepository.findUser.mockResolvedValue(user)
            mockBcryptUtil.hash.mockResolvedValue(hashedPassword)
            mockCacheManager.del.mockResolvedValue(undefined)
            mockUserRepository.updateUser.mockResolvedValue({ ...user, password: hashedPassword })
            mockTokenService.deleteAllRefreshTokens.mockResolvedValue(undefined)

            await service.resetPassword(reqDto)

            expect(bcryptUtil.hash).toHaveBeenCalledWith(reqDto.newPassword)
            expect(mockUserRepository.updateUser).toHaveBeenCalledWith({
                where: { id: user.id },
                data: { password: hashedPassword }
            })
            expect(mockTokenService.deleteAllRefreshTokens).toHaveBeenCalledWith(user.id)
        })

        it('should throw exception if reset token expired', async () => {
            const reqDto: PasswordResetConfirmRequestDto = {
                resetToken: 'expired-token',
                newPassword: 'newpass1234'
            }

            // Mock cache.get returning null (token not found/expired)
            mockCacheManager.get.mockResolvedValue(null)

            await expect(service.resetPassword(reqDto)).rejects.toThrow(BaseException)
        })

        it('should throw exception if user not found', async () => {
            const reqDto: PasswordResetConfirmRequestDto = {
                resetToken: 'valid-reset-token',
                newPassword: 'newpass1234'
            }
            const payload = { id: 1, flowId: 'flow-id-123' }
            const flowId = 'flow-id-123'
            const flowKey = `password-reset:flow:1`
            const tokenKey = `password-reset:token:${reqDto.resetToken}`

            // Use mockImplementation to handle different keys
            mockCacheManager.get.mockImplementation((key: string) => {
                if (key === tokenKey) return Promise.resolve(JSON.stringify(payload))
                if (key === flowKey) return Promise.resolve(flowId)
                return Promise.resolve(null)
            })

            mockOtpUtil.createFlowKey.mockReturnValue(flowKey)
            mockUserRepository.findUser.mockResolvedValue(null)

            await expect(service.resetPassword(reqDto)).rejects.toThrow(BaseException)
            await expect(service.resetPassword(reqDto)).rejects.toThrow(USER_ERROR.NOT_FOUND.message)
        })
    })
})
