import { BcryptUtil } from '@libs/common/utils/bcrypt.util'
import { JwtUtil } from '@libs/common/utils/jwt.util'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigType } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import commonEnvConfig from './config/env/common-env.config'
import { JwtAccessStrategy } from './strategy/jwt-access.strategy'
import { JwtRefreshStrategy } from './strategy/jwt-refresh.strategy'
import { ClsUtil } from './utils/cls.util'

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
    providers: [BcryptUtil, JwtUtil, ClsUtil, JwtAccessStrategy, JwtRefreshStrategy],
    exports: [BcryptUtil, JwtUtil, ClsUtil, JwtAccessStrategy, JwtRefreshStrategy]
})
export class CommonModule {}
