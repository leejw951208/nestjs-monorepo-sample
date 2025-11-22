import { ClsUtil } from '@libs/common/utils/cls.util'
import { Global, Inject, Module, OnApplicationShutdown } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PrismaClient } from '@prisma/client'
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston'
import { Logger } from 'winston'
import { extendedPrismaClient, ExtendedPrismaClient } from './prisma.factory'
import { CommonModule } from '@libs/common/common.module'

@Global()
@Module({
    imports: [CommonModule],
    providers: [
        {
            provide: PrismaClient,
            inject: [ConfigService, ClsUtil, WINSTON_MODULE_NEST_PROVIDER],
            useFactory: (config: ConfigService, cls: ClsUtil, logger: Logger) => {
                // cls 타입 명시
                return extendedPrismaClient(config, cls, logger)
            }
        }
    ],
    exports: [PrismaClient]
})
export class PrismaModule implements OnApplicationShutdown {
    constructor(@Inject(PrismaClient) private readonly client: ExtendedPrismaClient) {}

    async onApplicationShutdown() {
        await this.client.$disconnect()
    }
}
