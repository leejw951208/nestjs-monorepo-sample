import { registerAs } from '@nestjs/config'

export interface UserEnv {
    appName: string
    appLabel: string
    appVersion: string
    apiVersion: string
    port: number
}

export default registerAs<UserEnv>('user', () => ({
    appName: process.env.APP_NAME ?? 'User',
    appLabel: process.env.APP_LABEL ?? 'User',
    appVersion: process.env.APP_VERSION ?? '0.0.1',
    apiVersion: process.env.API_VERSION ?? 'v1',
    port: Number(process.env.PORT) ?? 3000
}))
