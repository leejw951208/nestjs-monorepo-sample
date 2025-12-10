import { applyDecorators, Type } from '@nestjs/common'
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger'
import { CursorPaginationResDto, OffsetPaginationResDto } from '../dto/pagination-response.dto'
import { ResponseDto } from '../dto/response.dto'

type Opts = { description?: string; dataKey?: string; mode?: 'offset' | 'cursor' }

function ApiOkPaginationResponse<TModel extends Type<unknown>>(model: TModel, opts: Opts = {}) {
    const dataKey = opts.dataKey ?? 'data'
    const Base = opts.mode === 'cursor' ? CursorPaginationResDto : OffsetPaginationResDto

    return applyDecorators(
        // 상속(OffsetPaginationResDto extends ResponseDto<T[]>)을 반영해 ResponseDto도 등록
        ApiExtraModels(ResponseDto, OffsetPaginationResDto, CursorPaginationResDto, model),
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

type ApiOkPaginationResponseOptions<T> = Opts & { type: T }

export const ApiOkOffsetPaginationResponse = <T extends Type<unknown>>(
    modelOrOptions: T | ApiOkPaginationResponseOptions<T>,
    opts: Omit<Opts, 'mode'> = {}
) => {
    if ('type' in modelOrOptions && modelOrOptions.type) {
        return ApiOkPaginationResponse(modelOrOptions.type, { ...modelOrOptions, mode: 'offset' })
    }
    return ApiOkPaginationResponse(modelOrOptions as T, { ...opts, mode: 'offset' })
}

export const ApiOkCursorPaginationResponse = <T extends Type<unknown>>(
    modelOrOptions: T | ApiOkPaginationResponseOptions<T>,
    opts: Omit<Opts, 'mode'> = {}
) => {
    if ('type' in modelOrOptions && modelOrOptions.type) {
        return ApiOkPaginationResponse(modelOrOptions.type, { ...modelOrOptions, mode: 'cursor' })
    }
    return ApiOkPaginationResponse(modelOrOptions as T, { ...opts, mode: 'cursor' })
}
