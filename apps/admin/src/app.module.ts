import { winstonModuleAsyncOptions } from '@libs/common/config/winston.config'
import { CustomClsMiddleware } from '@libs/common/middleware/cls.middleware'
import { LoggerMiddleware } from '@libs/common/middleware/logger.middleware'
import { PrismaModule } from '@libs/prisma/prisma.module'
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { WinstonModule } from 'nest-winston'
import { ClsModule } from 'nestjs-cls'
import * as path from 'path'
import { AppController } from './app.controller'
import commonEnvConfig from '@libs/common/config/env/common-env.config'
import adminEnvConfig from './config/env/admin-env.config'
import { validateAdminEnv } from './config/env/admin-env.validator'

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: [
                path.resolve(process.cwd(), `./envs/.env.${process.env.NODE_ENV}`), // 공통
                path.resolve(process.cwd(), `./apps/admin/envs/.env.${process.env.NODE_ENV}`) // 앱 전용
            ],
            load: [commonEnvConfig, adminEnvConfig],
            validate: validateAdminEnv
        }),
        ClsModule.forRoot({
            global: true,
            middleware: { mount: false }
        }),
        WinstonModule.forRootAsync(winstonModuleAsyncOptions),
        PrismaModule
    ],
    controllers: [AppController]
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
