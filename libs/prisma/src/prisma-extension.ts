import { ClsService } from 'nestjs-cls'
import { Prisma } from '@prisma/client'

export const createExtension = (cls: ClsService) =>
    Prisma.defineExtension({
        query: {
            $allModels: {
                async create({ args, query }) {
                    args.data = { ...(args.data ?? {}), createdBy: cls.get('id') ?? 0 }
                    return query(args)
                },
                async createMany({ args, query }) {
                    args.data = Array.isArray(args.data)
                        ? args.data.map((d: any) => ({ ...(d ?? {}), createdBy: cls.get('id') ?? 0 }))
                        : { ...(args.data ?? {}), createdBy: cls.get('id') ?? 0 }
                    return query(args)
                }
            }
        }
    })

export const updateExtension = (cls: ClsService) =>
    Prisma.defineExtension({
        query: {
            $allModels: {
                async update(this: object, { args, query }: { args: any; query: any }) {
                    args.data = { ...(args.data ?? {}), updatedBy: cls.get('id') ?? 0 }
                    return query(args)
                },
                async updateMany(this: object, { args, query }: { args: any; query: any }) {
                    args.data = Array.isArray(args.data)
                        ? args.data.map((d: any) => ({ ...(d ?? {}), updatedBy: cls.get('id') ?? 0 }))
                        : { ...(args.data ?? {}), updatedBy: cls.get('id') ?? 0 }
                    return query(args)
                }
            }
        }
    })

export const softDeleteExtension = (cls: ClsService) =>
    Prisma.defineExtension({
        model: {
            $allModels: {
                async softDelete<T>(this: T, args: { where: any; data?: any }): Promise<any> {
                    const context = Prisma.getExtensionContext(this)
                    return (context as any).update({
                        where: args.where,
                        data: {
                            ...(args.data ?? {}),
                            isDeleted: true,
                            deletedAt: new Date(),
                            deletedBy: cls.get('id') ?? 0
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
                            deletedBy: cls.get('id') ?? 0
                        }
                    })
                }
            }
        }
    })
