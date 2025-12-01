import { CommonModule } from '@libs/common/common.module'
import { Module } from '@nestjs/common'
import { UserModule } from 'apps/user/src/v1/user/user.module'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

@Module({
    imports: [CommonModule, UserModule],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}
