import { UserDto } from '@libs/models/user/user.dto'
import { ApiProperty, PickType } from '@nestjs/swagger'
import { IsOptional } from 'class-validator'

export class UserUpdateDto extends PickType(UserDto, ['email', 'phone']) {}
