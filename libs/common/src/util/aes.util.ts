import { Inject, Injectable } from '@nestjs/common'
import commonEnvConfig from '../config/env/common-env.config'
import { type ConfigType } from '@nestjs/config'

@Injectable()
export class AesUtil {
    constructor(@Inject(commonEnvConfig.KEY) private readonly commonEnv: ConfigType<typeof commonEnvConfig>) {}

    // TODO: Implement encrypt method
    encrypt(data: string): string {
        // Placeholder implementation
        return data
    }
}
