import { Public } from '@libs/common/decorator/public.decorator'
import { Controller, Get, HttpStatus } from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

const path = 'common'
@ApiTags(path)
@ApiBearerAuth('JWT-Auth')
@Controller({ path })
export class AppController {
    @ApiOperation({ summary: 'Health Check' })
    @ApiResponse({ status: HttpStatus.OK })
    @Public()
    @Get('health')
    health() {
        return {
            status: 'ok'
        }
    }
}
