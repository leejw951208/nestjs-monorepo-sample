import { Injectable } from '@nestjs/common'
import { ClsService } from 'nestjs-cls'

export interface ClsStore {
    userId: number
    aud: string | null
    userAgent: string
    clientIp: string
}

@Injectable()
export class ClsUtil {
    constructor(private readonly cls: ClsService) {}

    getUserId(): number {
        return this.cls.get('userId') ?? 0
    }

    getAud(): string | null {
        return this.cls.get('aud') ?? null
    }

    getUserAgent(): string {
        return this.cls.get('userAgent') ?? 'unknown'
    }

    getClientIp(): string {
        return this.cls.get('clientIp') ?? 'unknown'
    }

    get(): ClsStore {
        return {
            userId: this.getUserId(),
            aud: this.getAud(),
            userAgent: this.getUserAgent(),
            clientIp: this.getClientIp()
        }
    }
}
