import { CommonModule, commonEnvConfig, CustomClsMiddleware, JwtAccessGuard, LoggerMiddleware, winstonModuleAsyncOptions } from '@libs/common'
import { PrismaModule } from '@libs/prisma'
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_GUARD } from '@nestjs/core'
import { WinstonModule } from 'nest-winston'
import { ClsModule } from 'nestjs-cls'
import * as path from 'path'
import { userEnvConfig } from './configs/user-env.config'
import { validateUserEnv } from './configs/user-env.validator'
import { AuthModule } from './v1/auth/auth.module'
import { NotificationModule } from './v1/notification/notification.module'
import { PostModule } from './v1/post/post.module'
import { UserModule } from './v1/user/user.module'

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: [
                path.resolve(process.cwd(), `./envs/.env.${process.env.NODE_ENV}`), // 공통
                path.resolve(process.cwd(), `./apps/user/envs/.env.${process.env.NODE_ENV}`) // 앱 전용
            ],
            load: [commonEnvConfig, userEnvConfig],
            validate: validateUserEnv
        }),
        ClsModule.forRoot({
            global: true,
            middleware: { mount: false }
        }),
        WinstonModule.forRootAsync(winstonModuleAsyncOptions),
        CommonModule,
        PrismaModule,
        AuthModule,
        UserModule,
        PostModule,
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
