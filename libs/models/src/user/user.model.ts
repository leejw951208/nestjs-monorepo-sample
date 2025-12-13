import { BaseModel } from '@libs/models/base/base.model'
import { User, UserStatus } from '@prisma/client'

export class UserModel extends BaseModel implements User {
    password: string
    email: string
    name: string
    phone: string
    status: UserStatus

    constructor(partial: Partial<UserModel>) {
        super()
        Object.assign(this, partial)
    }

    static create(input: Pick<User, 'password' | 'email' | 'name' | 'phone' | 'status'>): UserModel {
        return new UserModel(input)
    }
}
