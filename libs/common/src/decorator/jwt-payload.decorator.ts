import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { JwtPayloadType } from '../utils/jwt.util'

export const JwtPayload = createParamDecorator((data: unknown, ctx: ExecutionContext): JwtPayloadType => {
    const request = ctx.switchToHttp().getRequest()
    return request.user
})
