export type Aud = 'admin' | 'api'

export type JwtPayload = {
    id: number // pk
    type: 'ac' | 're' // 토큰 타입
    aud: Aud // 토큰 수신자
    jti: string // 토큰 고유 값
    issuer: string // 토큰 발급자
}
