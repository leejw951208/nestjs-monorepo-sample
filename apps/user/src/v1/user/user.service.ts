import { BaseException } from '@libs/common/exception/base.exception'
import { USER_ERROR } from '@libs/common/exception/error.code'
import { PrismaService, UserStatus } from '@libs/prisma/index'
import { Injectable } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { ClsService } from 'nestjs-cls'
import { UserResponseDto } from './dto/user-response.dto'
import { UserUpdateDto } from './dto/user-update.dto'

@Injectable()
export class UserService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly cls: ClsService
    ) {}

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
            data: { ...reqDto, updatedBy: this.cls.get('id') }
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

        const currentUserId = this.cls.get('id')
        await this.prisma.user.update({
            where: { id: userId },
            data: {
                status: UserStatus.WITHDRAWN,
                isDeleted: true,
                deletedAt: new Date(),
                deletedBy: currentUserId,
                updatedBy: currentUserId
            }
        })
    }
}
