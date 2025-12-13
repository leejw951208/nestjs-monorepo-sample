import { BaseModel } from '@libs/models/base/base.model'
import { TokenJwt } from '@prisma/client'

type CreateInput = Partial<TokenJwt> & {
    tokenId: number
    jti: string
}

export class TokenJwtModel extends BaseModel implements TokenJwt {
    tokenId: number
    jti: string

    private constructor(tokenId: number, jti: string) {
        super()
        this.tokenId = tokenId
        this.jti = jti
    }

    static create(input: CreateInput): TokenJwtModel {
        return new TokenJwtModel(input.tokenId, input.jti)
    }
}
