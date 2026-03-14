import { ApiProperty } from '@nestjs/swagger'
import { Expose } from 'class-transformer'

export class PasswordResetVerifyResponseDto {
    @ApiProperty({ type: String, required: true, description: '비밀번호 재설정 토큰' })
    @Expose()
    resetToken: string
}
