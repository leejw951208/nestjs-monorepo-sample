import KeyvRedis from '@keyv/redis'
import commonEnvConfig from '@libs/common/config/env/common-env.config'
import { winstonModuleAsyncOptions } from '@libs/common/config/winston.config'
import { CustomClsMiddleware } from '@libs/common/middleware/cls.middleware'
import { LoggerMiddleware } from '@libs/common/middleware/logger.middleware'
import { PrismaModule } from '@libs/prisma/prisma.module'
import { CacheModule } from '@nestjs/cache-manager'
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { APP_GUARD, RouterModule } from '@nestjs/core'
import { WinstonModule } from 'nest-winston'
import { ClsModule } from 'nestjs-cls'
import * as path from 'path'
import { JwtAccessGuard } from '../../../libs/common/src/guard/jwt-access.guard'
import adminEnvConfig from './config/env/admin-env.config'
import { validateAdminEnv } from './config/env/admin-env.validator'
import { NotificationModule } from './v1/notification/notification.module'

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: [
                path.resolve(process.cwd(), `./envs/.env.${process.env.NODE_ENV}`), // 공통
                path.resolve(process.cwd(), `./apps/admin/envs/.env.${process.env.NODE_ENV}`) // 앱 전용
            ],
            load: [adminEnvConfig, commonEnvConfig],
            validate: validateAdminEnv
        }),
        CacheModule.registerAsync({
            isGlobal: true,
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                stores: [new KeyvRedis(configService.get<string>('common.redisUrl'))]
            })
        }),
        ClsModule.forRoot({
            global: true,
            middleware: { mount: false }
        }),
        RouterModule.register([
            {
                path: 'admin',
                module: AppModule
            }
        ]),
        WinstonModule.forRootAsync(winstonModuleAsyncOptions),
        PrismaModule,
        NotificationModule
    ],
    providers: [{ provide: APP_GUARD, useClass: JwtAccessGuard }]
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware)
            .forRoutes({ path: '*splat', method: RequestMethod.ALL })
            .apply(CustomClsMiddleware)
            .forRoutes({ path: '*splat', method: RequestMethod.ALL })
    }
}
