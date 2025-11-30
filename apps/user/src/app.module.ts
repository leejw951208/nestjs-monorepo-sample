import KeyvRedis from '@keyv/redis'
import commonEnvConfig from '@libs/common/config/env/common-env.config'
import { winstonModuleAsyncOptions } from '@libs/common/config/winston.config'
import { JwtAccessGuard } from '@libs/common/guard/jwt-access.guard'
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

import userEnvConfig from './config/env/user-env.config'
import { validateUserEnv } from './config/env/user-env.validator'
import { PostModule } from './v1/post/post.module'
import { UserModule } from './v1/user/user.module'
import { AuthModule } from './v1/auth/auth.module'

const childrenRoutes = [
    {
        path: '',
        module: UserModule
    },
    {
        path: 'auth',
        module: AuthModule
    },
    {
        path: 'post',
        module: PostModule
    }
]

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: [
                path.resolve(process.cwd(), `./envs/.env.${process.env.NODE_ENV}`), // 공통
                path.resolve(process.cwd(), `./apps/user/envs/.env.${process.env.NODE_ENV}`) // 앱 전용
            ],
            load: [userEnvConfig, commonEnvConfig],
            validate: validateUserEnv
        }),
        CacheModule.registerAsync({
            isGlobal: true,
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                stores: [new KeyvRedis(configService.get<string>('REDIS_URL'))]
            })
        }),
        ClsModule.forRoot({
            global: true,
            middleware: { mount: false }
        }),
        RouterModule.register([
            {
                path: 'user',
                module: AppModule,
                children: childrenRoutes
            }
        ]),
        WinstonModule.forRootAsync(winstonModuleAsyncOptions),
        PrismaModule,
        AuthModule,
        UserModule,
        PostModule
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
