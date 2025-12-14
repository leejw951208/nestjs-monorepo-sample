import { BaseException } from '@libs/common/exception/base.exception'
import { USER_ERROR } from '@libs/common/exception/error.code'
import { type ExtendedPrismaClient, PRISMA_CLIENT } from '@libs/prisma/prisma.factory'
import { Inject, Injectable } from '@nestjs/common'
import { UserStatus } from '@prisma/client'
import { plainToInstance } from 'class-transformer'
import { UserResponseDto } from './dto/user-response.dto'
import { UserUpdateDto } from './dto/user-update.dto'

@Injectable()
export class UserService {
    constructor(@Inject(PRISMA_CLIENT) private readonly prisma: ExtendedPrismaClient) {}

    async getMe(userId: number): Promise<UserResponseDto> {
        const foundUser = await this.prisma.user.findFirst({
            where: { id: userId, isDeleted: false }
        })

        if (!foundUser) {
            throw new BaseException(USER_ERROR.NOT_FOUND, this.constructor.name)
        }

        return plainToInstance(UserResponseDto, foundUser, { excludeExtraneousValues: true })
    }

    async updateMe(userId: number, reqDto: UserUpdateDto): Promise<void> {
        const foundUser = await this.prisma.user.findFirst({
            where: { id: userId, isDeleted: false }
        })

        if (!foundUser) {
            throw new BaseException(USER_ERROR.NOT_FOUND, this.constructor.name)
        }

        await this.prisma.user.update({
            where: { id: userId },
            data: reqDto
        })
    }

    async withdraw(userId: number): Promise<void> {
        const foundUser = await this.prisma.user.findFirst({
            where: { id: userId, isDeleted: false }
        })

        if (!foundUser) {
            throw new BaseException(USER_ERROR.NOT_FOUND, this.constructor.name)
        }

        if (foundUser.isDeleted) {
            throw new BaseException(USER_ERROR.ALREADY_DELETED, this.constructor.name)
        }

        await this.prisma.user.update({
            where: { id: userId },
            data: { status: UserStatus.WITHDRAWN }
        })

        await this.prisma.user.softDelete({ where: { id: userId } })
    }
}
