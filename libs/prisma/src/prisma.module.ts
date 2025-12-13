import { ClsUtil } from '@libs/common/util/cls.util'
import { Global, Inject, Module, OnApplicationShutdown } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston'
import { Logger } from 'winston'
import { extendedPrismaClient, type ExtendedPrismaClient, PRISMA_CLIENT } from './prisma.factory'
import { CommonModule } from '@libs/common/common.module'

@Global()
@Module({
    imports: [CommonModule],
    providers: [
        {
            provide: PRISMA_CLIENT,
            inject: [ConfigService, ClsUtil, WINSTON_MODULE_NEST_PROVIDER],
            useFactory: (config: ConfigService, cls: ClsUtil, logger: Logger) => {
                // cls 타입 명시
                return extendedPrismaClient(config, cls, logger)
            }
        }
    ],
    exports: [PRISMA_CLIENT]
})
export class PrismaModule implements OnApplicationShutdown {
    constructor(@Inject(PRISMA_CLIENT) private readonly client: ExtendedPrismaClient) {}

    async onApplicationShutdown() {
        await this.client.$disconnect()
    }
}
