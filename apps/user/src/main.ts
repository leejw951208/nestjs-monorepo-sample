import { GlobalExceptionHandler, setupSwagger } from '@libs/common'
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
    app.setGlobalPrefix('api')
    app.enableVersioning({
        type: VersioningType.URI,
        prefix: 'v'
    })

    app.enableShutdownHooks()

    app.use(cookieParser())

    // 스웨거 설정
    setupSwagger(app)

    const port = config.get<number>('user.port') ?? 3000
    const nodeEnv = config.get<string>('user.nodeEnv') ?? 'local'

    await app.listen(port).then(() => {
        logger.log(
            `[User] App is running on port ${port} in ${nodeEnv} environment,
                swagger: http://localhost:${port}/api/docs
            `
        )
    })
}
bootstrap()
