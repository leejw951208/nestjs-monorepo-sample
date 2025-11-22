import { execSync } from 'node:child_process'
import dotenv from 'dotenv'
import { resolve } from 'node:path'
import { createInterface } from 'node:readline/promises'
import { stdin, stdout } from 'node:process'

async function main(): Promise<void> {
    // 1) NODE_ENV에서 환경을 읽거나 사용자에게 입력받기
    let env = process.env.NODE_ENV?.trim()

    if (!env) {
        const rl = createInterface({ input: stdin, output: stdout })
        env = (await rl.question('환경 (local/dev/test/prod): ')).trim()
        rl.close()
    } else {
        console.log(`NODE_ENV에서 감지된 환경: ${env}`)
    }

    // 2) .env 파일 로드
    const envFilePath = resolve(process.cwd(), `./envs/.env.${env}`)
    dotenv.config({ path: envFilePath })

    // 3) 입력 검증
    if (!env) {
        console.error('❌ 환경을 입력해야 합니다.')
        process.exit(1)
    }

    // 공통 스키마 경로
    const schemaPath = `${resolve(process.cwd())}${process.env.PRISMA_SCHEMA_PATH}`

    // 4) 명령 실행
    try {
        if (env === 'local' || env === 'dev' || env === 'test') {
            console.log(`🚀 ${env} 환경에서 마이그레이션을 적용합니다.`)
            execSync(`npx prisma migrate dev --schema=${schemaPath}`, { stdio: 'inherit' })
        } else if (env === 'prod') {
            console.log('🚀 production 환경에서 마이그레이션을 배포합니다.')
            execSync(`npx prisma migrate deploy --schema=${schemaPath}`, { stdio: 'inherit' })
        } else {
            console.error(`❌ 지원되지 않는 환경: ${env}`)
            process.exit(1)
        }
    } catch (error) {
        console.error('❌ 마이그레이션 적용 중 오류가 발생했습니다.')
        process.exit(1)
    }
}

void main()
