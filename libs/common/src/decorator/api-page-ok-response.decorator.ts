import { applyDecorators, Type } from '@nestjs/common'
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger'
import { CursorPaginationResDto, OffsetPaginationResDto } from '../dto/pagination-res.dto'

type Opts = { description?: string; dataKey?: string; mode?: 'offset' | 'cursor' }

function ApiPageOkResponse<TModel extends Type<unknown>>(model: TModel, opts: Opts = {}) {
    const dataKey = opts.dataKey ?? 'data'
    const Base = opts.mode === 'cursor' ? CursorPaginationResDto : OffsetPaginationResDto

    return applyDecorators(
        // 참고: &&는 잘못됨. 모든 DTO를 등록해야 $ref가 유효
        ApiExtraModels(OffsetPaginationResDto, CursorPaginationResDto, model),
        ApiOkResponse({
            description: opts.description,
            schema: {
                allOf: [
                    { $ref: getSchemaPath(Base) },
                    {
                        type: 'object',
                        properties: {
                            [dataKey]: { type: 'array', items: { $ref: getSchemaPath(model) } }
                        }
                    }
                ]
            }
        })
    )
}

type ApiPageOkResponseOptions<T> = Opts & { type: T }

export const ApiOffsetPageOkResponse = <T extends Type<unknown>>(
    modelOrOptions: T | ApiPageOkResponseOptions<T>,
    opts: Omit<Opts, 'mode'> = {}
) => {
    if ('type' in modelOrOptions && modelOrOptions.type) {
        return ApiPageOkResponse(modelOrOptions.type, { ...modelOrOptions, mode: 'offset' })
    }
    return ApiPageOkResponse(modelOrOptions as T, { ...opts, mode: 'offset' })
}

export const ApiCursorPageOkResponse = <T extends Type<unknown>>(
    modelOrOptions: T | ApiPageOkResponseOptions<T>,
    opts: Omit<Opts, 'mode'> = {}
) => {
    if ('type' in modelOrOptions && modelOrOptions.type) {
        return ApiPageOkResponse(modelOrOptions.type, { ...modelOrOptions, mode: 'cursor' })
    }
    return ApiPageOkResponse(modelOrOptions as T, { ...opts, mode: 'cursor' })
}
