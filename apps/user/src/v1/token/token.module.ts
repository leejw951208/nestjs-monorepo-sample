import { CommonModule } from '@libs/common/common.module'
import { Module } from '@nestjs/common'
import { TokenRepository } from './token.repository'
import { TokenService } from './token.service'

@Module({
    imports: [CommonModule],
    providers: [TokenService, TokenRepository],
    exports: [TokenService]
})
export class TokenModule {}
