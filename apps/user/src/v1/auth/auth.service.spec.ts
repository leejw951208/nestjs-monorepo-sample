import commonEnvConfig from '@libs/common/config/env/common-env.config'
import { BaseException } from '@libs/common/exception/base.exception'
import { CryptoService } from '@libs/common/service/crypto.service'
import { TokenService } from '@libs/common/service/token.service'
import { type ExtendedPrismaClient, PRISMA_CLIENT } from '@libs/prisma/prisma.factory'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Test, TestingModule } from '@nestjs/testing'
import { Owner, UserStatus } from '@prisma/client'
import { AuthService } from './auth.service'
import { PasswordResetConfirmRequestDto } from './dto/password-reset-confirm.request.dto'
import { PasswordResetInitRequestDto } from './dto/password-reset-init.request.dto'
import { PasswordResetVerifyRequestDto } from './dto/password-reset-verify.request.dto'

const mockCommonEnv = {
    nodeEnv: 'test',
    databaseUrl: 'postgres://test',
    redisUrl: 'redis://test',
    jwtSecretKey: 'test-secret',
    aesSecretKey: 'test-aes-secret',
    bcryptSaltRounds: 1,
    jwtAccessTokenExpiresIn: '1h',
    jwtRefreshTokenExpiresIn: '7d',
    jwtRefreshTokenTtl: 7 * 24 * 60 * 60 * 1000,
    verificationCodeTtl: 5 * 60 * 1000,
    resetTokenTtl: 15 * 60 * 1000
}

describe('AuthService', () => {
    let service: AuthService
    let prisma: jest.Mocked<ExtendedPrismaClient>

    const mockPrisma = {
        user: {
            findFirst: jest.fn(),
            create: jest.fn(),
            update: jest.fn()
        }
    }

    const mockCacheManager = {
        get: jest.fn(),
        set: jest.fn(),
        del: jest.fn()
    }

    const mockCryptoService = {
        hash: jest.fn(),
        compare: jest.fn()
    }

    const mockTokenService = {
        createAccessToken: jest.fn(),
        createRefreshToken: jest.fn(),
        verify: jest.fn(),
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
                { provide: commonEnvConfig.KEY, useValue: mockCommonEnv },
                { provide: CryptoService, useValue: mockCryptoService },
                { provide: TokenService, useValue: mockTokenService }
            ]
        }).compile()

        service = module.get<AuthService>(AuthService)
        prisma = module.get(PRISMA_CLIENT)
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

            mockPrisma.user.findFirst.mockResolvedValue(null)
            mockCryptoService.hash.mockResolvedValue(hashedPassword)
            mockPrisma.user.create.mockResolvedValue({
                id: 1,
                ...reqDto,
                password: hashedPassword,
                status: UserStatus.ACTIVE
            })

            await service.signup(reqDto)

            expect(mockPrisma.user.findFirst).toHaveBeenCalledWith({
                where: { email: reqDto.email, isDeleted: false }
            })
            expect(mockCryptoService.hash).toHaveBeenCalledWith(reqDto.password)
            expect(mockPrisma.user.create).toHaveBeenCalled()
        })

        it('should throw exception if email already exists', async () => {
            const reqDto = {
                email: 'existing@example.com',
                password: 'password123',
                name: 'New User',
                phone: '01012345678'
            }

            mockPrisma.user.findFirst.mockResolvedValue({ id: 1, email: 'existing@example.com' })

            await expect(service.signup(reqDto)).rejects.toThrow(BaseException)
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

            mockPrisma.user.findFirst.mockResolvedValue(user)
            mockCryptoService.compare.mockResolvedValue(true)
            mockTokenService.createAccessToken.mockResolvedValue(accessToken)
            mockTokenService.createRefreshToken.mockResolvedValue(refreshToken)
            mockCryptoService.hash.mockResolvedValue(hashedRefreshToken)
            mockTokenService.saveRefreshToken.mockResolvedValue(undefined)

            const result = await service.signin(reqDto)

            expect(result.resDto.accessToken).toBe(accessToken)
            expect(result.refreshToken).toBe(refreshToken)
            expect(mockPrisma.user.findFirst).toHaveBeenCalledWith({
                where: { email: reqDto.email, isDeleted: false }
            })
            expect(mockCryptoService.compare).toHaveBeenCalledWith(reqDto.password, user.password)
            expect(mockTokenService.saveRefreshToken).toHaveBeenCalledWith(
                user.id,
                Owner.USER,
                expect.any(String),
                hashedRefreshToken,
                mockCommonEnv.jwtRefreshTokenTtl
            )
        })

        it('should throw exception if user not found', async () => {
            const reqDto = { email: 'nonexistent@example.com', password: 'password123' }

            mockPrisma.user.findFirst.mockResolvedValue(null)

            await expect(service.signin(reqDto)).rejects.toThrow(BaseException)
        })

        it('should throw exception if password does not match', async () => {
            const reqDto = { email: 'test@example.com', password: 'wrongpassword' }
            const user = { id: 1, password: 'hashedpassword', email: 'test@example.com' }

            mockPrisma.user.findFirst.mockResolvedValue(user)
            mockCryptoService.compare.mockResolvedValue(false)

            await expect(service.signin(reqDto)).rejects.toThrow(BaseException)
        })
    })

    describe('signout', () => {
        it('should successfully sign out and delete refresh token', async () => {
            const refreshToken = 'valid-refresh-token'
            const payload = { id: 1, jti: 'test-jti', type: 'rf' }
            const user = { id: 1, email: 'test@example.com' }

            mockTokenService.verify.mockResolvedValue(payload)
            mockPrisma.user.findFirst.mockResolvedValue(user)
            mockTokenService.deleteRefreshToken.mockResolvedValue(undefined)

            await service.signout(refreshToken)

            expect(mockTokenService.verify).toHaveBeenCalledWith(refreshToken, 're')
            expect(mockTokenService.deleteRefreshToken).toHaveBeenCalledWith(user.id, Owner.USER, payload.jti)
        })
    })

    describe('refreshToken', () => {
        it('should successfully refresh tokens', async () => {
            const oldRefreshToken = 'old-refresh-token'
            const payload = { id: 1, jti: 'old-jti', type: 'rf' }
            const user = { id: 1, email: 'test@example.com' }
            const cachedToken = 'cached-hashed-token'
            const newAccessToken = 'new-access-token'
            const newRefreshToken = 'new-refresh-token'
            const hashedNewRefreshToken = 'hashed-new-refresh-token'

            mockTokenService.verify.mockResolvedValue(payload)
            mockPrisma.user.findFirst.mockResolvedValue(user)
            mockTokenService.getRefreshToken.mockResolvedValue(cachedToken)
            mockCryptoService.compare.mockResolvedValue(true)
            mockTokenService.deleteRefreshToken.mockResolvedValue(undefined)
            mockTokenService.createAccessToken.mockResolvedValue(newAccessToken)
            mockTokenService.createRefreshToken.mockResolvedValue(newRefreshToken)
            mockCryptoService.hash.mockResolvedValue(hashedNewRefreshToken)
            mockTokenService.saveRefreshToken.mockResolvedValue(undefined)

            const result = await service.refreshToken(oldRefreshToken)

            expect(result.resDto.accessToken).toBe(newAccessToken)
            expect(result.refreshToken).toBe(newRefreshToken)
            expect(mockTokenService.deleteRefreshToken).toHaveBeenCalledWith(user.id, Owner.USER, payload.jti)
            expect(mockTokenService.saveRefreshToken).toHaveBeenCalled()
        })

        it('should throw exception if cached token not found', async () => {
            const refreshToken = 'refresh-token'
            const payload = { id: 1, jti: 'test-jti', type: 'rf' }
            const user = { id: 1, email: 'test@example.com' }

            mockTokenService.verify.mockResolvedValue(payload)
            mockPrisma.user.findFirst.mockResolvedValue(user)
            mockTokenService.getRefreshToken.mockResolvedValue(undefined)

            await expect(service.refreshToken(refreshToken)).rejects.toThrow(BaseException)
        })

        it('should throw exception if token does not match', async () => {
            const refreshToken = 'refresh-token'
            const payload = { id: 1, jti: 'test-jti', type: 'rf' }
            const user = { id: 1, email: 'test@example.com' }
            const cachedToken = 'cached-hashed-token'

            mockTokenService.verify.mockResolvedValue(payload)
            mockPrisma.user.findFirst.mockResolvedValue(user)
            mockTokenService.getRefreshToken.mockResolvedValue(cachedToken)
            mockCryptoService.compare.mockResolvedValue(false)

            await expect(service.refreshToken(refreshToken)).rejects.toThrow(BaseException)
        })
    })

    describe('issueCode', () => {
        it('should successfully issue verification code', async () => {
            const reqDto: PasswordResetInitRequestDto = { email: 'test@example.com' }
            const normalizedEmail = 'test@example.com'
            const user = { id: 1, email: 'test@example.com', name: 'Test User' }

            mockPrisma.user.findFirst.mockResolvedValue(user)
            mockCacheManager.set.mockResolvedValue(undefined)

            await service.issueCode(reqDto)

            expect(mockPrisma.user.findFirst).toHaveBeenCalledWith({
                where: { email: normalizedEmail, isDeleted: false }
            })
            expect(mockCacheManager.set).toHaveBeenCalled()
        })

        it('should not throw exception if user not found (email enumeration prevention)', async () => {
            const reqDto: PasswordResetInitRequestDto = { email: 'nonexistent@example.com' }

            mockPrisma.user.findFirst.mockResolvedValue(null)

            await expect(service.issueCode(reqDto)).resolves.not.toThrow()
        })
    })

    describe('verifyCode', () => {
        const CACHE_KEY_CODE_PREFIX = 'password-reset:code:'

        it('should successfully verify code and return reset token', async () => {
            const reqDto: PasswordResetVerifyRequestDto = { email: 'test@example.com', otp: '123456' }
            const normalizedEmail = 'test@example.com'
            const user = { id: 1, email: normalizedEmail }
            const codeData = { code: '123456', expiresAt: Date.now() + 300000, attempts: 0 }
            const codeKey = `${CACHE_KEY_CODE_PREFIX}${user.id}`

            mockPrisma.user.findFirst.mockResolvedValue(user)
            mockCacheManager.get.mockImplementation((key: string) => {
                if (key === codeKey) return Promise.resolve(JSON.stringify(codeData))
                return Promise.resolve(null)
            })
            mockCacheManager.del.mockResolvedValue(undefined)
            mockCacheManager.set.mockResolvedValue(undefined)

            const result = await service.verifyCode(reqDto)

            expect(result.resetToken).toBeDefined()
            expect(typeof result.resetToken).toBe('string')
        })

        it('should throw exception if code expired', async () => {
            const reqDto: PasswordResetVerifyRequestDto = { email: 'test@example.com', otp: '123456' }
            const normalizedEmail = 'test@example.com'
            const user = { id: 1, email: normalizedEmail }

            mockPrisma.user.findFirst.mockResolvedValue(user)
            mockCacheManager.get.mockResolvedValue(null)

            await expect(service.verifyCode(reqDto)).rejects.toThrow(BaseException)
        })

        it('should throw exception if code is invalid', async () => {
            const reqDto: PasswordResetVerifyRequestDto = { email: 'test@example.com', otp: '999999' }
            const normalizedEmail = 'test@example.com'
            const user = { id: 1, email: normalizedEmail }
            const codeData = { code: '123456', expiresAt: Date.now() + 300000, attempts: 0 }
            const codeKey = `${CACHE_KEY_CODE_PREFIX}${user.id}`

            mockPrisma.user.findFirst.mockResolvedValue(user)
            mockCacheManager.get.mockImplementation((key: string) => {
                if (key === codeKey) return Promise.resolve(JSON.stringify(codeData))
                return Promise.resolve(null)
            })
            mockCacheManager.set.mockResolvedValue(undefined)

            await expect(service.verifyCode(reqDto)).rejects.toThrow(BaseException)
        })
    })

    describe('resetPassword', () => {
        const CACHE_KEY_TOKEN_PREFIX = 'password-reset:token:'

        it('should successfully reset password with valid reset token', async () => {
            const reqDto: PasswordResetConfirmRequestDto = {
                resetToken: 'valid-reset-token',
                newPassword: 'newpass1234'
            }
            const userId = 1
            const user = { id: 1, email: 'test@example.com', name: 'Test User', password: 'oldhashedpassword' }
            const hashedPassword = 'newhashedpassword'
            const tokenKey = `${CACHE_KEY_TOKEN_PREFIX}${reqDto.resetToken}`

            mockCacheManager.get.mockImplementation((key: string) => {
                if (key === tokenKey) return Promise.resolve(userId)
                return Promise.resolve(null)
            })
            mockPrisma.user.findFirst.mockResolvedValue(user)
            mockCryptoService.hash.mockResolvedValue(hashedPassword)
            mockCacheManager.del.mockResolvedValue(undefined)
            mockPrisma.user.update.mockResolvedValue({ ...user, password: hashedPassword })
            mockTokenService.deleteAllRefreshTokens.mockResolvedValue(undefined)

            await service.resetPassword(reqDto)

            expect(mockCryptoService.hash).toHaveBeenCalledWith(reqDto.newPassword)
            expect(mockPrisma.user.update).toHaveBeenCalledWith({
                where: { id: user.id },
                data: { password: hashedPassword }
            })
            expect(mockTokenService.deleteAllRefreshTokens).toHaveBeenCalledWith(user.id, Owner.USER)
        })

        it('should throw exception if reset token expired', async () => {
            const reqDto: PasswordResetConfirmRequestDto = {
                resetToken: 'expired-token',
                newPassword: 'newpass1234'
            }

            mockCacheManager.get.mockResolvedValue(null)

            await expect(service.resetPassword(reqDto)).rejects.toThrow(BaseException)
        })

        it('should throw exception if user not found', async () => {
            const reqDto: PasswordResetConfirmRequestDto = {
                resetToken: 'valid-reset-token',
                newPassword: 'newpass1234'
            }
            const userId = 1
            const tokenKey = `${CACHE_KEY_TOKEN_PREFIX}${reqDto.resetToken}`

            mockCacheManager.get.mockImplementation((key: string) => {
                if (key === tokenKey) return Promise.resolve(userId)
                return Promise.resolve(null)
            })
            mockPrisma.user.findFirst.mockResolvedValue(null)

            await expect(service.resetPassword(reqDto)).rejects.toThrow(BaseException)
        })
    })
})
