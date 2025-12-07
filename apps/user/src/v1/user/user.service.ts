import { BaseException } from '@libs/common/exception/base.exception'
import { USER_ERROR } from '@libs/common/exception/error.code'
import { JwtPayload } from '@libs/common/utils/jwt.util'
import { ExtendedPrismaClient, PRISMA_CLIENT } from '@libs/prisma/prisma.factory'
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager'
import { Inject, Injectable } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import { plainToInstance } from 'class-transformer'
import userEnvConfig from '../../config/env/user-env.config'
import { UserResDto } from './dto/user-res.dto'
import { UserUpdateDto } from './dto/user-update.dto'

@Injectable()
export class UserService {
    constructor(
        @Inject(PRISMA_CLIENT) private readonly prisma: ExtendedPrismaClient,
        @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
        @Inject(userEnvConfig.KEY) private readonly userEnv: ConfigType<typeof userEnvConfig>
    ) {}

    async getMe(payload: JwtPayload): Promise<UserResDto> {
        const foundUser = await this.prisma.user.findFirst({ where: { id: payload.id } })
        return plainToInstance(UserResDto, foundUser, { excludeExtraneousValues: true })
    }

    async updateMe(payload: JwtPayload, reqDto: UserUpdateDto): Promise<void> {
        const updatedUser = await this.prisma.user.update({ where: { id: payload.id }, data: reqDto })
        if (!updatedUser) throw new BaseException(USER_ERROR.NOT_FOUND, this.constructor.name)
    }

    async deleteMe(payload: JwtPayload): Promise<void> {
        // 회원 조회
        const foundUser = await this.prisma.user.findFirst({ where: { id: payload.id } })
        if (!foundUser) throw new BaseException(USER_ERROR.NOT_FOUND, this.constructor.name)

        // 이미 탈퇴한 회원인지 확인
        if (foundUser.isDeleted) throw new BaseException(USER_ERROR.ALREADY_DELETED, this.constructor.name)

        // Soft delete 처리
        await this.prisma.user.softDelete({ where: { id: payload.id } })
    }
}
