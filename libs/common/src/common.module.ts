import { BcryptUtil } from '@libs/common/util/bcrypt.util'
import { JwtUtil } from '@libs/common/util/jwt.util'
import { OtpUtil } from '@libs/common/util/otp.util'
import { EmailUtil } from '@libs/common/util/email.util'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigType } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import commonEnvConfig from './config/env/common-env.config'
import { JwtAccessStrategy } from './strategy/jwt-access.strategy'
import { JwtRefreshStrategy } from './strategy/jwt-refresh.strategy'
import { ClsUtil } from './util/cls.util'

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.registerAsync({
            global: true,
            imports: [ConfigModule],
            inject: [commonEnvConfig.KEY],
            useFactory: async (config: ConfigType<typeof commonEnvConfig>) => ({
                secret: config.jwtSecretKey
            })
        })
    ],
    providers: [BcryptUtil, JwtUtil, OtpUtil, EmailUtil, ClsUtil, JwtAccessStrategy, JwtRefreshStrategy],
    exports: [BcryptUtil, JwtUtil, OtpUtil, EmailUtil, ClsUtil, JwtAccessStrategy, JwtRefreshStrategy]
})
export class CommonModule {}
