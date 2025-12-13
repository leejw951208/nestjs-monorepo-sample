import { PRISMA_CLIENT, type ExtendedPrismaClient } from '@libs/prisma/prisma.factory'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Inject, Injectable } from '@nestjs/common'
import { Prisma, User } from '@prisma/client'
import { type Cache } from 'cache-manager'

@Injectable()
export class UserRepository {
    constructor(@Inject(PRISMA_CLIENT) private readonly prisma: ExtendedPrismaClient) {}

    async findUser(param: Prisma.UserFindFirstArgs, isDeleted: boolean = false): Promise<User | null> {
        return await this.prisma.user.findFirst({
            ...param,
            where: { ...param.where, isDeleted }
        })
    }

    async createUser(param: Prisma.UserCreateArgs): Promise<User> {
        return await this.prisma.user.create(param)
    }

    async updateUser(param: Prisma.UserUpdateArgs, isDeleted: boolean = false): Promise<User> {
        return await this.prisma.user.update({
            ...param,
            where: { ...param.where, isDeleted }
        })
    }

    async updateManyUser(param: Prisma.UserUpdateManyArgs, isDeleted: boolean = false): Promise<void> {
        await this.prisma.user.updateMany({
            ...param,
            where: { ...param.where, isDeleted }
        })
    }

    async deleteUser(param: Prisma.UserDeleteArgs, isDeleted: boolean = false): Promise<User> {
        return await this.prisma.user.delete({
            ...param,
            where: { ...param.where, isDeleted }
        })
    }
}
