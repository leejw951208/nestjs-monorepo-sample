import { CommonModule } from '@libs/common/common.module'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { UserModule } from 'apps/user/src/v1/user/user.module'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

@Module({
    imports: [PassportModule.register({ defaultStrategy: 'jwt' }), CommonModule, UserModule],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}
