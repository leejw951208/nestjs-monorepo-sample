import { registerAs } from '@nestjs/config'

export type CommonEnv = {
    nodeEnv: string
    databaseUrl: string
    jwtSecretKey: string
    jwtAccessExpiresIn: string
    jwtRefreshExpiresIn: string
    logDir: string
    prismaSchemaPath: string
    redisUrl: string
}

export default registerAs<CommonEnv>('common', () => ({
    nodeEnv: process.env.NODE_ENV ?? 'local',
    databaseUrl: process.env.DATABASE_URL ?? 'postgres://postgres:postgres@localhost:5432/monorepo',
    jwtSecretKey: process.env.JWT_SECRET_KEY ?? 'your-secret-key',
    jwtAccessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN ?? '1h',
    jwtRefreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN ?? '7d',
    logDir: process.env.LOG_DIR ?? 'logs',
    prismaSchemaPath: process.env.PRISMA_SCHEMA_PATH ?? 'prisma/schema.prisma',
    redisUrl: process.env.REDIS_URL ?? 'redis://localhost:6379'
}))
