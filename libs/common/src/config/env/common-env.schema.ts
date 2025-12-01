import Joi from 'joi'

export const commonEnvSchema = Joi.object({
    DATABASE_URL: Joi.string().required(),
    JWT_SECRET_KEY: Joi.string().required(),
    JWT_ACCESS_EXPIRES_IN: Joi.string().required(),
    JWT_REFRESH_EXPIRES_IN: Joi.string().required(),
    LOG_DIR: Joi.string().required(),
    PRISMA_SCHEMA_PATH: Joi.string().required(),
    REDIS_URL: Joi.string().required(),
    NODE_ENV: Joi.string().required()
})
