import { applyDecorators, Type } from '@nestjs/common'
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger'
import { ResponseDto } from '../dto/response.dto'

type Options = {
    description?: string
    dataKey?: string
    metaSchema?: Record<string, unknown>
}

function ApiOkBase<TModel extends Type<unknown>>(model: TModel, options: Options = {}) {
    const dataKey = options.dataKey ?? 'data'
    return applyDecorators(
        ApiExtraModels(ResponseDto, model),
        ApiOkResponse({
            description: options.description,
            schema: {
                type: 'object',
                properties: {
                    [dataKey]: { $ref: getSchemaPath(model) }
                },
                required: [dataKey]
            }
        })
    )
}

export const ApiOkBaseResponse = <T extends Type<unknown>>(modelOrOptions: T | (Options & { type: T })) => {
    if (typeof modelOrOptions === 'function') {
        return ApiOkBase(modelOrOptions)
    }
    const { type, ...rest } = modelOrOptions
    return ApiOkBase(type, rest)
}
