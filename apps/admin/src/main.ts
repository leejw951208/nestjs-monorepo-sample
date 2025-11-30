import { setupSwagger } from '@libs/common/config/swagger.config'
import { GlobalExceptionHandler } from '@libs/common/exception/global-exception-handler'
import { ClassSerializerInterceptor, ValidationPipe, VersioningType } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory, Reflector } from '@nestjs/core'
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston'
import { AppModule } from './app.module'
import cookieParser from 'cookie-parser'
import { SuccessStatusInterceptor } from '../../../libs/common/src/interceptor/success-status-interceptor/success-status-interceptor.interceptor'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    const config = app.get(ConfigService)

    const logger = app.get(WINSTON_MODULE_NEST_PROVIDER)
    app.useLogger(logger)
    app.useGlobalFilters(new GlobalExceptionHandler(logger))

    app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)))
    app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true, forbidNonWhitelisted: true, forbidUnknownValues: true }))

    // API 전역 설정
    const apiVersion = config.get<string>('admin.apiVersion') ?? 'v1'
    app.setGlobalPrefix('api')
    app.enableVersioning({
        type: VersioningType.URI,
        prefix: apiVersion.split('')[0] ?? 'v',
        defaultVersion: apiVersion.split('')[1] ?? '1'
    })

    app.enableShutdownHooks()

    app.use(cookieParser())

    app.useGlobalInterceptors(new SuccessStatusInterceptor())

    // 스웨거 설정
    setupSwagger(app)

    await app.listen(config.get<number>('admin.port') ?? 3000).then(() => {
        logger.log(
            `[Admin] App is running on port ${config.get<number>('admin.port') ?? 3000} in ${config.get<string>('admin.nodeEnv') ?? 'local'} environment,
                swagger: http://localhost:${config.get<number>('admin.port') ?? 3000}/api/${apiVersion}/${config.get<string>('admin.appName') ?? 'admin'}/docs
            `
        )
    })
}
bootstrap()
