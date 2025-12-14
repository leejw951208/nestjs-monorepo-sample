import { execSync } from 'node:child_process'
import dotenv from 'dotenv'
import path from 'node:path'
import { createInterface } from 'node:readline/promises'
import { stdin, stdout } from 'node:process'

async function main(): Promise<void> {
    // 1) NODE_ENV에서 환경을 읽거나 사용자에게 입력받기
    let env = process.env.NODE_ENV?.trim()

    // 환경 입력
    if (!env) {
        const rl = createInterface({ input: stdin, output: stdout })
        env = (await rl.question('환경 (test/local/dev): ')).trim()
        rl.close()
    } else {
        console.log(`NODE_ENV에서 감지된 환경: ${env}`)
    }

    // 2) 입력 검증
    if (!env) {
        console.error('❌ 환겨을 입력해야 합니다.')
        process.exit(1)
    }

    // 3) .env 파일 로드
    const envFilePath = path.resolve(process.cwd(), `envs/.env.${env}`)
    dotenv.config({ path: envFilePath })

    try {
        if (env === 'local' || env === 'dev' || env === 'test') {
            const schemaPath = path.resolve(process.cwd(), 'libs/prisma/config')
            console.log(`🚨 ${env} 환경 데이터베이스를 초기화합니다...`)
            execSync(`npx prisma migrate reset --force --schema=${schemaPath}`, { stdio: 'inherit' })
        } else {
            console.error(`❌ 지원되지 않는 환경: ${env}`)
            process.exit(1)
        }
    } catch (error) {
        console.error('❌ DB 초기화 중 오류가 발생했습니다.')
        process.exit(1)
    }
}

void main()
