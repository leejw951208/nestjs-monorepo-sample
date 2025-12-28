import { Global, Module } from '@nestjs/common'
import { CryptoService, TokenService } from './services'
import { JwtAccessStrategy } from './strategies/jwt-access.strategy'
import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy'
import { CustomThrottlerModule } from './throttler/custom-throttler.module'
import { RedisModule } from './redis'

@Global()
@Module({
    imports: [CustomThrottlerModule, RedisModule.forRootAsync()],
    providers: [CryptoService, TokenService, JwtAccessStrategy, JwtRefreshStrategy],
    exports: [CryptoService, TokenService, JwtAccessStrategy, JwtRefreshStrategy]
})
export class CommonModule {}
