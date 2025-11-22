import { setupSwagger } from '@libs/common/config/swagger.config'
import { GlobalExceptionHandler } from '@libs/common/exception/global-exception-handler'
import { SuccessStatusInterceptor } from '@libs/common/interceptor/success-status-interceptor/success-status-interceptor.interceptor'
import { ClassSerializerInterceptor, ValidationPipe, VersioningType } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory, Reflector } from '@nestjs/core'
import cookieParser from 'cookie-parser'
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston'
import { AppModule } from './app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    const config = app.get(ConfigService)

    const logger = app.get(WINSTON_MODULE_NEST_PROVIDER)
    app.useLogger(logger)
    app.useGlobalFilters(new GlobalExceptionHandler(logger))

    app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)))
    app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true, forbidNonWhitelisted: true, forbidUnknownValues: true }))

    // API 전역 설정
    const appPrefix = config.get<string>('APP_PREFIX')
    const apiPrefix = appPrefix ? `${appPrefix}/api` : 'user/api'
    app.setGlobalPrefix(apiPrefix)
    app.enableVersioning({
        type: VersioningType.URI,
        prefix: config.get<string>('API_VERSION')?.split('')[0] ?? 'v',
        defaultVersion: config.get<string>('API_VERSION')?.split('')[1] ?? '1'
    })

    app.enableShutdownHooks()

    app.use(cookieParser())

    app.useGlobalInterceptors(new SuccessStatusInterceptor())

    // 스웨거 설정
    setupSwagger(app)

    await app.listen(config.get<number>('user.port') ?? 3000).then(() => {
        logger.log(
            `[User] App is running on port ${config.get<number>('user.port') ?? 3000} in ${config.get<string>('user.nodeEnv') ?? 'local'} environment,
                swagger: http://localhost:${config.get<number>('user.port') ?? 3000}/${apiPrefix}/v1/docs
            `
        )
    })
}
bootstrap()
