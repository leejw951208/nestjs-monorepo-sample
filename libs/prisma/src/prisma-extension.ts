import { ClsUtil } from '@libs/common/utils/cls.util'
import { Prisma } from '@prisma/client'

export const createExtension = (clsUtil: ClsUtil) =>
    Prisma.defineExtension({
        query: {
            $allModels: {
                async create({ args, query }) {
                    args.data = { ...(args.data ?? {}), createdBy: clsUtil.getId() }
                    return query(args)
                },
                async createMany({ args, query }) {
                    args.data = Array.isArray(args.data)
                        ? args.data.map((d: any) => ({ ...(d ?? {}), createdBy: clsUtil.getId() }))
                        : { ...(args.data ?? {}), createdBy: clsUtil.getId() }
                    return query(args)
                }
            }
        }
    })

export const updateExtension = (clsUtil: ClsUtil) =>
    Prisma.defineExtension({
        query: {
            $allModels: {
                async update(this: object, { args, query }: { args: any; query: any }) {
                    args.data = { ...(args.data ?? {}), updatedBy: clsUtil.getId() }
                    return query(args)
                },
                async updateMany(this: object, { args, query }: { args: any; query: any }) {
                    args.data = Array.isArray(args.data)
                        ? args.data.map((d: any) => ({ ...(d ?? {}), updatedBy: clsUtil.getId() }))
                        : { ...(args.data ?? {}), updatedBy: clsUtil.getId() }
                    return query(args)
                }
            }
        }
    })

export const softDeleteExtension = (clsUtil: ClsUtil) =>
    Prisma.defineExtension({
        model: {
            $allModels: {
                async softDelete<T>(this: T, args: { where: any }): Promise<any> {
                    const context = Prisma.getExtensionContext(this)
                    return (context as any).update({
                        where: args.where,
                        data: {
                            isDeleted: true,
                            deletedAt: new Date(),
                            deletedBy: clsUtil.getId()
                        }
                    })
                },
                async softDeleteMany<T>(this: T, args: { where: any }): Promise<any> {
                    const context = Prisma.getExtensionContext(this)
                    return (context as any).updateMany({
                        where: args.where,
                        data: {
                            isDeleted: true,
                            deletedAt: new Date(),
                            deletedBy: clsUtil.getId()
                        }
                    })
                }
            }
        }
    })
