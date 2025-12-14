import { CryptoService } from '@libs/common/service/crypto.service'
import { TokenService } from '@libs/common/service/token.service'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigType } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import commonEnvConfig from './config/env/common-env.config'
import { JwtAccessStrategy } from './strategy/jwt-access.strategy'
import { JwtRefreshStrategy } from './strategy/jwt-refresh.strategy'

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
    providers: [CryptoService, TokenService, JwtAccessStrategy, JwtRefreshStrategy],
    exports: [CryptoService, TokenService, JwtAccessStrategy, JwtRefreshStrategy]
})
export class CommonModule {}
