import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator'

export class PasswordResetVerifyRequestDto {
    @ApiProperty({ type: String, required: true, description: '이메일', example: 'testuser@user.com' })
    @IsNotEmpty({ message: '이메일은 필수입니다.' })
    @IsEmail({}, { message: '유효한 이메일 주소를 입력해주세요.' })
    email: string

    @ApiProperty({ type: String, required: true, description: 'OTP 6자리', example: '123456' })
    @IsNotEmpty({ message: 'OTP는 필수입니다.' })
    @IsString({ message: 'OTP는 문자열입니다.' })
    @Length(6, 6, { message: 'OTP는 6자리여야 합니다.' })
    otp: string
}
