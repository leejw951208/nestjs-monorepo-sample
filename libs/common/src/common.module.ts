import { BcryptUtil } from '@libs/common/utils/bcrypt.util'
import { JwtUtil } from '@libs/common/utils/jwt.util'
import { Module } from '@nestjs/common'
import { JwtAccessStrategy } from './strategy/jwt-access.strategy'
import { JwtRefreshStrategy } from './strategy/jwt-refresh.strategy'
import { ClsUtil } from './utils/cls.util'

@Module({
    providers: [BcryptUtil, JwtUtil, ClsUtil, JwtAccessStrategy, JwtRefreshStrategy],
    exports: [BcryptUtil, JwtUtil, ClsUtil, JwtAccessStrategy, JwtRefreshStrategy]
})
export class CommonModule {}
