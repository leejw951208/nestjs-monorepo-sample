import { INestApplication } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { DocumentBuilder, SwaggerCustomOptions, SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger'

export function setupSwagger(app: INestApplication): void {
    const config = app.get(ConfigService)

    const appName = config.get<string>('APP_NAME')

    const title = `${config.get<string>('APP_LABEL')} API Documents`
    const version = `${config.get<string>('APP_VERSION')}`
    const description = ``

    const swaggerUriV1 = `/api/v1/${appName}/docs`
    const documentBuilderV1 = swaggerConfig(title, version, description, swaggerUriV1)
    const customOptionsV1 = customOptions(title, swaggerUriV1)

    const swaggerUriV2 = `/api/v2/${appName}/docs`
    const documentBuilderV2 = swaggerConfig(title, version, description, swaggerUriV2)
    const customOptionsV2 = customOptions(title, swaggerUriV2)

    const documentOption: SwaggerDocumentOptions = {
        ignoreGlobalPrefix: false,
        extraModels: []
    }

    const documentV1 = SwaggerModule.createDocument(app, documentBuilderV1, documentOption)
    SwaggerModule.setup(swaggerUriV1, app, documentV1, customOptionsV1)
    const documentV2 = SwaggerModule.createDocument(app, documentBuilderV2, documentOption)
    SwaggerModule.setup(swaggerUriV2, app, documentV2, customOptionsV2)
}

const swaggerConfig = (title: string, version: string, description: string, server: string) => {
    const documentBuilder = new DocumentBuilder()
        .setTitle(title)
        .setDescription(description)
        .setVersion(version)
        .addServer(server)
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
    return documentBuilder
}

const customOptions = (title: string, server: string) => {
    return {
        customSiteTitle: title,
        yamlDocumentUrl: `${server}/yaml`,
        jsonDocumentUrl: `${server}/json`,
        swaggerOptions: {
            persistAuthorization: true,
            docExpansion: 'none'
        }
    }
}
