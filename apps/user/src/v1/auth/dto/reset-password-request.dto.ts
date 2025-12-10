import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, Matches } from 'class-validator'

export class ResetPasswordRequestDto {
    @ApiProperty({ type: String, required: true, description: '로그인 아이디', example: 'testuser' })
    @IsNotEmpty({ message: '로그인 아이디는 필수입니다.' })
    @IsString({ message: '로그인 아이디는 문자열입니다.' })
    loginId: string

    @ApiProperty({ type: String, required: true, description: '이름', example: '홍길동' })
    @IsNotEmpty({ message: '이름은 필수입니다.' })
    @IsString({ message: '이름은 문자열입니다.' })
    name: string

    @ApiProperty({ type: String, required: true, description: '새 비밀번호', example: 'newpass1234!@' })
    @IsNotEmpty({ message: '새 비밀번호는 필수입니다.' })
    @IsString({ message: '새 비밀번호는 문자열입니다.' })
    @Matches(/^(?=.*[a-z])(?=.*\d).{8,}$/, {
        message: '비밀번호는 최소 8자 이상이며, 영문 소문자, 숫자를 각각 최소 1자 이상 포함해야 합니다.'
    })
    newPassword: string
}
