
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model AdminRole
 * 
 */
export type AdminRole = $Result.DefaultSelection<Prisma.$AdminRolePayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model NotificationRead
 * 
 */
export type NotificationRead = $Result.DefaultSelection<Prisma.$NotificationReadPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Permission
 * 
 */
export type Permission = $Result.DefaultSelection<Prisma.$PermissionPayload>
/**
 * Model RolePermission
 * 
 */
export type RolePermission = $Result.DefaultSelection<Prisma.$RolePermissionPayload>
/**
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>
/**
 * Model TokenJwt
 * 
 */
export type TokenJwt = $Result.DefaultSelection<Prisma.$TokenJwtPayload>
/**
 * Model TokenFcm
 * 
 */
export type TokenFcm = $Result.DefaultSelection<Prisma.$TokenFcmPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserRole
 * 
 */
export type UserRole = $Result.DefaultSelection<Prisma.$UserRolePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  WITHDRAWN: 'WITHDRAWN'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const Owner: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Owner = (typeof Owner)[keyof typeof Owner]


export const Platform: {
  WEB: 'WEB',
  ANDROID: 'ANDROID',
  IOS: 'IOS'
};

export type Platform = (typeof Platform)[keyof typeof Platform]


export const TokenType: {
  JWT: 'JWT',
  FCM: 'FCM'
};

export type TokenType = (typeof TokenType)[keyof typeof TokenType]


export const PostStatus: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  HIDDEN: 'HIDDEN'
};

export type PostStatus = (typeof PostStatus)[keyof typeof PostStatus]


export const NotificationType: {
  SYSTEM: 'SYSTEM',
  POST: 'POST',
  COMMENT: 'COMMENT',
  USER: 'USER'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]

}

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type Owner = $Enums.Owner

export const Owner: typeof $Enums.Owner

export type Platform = $Enums.Platform

export const Platform: typeof $Enums.Platform

export type TokenType = $Enums.TokenType

export const TokenType: typeof $Enums.TokenType

export type PostStatus = $Enums.PostStatus

export const PostStatus: typeof $Enums.PostStatus

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminRole`: Exposes CRUD operations for the **AdminRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminRoles
    * const adminRoles = await prisma.adminRole.findMany()
    * ```
    */
  get adminRole(): Prisma.AdminRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificationRead`: Exposes CRUD operations for the **NotificationRead** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationReads
    * const notificationReads = await prisma.notificationRead.findMany()
    * ```
    */
  get notificationRead(): Prisma.NotificationReadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.PermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rolePermission`: Exposes CRUD operations for the **RolePermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RolePermissions
    * const rolePermissions = await prisma.rolePermission.findMany()
    * ```
    */
  get rolePermission(): Prisma.RolePermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tokenJwt`: Exposes CRUD operations for the **TokenJwt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TokenJwts
    * const tokenJwts = await prisma.tokenJwt.findMany()
    * ```
    */
  get tokenJwt(): Prisma.TokenJwtDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tokenFcm`: Exposes CRUD operations for the **TokenFcm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TokenFcms
    * const tokenFcms = await prisma.tokenFcm.findMany()
    * ```
    */
  get tokenFcm(): Prisma.TokenFcmDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRole`: Exposes CRUD operations for the **UserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoles
    * const userRoles = await prisma.userRole.findMany()
    * ```
    */
  get userRole(): Prisma.UserRoleDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Admin: 'Admin',
    AdminRole: 'AdminRole',
    Notification: 'Notification',
    NotificationRead: 'NotificationRead',
    Post: 'Post',
    Role: 'Role',
    Permission: 'Permission',
    RolePermission: 'RolePermission',
    Token: 'Token',
    TokenJwt: 'TokenJwt',
    TokenFcm: 'TokenFcm',
    User: 'User',
    UserRole: 'UserRole'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "adminRole" | "notification" | "notificationRead" | "post" | "role" | "permission" | "rolePermission" | "token" | "tokenJwt" | "tokenFcm" | "user" | "userRole"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      AdminRole: {
        payload: Prisma.$AdminRolePayload<ExtArgs>
        fields: Prisma.AdminRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRolePayload>
          }
          findFirst: {
            args: Prisma.AdminRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRolePayload>
          }
          findMany: {
            args: Prisma.AdminRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRolePayload>[]
          }
          create: {
            args: Prisma.AdminRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRolePayload>
          }
          createMany: {
            args: Prisma.AdminRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRolePayload>[]
          }
          delete: {
            args: Prisma.AdminRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRolePayload>
          }
          update: {
            args: Prisma.AdminRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRolePayload>
          }
          deleteMany: {
            args: Prisma.AdminRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRolePayload>[]
          }
          upsert: {
            args: Prisma.AdminRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRolePayload>
          }
          aggregate: {
            args: Prisma.AdminRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminRole>
          }
          groupBy: {
            args: Prisma.AdminRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminRoleCountArgs<ExtArgs>
            result: $Utils.Optional<AdminRoleCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      NotificationRead: {
        payload: Prisma.$NotificationReadPayload<ExtArgs>
        fields: Prisma.NotificationReadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationReadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationReadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadPayload>
          }
          findFirst: {
            args: Prisma.NotificationReadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationReadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadPayload>
          }
          findMany: {
            args: Prisma.NotificationReadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadPayload>[]
          }
          create: {
            args: Prisma.NotificationReadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadPayload>
          }
          createMany: {
            args: Prisma.NotificationReadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationReadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadPayload>[]
          }
          delete: {
            args: Prisma.NotificationReadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadPayload>
          }
          update: {
            args: Prisma.NotificationReadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadPayload>
          }
          deleteMany: {
            args: Prisma.NotificationReadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationReadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationReadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadPayload>[]
          }
          upsert: {
            args: Prisma.NotificationReadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadPayload>
          }
          aggregate: {
            args: Prisma.NotificationReadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationRead>
          }
          groupBy: {
            args: Prisma.NotificationReadGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationReadGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationReadCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationReadCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Permission: {
        payload: Prisma.$PermissionPayload<ExtArgs>
        fields: Prisma.PermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findFirst: {
            args: Prisma.PermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findMany: {
            args: Prisma.PermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          create: {
            args: Prisma.PermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          createMany: {
            args: Prisma.PermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          delete: {
            args: Prisma.PermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          update: {
            args: Prisma.PermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          deleteMany: {
            args: Prisma.PermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PermissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          upsert: {
            args: Prisma.PermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          aggregate: {
            args: Prisma.PermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermission>
          }
          groupBy: {
            args: Prisma.PermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionCountAggregateOutputType> | number
          }
        }
      }
      RolePermission: {
        payload: Prisma.$RolePermissionPayload<ExtArgs>
        fields: Prisma.RolePermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolePermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolePermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          findFirst: {
            args: Prisma.RolePermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolePermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          findMany: {
            args: Prisma.RolePermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>[]
          }
          create: {
            args: Prisma.RolePermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          createMany: {
            args: Prisma.RolePermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolePermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>[]
          }
          delete: {
            args: Prisma.RolePermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          update: {
            args: Prisma.RolePermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          deleteMany: {
            args: Prisma.RolePermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolePermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolePermissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>[]
          }
          upsert: {
            args: Prisma.RolePermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          aggregate: {
            args: Prisma.RolePermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRolePermission>
          }
          groupBy: {
            args: Prisma.RolePermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolePermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolePermissionCountArgs<ExtArgs>
            result: $Utils.Optional<RolePermissionCountAggregateOutputType> | number
          }
        }
      }
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      TokenJwt: {
        payload: Prisma.$TokenJwtPayload<ExtArgs>
        fields: Prisma.TokenJwtFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenJwtFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenJwtPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenJwtFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenJwtPayload>
          }
          findFirst: {
            args: Prisma.TokenJwtFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenJwtPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenJwtFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenJwtPayload>
          }
          findMany: {
            args: Prisma.TokenJwtFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenJwtPayload>[]
          }
          create: {
            args: Prisma.TokenJwtCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenJwtPayload>
          }
          createMany: {
            args: Prisma.TokenJwtCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenJwtCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenJwtPayload>[]
          }
          delete: {
            args: Prisma.TokenJwtDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenJwtPayload>
          }
          update: {
            args: Prisma.TokenJwtUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenJwtPayload>
          }
          deleteMany: {
            args: Prisma.TokenJwtDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenJwtUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenJwtUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenJwtPayload>[]
          }
          upsert: {
            args: Prisma.TokenJwtUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenJwtPayload>
          }
          aggregate: {
            args: Prisma.TokenJwtAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokenJwt>
          }
          groupBy: {
            args: Prisma.TokenJwtGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenJwtGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenJwtCountArgs<ExtArgs>
            result: $Utils.Optional<TokenJwtCountAggregateOutputType> | number
          }
        }
      }
      TokenFcm: {
        payload: Prisma.$TokenFcmPayload<ExtArgs>
        fields: Prisma.TokenFcmFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFcmFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenFcmPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFcmFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenFcmPayload>
          }
          findFirst: {
            args: Prisma.TokenFcmFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenFcmPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFcmFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenFcmPayload>
          }
          findMany: {
            args: Prisma.TokenFcmFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenFcmPayload>[]
          }
          create: {
            args: Prisma.TokenFcmCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenFcmPayload>
          }
          createMany: {
            args: Prisma.TokenFcmCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenFcmCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenFcmPayload>[]
          }
          delete: {
            args: Prisma.TokenFcmDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenFcmPayload>
          }
          update: {
            args: Prisma.TokenFcmUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenFcmPayload>
          }
          deleteMany: {
            args: Prisma.TokenFcmDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenFcmUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenFcmUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenFcmPayload>[]
          }
          upsert: {
            args: Prisma.TokenFcmUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenFcmPayload>
          }
          aggregate: {
            args: Prisma.TokenFcmAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokenFcm>
          }
          groupBy: {
            args: Prisma.TokenFcmGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenFcmGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenFcmCountArgs<ExtArgs>
            result: $Utils.Optional<TokenFcmCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserRole: {
        payload: Prisma.$UserRolePayload<ExtArgs>
        fields: Prisma.UserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findFirst: {
            args: Prisma.UserRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findMany: {
            args: Prisma.UserRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          create: {
            args: Prisma.UserRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          createMany: {
            args: Prisma.UserRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          delete: {
            args: Prisma.UserRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          update: {
            args: Prisma.UserRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          deleteMany: {
            args: Prisma.UserRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          upsert: {
            args: Prisma.UserRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          aggregate: {
            args: Prisma.UserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRole>
          }
          groupBy: {
            args: Prisma.UserRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRoleCountArgs<ExtArgs>
            result: $Utils.Optional<UserRoleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    admin?: AdminOmit
    adminRole?: AdminRoleOmit
    notification?: NotificationOmit
    notificationRead?: NotificationReadOmit
    post?: PostOmit
    role?: RoleOmit
    permission?: PermissionOmit
    rolePermission?: RolePermissionOmit
    token?: TokenOmit
    tokenJwt?: TokenJwtOmit
    tokenFcm?: TokenFcmOmit
    user?: UserOmit
    userRole?: UserRoleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    adminRoles: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adminRoles?: boolean | AdminCountOutputTypeCountAdminRolesArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountAdminRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminRoleWhereInput
  }


  /**
   * Count Type NotificationCountOutputType
   */

  export type NotificationCountOutputType = {
    notificationReads: number
  }

  export type NotificationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notificationReads?: boolean | NotificationCountOutputTypeCountNotificationReadsArgs
  }

  // Custom InputTypes
  /**
   * NotificationCountOutputType without action
   */
  export type NotificationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationCountOutputType
     */
    select?: NotificationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NotificationCountOutputType without action
   */
  export type NotificationCountOutputTypeCountNotificationReadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationReadWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    userRoles: number
    adminRoles: number
    rolePermissions: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userRoles?: boolean | RoleCountOutputTypeCountUserRolesArgs
    adminRoles?: boolean | RoleCountOutputTypeCountAdminRolesArgs
    rolePermissions?: boolean | RoleCountOutputTypeCountRolePermissionsArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUserRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountAdminRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminRoleWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountRolePermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionWhereInput
  }


  /**
   * Count Type PermissionCountOutputType
   */

  export type PermissionCountOutputType = {
    rolePermissions: number
  }

  export type PermissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolePermissions?: boolean | PermissionCountOutputTypeCountRolePermissionsArgs
  }

  // Custom InputTypes
  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionCountOutputType
     */
    select?: PermissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeCountRolePermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionWhereInput
  }


  /**
   * Count Type TokenCountOutputType
   */

  export type TokenCountOutputType = {
    tokenFcms: number
    tokenJwts: number
  }

  export type TokenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokenFcms?: boolean | TokenCountOutputTypeCountTokenFcmsArgs
    tokenJwts?: boolean | TokenCountOutputTypeCountTokenJwtsArgs
  }

  // Custom InputTypes
  /**
   * TokenCountOutputType without action
   */
  export type TokenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenCountOutputType
     */
    select?: TokenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TokenCountOutputType without action
   */
  export type TokenCountOutputTypeCountTokenFcmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenFcmWhereInput
  }

  /**
   * TokenCountOutputType without action
   */
  export type TokenCountOutputTypeCountTokenJwtsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenJwtWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userRoles: number
    posts: number
    notifications: number
    notificationReads: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userRoles?: boolean | UserCountOutputTypeCountUserRolesArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    notificationReads?: boolean | UserCountOutputTypeCountNotificationReadsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationReadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationReadWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    loginId: string | null
    password: string | null
    email: string | null
    name: string | null
    phone: string | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    loginId: string | null
    password: string | null
    email: string | null
    name: string | null
    phone: string | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    loginId: number
    password: number
    email: number
    name: number
    phone: number
    status: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    isDeleted: number
    deletedAt: number
    deletedBy: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    loginId?: true
    password?: true
    email?: true
    name?: true
    phone?: true
    status?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    loginId?: true
    password?: true
    email?: true
    name?: true
    phone?: true
    status?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    loginId?: true
    password?: true
    email?: true
    name?: true
    phone?: true
    status?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    loginId: string
    password: string
    email: string
    name: string
    phone: string
    status: $Enums.UserStatus
    createdAt: Date
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    loginId?: boolean
    password?: boolean
    email?: boolean
    name?: boolean
    phone?: boolean
    status?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    adminRoles?: boolean | Admin$adminRolesArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    loginId?: boolean
    password?: boolean
    email?: boolean
    name?: boolean
    phone?: boolean
    status?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    loginId?: boolean
    password?: boolean
    email?: boolean
    name?: boolean
    phone?: boolean
    status?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    loginId?: boolean
    password?: boolean
    email?: boolean
    name?: boolean
    phone?: boolean
    status?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "loginId" | "password" | "email" | "name" | "phone" | "status" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "isDeleted" | "deletedAt" | "deletedBy", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adminRoles?: boolean | Admin$adminRolesArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      adminRoles: Prisma.$AdminRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      loginId: string
      password: string
      email: string
      name: string
      phone: string
      status: $Enums.UserStatus
      createdAt: Date
      createdBy: number | null
      updatedAt: Date | null
      updatedBy: number | null
      isDeleted: boolean | null
      deletedAt: Date | null
      deletedBy: number | null
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    adminRoles<T extends Admin$adminRolesArgs<ExtArgs> = {}>(args?: Subset<T, Admin$adminRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly loginId: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly name: FieldRef<"Admin", 'String'>
    readonly phone: FieldRef<"Admin", 'String'>
    readonly status: FieldRef<"Admin", 'UserStatus'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly createdBy: FieldRef<"Admin", 'Int'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedBy: FieldRef<"Admin", 'Int'>
    readonly isDeleted: FieldRef<"Admin", 'Boolean'>
    readonly deletedAt: FieldRef<"Admin", 'DateTime'>
    readonly deletedBy: FieldRef<"Admin", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin.adminRoles
   */
  export type Admin$adminRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRole
     */
    select?: AdminRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminRole
     */
    omit?: AdminRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleInclude<ExtArgs> | null
    where?: AdminRoleWhereInput
    orderBy?: AdminRoleOrderByWithRelationInput | AdminRoleOrderByWithRelationInput[]
    cursor?: AdminRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminRoleScalarFieldEnum | AdminRoleScalarFieldEnum[]
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model AdminRole
   */

  export type AggregateAdminRole = {
    _count: AdminRoleCountAggregateOutputType | null
    _avg: AdminRoleAvgAggregateOutputType | null
    _sum: AdminRoleSumAggregateOutputType | null
    _min: AdminRoleMinAggregateOutputType | null
    _max: AdminRoleMaxAggregateOutputType | null
  }

  export type AdminRoleAvgAggregateOutputType = {
    id: number | null
    adminId: number | null
    roleId: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type AdminRoleSumAggregateOutputType = {
    id: number | null
    adminId: number | null
    roleId: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type AdminRoleMinAggregateOutputType = {
    id: number | null
    adminId: number | null
    roleId: number | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type AdminRoleMaxAggregateOutputType = {
    id: number | null
    adminId: number | null
    roleId: number | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type AdminRoleCountAggregateOutputType = {
    id: number
    adminId: number
    roleId: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    isDeleted: number
    deletedAt: number
    deletedBy: number
    _all: number
  }


  export type AdminRoleAvgAggregateInputType = {
    id?: true
    adminId?: true
    roleId?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type AdminRoleSumAggregateInputType = {
    id?: true
    adminId?: true
    roleId?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type AdminRoleMinAggregateInputType = {
    id?: true
    adminId?: true
    roleId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type AdminRoleMaxAggregateInputType = {
    id?: true
    adminId?: true
    roleId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type AdminRoleCountAggregateInputType = {
    id?: true
    adminId?: true
    roleId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
    _all?: true
  }

  export type AdminRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminRole to aggregate.
     */
    where?: AdminRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminRoles to fetch.
     */
    orderBy?: AdminRoleOrderByWithRelationInput | AdminRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminRoles
    **/
    _count?: true | AdminRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminRoleMaxAggregateInputType
  }

  export type GetAdminRoleAggregateType<T extends AdminRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminRole[P]>
      : GetScalarType<T[P], AggregateAdminRole[P]>
  }




  export type AdminRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminRoleWhereInput
    orderBy?: AdminRoleOrderByWithAggregationInput | AdminRoleOrderByWithAggregationInput[]
    by: AdminRoleScalarFieldEnum[] | AdminRoleScalarFieldEnum
    having?: AdminRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminRoleCountAggregateInputType | true
    _avg?: AdminRoleAvgAggregateInputType
    _sum?: AdminRoleSumAggregateInputType
    _min?: AdminRoleMinAggregateInputType
    _max?: AdminRoleMaxAggregateInputType
  }

  export type AdminRoleGroupByOutputType = {
    id: number
    adminId: number
    roleId: number
    createdAt: Date
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
    _count: AdminRoleCountAggregateOutputType | null
    _avg: AdminRoleAvgAggregateOutputType | null
    _sum: AdminRoleSumAggregateOutputType | null
    _min: AdminRoleMinAggregateOutputType | null
    _max: AdminRoleMaxAggregateOutputType | null
  }

  type GetAdminRoleGroupByPayload<T extends AdminRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminRoleGroupByOutputType[P]>
            : GetScalarType<T[P], AdminRoleGroupByOutputType[P]>
        }
      >
    >


  export type AdminRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    roleId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminRole"]>

  export type AdminRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    roleId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminRole"]>

  export type AdminRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    roleId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminRole"]>

  export type AdminRoleSelectScalar = {
    id?: boolean
    adminId?: boolean
    roleId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }

  export type AdminRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "adminId" | "roleId" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "isDeleted" | "deletedAt" | "deletedBy", ExtArgs["result"]["adminRole"]>
  export type AdminRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type AdminRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type AdminRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $AdminRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminRole"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      adminId: number
      roleId: number
      createdAt: Date
      createdBy: number | null
      updatedAt: Date | null
      updatedBy: number | null
      isDeleted: boolean | null
      deletedAt: Date | null
      deletedBy: number | null
    }, ExtArgs["result"]["adminRole"]>
    composites: {}
  }

  type AdminRoleGetPayload<S extends boolean | null | undefined | AdminRoleDefaultArgs> = $Result.GetResult<Prisma.$AdminRolePayload, S>

  type AdminRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminRoleCountAggregateInputType | true
    }

  export interface AdminRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminRole'], meta: { name: 'AdminRole' } }
    /**
     * Find zero or one AdminRole that matches the filter.
     * @param {AdminRoleFindUniqueArgs} args - Arguments to find a AdminRole
     * @example
     * // Get one AdminRole
     * const adminRole = await prisma.adminRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminRoleFindUniqueArgs>(args: SelectSubset<T, AdminRoleFindUniqueArgs<ExtArgs>>): Prisma__AdminRoleClient<$Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminRoleFindUniqueOrThrowArgs} args - Arguments to find a AdminRole
     * @example
     * // Get one AdminRole
     * const adminRole = await prisma.adminRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminRoleClient<$Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRoleFindFirstArgs} args - Arguments to find a AdminRole
     * @example
     * // Get one AdminRole
     * const adminRole = await prisma.adminRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminRoleFindFirstArgs>(args?: SelectSubset<T, AdminRoleFindFirstArgs<ExtArgs>>): Prisma__AdminRoleClient<$Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRoleFindFirstOrThrowArgs} args - Arguments to find a AdminRole
     * @example
     * // Get one AdminRole
     * const adminRole = await prisma.adminRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminRoleClient<$Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminRoles
     * const adminRoles = await prisma.adminRole.findMany()
     * 
     * // Get first 10 AdminRoles
     * const adminRoles = await prisma.adminRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminRoleWithIdOnly = await prisma.adminRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminRoleFindManyArgs>(args?: SelectSubset<T, AdminRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminRole.
     * @param {AdminRoleCreateArgs} args - Arguments to create a AdminRole.
     * @example
     * // Create one AdminRole
     * const AdminRole = await prisma.adminRole.create({
     *   data: {
     *     // ... data to create a AdminRole
     *   }
     * })
     * 
     */
    create<T extends AdminRoleCreateArgs>(args: SelectSubset<T, AdminRoleCreateArgs<ExtArgs>>): Prisma__AdminRoleClient<$Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminRoles.
     * @param {AdminRoleCreateManyArgs} args - Arguments to create many AdminRoles.
     * @example
     * // Create many AdminRoles
     * const adminRole = await prisma.adminRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminRoleCreateManyArgs>(args?: SelectSubset<T, AdminRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminRoles and returns the data saved in the database.
     * @param {AdminRoleCreateManyAndReturnArgs} args - Arguments to create many AdminRoles.
     * @example
     * // Create many AdminRoles
     * const adminRole = await prisma.adminRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminRoles and only return the `id`
     * const adminRoleWithIdOnly = await prisma.adminRole.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminRole.
     * @param {AdminRoleDeleteArgs} args - Arguments to delete one AdminRole.
     * @example
     * // Delete one AdminRole
     * const AdminRole = await prisma.adminRole.delete({
     *   where: {
     *     // ... filter to delete one AdminRole
     *   }
     * })
     * 
     */
    delete<T extends AdminRoleDeleteArgs>(args: SelectSubset<T, AdminRoleDeleteArgs<ExtArgs>>): Prisma__AdminRoleClient<$Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminRole.
     * @param {AdminRoleUpdateArgs} args - Arguments to update one AdminRole.
     * @example
     * // Update one AdminRole
     * const adminRole = await prisma.adminRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminRoleUpdateArgs>(args: SelectSubset<T, AdminRoleUpdateArgs<ExtArgs>>): Prisma__AdminRoleClient<$Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminRoles.
     * @param {AdminRoleDeleteManyArgs} args - Arguments to filter AdminRoles to delete.
     * @example
     * // Delete a few AdminRoles
     * const { count } = await prisma.adminRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminRoleDeleteManyArgs>(args?: SelectSubset<T, AdminRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminRoles
     * const adminRole = await prisma.adminRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminRoleUpdateManyArgs>(args: SelectSubset<T, AdminRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminRoles and returns the data updated in the database.
     * @param {AdminRoleUpdateManyAndReturnArgs} args - Arguments to update many AdminRoles.
     * @example
     * // Update many AdminRoles
     * const adminRole = await prisma.adminRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminRoles and only return the `id`
     * const adminRoleWithIdOnly = await prisma.adminRole.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminRole.
     * @param {AdminRoleUpsertArgs} args - Arguments to update or create a AdminRole.
     * @example
     * // Update or create a AdminRole
     * const adminRole = await prisma.adminRole.upsert({
     *   create: {
     *     // ... data to create a AdminRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminRole we want to update
     *   }
     * })
     */
    upsert<T extends AdminRoleUpsertArgs>(args: SelectSubset<T, AdminRoleUpsertArgs<ExtArgs>>): Prisma__AdminRoleClient<$Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRoleCountArgs} args - Arguments to filter AdminRoles to count.
     * @example
     * // Count the number of AdminRoles
     * const count = await prisma.adminRole.count({
     *   where: {
     *     // ... the filter for the AdminRoles we want to count
     *   }
     * })
    **/
    count<T extends AdminRoleCountArgs>(
      args?: Subset<T, AdminRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminRoleAggregateArgs>(args: Subset<T, AdminRoleAggregateArgs>): Prisma.PrismaPromise<GetAdminRoleAggregateType<T>>

    /**
     * Group by AdminRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminRoleGroupByArgs['orderBy'] }
        : { orderBy?: AdminRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminRole model
   */
  readonly fields: AdminRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdminRole model
   */
  interface AdminRoleFieldRefs {
    readonly id: FieldRef<"AdminRole", 'Int'>
    readonly adminId: FieldRef<"AdminRole", 'Int'>
    readonly roleId: FieldRef<"AdminRole", 'Int'>
    readonly createdAt: FieldRef<"AdminRole", 'DateTime'>
    readonly createdBy: FieldRef<"AdminRole", 'Int'>
    readonly updatedAt: FieldRef<"AdminRole", 'DateTime'>
    readonly updatedBy: FieldRef<"AdminRole", 'Int'>
    readonly isDeleted: FieldRef<"AdminRole", 'Boolean'>
    readonly deletedAt: FieldRef<"AdminRole", 'DateTime'>
    readonly deletedBy: FieldRef<"AdminRole", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AdminRole findUnique
   */
  export type AdminRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRole
     */
    select?: AdminRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminRole
     */
    omit?: AdminRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleInclude<ExtArgs> | null
    /**
     * Filter, which AdminRole to fetch.
     */
    where: AdminRoleWhereUniqueInput
  }

  /**
   * AdminRole findUniqueOrThrow
   */
  export type AdminRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRole
     */
    select?: AdminRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminRole
     */
    omit?: AdminRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleInclude<ExtArgs> | null
    /**
     * Filter, which AdminRole to fetch.
     */
    where: AdminRoleWhereUniqueInput
  }

  /**
   * AdminRole findFirst
   */
  export type AdminRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRole
     */
    select?: AdminRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminRole
     */
    omit?: AdminRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleInclude<ExtArgs> | null
    /**
     * Filter, which AdminRole to fetch.
     */
    where?: AdminRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminRoles to fetch.
     */
    orderBy?: AdminRoleOrderByWithRelationInput | AdminRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminRoles.
     */
    cursor?: AdminRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminRoles.
     */
    distinct?: AdminRoleScalarFieldEnum | AdminRoleScalarFieldEnum[]
  }

  /**
   * AdminRole findFirstOrThrow
   */
  export type AdminRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRole
     */
    select?: AdminRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminRole
     */
    omit?: AdminRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleInclude<ExtArgs> | null
    /**
     * Filter, which AdminRole to fetch.
     */
    where?: AdminRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminRoles to fetch.
     */
    orderBy?: AdminRoleOrderByWithRelationInput | AdminRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminRoles.
     */
    cursor?: AdminRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminRoles.
     */
    distinct?: AdminRoleScalarFieldEnum | AdminRoleScalarFieldEnum[]
  }

  /**
   * AdminRole findMany
   */
  export type AdminRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRole
     */
    select?: AdminRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminRole
     */
    omit?: AdminRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleInclude<ExtArgs> | null
    /**
     * Filter, which AdminRoles to fetch.
     */
    where?: AdminRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminRoles to fetch.
     */
    orderBy?: AdminRoleOrderByWithRelationInput | AdminRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminRoles.
     */
    cursor?: AdminRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminRoles.
     */
    skip?: number
    distinct?: AdminRoleScalarFieldEnum | AdminRoleScalarFieldEnum[]
  }

  /**
   * AdminRole create
   */
  export type AdminRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRole
     */
    select?: AdminRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminRole
     */
    omit?: AdminRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a AdminRole.
     */
    data: XOR<AdminRoleCreateInput, AdminRoleUncheckedCreateInput>
  }

  /**
   * AdminRole createMany
   */
  export type AdminRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminRoles.
     */
    data: AdminRoleCreateManyInput | AdminRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminRole createManyAndReturn
   */
  export type AdminRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRole
     */
    select?: AdminRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminRole
     */
    omit?: AdminRoleOmit<ExtArgs> | null
    /**
     * The data used to create many AdminRoles.
     */
    data: AdminRoleCreateManyInput | AdminRoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdminRole update
   */
  export type AdminRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRole
     */
    select?: AdminRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminRole
     */
    omit?: AdminRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a AdminRole.
     */
    data: XOR<AdminRoleUpdateInput, AdminRoleUncheckedUpdateInput>
    /**
     * Choose, which AdminRole to update.
     */
    where: AdminRoleWhereUniqueInput
  }

  /**
   * AdminRole updateMany
   */
  export type AdminRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminRoles.
     */
    data: XOR<AdminRoleUpdateManyMutationInput, AdminRoleUncheckedUpdateManyInput>
    /**
     * Filter which AdminRoles to update
     */
    where?: AdminRoleWhereInput
    /**
     * Limit how many AdminRoles to update.
     */
    limit?: number
  }

  /**
   * AdminRole updateManyAndReturn
   */
  export type AdminRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRole
     */
    select?: AdminRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminRole
     */
    omit?: AdminRoleOmit<ExtArgs> | null
    /**
     * The data used to update AdminRoles.
     */
    data: XOR<AdminRoleUpdateManyMutationInput, AdminRoleUncheckedUpdateManyInput>
    /**
     * Filter which AdminRoles to update
     */
    where?: AdminRoleWhereInput
    /**
     * Limit how many AdminRoles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdminRole upsert
   */
  export type AdminRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRole
     */
    select?: AdminRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminRole
     */
    omit?: AdminRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the AdminRole to update in case it exists.
     */
    where: AdminRoleWhereUniqueInput
    /**
     * In case the AdminRole found by the `where` argument doesn't exist, create a new AdminRole with this data.
     */
    create: XOR<AdminRoleCreateInput, AdminRoleUncheckedCreateInput>
    /**
     * In case the AdminRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminRoleUpdateInput, AdminRoleUncheckedUpdateInput>
  }

  /**
   * AdminRole delete
   */
  export type AdminRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRole
     */
    select?: AdminRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminRole
     */
    omit?: AdminRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleInclude<ExtArgs> | null
    /**
     * Filter which AdminRole to delete.
     */
    where: AdminRoleWhereUniqueInput
  }

  /**
   * AdminRole deleteMany
   */
  export type AdminRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminRoles to delete
     */
    where?: AdminRoleWhereInput
    /**
     * Limit how many AdminRoles to delete.
     */
    limit?: number
  }

  /**
   * AdminRole without action
   */
  export type AdminRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRole
     */
    select?: AdminRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminRole
     */
    omit?: AdminRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    userId: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    content: string | null
    type: $Enums.NotificationType | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    content: string | null
    type: $Enums.NotificationType | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    content: number
    type: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    isDeleted: number
    deletedAt: number
    deletedBy: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    userId?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    userId?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    type?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    type?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    type?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    userId: number | null
    title: string
    content: string
    type: $Enums.NotificationType
    createdAt: Date
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    user?: boolean | Notification$userArgs<ExtArgs>
    notificationReads?: boolean | Notification$notificationReadsArgs<ExtArgs>
    _count?: boolean | NotificationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    user?: boolean | Notification$userArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    user?: boolean | Notification$userArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "content" | "type" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "isDeleted" | "deletedAt" | "deletedBy", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Notification$userArgs<ExtArgs>
    notificationReads?: boolean | Notification$notificationReadsArgs<ExtArgs>
    _count?: boolean | NotificationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Notification$userArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Notification$userArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      notificationReads: Prisma.$NotificationReadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      title: string
      content: string
      type: $Enums.NotificationType
      createdAt: Date
      createdBy: number | null
      updatedAt: Date | null
      updatedBy: number | null
      isDeleted: boolean | null
      deletedAt: Date | null
      deletedBy: number | null
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Notification$userArgs<ExtArgs> = {}>(args?: Subset<T, Notification$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    notificationReads<T extends Notification$notificationReadsArgs<ExtArgs> = {}>(args?: Subset<T, Notification$notificationReadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly userId: FieldRef<"Notification", 'Int'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly content: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly createdBy: FieldRef<"Notification", 'Int'>
    readonly updatedAt: FieldRef<"Notification", 'DateTime'>
    readonly updatedBy: FieldRef<"Notification", 'Int'>
    readonly isDeleted: FieldRef<"Notification", 'Boolean'>
    readonly deletedAt: FieldRef<"Notification", 'DateTime'>
    readonly deletedBy: FieldRef<"Notification", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification.user
   */
  export type Notification$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Notification.notificationReads
   */
  export type Notification$notificationReadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadInclude<ExtArgs> | null
    where?: NotificationReadWhereInput
    orderBy?: NotificationReadOrderByWithRelationInput | NotificationReadOrderByWithRelationInput[]
    cursor?: NotificationReadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationReadScalarFieldEnum | NotificationReadScalarFieldEnum[]
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model NotificationRead
   */

  export type AggregateNotificationRead = {
    _count: NotificationReadCountAggregateOutputType | null
    _avg: NotificationReadAvgAggregateOutputType | null
    _sum: NotificationReadSumAggregateOutputType | null
    _min: NotificationReadMinAggregateOutputType | null
    _max: NotificationReadMaxAggregateOutputType | null
  }

  export type NotificationReadAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    notificationId: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type NotificationReadSumAggregateOutputType = {
    id: number | null
    userId: number | null
    notificationId: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type NotificationReadMinAggregateOutputType = {
    id: number | null
    userId: number | null
    notificationId: number | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type NotificationReadMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    notificationId: number | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type NotificationReadCountAggregateOutputType = {
    id: number
    userId: number
    notificationId: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    isDeleted: number
    deletedAt: number
    deletedBy: number
    _all: number
  }


  export type NotificationReadAvgAggregateInputType = {
    id?: true
    userId?: true
    notificationId?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type NotificationReadSumAggregateInputType = {
    id?: true
    userId?: true
    notificationId?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type NotificationReadMinAggregateInputType = {
    id?: true
    userId?: true
    notificationId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type NotificationReadMaxAggregateInputType = {
    id?: true
    userId?: true
    notificationId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type NotificationReadCountAggregateInputType = {
    id?: true
    userId?: true
    notificationId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
    _all?: true
  }

  export type NotificationReadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationRead to aggregate.
     */
    where?: NotificationReadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationReads to fetch.
     */
    orderBy?: NotificationReadOrderByWithRelationInput | NotificationReadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationReadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationReads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationReads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationReads
    **/
    _count?: true | NotificationReadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationReadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationReadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationReadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationReadMaxAggregateInputType
  }

  export type GetNotificationReadAggregateType<T extends NotificationReadAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationRead]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationRead[P]>
      : GetScalarType<T[P], AggregateNotificationRead[P]>
  }




  export type NotificationReadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationReadWhereInput
    orderBy?: NotificationReadOrderByWithAggregationInput | NotificationReadOrderByWithAggregationInput[]
    by: NotificationReadScalarFieldEnum[] | NotificationReadScalarFieldEnum
    having?: NotificationReadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationReadCountAggregateInputType | true
    _avg?: NotificationReadAvgAggregateInputType
    _sum?: NotificationReadSumAggregateInputType
    _min?: NotificationReadMinAggregateInputType
    _max?: NotificationReadMaxAggregateInputType
  }

  export type NotificationReadGroupByOutputType = {
    id: number
    userId: number
    notificationId: number
    createdAt: Date
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
    _count: NotificationReadCountAggregateOutputType | null
    _avg: NotificationReadAvgAggregateOutputType | null
    _sum: NotificationReadSumAggregateOutputType | null
    _min: NotificationReadMinAggregateOutputType | null
    _max: NotificationReadMaxAggregateOutputType | null
  }

  type GetNotificationReadGroupByPayload<T extends NotificationReadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationReadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationReadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationReadGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationReadGroupByOutputType[P]>
        }
      >
    >


  export type NotificationReadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    notificationId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationRead"]>

  export type NotificationReadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    notificationId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationRead"]>

  export type NotificationReadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    notificationId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationRead"]>

  export type NotificationReadSelectScalar = {
    id?: boolean
    userId?: boolean
    notificationId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }

  export type NotificationReadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "notificationId" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "isDeleted" | "deletedAt" | "deletedBy", ExtArgs["result"]["notificationRead"]>
  export type NotificationReadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
  }
  export type NotificationReadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
  }
  export type NotificationReadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
  }

  export type $NotificationReadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationRead"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      notification: Prisma.$NotificationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      notificationId: number
      createdAt: Date
      createdBy: number | null
      updatedAt: Date | null
      updatedBy: number | null
      isDeleted: boolean | null
      deletedAt: Date | null
      deletedBy: number | null
    }, ExtArgs["result"]["notificationRead"]>
    composites: {}
  }

  type NotificationReadGetPayload<S extends boolean | null | undefined | NotificationReadDefaultArgs> = $Result.GetResult<Prisma.$NotificationReadPayload, S>

  type NotificationReadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationReadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationReadCountAggregateInputType | true
    }

  export interface NotificationReadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationRead'], meta: { name: 'NotificationRead' } }
    /**
     * Find zero or one NotificationRead that matches the filter.
     * @param {NotificationReadFindUniqueArgs} args - Arguments to find a NotificationRead
     * @example
     * // Get one NotificationRead
     * const notificationRead = await prisma.notificationRead.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationReadFindUniqueArgs>(args: SelectSubset<T, NotificationReadFindUniqueArgs<ExtArgs>>): Prisma__NotificationReadClient<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NotificationRead that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationReadFindUniqueOrThrowArgs} args - Arguments to find a NotificationRead
     * @example
     * // Get one NotificationRead
     * const notificationRead = await prisma.notificationRead.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationReadFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationReadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationReadClient<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationRead that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationReadFindFirstArgs} args - Arguments to find a NotificationRead
     * @example
     * // Get one NotificationRead
     * const notificationRead = await prisma.notificationRead.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationReadFindFirstArgs>(args?: SelectSubset<T, NotificationReadFindFirstArgs<ExtArgs>>): Prisma__NotificationReadClient<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationRead that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationReadFindFirstOrThrowArgs} args - Arguments to find a NotificationRead
     * @example
     * // Get one NotificationRead
     * const notificationRead = await prisma.notificationRead.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationReadFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationReadFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationReadClient<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotificationReads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationReadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationReads
     * const notificationReads = await prisma.notificationRead.findMany()
     * 
     * // Get first 10 NotificationReads
     * const notificationReads = await prisma.notificationRead.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationReadWithIdOnly = await prisma.notificationRead.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationReadFindManyArgs>(args?: SelectSubset<T, NotificationReadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NotificationRead.
     * @param {NotificationReadCreateArgs} args - Arguments to create a NotificationRead.
     * @example
     * // Create one NotificationRead
     * const NotificationRead = await prisma.notificationRead.create({
     *   data: {
     *     // ... data to create a NotificationRead
     *   }
     * })
     * 
     */
    create<T extends NotificationReadCreateArgs>(args: SelectSubset<T, NotificationReadCreateArgs<ExtArgs>>): Prisma__NotificationReadClient<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NotificationReads.
     * @param {NotificationReadCreateManyArgs} args - Arguments to create many NotificationReads.
     * @example
     * // Create many NotificationReads
     * const notificationRead = await prisma.notificationRead.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationReadCreateManyArgs>(args?: SelectSubset<T, NotificationReadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NotificationReads and returns the data saved in the database.
     * @param {NotificationReadCreateManyAndReturnArgs} args - Arguments to create many NotificationReads.
     * @example
     * // Create many NotificationReads
     * const notificationRead = await prisma.notificationRead.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NotificationReads and only return the `id`
     * const notificationReadWithIdOnly = await prisma.notificationRead.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationReadCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationReadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NotificationRead.
     * @param {NotificationReadDeleteArgs} args - Arguments to delete one NotificationRead.
     * @example
     * // Delete one NotificationRead
     * const NotificationRead = await prisma.notificationRead.delete({
     *   where: {
     *     // ... filter to delete one NotificationRead
     *   }
     * })
     * 
     */
    delete<T extends NotificationReadDeleteArgs>(args: SelectSubset<T, NotificationReadDeleteArgs<ExtArgs>>): Prisma__NotificationReadClient<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NotificationRead.
     * @param {NotificationReadUpdateArgs} args - Arguments to update one NotificationRead.
     * @example
     * // Update one NotificationRead
     * const notificationRead = await prisma.notificationRead.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationReadUpdateArgs>(args: SelectSubset<T, NotificationReadUpdateArgs<ExtArgs>>): Prisma__NotificationReadClient<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NotificationReads.
     * @param {NotificationReadDeleteManyArgs} args - Arguments to filter NotificationReads to delete.
     * @example
     * // Delete a few NotificationReads
     * const { count } = await prisma.notificationRead.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationReadDeleteManyArgs>(args?: SelectSubset<T, NotificationReadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationReads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationReadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationReads
     * const notificationRead = await prisma.notificationRead.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationReadUpdateManyArgs>(args: SelectSubset<T, NotificationReadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationReads and returns the data updated in the database.
     * @param {NotificationReadUpdateManyAndReturnArgs} args - Arguments to update many NotificationReads.
     * @example
     * // Update many NotificationReads
     * const notificationRead = await prisma.notificationRead.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NotificationReads and only return the `id`
     * const notificationReadWithIdOnly = await prisma.notificationRead.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationReadUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationReadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NotificationRead.
     * @param {NotificationReadUpsertArgs} args - Arguments to update or create a NotificationRead.
     * @example
     * // Update or create a NotificationRead
     * const notificationRead = await prisma.notificationRead.upsert({
     *   create: {
     *     // ... data to create a NotificationRead
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationRead we want to update
     *   }
     * })
     */
    upsert<T extends NotificationReadUpsertArgs>(args: SelectSubset<T, NotificationReadUpsertArgs<ExtArgs>>): Prisma__NotificationReadClient<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NotificationReads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationReadCountArgs} args - Arguments to filter NotificationReads to count.
     * @example
     * // Count the number of NotificationReads
     * const count = await prisma.notificationRead.count({
     *   where: {
     *     // ... the filter for the NotificationReads we want to count
     *   }
     * })
    **/
    count<T extends NotificationReadCountArgs>(
      args?: Subset<T, NotificationReadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationReadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationRead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationReadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationReadAggregateArgs>(args: Subset<T, NotificationReadAggregateArgs>): Prisma.PrismaPromise<GetNotificationReadAggregateType<T>>

    /**
     * Group by NotificationRead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationReadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationReadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationReadGroupByArgs['orderBy'] }
        : { orderBy?: NotificationReadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationReadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationReadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationRead model
   */
  readonly fields: NotificationReadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationRead.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationReadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    notification<T extends NotificationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NotificationDefaultArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NotificationRead model
   */
  interface NotificationReadFieldRefs {
    readonly id: FieldRef<"NotificationRead", 'Int'>
    readonly userId: FieldRef<"NotificationRead", 'Int'>
    readonly notificationId: FieldRef<"NotificationRead", 'Int'>
    readonly createdAt: FieldRef<"NotificationRead", 'DateTime'>
    readonly createdBy: FieldRef<"NotificationRead", 'Int'>
    readonly updatedAt: FieldRef<"NotificationRead", 'DateTime'>
    readonly updatedBy: FieldRef<"NotificationRead", 'Int'>
    readonly isDeleted: FieldRef<"NotificationRead", 'Boolean'>
    readonly deletedAt: FieldRef<"NotificationRead", 'DateTime'>
    readonly deletedBy: FieldRef<"NotificationRead", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * NotificationRead findUnique
   */
  export type NotificationReadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadInclude<ExtArgs> | null
    /**
     * Filter, which NotificationRead to fetch.
     */
    where: NotificationReadWhereUniqueInput
  }

  /**
   * NotificationRead findUniqueOrThrow
   */
  export type NotificationReadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadInclude<ExtArgs> | null
    /**
     * Filter, which NotificationRead to fetch.
     */
    where: NotificationReadWhereUniqueInput
  }

  /**
   * NotificationRead findFirst
   */
  export type NotificationReadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadInclude<ExtArgs> | null
    /**
     * Filter, which NotificationRead to fetch.
     */
    where?: NotificationReadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationReads to fetch.
     */
    orderBy?: NotificationReadOrderByWithRelationInput | NotificationReadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationReads.
     */
    cursor?: NotificationReadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationReads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationReads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationReads.
     */
    distinct?: NotificationReadScalarFieldEnum | NotificationReadScalarFieldEnum[]
  }

  /**
   * NotificationRead findFirstOrThrow
   */
  export type NotificationReadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadInclude<ExtArgs> | null
    /**
     * Filter, which NotificationRead to fetch.
     */
    where?: NotificationReadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationReads to fetch.
     */
    orderBy?: NotificationReadOrderByWithRelationInput | NotificationReadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationReads.
     */
    cursor?: NotificationReadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationReads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationReads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationReads.
     */
    distinct?: NotificationReadScalarFieldEnum | NotificationReadScalarFieldEnum[]
  }

  /**
   * NotificationRead findMany
   */
  export type NotificationReadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadInclude<ExtArgs> | null
    /**
     * Filter, which NotificationReads to fetch.
     */
    where?: NotificationReadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationReads to fetch.
     */
    orderBy?: NotificationReadOrderByWithRelationInput | NotificationReadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationReads.
     */
    cursor?: NotificationReadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationReads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationReads.
     */
    skip?: number
    distinct?: NotificationReadScalarFieldEnum | NotificationReadScalarFieldEnum[]
  }

  /**
   * NotificationRead create
   */
  export type NotificationReadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadInclude<ExtArgs> | null
    /**
     * The data needed to create a NotificationRead.
     */
    data: XOR<NotificationReadCreateInput, NotificationReadUncheckedCreateInput>
  }

  /**
   * NotificationRead createMany
   */
  export type NotificationReadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationReads.
     */
    data: NotificationReadCreateManyInput | NotificationReadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationRead createManyAndReturn
   */
  export type NotificationReadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * The data used to create many NotificationReads.
     */
    data: NotificationReadCreateManyInput | NotificationReadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationRead update
   */
  export type NotificationReadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadInclude<ExtArgs> | null
    /**
     * The data needed to update a NotificationRead.
     */
    data: XOR<NotificationReadUpdateInput, NotificationReadUncheckedUpdateInput>
    /**
     * Choose, which NotificationRead to update.
     */
    where: NotificationReadWhereUniqueInput
  }

  /**
   * NotificationRead updateMany
   */
  export type NotificationReadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationReads.
     */
    data: XOR<NotificationReadUpdateManyMutationInput, NotificationReadUncheckedUpdateManyInput>
    /**
     * Filter which NotificationReads to update
     */
    where?: NotificationReadWhereInput
    /**
     * Limit how many NotificationReads to update.
     */
    limit?: number
  }

  /**
   * NotificationRead updateManyAndReturn
   */
  export type NotificationReadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * The data used to update NotificationReads.
     */
    data: XOR<NotificationReadUpdateManyMutationInput, NotificationReadUncheckedUpdateManyInput>
    /**
     * Filter which NotificationReads to update
     */
    where?: NotificationReadWhereInput
    /**
     * Limit how many NotificationReads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationRead upsert
   */
  export type NotificationReadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadInclude<ExtArgs> | null
    /**
     * The filter to search for the NotificationRead to update in case it exists.
     */
    where: NotificationReadWhereUniqueInput
    /**
     * In case the NotificationRead found by the `where` argument doesn't exist, create a new NotificationRead with this data.
     */
    create: XOR<NotificationReadCreateInput, NotificationReadUncheckedCreateInput>
    /**
     * In case the NotificationRead was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationReadUpdateInput, NotificationReadUncheckedUpdateInput>
  }

  /**
   * NotificationRead delete
   */
  export type NotificationReadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadInclude<ExtArgs> | null
    /**
     * Filter which NotificationRead to delete.
     */
    where: NotificationReadWhereUniqueInput
  }

  /**
   * NotificationRead deleteMany
   */
  export type NotificationReadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationReads to delete
     */
    where?: NotificationReadWhereInput
    /**
     * Limit how many NotificationReads to delete.
     */
    limit?: number
  }

  /**
   * NotificationRead without action
   */
  export type NotificationReadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    viewCount: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    userId: number | null
    viewCount: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    userId: number | null
    viewCount: number | null
    status: $Enums.PostStatus | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    userId: number | null
    viewCount: number | null
    status: $Enums.PostStatus | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    content: number
    userId: number
    viewCount: number
    status: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    isDeleted: number
    deletedAt: number
    deletedBy: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    userId?: true
    viewCount?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    userId?: true
    viewCount?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    userId?: true
    viewCount?: true
    status?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    userId?: true
    viewCount?: true
    status?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    userId?: true
    viewCount?: true
    status?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    title: string
    content: string
    userId: number
    viewCount: number
    status: $Enums.PostStatus
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    userId?: boolean
    viewCount?: boolean
    status?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    userId?: boolean
    viewCount?: boolean
    status?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    userId?: boolean
    viewCount?: boolean
    status?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    userId?: boolean
    viewCount?: boolean
    status?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "userId" | "viewCount" | "status" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "isDeleted" | "deletedAt" | "deletedBy", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      userId: number
      viewCount: number
      status: $Enums.PostStatus
      createdAt: Date | null
      createdBy: number | null
      updatedAt: Date | null
      updatedBy: number | null
      isDeleted: boolean | null
      deletedAt: Date | null
      deletedBy: number | null
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly title: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly userId: FieldRef<"Post", 'Int'>
    readonly viewCount: FieldRef<"Post", 'Int'>
    readonly status: FieldRef<"Post", 'PostStatus'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly createdBy: FieldRef<"Post", 'Int'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly updatedBy: FieldRef<"Post", 'Int'>
    readonly isDeleted: FieldRef<"Post", 'Boolean'>
    readonly deletedAt: FieldRef<"Post", 'DateTime'>
    readonly deletedBy: FieldRef<"Post", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
    owner: $Enums.Owner | null
    description: string | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    owner: $Enums.Owner | null
    description: string | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    owner: number
    description: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    isDeleted: number
    deletedAt: number
    deletedBy: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    owner?: true
    description?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    owner?: true
    description?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    owner?: true
    description?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: string
    owner: $Enums.Owner
    description: string | null
    createdAt: Date
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    owner?: boolean
    description?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    userRoles?: boolean | Role$userRolesArgs<ExtArgs>
    adminRoles?: boolean | Role$adminRolesArgs<ExtArgs>
    rolePermissions?: boolean | Role$rolePermissionsArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    owner?: boolean
    description?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    owner?: boolean
    description?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    owner?: boolean
    description?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "owner" | "description" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "isDeleted" | "deletedAt" | "deletedBy", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userRoles?: boolean | Role$userRolesArgs<ExtArgs>
    adminRoles?: boolean | Role$adminRolesArgs<ExtArgs>
    rolePermissions?: boolean | Role$rolePermissionsArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      userRoles: Prisma.$UserRolePayload<ExtArgs>[]
      adminRoles: Prisma.$AdminRolePayload<ExtArgs>[]
      rolePermissions: Prisma.$RolePermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      owner: $Enums.Owner
      description: string | null
      createdAt: Date
      createdBy: number | null
      updatedAt: Date | null
      updatedBy: number | null
      isDeleted: boolean | null
      deletedAt: Date | null
      deletedBy: number | null
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userRoles<T extends Role$userRolesArgs<ExtArgs> = {}>(args?: Subset<T, Role$userRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    adminRoles<T extends Role$adminRolesArgs<ExtArgs> = {}>(args?: Subset<T, Role$adminRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rolePermissions<T extends Role$rolePermissionsArgs<ExtArgs> = {}>(args?: Subset<T, Role$rolePermissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'String'>
    readonly owner: FieldRef<"Role", 'Owner'>
    readonly description: FieldRef<"Role", 'String'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly createdBy: FieldRef<"Role", 'Int'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
    readonly updatedBy: FieldRef<"Role", 'Int'>
    readonly isDeleted: FieldRef<"Role", 'Boolean'>
    readonly deletedAt: FieldRef<"Role", 'DateTime'>
    readonly deletedBy: FieldRef<"Role", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.userRoles
   */
  export type Role$userRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * Role.adminRoles
   */
  export type Role$adminRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRole
     */
    select?: AdminRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminRole
     */
    omit?: AdminRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRoleInclude<ExtArgs> | null
    where?: AdminRoleWhereInput
    orderBy?: AdminRoleOrderByWithRelationInput | AdminRoleOrderByWithRelationInput[]
    cursor?: AdminRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminRoleScalarFieldEnum | AdminRoleScalarFieldEnum[]
  }

  /**
   * Role.rolePermissions
   */
  export type Role$rolePermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    where?: RolePermissionWhereInput
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    cursor?: RolePermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Permission
   */

  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionAvgAggregateOutputType = {
    id: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type PermissionSumAggregateOutputType = {
    id: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type PermissionMinAggregateOutputType = {
    id: number | null
    scope: string | null
    action: string | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type PermissionMaxAggregateOutputType = {
    id: number | null
    scope: string | null
    action: string | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type PermissionCountAggregateOutputType = {
    id: number
    scope: number
    action: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    isDeleted: number
    deletedAt: number
    deletedBy: number
    _all: number
  }


  export type PermissionAvgAggregateInputType = {
    id?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type PermissionSumAggregateInputType = {
    id?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type PermissionMinAggregateInputType = {
    id?: true
    scope?: true
    action?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type PermissionMaxAggregateInputType = {
    id?: true
    scope?: true
    action?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type PermissionCountAggregateInputType = {
    id?: true
    scope?: true
    action?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
    _all?: true
  }

  export type PermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permission to aggregate.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type PermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithAggregationInput | PermissionOrderByWithAggregationInput[]
    by: PermissionScalarFieldEnum[] | PermissionScalarFieldEnum
    having?: PermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _avg?: PermissionAvgAggregateInputType
    _sum?: PermissionSumAggregateInputType
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }

  export type PermissionGroupByOutputType = {
    id: number
    scope: string
    action: string
    createdAt: Date
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends PermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type PermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scope?: boolean
    action?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    rolePermissions?: boolean | Permission$rolePermissionsArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scope?: boolean
    action?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scope?: boolean
    action?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectScalar = {
    id?: boolean
    scope?: boolean
    action?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }

  export type PermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "scope" | "action" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "isDeleted" | "deletedAt" | "deletedBy", ExtArgs["result"]["permission"]>
  export type PermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolePermissions?: boolean | Permission$rolePermissionsArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PermissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permission"
    objects: {
      rolePermissions: Prisma.$RolePermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      scope: string
      action: string
      createdAt: Date
      createdBy: number | null
      updatedAt: Date | null
      updatedBy: number | null
      isDeleted: boolean | null
      deletedAt: Date | null
      deletedBy: number | null
    }, ExtArgs["result"]["permission"]>
    composites: {}
  }

  type PermissionGetPayload<S extends boolean | null | undefined | PermissionDefaultArgs> = $Result.GetResult<Prisma.$PermissionPayload, S>

  type PermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface PermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permission'], meta: { name: 'Permission' } }
    /**
     * Find zero or one Permission that matches the filter.
     * @param {PermissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionFindUniqueArgs>(args: SelectSubset<T, PermissionFindUniqueArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionFindFirstArgs>(args?: SelectSubset<T, PermissionFindFirstArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionWithIdOnly = await prisma.permission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermissionFindManyArgs>(args?: SelectSubset<T, PermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permission.
     * @param {PermissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
     */
    create<T extends PermissionCreateArgs>(args: SelectSubset<T, PermissionCreateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permissions.
     * @param {PermissionCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionCreateManyArgs>(args?: SelectSubset<T, PermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permissions and returns the data saved in the database.
     * @param {PermissionCreateManyAndReturnArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, PermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Permission.
     * @param {PermissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
     */
    delete<T extends PermissionDeleteArgs>(args: SelectSubset<T, PermissionDeleteArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permission.
     * @param {PermissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionUpdateArgs>(args: SelectSubset<T, PermissionUpdateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permissions.
     * @param {PermissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionDeleteManyArgs>(args?: SelectSubset<T, PermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionUpdateManyArgs>(args: SelectSubset<T, PermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions and returns the data updated in the database.
     * @param {PermissionUpdateManyAndReturnArgs} args - Arguments to update many Permissions.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PermissionUpdateManyAndReturnArgs>(args: SelectSubset<T, PermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Permission.
     * @param {PermissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
     */
    upsert<T extends PermissionUpsertArgs>(args: SelectSubset<T, PermissionUpsertArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends PermissionCountArgs>(
      args?: Subset<T, PermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionGroupByArgs['orderBy'] }
        : { orderBy?: PermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permission model
   */
  readonly fields: PermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rolePermissions<T extends Permission$rolePermissionsArgs<ExtArgs> = {}>(args?: Subset<T, Permission$rolePermissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Permission model
   */
  interface PermissionFieldRefs {
    readonly id: FieldRef<"Permission", 'Int'>
    readonly scope: FieldRef<"Permission", 'String'>
    readonly action: FieldRef<"Permission", 'String'>
    readonly createdAt: FieldRef<"Permission", 'DateTime'>
    readonly createdBy: FieldRef<"Permission", 'Int'>
    readonly updatedAt: FieldRef<"Permission", 'DateTime'>
    readonly updatedBy: FieldRef<"Permission", 'Int'>
    readonly isDeleted: FieldRef<"Permission", 'Boolean'>
    readonly deletedAt: FieldRef<"Permission", 'DateTime'>
    readonly deletedBy: FieldRef<"Permission", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Permission findUnique
   */
  export type PermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findUniqueOrThrow
   */
  export type PermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findFirst
   */
  export type PermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findFirstOrThrow
   */
  export type PermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findMany
   */
  export type PermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission create
   */
  export type PermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Permission.
     */
    data: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
  }

  /**
   * Permission createMany
   */
  export type PermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission createManyAndReturn
   */
  export type PermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission update
   */
  export type PermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Permission.
     */
    data: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
    /**
     * Choose, which Permission to update.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission updateMany
   */
  export type PermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permission updateManyAndReturn
   */
  export type PermissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permission upsert
   */
  export type PermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Permission to update in case it exists.
     */
    where: PermissionWhereUniqueInput
    /**
     * In case the Permission found by the `where` argument doesn't exist, create a new Permission with this data.
     */
    create: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
    /**
     * In case the Permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
  }

  /**
   * Permission delete
   */
  export type PermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter which Permission to delete.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission deleteMany
   */
  export type PermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissions to delete
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to delete.
     */
    limit?: number
  }

  /**
   * Permission.rolePermissions
   */
  export type Permission$rolePermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    where?: RolePermissionWhereInput
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    cursor?: RolePermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * Permission without action
   */
  export type PermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
  }


  /**
   * Model RolePermission
   */

  export type AggregateRolePermission = {
    _count: RolePermissionCountAggregateOutputType | null
    _avg: RolePermissionAvgAggregateOutputType | null
    _sum: RolePermissionSumAggregateOutputType | null
    _min: RolePermissionMinAggregateOutputType | null
    _max: RolePermissionMaxAggregateOutputType | null
  }

  export type RolePermissionAvgAggregateOutputType = {
    id: number | null
    roleId: number | null
    permissionId: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type RolePermissionSumAggregateOutputType = {
    id: number | null
    roleId: number | null
    permissionId: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type RolePermissionMinAggregateOutputType = {
    id: number | null
    roleId: number | null
    permissionId: number | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type RolePermissionMaxAggregateOutputType = {
    id: number | null
    roleId: number | null
    permissionId: number | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type RolePermissionCountAggregateOutputType = {
    id: number
    roleId: number
    permissionId: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    isDeleted: number
    deletedAt: number
    deletedBy: number
    _all: number
  }


  export type RolePermissionAvgAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type RolePermissionSumAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type RolePermissionMinAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type RolePermissionMaxAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type RolePermissionCountAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
    _all?: true
  }

  export type RolePermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolePermission to aggregate.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RolePermissions
    **/
    _count?: true | RolePermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolePermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolePermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolePermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolePermissionMaxAggregateInputType
  }

  export type GetRolePermissionAggregateType<T extends RolePermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateRolePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRolePermission[P]>
      : GetScalarType<T[P], AggregateRolePermission[P]>
  }




  export type RolePermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionWhereInput
    orderBy?: RolePermissionOrderByWithAggregationInput | RolePermissionOrderByWithAggregationInput[]
    by: RolePermissionScalarFieldEnum[] | RolePermissionScalarFieldEnum
    having?: RolePermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolePermissionCountAggregateInputType | true
    _avg?: RolePermissionAvgAggregateInputType
    _sum?: RolePermissionSumAggregateInputType
    _min?: RolePermissionMinAggregateInputType
    _max?: RolePermissionMaxAggregateInputType
  }

  export type RolePermissionGroupByOutputType = {
    id: number
    roleId: number
    permissionId: number
    createdAt: Date
    createdBy: number
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
    _count: RolePermissionCountAggregateOutputType | null
    _avg: RolePermissionAvgAggregateOutputType | null
    _sum: RolePermissionSumAggregateOutputType | null
    _min: RolePermissionMinAggregateOutputType | null
    _max: RolePermissionMaxAggregateOutputType | null
  }

  type GetRolePermissionGroupByPayload<T extends RolePermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolePermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolePermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolePermissionGroupByOutputType[P]>
            : GetScalarType<T[P], RolePermissionGroupByOutputType[P]>
        }
      >
    >


  export type RolePermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    permissionId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolePermission"]>

  export type RolePermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    permissionId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolePermission"]>

  export type RolePermissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    permissionId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolePermission"]>

  export type RolePermissionSelectScalar = {
    id?: boolean
    roleId?: boolean
    permissionId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }

  export type RolePermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roleId" | "permissionId" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "isDeleted" | "deletedAt" | "deletedBy", ExtArgs["result"]["rolePermission"]>
  export type RolePermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }
  export type RolePermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }
  export type RolePermissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }

  export type $RolePermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RolePermission"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      permission: Prisma.$PermissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roleId: number
      permissionId: number
      createdAt: Date
      createdBy: number
      updatedAt: Date | null
      updatedBy: number | null
      isDeleted: boolean | null
      deletedAt: Date | null
      deletedBy: number | null
    }, ExtArgs["result"]["rolePermission"]>
    composites: {}
  }

  type RolePermissionGetPayload<S extends boolean | null | undefined | RolePermissionDefaultArgs> = $Result.GetResult<Prisma.$RolePermissionPayload, S>

  type RolePermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolePermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolePermissionCountAggregateInputType | true
    }

  export interface RolePermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RolePermission'], meta: { name: 'RolePermission' } }
    /**
     * Find zero or one RolePermission that matches the filter.
     * @param {RolePermissionFindUniqueArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolePermissionFindUniqueArgs>(args: SelectSubset<T, RolePermissionFindUniqueArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RolePermission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolePermissionFindUniqueOrThrowArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolePermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, RolePermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolePermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindFirstArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolePermissionFindFirstArgs>(args?: SelectSubset<T, RolePermissionFindFirstArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolePermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindFirstOrThrowArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolePermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, RolePermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RolePermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RolePermissions
     * const rolePermissions = await prisma.rolePermission.findMany()
     * 
     * // Get first 10 RolePermissions
     * const rolePermissions = await prisma.rolePermission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolePermissionWithIdOnly = await prisma.rolePermission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolePermissionFindManyArgs>(args?: SelectSubset<T, RolePermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RolePermission.
     * @param {RolePermissionCreateArgs} args - Arguments to create a RolePermission.
     * @example
     * // Create one RolePermission
     * const RolePermission = await prisma.rolePermission.create({
     *   data: {
     *     // ... data to create a RolePermission
     *   }
     * })
     * 
     */
    create<T extends RolePermissionCreateArgs>(args: SelectSubset<T, RolePermissionCreateArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RolePermissions.
     * @param {RolePermissionCreateManyArgs} args - Arguments to create many RolePermissions.
     * @example
     * // Create many RolePermissions
     * const rolePermission = await prisma.rolePermission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolePermissionCreateManyArgs>(args?: SelectSubset<T, RolePermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RolePermissions and returns the data saved in the database.
     * @param {RolePermissionCreateManyAndReturnArgs} args - Arguments to create many RolePermissions.
     * @example
     * // Create many RolePermissions
     * const rolePermission = await prisma.rolePermission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RolePermissions and only return the `id`
     * const rolePermissionWithIdOnly = await prisma.rolePermission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolePermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, RolePermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RolePermission.
     * @param {RolePermissionDeleteArgs} args - Arguments to delete one RolePermission.
     * @example
     * // Delete one RolePermission
     * const RolePermission = await prisma.rolePermission.delete({
     *   where: {
     *     // ... filter to delete one RolePermission
     *   }
     * })
     * 
     */
    delete<T extends RolePermissionDeleteArgs>(args: SelectSubset<T, RolePermissionDeleteArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RolePermission.
     * @param {RolePermissionUpdateArgs} args - Arguments to update one RolePermission.
     * @example
     * // Update one RolePermission
     * const rolePermission = await prisma.rolePermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolePermissionUpdateArgs>(args: SelectSubset<T, RolePermissionUpdateArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RolePermissions.
     * @param {RolePermissionDeleteManyArgs} args - Arguments to filter RolePermissions to delete.
     * @example
     * // Delete a few RolePermissions
     * const { count } = await prisma.rolePermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolePermissionDeleteManyArgs>(args?: SelectSubset<T, RolePermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RolePermissions
     * const rolePermission = await prisma.rolePermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolePermissionUpdateManyArgs>(args: SelectSubset<T, RolePermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolePermissions and returns the data updated in the database.
     * @param {RolePermissionUpdateManyAndReturnArgs} args - Arguments to update many RolePermissions.
     * @example
     * // Update many RolePermissions
     * const rolePermission = await prisma.rolePermission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RolePermissions and only return the `id`
     * const rolePermissionWithIdOnly = await prisma.rolePermission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RolePermissionUpdateManyAndReturnArgs>(args: SelectSubset<T, RolePermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RolePermission.
     * @param {RolePermissionUpsertArgs} args - Arguments to update or create a RolePermission.
     * @example
     * // Update or create a RolePermission
     * const rolePermission = await prisma.rolePermission.upsert({
     *   create: {
     *     // ... data to create a RolePermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RolePermission we want to update
     *   }
     * })
     */
    upsert<T extends RolePermissionUpsertArgs>(args: SelectSubset<T, RolePermissionUpsertArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionCountArgs} args - Arguments to filter RolePermissions to count.
     * @example
     * // Count the number of RolePermissions
     * const count = await prisma.rolePermission.count({
     *   where: {
     *     // ... the filter for the RolePermissions we want to count
     *   }
     * })
    **/
    count<T extends RolePermissionCountArgs>(
      args?: Subset<T, RolePermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolePermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RolePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolePermissionAggregateArgs>(args: Subset<T, RolePermissionAggregateArgs>): Prisma.PrismaPromise<GetRolePermissionAggregateType<T>>

    /**
     * Group by RolePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RolePermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolePermissionGroupByArgs['orderBy'] }
        : { orderBy?: RolePermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RolePermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolePermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RolePermission model
   */
  readonly fields: RolePermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RolePermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolePermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    permission<T extends PermissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PermissionDefaultArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RolePermission model
   */
  interface RolePermissionFieldRefs {
    readonly id: FieldRef<"RolePermission", 'Int'>
    readonly roleId: FieldRef<"RolePermission", 'Int'>
    readonly permissionId: FieldRef<"RolePermission", 'Int'>
    readonly createdAt: FieldRef<"RolePermission", 'DateTime'>
    readonly createdBy: FieldRef<"RolePermission", 'Int'>
    readonly updatedAt: FieldRef<"RolePermission", 'DateTime'>
    readonly updatedBy: FieldRef<"RolePermission", 'Int'>
    readonly isDeleted: FieldRef<"RolePermission", 'Boolean'>
    readonly deletedAt: FieldRef<"RolePermission", 'DateTime'>
    readonly deletedBy: FieldRef<"RolePermission", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RolePermission findUnique
   */
  export type RolePermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission findUniqueOrThrow
   */
  export type RolePermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission findFirst
   */
  export type RolePermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolePermissions.
     */
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * RolePermission findFirstOrThrow
   */
  export type RolePermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolePermissions.
     */
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * RolePermission findMany
   */
  export type RolePermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermissions to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * RolePermission create
   */
  export type RolePermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a RolePermission.
     */
    data: XOR<RolePermissionCreateInput, RolePermissionUncheckedCreateInput>
  }

  /**
   * RolePermission createMany
   */
  export type RolePermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RolePermissions.
     */
    data: RolePermissionCreateManyInput | RolePermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RolePermission createManyAndReturn
   */
  export type RolePermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * The data used to create many RolePermissions.
     */
    data: RolePermissionCreateManyInput | RolePermissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RolePermission update
   */
  export type RolePermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a RolePermission.
     */
    data: XOR<RolePermissionUpdateInput, RolePermissionUncheckedUpdateInput>
    /**
     * Choose, which RolePermission to update.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission updateMany
   */
  export type RolePermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RolePermissions.
     */
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyInput>
    /**
     * Filter which RolePermissions to update
     */
    where?: RolePermissionWhereInput
    /**
     * Limit how many RolePermissions to update.
     */
    limit?: number
  }

  /**
   * RolePermission updateManyAndReturn
   */
  export type RolePermissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * The data used to update RolePermissions.
     */
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyInput>
    /**
     * Filter which RolePermissions to update
     */
    where?: RolePermissionWhereInput
    /**
     * Limit how many RolePermissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RolePermission upsert
   */
  export type RolePermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the RolePermission to update in case it exists.
     */
    where: RolePermissionWhereUniqueInput
    /**
     * In case the RolePermission found by the `where` argument doesn't exist, create a new RolePermission with this data.
     */
    create: XOR<RolePermissionCreateInput, RolePermissionUncheckedCreateInput>
    /**
     * In case the RolePermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolePermissionUpdateInput, RolePermissionUncheckedUpdateInput>
  }

  /**
   * RolePermission delete
   */
  export type RolePermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter which RolePermission to delete.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission deleteMany
   */
  export type RolePermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolePermissions to delete
     */
    where?: RolePermissionWhereInput
    /**
     * Limit how many RolePermissions to delete.
     */
    limit?: number
  }

  /**
   * RolePermission without action
   */
  export type RolePermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
  }


  /**
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenAvgAggregateOutputType = {
    id: number | null
    ownerId: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type TokenSumAggregateOutputType = {
    id: number | null
    ownerId: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type TokenMinAggregateOutputType = {
    id: number | null
    tokenHash: string | null
    tokenType: $Enums.TokenType | null
    owner: $Enums.Owner | null
    ownerId: number | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type TokenMaxAggregateOutputType = {
    id: number | null
    tokenHash: string | null
    tokenType: $Enums.TokenType | null
    owner: $Enums.Owner | null
    ownerId: number | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    tokenHash: number
    tokenType: number
    owner: number
    ownerId: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    isDeleted: number
    deletedAt: number
    deletedBy: number
    _all: number
  }


  export type TokenAvgAggregateInputType = {
    id?: true
    ownerId?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type TokenSumAggregateInputType = {
    id?: true
    ownerId?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type TokenMinAggregateInputType = {
    id?: true
    tokenHash?: true
    tokenType?: true
    owner?: true
    ownerId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    tokenHash?: true
    tokenType?: true
    owner?: true
    ownerId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    tokenHash?: true
    tokenType?: true
    owner?: true
    ownerId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _avg?: TokenAvgAggregateInputType
    _sum?: TokenSumAggregateInputType
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: number
    tokenHash: string
    tokenType: $Enums.TokenType
    owner: $Enums.Owner
    ownerId: number
    createdAt: Date
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    tokenType?: boolean
    owner?: boolean
    ownerId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    tokenFcms?: boolean | Token$tokenFcmsArgs<ExtArgs>
    tokenJwts?: boolean | Token$tokenJwtsArgs<ExtArgs>
    _count?: boolean | TokenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    tokenType?: boolean
    owner?: boolean
    ownerId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }, ExtArgs["result"]["token"]>

  export type TokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    tokenType?: boolean
    owner?: boolean
    ownerId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    id?: boolean
    tokenHash?: boolean
    tokenType?: boolean
    owner?: boolean
    ownerId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }

  export type TokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tokenHash" | "tokenType" | "owner" | "ownerId" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "isDeleted" | "deletedAt" | "deletedBy", ExtArgs["result"]["token"]>
  export type TokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokenFcms?: boolean | Token$tokenFcmsArgs<ExtArgs>
    tokenJwts?: boolean | Token$tokenJwtsArgs<ExtArgs>
    _count?: boolean | TokenCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {
      tokenFcms: Prisma.$TokenFcmPayload<ExtArgs>[]
      tokenJwts: Prisma.$TokenJwtPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tokenHash: string
      tokenType: $Enums.TokenType
      owner: $Enums.Owner
      ownerId: number
      createdAt: Date
      createdBy: number | null
      updatedAt: Date | null
      updatedBy: number | null
      isDeleted: boolean | null
      deletedAt: Date | null
      deletedBy: number | null
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenFindManyArgs>(args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends TokenCreateArgs>(args: SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenCreateManyArgs>(args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends TokenDeleteArgs>(args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUpdateArgs>(args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenDeleteManyArgs>(args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUpdateManyArgs>(args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokenUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokenUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tokenFcms<T extends Token$tokenFcmsArgs<ExtArgs> = {}>(args?: Subset<T, Token$tokenFcmsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenFcmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tokenJwts<T extends Token$tokenJwtsArgs<ExtArgs> = {}>(args?: Subset<T, Token$tokenJwtsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenJwtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Token model
   */
  interface TokenFieldRefs {
    readonly id: FieldRef<"Token", 'Int'>
    readonly tokenHash: FieldRef<"Token", 'String'>
    readonly tokenType: FieldRef<"Token", 'TokenType'>
    readonly owner: FieldRef<"Token", 'Owner'>
    readonly ownerId: FieldRef<"Token", 'Int'>
    readonly createdAt: FieldRef<"Token", 'DateTime'>
    readonly createdBy: FieldRef<"Token", 'Int'>
    readonly updatedAt: FieldRef<"Token", 'DateTime'>
    readonly updatedBy: FieldRef<"Token", 'Int'>
    readonly isDeleted: FieldRef<"Token", 'Boolean'>
    readonly deletedAt: FieldRef<"Token", 'DateTime'>
    readonly deletedBy: FieldRef<"Token", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token updateManyAndReturn
   */
  export type TokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }

  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Token.tokenFcms
   */
  export type Token$tokenFcmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenFcm
     */
    select?: TokenFcmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenFcm
     */
    omit?: TokenFcmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenFcmInclude<ExtArgs> | null
    where?: TokenFcmWhereInput
    orderBy?: TokenFcmOrderByWithRelationInput | TokenFcmOrderByWithRelationInput[]
    cursor?: TokenFcmWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenFcmScalarFieldEnum | TokenFcmScalarFieldEnum[]
  }

  /**
   * Token.tokenJwts
   */
  export type Token$tokenJwtsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenJwt
     */
    select?: TokenJwtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenJwt
     */
    omit?: TokenJwtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenJwtInclude<ExtArgs> | null
    where?: TokenJwtWhereInput
    orderBy?: TokenJwtOrderByWithRelationInput | TokenJwtOrderByWithRelationInput[]
    cursor?: TokenJwtWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenJwtScalarFieldEnum | TokenJwtScalarFieldEnum[]
  }

  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
  }


  /**
   * Model TokenJwt
   */

  export type AggregateTokenJwt = {
    _count: TokenJwtCountAggregateOutputType | null
    _avg: TokenJwtAvgAggregateOutputType | null
    _sum: TokenJwtSumAggregateOutputType | null
    _min: TokenJwtMinAggregateOutputType | null
    _max: TokenJwtMaxAggregateOutputType | null
  }

  export type TokenJwtAvgAggregateOutputType = {
    id: number | null
    tokenId: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type TokenJwtSumAggregateOutputType = {
    id: number | null
    tokenId: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type TokenJwtMinAggregateOutputType = {
    id: number | null
    tokenId: number | null
    jti: string | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type TokenJwtMaxAggregateOutputType = {
    id: number | null
    tokenId: number | null
    jti: string | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type TokenJwtCountAggregateOutputType = {
    id: number
    tokenId: number
    jti: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    isDeleted: number
    deletedAt: number
    deletedBy: number
    _all: number
  }


  export type TokenJwtAvgAggregateInputType = {
    id?: true
    tokenId?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type TokenJwtSumAggregateInputType = {
    id?: true
    tokenId?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type TokenJwtMinAggregateInputType = {
    id?: true
    tokenId?: true
    jti?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type TokenJwtMaxAggregateInputType = {
    id?: true
    tokenId?: true
    jti?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type TokenJwtCountAggregateInputType = {
    id?: true
    tokenId?: true
    jti?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
    _all?: true
  }

  export type TokenJwtAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenJwt to aggregate.
     */
    where?: TokenJwtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenJwts to fetch.
     */
    orderBy?: TokenJwtOrderByWithRelationInput | TokenJwtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenJwtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenJwts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenJwts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TokenJwts
    **/
    _count?: true | TokenJwtCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenJwtAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenJwtSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenJwtMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenJwtMaxAggregateInputType
  }

  export type GetTokenJwtAggregateType<T extends TokenJwtAggregateArgs> = {
        [P in keyof T & keyof AggregateTokenJwt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokenJwt[P]>
      : GetScalarType<T[P], AggregateTokenJwt[P]>
  }




  export type TokenJwtGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenJwtWhereInput
    orderBy?: TokenJwtOrderByWithAggregationInput | TokenJwtOrderByWithAggregationInput[]
    by: TokenJwtScalarFieldEnum[] | TokenJwtScalarFieldEnum
    having?: TokenJwtScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenJwtCountAggregateInputType | true
    _avg?: TokenJwtAvgAggregateInputType
    _sum?: TokenJwtSumAggregateInputType
    _min?: TokenJwtMinAggregateInputType
    _max?: TokenJwtMaxAggregateInputType
  }

  export type TokenJwtGroupByOutputType = {
    id: number
    tokenId: number
    jti: string
    createdAt: Date
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
    _count: TokenJwtCountAggregateOutputType | null
    _avg: TokenJwtAvgAggregateOutputType | null
    _sum: TokenJwtSumAggregateOutputType | null
    _min: TokenJwtMinAggregateOutputType | null
    _max: TokenJwtMaxAggregateOutputType | null
  }

  type GetTokenJwtGroupByPayload<T extends TokenJwtGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenJwtGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenJwtGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenJwtGroupByOutputType[P]>
            : GetScalarType<T[P], TokenJwtGroupByOutputType[P]>
        }
      >
    >


  export type TokenJwtSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenId?: boolean
    jti?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenJwt"]>

  export type TokenJwtSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenId?: boolean
    jti?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenJwt"]>

  export type TokenJwtSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenId?: boolean
    jti?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenJwt"]>

  export type TokenJwtSelectScalar = {
    id?: boolean
    tokenId?: boolean
    jti?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }

  export type TokenJwtOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tokenId" | "jti" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "isDeleted" | "deletedAt" | "deletedBy", ExtArgs["result"]["tokenJwt"]>
  export type TokenJwtInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }
  export type TokenJwtIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }
  export type TokenJwtIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }

  export type $TokenJwtPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TokenJwt"
    objects: {
      token: Prisma.$TokenPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tokenId: number
      jti: string
      createdAt: Date
      createdBy: number | null
      updatedAt: Date | null
      updatedBy: number | null
      isDeleted: boolean | null
      deletedAt: Date | null
      deletedBy: number | null
    }, ExtArgs["result"]["tokenJwt"]>
    composites: {}
  }

  type TokenJwtGetPayload<S extends boolean | null | undefined | TokenJwtDefaultArgs> = $Result.GetResult<Prisma.$TokenJwtPayload, S>

  type TokenJwtCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenJwtFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenJwtCountAggregateInputType | true
    }

  export interface TokenJwtDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TokenJwt'], meta: { name: 'TokenJwt' } }
    /**
     * Find zero or one TokenJwt that matches the filter.
     * @param {TokenJwtFindUniqueArgs} args - Arguments to find a TokenJwt
     * @example
     * // Get one TokenJwt
     * const tokenJwt = await prisma.tokenJwt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenJwtFindUniqueArgs>(args: SelectSubset<T, TokenJwtFindUniqueArgs<ExtArgs>>): Prisma__TokenJwtClient<$Result.GetResult<Prisma.$TokenJwtPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TokenJwt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenJwtFindUniqueOrThrowArgs} args - Arguments to find a TokenJwt
     * @example
     * // Get one TokenJwt
     * const tokenJwt = await prisma.tokenJwt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenJwtFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenJwtFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenJwtClient<$Result.GetResult<Prisma.$TokenJwtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TokenJwt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenJwtFindFirstArgs} args - Arguments to find a TokenJwt
     * @example
     * // Get one TokenJwt
     * const tokenJwt = await prisma.tokenJwt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenJwtFindFirstArgs>(args?: SelectSubset<T, TokenJwtFindFirstArgs<ExtArgs>>): Prisma__TokenJwtClient<$Result.GetResult<Prisma.$TokenJwtPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TokenJwt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenJwtFindFirstOrThrowArgs} args - Arguments to find a TokenJwt
     * @example
     * // Get one TokenJwt
     * const tokenJwt = await prisma.tokenJwt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenJwtFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenJwtFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenJwtClient<$Result.GetResult<Prisma.$TokenJwtPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TokenJwts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenJwtFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TokenJwts
     * const tokenJwts = await prisma.tokenJwt.findMany()
     * 
     * // Get first 10 TokenJwts
     * const tokenJwts = await prisma.tokenJwt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenJwtWithIdOnly = await prisma.tokenJwt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenJwtFindManyArgs>(args?: SelectSubset<T, TokenJwtFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenJwtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TokenJwt.
     * @param {TokenJwtCreateArgs} args - Arguments to create a TokenJwt.
     * @example
     * // Create one TokenJwt
     * const TokenJwt = await prisma.tokenJwt.create({
     *   data: {
     *     // ... data to create a TokenJwt
     *   }
     * })
     * 
     */
    create<T extends TokenJwtCreateArgs>(args: SelectSubset<T, TokenJwtCreateArgs<ExtArgs>>): Prisma__TokenJwtClient<$Result.GetResult<Prisma.$TokenJwtPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TokenJwts.
     * @param {TokenJwtCreateManyArgs} args - Arguments to create many TokenJwts.
     * @example
     * // Create many TokenJwts
     * const tokenJwt = await prisma.tokenJwt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenJwtCreateManyArgs>(args?: SelectSubset<T, TokenJwtCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TokenJwts and returns the data saved in the database.
     * @param {TokenJwtCreateManyAndReturnArgs} args - Arguments to create many TokenJwts.
     * @example
     * // Create many TokenJwts
     * const tokenJwt = await prisma.tokenJwt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TokenJwts and only return the `id`
     * const tokenJwtWithIdOnly = await prisma.tokenJwt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenJwtCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenJwtCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenJwtPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TokenJwt.
     * @param {TokenJwtDeleteArgs} args - Arguments to delete one TokenJwt.
     * @example
     * // Delete one TokenJwt
     * const TokenJwt = await prisma.tokenJwt.delete({
     *   where: {
     *     // ... filter to delete one TokenJwt
     *   }
     * })
     * 
     */
    delete<T extends TokenJwtDeleteArgs>(args: SelectSubset<T, TokenJwtDeleteArgs<ExtArgs>>): Prisma__TokenJwtClient<$Result.GetResult<Prisma.$TokenJwtPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TokenJwt.
     * @param {TokenJwtUpdateArgs} args - Arguments to update one TokenJwt.
     * @example
     * // Update one TokenJwt
     * const tokenJwt = await prisma.tokenJwt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenJwtUpdateArgs>(args: SelectSubset<T, TokenJwtUpdateArgs<ExtArgs>>): Prisma__TokenJwtClient<$Result.GetResult<Prisma.$TokenJwtPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TokenJwts.
     * @param {TokenJwtDeleteManyArgs} args - Arguments to filter TokenJwts to delete.
     * @example
     * // Delete a few TokenJwts
     * const { count } = await prisma.tokenJwt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenJwtDeleteManyArgs>(args?: SelectSubset<T, TokenJwtDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenJwts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenJwtUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TokenJwts
     * const tokenJwt = await prisma.tokenJwt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenJwtUpdateManyArgs>(args: SelectSubset<T, TokenJwtUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenJwts and returns the data updated in the database.
     * @param {TokenJwtUpdateManyAndReturnArgs} args - Arguments to update many TokenJwts.
     * @example
     * // Update many TokenJwts
     * const tokenJwt = await prisma.tokenJwt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TokenJwts and only return the `id`
     * const tokenJwtWithIdOnly = await prisma.tokenJwt.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokenJwtUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenJwtUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenJwtPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TokenJwt.
     * @param {TokenJwtUpsertArgs} args - Arguments to update or create a TokenJwt.
     * @example
     * // Update or create a TokenJwt
     * const tokenJwt = await prisma.tokenJwt.upsert({
     *   create: {
     *     // ... data to create a TokenJwt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TokenJwt we want to update
     *   }
     * })
     */
    upsert<T extends TokenJwtUpsertArgs>(args: SelectSubset<T, TokenJwtUpsertArgs<ExtArgs>>): Prisma__TokenJwtClient<$Result.GetResult<Prisma.$TokenJwtPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TokenJwts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenJwtCountArgs} args - Arguments to filter TokenJwts to count.
     * @example
     * // Count the number of TokenJwts
     * const count = await prisma.tokenJwt.count({
     *   where: {
     *     // ... the filter for the TokenJwts we want to count
     *   }
     * })
    **/
    count<T extends TokenJwtCountArgs>(
      args?: Subset<T, TokenJwtCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenJwtCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TokenJwt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenJwtAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenJwtAggregateArgs>(args: Subset<T, TokenJwtAggregateArgs>): Prisma.PrismaPromise<GetTokenJwtAggregateType<T>>

    /**
     * Group by TokenJwt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenJwtGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenJwtGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenJwtGroupByArgs['orderBy'] }
        : { orderBy?: TokenJwtGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenJwtGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenJwtGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TokenJwt model
   */
  readonly fields: TokenJwtFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TokenJwt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenJwtClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    token<T extends TokenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TokenDefaultArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TokenJwt model
   */
  interface TokenJwtFieldRefs {
    readonly id: FieldRef<"TokenJwt", 'Int'>
    readonly tokenId: FieldRef<"TokenJwt", 'Int'>
    readonly jti: FieldRef<"TokenJwt", 'String'>
    readonly createdAt: FieldRef<"TokenJwt", 'DateTime'>
    readonly createdBy: FieldRef<"TokenJwt", 'Int'>
    readonly updatedAt: FieldRef<"TokenJwt", 'DateTime'>
    readonly updatedBy: FieldRef<"TokenJwt", 'Int'>
    readonly isDeleted: FieldRef<"TokenJwt", 'Boolean'>
    readonly deletedAt: FieldRef<"TokenJwt", 'DateTime'>
    readonly deletedBy: FieldRef<"TokenJwt", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TokenJwt findUnique
   */
  export type TokenJwtFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenJwt
     */
    select?: TokenJwtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenJwt
     */
    omit?: TokenJwtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenJwtInclude<ExtArgs> | null
    /**
     * Filter, which TokenJwt to fetch.
     */
    where: TokenJwtWhereUniqueInput
  }

  /**
   * TokenJwt findUniqueOrThrow
   */
  export type TokenJwtFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenJwt
     */
    select?: TokenJwtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenJwt
     */
    omit?: TokenJwtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenJwtInclude<ExtArgs> | null
    /**
     * Filter, which TokenJwt to fetch.
     */
    where: TokenJwtWhereUniqueInput
  }

  /**
   * TokenJwt findFirst
   */
  export type TokenJwtFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenJwt
     */
    select?: TokenJwtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenJwt
     */
    omit?: TokenJwtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenJwtInclude<ExtArgs> | null
    /**
     * Filter, which TokenJwt to fetch.
     */
    where?: TokenJwtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenJwts to fetch.
     */
    orderBy?: TokenJwtOrderByWithRelationInput | TokenJwtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenJwts.
     */
    cursor?: TokenJwtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenJwts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenJwts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenJwts.
     */
    distinct?: TokenJwtScalarFieldEnum | TokenJwtScalarFieldEnum[]
  }

  /**
   * TokenJwt findFirstOrThrow
   */
  export type TokenJwtFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenJwt
     */
    select?: TokenJwtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenJwt
     */
    omit?: TokenJwtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenJwtInclude<ExtArgs> | null
    /**
     * Filter, which TokenJwt to fetch.
     */
    where?: TokenJwtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenJwts to fetch.
     */
    orderBy?: TokenJwtOrderByWithRelationInput | TokenJwtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenJwts.
     */
    cursor?: TokenJwtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenJwts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenJwts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenJwts.
     */
    distinct?: TokenJwtScalarFieldEnum | TokenJwtScalarFieldEnum[]
  }

  /**
   * TokenJwt findMany
   */
  export type TokenJwtFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenJwt
     */
    select?: TokenJwtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenJwt
     */
    omit?: TokenJwtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenJwtInclude<ExtArgs> | null
    /**
     * Filter, which TokenJwts to fetch.
     */
    where?: TokenJwtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenJwts to fetch.
     */
    orderBy?: TokenJwtOrderByWithRelationInput | TokenJwtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TokenJwts.
     */
    cursor?: TokenJwtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenJwts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenJwts.
     */
    skip?: number
    distinct?: TokenJwtScalarFieldEnum | TokenJwtScalarFieldEnum[]
  }

  /**
   * TokenJwt create
   */
  export type TokenJwtCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenJwt
     */
    select?: TokenJwtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenJwt
     */
    omit?: TokenJwtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenJwtInclude<ExtArgs> | null
    /**
     * The data needed to create a TokenJwt.
     */
    data: XOR<TokenJwtCreateInput, TokenJwtUncheckedCreateInput>
  }

  /**
   * TokenJwt createMany
   */
  export type TokenJwtCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TokenJwts.
     */
    data: TokenJwtCreateManyInput | TokenJwtCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TokenJwt createManyAndReturn
   */
  export type TokenJwtCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenJwt
     */
    select?: TokenJwtSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TokenJwt
     */
    omit?: TokenJwtOmit<ExtArgs> | null
    /**
     * The data used to create many TokenJwts.
     */
    data: TokenJwtCreateManyInput | TokenJwtCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenJwtIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TokenJwt update
   */
  export type TokenJwtUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenJwt
     */
    select?: TokenJwtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenJwt
     */
    omit?: TokenJwtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenJwtInclude<ExtArgs> | null
    /**
     * The data needed to update a TokenJwt.
     */
    data: XOR<TokenJwtUpdateInput, TokenJwtUncheckedUpdateInput>
    /**
     * Choose, which TokenJwt to update.
     */
    where: TokenJwtWhereUniqueInput
  }

  /**
   * TokenJwt updateMany
   */
  export type TokenJwtUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TokenJwts.
     */
    data: XOR<TokenJwtUpdateManyMutationInput, TokenJwtUncheckedUpdateManyInput>
    /**
     * Filter which TokenJwts to update
     */
    where?: TokenJwtWhereInput
    /**
     * Limit how many TokenJwts to update.
     */
    limit?: number
  }

  /**
   * TokenJwt updateManyAndReturn
   */
  export type TokenJwtUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenJwt
     */
    select?: TokenJwtSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TokenJwt
     */
    omit?: TokenJwtOmit<ExtArgs> | null
    /**
     * The data used to update TokenJwts.
     */
    data: XOR<TokenJwtUpdateManyMutationInput, TokenJwtUncheckedUpdateManyInput>
    /**
     * Filter which TokenJwts to update
     */
    where?: TokenJwtWhereInput
    /**
     * Limit how many TokenJwts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenJwtIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TokenJwt upsert
   */
  export type TokenJwtUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenJwt
     */
    select?: TokenJwtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenJwt
     */
    omit?: TokenJwtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenJwtInclude<ExtArgs> | null
    /**
     * The filter to search for the TokenJwt to update in case it exists.
     */
    where: TokenJwtWhereUniqueInput
    /**
     * In case the TokenJwt found by the `where` argument doesn't exist, create a new TokenJwt with this data.
     */
    create: XOR<TokenJwtCreateInput, TokenJwtUncheckedCreateInput>
    /**
     * In case the TokenJwt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenJwtUpdateInput, TokenJwtUncheckedUpdateInput>
  }

  /**
   * TokenJwt delete
   */
  export type TokenJwtDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenJwt
     */
    select?: TokenJwtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenJwt
     */
    omit?: TokenJwtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenJwtInclude<ExtArgs> | null
    /**
     * Filter which TokenJwt to delete.
     */
    where: TokenJwtWhereUniqueInput
  }

  /**
   * TokenJwt deleteMany
   */
  export type TokenJwtDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenJwts to delete
     */
    where?: TokenJwtWhereInput
    /**
     * Limit how many TokenJwts to delete.
     */
    limit?: number
  }

  /**
   * TokenJwt without action
   */
  export type TokenJwtDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenJwt
     */
    select?: TokenJwtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenJwt
     */
    omit?: TokenJwtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenJwtInclude<ExtArgs> | null
  }


  /**
   * Model TokenFcm
   */

  export type AggregateTokenFcm = {
    _count: TokenFcmCountAggregateOutputType | null
    _avg: TokenFcmAvgAggregateOutputType | null
    _sum: TokenFcmSumAggregateOutputType | null
    _min: TokenFcmMinAggregateOutputType | null
    _max: TokenFcmMaxAggregateOutputType | null
  }

  export type TokenFcmAvgAggregateOutputType = {
    id: number | null
    tokenId: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type TokenFcmSumAggregateOutputType = {
    id: number | null
    tokenId: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type TokenFcmMinAggregateOutputType = {
    id: number | null
    tokenId: number | null
    platform: $Enums.Platform | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type TokenFcmMaxAggregateOutputType = {
    id: number | null
    tokenId: number | null
    platform: $Enums.Platform | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type TokenFcmCountAggregateOutputType = {
    id: number
    tokenId: number
    platform: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    isDeleted: number
    deletedAt: number
    deletedBy: number
    _all: number
  }


  export type TokenFcmAvgAggregateInputType = {
    id?: true
    tokenId?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type TokenFcmSumAggregateInputType = {
    id?: true
    tokenId?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type TokenFcmMinAggregateInputType = {
    id?: true
    tokenId?: true
    platform?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type TokenFcmMaxAggregateInputType = {
    id?: true
    tokenId?: true
    platform?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type TokenFcmCountAggregateInputType = {
    id?: true
    tokenId?: true
    platform?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
    _all?: true
  }

  export type TokenFcmAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenFcm to aggregate.
     */
    where?: TokenFcmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenFcms to fetch.
     */
    orderBy?: TokenFcmOrderByWithRelationInput | TokenFcmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenFcmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenFcms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenFcms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TokenFcms
    **/
    _count?: true | TokenFcmCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenFcmAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenFcmSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenFcmMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenFcmMaxAggregateInputType
  }

  export type GetTokenFcmAggregateType<T extends TokenFcmAggregateArgs> = {
        [P in keyof T & keyof AggregateTokenFcm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokenFcm[P]>
      : GetScalarType<T[P], AggregateTokenFcm[P]>
  }




  export type TokenFcmGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenFcmWhereInput
    orderBy?: TokenFcmOrderByWithAggregationInput | TokenFcmOrderByWithAggregationInput[]
    by: TokenFcmScalarFieldEnum[] | TokenFcmScalarFieldEnum
    having?: TokenFcmScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenFcmCountAggregateInputType | true
    _avg?: TokenFcmAvgAggregateInputType
    _sum?: TokenFcmSumAggregateInputType
    _min?: TokenFcmMinAggregateInputType
    _max?: TokenFcmMaxAggregateInputType
  }

  export type TokenFcmGroupByOutputType = {
    id: number
    tokenId: number
    platform: $Enums.Platform
    createdAt: Date
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
    _count: TokenFcmCountAggregateOutputType | null
    _avg: TokenFcmAvgAggregateOutputType | null
    _sum: TokenFcmSumAggregateOutputType | null
    _min: TokenFcmMinAggregateOutputType | null
    _max: TokenFcmMaxAggregateOutputType | null
  }

  type GetTokenFcmGroupByPayload<T extends TokenFcmGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenFcmGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenFcmGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenFcmGroupByOutputType[P]>
            : GetScalarType<T[P], TokenFcmGroupByOutputType[P]>
        }
      >
    >


  export type TokenFcmSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenId?: boolean
    platform?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenFcm"]>

  export type TokenFcmSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenId?: boolean
    platform?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenFcm"]>

  export type TokenFcmSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenId?: boolean
    platform?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenFcm"]>

  export type TokenFcmSelectScalar = {
    id?: boolean
    tokenId?: boolean
    platform?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }

  export type TokenFcmOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tokenId" | "platform" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "isDeleted" | "deletedAt" | "deletedBy", ExtArgs["result"]["tokenFcm"]>
  export type TokenFcmInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }
  export type TokenFcmIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }
  export type TokenFcmIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }

  export type $TokenFcmPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TokenFcm"
    objects: {
      token: Prisma.$TokenPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tokenId: number
      platform: $Enums.Platform
      createdAt: Date
      createdBy: number | null
      updatedAt: Date | null
      updatedBy: number | null
      isDeleted: boolean | null
      deletedAt: Date | null
      deletedBy: number | null
    }, ExtArgs["result"]["tokenFcm"]>
    composites: {}
  }

  type TokenFcmGetPayload<S extends boolean | null | undefined | TokenFcmDefaultArgs> = $Result.GetResult<Prisma.$TokenFcmPayload, S>

  type TokenFcmCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenFcmFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenFcmCountAggregateInputType | true
    }

  export interface TokenFcmDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TokenFcm'], meta: { name: 'TokenFcm' } }
    /**
     * Find zero or one TokenFcm that matches the filter.
     * @param {TokenFcmFindUniqueArgs} args - Arguments to find a TokenFcm
     * @example
     * // Get one TokenFcm
     * const tokenFcm = await prisma.tokenFcm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFcmFindUniqueArgs>(args: SelectSubset<T, TokenFcmFindUniqueArgs<ExtArgs>>): Prisma__TokenFcmClient<$Result.GetResult<Prisma.$TokenFcmPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TokenFcm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenFcmFindUniqueOrThrowArgs} args - Arguments to find a TokenFcm
     * @example
     * // Get one TokenFcm
     * const tokenFcm = await prisma.tokenFcm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFcmFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFcmFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenFcmClient<$Result.GetResult<Prisma.$TokenFcmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TokenFcm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFcmFindFirstArgs} args - Arguments to find a TokenFcm
     * @example
     * // Get one TokenFcm
     * const tokenFcm = await prisma.tokenFcm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFcmFindFirstArgs>(args?: SelectSubset<T, TokenFcmFindFirstArgs<ExtArgs>>): Prisma__TokenFcmClient<$Result.GetResult<Prisma.$TokenFcmPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TokenFcm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFcmFindFirstOrThrowArgs} args - Arguments to find a TokenFcm
     * @example
     * // Get one TokenFcm
     * const tokenFcm = await prisma.tokenFcm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFcmFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFcmFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenFcmClient<$Result.GetResult<Prisma.$TokenFcmPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TokenFcms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFcmFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TokenFcms
     * const tokenFcms = await prisma.tokenFcm.findMany()
     * 
     * // Get first 10 TokenFcms
     * const tokenFcms = await prisma.tokenFcm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenFcmWithIdOnly = await prisma.tokenFcm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenFcmFindManyArgs>(args?: SelectSubset<T, TokenFcmFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenFcmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TokenFcm.
     * @param {TokenFcmCreateArgs} args - Arguments to create a TokenFcm.
     * @example
     * // Create one TokenFcm
     * const TokenFcm = await prisma.tokenFcm.create({
     *   data: {
     *     // ... data to create a TokenFcm
     *   }
     * })
     * 
     */
    create<T extends TokenFcmCreateArgs>(args: SelectSubset<T, TokenFcmCreateArgs<ExtArgs>>): Prisma__TokenFcmClient<$Result.GetResult<Prisma.$TokenFcmPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TokenFcms.
     * @param {TokenFcmCreateManyArgs} args - Arguments to create many TokenFcms.
     * @example
     * // Create many TokenFcms
     * const tokenFcm = await prisma.tokenFcm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenFcmCreateManyArgs>(args?: SelectSubset<T, TokenFcmCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TokenFcms and returns the data saved in the database.
     * @param {TokenFcmCreateManyAndReturnArgs} args - Arguments to create many TokenFcms.
     * @example
     * // Create many TokenFcms
     * const tokenFcm = await prisma.tokenFcm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TokenFcms and only return the `id`
     * const tokenFcmWithIdOnly = await prisma.tokenFcm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenFcmCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenFcmCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenFcmPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TokenFcm.
     * @param {TokenFcmDeleteArgs} args - Arguments to delete one TokenFcm.
     * @example
     * // Delete one TokenFcm
     * const TokenFcm = await prisma.tokenFcm.delete({
     *   where: {
     *     // ... filter to delete one TokenFcm
     *   }
     * })
     * 
     */
    delete<T extends TokenFcmDeleteArgs>(args: SelectSubset<T, TokenFcmDeleteArgs<ExtArgs>>): Prisma__TokenFcmClient<$Result.GetResult<Prisma.$TokenFcmPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TokenFcm.
     * @param {TokenFcmUpdateArgs} args - Arguments to update one TokenFcm.
     * @example
     * // Update one TokenFcm
     * const tokenFcm = await prisma.tokenFcm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenFcmUpdateArgs>(args: SelectSubset<T, TokenFcmUpdateArgs<ExtArgs>>): Prisma__TokenFcmClient<$Result.GetResult<Prisma.$TokenFcmPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TokenFcms.
     * @param {TokenFcmDeleteManyArgs} args - Arguments to filter TokenFcms to delete.
     * @example
     * // Delete a few TokenFcms
     * const { count } = await prisma.tokenFcm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenFcmDeleteManyArgs>(args?: SelectSubset<T, TokenFcmDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenFcms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFcmUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TokenFcms
     * const tokenFcm = await prisma.tokenFcm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenFcmUpdateManyArgs>(args: SelectSubset<T, TokenFcmUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenFcms and returns the data updated in the database.
     * @param {TokenFcmUpdateManyAndReturnArgs} args - Arguments to update many TokenFcms.
     * @example
     * // Update many TokenFcms
     * const tokenFcm = await prisma.tokenFcm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TokenFcms and only return the `id`
     * const tokenFcmWithIdOnly = await prisma.tokenFcm.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokenFcmUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenFcmUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenFcmPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TokenFcm.
     * @param {TokenFcmUpsertArgs} args - Arguments to update or create a TokenFcm.
     * @example
     * // Update or create a TokenFcm
     * const tokenFcm = await prisma.tokenFcm.upsert({
     *   create: {
     *     // ... data to create a TokenFcm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TokenFcm we want to update
     *   }
     * })
     */
    upsert<T extends TokenFcmUpsertArgs>(args: SelectSubset<T, TokenFcmUpsertArgs<ExtArgs>>): Prisma__TokenFcmClient<$Result.GetResult<Prisma.$TokenFcmPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TokenFcms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFcmCountArgs} args - Arguments to filter TokenFcms to count.
     * @example
     * // Count the number of TokenFcms
     * const count = await prisma.tokenFcm.count({
     *   where: {
     *     // ... the filter for the TokenFcms we want to count
     *   }
     * })
    **/
    count<T extends TokenFcmCountArgs>(
      args?: Subset<T, TokenFcmCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenFcmCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TokenFcm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFcmAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenFcmAggregateArgs>(args: Subset<T, TokenFcmAggregateArgs>): Prisma.PrismaPromise<GetTokenFcmAggregateType<T>>

    /**
     * Group by TokenFcm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFcmGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenFcmGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenFcmGroupByArgs['orderBy'] }
        : { orderBy?: TokenFcmGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenFcmGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenFcmGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TokenFcm model
   */
  readonly fields: TokenFcmFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TokenFcm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenFcmClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    token<T extends TokenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TokenDefaultArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TokenFcm model
   */
  interface TokenFcmFieldRefs {
    readonly id: FieldRef<"TokenFcm", 'Int'>
    readonly tokenId: FieldRef<"TokenFcm", 'Int'>
    readonly platform: FieldRef<"TokenFcm", 'Platform'>
    readonly createdAt: FieldRef<"TokenFcm", 'DateTime'>
    readonly createdBy: FieldRef<"TokenFcm", 'Int'>
    readonly updatedAt: FieldRef<"TokenFcm", 'DateTime'>
    readonly updatedBy: FieldRef<"TokenFcm", 'Int'>
    readonly isDeleted: FieldRef<"TokenFcm", 'Boolean'>
    readonly deletedAt: FieldRef<"TokenFcm", 'DateTime'>
    readonly deletedBy: FieldRef<"TokenFcm", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TokenFcm findUnique
   */
  export type TokenFcmFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenFcm
     */
    select?: TokenFcmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenFcm
     */
    omit?: TokenFcmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenFcmInclude<ExtArgs> | null
    /**
     * Filter, which TokenFcm to fetch.
     */
    where: TokenFcmWhereUniqueInput
  }

  /**
   * TokenFcm findUniqueOrThrow
   */
  export type TokenFcmFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenFcm
     */
    select?: TokenFcmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenFcm
     */
    omit?: TokenFcmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenFcmInclude<ExtArgs> | null
    /**
     * Filter, which TokenFcm to fetch.
     */
    where: TokenFcmWhereUniqueInput
  }

  /**
   * TokenFcm findFirst
   */
  export type TokenFcmFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenFcm
     */
    select?: TokenFcmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenFcm
     */
    omit?: TokenFcmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenFcmInclude<ExtArgs> | null
    /**
     * Filter, which TokenFcm to fetch.
     */
    where?: TokenFcmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenFcms to fetch.
     */
    orderBy?: TokenFcmOrderByWithRelationInput | TokenFcmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenFcms.
     */
    cursor?: TokenFcmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenFcms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenFcms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenFcms.
     */
    distinct?: TokenFcmScalarFieldEnum | TokenFcmScalarFieldEnum[]
  }

  /**
   * TokenFcm findFirstOrThrow
   */
  export type TokenFcmFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenFcm
     */
    select?: TokenFcmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenFcm
     */
    omit?: TokenFcmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenFcmInclude<ExtArgs> | null
    /**
     * Filter, which TokenFcm to fetch.
     */
    where?: TokenFcmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenFcms to fetch.
     */
    orderBy?: TokenFcmOrderByWithRelationInput | TokenFcmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenFcms.
     */
    cursor?: TokenFcmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenFcms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenFcms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenFcms.
     */
    distinct?: TokenFcmScalarFieldEnum | TokenFcmScalarFieldEnum[]
  }

  /**
   * TokenFcm findMany
   */
  export type TokenFcmFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenFcm
     */
    select?: TokenFcmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenFcm
     */
    omit?: TokenFcmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenFcmInclude<ExtArgs> | null
    /**
     * Filter, which TokenFcms to fetch.
     */
    where?: TokenFcmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenFcms to fetch.
     */
    orderBy?: TokenFcmOrderByWithRelationInput | TokenFcmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TokenFcms.
     */
    cursor?: TokenFcmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenFcms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenFcms.
     */
    skip?: number
    distinct?: TokenFcmScalarFieldEnum | TokenFcmScalarFieldEnum[]
  }

  /**
   * TokenFcm create
   */
  export type TokenFcmCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenFcm
     */
    select?: TokenFcmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenFcm
     */
    omit?: TokenFcmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenFcmInclude<ExtArgs> | null
    /**
     * The data needed to create a TokenFcm.
     */
    data: XOR<TokenFcmCreateInput, TokenFcmUncheckedCreateInput>
  }

  /**
   * TokenFcm createMany
   */
  export type TokenFcmCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TokenFcms.
     */
    data: TokenFcmCreateManyInput | TokenFcmCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TokenFcm createManyAndReturn
   */
  export type TokenFcmCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenFcm
     */
    select?: TokenFcmSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TokenFcm
     */
    omit?: TokenFcmOmit<ExtArgs> | null
    /**
     * The data used to create many TokenFcms.
     */
    data: TokenFcmCreateManyInput | TokenFcmCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenFcmIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TokenFcm update
   */
  export type TokenFcmUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenFcm
     */
    select?: TokenFcmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenFcm
     */
    omit?: TokenFcmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenFcmInclude<ExtArgs> | null
    /**
     * The data needed to update a TokenFcm.
     */
    data: XOR<TokenFcmUpdateInput, TokenFcmUncheckedUpdateInput>
    /**
     * Choose, which TokenFcm to update.
     */
    where: TokenFcmWhereUniqueInput
  }

  /**
   * TokenFcm updateMany
   */
  export type TokenFcmUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TokenFcms.
     */
    data: XOR<TokenFcmUpdateManyMutationInput, TokenFcmUncheckedUpdateManyInput>
    /**
     * Filter which TokenFcms to update
     */
    where?: TokenFcmWhereInput
    /**
     * Limit how many TokenFcms to update.
     */
    limit?: number
  }

  /**
   * TokenFcm updateManyAndReturn
   */
  export type TokenFcmUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenFcm
     */
    select?: TokenFcmSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TokenFcm
     */
    omit?: TokenFcmOmit<ExtArgs> | null
    /**
     * The data used to update TokenFcms.
     */
    data: XOR<TokenFcmUpdateManyMutationInput, TokenFcmUncheckedUpdateManyInput>
    /**
     * Filter which TokenFcms to update
     */
    where?: TokenFcmWhereInput
    /**
     * Limit how many TokenFcms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenFcmIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TokenFcm upsert
   */
  export type TokenFcmUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenFcm
     */
    select?: TokenFcmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenFcm
     */
    omit?: TokenFcmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenFcmInclude<ExtArgs> | null
    /**
     * The filter to search for the TokenFcm to update in case it exists.
     */
    where: TokenFcmWhereUniqueInput
    /**
     * In case the TokenFcm found by the `where` argument doesn't exist, create a new TokenFcm with this data.
     */
    create: XOR<TokenFcmCreateInput, TokenFcmUncheckedCreateInput>
    /**
     * In case the TokenFcm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenFcmUpdateInput, TokenFcmUncheckedUpdateInput>
  }

  /**
   * TokenFcm delete
   */
  export type TokenFcmDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenFcm
     */
    select?: TokenFcmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenFcm
     */
    omit?: TokenFcmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenFcmInclude<ExtArgs> | null
    /**
     * Filter which TokenFcm to delete.
     */
    where: TokenFcmWhereUniqueInput
  }

  /**
   * TokenFcm deleteMany
   */
  export type TokenFcmDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenFcms to delete
     */
    where?: TokenFcmWhereInput
    /**
     * Limit how many TokenFcms to delete.
     */
    limit?: number
  }

  /**
   * TokenFcm without action
   */
  export type TokenFcmDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenFcm
     */
    select?: TokenFcmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenFcm
     */
    omit?: TokenFcmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenFcmInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    phone: string | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    phone: string | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    phone: number
    status: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    isDeleted: number
    deletedAt: number
    deletedBy: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    phone?: true
    status?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    phone?: true
    status?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    phone?: true
    status?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string
    phone: string
    status: $Enums.UserStatus
    createdAt: Date
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phone?: boolean
    status?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    userRoles?: boolean | User$userRolesArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    notificationReads?: boolean | User$notificationReadsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phone?: boolean
    status?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phone?: boolean
    status?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phone?: boolean
    status?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "phone" | "status" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "isDeleted" | "deletedAt" | "deletedBy", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userRoles?: boolean | User$userRolesArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    notificationReads?: boolean | User$notificationReadsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userRoles: Prisma.$UserRolePayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      notificationReads: Prisma.$NotificationReadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string
      phone: string
      status: $Enums.UserStatus
      createdAt: Date
      createdBy: number | null
      updatedAt: Date | null
      updatedBy: number | null
      isDeleted: boolean | null
      deletedAt: Date | null
      deletedBy: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userRoles<T extends User$userRolesArgs<ExtArgs> = {}>(args?: Subset<T, User$userRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notificationReads<T extends User$notificationReadsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationReadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly createdBy: FieldRef<"User", 'Int'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly updatedBy: FieldRef<"User", 'Int'>
    readonly isDeleted: FieldRef<"User", 'Boolean'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
    readonly deletedBy: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.userRoles
   */
  export type User$userRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.notificationReads
   */
  export type User$notificationReadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadInclude<ExtArgs> | null
    where?: NotificationReadWhereInput
    orderBy?: NotificationReadOrderByWithRelationInput | NotificationReadOrderByWithRelationInput[]
    cursor?: NotificationReadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationReadScalarFieldEnum | NotificationReadScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserRole
   */

  export type AggregateUserRole = {
    _count: UserRoleCountAggregateOutputType | null
    _avg: UserRoleAvgAggregateOutputType | null
    _sum: UserRoleSumAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  export type UserRoleAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    roleId: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type UserRoleSumAggregateOutputType = {
    id: number | null
    userId: number | null
    roleId: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type UserRoleMinAggregateOutputType = {
    id: number | null
    userId: number | null
    roleId: number | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type UserRoleMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    roleId: number | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type UserRoleCountAggregateOutputType = {
    id: number
    userId: number
    roleId: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    isDeleted: number
    deletedAt: number
    deletedBy: number
    _all: number
  }


  export type UserRoleAvgAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type UserRoleSumAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type UserRoleMinAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type UserRoleMaxAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type UserRoleCountAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    isDeleted?: true
    deletedAt?: true
    deletedBy?: true
    _all?: true
  }

  export type UserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRole to aggregate.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRoles
    **/
    _count?: true | UserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleMaxAggregateInputType
  }

  export type GetUserRoleAggregateType<T extends UserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRole[P]>
      : GetScalarType<T[P], AggregateUserRole[P]>
  }




  export type UserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithAggregationInput | UserRoleOrderByWithAggregationInput[]
    by: UserRoleScalarFieldEnum[] | UserRoleScalarFieldEnum
    having?: UserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleCountAggregateInputType | true
    _avg?: UserRoleAvgAggregateInputType
    _sum?: UserRoleSumAggregateInputType
    _min?: UserRoleMinAggregateInputType
    _max?: UserRoleMaxAggregateInputType
  }

  export type UserRoleGroupByOutputType = {
    id: number
    userId: number
    roleId: number
    createdAt: Date
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedBy: number | null
    _count: UserRoleCountAggregateOutputType | null
    _avg: UserRoleAvgAggregateOutputType | null
    _sum: UserRoleSumAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  type GetUserRoleGroupByPayload<T extends UserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
        }
      >
    >


  export type UserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roleId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roleId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roleId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectScalar = {
    id?: boolean
    userId?: boolean
    roleId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }

  export type UserRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "roleId" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "isDeleted" | "deletedAt" | "deletedBy", ExtArgs["result"]["userRole"]>
  export type UserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRole"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      roleId: number
      createdAt: Date
      createdBy: number | null
      updatedAt: Date | null
      updatedBy: number | null
      isDeleted: boolean | null
      deletedAt: Date | null
      deletedBy: number | null
    }, ExtArgs["result"]["userRole"]>
    composites: {}
  }

  type UserRoleGetPayload<S extends boolean | null | undefined | UserRoleDefaultArgs> = $Result.GetResult<Prisma.$UserRolePayload, S>

  type UserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRoleCountAggregateInputType | true
    }

  export interface UserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRole'], meta: { name: 'UserRole' } }
    /**
     * Find zero or one UserRole that matches the filter.
     * @param {UserRoleFindUniqueArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRoleFindUniqueArgs>(args: SelectSubset<T, UserRoleFindUniqueArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRoleFindUniqueOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRoleFindFirstArgs>(args?: SelectSubset<T, UserRoleFindFirstArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoles
     * const userRoles = await prisma.userRole.findMany()
     * 
     * // Get first 10 UserRoles
     * const userRoles = await prisma.userRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userRoleWithIdOnly = await prisma.userRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserRoleFindManyArgs>(args?: SelectSubset<T, UserRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRole.
     * @param {UserRoleCreateArgs} args - Arguments to create a UserRole.
     * @example
     * // Create one UserRole
     * const UserRole = await prisma.userRole.create({
     *   data: {
     *     // ... data to create a UserRole
     *   }
     * })
     * 
     */
    create<T extends UserRoleCreateArgs>(args: SelectSubset<T, UserRoleCreateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRoles.
     * @param {UserRoleCreateManyArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRoleCreateManyArgs>(args?: SelectSubset<T, UserRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRoles and returns the data saved in the database.
     * @param {UserRoleCreateManyAndReturnArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRoles and only return the `id`
     * const userRoleWithIdOnly = await prisma.userRole.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, UserRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserRole.
     * @param {UserRoleDeleteArgs} args - Arguments to delete one UserRole.
     * @example
     * // Delete one UserRole
     * const UserRole = await prisma.userRole.delete({
     *   where: {
     *     // ... filter to delete one UserRole
     *   }
     * })
     * 
     */
    delete<T extends UserRoleDeleteArgs>(args: SelectSubset<T, UserRoleDeleteArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRole.
     * @param {UserRoleUpdateArgs} args - Arguments to update one UserRole.
     * @example
     * // Update one UserRole
     * const userRole = await prisma.userRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRoleUpdateArgs>(args: SelectSubset<T, UserRoleUpdateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRoles.
     * @param {UserRoleDeleteManyArgs} args - Arguments to filter UserRoles to delete.
     * @example
     * // Delete a few UserRoles
     * const { count } = await prisma.userRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRoleDeleteManyArgs>(args?: SelectSubset<T, UserRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRoleUpdateManyArgs>(args: SelectSubset<T, UserRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles and returns the data updated in the database.
     * @param {UserRoleUpdateManyAndReturnArgs} args - Arguments to update many UserRoles.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserRoles and only return the `id`
     * const userRoleWithIdOnly = await prisma.userRole.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, UserRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserRole.
     * @param {UserRoleUpsertArgs} args - Arguments to update or create a UserRole.
     * @example
     * // Update or create a UserRole
     * const userRole = await prisma.userRole.upsert({
     *   create: {
     *     // ... data to create a UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRole we want to update
     *   }
     * })
     */
    upsert<T extends UserRoleUpsertArgs>(args: SelectSubset<T, UserRoleUpsertArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleCountArgs} args - Arguments to filter UserRoles to count.
     * @example
     * // Count the number of UserRoles
     * const count = await prisma.userRole.count({
     *   where: {
     *     // ... the filter for the UserRoles we want to count
     *   }
     * })
    **/
    count<T extends UserRoleCountArgs>(
      args?: Subset<T, UserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserRoleAggregateArgs>(args: Subset<T, UserRoleAggregateArgs>): Prisma.PrismaPromise<GetUserRoleAggregateType<T>>

    /**
     * Group by UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRoleGroupByArgs['orderBy'] }
        : { orderBy?: UserRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRole model
   */
  readonly fields: UserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserRole model
   */
  interface UserRoleFieldRefs {
    readonly id: FieldRef<"UserRole", 'Int'>
    readonly userId: FieldRef<"UserRole", 'Int'>
    readonly roleId: FieldRef<"UserRole", 'Int'>
    readonly createdAt: FieldRef<"UserRole", 'DateTime'>
    readonly createdBy: FieldRef<"UserRole", 'Int'>
    readonly updatedAt: FieldRef<"UserRole", 'DateTime'>
    readonly updatedBy: FieldRef<"UserRole", 'Int'>
    readonly isDeleted: FieldRef<"UserRole", 'Boolean'>
    readonly deletedAt: FieldRef<"UserRole", 'DateTime'>
    readonly deletedBy: FieldRef<"UserRole", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserRole findUnique
   */
  export type UserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findUniqueOrThrow
   */
  export type UserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findFirst
   */
  export type UserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findFirstOrThrow
   */
  export type UserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findMany
   */
  export type UserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRoles to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole create
   */
  export type UserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRole.
     */
    data: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
  }

  /**
   * UserRole createMany
   */
  export type UserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRole createManyAndReturn
   */
  export type UserRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRole update
   */
  export type UserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRole.
     */
    data: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
    /**
     * Choose, which UserRole to update.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole updateMany
   */
  export type UserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
  }

  /**
   * UserRole updateManyAndReturn
   */
  export type UserRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRole upsert
   */
  export type UserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRole to update in case it exists.
     */
    where: UserRoleWhereUniqueInput
    /**
     * In case the UserRole found by the `where` argument doesn't exist, create a new UserRole with this data.
     */
    create: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
    /**
     * In case the UserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
  }

  /**
   * UserRole delete
   */
  export type UserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter which UserRole to delete.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole deleteMany
   */
  export type UserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoles to delete
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to delete.
     */
    limit?: number
  }

  /**
   * UserRole without action
   */
  export type UserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    id: 'id',
    loginId: 'loginId',
    password: 'password',
    email: 'email',
    name: 'name',
    phone: 'phone',
    status: 'status',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const AdminRoleScalarFieldEnum: {
    id: 'id',
    adminId: 'adminId',
    roleId: 'roleId',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy'
  };

  export type AdminRoleScalarFieldEnum = (typeof AdminRoleScalarFieldEnum)[keyof typeof AdminRoleScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    content: 'content',
    type: 'type',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const NotificationReadScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    notificationId: 'notificationId',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy'
  };

  export type NotificationReadScalarFieldEnum = (typeof NotificationReadScalarFieldEnum)[keyof typeof NotificationReadScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    userId: 'userId',
    viewCount: 'viewCount',
    status: 'status',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    owner: 'owner',
    description: 'description',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const PermissionScalarFieldEnum: {
    id: 'id',
    scope: 'scope',
    action: 'action',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const RolePermissionScalarFieldEnum: {
    id: 'id',
    roleId: 'roleId',
    permissionId: 'permissionId',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy'
  };

  export type RolePermissionScalarFieldEnum = (typeof RolePermissionScalarFieldEnum)[keyof typeof RolePermissionScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    tokenHash: 'tokenHash',
    tokenType: 'tokenType',
    owner: 'owner',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const TokenJwtScalarFieldEnum: {
    id: 'id',
    tokenId: 'tokenId',
    jti: 'jti',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy'
  };

  export type TokenJwtScalarFieldEnum = (typeof TokenJwtScalarFieldEnum)[keyof typeof TokenJwtScalarFieldEnum]


  export const TokenFcmScalarFieldEnum: {
    id: 'id',
    tokenId: 'tokenId',
    platform: 'platform',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy'
  };

  export type TokenFcmScalarFieldEnum = (typeof TokenFcmScalarFieldEnum)[keyof typeof TokenFcmScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    phone: 'phone',
    status: 'status',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserRoleScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    roleId: 'roleId',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy'
  };

  export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


  /**
   * Reference to a field of type 'PostStatus'
   */
  export type EnumPostStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostStatus'>
    


  /**
   * Reference to a field of type 'PostStatus[]'
   */
  export type ListEnumPostStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostStatus[]'>
    


  /**
   * Reference to a field of type 'Owner'
   */
  export type EnumOwnerFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Owner'>
    


  /**
   * Reference to a field of type 'Owner[]'
   */
  export type ListEnumOwnerFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Owner[]'>
    


  /**
   * Reference to a field of type 'TokenType'
   */
  export type EnumTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenType'>
    


  /**
   * Reference to a field of type 'TokenType[]'
   */
  export type ListEnumTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenType[]'>
    


  /**
   * Reference to a field of type 'Platform'
   */
  export type EnumPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Platform'>
    


  /**
   * Reference to a field of type 'Platform[]'
   */
  export type ListEnumPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Platform[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    loginId?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    name?: StringFilter<"Admin"> | string
    phone?: StringFilter<"Admin"> | string
    status?: EnumUserStatusFilter<"Admin"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    createdBy?: IntNullableFilter<"Admin"> | number | null
    updatedAt?: DateTimeNullableFilter<"Admin"> | Date | string | null
    updatedBy?: IntNullableFilter<"Admin"> | number | null
    isDeleted?: BoolNullableFilter<"Admin"> | boolean | null
    deletedAt?: DateTimeNullableFilter<"Admin"> | Date | string | null
    deletedBy?: IntNullableFilter<"Admin"> | number | null
    adminRoles?: AdminRoleListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    loginId?: SortOrder
    password?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    isDeleted?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    adminRoles?: AdminRoleOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    loginId?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    password?: StringFilter<"Admin"> | string
    name?: StringFilter<"Admin"> | string
    phone?: StringFilter<"Admin"> | string
    status?: EnumUserStatusFilter<"Admin"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    createdBy?: IntNullableFilter<"Admin"> | number | null
    updatedAt?: DateTimeNullableFilter<"Admin"> | Date | string | null
    updatedBy?: IntNullableFilter<"Admin"> | number | null
    isDeleted?: BoolNullableFilter<"Admin"> | boolean | null
    deletedAt?: DateTimeNullableFilter<"Admin"> | Date | string | null
    deletedBy?: IntNullableFilter<"Admin"> | number | null
    adminRoles?: AdminRoleListRelationFilter
  }, "id" | "loginId" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    loginId?: SortOrder
    password?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    isDeleted?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    loginId?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    name?: StringWithAggregatesFilter<"Admin"> | string
    phone?: StringWithAggregatesFilter<"Admin"> | string
    status?: EnumUserStatusWithAggregatesFilter<"Admin"> | $Enums.UserStatus
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    createdBy?: IntNullableWithAggregatesFilter<"Admin"> | number | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Admin"> | Date | string | null
    updatedBy?: IntNullableWithAggregatesFilter<"Admin"> | number | null
    isDeleted?: BoolNullableWithAggregatesFilter<"Admin"> | boolean | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Admin"> | Date | string | null
    deletedBy?: IntNullableWithAggregatesFilter<"Admin"> | number | null
  }

  export type AdminRoleWhereInput = {
    AND?: AdminRoleWhereInput | AdminRoleWhereInput[]
    OR?: AdminRoleWhereInput[]
    NOT?: AdminRoleWhereInput | AdminRoleWhereInput[]
    id?: IntFilter<"AdminRole"> | number
    adminId?: IntFilter<"AdminRole"> | number
    roleId?: IntFilter<"AdminRole"> | number
    createdAt?: DateTimeFilter<"AdminRole"> | Date | string
    createdBy?: IntNullableFilter<"AdminRole"> | number | null
    updatedAt?: DateTimeNullableFilter<"AdminRole"> | Date | string | null
    updatedBy?: IntNullableFilter<"AdminRole"> | number | null
    isDeleted?: BoolNullableFilter<"AdminRole"> | boolean | null
    deletedAt?: DateTimeNullableFilter<"AdminRole"> | Date | string | null
    deletedBy?: IntNullableFilter<"AdminRole"> | number | null
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type AdminRoleOrderByWithRelationInput = {
    id?: SortOrder
    adminId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    isDeleted?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    admin?: AdminOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
  }

  export type AdminRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    adminId_roleId?: AdminRoleAdminIdRoleIdCompoundUniqueInput
    AND?: AdminRoleWhereInput | AdminRoleWhereInput[]
    OR?: AdminRoleWhereInput[]
    NOT?: AdminRoleWhereInput | AdminRoleWhereInput[]
    adminId?: IntFilter<"AdminRole"> | number
    roleId?: IntFilter<"AdminRole"> | number
    createdAt?: DateTimeFilter<"AdminRole"> | Date | string
    createdBy?: IntNullableFilter<"AdminRole"> | number | null
    updatedAt?: DateTimeNullableFilter<"AdminRole"> | Date | string | null
    updatedBy?: IntNullableFilter<"AdminRole"> | number | null
    isDeleted?: BoolNullableFilter<"AdminRole"> | boolean | null
    deletedAt?: DateTimeNullableFilter<"AdminRole"> | Date | string | null
    deletedBy?: IntNullableFilter<"AdminRole"> | number | null
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "id" | "adminId_roleId">

  export type AdminRoleOrderByWithAggregationInput = {
    id?: SortOrder
    adminId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    isDeleted?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    _count?: AdminRoleCountOrderByAggregateInput
    _avg?: AdminRoleAvgOrderByAggregateInput
    _max?: AdminRoleMaxOrderByAggregateInput
    _min?: AdminRoleMinOrderByAggregateInput
    _sum?: AdminRoleSumOrderByAggregateInput
  }

  export type AdminRoleScalarWhereWithAggregatesInput = {
    AND?: AdminRoleScalarWhereWithAggregatesInput | AdminRoleScalarWhereWithAggregatesInput[]
    OR?: AdminRoleScalarWhereWithAggregatesInput[]
    NOT?: AdminRoleScalarWhereWithAggregatesInput | AdminRoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AdminRole"> | number
    adminId?: IntWithAggregatesFilter<"AdminRole"> | number
    roleId?: IntWithAggregatesFilter<"AdminRole"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AdminRole"> | Date | string
    createdBy?: IntNullableWithAggregatesFilter<"AdminRole"> | number | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"AdminRole"> | Date | string | null
    updatedBy?: IntNullableWithAggregatesFilter<"AdminRole"> | number | null
    isDeleted?: BoolNullableWithAggregatesFilter<"AdminRole"> | boolean | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"AdminRole"> | Date | string | null
    deletedBy?: IntNullableWithAggregatesFilter<"AdminRole"> | number | null
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    userId?: IntNullableFilter<"Notification"> | number | null
    title?: StringFilter<"Notification"> | string
    content?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    createdBy?: IntNullableFilter<"Notification"> | number | null
    updatedAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    updatedBy?: IntNullableFilter<"Notification"> | number | null
    isDeleted?: BoolNullableFilter<"Notification"> | boolean | null
    deletedAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    deletedBy?: IntNullableFilter<"Notification"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    notificationReads?: NotificationReadListRelationFilter
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    isDeleted?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    notificationReads?: NotificationReadOrderByRelationAggregateInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: IntNullableFilter<"Notification"> | number | null
    title?: StringFilter<"Notification"> | string
    content?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    createdBy?: IntNullableFilter<"Notification"> | number | null
    updatedAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    updatedBy?: IntNullableFilter<"Notification"> | number | null
    isDeleted?: BoolNullableFilter<"Notification"> | boolean | null
    deletedAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    deletedBy?: IntNullableFilter<"Notification"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    notificationReads?: NotificationReadListRelationFilter
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    isDeleted?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    userId?: IntNullableWithAggregatesFilter<"Notification"> | number | null
    title?: StringWithAggregatesFilter<"Notification"> | string
    content?: StringWithAggregatesFilter<"Notification"> | string
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    createdBy?: IntNullableWithAggregatesFilter<"Notification"> | number | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    updatedBy?: IntNullableWithAggregatesFilter<"Notification"> | number | null
    isDeleted?: BoolNullableWithAggregatesFilter<"Notification"> | boolean | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    deletedBy?: IntNullableWithAggregatesFilter<"Notification"> | number | null
  }

  export type NotificationReadWhereInput = {
    AND?: NotificationReadWhereInput | NotificationReadWhereInput[]
    OR?: NotificationReadWhereInput[]
    NOT?: NotificationReadWhereInput | NotificationReadWhereInput[]
    id?: IntFilter<"NotificationRead"> | number
    userId?: IntFilter<"NotificationRead"> | number
    notificationId?: IntFilter<"NotificationRead"> | number
    createdAt?: DateTimeFilter<"NotificationRead"> | Date | string
    createdBy?: IntNullableFilter<"NotificationRead"> | number | null
    updatedAt?: DateTimeNullableFilter<"NotificationRead"> | Date | string | null
    updatedBy?: IntNullableFilter<"NotificationRead"> | number | null
    isDeleted?: BoolNullableFilter<"NotificationRead"> | boolean | null
    deletedAt?: DateTimeNullableFilter<"NotificationRead"> | Date | string | null
    deletedBy?: IntNullableFilter<"NotificationRead"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    notification?: XOR<NotificationScalarRelationFilter, NotificationWhereInput>
  }

  export type NotificationReadOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    notificationId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    isDeleted?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    notification?: NotificationOrderByWithRelationInput
  }

  export type NotificationReadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationReadWhereInput | NotificationReadWhereInput[]
    OR?: NotificationReadWhereInput[]
    NOT?: NotificationReadWhereInput | NotificationReadWhereInput[]
    userId?: IntFilter<"NotificationRead"> | number
    notificationId?: IntFilter<"NotificationRead"> | number
    createdAt?: DateTimeFilter<"NotificationRead"> | Date | string
    createdBy?: IntNullableFilter<"NotificationRead"> | number | null
    updatedAt?: DateTimeNullableFilter<"NotificationRead"> | Date | string | null
    updatedBy?: IntNullableFilter<"NotificationRead"> | number | null
    isDeleted?: BoolNullableFilter<"NotificationRead"> | boolean | null
    deletedAt?: DateTimeNullableFilter<"NotificationRead"> | Date | string | null
    deletedBy?: IntNullableFilter<"NotificationRead"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    notification?: XOR<NotificationScalarRelationFilter, NotificationWhereInput>
  }, "id">

  export type NotificationReadOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    notificationId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    isDeleted?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    _count?: NotificationReadCountOrderByAggregateInput
    _avg?: NotificationReadAvgOrderByAggregateInput
    _max?: NotificationReadMaxOrderByAggregateInput
    _min?: NotificationReadMinOrderByAggregateInput
    _sum?: NotificationReadSumOrderByAggregateInput
  }

  export type NotificationReadScalarWhereWithAggregatesInput = {
    AND?: NotificationReadScalarWhereWithAggregatesInput | NotificationReadScalarWhereWithAggregatesInput[]
    OR?: NotificationReadScalarWhereWithAggregatesInput[]
    NOT?: NotificationReadScalarWhereWithAggregatesInput | NotificationReadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NotificationRead"> | number
    userId?: IntWithAggregatesFilter<"NotificationRead"> | number
    notificationId?: IntWithAggregatesFilter<"NotificationRead"> | number
    createdAt?: DateTimeWithAggregatesFilter<"NotificationRead"> | Date | string
    createdBy?: IntNullableWithAggregatesFilter<"NotificationRead"> | number | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"NotificationRead"> | Date | string | null
    updatedBy?: IntNullableWithAggregatesFilter<"NotificationRead"> | number | null
    isDeleted?: BoolNullableWithAggregatesFilter<"NotificationRead"> | boolean | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"NotificationRead"> | Date | string | null
    deletedBy?: IntNullableWithAggregatesFilter<"NotificationRead"> | number | null
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    userId?: IntFilter<"Post"> | number
    viewCount?: IntFilter<"Post"> | number
    status?: EnumPostStatusFilter<"Post"> | $Enums.PostStatus
    createdAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    createdBy?: IntNullableFilter<"Post"> | number | null
    updatedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    updatedBy?: IntNullableFilter<"Post"> | number | null
    isDeleted?: BoolNullableFilter<"Post"> | boolean | null
    deletedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    deletedBy?: IntNullableFilter<"Post"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    viewCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    isDeleted?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    userId?: IntFilter<"Post"> | number
    viewCount?: IntFilter<"Post"> | number
    status?: EnumPostStatusFilter<"Post"> | $Enums.PostStatus
    createdAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    createdBy?: IntNullableFilter<"Post"> | number | null
    updatedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    updatedBy?: IntNullableFilter<"Post"> | number | null
    isDeleted?: BoolNullableFilter<"Post"> | boolean | null
    deletedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    deletedBy?: IntNullableFilter<"Post"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    viewCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    isDeleted?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    title?: StringWithAggregatesFilter<"Post"> | string
    content?: StringWithAggregatesFilter<"Post"> | string
    userId?: IntWithAggregatesFilter<"Post"> | number
    viewCount?: IntWithAggregatesFilter<"Post"> | number
    status?: EnumPostStatusWithAggregatesFilter<"Post"> | $Enums.PostStatus
    createdAt?: DateTimeNullableWithAggregatesFilter<"Post"> | Date | string | null
    createdBy?: IntNullableWithAggregatesFilter<"Post"> | number | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Post"> | Date | string | null
    updatedBy?: IntNullableWithAggregatesFilter<"Post"> | number | null
    isDeleted?: BoolNullableWithAggregatesFilter<"Post"> | boolean | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Post"> | Date | string | null
    deletedBy?: IntNullableWithAggregatesFilter<"Post"> | number | null
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    owner?: EnumOwnerFilter<"Role"> | $Enums.Owner
    description?: StringNullableFilter<"Role"> | string | null
    createdAt?: DateTimeFilter<"Role"> | Date | string
    createdBy?: IntNullableFilter<"Role"> | number | null
    updatedAt?: DateTimeNullableFilter<"Role"> | Date | string | null
    updatedBy?: IntNullableFilter<"Role"> | number | null
    isDeleted?: BoolNullableFilter<"Role"> | boolean | null
    deletedAt?: DateTimeNullableFilter<"Role"> | Date | string | null
    deletedBy?: IntNullableFilter<"Role"> | number | null
    userRoles?: UserRoleListRelationFilter
    adminRoles?: AdminRoleListRelationFilter
    rolePermissions?: RolePermissionListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    owner?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    isDeleted?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    userRoles?: UserRoleOrderByRelationAggregateInput
    adminRoles?: AdminRoleOrderByRelationAggregateInput
    rolePermissions?: RolePermissionOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    name?: StringFilter<"Role"> | string
    owner?: EnumOwnerFilter<"Role"> | $Enums.Owner
    description?: StringNullableFilter<"Role"> | string | null
    createdAt?: DateTimeFilter<"Role"> | Date | string
    createdBy?: IntNullableFilter<"Role"> | number | null
    updatedAt?: DateTimeNullableFilter<"Role"> | Date | string | null
    updatedBy?: IntNullableFilter<"Role"> | number | null
    isDeleted?: BoolNullableFilter<"Role"> | boolean | null
    deletedAt?: DateTimeNullableFilter<"Role"> | Date | string | null
    deletedBy?: IntNullableFilter<"Role"> | number | null
    userRoles?: UserRoleListRelationFilter
    adminRoles?: AdminRoleListRelationFilter
    rolePermissions?: RolePermissionListRelationFilter
  }, "id">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    owner?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    isDeleted?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    name?: StringWithAggregatesFilter<"Role"> | string
    owner?: EnumOwnerWithAggregatesFilter<"Role"> | $Enums.Owner
    description?: StringNullableWithAggregatesFilter<"Role"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    createdBy?: IntNullableWithAggregatesFilter<"Role"> | number | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Role"> | Date | string | null
    updatedBy?: IntNullableWithAggregatesFilter<"Role"> | number | null
    isDeleted?: BoolNullableWithAggregatesFilter<"Role"> | boolean | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Role"> | Date | string | null
    deletedBy?: IntNullableWithAggregatesFilter<"Role"> | number | null
  }

  export type PermissionWhereInput = {
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    id?: IntFilter<"Permission"> | number
    scope?: StringFilter<"Permission"> | string
    action?: StringFilter<"Permission"> | string
    createdAt?: DateTimeFilter<"Permission"> | Date | string
    createdBy?: IntNullableFilter<"Permission"> | number | null
    updatedAt?: DateTimeNullableFilter<"Permission"> | Date | string | null
    updatedBy?: IntNullableFilter<"Permission"> | number | null
    isDeleted?: BoolNullableFilter<"Permission"> | boolean | null
    deletedAt?: DateTimeNullableFilter<"Permission"> | Date | string | null
    deletedBy?: IntNullableFilter<"Permission"> | number | null
    rolePermissions?: RolePermissionListRelationFilter
  }

  export type PermissionOrderByWithRelationInput = {
    id?: SortOrder
    scope?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    isDeleted?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    rolePermissions?: RolePermissionOrderByRelationAggregateInput
  }

  export type PermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    scope_action?: PermissionScopeActionCompoundUniqueInput
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    scope?: StringFilter<"Permission"> | string
    action?: StringFilter<"Permission"> | string
    createdAt?: DateTimeFilter<"Permission"> | Date | string
    createdBy?: IntNullableFilter<"Permission"> | number | null
    updatedAt?: DateTimeNullableFilter<"Permission"> | Date | string | null
    updatedBy?: IntNullableFilter<"Permission"> | number | null
    isDeleted?: BoolNullableFilter<"Permission"> | boolean | null
    deletedAt?: DateTimeNullableFilter<"Permission"> | Date | string | null
    deletedBy?: IntNullableFilter<"Permission"> | number | null
    rolePermissions?: RolePermissionListRelationFilter
  }, "id" | "scope_action">

  export type PermissionOrderByWithAggregationInput = {
    id?: SortOrder
    scope?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    isDeleted?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    _count?: PermissionCountOrderByAggregateInput
    _avg?: PermissionAvgOrderByAggregateInput
    _max?: PermissionMaxOrderByAggregateInput
    _min?: PermissionMinOrderByAggregateInput
    _sum?: PermissionSumOrderByAggregateInput
  }

  export type PermissionScalarWhereWithAggregatesInput = {
    AND?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    OR?: PermissionScalarWhereWithAggregatesInput[]
    NOT?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Permission"> | number
    scope?: StringWithAggregatesFilter<"Permission"> | string
    action?: StringWithAggregatesFilter<"Permission"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Permission"> | Date | string
    createdBy?: IntNullableWithAggregatesFilter<"Permission"> | number | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Permission"> | Date | string | null
    updatedBy?: IntNullableWithAggregatesFilter<"Permission"> | number | null
    isDeleted?: BoolNullableWithAggregatesFilter<"Permission"> | boolean | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Permission"> | Date | string | null
    deletedBy?: IntNullableWithAggregatesFilter<"Permission"> | number | null
  }

  export type RolePermissionWhereInput = {
    AND?: RolePermissionWhereInput | RolePermissionWhereInput[]
    OR?: RolePermissionWhereInput[]
    NOT?: RolePermissionWhereInput | RolePermissionWhereInput[]
    id?: IntFilter<"RolePermission"> | number
    roleId?: IntFilter<"RolePermission"> | number
    permissionId?: IntFilter<"RolePermission"> | number
    createdAt?: DateTimeFilter<"RolePermission"> | Date | string
    createdBy?: IntFilter<"RolePermission"> | number
    updatedAt?: DateTimeNullableFilter<"RolePermission"> | Date | string | null
    updatedBy?: IntNullableFilter<"RolePermission"> | number | null
    isDeleted?: BoolNullableFilter<"RolePermission"> | boolean | null
    deletedAt?: DateTimeNullableFilter<"RolePermission"> | Date | string | null
    deletedBy?: IntNullableFilter<"RolePermission"> | number | null
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    permission?: XOR<PermissionScalarRelationFilter, PermissionWhereInput>
  }

  export type RolePermissionOrderByWithRelationInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    isDeleted?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    role?: RoleOrderByWithRelationInput
    permission?: PermissionOrderByWithRelationInput
  }

  export type RolePermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    roleId_permissionId?: RolePermissionRoleIdPermissionIdCompoundUniqueInput
    AND?: RolePermissionWhereInput | RolePermissionWhereInput[]
    OR?: RolePermissionWhereInput[]
    NOT?: RolePermissionWhereInput | RolePermissionWhereInput[]
    roleId?: IntFilter<"RolePermission"> | number
    permissionId?: IntFilter<"RolePermission"> | number
    createdAt?: DateTimeFilter<"RolePermission"> | Date | string
    createdBy?: IntFilter<"RolePermission"> | number
    updatedAt?: DateTimeNullableFilter<"RolePermission"> | Date | string | null
    updatedBy?: IntNullableFilter<"RolePermission"> | number | null
    isDeleted?: BoolNullableFilter<"RolePermission"> | boolean | null
    deletedAt?: DateTimeNullableFilter<"RolePermission"> | Date | string | null
    deletedBy?: IntNullableFilter<"RolePermission"> | number | null
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    permission?: XOR<PermissionScalarRelationFilter, PermissionWhereInput>
  }, "id" | "roleId_permissionId">

  export type RolePermissionOrderByWithAggregationInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    isDeleted?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    _count?: RolePermissionCountOrderByAggregateInput
    _avg?: RolePermissionAvgOrderByAggregateInput
    _max?: RolePermissionMaxOrderByAggregateInput
    _min?: RolePermissionMinOrderByAggregateInput
    _sum?: RolePermissionSumOrderByAggregateInput
  }

  export type RolePermissionScalarWhereWithAggregatesInput = {
    AND?: RolePermissionScalarWhereWithAggregatesInput | RolePermissionScalarWhereWithAggregatesInput[]
    OR?: RolePermissionScalarWhereWithAggregatesInput[]
    NOT?: RolePermissionScalarWhereWithAggregatesInput | RolePermissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RolePermission"> | number
    roleId?: IntWithAggregatesFilter<"RolePermission"> | number
    permissionId?: IntWithAggregatesFilter<"RolePermission"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RolePermission"> | Date | string
    createdBy?: IntWithAggregatesFilter<"RolePermission"> | number
    updatedAt?: DateTimeNullableWithAggregatesFilter<"RolePermission"> | Date | string | null
    updatedBy?: IntNullableWithAggregatesFilter<"RolePermission"> | number | null
    isDeleted?: BoolNullableWithAggregatesFilter<"RolePermission"> | boolean | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"RolePermission"> | Date | string | null
    deletedBy?: IntNullableWithAggregatesFilter<"RolePermission"> | number | null
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    id?: IntFilter<"Token"> | number
    tokenHash?: StringFilter<"Token"> | string
    tokenType?: EnumTokenTypeFilter<"Token"> | $Enums.TokenType
    owner?: EnumOwnerFilter<"Token"> | $Enums.Owner
    ownerId?: IntFilter<"Token"> | number
    createdAt?: DateTimeFilter<"Token"> | Date | string
    createdBy?: IntNullableFilter<"Token"> | number | null
    updatedAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    updatedBy?: IntNullableFilter<"Token"> | number | null
    isDeleted?: BoolNullableFilter<"Token"> | boolean | null
    deletedAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    deletedBy?: IntNullableFilter<"Token"> | number | null
    tokenFcms?: TokenFcmListRelationFilter
    tokenJwts?: TokenJwtListRelationFilter
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    tokenType?: SortOrder
    owner?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    isDeleted?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    tokenFcms?: TokenFcmOrderByRelationAggregateInput
    tokenJwts?: TokenJwtOrderByRelationAggregateInput
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    tokenHash?: StringFilter<"Token"> | string
    tokenType?: EnumTokenTypeFilter<"Token"> | $Enums.TokenType
    owner?: EnumOwnerFilter<"Token"> | $Enums.Owner
    ownerId?: IntFilter<"Token"> | number
    createdAt?: DateTimeFilter<"Token"> | Date | string
    createdBy?: IntNullableFilter<"Token"> | number | null
    updatedAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    updatedBy?: IntNullableFilter<"Token"> | number | null
    isDeleted?: BoolNullableFilter<"Token"> | boolean | null
    deletedAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    deletedBy?: IntNullableFilter<"Token"> | number | null
    tokenFcms?: TokenFcmListRelationFilter
    tokenJwts?: TokenJwtListRelationFilter
  }, "id">

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    tokenType?: SortOrder
    owner?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    isDeleted?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    _count?: TokenCountOrderByAggregateInput
    _avg?: TokenAvgOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
    _sum?: TokenSumOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Token"> | number
    tokenHash?: StringWithAggregatesFilter<"Token"> | string
    tokenType?: EnumTokenTypeWithAggregatesFilter<"Token"> | $Enums.TokenType
    owner?: EnumOwnerWithAggregatesFilter<"Token"> | $Enums.Owner
    ownerId?: IntWithAggregatesFilter<"Token"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    createdBy?: IntNullableWithAggregatesFilter<"Token"> | number | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Token"> | Date | string | null
    updatedBy?: IntNullableWithAggregatesFilter<"Token"> | number | null
    isDeleted?: BoolNullableWithAggregatesFilter<"Token"> | boolean | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Token"> | Date | string | null
    deletedBy?: IntNullableWithAggregatesFilter<"Token"> | number | null
  }

  export type TokenJwtWhereInput = {
    AND?: TokenJwtWhereInput | TokenJwtWhereInput[]
    OR?: TokenJwtWhereInput[]
    NOT?: TokenJwtWhereInput | TokenJwtWhereInput[]
    id?: IntFilter<"TokenJwt"> | number
    tokenId?: IntFilter<"TokenJwt"> | number
    jti?: StringFilter<"TokenJwt"> | string
    createdAt?: DateTimeFilter<"TokenJwt"> | Date | string
    createdBy?: IntNullableFilter<"TokenJwt"> | number | null
    updatedAt?: DateTimeNullableFilter<"TokenJwt"> | Date | string | null
    updatedBy?: IntNullableFilter<"TokenJwt"> | number | null
    isDeleted?: BoolNullableFilter<"TokenJwt"> | boolean | null
    deletedAt?: DateTimeNullableFilter<"TokenJwt"> | Date | string | null
    deletedBy?: IntNullableFilter<"TokenJwt"> | number | null
    token?: XOR<TokenScalarRelationFilter, TokenWhereInput>
  }

  export type TokenJwtOrderByWithRelationInput = {
    id?: SortOrder
    tokenId?: SortOrder
    jti?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    isDeleted?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    token?: TokenOrderByWithRelationInput
  }

  export type TokenJwtWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TokenJwtWhereInput | TokenJwtWhereInput[]
    OR?: TokenJwtWhereInput[]
    NOT?: TokenJwtWhereInput | TokenJwtWhereInput[]
    tokenId?: IntFilter<"TokenJwt"> | number
    jti?: StringFilter<"TokenJwt"> | string
    createdAt?: DateTimeFilter<"TokenJwt"> | Date | string
    createdBy?: IntNullableFilter<"TokenJwt"> | number | null
    updatedAt?: DateTimeNullableFilter<"TokenJwt"> | Date | string | null
    updatedBy?: IntNullableFilter<"TokenJwt"> | number | null
    isDeleted?: BoolNullableFilter<"TokenJwt"> | boolean | null
    deletedAt?: DateTimeNullableFilter<"TokenJwt"> | Date | string | null
    deletedBy?: IntNullableFilter<"TokenJwt"> | number | null
    token?: XOR<TokenScalarRelationFilter, TokenWhereInput>
  }, "id">

  export type TokenJwtOrderByWithAggregationInput = {
    id?: SortOrder
    tokenId?: SortOrder
    jti?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    isDeleted?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    _count?: TokenJwtCountOrderByAggregateInput
    _avg?: TokenJwtAvgOrderByAggregateInput
    _max?: TokenJwtMaxOrderByAggregateInput
    _min?: TokenJwtMinOrderByAggregateInput
    _sum?: TokenJwtSumOrderByAggregateInput
  }

  export type TokenJwtScalarWhereWithAggregatesInput = {
    AND?: TokenJwtScalarWhereWithAggregatesInput | TokenJwtScalarWhereWithAggregatesInput[]
    OR?: TokenJwtScalarWhereWithAggregatesInput[]
    NOT?: TokenJwtScalarWhereWithAggregatesInput | TokenJwtScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TokenJwt"> | number
    tokenId?: IntWithAggregatesFilter<"TokenJwt"> | number
    jti?: StringWithAggregatesFilter<"TokenJwt"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TokenJwt"> | Date | string
    createdBy?: IntNullableWithAggregatesFilter<"TokenJwt"> | number | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"TokenJwt"> | Date | string | null
    updatedBy?: IntNullableWithAggregatesFilter<"TokenJwt"> | number | null
    isDeleted?: BoolNullableWithAggregatesFilter<"TokenJwt"> | boolean | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"TokenJwt"> | Date | string | null
    deletedBy?: IntNullableWithAggregatesFilter<"TokenJwt"> | number | null
  }

  export type TokenFcmWhereInput = {
    AND?: TokenFcmWhereInput | TokenFcmWhereInput[]
    OR?: TokenFcmWhereInput[]
    NOT?: TokenFcmWhereInput | TokenFcmWhereInput[]
    id?: IntFilter<"TokenFcm"> | number
    tokenId?: IntFilter<"TokenFcm"> | number
    platform?: EnumPlatformFilter<"TokenFcm"> | $Enums.Platform
    createdAt?: DateTimeFilter<"TokenFcm"> | Date | string
    createdBy?: IntNullableFilter<"TokenFcm"> | number | null
    updatedAt?: DateTimeNullableFilter<"TokenFcm"> | Date | string | null
    updatedBy?: IntNullableFilter<"TokenFcm"> | number | null
    isDeleted?: BoolNullableFilter<"TokenFcm"> | boolean | null
    deletedAt?: DateTimeNullableFilter<"TokenFcm"> | Date | string | null
    deletedBy?: IntNullableFilter<"TokenFcm"> | number | null
    token?: XOR<TokenScalarRelationFilter, TokenWhereInput>
  }

  export type TokenFcmOrderByWithRelationInput = {
    id?: SortOrder
    tokenId?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    isDeleted?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    token?: TokenOrderByWithRelationInput
  }

  export type TokenFcmWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TokenFcmWhereInput | TokenFcmWhereInput[]
    OR?: TokenFcmWhereInput[]
    NOT?: TokenFcmWhereInput | TokenFcmWhereInput[]
    tokenId?: IntFilter<"TokenFcm"> | number
    platform?: EnumPlatformFilter<"TokenFcm"> | $Enums.Platform
    createdAt?: DateTimeFilter<"TokenFcm"> | Date | string
    createdBy?: IntNullableFilter<"TokenFcm"> | number | null
    updatedAt?: DateTimeNullableFilter<"TokenFcm"> | Date | string | null
    updatedBy?: IntNullableFilter<"TokenFcm"> | number | null
    isDeleted?: BoolNullableFilter<"TokenFcm"> | boolean | null
    deletedAt?: DateTimeNullableFilter<"TokenFcm"> | Date | string | null
    deletedBy?: IntNullableFilter<"TokenFcm"> | number | null
    token?: XOR<TokenScalarRelationFilter, TokenWhereInput>
  }, "id">

  export type TokenFcmOrderByWithAggregationInput = {
    id?: SortOrder
    tokenId?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    isDeleted?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    _count?: TokenFcmCountOrderByAggregateInput
    _avg?: TokenFcmAvgOrderByAggregateInput
    _max?: TokenFcmMaxOrderByAggregateInput
    _min?: TokenFcmMinOrderByAggregateInput
    _sum?: TokenFcmSumOrderByAggregateInput
  }

  export type TokenFcmScalarWhereWithAggregatesInput = {
    AND?: TokenFcmScalarWhereWithAggregatesInput | TokenFcmScalarWhereWithAggregatesInput[]
    OR?: TokenFcmScalarWhereWithAggregatesInput[]
    NOT?: TokenFcmScalarWhereWithAggregatesInput | TokenFcmScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TokenFcm"> | number
    tokenId?: IntWithAggregatesFilter<"TokenFcm"> | number
    platform?: EnumPlatformWithAggregatesFilter<"TokenFcm"> | $Enums.Platform
    createdAt?: DateTimeWithAggregatesFilter<"TokenFcm"> | Date | string
    createdBy?: IntNullableWithAggregatesFilter<"TokenFcm"> | number | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"TokenFcm"> | Date | string | null
    updatedBy?: IntNullableWithAggregatesFilter<"TokenFcm"> | number | null
    isDeleted?: BoolNullableWithAggregatesFilter<"TokenFcm"> | boolean | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"TokenFcm"> | Date | string | null
    deletedBy?: IntNullableWithAggregatesFilter<"TokenFcm"> | number | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    createdBy?: IntNullableFilter<"User"> | number | null
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    updatedBy?: IntNullableFilter<"User"> | number | null
    isDeleted?: BoolNullableFilter<"User"> | boolean | null
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    deletedBy?: IntNullableFilter<"User"> | number | null
    userRoles?: UserRoleListRelationFilter
    posts?: PostListRelationFilter
    notifications?: NotificationListRelationFilter
    notificationReads?: NotificationReadListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    isDeleted?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    userRoles?: UserRoleOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    notificationReads?: NotificationReadOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    createdBy?: IntNullableFilter<"User"> | number | null
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    updatedBy?: IntNullableFilter<"User"> | number | null
    isDeleted?: BoolNullableFilter<"User"> | boolean | null
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    deletedBy?: IntNullableFilter<"User"> | number | null
    userRoles?: UserRoleListRelationFilter
    posts?: PostListRelationFilter
    notifications?: NotificationListRelationFilter
    notificationReads?: NotificationReadListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    isDeleted?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    createdBy?: IntNullableWithAggregatesFilter<"User"> | number | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    updatedBy?: IntNullableWithAggregatesFilter<"User"> | number | null
    isDeleted?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    deletedBy?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type UserRoleWhereInput = {
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    id?: IntFilter<"UserRole"> | number
    userId?: IntFilter<"UserRole"> | number
    roleId?: IntFilter<"UserRole"> | number
    createdAt?: DateTimeFilter<"UserRole"> | Date | string
    createdBy?: IntNullableFilter<"UserRole"> | number | null
    updatedAt?: DateTimeNullableFilter<"UserRole"> | Date | string | null
    updatedBy?: IntNullableFilter<"UserRole"> | number | null
    isDeleted?: BoolNullableFilter<"UserRole"> | boolean | null
    deletedAt?: DateTimeNullableFilter<"UserRole"> | Date | string | null
    deletedBy?: IntNullableFilter<"UserRole"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type UserRoleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    isDeleted?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
  }

  export type UserRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_roleId?: UserRoleUserIdRoleIdCompoundUniqueInput
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    userId?: IntFilter<"UserRole"> | number
    roleId?: IntFilter<"UserRole"> | number
    createdAt?: DateTimeFilter<"UserRole"> | Date | string
    createdBy?: IntNullableFilter<"UserRole"> | number | null
    updatedAt?: DateTimeNullableFilter<"UserRole"> | Date | string | null
    updatedBy?: IntNullableFilter<"UserRole"> | number | null
    isDeleted?: BoolNullableFilter<"UserRole"> | boolean | null
    deletedAt?: DateTimeNullableFilter<"UserRole"> | Date | string | null
    deletedBy?: IntNullableFilter<"UserRole"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "id" | "userId_roleId">

  export type UserRoleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    isDeleted?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    _count?: UserRoleCountOrderByAggregateInput
    _avg?: UserRoleAvgOrderByAggregateInput
    _max?: UserRoleMaxOrderByAggregateInput
    _min?: UserRoleMinOrderByAggregateInput
    _sum?: UserRoleSumOrderByAggregateInput
  }

  export type UserRoleScalarWhereWithAggregatesInput = {
    AND?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    OR?: UserRoleScalarWhereWithAggregatesInput[]
    NOT?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserRole"> | number
    userId?: IntWithAggregatesFilter<"UserRole"> | number
    roleId?: IntWithAggregatesFilter<"UserRole"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserRole"> | Date | string
    createdBy?: IntNullableWithAggregatesFilter<"UserRole"> | number | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"UserRole"> | Date | string | null
    updatedBy?: IntNullableWithAggregatesFilter<"UserRole"> | number | null
    isDeleted?: BoolNullableWithAggregatesFilter<"UserRole"> | boolean | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"UserRole"> | Date | string | null
    deletedBy?: IntNullableWithAggregatesFilter<"UserRole"> | number | null
  }

  export type AdminCreateInput = {
    loginId: string
    password: string
    email: string
    name: string
    phone: string
    status?: $Enums.UserStatus
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    adminRoles?: AdminRoleCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    loginId: string
    password: string
    email: string
    name: string
    phone: string
    status?: $Enums.UserStatus
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    adminRoles?: AdminRoleUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminUpdateInput = {
    loginId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    adminRoles?: AdminRoleUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    loginId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    adminRoles?: AdminRoleUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminCreateManyInput = {
    id?: number
    loginId: string
    password: string
    email: string
    name: string
    phone: string
    status?: $Enums.UserStatus
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type AdminUpdateManyMutationInput = {
    loginId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    loginId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AdminRoleCreateInput = {
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    admin: AdminCreateNestedOneWithoutAdminRolesInput
    role: RoleCreateNestedOneWithoutAdminRolesInput
  }

  export type AdminRoleUncheckedCreateInput = {
    id?: number
    adminId: number
    roleId: number
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type AdminRoleUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    admin?: AdminUpdateOneRequiredWithoutAdminRolesNestedInput
    role?: RoleUpdateOneRequiredWithoutAdminRolesNestedInput
  }

  export type AdminRoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AdminRoleCreateManyInput = {
    id?: number
    adminId: number
    roleId: number
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type AdminRoleUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AdminRoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NotificationCreateInput = {
    title: string
    content: string
    type: $Enums.NotificationType
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    user?: UserCreateNestedOneWithoutNotificationsInput
    notificationReads?: NotificationReadCreateNestedManyWithoutNotificationInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    userId?: number | null
    title: string
    content: string
    type: $Enums.NotificationType
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    notificationReads?: NotificationReadUncheckedCreateNestedManyWithoutNotificationInput
  }

  export type NotificationUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneWithoutNotificationsNestedInput
    notificationReads?: NotificationReadUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    notificationReads?: NotificationReadUncheckedUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationCreateManyInput = {
    id?: number
    userId?: number | null
    title: string
    content: string
    type: $Enums.NotificationType
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type NotificationUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NotificationReadCreateInput = {
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    user: UserCreateNestedOneWithoutNotificationReadsInput
    notification: NotificationCreateNestedOneWithoutNotificationReadsInput
  }

  export type NotificationReadUncheckedCreateInput = {
    id?: number
    userId: number
    notificationId: number
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type NotificationReadUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutNotificationReadsNestedInput
    notification?: NotificationUpdateOneRequiredWithoutNotificationReadsNestedInput
  }

  export type NotificationReadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    notificationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NotificationReadCreateManyInput = {
    id?: number
    userId: number
    notificationId: number
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type NotificationReadUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NotificationReadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    notificationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PostCreateInput = {
    title: string
    content: string
    viewCount?: number
    status?: $Enums.PostStatus
    createdAt?: Date | string | null
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    user: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    userId: number
    viewCount?: number
    status?: $Enums.PostStatus
    createdAt?: Date | string | null
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type PostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    viewCount?: IntFieldUpdateOperationsInput | number
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PostCreateManyInput = {
    id?: number
    title: string
    content: string
    userId: number
    viewCount?: number
    status?: $Enums.PostStatus
    createdAt?: Date | string | null
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type PostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    viewCount?: IntFieldUpdateOperationsInput | number
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RoleCreateInput = {
    name: string
    owner?: $Enums.Owner
    description?: string | null
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    userRoles?: UserRoleCreateNestedManyWithoutRoleInput
    adminRoles?: AdminRoleCreateNestedManyWithoutRoleInput
    rolePermissions?: RolePermissionCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    name: string
    owner?: $Enums.Owner
    description?: string | null
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutRoleInput
    adminRoles?: AdminRoleUncheckedCreateNestedManyWithoutRoleInput
    rolePermissions?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    owner?: EnumOwnerFieldUpdateOperationsInput | $Enums.Owner
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    userRoles?: UserRoleUpdateManyWithoutRoleNestedInput
    adminRoles?: AdminRoleUpdateManyWithoutRoleNestedInput
    rolePermissions?: RolePermissionUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    owner?: EnumOwnerFieldUpdateOperationsInput | $Enums.Owner
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    userRoles?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput
    adminRoles?: AdminRoleUncheckedUpdateManyWithoutRoleNestedInput
    rolePermissions?: RolePermissionUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    name: string
    owner?: $Enums.Owner
    description?: string | null
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type RoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    owner?: EnumOwnerFieldUpdateOperationsInput | $Enums.Owner
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    owner?: EnumOwnerFieldUpdateOperationsInput | $Enums.Owner
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PermissionCreateInput = {
    scope: string
    action: string
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    rolePermissions?: RolePermissionCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUncheckedCreateInput = {
    id?: number
    scope: string
    action: string
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    rolePermissions?: RolePermissionUncheckedCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUpdateInput = {
    scope?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    rolePermissions?: RolePermissionUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    scope?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    rolePermissions?: RolePermissionUncheckedUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionCreateManyInput = {
    id?: number
    scope: string
    action: string
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type PermissionUpdateManyMutationInput = {
    scope?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PermissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    scope?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RolePermissionCreateInput = {
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    role: RoleCreateNestedOneWithoutRolePermissionsInput
    permission: PermissionCreateNestedOneWithoutRolePermissionsInput
  }

  export type RolePermissionUncheckedCreateInput = {
    id?: number
    roleId: number
    permissionId: number
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type RolePermissionUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    role?: RoleUpdateOneRequiredWithoutRolePermissionsNestedInput
    permission?: PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput
  }

  export type RolePermissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RolePermissionCreateManyInput = {
    id?: number
    roleId: number
    permissionId: number
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type RolePermissionUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RolePermissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TokenCreateInput = {
    tokenHash: string
    tokenType: $Enums.TokenType
    owner?: $Enums.Owner
    ownerId: number
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    tokenFcms?: TokenFcmCreateNestedManyWithoutTokenInput
    tokenJwts?: TokenJwtCreateNestedManyWithoutTokenInput
  }

  export type TokenUncheckedCreateInput = {
    id?: number
    tokenHash: string
    tokenType: $Enums.TokenType
    owner?: $Enums.Owner
    ownerId: number
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    tokenFcms?: TokenFcmUncheckedCreateNestedManyWithoutTokenInput
    tokenJwts?: TokenJwtUncheckedCreateNestedManyWithoutTokenInput
  }

  export type TokenUpdateInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    tokenType?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    owner?: EnumOwnerFieldUpdateOperationsInput | $Enums.Owner
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    tokenFcms?: TokenFcmUpdateManyWithoutTokenNestedInput
    tokenJwts?: TokenJwtUpdateManyWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenHash?: StringFieldUpdateOperationsInput | string
    tokenType?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    owner?: EnumOwnerFieldUpdateOperationsInput | $Enums.Owner
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    tokenFcms?: TokenFcmUncheckedUpdateManyWithoutTokenNestedInput
    tokenJwts?: TokenJwtUncheckedUpdateManyWithoutTokenNestedInput
  }

  export type TokenCreateManyInput = {
    id?: number
    tokenHash: string
    tokenType: $Enums.TokenType
    owner?: $Enums.Owner
    ownerId: number
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type TokenUpdateManyMutationInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    tokenType?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    owner?: EnumOwnerFieldUpdateOperationsInput | $Enums.Owner
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenHash?: StringFieldUpdateOperationsInput | string
    tokenType?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    owner?: EnumOwnerFieldUpdateOperationsInput | $Enums.Owner
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TokenJwtCreateInput = {
    jti: string
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    token: TokenCreateNestedOneWithoutTokenJwtsInput
  }

  export type TokenJwtUncheckedCreateInput = {
    id?: number
    tokenId: number
    jti: string
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type TokenJwtUpdateInput = {
    jti?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    token?: TokenUpdateOneRequiredWithoutTokenJwtsNestedInput
  }

  export type TokenJwtUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenId?: IntFieldUpdateOperationsInput | number
    jti?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TokenJwtCreateManyInput = {
    id?: number
    tokenId: number
    jti: string
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type TokenJwtUpdateManyMutationInput = {
    jti?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TokenJwtUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenId?: IntFieldUpdateOperationsInput | number
    jti?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TokenFcmCreateInput = {
    platform: $Enums.Platform
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    token: TokenCreateNestedOneWithoutTokenFcmsInput
  }

  export type TokenFcmUncheckedCreateInput = {
    id?: number
    tokenId: number
    platform: $Enums.Platform
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type TokenFcmUpdateInput = {
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    token?: TokenUpdateOneRequiredWithoutTokenFcmsNestedInput
  }

  export type TokenFcmUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenId?: IntFieldUpdateOperationsInput | number
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TokenFcmCreateManyInput = {
    id?: number
    tokenId: number
    platform: $Enums.Platform
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type TokenFcmUpdateManyMutationInput = {
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TokenFcmUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenId?: IntFieldUpdateOperationsInput | number
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCreateInput = {
    email: string
    password: string
    name: string
    phone: string
    status?: $Enums.UserStatus
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    userRoles?: UserRoleCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    notificationReads?: NotificationReadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name: string
    phone: string
    status?: $Enums.UserStatus
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    notificationReads?: NotificationReadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    userRoles?: UserRoleUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    notificationReads?: NotificationReadUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    userRoles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    notificationReads?: NotificationReadUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    name: string
    phone: string
    status?: $Enums.UserStatus
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserRoleCreateInput = {
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    user: UserCreateNestedOneWithoutUserRolesInput
    role: RoleCreateNestedOneWithoutUserRolesInput
  }

  export type UserRoleUncheckedCreateInput = {
    id?: number
    userId: number
    roleId: number
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type UserRoleUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutUserRolesNestedInput
    role?: RoleUpdateOneRequiredWithoutUserRolesNestedInput
  }

  export type UserRoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserRoleCreateManyInput = {
    id?: number
    userId: number
    roleId: number
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type UserRoleUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserRoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type AdminRoleListRelationFilter = {
    every?: AdminRoleWhereInput
    some?: AdminRoleWhereInput
    none?: AdminRoleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdminRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    loginId?: SortOrder
    password?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    loginId?: SortOrder
    password?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    loginId?: SortOrder
    password?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type AdminScalarRelationFilter = {
    is?: AdminWhereInput
    isNot?: AdminWhereInput
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type AdminRoleAdminIdRoleIdCompoundUniqueInput = {
    adminId: number
    roleId: number
  }

  export type AdminRoleCountOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type AdminRoleAvgOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    roleId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type AdminRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type AdminRoleMinOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type AdminRoleSumOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    roleId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type NotificationReadListRelationFilter = {
    every?: NotificationReadWhereInput
    some?: NotificationReadWhereInput
    none?: NotificationReadWhereInput
  }

  export type NotificationReadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type NotificationScalarRelationFilter = {
    is?: NotificationWhereInput
    isNot?: NotificationWhereInput
  }

  export type NotificationReadCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    notificationId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type NotificationReadAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    notificationId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type NotificationReadMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    notificationId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type NotificationReadMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    notificationId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type NotificationReadSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    notificationId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type EnumPostStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusFilter<$PrismaModel> | $Enums.PostStatus
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    viewCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    viewCount?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    viewCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    viewCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    viewCount?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type EnumPostStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusWithAggregatesFilter<$PrismaModel> | $Enums.PostStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostStatusFilter<$PrismaModel>
    _max?: NestedEnumPostStatusFilter<$PrismaModel>
  }

  export type EnumOwnerFilter<$PrismaModel = never> = {
    equals?: $Enums.Owner | EnumOwnerFieldRefInput<$PrismaModel>
    in?: $Enums.Owner[] | ListEnumOwnerFieldRefInput<$PrismaModel>
    notIn?: $Enums.Owner[] | ListEnumOwnerFieldRefInput<$PrismaModel>
    not?: NestedEnumOwnerFilter<$PrismaModel> | $Enums.Owner
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserRoleListRelationFilter = {
    every?: UserRoleWhereInput
    some?: UserRoleWhereInput
    none?: UserRoleWhereInput
  }

  export type RolePermissionListRelationFilter = {
    every?: RolePermissionWhereInput
    some?: RolePermissionWhereInput
    none?: RolePermissionWhereInput
  }

  export type UserRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RolePermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    owner?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    owner?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    owner?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type EnumOwnerWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Owner | EnumOwnerFieldRefInput<$PrismaModel>
    in?: $Enums.Owner[] | ListEnumOwnerFieldRefInput<$PrismaModel>
    notIn?: $Enums.Owner[] | ListEnumOwnerFieldRefInput<$PrismaModel>
    not?: NestedEnumOwnerWithAggregatesFilter<$PrismaModel> | $Enums.Owner
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOwnerFilter<$PrismaModel>
    _max?: NestedEnumOwnerFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PermissionScopeActionCompoundUniqueInput = {
    scope: string
    action: string
  }

  export type PermissionCountOrderByAggregateInput = {
    id?: SortOrder
    scope?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type PermissionAvgOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type PermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    scope?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type PermissionMinOrderByAggregateInput = {
    id?: SortOrder
    scope?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type PermissionSumOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type PermissionScalarRelationFilter = {
    is?: PermissionWhereInput
    isNot?: PermissionWhereInput
  }

  export type RolePermissionRoleIdPermissionIdCompoundUniqueInput = {
    roleId: number
    permissionId: number
  }

  export type RolePermissionCountOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type RolePermissionAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type RolePermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type RolePermissionMinOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type RolePermissionSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type EnumTokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeFilter<$PrismaModel> | $Enums.TokenType
  }

  export type TokenFcmListRelationFilter = {
    every?: TokenFcmWhereInput
    some?: TokenFcmWhereInput
    none?: TokenFcmWhereInput
  }

  export type TokenJwtListRelationFilter = {
    every?: TokenJwtWhereInput
    some?: TokenJwtWhereInput
    none?: TokenJwtWhereInput
  }

  export type TokenFcmOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TokenJwtOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    tokenType?: SortOrder
    owner?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type TokenAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    tokenType?: SortOrder
    owner?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    tokenType?: SortOrder
    owner?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type TokenSumOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type EnumTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel> | $Enums.TokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypeFilter<$PrismaModel>
    _max?: NestedEnumTokenTypeFilter<$PrismaModel>
  }

  export type TokenScalarRelationFilter = {
    is?: TokenWhereInput
    isNot?: TokenWhereInput
  }

  export type TokenJwtCountOrderByAggregateInput = {
    id?: SortOrder
    tokenId?: SortOrder
    jti?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type TokenJwtAvgOrderByAggregateInput = {
    id?: SortOrder
    tokenId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type TokenJwtMaxOrderByAggregateInput = {
    id?: SortOrder
    tokenId?: SortOrder
    jti?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type TokenJwtMinOrderByAggregateInput = {
    id?: SortOrder
    tokenId?: SortOrder
    jti?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type TokenJwtSumOrderByAggregateInput = {
    id?: SortOrder
    tokenId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type EnumPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformFilter<$PrismaModel> | $Enums.Platform
  }

  export type TokenFcmCountOrderByAggregateInput = {
    id?: SortOrder
    tokenId?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type TokenFcmAvgOrderByAggregateInput = {
    id?: SortOrder
    tokenId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type TokenFcmMaxOrderByAggregateInput = {
    id?: SortOrder
    tokenId?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type TokenFcmMinOrderByAggregateInput = {
    id?: SortOrder
    tokenId?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type TokenFcmSumOrderByAggregateInput = {
    id?: SortOrder
    tokenId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type EnumPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformWithAggregatesFilter<$PrismaModel> | $Enums.Platform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlatformFilter<$PrismaModel>
    _max?: NestedEnumPlatformFilter<$PrismaModel>
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type UserRoleUserIdRoleIdCompoundUniqueInput = {
    userId: number
    roleId: number
  }

  export type UserRoleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type UserRoleAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type UserRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type UserRoleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type UserRoleSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type AdminRoleCreateNestedManyWithoutAdminInput = {
    create?: XOR<AdminRoleCreateWithoutAdminInput, AdminRoleUncheckedCreateWithoutAdminInput> | AdminRoleCreateWithoutAdminInput[] | AdminRoleUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminRoleCreateOrConnectWithoutAdminInput | AdminRoleCreateOrConnectWithoutAdminInput[]
    createMany?: AdminRoleCreateManyAdminInputEnvelope
    connect?: AdminRoleWhereUniqueInput | AdminRoleWhereUniqueInput[]
  }

  export type AdminRoleUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<AdminRoleCreateWithoutAdminInput, AdminRoleUncheckedCreateWithoutAdminInput> | AdminRoleCreateWithoutAdminInput[] | AdminRoleUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminRoleCreateOrConnectWithoutAdminInput | AdminRoleCreateOrConnectWithoutAdminInput[]
    createMany?: AdminRoleCreateManyAdminInputEnvelope
    connect?: AdminRoleWhereUniqueInput | AdminRoleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type AdminRoleUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AdminRoleCreateWithoutAdminInput, AdminRoleUncheckedCreateWithoutAdminInput> | AdminRoleCreateWithoutAdminInput[] | AdminRoleUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminRoleCreateOrConnectWithoutAdminInput | AdminRoleCreateOrConnectWithoutAdminInput[]
    upsert?: AdminRoleUpsertWithWhereUniqueWithoutAdminInput | AdminRoleUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AdminRoleCreateManyAdminInputEnvelope
    set?: AdminRoleWhereUniqueInput | AdminRoleWhereUniqueInput[]
    disconnect?: AdminRoleWhereUniqueInput | AdminRoleWhereUniqueInput[]
    delete?: AdminRoleWhereUniqueInput | AdminRoleWhereUniqueInput[]
    connect?: AdminRoleWhereUniqueInput | AdminRoleWhereUniqueInput[]
    update?: AdminRoleUpdateWithWhereUniqueWithoutAdminInput | AdminRoleUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AdminRoleUpdateManyWithWhereWithoutAdminInput | AdminRoleUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AdminRoleScalarWhereInput | AdminRoleScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AdminRoleUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AdminRoleCreateWithoutAdminInput, AdminRoleUncheckedCreateWithoutAdminInput> | AdminRoleCreateWithoutAdminInput[] | AdminRoleUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminRoleCreateOrConnectWithoutAdminInput | AdminRoleCreateOrConnectWithoutAdminInput[]
    upsert?: AdminRoleUpsertWithWhereUniqueWithoutAdminInput | AdminRoleUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AdminRoleCreateManyAdminInputEnvelope
    set?: AdminRoleWhereUniqueInput | AdminRoleWhereUniqueInput[]
    disconnect?: AdminRoleWhereUniqueInput | AdminRoleWhereUniqueInput[]
    delete?: AdminRoleWhereUniqueInput | AdminRoleWhereUniqueInput[]
    connect?: AdminRoleWhereUniqueInput | AdminRoleWhereUniqueInput[]
    update?: AdminRoleUpdateWithWhereUniqueWithoutAdminInput | AdminRoleUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AdminRoleUpdateManyWithWhereWithoutAdminInput | AdminRoleUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AdminRoleScalarWhereInput | AdminRoleScalarWhereInput[]
  }

  export type AdminCreateNestedOneWithoutAdminRolesInput = {
    create?: XOR<AdminCreateWithoutAdminRolesInput, AdminUncheckedCreateWithoutAdminRolesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutAdminRolesInput
    connect?: AdminWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutAdminRolesInput = {
    create?: XOR<RoleCreateWithoutAdminRolesInput, RoleUncheckedCreateWithoutAdminRolesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutAdminRolesInput
    connect?: RoleWhereUniqueInput
  }

  export type AdminUpdateOneRequiredWithoutAdminRolesNestedInput = {
    create?: XOR<AdminCreateWithoutAdminRolesInput, AdminUncheckedCreateWithoutAdminRolesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutAdminRolesInput
    upsert?: AdminUpsertWithoutAdminRolesInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutAdminRolesInput, AdminUpdateWithoutAdminRolesInput>, AdminUncheckedUpdateWithoutAdminRolesInput>
  }

  export type RoleUpdateOneRequiredWithoutAdminRolesNestedInput = {
    create?: XOR<RoleCreateWithoutAdminRolesInput, RoleUncheckedCreateWithoutAdminRolesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutAdminRolesInput
    upsert?: RoleUpsertWithoutAdminRolesInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutAdminRolesInput, RoleUpdateWithoutAdminRolesInput>, RoleUncheckedUpdateWithoutAdminRolesInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type NotificationReadCreateNestedManyWithoutNotificationInput = {
    create?: XOR<NotificationReadCreateWithoutNotificationInput, NotificationReadUncheckedCreateWithoutNotificationInput> | NotificationReadCreateWithoutNotificationInput[] | NotificationReadUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: NotificationReadCreateOrConnectWithoutNotificationInput | NotificationReadCreateOrConnectWithoutNotificationInput[]
    createMany?: NotificationReadCreateManyNotificationInputEnvelope
    connect?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
  }

  export type NotificationReadUncheckedCreateNestedManyWithoutNotificationInput = {
    create?: XOR<NotificationReadCreateWithoutNotificationInput, NotificationReadUncheckedCreateWithoutNotificationInput> | NotificationReadCreateWithoutNotificationInput[] | NotificationReadUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: NotificationReadCreateOrConnectWithoutNotificationInput | NotificationReadCreateOrConnectWithoutNotificationInput[]
    createMany?: NotificationReadCreateManyNotificationInputEnvelope
    connect?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type UserUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type NotificationReadUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<NotificationReadCreateWithoutNotificationInput, NotificationReadUncheckedCreateWithoutNotificationInput> | NotificationReadCreateWithoutNotificationInput[] | NotificationReadUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: NotificationReadCreateOrConnectWithoutNotificationInput | NotificationReadCreateOrConnectWithoutNotificationInput[]
    upsert?: NotificationReadUpsertWithWhereUniqueWithoutNotificationInput | NotificationReadUpsertWithWhereUniqueWithoutNotificationInput[]
    createMany?: NotificationReadCreateManyNotificationInputEnvelope
    set?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    disconnect?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    delete?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    connect?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    update?: NotificationReadUpdateWithWhereUniqueWithoutNotificationInput | NotificationReadUpdateWithWhereUniqueWithoutNotificationInput[]
    updateMany?: NotificationReadUpdateManyWithWhereWithoutNotificationInput | NotificationReadUpdateManyWithWhereWithoutNotificationInput[]
    deleteMany?: NotificationReadScalarWhereInput | NotificationReadScalarWhereInput[]
  }

  export type NotificationReadUncheckedUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<NotificationReadCreateWithoutNotificationInput, NotificationReadUncheckedCreateWithoutNotificationInput> | NotificationReadCreateWithoutNotificationInput[] | NotificationReadUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: NotificationReadCreateOrConnectWithoutNotificationInput | NotificationReadCreateOrConnectWithoutNotificationInput[]
    upsert?: NotificationReadUpsertWithWhereUniqueWithoutNotificationInput | NotificationReadUpsertWithWhereUniqueWithoutNotificationInput[]
    createMany?: NotificationReadCreateManyNotificationInputEnvelope
    set?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    disconnect?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    delete?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    connect?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    update?: NotificationReadUpdateWithWhereUniqueWithoutNotificationInput | NotificationReadUpdateWithWhereUniqueWithoutNotificationInput[]
    updateMany?: NotificationReadUpdateManyWithWhereWithoutNotificationInput | NotificationReadUpdateManyWithWhereWithoutNotificationInput[]
    deleteMany?: NotificationReadScalarWhereInput | NotificationReadScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutNotificationReadsInput = {
    create?: XOR<UserCreateWithoutNotificationReadsInput, UserUncheckedCreateWithoutNotificationReadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationReadsInput
    connect?: UserWhereUniqueInput
  }

  export type NotificationCreateNestedOneWithoutNotificationReadsInput = {
    create?: XOR<NotificationCreateWithoutNotificationReadsInput, NotificationUncheckedCreateWithoutNotificationReadsInput>
    connectOrCreate?: NotificationCreateOrConnectWithoutNotificationReadsInput
    connect?: NotificationWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationReadsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationReadsInput, UserUncheckedCreateWithoutNotificationReadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationReadsInput
    upsert?: UserUpsertWithoutNotificationReadsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationReadsInput, UserUpdateWithoutNotificationReadsInput>, UserUncheckedUpdateWithoutNotificationReadsInput>
  }

  export type NotificationUpdateOneRequiredWithoutNotificationReadsNestedInput = {
    create?: XOR<NotificationCreateWithoutNotificationReadsInput, NotificationUncheckedCreateWithoutNotificationReadsInput>
    connectOrCreate?: NotificationCreateOrConnectWithoutNotificationReadsInput
    upsert?: NotificationUpsertWithoutNotificationReadsInput
    connect?: NotificationWhereUniqueInput
    update?: XOR<XOR<NotificationUpdateToOneWithWhereWithoutNotificationReadsInput, NotificationUpdateWithoutNotificationReadsInput>, NotificationUncheckedUpdateWithoutNotificationReadsInput>
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPostStatusFieldUpdateOperationsInput = {
    set?: $Enums.PostStatus
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserRoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type AdminRoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<AdminRoleCreateWithoutRoleInput, AdminRoleUncheckedCreateWithoutRoleInput> | AdminRoleCreateWithoutRoleInput[] | AdminRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: AdminRoleCreateOrConnectWithoutRoleInput | AdminRoleCreateOrConnectWithoutRoleInput[]
    createMany?: AdminRoleCreateManyRoleInputEnvelope
    connect?: AdminRoleWhereUniqueInput | AdminRoleWhereUniqueInput[]
  }

  export type RolePermissionCreateNestedManyWithoutRoleInput = {
    create?: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput> | RolePermissionCreateWithoutRoleInput[] | RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRoleInput | RolePermissionCreateOrConnectWithoutRoleInput[]
    createMany?: RolePermissionCreateManyRoleInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type AdminRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<AdminRoleCreateWithoutRoleInput, AdminRoleUncheckedCreateWithoutRoleInput> | AdminRoleCreateWithoutRoleInput[] | AdminRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: AdminRoleCreateOrConnectWithoutRoleInput | AdminRoleCreateOrConnectWithoutRoleInput[]
    createMany?: AdminRoleCreateManyRoleInputEnvelope
    connect?: AdminRoleWhereUniqueInput | AdminRoleWhereUniqueInput[]
  }

  export type RolePermissionUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput> | RolePermissionCreateWithoutRoleInput[] | RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRoleInput | RolePermissionCreateOrConnectWithoutRoleInput[]
    createMany?: RolePermissionCreateManyRoleInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type EnumOwnerFieldUpdateOperationsInput = {
    set?: $Enums.Owner
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserRoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type AdminRoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<AdminRoleCreateWithoutRoleInput, AdminRoleUncheckedCreateWithoutRoleInput> | AdminRoleCreateWithoutRoleInput[] | AdminRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: AdminRoleCreateOrConnectWithoutRoleInput | AdminRoleCreateOrConnectWithoutRoleInput[]
    upsert?: AdminRoleUpsertWithWhereUniqueWithoutRoleInput | AdminRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: AdminRoleCreateManyRoleInputEnvelope
    set?: AdminRoleWhereUniqueInput | AdminRoleWhereUniqueInput[]
    disconnect?: AdminRoleWhereUniqueInput | AdminRoleWhereUniqueInput[]
    delete?: AdminRoleWhereUniqueInput | AdminRoleWhereUniqueInput[]
    connect?: AdminRoleWhereUniqueInput | AdminRoleWhereUniqueInput[]
    update?: AdminRoleUpdateWithWhereUniqueWithoutRoleInput | AdminRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: AdminRoleUpdateManyWithWhereWithoutRoleInput | AdminRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: AdminRoleScalarWhereInput | AdminRoleScalarWhereInput[]
  }

  export type RolePermissionUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput> | RolePermissionCreateWithoutRoleInput[] | RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRoleInput | RolePermissionCreateOrConnectWithoutRoleInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutRoleInput | RolePermissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RolePermissionCreateManyRoleInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutRoleInput | RolePermissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutRoleInput | RolePermissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type AdminRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<AdminRoleCreateWithoutRoleInput, AdminRoleUncheckedCreateWithoutRoleInput> | AdminRoleCreateWithoutRoleInput[] | AdminRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: AdminRoleCreateOrConnectWithoutRoleInput | AdminRoleCreateOrConnectWithoutRoleInput[]
    upsert?: AdminRoleUpsertWithWhereUniqueWithoutRoleInput | AdminRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: AdminRoleCreateManyRoleInputEnvelope
    set?: AdminRoleWhereUniqueInput | AdminRoleWhereUniqueInput[]
    disconnect?: AdminRoleWhereUniqueInput | AdminRoleWhereUniqueInput[]
    delete?: AdminRoleWhereUniqueInput | AdminRoleWhereUniqueInput[]
    connect?: AdminRoleWhereUniqueInput | AdminRoleWhereUniqueInput[]
    update?: AdminRoleUpdateWithWhereUniqueWithoutRoleInput | AdminRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: AdminRoleUpdateManyWithWhereWithoutRoleInput | AdminRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: AdminRoleScalarWhereInput | AdminRoleScalarWhereInput[]
  }

  export type RolePermissionUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput> | RolePermissionCreateWithoutRoleInput[] | RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRoleInput | RolePermissionCreateOrConnectWithoutRoleInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutRoleInput | RolePermissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RolePermissionCreateManyRoleInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutRoleInput | RolePermissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutRoleInput | RolePermissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type RolePermissionCreateNestedManyWithoutPermissionInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput> | RolePermissionCreateWithoutPermissionInput[] | RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionInput | RolePermissionCreateOrConnectWithoutPermissionInput[]
    createMany?: RolePermissionCreateManyPermissionInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type RolePermissionUncheckedCreateNestedManyWithoutPermissionInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput> | RolePermissionCreateWithoutPermissionInput[] | RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionInput | RolePermissionCreateOrConnectWithoutPermissionInput[]
    createMany?: RolePermissionCreateManyPermissionInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type RolePermissionUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput> | RolePermissionCreateWithoutPermissionInput[] | RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionInput | RolePermissionCreateOrConnectWithoutPermissionInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutPermissionInput | RolePermissionUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: RolePermissionCreateManyPermissionInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutPermissionInput | RolePermissionUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutPermissionInput | RolePermissionUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type RolePermissionUncheckedUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput> | RolePermissionCreateWithoutPermissionInput[] | RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionInput | RolePermissionCreateOrConnectWithoutPermissionInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutPermissionInput | RolePermissionUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: RolePermissionCreateManyPermissionInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutPermissionInput | RolePermissionUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutPermissionInput | RolePermissionUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutRolePermissionsInput = {
    create?: XOR<RoleCreateWithoutRolePermissionsInput, RoleUncheckedCreateWithoutRolePermissionsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRolePermissionsInput
    connect?: RoleWhereUniqueInput
  }

  export type PermissionCreateNestedOneWithoutRolePermissionsInput = {
    create?: XOR<PermissionCreateWithoutRolePermissionsInput, PermissionUncheckedCreateWithoutRolePermissionsInput>
    connectOrCreate?: PermissionCreateOrConnectWithoutRolePermissionsInput
    connect?: PermissionWhereUniqueInput
  }

  export type RoleUpdateOneRequiredWithoutRolePermissionsNestedInput = {
    create?: XOR<RoleCreateWithoutRolePermissionsInput, RoleUncheckedCreateWithoutRolePermissionsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRolePermissionsInput
    upsert?: RoleUpsertWithoutRolePermissionsInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutRolePermissionsInput, RoleUpdateWithoutRolePermissionsInput>, RoleUncheckedUpdateWithoutRolePermissionsInput>
  }

  export type PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput = {
    create?: XOR<PermissionCreateWithoutRolePermissionsInput, PermissionUncheckedCreateWithoutRolePermissionsInput>
    connectOrCreate?: PermissionCreateOrConnectWithoutRolePermissionsInput
    upsert?: PermissionUpsertWithoutRolePermissionsInput
    connect?: PermissionWhereUniqueInput
    update?: XOR<XOR<PermissionUpdateToOneWithWhereWithoutRolePermissionsInput, PermissionUpdateWithoutRolePermissionsInput>, PermissionUncheckedUpdateWithoutRolePermissionsInput>
  }

  export type TokenFcmCreateNestedManyWithoutTokenInput = {
    create?: XOR<TokenFcmCreateWithoutTokenInput, TokenFcmUncheckedCreateWithoutTokenInput> | TokenFcmCreateWithoutTokenInput[] | TokenFcmUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: TokenFcmCreateOrConnectWithoutTokenInput | TokenFcmCreateOrConnectWithoutTokenInput[]
    createMany?: TokenFcmCreateManyTokenInputEnvelope
    connect?: TokenFcmWhereUniqueInput | TokenFcmWhereUniqueInput[]
  }

  export type TokenJwtCreateNestedManyWithoutTokenInput = {
    create?: XOR<TokenJwtCreateWithoutTokenInput, TokenJwtUncheckedCreateWithoutTokenInput> | TokenJwtCreateWithoutTokenInput[] | TokenJwtUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: TokenJwtCreateOrConnectWithoutTokenInput | TokenJwtCreateOrConnectWithoutTokenInput[]
    createMany?: TokenJwtCreateManyTokenInputEnvelope
    connect?: TokenJwtWhereUniqueInput | TokenJwtWhereUniqueInput[]
  }

  export type TokenFcmUncheckedCreateNestedManyWithoutTokenInput = {
    create?: XOR<TokenFcmCreateWithoutTokenInput, TokenFcmUncheckedCreateWithoutTokenInput> | TokenFcmCreateWithoutTokenInput[] | TokenFcmUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: TokenFcmCreateOrConnectWithoutTokenInput | TokenFcmCreateOrConnectWithoutTokenInput[]
    createMany?: TokenFcmCreateManyTokenInputEnvelope
    connect?: TokenFcmWhereUniqueInput | TokenFcmWhereUniqueInput[]
  }

  export type TokenJwtUncheckedCreateNestedManyWithoutTokenInput = {
    create?: XOR<TokenJwtCreateWithoutTokenInput, TokenJwtUncheckedCreateWithoutTokenInput> | TokenJwtCreateWithoutTokenInput[] | TokenJwtUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: TokenJwtCreateOrConnectWithoutTokenInput | TokenJwtCreateOrConnectWithoutTokenInput[]
    createMany?: TokenJwtCreateManyTokenInputEnvelope
    connect?: TokenJwtWhereUniqueInput | TokenJwtWhereUniqueInput[]
  }

  export type EnumTokenTypeFieldUpdateOperationsInput = {
    set?: $Enums.TokenType
  }

  export type TokenFcmUpdateManyWithoutTokenNestedInput = {
    create?: XOR<TokenFcmCreateWithoutTokenInput, TokenFcmUncheckedCreateWithoutTokenInput> | TokenFcmCreateWithoutTokenInput[] | TokenFcmUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: TokenFcmCreateOrConnectWithoutTokenInput | TokenFcmCreateOrConnectWithoutTokenInput[]
    upsert?: TokenFcmUpsertWithWhereUniqueWithoutTokenInput | TokenFcmUpsertWithWhereUniqueWithoutTokenInput[]
    createMany?: TokenFcmCreateManyTokenInputEnvelope
    set?: TokenFcmWhereUniqueInput | TokenFcmWhereUniqueInput[]
    disconnect?: TokenFcmWhereUniqueInput | TokenFcmWhereUniqueInput[]
    delete?: TokenFcmWhereUniqueInput | TokenFcmWhereUniqueInput[]
    connect?: TokenFcmWhereUniqueInput | TokenFcmWhereUniqueInput[]
    update?: TokenFcmUpdateWithWhereUniqueWithoutTokenInput | TokenFcmUpdateWithWhereUniqueWithoutTokenInput[]
    updateMany?: TokenFcmUpdateManyWithWhereWithoutTokenInput | TokenFcmUpdateManyWithWhereWithoutTokenInput[]
    deleteMany?: TokenFcmScalarWhereInput | TokenFcmScalarWhereInput[]
  }

  export type TokenJwtUpdateManyWithoutTokenNestedInput = {
    create?: XOR<TokenJwtCreateWithoutTokenInput, TokenJwtUncheckedCreateWithoutTokenInput> | TokenJwtCreateWithoutTokenInput[] | TokenJwtUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: TokenJwtCreateOrConnectWithoutTokenInput | TokenJwtCreateOrConnectWithoutTokenInput[]
    upsert?: TokenJwtUpsertWithWhereUniqueWithoutTokenInput | TokenJwtUpsertWithWhereUniqueWithoutTokenInput[]
    createMany?: TokenJwtCreateManyTokenInputEnvelope
    set?: TokenJwtWhereUniqueInput | TokenJwtWhereUniqueInput[]
    disconnect?: TokenJwtWhereUniqueInput | TokenJwtWhereUniqueInput[]
    delete?: TokenJwtWhereUniqueInput | TokenJwtWhereUniqueInput[]
    connect?: TokenJwtWhereUniqueInput | TokenJwtWhereUniqueInput[]
    update?: TokenJwtUpdateWithWhereUniqueWithoutTokenInput | TokenJwtUpdateWithWhereUniqueWithoutTokenInput[]
    updateMany?: TokenJwtUpdateManyWithWhereWithoutTokenInput | TokenJwtUpdateManyWithWhereWithoutTokenInput[]
    deleteMany?: TokenJwtScalarWhereInput | TokenJwtScalarWhereInput[]
  }

  export type TokenFcmUncheckedUpdateManyWithoutTokenNestedInput = {
    create?: XOR<TokenFcmCreateWithoutTokenInput, TokenFcmUncheckedCreateWithoutTokenInput> | TokenFcmCreateWithoutTokenInput[] | TokenFcmUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: TokenFcmCreateOrConnectWithoutTokenInput | TokenFcmCreateOrConnectWithoutTokenInput[]
    upsert?: TokenFcmUpsertWithWhereUniqueWithoutTokenInput | TokenFcmUpsertWithWhereUniqueWithoutTokenInput[]
    createMany?: TokenFcmCreateManyTokenInputEnvelope
    set?: TokenFcmWhereUniqueInput | TokenFcmWhereUniqueInput[]
    disconnect?: TokenFcmWhereUniqueInput | TokenFcmWhereUniqueInput[]
    delete?: TokenFcmWhereUniqueInput | TokenFcmWhereUniqueInput[]
    connect?: TokenFcmWhereUniqueInput | TokenFcmWhereUniqueInput[]
    update?: TokenFcmUpdateWithWhereUniqueWithoutTokenInput | TokenFcmUpdateWithWhereUniqueWithoutTokenInput[]
    updateMany?: TokenFcmUpdateManyWithWhereWithoutTokenInput | TokenFcmUpdateManyWithWhereWithoutTokenInput[]
    deleteMany?: TokenFcmScalarWhereInput | TokenFcmScalarWhereInput[]
  }

  export type TokenJwtUncheckedUpdateManyWithoutTokenNestedInput = {
    create?: XOR<TokenJwtCreateWithoutTokenInput, TokenJwtUncheckedCreateWithoutTokenInput> | TokenJwtCreateWithoutTokenInput[] | TokenJwtUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: TokenJwtCreateOrConnectWithoutTokenInput | TokenJwtCreateOrConnectWithoutTokenInput[]
    upsert?: TokenJwtUpsertWithWhereUniqueWithoutTokenInput | TokenJwtUpsertWithWhereUniqueWithoutTokenInput[]
    createMany?: TokenJwtCreateManyTokenInputEnvelope
    set?: TokenJwtWhereUniqueInput | TokenJwtWhereUniqueInput[]
    disconnect?: TokenJwtWhereUniqueInput | TokenJwtWhereUniqueInput[]
    delete?: TokenJwtWhereUniqueInput | TokenJwtWhereUniqueInput[]
    connect?: TokenJwtWhereUniqueInput | TokenJwtWhereUniqueInput[]
    update?: TokenJwtUpdateWithWhereUniqueWithoutTokenInput | TokenJwtUpdateWithWhereUniqueWithoutTokenInput[]
    updateMany?: TokenJwtUpdateManyWithWhereWithoutTokenInput | TokenJwtUpdateManyWithWhereWithoutTokenInput[]
    deleteMany?: TokenJwtScalarWhereInput | TokenJwtScalarWhereInput[]
  }

  export type TokenCreateNestedOneWithoutTokenJwtsInput = {
    create?: XOR<TokenCreateWithoutTokenJwtsInput, TokenUncheckedCreateWithoutTokenJwtsInput>
    connectOrCreate?: TokenCreateOrConnectWithoutTokenJwtsInput
    connect?: TokenWhereUniqueInput
  }

  export type TokenUpdateOneRequiredWithoutTokenJwtsNestedInput = {
    create?: XOR<TokenCreateWithoutTokenJwtsInput, TokenUncheckedCreateWithoutTokenJwtsInput>
    connectOrCreate?: TokenCreateOrConnectWithoutTokenJwtsInput
    upsert?: TokenUpsertWithoutTokenJwtsInput
    connect?: TokenWhereUniqueInput
    update?: XOR<XOR<TokenUpdateToOneWithWhereWithoutTokenJwtsInput, TokenUpdateWithoutTokenJwtsInput>, TokenUncheckedUpdateWithoutTokenJwtsInput>
  }

  export type TokenCreateNestedOneWithoutTokenFcmsInput = {
    create?: XOR<TokenCreateWithoutTokenFcmsInput, TokenUncheckedCreateWithoutTokenFcmsInput>
    connectOrCreate?: TokenCreateOrConnectWithoutTokenFcmsInput
    connect?: TokenWhereUniqueInput
  }

  export type EnumPlatformFieldUpdateOperationsInput = {
    set?: $Enums.Platform
  }

  export type TokenUpdateOneRequiredWithoutTokenFcmsNestedInput = {
    create?: XOR<TokenCreateWithoutTokenFcmsInput, TokenUncheckedCreateWithoutTokenFcmsInput>
    connectOrCreate?: TokenCreateOrConnectWithoutTokenFcmsInput
    upsert?: TokenUpsertWithoutTokenFcmsInput
    connect?: TokenWhereUniqueInput
    update?: XOR<XOR<TokenUpdateToOneWithWhereWithoutTokenFcmsInput, TokenUpdateWithoutTokenFcmsInput>, TokenUncheckedUpdateWithoutTokenFcmsInput>
  }

  export type UserRoleCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NotificationReadCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationReadCreateWithoutUserInput, NotificationReadUncheckedCreateWithoutUserInput> | NotificationReadCreateWithoutUserInput[] | NotificationReadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationReadCreateOrConnectWithoutUserInput | NotificationReadCreateOrConnectWithoutUserInput[]
    createMany?: NotificationReadCreateManyUserInputEnvelope
    connect?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NotificationReadUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationReadCreateWithoutUserInput, NotificationReadUncheckedCreateWithoutUserInput> | NotificationReadCreateWithoutUserInput[] | NotificationReadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationReadCreateOrConnectWithoutUserInput | NotificationReadCreateOrConnectWithoutUserInput[]
    createMany?: NotificationReadCreateManyUserInputEnvelope
    connect?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
  }

  export type UserRoleUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type PostUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type NotificationReadUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationReadCreateWithoutUserInput, NotificationReadUncheckedCreateWithoutUserInput> | NotificationReadCreateWithoutUserInput[] | NotificationReadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationReadCreateOrConnectWithoutUserInput | NotificationReadCreateOrConnectWithoutUserInput[]
    upsert?: NotificationReadUpsertWithWhereUniqueWithoutUserInput | NotificationReadUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationReadCreateManyUserInputEnvelope
    set?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    disconnect?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    delete?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    connect?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    update?: NotificationReadUpdateWithWhereUniqueWithoutUserInput | NotificationReadUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationReadUpdateManyWithWhereWithoutUserInput | NotificationReadUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationReadScalarWhereInput | NotificationReadScalarWhereInput[]
  }

  export type UserRoleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type NotificationReadUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationReadCreateWithoutUserInput, NotificationReadUncheckedCreateWithoutUserInput> | NotificationReadCreateWithoutUserInput[] | NotificationReadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationReadCreateOrConnectWithoutUserInput | NotificationReadCreateOrConnectWithoutUserInput[]
    upsert?: NotificationReadUpsertWithWhereUniqueWithoutUserInput | NotificationReadUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationReadCreateManyUserInputEnvelope
    set?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    disconnect?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    delete?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    connect?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    update?: NotificationReadUpdateWithWhereUniqueWithoutUserInput | NotificationReadUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationReadUpdateManyWithWhereWithoutUserInput | NotificationReadUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationReadScalarWhereInput | NotificationReadScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserRolesInput = {
    create?: XOR<UserCreateWithoutUserRolesInput, UserUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserRolesInput
    connect?: UserWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutUserRolesInput = {
    create?: XOR<RoleCreateWithoutUserRolesInput, RoleUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserRolesInput
    connect?: RoleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserRolesNestedInput = {
    create?: XOR<UserCreateWithoutUserRolesInput, UserUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserRolesInput
    upsert?: UserUpsertWithoutUserRolesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserRolesInput, UserUpdateWithoutUserRolesInput>, UserUncheckedUpdateWithoutUserRolesInput>
  }

  export type RoleUpdateOneRequiredWithoutUserRolesNestedInput = {
    create?: XOR<RoleCreateWithoutUserRolesInput, RoleUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserRolesInput
    upsert?: RoleUpsertWithoutUserRolesInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUserRolesInput, RoleUpdateWithoutUserRolesInput>, RoleUncheckedUpdateWithoutUserRolesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type NestedEnumPostStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusFilter<$PrismaModel> | $Enums.PostStatus
  }

  export type NestedEnumPostStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusWithAggregatesFilter<$PrismaModel> | $Enums.PostStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostStatusFilter<$PrismaModel>
    _max?: NestedEnumPostStatusFilter<$PrismaModel>
  }

  export type NestedEnumOwnerFilter<$PrismaModel = never> = {
    equals?: $Enums.Owner | EnumOwnerFieldRefInput<$PrismaModel>
    in?: $Enums.Owner[] | ListEnumOwnerFieldRefInput<$PrismaModel>
    notIn?: $Enums.Owner[] | ListEnumOwnerFieldRefInput<$PrismaModel>
    not?: NestedEnumOwnerFilter<$PrismaModel> | $Enums.Owner
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumOwnerWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Owner | EnumOwnerFieldRefInput<$PrismaModel>
    in?: $Enums.Owner[] | ListEnumOwnerFieldRefInput<$PrismaModel>
    notIn?: $Enums.Owner[] | ListEnumOwnerFieldRefInput<$PrismaModel>
    not?: NestedEnumOwnerWithAggregatesFilter<$PrismaModel> | $Enums.Owner
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOwnerFilter<$PrismaModel>
    _max?: NestedEnumOwnerFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumTokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeFilter<$PrismaModel> | $Enums.TokenType
  }

  export type NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel> | $Enums.TokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypeFilter<$PrismaModel>
    _max?: NestedEnumTokenTypeFilter<$PrismaModel>
  }

  export type NestedEnumPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformFilter<$PrismaModel> | $Enums.Platform
  }

  export type NestedEnumPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformWithAggregatesFilter<$PrismaModel> | $Enums.Platform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlatformFilter<$PrismaModel>
    _max?: NestedEnumPlatformFilter<$PrismaModel>
  }

  export type AdminRoleCreateWithoutAdminInput = {
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    role: RoleCreateNestedOneWithoutAdminRolesInput
  }

  export type AdminRoleUncheckedCreateWithoutAdminInput = {
    id?: number
    roleId: number
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type AdminRoleCreateOrConnectWithoutAdminInput = {
    where: AdminRoleWhereUniqueInput
    create: XOR<AdminRoleCreateWithoutAdminInput, AdminRoleUncheckedCreateWithoutAdminInput>
  }

  export type AdminRoleCreateManyAdminInputEnvelope = {
    data: AdminRoleCreateManyAdminInput | AdminRoleCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type AdminRoleUpsertWithWhereUniqueWithoutAdminInput = {
    where: AdminRoleWhereUniqueInput
    update: XOR<AdminRoleUpdateWithoutAdminInput, AdminRoleUncheckedUpdateWithoutAdminInput>
    create: XOR<AdminRoleCreateWithoutAdminInput, AdminRoleUncheckedCreateWithoutAdminInput>
  }

  export type AdminRoleUpdateWithWhereUniqueWithoutAdminInput = {
    where: AdminRoleWhereUniqueInput
    data: XOR<AdminRoleUpdateWithoutAdminInput, AdminRoleUncheckedUpdateWithoutAdminInput>
  }

  export type AdminRoleUpdateManyWithWhereWithoutAdminInput = {
    where: AdminRoleScalarWhereInput
    data: XOR<AdminRoleUpdateManyMutationInput, AdminRoleUncheckedUpdateManyWithoutAdminInput>
  }

  export type AdminRoleScalarWhereInput = {
    AND?: AdminRoleScalarWhereInput | AdminRoleScalarWhereInput[]
    OR?: AdminRoleScalarWhereInput[]
    NOT?: AdminRoleScalarWhereInput | AdminRoleScalarWhereInput[]
    id?: IntFilter<"AdminRole"> | number
    adminId?: IntFilter<"AdminRole"> | number
    roleId?: IntFilter<"AdminRole"> | number
    createdAt?: DateTimeFilter<"AdminRole"> | Date | string
    createdBy?: IntNullableFilter<"AdminRole"> | number | null
    updatedAt?: DateTimeNullableFilter<"AdminRole"> | Date | string | null
    updatedBy?: IntNullableFilter<"AdminRole"> | number | null
    isDeleted?: BoolNullableFilter<"AdminRole"> | boolean | null
    deletedAt?: DateTimeNullableFilter<"AdminRole"> | Date | string | null
    deletedBy?: IntNullableFilter<"AdminRole"> | number | null
  }

  export type AdminCreateWithoutAdminRolesInput = {
    loginId: string
    password: string
    email: string
    name: string
    phone: string
    status?: $Enums.UserStatus
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type AdminUncheckedCreateWithoutAdminRolesInput = {
    id?: number
    loginId: string
    password: string
    email: string
    name: string
    phone: string
    status?: $Enums.UserStatus
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type AdminCreateOrConnectWithoutAdminRolesInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutAdminRolesInput, AdminUncheckedCreateWithoutAdminRolesInput>
  }

  export type RoleCreateWithoutAdminRolesInput = {
    name: string
    owner?: $Enums.Owner
    description?: string | null
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    userRoles?: UserRoleCreateNestedManyWithoutRoleInput
    rolePermissions?: RolePermissionCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutAdminRolesInput = {
    id?: number
    name: string
    owner?: $Enums.Owner
    description?: string | null
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutRoleInput
    rolePermissions?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutAdminRolesInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutAdminRolesInput, RoleUncheckedCreateWithoutAdminRolesInput>
  }

  export type AdminUpsertWithoutAdminRolesInput = {
    update: XOR<AdminUpdateWithoutAdminRolesInput, AdminUncheckedUpdateWithoutAdminRolesInput>
    create: XOR<AdminCreateWithoutAdminRolesInput, AdminUncheckedCreateWithoutAdminRolesInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutAdminRolesInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutAdminRolesInput, AdminUncheckedUpdateWithoutAdminRolesInput>
  }

  export type AdminUpdateWithoutAdminRolesInput = {
    loginId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AdminUncheckedUpdateWithoutAdminRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    loginId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RoleUpsertWithoutAdminRolesInput = {
    update: XOR<RoleUpdateWithoutAdminRolesInput, RoleUncheckedUpdateWithoutAdminRolesInput>
    create: XOR<RoleCreateWithoutAdminRolesInput, RoleUncheckedCreateWithoutAdminRolesInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutAdminRolesInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutAdminRolesInput, RoleUncheckedUpdateWithoutAdminRolesInput>
  }

  export type RoleUpdateWithoutAdminRolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    owner?: EnumOwnerFieldUpdateOperationsInput | $Enums.Owner
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    userRoles?: UserRoleUpdateManyWithoutRoleNestedInput
    rolePermissions?: RolePermissionUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutAdminRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    owner?: EnumOwnerFieldUpdateOperationsInput | $Enums.Owner
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    userRoles?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput
    rolePermissions?: RolePermissionUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    email: string
    password: string
    name: string
    phone: string
    status?: $Enums.UserStatus
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    userRoles?: UserRoleCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    notificationReads?: NotificationReadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: number
    email: string
    password: string
    name: string
    phone: string
    status?: $Enums.UserStatus
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    notificationReads?: NotificationReadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type NotificationReadCreateWithoutNotificationInput = {
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    user: UserCreateNestedOneWithoutNotificationReadsInput
  }

  export type NotificationReadUncheckedCreateWithoutNotificationInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type NotificationReadCreateOrConnectWithoutNotificationInput = {
    where: NotificationReadWhereUniqueInput
    create: XOR<NotificationReadCreateWithoutNotificationInput, NotificationReadUncheckedCreateWithoutNotificationInput>
  }

  export type NotificationReadCreateManyNotificationInputEnvelope = {
    data: NotificationReadCreateManyNotificationInput | NotificationReadCreateManyNotificationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    userRoles?: UserRoleUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    notificationReads?: NotificationReadUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    userRoles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    notificationReads?: NotificationReadUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NotificationReadUpsertWithWhereUniqueWithoutNotificationInput = {
    where: NotificationReadWhereUniqueInput
    update: XOR<NotificationReadUpdateWithoutNotificationInput, NotificationReadUncheckedUpdateWithoutNotificationInput>
    create: XOR<NotificationReadCreateWithoutNotificationInput, NotificationReadUncheckedCreateWithoutNotificationInput>
  }

  export type NotificationReadUpdateWithWhereUniqueWithoutNotificationInput = {
    where: NotificationReadWhereUniqueInput
    data: XOR<NotificationReadUpdateWithoutNotificationInput, NotificationReadUncheckedUpdateWithoutNotificationInput>
  }

  export type NotificationReadUpdateManyWithWhereWithoutNotificationInput = {
    where: NotificationReadScalarWhereInput
    data: XOR<NotificationReadUpdateManyMutationInput, NotificationReadUncheckedUpdateManyWithoutNotificationInput>
  }

  export type NotificationReadScalarWhereInput = {
    AND?: NotificationReadScalarWhereInput | NotificationReadScalarWhereInput[]
    OR?: NotificationReadScalarWhereInput[]
    NOT?: NotificationReadScalarWhereInput | NotificationReadScalarWhereInput[]
    id?: IntFilter<"NotificationRead"> | number
    userId?: IntFilter<"NotificationRead"> | number
    notificationId?: IntFilter<"NotificationRead"> | number
    createdAt?: DateTimeFilter<"NotificationRead"> | Date | string
    createdBy?: IntNullableFilter<"NotificationRead"> | number | null
    updatedAt?: DateTimeNullableFilter<"NotificationRead"> | Date | string | null
    updatedBy?: IntNullableFilter<"NotificationRead"> | number | null
    isDeleted?: BoolNullableFilter<"NotificationRead"> | boolean | null
    deletedAt?: DateTimeNullableFilter<"NotificationRead"> | Date | string | null
    deletedBy?: IntNullableFilter<"NotificationRead"> | number | null
  }

  export type UserCreateWithoutNotificationReadsInput = {
    email: string
    password: string
    name: string
    phone: string
    status?: $Enums.UserStatus
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    userRoles?: UserRoleCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationReadsInput = {
    id?: number
    email: string
    password: string
    name: string
    phone: string
    status?: $Enums.UserStatus
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationReadsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationReadsInput, UserUncheckedCreateWithoutNotificationReadsInput>
  }

  export type NotificationCreateWithoutNotificationReadsInput = {
    title: string
    content: string
    type: $Enums.NotificationType
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    user?: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutNotificationReadsInput = {
    id?: number
    userId?: number | null
    title: string
    content: string
    type: $Enums.NotificationType
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type NotificationCreateOrConnectWithoutNotificationReadsInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutNotificationReadsInput, NotificationUncheckedCreateWithoutNotificationReadsInput>
  }

  export type UserUpsertWithoutNotificationReadsInput = {
    update: XOR<UserUpdateWithoutNotificationReadsInput, UserUncheckedUpdateWithoutNotificationReadsInput>
    create: XOR<UserCreateWithoutNotificationReadsInput, UserUncheckedCreateWithoutNotificationReadsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationReadsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationReadsInput, UserUncheckedUpdateWithoutNotificationReadsInput>
  }

  export type UserUpdateWithoutNotificationReadsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    userRoles?: UserRoleUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationReadsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    userRoles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NotificationUpsertWithoutNotificationReadsInput = {
    update: XOR<NotificationUpdateWithoutNotificationReadsInput, NotificationUncheckedUpdateWithoutNotificationReadsInput>
    create: XOR<NotificationCreateWithoutNotificationReadsInput, NotificationUncheckedCreateWithoutNotificationReadsInput>
    where?: NotificationWhereInput
  }

  export type NotificationUpdateToOneWithWhereWithoutNotificationReadsInput = {
    where?: NotificationWhereInput
    data: XOR<NotificationUpdateWithoutNotificationReadsInput, NotificationUncheckedUpdateWithoutNotificationReadsInput>
  }

  export type NotificationUpdateWithoutNotificationReadsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutNotificationReadsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCreateWithoutPostsInput = {
    email: string
    password: string
    name: string
    phone: string
    status?: $Enums.UserStatus
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    userRoles?: UserRoleCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    notificationReads?: NotificationReadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number
    email: string
    password: string
    name: string
    phone: string
    status?: $Enums.UserStatus
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    notificationReads?: NotificationReadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    userRoles?: UserRoleUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    notificationReads?: NotificationReadUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    userRoles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    notificationReads?: NotificationReadUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserRoleCreateWithoutRoleInput = {
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    user: UserCreateNestedOneWithoutUserRolesInput
  }

  export type UserRoleUncheckedCreateWithoutRoleInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type UserRoleCreateOrConnectWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleCreateManyRoleInputEnvelope = {
    data: UserRoleCreateManyRoleInput | UserRoleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type AdminRoleCreateWithoutRoleInput = {
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    admin: AdminCreateNestedOneWithoutAdminRolesInput
  }

  export type AdminRoleUncheckedCreateWithoutRoleInput = {
    id?: number
    adminId: number
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type AdminRoleCreateOrConnectWithoutRoleInput = {
    where: AdminRoleWhereUniqueInput
    create: XOR<AdminRoleCreateWithoutRoleInput, AdminRoleUncheckedCreateWithoutRoleInput>
  }

  export type AdminRoleCreateManyRoleInputEnvelope = {
    data: AdminRoleCreateManyRoleInput | AdminRoleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type RolePermissionCreateWithoutRoleInput = {
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    permission: PermissionCreateNestedOneWithoutRolePermissionsInput
  }

  export type RolePermissionUncheckedCreateWithoutRoleInput = {
    id?: number
    permissionId: number
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type RolePermissionCreateOrConnectWithoutRoleInput = {
    where: RolePermissionWhereUniqueInput
    create: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput>
  }

  export type RolePermissionCreateManyRoleInputEnvelope = {
    data: RolePermissionCreateManyRoleInput | RolePermissionCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutRoleInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserRoleScalarWhereInput = {
    AND?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    OR?: UserRoleScalarWhereInput[]
    NOT?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    id?: IntFilter<"UserRole"> | number
    userId?: IntFilter<"UserRole"> | number
    roleId?: IntFilter<"UserRole"> | number
    createdAt?: DateTimeFilter<"UserRole"> | Date | string
    createdBy?: IntNullableFilter<"UserRole"> | number | null
    updatedAt?: DateTimeNullableFilter<"UserRole"> | Date | string | null
    updatedBy?: IntNullableFilter<"UserRole"> | number | null
    isDeleted?: BoolNullableFilter<"UserRole"> | boolean | null
    deletedAt?: DateTimeNullableFilter<"UserRole"> | Date | string | null
    deletedBy?: IntNullableFilter<"UserRole"> | number | null
  }

  export type AdminRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: AdminRoleWhereUniqueInput
    update: XOR<AdminRoleUpdateWithoutRoleInput, AdminRoleUncheckedUpdateWithoutRoleInput>
    create: XOR<AdminRoleCreateWithoutRoleInput, AdminRoleUncheckedCreateWithoutRoleInput>
  }

  export type AdminRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: AdminRoleWhereUniqueInput
    data: XOR<AdminRoleUpdateWithoutRoleInput, AdminRoleUncheckedUpdateWithoutRoleInput>
  }

  export type AdminRoleUpdateManyWithWhereWithoutRoleInput = {
    where: AdminRoleScalarWhereInput
    data: XOR<AdminRoleUpdateManyMutationInput, AdminRoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type RolePermissionUpsertWithWhereUniqueWithoutRoleInput = {
    where: RolePermissionWhereUniqueInput
    update: XOR<RolePermissionUpdateWithoutRoleInput, RolePermissionUncheckedUpdateWithoutRoleInput>
    create: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput>
  }

  export type RolePermissionUpdateWithWhereUniqueWithoutRoleInput = {
    where: RolePermissionWhereUniqueInput
    data: XOR<RolePermissionUpdateWithoutRoleInput, RolePermissionUncheckedUpdateWithoutRoleInput>
  }

  export type RolePermissionUpdateManyWithWhereWithoutRoleInput = {
    where: RolePermissionScalarWhereInput
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyWithoutRoleInput>
  }

  export type RolePermissionScalarWhereInput = {
    AND?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
    OR?: RolePermissionScalarWhereInput[]
    NOT?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
    id?: IntFilter<"RolePermission"> | number
    roleId?: IntFilter<"RolePermission"> | number
    permissionId?: IntFilter<"RolePermission"> | number
    createdAt?: DateTimeFilter<"RolePermission"> | Date | string
    createdBy?: IntFilter<"RolePermission"> | number
    updatedAt?: DateTimeNullableFilter<"RolePermission"> | Date | string | null
    updatedBy?: IntNullableFilter<"RolePermission"> | number | null
    isDeleted?: BoolNullableFilter<"RolePermission"> | boolean | null
    deletedAt?: DateTimeNullableFilter<"RolePermission"> | Date | string | null
    deletedBy?: IntNullableFilter<"RolePermission"> | number | null
  }

  export type RolePermissionCreateWithoutPermissionInput = {
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    role: RoleCreateNestedOneWithoutRolePermissionsInput
  }

  export type RolePermissionUncheckedCreateWithoutPermissionInput = {
    id?: number
    roleId: number
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type RolePermissionCreateOrConnectWithoutPermissionInput = {
    where: RolePermissionWhereUniqueInput
    create: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput>
  }

  export type RolePermissionCreateManyPermissionInputEnvelope = {
    data: RolePermissionCreateManyPermissionInput | RolePermissionCreateManyPermissionInput[]
    skipDuplicates?: boolean
  }

  export type RolePermissionUpsertWithWhereUniqueWithoutPermissionInput = {
    where: RolePermissionWhereUniqueInput
    update: XOR<RolePermissionUpdateWithoutPermissionInput, RolePermissionUncheckedUpdateWithoutPermissionInput>
    create: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput>
  }

  export type RolePermissionUpdateWithWhereUniqueWithoutPermissionInput = {
    where: RolePermissionWhereUniqueInput
    data: XOR<RolePermissionUpdateWithoutPermissionInput, RolePermissionUncheckedUpdateWithoutPermissionInput>
  }

  export type RolePermissionUpdateManyWithWhereWithoutPermissionInput = {
    where: RolePermissionScalarWhereInput
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyWithoutPermissionInput>
  }

  export type RoleCreateWithoutRolePermissionsInput = {
    name: string
    owner?: $Enums.Owner
    description?: string | null
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    userRoles?: UserRoleCreateNestedManyWithoutRoleInput
    adminRoles?: AdminRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutRolePermissionsInput = {
    id?: number
    name: string
    owner?: $Enums.Owner
    description?: string | null
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutRoleInput
    adminRoles?: AdminRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutRolePermissionsInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutRolePermissionsInput, RoleUncheckedCreateWithoutRolePermissionsInput>
  }

  export type PermissionCreateWithoutRolePermissionsInput = {
    scope: string
    action: string
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type PermissionUncheckedCreateWithoutRolePermissionsInput = {
    id?: number
    scope: string
    action: string
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type PermissionCreateOrConnectWithoutRolePermissionsInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutRolePermissionsInput, PermissionUncheckedCreateWithoutRolePermissionsInput>
  }

  export type RoleUpsertWithoutRolePermissionsInput = {
    update: XOR<RoleUpdateWithoutRolePermissionsInput, RoleUncheckedUpdateWithoutRolePermissionsInput>
    create: XOR<RoleCreateWithoutRolePermissionsInput, RoleUncheckedCreateWithoutRolePermissionsInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutRolePermissionsInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutRolePermissionsInput, RoleUncheckedUpdateWithoutRolePermissionsInput>
  }

  export type RoleUpdateWithoutRolePermissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    owner?: EnumOwnerFieldUpdateOperationsInput | $Enums.Owner
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    userRoles?: UserRoleUpdateManyWithoutRoleNestedInput
    adminRoles?: AdminRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutRolePermissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    owner?: EnumOwnerFieldUpdateOperationsInput | $Enums.Owner
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    userRoles?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput
    adminRoles?: AdminRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type PermissionUpsertWithoutRolePermissionsInput = {
    update: XOR<PermissionUpdateWithoutRolePermissionsInput, PermissionUncheckedUpdateWithoutRolePermissionsInput>
    create: XOR<PermissionCreateWithoutRolePermissionsInput, PermissionUncheckedCreateWithoutRolePermissionsInput>
    where?: PermissionWhereInput
  }

  export type PermissionUpdateToOneWithWhereWithoutRolePermissionsInput = {
    where?: PermissionWhereInput
    data: XOR<PermissionUpdateWithoutRolePermissionsInput, PermissionUncheckedUpdateWithoutRolePermissionsInput>
  }

  export type PermissionUpdateWithoutRolePermissionsInput = {
    scope?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PermissionUncheckedUpdateWithoutRolePermissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    scope?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TokenFcmCreateWithoutTokenInput = {
    platform: $Enums.Platform
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type TokenFcmUncheckedCreateWithoutTokenInput = {
    id?: number
    platform: $Enums.Platform
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type TokenFcmCreateOrConnectWithoutTokenInput = {
    where: TokenFcmWhereUniqueInput
    create: XOR<TokenFcmCreateWithoutTokenInput, TokenFcmUncheckedCreateWithoutTokenInput>
  }

  export type TokenFcmCreateManyTokenInputEnvelope = {
    data: TokenFcmCreateManyTokenInput | TokenFcmCreateManyTokenInput[]
    skipDuplicates?: boolean
  }

  export type TokenJwtCreateWithoutTokenInput = {
    jti: string
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type TokenJwtUncheckedCreateWithoutTokenInput = {
    id?: number
    jti: string
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type TokenJwtCreateOrConnectWithoutTokenInput = {
    where: TokenJwtWhereUniqueInput
    create: XOR<TokenJwtCreateWithoutTokenInput, TokenJwtUncheckedCreateWithoutTokenInput>
  }

  export type TokenJwtCreateManyTokenInputEnvelope = {
    data: TokenJwtCreateManyTokenInput | TokenJwtCreateManyTokenInput[]
    skipDuplicates?: boolean
  }

  export type TokenFcmUpsertWithWhereUniqueWithoutTokenInput = {
    where: TokenFcmWhereUniqueInput
    update: XOR<TokenFcmUpdateWithoutTokenInput, TokenFcmUncheckedUpdateWithoutTokenInput>
    create: XOR<TokenFcmCreateWithoutTokenInput, TokenFcmUncheckedCreateWithoutTokenInput>
  }

  export type TokenFcmUpdateWithWhereUniqueWithoutTokenInput = {
    where: TokenFcmWhereUniqueInput
    data: XOR<TokenFcmUpdateWithoutTokenInput, TokenFcmUncheckedUpdateWithoutTokenInput>
  }

  export type TokenFcmUpdateManyWithWhereWithoutTokenInput = {
    where: TokenFcmScalarWhereInput
    data: XOR<TokenFcmUpdateManyMutationInput, TokenFcmUncheckedUpdateManyWithoutTokenInput>
  }

  export type TokenFcmScalarWhereInput = {
    AND?: TokenFcmScalarWhereInput | TokenFcmScalarWhereInput[]
    OR?: TokenFcmScalarWhereInput[]
    NOT?: TokenFcmScalarWhereInput | TokenFcmScalarWhereInput[]
    id?: IntFilter<"TokenFcm"> | number
    tokenId?: IntFilter<"TokenFcm"> | number
    platform?: EnumPlatformFilter<"TokenFcm"> | $Enums.Platform
    createdAt?: DateTimeFilter<"TokenFcm"> | Date | string
    createdBy?: IntNullableFilter<"TokenFcm"> | number | null
    updatedAt?: DateTimeNullableFilter<"TokenFcm"> | Date | string | null
    updatedBy?: IntNullableFilter<"TokenFcm"> | number | null
    isDeleted?: BoolNullableFilter<"TokenFcm"> | boolean | null
    deletedAt?: DateTimeNullableFilter<"TokenFcm"> | Date | string | null
    deletedBy?: IntNullableFilter<"TokenFcm"> | number | null
  }

  export type TokenJwtUpsertWithWhereUniqueWithoutTokenInput = {
    where: TokenJwtWhereUniqueInput
    update: XOR<TokenJwtUpdateWithoutTokenInput, TokenJwtUncheckedUpdateWithoutTokenInput>
    create: XOR<TokenJwtCreateWithoutTokenInput, TokenJwtUncheckedCreateWithoutTokenInput>
  }

  export type TokenJwtUpdateWithWhereUniqueWithoutTokenInput = {
    where: TokenJwtWhereUniqueInput
    data: XOR<TokenJwtUpdateWithoutTokenInput, TokenJwtUncheckedUpdateWithoutTokenInput>
  }

  export type TokenJwtUpdateManyWithWhereWithoutTokenInput = {
    where: TokenJwtScalarWhereInput
    data: XOR<TokenJwtUpdateManyMutationInput, TokenJwtUncheckedUpdateManyWithoutTokenInput>
  }

  export type TokenJwtScalarWhereInput = {
    AND?: TokenJwtScalarWhereInput | TokenJwtScalarWhereInput[]
    OR?: TokenJwtScalarWhereInput[]
    NOT?: TokenJwtScalarWhereInput | TokenJwtScalarWhereInput[]
    id?: IntFilter<"TokenJwt"> | number
    tokenId?: IntFilter<"TokenJwt"> | number
    jti?: StringFilter<"TokenJwt"> | string
    createdAt?: DateTimeFilter<"TokenJwt"> | Date | string
    createdBy?: IntNullableFilter<"TokenJwt"> | number | null
    updatedAt?: DateTimeNullableFilter<"TokenJwt"> | Date | string | null
    updatedBy?: IntNullableFilter<"TokenJwt"> | number | null
    isDeleted?: BoolNullableFilter<"TokenJwt"> | boolean | null
    deletedAt?: DateTimeNullableFilter<"TokenJwt"> | Date | string | null
    deletedBy?: IntNullableFilter<"TokenJwt"> | number | null
  }

  export type TokenCreateWithoutTokenJwtsInput = {
    tokenHash: string
    tokenType: $Enums.TokenType
    owner?: $Enums.Owner
    ownerId: number
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    tokenFcms?: TokenFcmCreateNestedManyWithoutTokenInput
  }

  export type TokenUncheckedCreateWithoutTokenJwtsInput = {
    id?: number
    tokenHash: string
    tokenType: $Enums.TokenType
    owner?: $Enums.Owner
    ownerId: number
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    tokenFcms?: TokenFcmUncheckedCreateNestedManyWithoutTokenInput
  }

  export type TokenCreateOrConnectWithoutTokenJwtsInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutTokenJwtsInput, TokenUncheckedCreateWithoutTokenJwtsInput>
  }

  export type TokenUpsertWithoutTokenJwtsInput = {
    update: XOR<TokenUpdateWithoutTokenJwtsInput, TokenUncheckedUpdateWithoutTokenJwtsInput>
    create: XOR<TokenCreateWithoutTokenJwtsInput, TokenUncheckedCreateWithoutTokenJwtsInput>
    where?: TokenWhereInput
  }

  export type TokenUpdateToOneWithWhereWithoutTokenJwtsInput = {
    where?: TokenWhereInput
    data: XOR<TokenUpdateWithoutTokenJwtsInput, TokenUncheckedUpdateWithoutTokenJwtsInput>
  }

  export type TokenUpdateWithoutTokenJwtsInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    tokenType?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    owner?: EnumOwnerFieldUpdateOperationsInput | $Enums.Owner
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    tokenFcms?: TokenFcmUpdateManyWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateWithoutTokenJwtsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenHash?: StringFieldUpdateOperationsInput | string
    tokenType?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    owner?: EnumOwnerFieldUpdateOperationsInput | $Enums.Owner
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    tokenFcms?: TokenFcmUncheckedUpdateManyWithoutTokenNestedInput
  }

  export type TokenCreateWithoutTokenFcmsInput = {
    tokenHash: string
    tokenType: $Enums.TokenType
    owner?: $Enums.Owner
    ownerId: number
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    tokenJwts?: TokenJwtCreateNestedManyWithoutTokenInput
  }

  export type TokenUncheckedCreateWithoutTokenFcmsInput = {
    id?: number
    tokenHash: string
    tokenType: $Enums.TokenType
    owner?: $Enums.Owner
    ownerId: number
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    tokenJwts?: TokenJwtUncheckedCreateNestedManyWithoutTokenInput
  }

  export type TokenCreateOrConnectWithoutTokenFcmsInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutTokenFcmsInput, TokenUncheckedCreateWithoutTokenFcmsInput>
  }

  export type TokenUpsertWithoutTokenFcmsInput = {
    update: XOR<TokenUpdateWithoutTokenFcmsInput, TokenUncheckedUpdateWithoutTokenFcmsInput>
    create: XOR<TokenCreateWithoutTokenFcmsInput, TokenUncheckedCreateWithoutTokenFcmsInput>
    where?: TokenWhereInput
  }

  export type TokenUpdateToOneWithWhereWithoutTokenFcmsInput = {
    where?: TokenWhereInput
    data: XOR<TokenUpdateWithoutTokenFcmsInput, TokenUncheckedUpdateWithoutTokenFcmsInput>
  }

  export type TokenUpdateWithoutTokenFcmsInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    tokenType?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    owner?: EnumOwnerFieldUpdateOperationsInput | $Enums.Owner
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    tokenJwts?: TokenJwtUpdateManyWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateWithoutTokenFcmsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenHash?: StringFieldUpdateOperationsInput | string
    tokenType?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    owner?: EnumOwnerFieldUpdateOperationsInput | $Enums.Owner
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    tokenJwts?: TokenJwtUncheckedUpdateManyWithoutTokenNestedInput
  }

  export type UserRoleCreateWithoutUserInput = {
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    role: RoleCreateNestedOneWithoutUserRolesInput
  }

  export type UserRoleUncheckedCreateWithoutUserInput = {
    id?: number
    roleId: number
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type UserRoleCreateOrConnectWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleCreateManyUserInputEnvelope = {
    data: UserRoleCreateManyUserInput | UserRoleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutUserInput = {
    title: string
    content: string
    viewCount?: number
    status?: $Enums.PostStatus
    createdAt?: Date | string | null
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    content: string
    viewCount?: number
    status?: $Enums.PostStatus
    createdAt?: Date | string | null
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: PostCreateManyUserInput | PostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    title: string
    content: string
    type: $Enums.NotificationType
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    notificationReads?: NotificationReadCreateNestedManyWithoutNotificationInput
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    content: string
    type: $Enums.NotificationType
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    notificationReads?: NotificationReadUncheckedCreateNestedManyWithoutNotificationInput
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationReadCreateWithoutUserInput = {
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    notification: NotificationCreateNestedOneWithoutNotificationReadsInput
  }

  export type NotificationReadUncheckedCreateWithoutUserInput = {
    id?: number
    notificationId: number
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type NotificationReadCreateOrConnectWithoutUserInput = {
    where: NotificationReadWhereUniqueInput
    create: XOR<NotificationReadCreateWithoutUserInput, NotificationReadUncheckedCreateWithoutUserInput>
  }

  export type NotificationReadCreateManyUserInputEnvelope = {
    data: NotificationReadCreateManyUserInput | NotificationReadCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleUpsertWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutUserInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutUserInput>
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutUserInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    userId?: IntFilter<"Post"> | number
    viewCount?: IntFilter<"Post"> | number
    status?: EnumPostStatusFilter<"Post"> | $Enums.PostStatus
    createdAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    createdBy?: IntNullableFilter<"Post"> | number | null
    updatedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    updatedBy?: IntNullableFilter<"Post"> | number | null
    isDeleted?: BoolNullableFilter<"Post"> | boolean | null
    deletedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    deletedBy?: IntNullableFilter<"Post"> | number | null
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    userId?: IntNullableFilter<"Notification"> | number | null
    title?: StringFilter<"Notification"> | string
    content?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    createdBy?: IntNullableFilter<"Notification"> | number | null
    updatedAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    updatedBy?: IntNullableFilter<"Notification"> | number | null
    isDeleted?: BoolNullableFilter<"Notification"> | boolean | null
    deletedAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    deletedBy?: IntNullableFilter<"Notification"> | number | null
  }

  export type NotificationReadUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationReadWhereUniqueInput
    update: XOR<NotificationReadUpdateWithoutUserInput, NotificationReadUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationReadCreateWithoutUserInput, NotificationReadUncheckedCreateWithoutUserInput>
  }

  export type NotificationReadUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationReadWhereUniqueInput
    data: XOR<NotificationReadUpdateWithoutUserInput, NotificationReadUncheckedUpdateWithoutUserInput>
  }

  export type NotificationReadUpdateManyWithWhereWithoutUserInput = {
    where: NotificationReadScalarWhereInput
    data: XOR<NotificationReadUpdateManyMutationInput, NotificationReadUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCreateWithoutUserRolesInput = {
    email: string
    password: string
    name: string
    phone: string
    status?: $Enums.UserStatus
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    posts?: PostCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    notificationReads?: NotificationReadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserRolesInput = {
    id?: number
    email: string
    password: string
    name: string
    phone: string
    status?: $Enums.UserStatus
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    notificationReads?: NotificationReadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserRolesInput, UserUncheckedCreateWithoutUserRolesInput>
  }

  export type RoleCreateWithoutUserRolesInput = {
    name: string
    owner?: $Enums.Owner
    description?: string | null
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    adminRoles?: AdminRoleCreateNestedManyWithoutRoleInput
    rolePermissions?: RolePermissionCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutUserRolesInput = {
    id?: number
    name: string
    owner?: $Enums.Owner
    description?: string | null
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
    adminRoles?: AdminRoleUncheckedCreateNestedManyWithoutRoleInput
    rolePermissions?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutUserRolesInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUserRolesInput, RoleUncheckedCreateWithoutUserRolesInput>
  }

  export type UserUpsertWithoutUserRolesInput = {
    update: XOR<UserUpdateWithoutUserRolesInput, UserUncheckedUpdateWithoutUserRolesInput>
    create: XOR<UserCreateWithoutUserRolesInput, UserUncheckedCreateWithoutUserRolesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserRolesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserRolesInput, UserUncheckedUpdateWithoutUserRolesInput>
  }

  export type UserUpdateWithoutUserRolesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    posts?: PostUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    notificationReads?: NotificationReadUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    notificationReads?: NotificationReadUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoleUpsertWithoutUserRolesInput = {
    update: XOR<RoleUpdateWithoutUserRolesInput, RoleUncheckedUpdateWithoutUserRolesInput>
    create: XOR<RoleCreateWithoutUserRolesInput, RoleUncheckedCreateWithoutUserRolesInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUserRolesInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUserRolesInput, RoleUncheckedUpdateWithoutUserRolesInput>
  }

  export type RoleUpdateWithoutUserRolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    owner?: EnumOwnerFieldUpdateOperationsInput | $Enums.Owner
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    adminRoles?: AdminRoleUpdateManyWithoutRoleNestedInput
    rolePermissions?: RolePermissionUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutUserRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    owner?: EnumOwnerFieldUpdateOperationsInput | $Enums.Owner
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    adminRoles?: AdminRoleUncheckedUpdateManyWithoutRoleNestedInput
    rolePermissions?: RolePermissionUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type AdminRoleCreateManyAdminInput = {
    id?: number
    roleId: number
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type AdminRoleUpdateWithoutAdminInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    role?: RoleUpdateOneRequiredWithoutAdminRolesNestedInput
  }

  export type AdminRoleUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AdminRoleUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NotificationReadCreateManyNotificationInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type NotificationReadUpdateWithoutNotificationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutNotificationReadsNestedInput
  }

  export type NotificationReadUncheckedUpdateWithoutNotificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NotificationReadUncheckedUpdateManyWithoutNotificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserRoleCreateManyRoleInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type AdminRoleCreateManyRoleInput = {
    id?: number
    adminId: number
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type RolePermissionCreateManyRoleInput = {
    id?: number
    permissionId: number
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type UserRoleUpdateWithoutRoleInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutUserRolesNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AdminRoleUpdateWithoutRoleInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    admin?: AdminUpdateOneRequiredWithoutAdminRolesNestedInput
  }

  export type AdminRoleUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AdminRoleUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RolePermissionUpdateWithoutRoleInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    permission?: PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput
  }

  export type RolePermissionUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RolePermissionUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RolePermissionCreateManyPermissionInput = {
    id?: number
    roleId: number
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type RolePermissionUpdateWithoutPermissionInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    role?: RoleUpdateOneRequiredWithoutRolePermissionsNestedInput
  }

  export type RolePermissionUncheckedUpdateWithoutPermissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RolePermissionUncheckedUpdateManyWithoutPermissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TokenFcmCreateManyTokenInput = {
    id?: number
    platform: $Enums.Platform
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type TokenJwtCreateManyTokenInput = {
    id?: number
    jti: string
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type TokenFcmUpdateWithoutTokenInput = {
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TokenFcmUncheckedUpdateWithoutTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TokenFcmUncheckedUpdateManyWithoutTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TokenJwtUpdateWithoutTokenInput = {
    jti?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TokenJwtUncheckedUpdateWithoutTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    jti?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TokenJwtUncheckedUpdateManyWithoutTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    jti?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserRoleCreateManyUserInput = {
    id?: number
    roleId: number
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type PostCreateManyUserInput = {
    id?: number
    title: string
    content: string
    viewCount?: number
    status?: $Enums.PostStatus
    createdAt?: Date | string | null
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type NotificationCreateManyUserInput = {
    id?: number
    title: string
    content: string
    type: $Enums.NotificationType
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type NotificationReadCreateManyUserInput = {
    id?: number
    notificationId: number
    createdAt?: Date | string
    createdBy?: number | null
    updatedAt?: Date | string | null
    updatedBy?: number | null
    isDeleted?: boolean | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type UserRoleUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    role?: RoleUpdateOneRequiredWithoutUserRolesNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserRoleUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PostUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    viewCount?: IntFieldUpdateOperationsInput | number
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    viewCount?: IntFieldUpdateOperationsInput | number
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PostUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    viewCount?: IntFieldUpdateOperationsInput | number
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NotificationUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    notificationReads?: NotificationReadUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    notificationReads?: NotificationReadUncheckedUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NotificationReadUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    notification?: NotificationUpdateOneRequiredWithoutNotificationReadsNestedInput
  }

  export type NotificationReadUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    notificationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NotificationReadUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    notificationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}