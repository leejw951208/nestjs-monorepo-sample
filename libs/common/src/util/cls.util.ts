import { Injectable } from '@nestjs/common'
import { ClsService } from 'nestjs-cls'

export interface ClsStore {
    id: number
    aud: string | null
    agent: string
    clientIp: string
}

@Injectable()
export class ClsUtil {
    constructor(private readonly cls: ClsService) {}

    getId(): number {
        return this.cls.get('id') ?? 0
    }

    getAud(): string | null {
        return this.cls.get('aud') ?? null
    }

    getAgent(): string {
        return this.cls.get('agent') ?? 'unknown'
    }

    getClientIp(): string {
        return this.cls.get('clientIp') ?? 'unknown'
    }

    get(): ClsStore {
        return {
            id: this.getId(),
            aud: this.getAud(),
            agent: this.getAgent(),
            clientIp: this.getClientIp()
        }
    }
}
