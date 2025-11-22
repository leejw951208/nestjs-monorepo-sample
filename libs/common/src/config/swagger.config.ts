import { INestApplication } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { DocumentBuilder, SwaggerCustomOptions, SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger'

export function setupSwagger(app: INestApplication): void {
    const config = app.get(ConfigService)

    const title = `${config.get<string>('APP_NAME')} API Documents`
    const version = `${config.get<string>('APP_VERSION')}`
    const description = ``

    const appPrefix = config.get<string>('APP_PREFIX')
    const apiPrefix = appPrefix ? `${appPrefix}/api` : 'user/api'
    const swaggerUri = `${apiPrefix}/${config.get<string>('API_VERSION')}/docs`
    console.log(swaggerUri)
    const documentConfig = new DocumentBuilder()
        .setTitle(title)
        .setDescription(description)
        .setVersion(version)
        .addBearerAuth(
            {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
                in: 'header'
            },
            'JWT-Auth'
        )
        .build()
    const documentOption: SwaggerDocumentOptions = {
        ignoreGlobalPrefix: false,
        extraModels: []
    }
    const customOptions: SwaggerCustomOptions = {
        customSiteTitle: title,
        customfavIcon: '',
        yamlDocumentUrl: `${swaggerUri}/yaml`,
        jsonDocumentUrl: `${swaggerUri}/json`,
        swaggerOptions: {
            persistAuthorization: true,
            docExpansion: 'none'
        }
    }

    const document = SwaggerModule.createDocument(app, documentConfig, documentOption)
    SwaggerModule.setup(swaggerUri, app, document, customOptions)
}
