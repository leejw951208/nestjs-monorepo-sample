import { ClsUtil } from '@libs/common/utils/cls.util'
import { Prisma } from '@prisma/client'
import { ClsService } from 'nestjs-cls'

const findOperations = ['findFirst', 'findFirstOrThrow', 'findMany', 'count', 'aggregate', 'groupBy'] as const
type FindOperation = (typeof findOperations)[number]

const orderableOperations = new Set<FindOperation>(['findFirst', 'findFirstOrThrow', 'findMany'])

const mergeWhere = <T extends object | undefined>(where: T): any => {
    if (!where) return { isDeleted: false }
    return { AND: [where, { isDeleted: false }] }
}

export const findExtension = Prisma.defineExtension({
    query: {
        $allModels: {
            async $allOperations({ operation, args, query }: { operation: string; args: any; query: (a: any) => any }) {
                if (args && 'withDeleted' in args) delete args.withDeleted

                if (findOperations.includes(operation as FindOperation)) {
                    args ??= {}
                    args.where = mergeWhere(args.where)
                    if (!args.orderBy && orderableOperations.has(operation as FindOperation)) args.orderBy = [{ id: 'desc' }]
                }
                return query(args)
            }
        }
    }
})

export const createExtension = (cls: ClsUtil) =>
    Prisma.defineExtension({
        query: {
            $allModels: {
                async create({ args, query }) {
                    args.data = { ...(args.data ?? {}), createdBy: cls.getUserId(), isDeleted: false }
                    return query(args)
                },
                async createMany({ args, query }) {
                    args.data = Array.isArray(args.data)
                        ? args.data.map((d: any) => ({ ...(d ?? {}), createdBy: cls.getUserId(), isDeleted: false }))
                        : { ...(args.data ?? {}), createdBy: cls.getUserId(), isDeleted: false }
                    return query(args)
                }
            }
        }
    })

export const updateExtension = (cls: ClsUtil) =>
    Prisma.defineExtension({
        query: {
            $allModels: {
                async update(this: object, { args, query }: { args: any; query: any }) {
                    args.data = { ...(args.data ?? {}), updatedBy: cls.getUserId(), updatedAt: new Date() }
                    return query(args)
                },
                async updateMany(this: object, { args, query }: { args: any; query: any }) {
                    args.data = Array.isArray(args.data)
                        ? args.data.map((d: any) => ({ ...(d ?? {}), updatedBy: cls.getUserId(), updatedAt: new Date() }))
                        : { ...(args.data ?? {}), updatedBy: cls.getUserId(), updatedAt: new Date() }
                    return query(args)
                }
            }
        }
    })

export const softDeleteExtension = (cls: ClsUtil) =>
    Prisma.defineExtension({
        model: {
            $allModels: {
                async softDelete<T>(this: T, args: Omit<Prisma.Args<T, 'update'>, 'data'> & { data?: Prisma.Args<T, 'update'>['data'] }) {
                    const ctx = Prisma.getExtensionContext(this) as any
                    return await ctx.update({
                        ...args,
                        data: { ...(args.data ?? {}), isDeleted: true, deletedBy: cls.getUserId(), deletedAt: new Date() }
                    })
                },
                async softDeleteMany<T>(
                    this: T,
                    args: Omit<Prisma.Args<T, 'updateMany'>, 'data'> & { data?: Prisma.Args<T, 'updateMany'>['data'] }
                ) {
                    const ctx = Prisma.getExtensionContext(this) as any
                    return await ctx.updateMany({
                        ...args,
                        data: { ...(args.data ?? {}), isDeleted: true, deletedBy: cls.getUserId(), deletedAt: new Date() }
                    })
                }
            }
        }
    })
