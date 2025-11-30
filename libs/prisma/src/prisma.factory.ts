import { ClsUtil } from '@libs/common/utils/cls.util'
import { createExtension, softDeleteExtension, updateExtension } from '@libs/prisma/prisma-extension'
import { ConfigService } from '@nestjs/config'
import { Prisma, PrismaClient } from '@prisma/client'
import { Logger } from 'winston'

export const PRISMA_CLIENT = Symbol('PRISMA_CLIENT')

export const extendedPrismaClient = (config: ConfigService, cls: ClsUtil, logger: Logger) => {
    const client = new PrismaClient({
        datasources: { db: { url: config.get<string>('DATABASE_URL')! } },
        log: [{ emit: 'event', level: 'query' }]
    })

    client.$on('query', (e: Prisma.QueryEvent) => {
        logger.debug(`${e.query}: ${e.params}`)
    })

    return client.$extends(createExtension(cls)).$extends(updateExtension(cls)).$extends(softDeleteExtension(cls))
}

export type ExtendedPrismaClient = ReturnType<typeof extendedPrismaClient> & PrismaClient
