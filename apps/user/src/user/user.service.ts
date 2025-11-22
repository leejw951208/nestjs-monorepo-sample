import { CursorPageResDto, OffsetPageResDto } from '@libs/common/dto/page-res.dto'
import { BaseException } from '@libs/common/exception/base.exception'
import { USER_ERROR } from '@libs/common/exception/error.code'
import { JwtPayload } from '@libs/common/utils/jwt.util'
import { ExtendedPrismaClient } from '@libs/prisma/prisma.factory'
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager'
import { Inject, Injectable } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import { PrismaClient } from '@prisma/client'
import { plainToInstance } from 'class-transformer'
import userEnvConfig from '../config/env/user-env.config'
import { UserCursorPageReqDto, UserOffsetPageReqDto } from './dto/user-page-req.dto'
import { UserResDto } from './dto/user-res.dto'
import { UserUpdateDto } from './dto/user-update.dto'
import { listUsersCursor, listUsersOffset } from './query/user.query'

@Injectable()
export class UserService {
    constructor(
        @Inject(PrismaClient) private readonly prisma: ExtendedPrismaClient,
        @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
        @Inject(userEnvConfig.KEY) private readonly userEnv: ConfigType<typeof userEnvConfig>
    ) {}

    async findMe(payload: JwtPayload): Promise<UserResDto> {
        const foundUser = await this.prisma.user.findFirst({ where: { id: payload.userId } })
        return plainToInstance(UserResDto, foundUser, { excludeExtraneousValues: true })
    }

    async updateMe(payload: JwtPayload, reqDto: UserUpdateDto): Promise<void> {
        const updatedUser = await this.prisma.user.update({ where: { id: payload.userId }, data: reqDto })
        if (!updatedUser) throw new BaseException(USER_ERROR.NOT_FOUND, this.constructor.name)
    }

    async findUsersWithOffset(searchCondition: UserOffsetPageReqDto): Promise<OffsetPageResDto<UserResDto>> {
        const { items, totalCount } = await listUsersOffset(this.prisma, searchCondition)
        return new OffsetPageResDto(plainToInstance(UserResDto, items, { excludeExtraneousValues: true }), searchCondition.page, totalCount)
    }

    async findUsersWithCursor(searchCondition: UserCursorPageReqDto): Promise<CursorPageResDto<UserResDto>> {
        const { items, nextId } = await listUsersCursor(this.prisma, searchCondition)
        return new CursorPageResDto(plainToInstance(UserResDto, items, { excludeExtraneousValues: true }), nextId)
    }

    async softDeleteMe(payload: JwtPayload): Promise<void> {
        await this.prisma.user.softDelete({ where: { id: payload.userId } })
    }
}
