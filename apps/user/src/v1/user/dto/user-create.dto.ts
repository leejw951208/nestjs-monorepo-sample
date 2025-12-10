import { UserDto } from '@libs/models/user/user.dto'
import { ApiProperty } from '@nestjs/swagger'
import { Expose } from 'class-transformer'
import { IsNotEmpty, IsString } from 'class-validator'

export class UserCreateDto extends UserDto {
    @ApiProperty({ required: true, description: '비밀번호', example: 'user1234!@' })
    @IsNotEmpty()
    @IsString()
    @Expose()
    password: string
}
