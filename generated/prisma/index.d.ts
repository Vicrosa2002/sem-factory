
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
 * Model compradores
 * 
 */
export type compradores = $Result.DefaultSelection<Prisma.$compradoresPayload>
/**
 * Model solicitudes
 * 
 */
export type solicitudes = $Result.DefaultSelection<Prisma.$solicitudesPayload>
/**
 * Model solicitud_referencias
 * 
 */
export type solicitud_referencias = $Result.DefaultSelection<Prisma.$solicitud_referenciasPayload>
/**
 * Model solicitud_documentos
 * 
 */
export type solicitud_documentos = $Result.DefaultSelection<Prisma.$solicitud_documentosPayload>
/**
 * Model pagos
 * 
 */
export type pagos = $Result.DefaultSelection<Prisma.$pagosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Compradores
 * const compradores = await prisma.compradores.findMany()
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Compradores
   * const compradores = await prisma.compradores.findMany()
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.compradores`: Exposes CRUD operations for the **compradores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Compradores
    * const compradores = await prisma.compradores.findMany()
    * ```
    */
  get compradores(): Prisma.compradoresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.solicitudes`: Exposes CRUD operations for the **solicitudes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Solicitudes
    * const solicitudes = await prisma.solicitudes.findMany()
    * ```
    */
  get solicitudes(): Prisma.solicitudesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.solicitud_referencias`: Exposes CRUD operations for the **solicitud_referencias** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Solicitud_referencias
    * const solicitud_referencias = await prisma.solicitud_referencias.findMany()
    * ```
    */
  get solicitud_referencias(): Prisma.solicitud_referenciasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.solicitud_documentos`: Exposes CRUD operations for the **solicitud_documentos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Solicitud_documentos
    * const solicitud_documentos = await prisma.solicitud_documentos.findMany()
    * ```
    */
  get solicitud_documentos(): Prisma.solicitud_documentosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pagos`: Exposes CRUD operations for the **pagos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pagos
    * const pagos = await prisma.pagos.findMany()
    * ```
    */
  get pagos(): Prisma.pagosDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
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
    compradores: 'compradores',
    solicitudes: 'solicitudes',
    solicitud_referencias: 'solicitud_referencias',
    solicitud_documentos: 'solicitud_documentos',
    pagos: 'pagos'
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
      modelProps: "compradores" | "solicitudes" | "solicitud_referencias" | "solicitud_documentos" | "pagos"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      compradores: {
        payload: Prisma.$compradoresPayload<ExtArgs>
        fields: Prisma.compradoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.compradoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compradoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.compradoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compradoresPayload>
          }
          findFirst: {
            args: Prisma.compradoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compradoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.compradoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compradoresPayload>
          }
          findMany: {
            args: Prisma.compradoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compradoresPayload>[]
          }
          create: {
            args: Prisma.compradoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compradoresPayload>
          }
          createMany: {
            args: Prisma.compradoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.compradoresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compradoresPayload>[]
          }
          delete: {
            args: Prisma.compradoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compradoresPayload>
          }
          update: {
            args: Prisma.compradoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compradoresPayload>
          }
          deleteMany: {
            args: Prisma.compradoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.compradoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.compradoresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compradoresPayload>[]
          }
          upsert: {
            args: Prisma.compradoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compradoresPayload>
          }
          aggregate: {
            args: Prisma.CompradoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompradores>
          }
          groupBy: {
            args: Prisma.compradoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompradoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.compradoresCountArgs<ExtArgs>
            result: $Utils.Optional<CompradoresCountAggregateOutputType> | number
          }
        }
      }
      solicitudes: {
        payload: Prisma.$solicitudesPayload<ExtArgs>
        fields: Prisma.solicitudesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.solicitudesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solicitudesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.solicitudesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solicitudesPayload>
          }
          findFirst: {
            args: Prisma.solicitudesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solicitudesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.solicitudesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solicitudesPayload>
          }
          findMany: {
            args: Prisma.solicitudesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solicitudesPayload>[]
          }
          create: {
            args: Prisma.solicitudesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solicitudesPayload>
          }
          createMany: {
            args: Prisma.solicitudesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.solicitudesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solicitudesPayload>[]
          }
          delete: {
            args: Prisma.solicitudesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solicitudesPayload>
          }
          update: {
            args: Prisma.solicitudesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solicitudesPayload>
          }
          deleteMany: {
            args: Prisma.solicitudesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.solicitudesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.solicitudesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solicitudesPayload>[]
          }
          upsert: {
            args: Prisma.solicitudesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solicitudesPayload>
          }
          aggregate: {
            args: Prisma.SolicitudesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSolicitudes>
          }
          groupBy: {
            args: Prisma.solicitudesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SolicitudesGroupByOutputType>[]
          }
          count: {
            args: Prisma.solicitudesCountArgs<ExtArgs>
            result: $Utils.Optional<SolicitudesCountAggregateOutputType> | number
          }
        }
      }
      solicitud_referencias: {
        payload: Prisma.$solicitud_referenciasPayload<ExtArgs>
        fields: Prisma.solicitud_referenciasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.solicitud_referenciasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solicitud_referenciasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.solicitud_referenciasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solicitud_referenciasPayload>
          }
          findFirst: {
            args: Prisma.solicitud_referenciasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solicitud_referenciasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.solicitud_referenciasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solicitud_referenciasPayload>
          }
          findMany: {
            args: Prisma.solicitud_referenciasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solicitud_referenciasPayload>[]
          }
          create: {
            args: Prisma.solicitud_referenciasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solicitud_referenciasPayload>
          }
          createMany: {
            args: Prisma.solicitud_referenciasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.solicitud_referenciasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solicitud_referenciasPayload>[]
          }
          delete: {
            args: Prisma.solicitud_referenciasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solicitud_referenciasPayload>
          }
          update: {
            args: Prisma.solicitud_referenciasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solicitud_referenciasPayload>
          }
          deleteMany: {
            args: Prisma.solicitud_referenciasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.solicitud_referenciasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.solicitud_referenciasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solicitud_referenciasPayload>[]
          }
          upsert: {
            args: Prisma.solicitud_referenciasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solicitud_referenciasPayload>
          }
          aggregate: {
            args: Prisma.Solicitud_referenciasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSolicitud_referencias>
          }
          groupBy: {
            args: Prisma.solicitud_referenciasGroupByArgs<ExtArgs>
            result: $Utils.Optional<Solicitud_referenciasGroupByOutputType>[]
          }
          count: {
            args: Prisma.solicitud_referenciasCountArgs<ExtArgs>
            result: $Utils.Optional<Solicitud_referenciasCountAggregateOutputType> | number
          }
        }
      }
      solicitud_documentos: {
        payload: Prisma.$solicitud_documentosPayload<ExtArgs>
        fields: Prisma.solicitud_documentosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.solicitud_documentosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solicitud_documentosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.solicitud_documentosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solicitud_documentosPayload>
          }
          findFirst: {
            args: Prisma.solicitud_documentosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solicitud_documentosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.solicitud_documentosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solicitud_documentosPayload>
          }
          findMany: {
            args: Prisma.solicitud_documentosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solicitud_documentosPayload>[]
          }
          create: {
            args: Prisma.solicitud_documentosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solicitud_documentosPayload>
          }
          createMany: {
            args: Prisma.solicitud_documentosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.solicitud_documentosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solicitud_documentosPayload>[]
          }
          delete: {
            args: Prisma.solicitud_documentosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solicitud_documentosPayload>
          }
          update: {
            args: Prisma.solicitud_documentosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solicitud_documentosPayload>
          }
          deleteMany: {
            args: Prisma.solicitud_documentosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.solicitud_documentosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.solicitud_documentosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solicitud_documentosPayload>[]
          }
          upsert: {
            args: Prisma.solicitud_documentosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solicitud_documentosPayload>
          }
          aggregate: {
            args: Prisma.Solicitud_documentosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSolicitud_documentos>
          }
          groupBy: {
            args: Prisma.solicitud_documentosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Solicitud_documentosGroupByOutputType>[]
          }
          count: {
            args: Prisma.solicitud_documentosCountArgs<ExtArgs>
            result: $Utils.Optional<Solicitud_documentosCountAggregateOutputType> | number
          }
        }
      }
      pagos: {
        payload: Prisma.$pagosPayload<ExtArgs>
        fields: Prisma.pagosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pagosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pagosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload>
          }
          findFirst: {
            args: Prisma.pagosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pagosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload>
          }
          findMany: {
            args: Prisma.pagosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload>[]
          }
          create: {
            args: Prisma.pagosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload>
          }
          createMany: {
            args: Prisma.pagosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pagosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload>[]
          }
          delete: {
            args: Prisma.pagosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload>
          }
          update: {
            args: Prisma.pagosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload>
          }
          deleteMany: {
            args: Prisma.pagosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pagosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pagosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload>[]
          }
          upsert: {
            args: Prisma.pagosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload>
          }
          aggregate: {
            args: Prisma.PagosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePagos>
          }
          groupBy: {
            args: Prisma.pagosGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagosGroupByOutputType>[]
          }
          count: {
            args: Prisma.pagosCountArgs<ExtArgs>
            result: $Utils.Optional<PagosCountAggregateOutputType> | number
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
    compradores?: compradoresOmit
    solicitudes?: solicitudesOmit
    solicitud_referencias?: solicitud_referenciasOmit
    solicitud_documentos?: solicitud_documentosOmit
    pagos?: pagosOmit
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
   * Count Type CompradoresCountOutputType
   */

  export type CompradoresCountOutputType = {
    solicitudes: number
  }

  export type CompradoresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solicitudes?: boolean | CompradoresCountOutputTypeCountSolicitudesArgs
  }

  // Custom InputTypes
  /**
   * CompradoresCountOutputType without action
   */
  export type CompradoresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompradoresCountOutputType
     */
    select?: CompradoresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompradoresCountOutputType without action
   */
  export type CompradoresCountOutputTypeCountSolicitudesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: solicitudesWhereInput
  }


  /**
   * Count Type SolicitudesCountOutputType
   */

  export type SolicitudesCountOutputType = {
    referencias: number
    documentos: number
    pagos: number
  }

  export type SolicitudesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referencias?: boolean | SolicitudesCountOutputTypeCountReferenciasArgs
    documentos?: boolean | SolicitudesCountOutputTypeCountDocumentosArgs
    pagos?: boolean | SolicitudesCountOutputTypeCountPagosArgs
  }

  // Custom InputTypes
  /**
   * SolicitudesCountOutputType without action
   */
  export type SolicitudesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudesCountOutputType
     */
    select?: SolicitudesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SolicitudesCountOutputType without action
   */
  export type SolicitudesCountOutputTypeCountReferenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: solicitud_referenciasWhereInput
  }

  /**
   * SolicitudesCountOutputType without action
   */
  export type SolicitudesCountOutputTypeCountDocumentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: solicitud_documentosWhereInput
  }

  /**
   * SolicitudesCountOutputType without action
   */
  export type SolicitudesCountOutputTypeCountPagosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pagosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model compradores
   */

  export type AggregateCompradores = {
    _count: CompradoresCountAggregateOutputType | null
    _min: CompradoresMinAggregateOutputType | null
    _max: CompradoresMaxAggregateOutputType | null
  }

  export type CompradoresMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    apellido: string | null
    correo: string | null
    telefono: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CompradoresMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    apellido: string | null
    correo: string | null
    telefono: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CompradoresCountAggregateOutputType = {
    id: number
    nombre: number
    apellido: number
    correo: number
    telefono: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CompradoresMinAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    correo?: true
    telefono?: true
    created_at?: true
    updated_at?: true
  }

  export type CompradoresMaxAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    correo?: true
    telefono?: true
    created_at?: true
    updated_at?: true
  }

  export type CompradoresCountAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    correo?: true
    telefono?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CompradoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which compradores to aggregate.
     */
    where?: compradoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of compradores to fetch.
     */
    orderBy?: compradoresOrderByWithRelationInput | compradoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: compradoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` compradores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` compradores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned compradores
    **/
    _count?: true | CompradoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompradoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompradoresMaxAggregateInputType
  }

  export type GetCompradoresAggregateType<T extends CompradoresAggregateArgs> = {
        [P in keyof T & keyof AggregateCompradores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompradores[P]>
      : GetScalarType<T[P], AggregateCompradores[P]>
  }




  export type compradoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: compradoresWhereInput
    orderBy?: compradoresOrderByWithAggregationInput | compradoresOrderByWithAggregationInput[]
    by: CompradoresScalarFieldEnum[] | CompradoresScalarFieldEnum
    having?: compradoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompradoresCountAggregateInputType | true
    _min?: CompradoresMinAggregateInputType
    _max?: CompradoresMaxAggregateInputType
  }

  export type CompradoresGroupByOutputType = {
    id: string
    nombre: string
    apellido: string
    correo: string
    telefono: string | null
    created_at: Date
    updated_at: Date
    _count: CompradoresCountAggregateOutputType | null
    _min: CompradoresMinAggregateOutputType | null
    _max: CompradoresMaxAggregateOutputType | null
  }

  type GetCompradoresGroupByPayload<T extends compradoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompradoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompradoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompradoresGroupByOutputType[P]>
            : GetScalarType<T[P], CompradoresGroupByOutputType[P]>
        }
      >
    >


  export type compradoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    correo?: boolean
    telefono?: boolean
    created_at?: boolean
    updated_at?: boolean
    solicitudes?: boolean | compradores$solicitudesArgs<ExtArgs>
    _count?: boolean | CompradoresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["compradores"]>

  export type compradoresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    correo?: boolean
    telefono?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["compradores"]>

  export type compradoresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    correo?: boolean
    telefono?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["compradores"]>

  export type compradoresSelectScalar = {
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    correo?: boolean
    telefono?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type compradoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "apellido" | "correo" | "telefono" | "created_at" | "updated_at", ExtArgs["result"]["compradores"]>
  export type compradoresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solicitudes?: boolean | compradores$solicitudesArgs<ExtArgs>
    _count?: boolean | CompradoresCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type compradoresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type compradoresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $compradoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "compradores"
    objects: {
      solicitudes: Prisma.$solicitudesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      apellido: string
      correo: string
      telefono: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["compradores"]>
    composites: {}
  }

  type compradoresGetPayload<S extends boolean | null | undefined | compradoresDefaultArgs> = $Result.GetResult<Prisma.$compradoresPayload, S>

  type compradoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<compradoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompradoresCountAggregateInputType | true
    }

  export interface compradoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['compradores'], meta: { name: 'compradores' } }
    /**
     * Find zero or one Compradores that matches the filter.
     * @param {compradoresFindUniqueArgs} args - Arguments to find a Compradores
     * @example
     * // Get one Compradores
     * const compradores = await prisma.compradores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends compradoresFindUniqueArgs>(args: SelectSubset<T, compradoresFindUniqueArgs<ExtArgs>>): Prisma__compradoresClient<$Result.GetResult<Prisma.$compradoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Compradores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {compradoresFindUniqueOrThrowArgs} args - Arguments to find a Compradores
     * @example
     * // Get one Compradores
     * const compradores = await prisma.compradores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends compradoresFindUniqueOrThrowArgs>(args: SelectSubset<T, compradoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__compradoresClient<$Result.GetResult<Prisma.$compradoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Compradores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {compradoresFindFirstArgs} args - Arguments to find a Compradores
     * @example
     * // Get one Compradores
     * const compradores = await prisma.compradores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends compradoresFindFirstArgs>(args?: SelectSubset<T, compradoresFindFirstArgs<ExtArgs>>): Prisma__compradoresClient<$Result.GetResult<Prisma.$compradoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Compradores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {compradoresFindFirstOrThrowArgs} args - Arguments to find a Compradores
     * @example
     * // Get one Compradores
     * const compradores = await prisma.compradores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends compradoresFindFirstOrThrowArgs>(args?: SelectSubset<T, compradoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__compradoresClient<$Result.GetResult<Prisma.$compradoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Compradores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {compradoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Compradores
     * const compradores = await prisma.compradores.findMany()
     * 
     * // Get first 10 Compradores
     * const compradores = await prisma.compradores.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const compradoresWithIdOnly = await prisma.compradores.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends compradoresFindManyArgs>(args?: SelectSubset<T, compradoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$compradoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Compradores.
     * @param {compradoresCreateArgs} args - Arguments to create a Compradores.
     * @example
     * // Create one Compradores
     * const Compradores = await prisma.compradores.create({
     *   data: {
     *     // ... data to create a Compradores
     *   }
     * })
     * 
     */
    create<T extends compradoresCreateArgs>(args: SelectSubset<T, compradoresCreateArgs<ExtArgs>>): Prisma__compradoresClient<$Result.GetResult<Prisma.$compradoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Compradores.
     * @param {compradoresCreateManyArgs} args - Arguments to create many Compradores.
     * @example
     * // Create many Compradores
     * const compradores = await prisma.compradores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends compradoresCreateManyArgs>(args?: SelectSubset<T, compradoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Compradores and returns the data saved in the database.
     * @param {compradoresCreateManyAndReturnArgs} args - Arguments to create many Compradores.
     * @example
     * // Create many Compradores
     * const compradores = await prisma.compradores.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Compradores and only return the `id`
     * const compradoresWithIdOnly = await prisma.compradores.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends compradoresCreateManyAndReturnArgs>(args?: SelectSubset<T, compradoresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$compradoresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Compradores.
     * @param {compradoresDeleteArgs} args - Arguments to delete one Compradores.
     * @example
     * // Delete one Compradores
     * const Compradores = await prisma.compradores.delete({
     *   where: {
     *     // ... filter to delete one Compradores
     *   }
     * })
     * 
     */
    delete<T extends compradoresDeleteArgs>(args: SelectSubset<T, compradoresDeleteArgs<ExtArgs>>): Prisma__compradoresClient<$Result.GetResult<Prisma.$compradoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Compradores.
     * @param {compradoresUpdateArgs} args - Arguments to update one Compradores.
     * @example
     * // Update one Compradores
     * const compradores = await prisma.compradores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends compradoresUpdateArgs>(args: SelectSubset<T, compradoresUpdateArgs<ExtArgs>>): Prisma__compradoresClient<$Result.GetResult<Prisma.$compradoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Compradores.
     * @param {compradoresDeleteManyArgs} args - Arguments to filter Compradores to delete.
     * @example
     * // Delete a few Compradores
     * const { count } = await prisma.compradores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends compradoresDeleteManyArgs>(args?: SelectSubset<T, compradoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Compradores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {compradoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Compradores
     * const compradores = await prisma.compradores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends compradoresUpdateManyArgs>(args: SelectSubset<T, compradoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Compradores and returns the data updated in the database.
     * @param {compradoresUpdateManyAndReturnArgs} args - Arguments to update many Compradores.
     * @example
     * // Update many Compradores
     * const compradores = await prisma.compradores.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Compradores and only return the `id`
     * const compradoresWithIdOnly = await prisma.compradores.updateManyAndReturn({
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
    updateManyAndReturn<T extends compradoresUpdateManyAndReturnArgs>(args: SelectSubset<T, compradoresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$compradoresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Compradores.
     * @param {compradoresUpsertArgs} args - Arguments to update or create a Compradores.
     * @example
     * // Update or create a Compradores
     * const compradores = await prisma.compradores.upsert({
     *   create: {
     *     // ... data to create a Compradores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Compradores we want to update
     *   }
     * })
     */
    upsert<T extends compradoresUpsertArgs>(args: SelectSubset<T, compradoresUpsertArgs<ExtArgs>>): Prisma__compradoresClient<$Result.GetResult<Prisma.$compradoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Compradores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {compradoresCountArgs} args - Arguments to filter Compradores to count.
     * @example
     * // Count the number of Compradores
     * const count = await prisma.compradores.count({
     *   where: {
     *     // ... the filter for the Compradores we want to count
     *   }
     * })
    **/
    count<T extends compradoresCountArgs>(
      args?: Subset<T, compradoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompradoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Compradores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompradoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompradoresAggregateArgs>(args: Subset<T, CompradoresAggregateArgs>): Prisma.PrismaPromise<GetCompradoresAggregateType<T>>

    /**
     * Group by Compradores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {compradoresGroupByArgs} args - Group by arguments.
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
      T extends compradoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: compradoresGroupByArgs['orderBy'] }
        : { orderBy?: compradoresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, compradoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompradoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the compradores model
   */
  readonly fields: compradoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for compradores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__compradoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    solicitudes<T extends compradores$solicitudesArgs<ExtArgs> = {}>(args?: Subset<T, compradores$solicitudesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$solicitudesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the compradores model
   */
  interface compradoresFieldRefs {
    readonly id: FieldRef<"compradores", 'String'>
    readonly nombre: FieldRef<"compradores", 'String'>
    readonly apellido: FieldRef<"compradores", 'String'>
    readonly correo: FieldRef<"compradores", 'String'>
    readonly telefono: FieldRef<"compradores", 'String'>
    readonly created_at: FieldRef<"compradores", 'DateTime'>
    readonly updated_at: FieldRef<"compradores", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * compradores findUnique
   */
  export type compradoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compradores
     */
    select?: compradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the compradores
     */
    omit?: compradoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: compradoresInclude<ExtArgs> | null
    /**
     * Filter, which compradores to fetch.
     */
    where: compradoresWhereUniqueInput
  }

  /**
   * compradores findUniqueOrThrow
   */
  export type compradoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compradores
     */
    select?: compradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the compradores
     */
    omit?: compradoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: compradoresInclude<ExtArgs> | null
    /**
     * Filter, which compradores to fetch.
     */
    where: compradoresWhereUniqueInput
  }

  /**
   * compradores findFirst
   */
  export type compradoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compradores
     */
    select?: compradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the compradores
     */
    omit?: compradoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: compradoresInclude<ExtArgs> | null
    /**
     * Filter, which compradores to fetch.
     */
    where?: compradoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of compradores to fetch.
     */
    orderBy?: compradoresOrderByWithRelationInput | compradoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for compradores.
     */
    cursor?: compradoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` compradores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` compradores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of compradores.
     */
    distinct?: CompradoresScalarFieldEnum | CompradoresScalarFieldEnum[]
  }

  /**
   * compradores findFirstOrThrow
   */
  export type compradoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compradores
     */
    select?: compradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the compradores
     */
    omit?: compradoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: compradoresInclude<ExtArgs> | null
    /**
     * Filter, which compradores to fetch.
     */
    where?: compradoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of compradores to fetch.
     */
    orderBy?: compradoresOrderByWithRelationInput | compradoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for compradores.
     */
    cursor?: compradoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` compradores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` compradores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of compradores.
     */
    distinct?: CompradoresScalarFieldEnum | CompradoresScalarFieldEnum[]
  }

  /**
   * compradores findMany
   */
  export type compradoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compradores
     */
    select?: compradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the compradores
     */
    omit?: compradoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: compradoresInclude<ExtArgs> | null
    /**
     * Filter, which compradores to fetch.
     */
    where?: compradoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of compradores to fetch.
     */
    orderBy?: compradoresOrderByWithRelationInput | compradoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing compradores.
     */
    cursor?: compradoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` compradores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` compradores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of compradores.
     */
    distinct?: CompradoresScalarFieldEnum | CompradoresScalarFieldEnum[]
  }

  /**
   * compradores create
   */
  export type compradoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compradores
     */
    select?: compradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the compradores
     */
    omit?: compradoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: compradoresInclude<ExtArgs> | null
    /**
     * The data needed to create a compradores.
     */
    data: XOR<compradoresCreateInput, compradoresUncheckedCreateInput>
  }

  /**
   * compradores createMany
   */
  export type compradoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many compradores.
     */
    data: compradoresCreateManyInput | compradoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * compradores createManyAndReturn
   */
  export type compradoresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compradores
     */
    select?: compradoresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the compradores
     */
    omit?: compradoresOmit<ExtArgs> | null
    /**
     * The data used to create many compradores.
     */
    data: compradoresCreateManyInput | compradoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * compradores update
   */
  export type compradoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compradores
     */
    select?: compradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the compradores
     */
    omit?: compradoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: compradoresInclude<ExtArgs> | null
    /**
     * The data needed to update a compradores.
     */
    data: XOR<compradoresUpdateInput, compradoresUncheckedUpdateInput>
    /**
     * Choose, which compradores to update.
     */
    where: compradoresWhereUniqueInput
  }

  /**
   * compradores updateMany
   */
  export type compradoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update compradores.
     */
    data: XOR<compradoresUpdateManyMutationInput, compradoresUncheckedUpdateManyInput>
    /**
     * Filter which compradores to update
     */
    where?: compradoresWhereInput
    /**
     * Limit how many compradores to update.
     */
    limit?: number
  }

  /**
   * compradores updateManyAndReturn
   */
  export type compradoresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compradores
     */
    select?: compradoresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the compradores
     */
    omit?: compradoresOmit<ExtArgs> | null
    /**
     * The data used to update compradores.
     */
    data: XOR<compradoresUpdateManyMutationInput, compradoresUncheckedUpdateManyInput>
    /**
     * Filter which compradores to update
     */
    where?: compradoresWhereInput
    /**
     * Limit how many compradores to update.
     */
    limit?: number
  }

  /**
   * compradores upsert
   */
  export type compradoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compradores
     */
    select?: compradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the compradores
     */
    omit?: compradoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: compradoresInclude<ExtArgs> | null
    /**
     * The filter to search for the compradores to update in case it exists.
     */
    where: compradoresWhereUniqueInput
    /**
     * In case the compradores found by the `where` argument doesn't exist, create a new compradores with this data.
     */
    create: XOR<compradoresCreateInput, compradoresUncheckedCreateInput>
    /**
     * In case the compradores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<compradoresUpdateInput, compradoresUncheckedUpdateInput>
  }

  /**
   * compradores delete
   */
  export type compradoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compradores
     */
    select?: compradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the compradores
     */
    omit?: compradoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: compradoresInclude<ExtArgs> | null
    /**
     * Filter which compradores to delete.
     */
    where: compradoresWhereUniqueInput
  }

  /**
   * compradores deleteMany
   */
  export type compradoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which compradores to delete
     */
    where?: compradoresWhereInput
    /**
     * Limit how many compradores to delete.
     */
    limit?: number
  }

  /**
   * compradores.solicitudes
   */
  export type compradores$solicitudesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitudes
     */
    select?: solicitudesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solicitudes
     */
    omit?: solicitudesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitudesInclude<ExtArgs> | null
    where?: solicitudesWhereInput
    orderBy?: solicitudesOrderByWithRelationInput | solicitudesOrderByWithRelationInput[]
    cursor?: solicitudesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SolicitudesScalarFieldEnum | SolicitudesScalarFieldEnum[]
  }

  /**
   * compradores without action
   */
  export type compradoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compradores
     */
    select?: compradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the compradores
     */
    omit?: compradoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: compradoresInclude<ExtArgs> | null
  }


  /**
   * Model solicitudes
   */

  export type AggregateSolicitudes = {
    _count: SolicitudesCountAggregateOutputType | null
    _min: SolicitudesMinAggregateOutputType | null
    _max: SolicitudesMaxAggregateOutputType | null
  }

  export type SolicitudesMinAggregateOutputType = {
    id: string | null
    comprador_id: string | null
    tipo: string | null
    status: string | null
    numero_a_portar: string | null
    nip_portabilidad: string | null
    numero_telefono: string | null
    iccid: string | null
    curp: string | null
    imei2: string | null
    numero_contacto: string | null
    numero_oficina: string | null
    numero_trabajo: string | null
    numero_casa: string | null
    acepta_privacidad: boolean | null
    observaciones: string | null
    fecha_solicitud: Date | null
    fecha_activacion: Date | null
    updated_at: Date | null
  }

  export type SolicitudesMaxAggregateOutputType = {
    id: string | null
    comprador_id: string | null
    tipo: string | null
    status: string | null
    numero_a_portar: string | null
    nip_portabilidad: string | null
    numero_telefono: string | null
    iccid: string | null
    curp: string | null
    imei2: string | null
    numero_contacto: string | null
    numero_oficina: string | null
    numero_trabajo: string | null
    numero_casa: string | null
    acepta_privacidad: boolean | null
    observaciones: string | null
    fecha_solicitud: Date | null
    fecha_activacion: Date | null
    updated_at: Date | null
  }

  export type SolicitudesCountAggregateOutputType = {
    id: number
    comprador_id: number
    tipo: number
    status: number
    numero_a_portar: number
    nip_portabilidad: number
    numero_telefono: number
    iccid: number
    curp: number
    imei2: number
    numero_contacto: number
    numero_oficina: number
    numero_trabajo: number
    numero_casa: number
    acepta_privacidad: number
    observaciones: number
    fecha_solicitud: number
    fecha_activacion: number
    updated_at: number
    _all: number
  }


  export type SolicitudesMinAggregateInputType = {
    id?: true
    comprador_id?: true
    tipo?: true
    status?: true
    numero_a_portar?: true
    nip_portabilidad?: true
    numero_telefono?: true
    iccid?: true
    curp?: true
    imei2?: true
    numero_contacto?: true
    numero_oficina?: true
    numero_trabajo?: true
    numero_casa?: true
    acepta_privacidad?: true
    observaciones?: true
    fecha_solicitud?: true
    fecha_activacion?: true
    updated_at?: true
  }

  export type SolicitudesMaxAggregateInputType = {
    id?: true
    comprador_id?: true
    tipo?: true
    status?: true
    numero_a_portar?: true
    nip_portabilidad?: true
    numero_telefono?: true
    iccid?: true
    curp?: true
    imei2?: true
    numero_contacto?: true
    numero_oficina?: true
    numero_trabajo?: true
    numero_casa?: true
    acepta_privacidad?: true
    observaciones?: true
    fecha_solicitud?: true
    fecha_activacion?: true
    updated_at?: true
  }

  export type SolicitudesCountAggregateInputType = {
    id?: true
    comprador_id?: true
    tipo?: true
    status?: true
    numero_a_portar?: true
    nip_portabilidad?: true
    numero_telefono?: true
    iccid?: true
    curp?: true
    imei2?: true
    numero_contacto?: true
    numero_oficina?: true
    numero_trabajo?: true
    numero_casa?: true
    acepta_privacidad?: true
    observaciones?: true
    fecha_solicitud?: true
    fecha_activacion?: true
    updated_at?: true
    _all?: true
  }

  export type SolicitudesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which solicitudes to aggregate.
     */
    where?: solicitudesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of solicitudes to fetch.
     */
    orderBy?: solicitudesOrderByWithRelationInput | solicitudesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: solicitudesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` solicitudes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` solicitudes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned solicitudes
    **/
    _count?: true | SolicitudesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SolicitudesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SolicitudesMaxAggregateInputType
  }

  export type GetSolicitudesAggregateType<T extends SolicitudesAggregateArgs> = {
        [P in keyof T & keyof AggregateSolicitudes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSolicitudes[P]>
      : GetScalarType<T[P], AggregateSolicitudes[P]>
  }




  export type solicitudesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: solicitudesWhereInput
    orderBy?: solicitudesOrderByWithAggregationInput | solicitudesOrderByWithAggregationInput[]
    by: SolicitudesScalarFieldEnum[] | SolicitudesScalarFieldEnum
    having?: solicitudesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SolicitudesCountAggregateInputType | true
    _min?: SolicitudesMinAggregateInputType
    _max?: SolicitudesMaxAggregateInputType
  }

  export type SolicitudesGroupByOutputType = {
    id: string
    comprador_id: string
    tipo: string
    status: string
    numero_a_portar: string | null
    nip_portabilidad: string | null
    numero_telefono: string | null
    iccid: string | null
    curp: string | null
    imei2: string | null
    numero_contacto: string | null
    numero_oficina: string | null
    numero_trabajo: string | null
    numero_casa: string | null
    acepta_privacidad: boolean
    observaciones: string | null
    fecha_solicitud: Date
    fecha_activacion: Date | null
    updated_at: Date
    _count: SolicitudesCountAggregateOutputType | null
    _min: SolicitudesMinAggregateOutputType | null
    _max: SolicitudesMaxAggregateOutputType | null
  }

  type GetSolicitudesGroupByPayload<T extends solicitudesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SolicitudesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SolicitudesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SolicitudesGroupByOutputType[P]>
            : GetScalarType<T[P], SolicitudesGroupByOutputType[P]>
        }
      >
    >


  export type solicitudesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comprador_id?: boolean
    tipo?: boolean
    status?: boolean
    numero_a_portar?: boolean
    nip_portabilidad?: boolean
    numero_telefono?: boolean
    iccid?: boolean
    curp?: boolean
    imei2?: boolean
    numero_contacto?: boolean
    numero_oficina?: boolean
    numero_trabajo?: boolean
    numero_casa?: boolean
    acepta_privacidad?: boolean
    observaciones?: boolean
    fecha_solicitud?: boolean
    fecha_activacion?: boolean
    updated_at?: boolean
    comprador?: boolean | compradoresDefaultArgs<ExtArgs>
    referencias?: boolean | solicitudes$referenciasArgs<ExtArgs>
    documentos?: boolean | solicitudes$documentosArgs<ExtArgs>
    pagos?: boolean | solicitudes$pagosArgs<ExtArgs>
    _count?: boolean | SolicitudesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solicitudes"]>

  export type solicitudesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comprador_id?: boolean
    tipo?: boolean
    status?: boolean
    numero_a_portar?: boolean
    nip_portabilidad?: boolean
    numero_telefono?: boolean
    iccid?: boolean
    curp?: boolean
    imei2?: boolean
    numero_contacto?: boolean
    numero_oficina?: boolean
    numero_trabajo?: boolean
    numero_casa?: boolean
    acepta_privacidad?: boolean
    observaciones?: boolean
    fecha_solicitud?: boolean
    fecha_activacion?: boolean
    updated_at?: boolean
    comprador?: boolean | compradoresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solicitudes"]>

  export type solicitudesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comprador_id?: boolean
    tipo?: boolean
    status?: boolean
    numero_a_portar?: boolean
    nip_portabilidad?: boolean
    numero_telefono?: boolean
    iccid?: boolean
    curp?: boolean
    imei2?: boolean
    numero_contacto?: boolean
    numero_oficina?: boolean
    numero_trabajo?: boolean
    numero_casa?: boolean
    acepta_privacidad?: boolean
    observaciones?: boolean
    fecha_solicitud?: boolean
    fecha_activacion?: boolean
    updated_at?: boolean
    comprador?: boolean | compradoresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solicitudes"]>

  export type solicitudesSelectScalar = {
    id?: boolean
    comprador_id?: boolean
    tipo?: boolean
    status?: boolean
    numero_a_portar?: boolean
    nip_portabilidad?: boolean
    numero_telefono?: boolean
    iccid?: boolean
    curp?: boolean
    imei2?: boolean
    numero_contacto?: boolean
    numero_oficina?: boolean
    numero_trabajo?: boolean
    numero_casa?: boolean
    acepta_privacidad?: boolean
    observaciones?: boolean
    fecha_solicitud?: boolean
    fecha_activacion?: boolean
    updated_at?: boolean
  }

  export type solicitudesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "comprador_id" | "tipo" | "status" | "numero_a_portar" | "nip_portabilidad" | "numero_telefono" | "iccid" | "curp" | "imei2" | "numero_contacto" | "numero_oficina" | "numero_trabajo" | "numero_casa" | "acepta_privacidad" | "observaciones" | "fecha_solicitud" | "fecha_activacion" | "updated_at", ExtArgs["result"]["solicitudes"]>
  export type solicitudesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comprador?: boolean | compradoresDefaultArgs<ExtArgs>
    referencias?: boolean | solicitudes$referenciasArgs<ExtArgs>
    documentos?: boolean | solicitudes$documentosArgs<ExtArgs>
    pagos?: boolean | solicitudes$pagosArgs<ExtArgs>
    _count?: boolean | SolicitudesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type solicitudesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comprador?: boolean | compradoresDefaultArgs<ExtArgs>
  }
  export type solicitudesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comprador?: boolean | compradoresDefaultArgs<ExtArgs>
  }

  export type $solicitudesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "solicitudes"
    objects: {
      comprador: Prisma.$compradoresPayload<ExtArgs>
      referencias: Prisma.$solicitud_referenciasPayload<ExtArgs>[]
      documentos: Prisma.$solicitud_documentosPayload<ExtArgs>[]
      pagos: Prisma.$pagosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      comprador_id: string
      tipo: string
      status: string
      numero_a_portar: string | null
      nip_portabilidad: string | null
      numero_telefono: string | null
      iccid: string | null
      curp: string | null
      imei2: string | null
      numero_contacto: string | null
      numero_oficina: string | null
      numero_trabajo: string | null
      numero_casa: string | null
      acepta_privacidad: boolean
      observaciones: string | null
      fecha_solicitud: Date
      fecha_activacion: Date | null
      updated_at: Date
    }, ExtArgs["result"]["solicitudes"]>
    composites: {}
  }

  type solicitudesGetPayload<S extends boolean | null | undefined | solicitudesDefaultArgs> = $Result.GetResult<Prisma.$solicitudesPayload, S>

  type solicitudesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<solicitudesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SolicitudesCountAggregateInputType | true
    }

  export interface solicitudesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['solicitudes'], meta: { name: 'solicitudes' } }
    /**
     * Find zero or one Solicitudes that matches the filter.
     * @param {solicitudesFindUniqueArgs} args - Arguments to find a Solicitudes
     * @example
     * // Get one Solicitudes
     * const solicitudes = await prisma.solicitudes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends solicitudesFindUniqueArgs>(args: SelectSubset<T, solicitudesFindUniqueArgs<ExtArgs>>): Prisma__solicitudesClient<$Result.GetResult<Prisma.$solicitudesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Solicitudes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {solicitudesFindUniqueOrThrowArgs} args - Arguments to find a Solicitudes
     * @example
     * // Get one Solicitudes
     * const solicitudes = await prisma.solicitudes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends solicitudesFindUniqueOrThrowArgs>(args: SelectSubset<T, solicitudesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__solicitudesClient<$Result.GetResult<Prisma.$solicitudesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Solicitudes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solicitudesFindFirstArgs} args - Arguments to find a Solicitudes
     * @example
     * // Get one Solicitudes
     * const solicitudes = await prisma.solicitudes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends solicitudesFindFirstArgs>(args?: SelectSubset<T, solicitudesFindFirstArgs<ExtArgs>>): Prisma__solicitudesClient<$Result.GetResult<Prisma.$solicitudesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Solicitudes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solicitudesFindFirstOrThrowArgs} args - Arguments to find a Solicitudes
     * @example
     * // Get one Solicitudes
     * const solicitudes = await prisma.solicitudes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends solicitudesFindFirstOrThrowArgs>(args?: SelectSubset<T, solicitudesFindFirstOrThrowArgs<ExtArgs>>): Prisma__solicitudesClient<$Result.GetResult<Prisma.$solicitudesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Solicitudes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solicitudesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Solicitudes
     * const solicitudes = await prisma.solicitudes.findMany()
     * 
     * // Get first 10 Solicitudes
     * const solicitudes = await prisma.solicitudes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const solicitudesWithIdOnly = await prisma.solicitudes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends solicitudesFindManyArgs>(args?: SelectSubset<T, solicitudesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$solicitudesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Solicitudes.
     * @param {solicitudesCreateArgs} args - Arguments to create a Solicitudes.
     * @example
     * // Create one Solicitudes
     * const Solicitudes = await prisma.solicitudes.create({
     *   data: {
     *     // ... data to create a Solicitudes
     *   }
     * })
     * 
     */
    create<T extends solicitudesCreateArgs>(args: SelectSubset<T, solicitudesCreateArgs<ExtArgs>>): Prisma__solicitudesClient<$Result.GetResult<Prisma.$solicitudesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Solicitudes.
     * @param {solicitudesCreateManyArgs} args - Arguments to create many Solicitudes.
     * @example
     * // Create many Solicitudes
     * const solicitudes = await prisma.solicitudes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends solicitudesCreateManyArgs>(args?: SelectSubset<T, solicitudesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Solicitudes and returns the data saved in the database.
     * @param {solicitudesCreateManyAndReturnArgs} args - Arguments to create many Solicitudes.
     * @example
     * // Create many Solicitudes
     * const solicitudes = await prisma.solicitudes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Solicitudes and only return the `id`
     * const solicitudesWithIdOnly = await prisma.solicitudes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends solicitudesCreateManyAndReturnArgs>(args?: SelectSubset<T, solicitudesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$solicitudesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Solicitudes.
     * @param {solicitudesDeleteArgs} args - Arguments to delete one Solicitudes.
     * @example
     * // Delete one Solicitudes
     * const Solicitudes = await prisma.solicitudes.delete({
     *   where: {
     *     // ... filter to delete one Solicitudes
     *   }
     * })
     * 
     */
    delete<T extends solicitudesDeleteArgs>(args: SelectSubset<T, solicitudesDeleteArgs<ExtArgs>>): Prisma__solicitudesClient<$Result.GetResult<Prisma.$solicitudesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Solicitudes.
     * @param {solicitudesUpdateArgs} args - Arguments to update one Solicitudes.
     * @example
     * // Update one Solicitudes
     * const solicitudes = await prisma.solicitudes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends solicitudesUpdateArgs>(args: SelectSubset<T, solicitudesUpdateArgs<ExtArgs>>): Prisma__solicitudesClient<$Result.GetResult<Prisma.$solicitudesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Solicitudes.
     * @param {solicitudesDeleteManyArgs} args - Arguments to filter Solicitudes to delete.
     * @example
     * // Delete a few Solicitudes
     * const { count } = await prisma.solicitudes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends solicitudesDeleteManyArgs>(args?: SelectSubset<T, solicitudesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Solicitudes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solicitudesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Solicitudes
     * const solicitudes = await prisma.solicitudes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends solicitudesUpdateManyArgs>(args: SelectSubset<T, solicitudesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Solicitudes and returns the data updated in the database.
     * @param {solicitudesUpdateManyAndReturnArgs} args - Arguments to update many Solicitudes.
     * @example
     * // Update many Solicitudes
     * const solicitudes = await prisma.solicitudes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Solicitudes and only return the `id`
     * const solicitudesWithIdOnly = await prisma.solicitudes.updateManyAndReturn({
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
    updateManyAndReturn<T extends solicitudesUpdateManyAndReturnArgs>(args: SelectSubset<T, solicitudesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$solicitudesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Solicitudes.
     * @param {solicitudesUpsertArgs} args - Arguments to update or create a Solicitudes.
     * @example
     * // Update or create a Solicitudes
     * const solicitudes = await prisma.solicitudes.upsert({
     *   create: {
     *     // ... data to create a Solicitudes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Solicitudes we want to update
     *   }
     * })
     */
    upsert<T extends solicitudesUpsertArgs>(args: SelectSubset<T, solicitudesUpsertArgs<ExtArgs>>): Prisma__solicitudesClient<$Result.GetResult<Prisma.$solicitudesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Solicitudes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solicitudesCountArgs} args - Arguments to filter Solicitudes to count.
     * @example
     * // Count the number of Solicitudes
     * const count = await prisma.solicitudes.count({
     *   where: {
     *     // ... the filter for the Solicitudes we want to count
     *   }
     * })
    **/
    count<T extends solicitudesCountArgs>(
      args?: Subset<T, solicitudesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SolicitudesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Solicitudes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SolicitudesAggregateArgs>(args: Subset<T, SolicitudesAggregateArgs>): Prisma.PrismaPromise<GetSolicitudesAggregateType<T>>

    /**
     * Group by Solicitudes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solicitudesGroupByArgs} args - Group by arguments.
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
      T extends solicitudesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: solicitudesGroupByArgs['orderBy'] }
        : { orderBy?: solicitudesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, solicitudesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSolicitudesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the solicitudes model
   */
  readonly fields: solicitudesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for solicitudes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__solicitudesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comprador<T extends compradoresDefaultArgs<ExtArgs> = {}>(args?: Subset<T, compradoresDefaultArgs<ExtArgs>>): Prisma__compradoresClient<$Result.GetResult<Prisma.$compradoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    referencias<T extends solicitudes$referenciasArgs<ExtArgs> = {}>(args?: Subset<T, solicitudes$referenciasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$solicitud_referenciasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documentos<T extends solicitudes$documentosArgs<ExtArgs> = {}>(args?: Subset<T, solicitudes$documentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$solicitud_documentosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pagos<T extends solicitudes$pagosArgs<ExtArgs> = {}>(args?: Subset<T, solicitudes$pagosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the solicitudes model
   */
  interface solicitudesFieldRefs {
    readonly id: FieldRef<"solicitudes", 'String'>
    readonly comprador_id: FieldRef<"solicitudes", 'String'>
    readonly tipo: FieldRef<"solicitudes", 'String'>
    readonly status: FieldRef<"solicitudes", 'String'>
    readonly numero_a_portar: FieldRef<"solicitudes", 'String'>
    readonly nip_portabilidad: FieldRef<"solicitudes", 'String'>
    readonly numero_telefono: FieldRef<"solicitudes", 'String'>
    readonly iccid: FieldRef<"solicitudes", 'String'>
    readonly curp: FieldRef<"solicitudes", 'String'>
    readonly imei2: FieldRef<"solicitudes", 'String'>
    readonly numero_contacto: FieldRef<"solicitudes", 'String'>
    readonly numero_oficina: FieldRef<"solicitudes", 'String'>
    readonly numero_trabajo: FieldRef<"solicitudes", 'String'>
    readonly numero_casa: FieldRef<"solicitudes", 'String'>
    readonly acepta_privacidad: FieldRef<"solicitudes", 'Boolean'>
    readonly observaciones: FieldRef<"solicitudes", 'String'>
    readonly fecha_solicitud: FieldRef<"solicitudes", 'DateTime'>
    readonly fecha_activacion: FieldRef<"solicitudes", 'DateTime'>
    readonly updated_at: FieldRef<"solicitudes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * solicitudes findUnique
   */
  export type solicitudesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitudes
     */
    select?: solicitudesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solicitudes
     */
    omit?: solicitudesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitudesInclude<ExtArgs> | null
    /**
     * Filter, which solicitudes to fetch.
     */
    where: solicitudesWhereUniqueInput
  }

  /**
   * solicitudes findUniqueOrThrow
   */
  export type solicitudesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitudes
     */
    select?: solicitudesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solicitudes
     */
    omit?: solicitudesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitudesInclude<ExtArgs> | null
    /**
     * Filter, which solicitudes to fetch.
     */
    where: solicitudesWhereUniqueInput
  }

  /**
   * solicitudes findFirst
   */
  export type solicitudesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitudes
     */
    select?: solicitudesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solicitudes
     */
    omit?: solicitudesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitudesInclude<ExtArgs> | null
    /**
     * Filter, which solicitudes to fetch.
     */
    where?: solicitudesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of solicitudes to fetch.
     */
    orderBy?: solicitudesOrderByWithRelationInput | solicitudesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for solicitudes.
     */
    cursor?: solicitudesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` solicitudes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` solicitudes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of solicitudes.
     */
    distinct?: SolicitudesScalarFieldEnum | SolicitudesScalarFieldEnum[]
  }

  /**
   * solicitudes findFirstOrThrow
   */
  export type solicitudesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitudes
     */
    select?: solicitudesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solicitudes
     */
    omit?: solicitudesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitudesInclude<ExtArgs> | null
    /**
     * Filter, which solicitudes to fetch.
     */
    where?: solicitudesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of solicitudes to fetch.
     */
    orderBy?: solicitudesOrderByWithRelationInput | solicitudesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for solicitudes.
     */
    cursor?: solicitudesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` solicitudes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` solicitudes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of solicitudes.
     */
    distinct?: SolicitudesScalarFieldEnum | SolicitudesScalarFieldEnum[]
  }

  /**
   * solicitudes findMany
   */
  export type solicitudesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitudes
     */
    select?: solicitudesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solicitudes
     */
    omit?: solicitudesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitudesInclude<ExtArgs> | null
    /**
     * Filter, which solicitudes to fetch.
     */
    where?: solicitudesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of solicitudes to fetch.
     */
    orderBy?: solicitudesOrderByWithRelationInput | solicitudesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing solicitudes.
     */
    cursor?: solicitudesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` solicitudes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` solicitudes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of solicitudes.
     */
    distinct?: SolicitudesScalarFieldEnum | SolicitudesScalarFieldEnum[]
  }

  /**
   * solicitudes create
   */
  export type solicitudesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitudes
     */
    select?: solicitudesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solicitudes
     */
    omit?: solicitudesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitudesInclude<ExtArgs> | null
    /**
     * The data needed to create a solicitudes.
     */
    data: XOR<solicitudesCreateInput, solicitudesUncheckedCreateInput>
  }

  /**
   * solicitudes createMany
   */
  export type solicitudesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many solicitudes.
     */
    data: solicitudesCreateManyInput | solicitudesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * solicitudes createManyAndReturn
   */
  export type solicitudesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitudes
     */
    select?: solicitudesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the solicitudes
     */
    omit?: solicitudesOmit<ExtArgs> | null
    /**
     * The data used to create many solicitudes.
     */
    data: solicitudesCreateManyInput | solicitudesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitudesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * solicitudes update
   */
  export type solicitudesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitudes
     */
    select?: solicitudesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solicitudes
     */
    omit?: solicitudesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitudesInclude<ExtArgs> | null
    /**
     * The data needed to update a solicitudes.
     */
    data: XOR<solicitudesUpdateInput, solicitudesUncheckedUpdateInput>
    /**
     * Choose, which solicitudes to update.
     */
    where: solicitudesWhereUniqueInput
  }

  /**
   * solicitudes updateMany
   */
  export type solicitudesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update solicitudes.
     */
    data: XOR<solicitudesUpdateManyMutationInput, solicitudesUncheckedUpdateManyInput>
    /**
     * Filter which solicitudes to update
     */
    where?: solicitudesWhereInput
    /**
     * Limit how many solicitudes to update.
     */
    limit?: number
  }

  /**
   * solicitudes updateManyAndReturn
   */
  export type solicitudesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitudes
     */
    select?: solicitudesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the solicitudes
     */
    omit?: solicitudesOmit<ExtArgs> | null
    /**
     * The data used to update solicitudes.
     */
    data: XOR<solicitudesUpdateManyMutationInput, solicitudesUncheckedUpdateManyInput>
    /**
     * Filter which solicitudes to update
     */
    where?: solicitudesWhereInput
    /**
     * Limit how many solicitudes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitudesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * solicitudes upsert
   */
  export type solicitudesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitudes
     */
    select?: solicitudesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solicitudes
     */
    omit?: solicitudesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitudesInclude<ExtArgs> | null
    /**
     * The filter to search for the solicitudes to update in case it exists.
     */
    where: solicitudesWhereUniqueInput
    /**
     * In case the solicitudes found by the `where` argument doesn't exist, create a new solicitudes with this data.
     */
    create: XOR<solicitudesCreateInput, solicitudesUncheckedCreateInput>
    /**
     * In case the solicitudes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<solicitudesUpdateInput, solicitudesUncheckedUpdateInput>
  }

  /**
   * solicitudes delete
   */
  export type solicitudesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitudes
     */
    select?: solicitudesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solicitudes
     */
    omit?: solicitudesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitudesInclude<ExtArgs> | null
    /**
     * Filter which solicitudes to delete.
     */
    where: solicitudesWhereUniqueInput
  }

  /**
   * solicitudes deleteMany
   */
  export type solicitudesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which solicitudes to delete
     */
    where?: solicitudesWhereInput
    /**
     * Limit how many solicitudes to delete.
     */
    limit?: number
  }

  /**
   * solicitudes.referencias
   */
  export type solicitudes$referenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_referencias
     */
    select?: solicitud_referenciasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solicitud_referencias
     */
    omit?: solicitud_referenciasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitud_referenciasInclude<ExtArgs> | null
    where?: solicitud_referenciasWhereInput
    orderBy?: solicitud_referenciasOrderByWithRelationInput | solicitud_referenciasOrderByWithRelationInput[]
    cursor?: solicitud_referenciasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Solicitud_referenciasScalarFieldEnum | Solicitud_referenciasScalarFieldEnum[]
  }

  /**
   * solicitudes.documentos
   */
  export type solicitudes$documentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_documentos
     */
    select?: solicitud_documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solicitud_documentos
     */
    omit?: solicitud_documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitud_documentosInclude<ExtArgs> | null
    where?: solicitud_documentosWhereInput
    orderBy?: solicitud_documentosOrderByWithRelationInput | solicitud_documentosOrderByWithRelationInput[]
    cursor?: solicitud_documentosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Solicitud_documentosScalarFieldEnum | Solicitud_documentosScalarFieldEnum[]
  }

  /**
   * solicitudes.pagos
   */
  export type solicitudes$pagosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    where?: pagosWhereInput
    orderBy?: pagosOrderByWithRelationInput | pagosOrderByWithRelationInput[]
    cursor?: pagosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagosScalarFieldEnum | PagosScalarFieldEnum[]
  }

  /**
   * solicitudes without action
   */
  export type solicitudesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitudes
     */
    select?: solicitudesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solicitudes
     */
    omit?: solicitudesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitudesInclude<ExtArgs> | null
  }


  /**
   * Model solicitud_referencias
   */

  export type AggregateSolicitud_referencias = {
    _count: Solicitud_referenciasCountAggregateOutputType | null
    _min: Solicitud_referenciasMinAggregateOutputType | null
    _max: Solicitud_referenciasMaxAggregateOutputType | null
  }

  export type Solicitud_referenciasMinAggregateOutputType = {
    id: string | null
    solicitud_id: string | null
    nombre: string | null
    primer_apellido: string | null
    celular: string | null
  }

  export type Solicitud_referenciasMaxAggregateOutputType = {
    id: string | null
    solicitud_id: string | null
    nombre: string | null
    primer_apellido: string | null
    celular: string | null
  }

  export type Solicitud_referenciasCountAggregateOutputType = {
    id: number
    solicitud_id: number
    nombre: number
    primer_apellido: number
    celular: number
    _all: number
  }


  export type Solicitud_referenciasMinAggregateInputType = {
    id?: true
    solicitud_id?: true
    nombre?: true
    primer_apellido?: true
    celular?: true
  }

  export type Solicitud_referenciasMaxAggregateInputType = {
    id?: true
    solicitud_id?: true
    nombre?: true
    primer_apellido?: true
    celular?: true
  }

  export type Solicitud_referenciasCountAggregateInputType = {
    id?: true
    solicitud_id?: true
    nombre?: true
    primer_apellido?: true
    celular?: true
    _all?: true
  }

  export type Solicitud_referenciasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which solicitud_referencias to aggregate.
     */
    where?: solicitud_referenciasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of solicitud_referencias to fetch.
     */
    orderBy?: solicitud_referenciasOrderByWithRelationInput | solicitud_referenciasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: solicitud_referenciasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` solicitud_referencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` solicitud_referencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned solicitud_referencias
    **/
    _count?: true | Solicitud_referenciasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Solicitud_referenciasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Solicitud_referenciasMaxAggregateInputType
  }

  export type GetSolicitud_referenciasAggregateType<T extends Solicitud_referenciasAggregateArgs> = {
        [P in keyof T & keyof AggregateSolicitud_referencias]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSolicitud_referencias[P]>
      : GetScalarType<T[P], AggregateSolicitud_referencias[P]>
  }




  export type solicitud_referenciasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: solicitud_referenciasWhereInput
    orderBy?: solicitud_referenciasOrderByWithAggregationInput | solicitud_referenciasOrderByWithAggregationInput[]
    by: Solicitud_referenciasScalarFieldEnum[] | Solicitud_referenciasScalarFieldEnum
    having?: solicitud_referenciasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Solicitud_referenciasCountAggregateInputType | true
    _min?: Solicitud_referenciasMinAggregateInputType
    _max?: Solicitud_referenciasMaxAggregateInputType
  }

  export type Solicitud_referenciasGroupByOutputType = {
    id: string
    solicitud_id: string
    nombre: string
    primer_apellido: string
    celular: string
    _count: Solicitud_referenciasCountAggregateOutputType | null
    _min: Solicitud_referenciasMinAggregateOutputType | null
    _max: Solicitud_referenciasMaxAggregateOutputType | null
  }

  type GetSolicitud_referenciasGroupByPayload<T extends solicitud_referenciasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Solicitud_referenciasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Solicitud_referenciasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Solicitud_referenciasGroupByOutputType[P]>
            : GetScalarType<T[P], Solicitud_referenciasGroupByOutputType[P]>
        }
      >
    >


  export type solicitud_referenciasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    solicitud_id?: boolean
    nombre?: boolean
    primer_apellido?: boolean
    celular?: boolean
    solicitud?: boolean | solicitudesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solicitud_referencias"]>

  export type solicitud_referenciasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    solicitud_id?: boolean
    nombre?: boolean
    primer_apellido?: boolean
    celular?: boolean
    solicitud?: boolean | solicitudesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solicitud_referencias"]>

  export type solicitud_referenciasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    solicitud_id?: boolean
    nombre?: boolean
    primer_apellido?: boolean
    celular?: boolean
    solicitud?: boolean | solicitudesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solicitud_referencias"]>

  export type solicitud_referenciasSelectScalar = {
    id?: boolean
    solicitud_id?: boolean
    nombre?: boolean
    primer_apellido?: boolean
    celular?: boolean
  }

  export type solicitud_referenciasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "solicitud_id" | "nombre" | "primer_apellido" | "celular", ExtArgs["result"]["solicitud_referencias"]>
  export type solicitud_referenciasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solicitud?: boolean | solicitudesDefaultArgs<ExtArgs>
  }
  export type solicitud_referenciasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solicitud?: boolean | solicitudesDefaultArgs<ExtArgs>
  }
  export type solicitud_referenciasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solicitud?: boolean | solicitudesDefaultArgs<ExtArgs>
  }

  export type $solicitud_referenciasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "solicitud_referencias"
    objects: {
      solicitud: Prisma.$solicitudesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      solicitud_id: string
      nombre: string
      primer_apellido: string
      celular: string
    }, ExtArgs["result"]["solicitud_referencias"]>
    composites: {}
  }

  type solicitud_referenciasGetPayload<S extends boolean | null | undefined | solicitud_referenciasDefaultArgs> = $Result.GetResult<Prisma.$solicitud_referenciasPayload, S>

  type solicitud_referenciasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<solicitud_referenciasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Solicitud_referenciasCountAggregateInputType | true
    }

  export interface solicitud_referenciasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['solicitud_referencias'], meta: { name: 'solicitud_referencias' } }
    /**
     * Find zero or one Solicitud_referencias that matches the filter.
     * @param {solicitud_referenciasFindUniqueArgs} args - Arguments to find a Solicitud_referencias
     * @example
     * // Get one Solicitud_referencias
     * const solicitud_referencias = await prisma.solicitud_referencias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends solicitud_referenciasFindUniqueArgs>(args: SelectSubset<T, solicitud_referenciasFindUniqueArgs<ExtArgs>>): Prisma__solicitud_referenciasClient<$Result.GetResult<Prisma.$solicitud_referenciasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Solicitud_referencias that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {solicitud_referenciasFindUniqueOrThrowArgs} args - Arguments to find a Solicitud_referencias
     * @example
     * // Get one Solicitud_referencias
     * const solicitud_referencias = await prisma.solicitud_referencias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends solicitud_referenciasFindUniqueOrThrowArgs>(args: SelectSubset<T, solicitud_referenciasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__solicitud_referenciasClient<$Result.GetResult<Prisma.$solicitud_referenciasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Solicitud_referencias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solicitud_referenciasFindFirstArgs} args - Arguments to find a Solicitud_referencias
     * @example
     * // Get one Solicitud_referencias
     * const solicitud_referencias = await prisma.solicitud_referencias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends solicitud_referenciasFindFirstArgs>(args?: SelectSubset<T, solicitud_referenciasFindFirstArgs<ExtArgs>>): Prisma__solicitud_referenciasClient<$Result.GetResult<Prisma.$solicitud_referenciasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Solicitud_referencias that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solicitud_referenciasFindFirstOrThrowArgs} args - Arguments to find a Solicitud_referencias
     * @example
     * // Get one Solicitud_referencias
     * const solicitud_referencias = await prisma.solicitud_referencias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends solicitud_referenciasFindFirstOrThrowArgs>(args?: SelectSubset<T, solicitud_referenciasFindFirstOrThrowArgs<ExtArgs>>): Prisma__solicitud_referenciasClient<$Result.GetResult<Prisma.$solicitud_referenciasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Solicitud_referencias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solicitud_referenciasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Solicitud_referencias
     * const solicitud_referencias = await prisma.solicitud_referencias.findMany()
     * 
     * // Get first 10 Solicitud_referencias
     * const solicitud_referencias = await prisma.solicitud_referencias.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const solicitud_referenciasWithIdOnly = await prisma.solicitud_referencias.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends solicitud_referenciasFindManyArgs>(args?: SelectSubset<T, solicitud_referenciasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$solicitud_referenciasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Solicitud_referencias.
     * @param {solicitud_referenciasCreateArgs} args - Arguments to create a Solicitud_referencias.
     * @example
     * // Create one Solicitud_referencias
     * const Solicitud_referencias = await prisma.solicitud_referencias.create({
     *   data: {
     *     // ... data to create a Solicitud_referencias
     *   }
     * })
     * 
     */
    create<T extends solicitud_referenciasCreateArgs>(args: SelectSubset<T, solicitud_referenciasCreateArgs<ExtArgs>>): Prisma__solicitud_referenciasClient<$Result.GetResult<Prisma.$solicitud_referenciasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Solicitud_referencias.
     * @param {solicitud_referenciasCreateManyArgs} args - Arguments to create many Solicitud_referencias.
     * @example
     * // Create many Solicitud_referencias
     * const solicitud_referencias = await prisma.solicitud_referencias.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends solicitud_referenciasCreateManyArgs>(args?: SelectSubset<T, solicitud_referenciasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Solicitud_referencias and returns the data saved in the database.
     * @param {solicitud_referenciasCreateManyAndReturnArgs} args - Arguments to create many Solicitud_referencias.
     * @example
     * // Create many Solicitud_referencias
     * const solicitud_referencias = await prisma.solicitud_referencias.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Solicitud_referencias and only return the `id`
     * const solicitud_referenciasWithIdOnly = await prisma.solicitud_referencias.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends solicitud_referenciasCreateManyAndReturnArgs>(args?: SelectSubset<T, solicitud_referenciasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$solicitud_referenciasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Solicitud_referencias.
     * @param {solicitud_referenciasDeleteArgs} args - Arguments to delete one Solicitud_referencias.
     * @example
     * // Delete one Solicitud_referencias
     * const Solicitud_referencias = await prisma.solicitud_referencias.delete({
     *   where: {
     *     // ... filter to delete one Solicitud_referencias
     *   }
     * })
     * 
     */
    delete<T extends solicitud_referenciasDeleteArgs>(args: SelectSubset<T, solicitud_referenciasDeleteArgs<ExtArgs>>): Prisma__solicitud_referenciasClient<$Result.GetResult<Prisma.$solicitud_referenciasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Solicitud_referencias.
     * @param {solicitud_referenciasUpdateArgs} args - Arguments to update one Solicitud_referencias.
     * @example
     * // Update one Solicitud_referencias
     * const solicitud_referencias = await prisma.solicitud_referencias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends solicitud_referenciasUpdateArgs>(args: SelectSubset<T, solicitud_referenciasUpdateArgs<ExtArgs>>): Prisma__solicitud_referenciasClient<$Result.GetResult<Prisma.$solicitud_referenciasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Solicitud_referencias.
     * @param {solicitud_referenciasDeleteManyArgs} args - Arguments to filter Solicitud_referencias to delete.
     * @example
     * // Delete a few Solicitud_referencias
     * const { count } = await prisma.solicitud_referencias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends solicitud_referenciasDeleteManyArgs>(args?: SelectSubset<T, solicitud_referenciasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Solicitud_referencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solicitud_referenciasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Solicitud_referencias
     * const solicitud_referencias = await prisma.solicitud_referencias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends solicitud_referenciasUpdateManyArgs>(args: SelectSubset<T, solicitud_referenciasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Solicitud_referencias and returns the data updated in the database.
     * @param {solicitud_referenciasUpdateManyAndReturnArgs} args - Arguments to update many Solicitud_referencias.
     * @example
     * // Update many Solicitud_referencias
     * const solicitud_referencias = await prisma.solicitud_referencias.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Solicitud_referencias and only return the `id`
     * const solicitud_referenciasWithIdOnly = await prisma.solicitud_referencias.updateManyAndReturn({
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
    updateManyAndReturn<T extends solicitud_referenciasUpdateManyAndReturnArgs>(args: SelectSubset<T, solicitud_referenciasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$solicitud_referenciasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Solicitud_referencias.
     * @param {solicitud_referenciasUpsertArgs} args - Arguments to update or create a Solicitud_referencias.
     * @example
     * // Update or create a Solicitud_referencias
     * const solicitud_referencias = await prisma.solicitud_referencias.upsert({
     *   create: {
     *     // ... data to create a Solicitud_referencias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Solicitud_referencias we want to update
     *   }
     * })
     */
    upsert<T extends solicitud_referenciasUpsertArgs>(args: SelectSubset<T, solicitud_referenciasUpsertArgs<ExtArgs>>): Prisma__solicitud_referenciasClient<$Result.GetResult<Prisma.$solicitud_referenciasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Solicitud_referencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solicitud_referenciasCountArgs} args - Arguments to filter Solicitud_referencias to count.
     * @example
     * // Count the number of Solicitud_referencias
     * const count = await prisma.solicitud_referencias.count({
     *   where: {
     *     // ... the filter for the Solicitud_referencias we want to count
     *   }
     * })
    **/
    count<T extends solicitud_referenciasCountArgs>(
      args?: Subset<T, solicitud_referenciasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Solicitud_referenciasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Solicitud_referencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Solicitud_referenciasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Solicitud_referenciasAggregateArgs>(args: Subset<T, Solicitud_referenciasAggregateArgs>): Prisma.PrismaPromise<GetSolicitud_referenciasAggregateType<T>>

    /**
     * Group by Solicitud_referencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solicitud_referenciasGroupByArgs} args - Group by arguments.
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
      T extends solicitud_referenciasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: solicitud_referenciasGroupByArgs['orderBy'] }
        : { orderBy?: solicitud_referenciasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, solicitud_referenciasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSolicitud_referenciasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the solicitud_referencias model
   */
  readonly fields: solicitud_referenciasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for solicitud_referencias.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__solicitud_referenciasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    solicitud<T extends solicitudesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, solicitudesDefaultArgs<ExtArgs>>): Prisma__solicitudesClient<$Result.GetResult<Prisma.$solicitudesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the solicitud_referencias model
   */
  interface solicitud_referenciasFieldRefs {
    readonly id: FieldRef<"solicitud_referencias", 'String'>
    readonly solicitud_id: FieldRef<"solicitud_referencias", 'String'>
    readonly nombre: FieldRef<"solicitud_referencias", 'String'>
    readonly primer_apellido: FieldRef<"solicitud_referencias", 'String'>
    readonly celular: FieldRef<"solicitud_referencias", 'String'>
  }
    

  // Custom InputTypes
  /**
   * solicitud_referencias findUnique
   */
  export type solicitud_referenciasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_referencias
     */
    select?: solicitud_referenciasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solicitud_referencias
     */
    omit?: solicitud_referenciasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitud_referenciasInclude<ExtArgs> | null
    /**
     * Filter, which solicitud_referencias to fetch.
     */
    where: solicitud_referenciasWhereUniqueInput
  }

  /**
   * solicitud_referencias findUniqueOrThrow
   */
  export type solicitud_referenciasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_referencias
     */
    select?: solicitud_referenciasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solicitud_referencias
     */
    omit?: solicitud_referenciasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitud_referenciasInclude<ExtArgs> | null
    /**
     * Filter, which solicitud_referencias to fetch.
     */
    where: solicitud_referenciasWhereUniqueInput
  }

  /**
   * solicitud_referencias findFirst
   */
  export type solicitud_referenciasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_referencias
     */
    select?: solicitud_referenciasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solicitud_referencias
     */
    omit?: solicitud_referenciasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitud_referenciasInclude<ExtArgs> | null
    /**
     * Filter, which solicitud_referencias to fetch.
     */
    where?: solicitud_referenciasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of solicitud_referencias to fetch.
     */
    orderBy?: solicitud_referenciasOrderByWithRelationInput | solicitud_referenciasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for solicitud_referencias.
     */
    cursor?: solicitud_referenciasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` solicitud_referencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` solicitud_referencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of solicitud_referencias.
     */
    distinct?: Solicitud_referenciasScalarFieldEnum | Solicitud_referenciasScalarFieldEnum[]
  }

  /**
   * solicitud_referencias findFirstOrThrow
   */
  export type solicitud_referenciasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_referencias
     */
    select?: solicitud_referenciasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solicitud_referencias
     */
    omit?: solicitud_referenciasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitud_referenciasInclude<ExtArgs> | null
    /**
     * Filter, which solicitud_referencias to fetch.
     */
    where?: solicitud_referenciasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of solicitud_referencias to fetch.
     */
    orderBy?: solicitud_referenciasOrderByWithRelationInput | solicitud_referenciasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for solicitud_referencias.
     */
    cursor?: solicitud_referenciasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` solicitud_referencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` solicitud_referencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of solicitud_referencias.
     */
    distinct?: Solicitud_referenciasScalarFieldEnum | Solicitud_referenciasScalarFieldEnum[]
  }

  /**
   * solicitud_referencias findMany
   */
  export type solicitud_referenciasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_referencias
     */
    select?: solicitud_referenciasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solicitud_referencias
     */
    omit?: solicitud_referenciasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitud_referenciasInclude<ExtArgs> | null
    /**
     * Filter, which solicitud_referencias to fetch.
     */
    where?: solicitud_referenciasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of solicitud_referencias to fetch.
     */
    orderBy?: solicitud_referenciasOrderByWithRelationInput | solicitud_referenciasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing solicitud_referencias.
     */
    cursor?: solicitud_referenciasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` solicitud_referencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` solicitud_referencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of solicitud_referencias.
     */
    distinct?: Solicitud_referenciasScalarFieldEnum | Solicitud_referenciasScalarFieldEnum[]
  }

  /**
   * solicitud_referencias create
   */
  export type solicitud_referenciasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_referencias
     */
    select?: solicitud_referenciasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solicitud_referencias
     */
    omit?: solicitud_referenciasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitud_referenciasInclude<ExtArgs> | null
    /**
     * The data needed to create a solicitud_referencias.
     */
    data: XOR<solicitud_referenciasCreateInput, solicitud_referenciasUncheckedCreateInput>
  }

  /**
   * solicitud_referencias createMany
   */
  export type solicitud_referenciasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many solicitud_referencias.
     */
    data: solicitud_referenciasCreateManyInput | solicitud_referenciasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * solicitud_referencias createManyAndReturn
   */
  export type solicitud_referenciasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_referencias
     */
    select?: solicitud_referenciasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the solicitud_referencias
     */
    omit?: solicitud_referenciasOmit<ExtArgs> | null
    /**
     * The data used to create many solicitud_referencias.
     */
    data: solicitud_referenciasCreateManyInput | solicitud_referenciasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitud_referenciasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * solicitud_referencias update
   */
  export type solicitud_referenciasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_referencias
     */
    select?: solicitud_referenciasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solicitud_referencias
     */
    omit?: solicitud_referenciasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitud_referenciasInclude<ExtArgs> | null
    /**
     * The data needed to update a solicitud_referencias.
     */
    data: XOR<solicitud_referenciasUpdateInput, solicitud_referenciasUncheckedUpdateInput>
    /**
     * Choose, which solicitud_referencias to update.
     */
    where: solicitud_referenciasWhereUniqueInput
  }

  /**
   * solicitud_referencias updateMany
   */
  export type solicitud_referenciasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update solicitud_referencias.
     */
    data: XOR<solicitud_referenciasUpdateManyMutationInput, solicitud_referenciasUncheckedUpdateManyInput>
    /**
     * Filter which solicitud_referencias to update
     */
    where?: solicitud_referenciasWhereInput
    /**
     * Limit how many solicitud_referencias to update.
     */
    limit?: number
  }

  /**
   * solicitud_referencias updateManyAndReturn
   */
  export type solicitud_referenciasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_referencias
     */
    select?: solicitud_referenciasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the solicitud_referencias
     */
    omit?: solicitud_referenciasOmit<ExtArgs> | null
    /**
     * The data used to update solicitud_referencias.
     */
    data: XOR<solicitud_referenciasUpdateManyMutationInput, solicitud_referenciasUncheckedUpdateManyInput>
    /**
     * Filter which solicitud_referencias to update
     */
    where?: solicitud_referenciasWhereInput
    /**
     * Limit how many solicitud_referencias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitud_referenciasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * solicitud_referencias upsert
   */
  export type solicitud_referenciasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_referencias
     */
    select?: solicitud_referenciasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solicitud_referencias
     */
    omit?: solicitud_referenciasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitud_referenciasInclude<ExtArgs> | null
    /**
     * The filter to search for the solicitud_referencias to update in case it exists.
     */
    where: solicitud_referenciasWhereUniqueInput
    /**
     * In case the solicitud_referencias found by the `where` argument doesn't exist, create a new solicitud_referencias with this data.
     */
    create: XOR<solicitud_referenciasCreateInput, solicitud_referenciasUncheckedCreateInput>
    /**
     * In case the solicitud_referencias was found with the provided `where` argument, update it with this data.
     */
    update: XOR<solicitud_referenciasUpdateInput, solicitud_referenciasUncheckedUpdateInput>
  }

  /**
   * solicitud_referencias delete
   */
  export type solicitud_referenciasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_referencias
     */
    select?: solicitud_referenciasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solicitud_referencias
     */
    omit?: solicitud_referenciasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitud_referenciasInclude<ExtArgs> | null
    /**
     * Filter which solicitud_referencias to delete.
     */
    where: solicitud_referenciasWhereUniqueInput
  }

  /**
   * solicitud_referencias deleteMany
   */
  export type solicitud_referenciasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which solicitud_referencias to delete
     */
    where?: solicitud_referenciasWhereInput
    /**
     * Limit how many solicitud_referencias to delete.
     */
    limit?: number
  }

  /**
   * solicitud_referencias without action
   */
  export type solicitud_referenciasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_referencias
     */
    select?: solicitud_referenciasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solicitud_referencias
     */
    omit?: solicitud_referenciasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitud_referenciasInclude<ExtArgs> | null
  }


  /**
   * Model solicitud_documentos
   */

  export type AggregateSolicitud_documentos = {
    _count: Solicitud_documentosCountAggregateOutputType | null
    _min: Solicitud_documentosMinAggregateOutputType | null
    _max: Solicitud_documentosMaxAggregateOutputType | null
  }

  export type Solicitud_documentosMinAggregateOutputType = {
    id: string | null
    solicitud_id: string | null
    tipo: string | null
    url: string | null
    created_at: Date | null
  }

  export type Solicitud_documentosMaxAggregateOutputType = {
    id: string | null
    solicitud_id: string | null
    tipo: string | null
    url: string | null
    created_at: Date | null
  }

  export type Solicitud_documentosCountAggregateOutputType = {
    id: number
    solicitud_id: number
    tipo: number
    url: number
    created_at: number
    _all: number
  }


  export type Solicitud_documentosMinAggregateInputType = {
    id?: true
    solicitud_id?: true
    tipo?: true
    url?: true
    created_at?: true
  }

  export type Solicitud_documentosMaxAggregateInputType = {
    id?: true
    solicitud_id?: true
    tipo?: true
    url?: true
    created_at?: true
  }

  export type Solicitud_documentosCountAggregateInputType = {
    id?: true
    solicitud_id?: true
    tipo?: true
    url?: true
    created_at?: true
    _all?: true
  }

  export type Solicitud_documentosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which solicitud_documentos to aggregate.
     */
    where?: solicitud_documentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of solicitud_documentos to fetch.
     */
    orderBy?: solicitud_documentosOrderByWithRelationInput | solicitud_documentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: solicitud_documentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` solicitud_documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` solicitud_documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned solicitud_documentos
    **/
    _count?: true | Solicitud_documentosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Solicitud_documentosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Solicitud_documentosMaxAggregateInputType
  }

  export type GetSolicitud_documentosAggregateType<T extends Solicitud_documentosAggregateArgs> = {
        [P in keyof T & keyof AggregateSolicitud_documentos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSolicitud_documentos[P]>
      : GetScalarType<T[P], AggregateSolicitud_documentos[P]>
  }




  export type solicitud_documentosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: solicitud_documentosWhereInput
    orderBy?: solicitud_documentosOrderByWithAggregationInput | solicitud_documentosOrderByWithAggregationInput[]
    by: Solicitud_documentosScalarFieldEnum[] | Solicitud_documentosScalarFieldEnum
    having?: solicitud_documentosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Solicitud_documentosCountAggregateInputType | true
    _min?: Solicitud_documentosMinAggregateInputType
    _max?: Solicitud_documentosMaxAggregateInputType
  }

  export type Solicitud_documentosGroupByOutputType = {
    id: string
    solicitud_id: string
    tipo: string
    url: string
    created_at: Date
    _count: Solicitud_documentosCountAggregateOutputType | null
    _min: Solicitud_documentosMinAggregateOutputType | null
    _max: Solicitud_documentosMaxAggregateOutputType | null
  }

  type GetSolicitud_documentosGroupByPayload<T extends solicitud_documentosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Solicitud_documentosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Solicitud_documentosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Solicitud_documentosGroupByOutputType[P]>
            : GetScalarType<T[P], Solicitud_documentosGroupByOutputType[P]>
        }
      >
    >


  export type solicitud_documentosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    solicitud_id?: boolean
    tipo?: boolean
    url?: boolean
    created_at?: boolean
    solicitud?: boolean | solicitudesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solicitud_documentos"]>

  export type solicitud_documentosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    solicitud_id?: boolean
    tipo?: boolean
    url?: boolean
    created_at?: boolean
    solicitud?: boolean | solicitudesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solicitud_documentos"]>

  export type solicitud_documentosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    solicitud_id?: boolean
    tipo?: boolean
    url?: boolean
    created_at?: boolean
    solicitud?: boolean | solicitudesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solicitud_documentos"]>

  export type solicitud_documentosSelectScalar = {
    id?: boolean
    solicitud_id?: boolean
    tipo?: boolean
    url?: boolean
    created_at?: boolean
  }

  export type solicitud_documentosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "solicitud_id" | "tipo" | "url" | "created_at", ExtArgs["result"]["solicitud_documentos"]>
  export type solicitud_documentosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solicitud?: boolean | solicitudesDefaultArgs<ExtArgs>
  }
  export type solicitud_documentosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solicitud?: boolean | solicitudesDefaultArgs<ExtArgs>
  }
  export type solicitud_documentosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solicitud?: boolean | solicitudesDefaultArgs<ExtArgs>
  }

  export type $solicitud_documentosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "solicitud_documentos"
    objects: {
      solicitud: Prisma.$solicitudesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      solicitud_id: string
      tipo: string
      url: string
      created_at: Date
    }, ExtArgs["result"]["solicitud_documentos"]>
    composites: {}
  }

  type solicitud_documentosGetPayload<S extends boolean | null | undefined | solicitud_documentosDefaultArgs> = $Result.GetResult<Prisma.$solicitud_documentosPayload, S>

  type solicitud_documentosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<solicitud_documentosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Solicitud_documentosCountAggregateInputType | true
    }

  export interface solicitud_documentosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['solicitud_documentos'], meta: { name: 'solicitud_documentos' } }
    /**
     * Find zero or one Solicitud_documentos that matches the filter.
     * @param {solicitud_documentosFindUniqueArgs} args - Arguments to find a Solicitud_documentos
     * @example
     * // Get one Solicitud_documentos
     * const solicitud_documentos = await prisma.solicitud_documentos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends solicitud_documentosFindUniqueArgs>(args: SelectSubset<T, solicitud_documentosFindUniqueArgs<ExtArgs>>): Prisma__solicitud_documentosClient<$Result.GetResult<Prisma.$solicitud_documentosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Solicitud_documentos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {solicitud_documentosFindUniqueOrThrowArgs} args - Arguments to find a Solicitud_documentos
     * @example
     * // Get one Solicitud_documentos
     * const solicitud_documentos = await prisma.solicitud_documentos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends solicitud_documentosFindUniqueOrThrowArgs>(args: SelectSubset<T, solicitud_documentosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__solicitud_documentosClient<$Result.GetResult<Prisma.$solicitud_documentosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Solicitud_documentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solicitud_documentosFindFirstArgs} args - Arguments to find a Solicitud_documentos
     * @example
     * // Get one Solicitud_documentos
     * const solicitud_documentos = await prisma.solicitud_documentos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends solicitud_documentosFindFirstArgs>(args?: SelectSubset<T, solicitud_documentosFindFirstArgs<ExtArgs>>): Prisma__solicitud_documentosClient<$Result.GetResult<Prisma.$solicitud_documentosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Solicitud_documentos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solicitud_documentosFindFirstOrThrowArgs} args - Arguments to find a Solicitud_documentos
     * @example
     * // Get one Solicitud_documentos
     * const solicitud_documentos = await prisma.solicitud_documentos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends solicitud_documentosFindFirstOrThrowArgs>(args?: SelectSubset<T, solicitud_documentosFindFirstOrThrowArgs<ExtArgs>>): Prisma__solicitud_documentosClient<$Result.GetResult<Prisma.$solicitud_documentosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Solicitud_documentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solicitud_documentosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Solicitud_documentos
     * const solicitud_documentos = await prisma.solicitud_documentos.findMany()
     * 
     * // Get first 10 Solicitud_documentos
     * const solicitud_documentos = await prisma.solicitud_documentos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const solicitud_documentosWithIdOnly = await prisma.solicitud_documentos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends solicitud_documentosFindManyArgs>(args?: SelectSubset<T, solicitud_documentosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$solicitud_documentosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Solicitud_documentos.
     * @param {solicitud_documentosCreateArgs} args - Arguments to create a Solicitud_documentos.
     * @example
     * // Create one Solicitud_documentos
     * const Solicitud_documentos = await prisma.solicitud_documentos.create({
     *   data: {
     *     // ... data to create a Solicitud_documentos
     *   }
     * })
     * 
     */
    create<T extends solicitud_documentosCreateArgs>(args: SelectSubset<T, solicitud_documentosCreateArgs<ExtArgs>>): Prisma__solicitud_documentosClient<$Result.GetResult<Prisma.$solicitud_documentosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Solicitud_documentos.
     * @param {solicitud_documentosCreateManyArgs} args - Arguments to create many Solicitud_documentos.
     * @example
     * // Create many Solicitud_documentos
     * const solicitud_documentos = await prisma.solicitud_documentos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends solicitud_documentosCreateManyArgs>(args?: SelectSubset<T, solicitud_documentosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Solicitud_documentos and returns the data saved in the database.
     * @param {solicitud_documentosCreateManyAndReturnArgs} args - Arguments to create many Solicitud_documentos.
     * @example
     * // Create many Solicitud_documentos
     * const solicitud_documentos = await prisma.solicitud_documentos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Solicitud_documentos and only return the `id`
     * const solicitud_documentosWithIdOnly = await prisma.solicitud_documentos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends solicitud_documentosCreateManyAndReturnArgs>(args?: SelectSubset<T, solicitud_documentosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$solicitud_documentosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Solicitud_documentos.
     * @param {solicitud_documentosDeleteArgs} args - Arguments to delete one Solicitud_documentos.
     * @example
     * // Delete one Solicitud_documentos
     * const Solicitud_documentos = await prisma.solicitud_documentos.delete({
     *   where: {
     *     // ... filter to delete one Solicitud_documentos
     *   }
     * })
     * 
     */
    delete<T extends solicitud_documentosDeleteArgs>(args: SelectSubset<T, solicitud_documentosDeleteArgs<ExtArgs>>): Prisma__solicitud_documentosClient<$Result.GetResult<Prisma.$solicitud_documentosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Solicitud_documentos.
     * @param {solicitud_documentosUpdateArgs} args - Arguments to update one Solicitud_documentos.
     * @example
     * // Update one Solicitud_documentos
     * const solicitud_documentos = await prisma.solicitud_documentos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends solicitud_documentosUpdateArgs>(args: SelectSubset<T, solicitud_documentosUpdateArgs<ExtArgs>>): Prisma__solicitud_documentosClient<$Result.GetResult<Prisma.$solicitud_documentosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Solicitud_documentos.
     * @param {solicitud_documentosDeleteManyArgs} args - Arguments to filter Solicitud_documentos to delete.
     * @example
     * // Delete a few Solicitud_documentos
     * const { count } = await prisma.solicitud_documentos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends solicitud_documentosDeleteManyArgs>(args?: SelectSubset<T, solicitud_documentosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Solicitud_documentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solicitud_documentosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Solicitud_documentos
     * const solicitud_documentos = await prisma.solicitud_documentos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends solicitud_documentosUpdateManyArgs>(args: SelectSubset<T, solicitud_documentosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Solicitud_documentos and returns the data updated in the database.
     * @param {solicitud_documentosUpdateManyAndReturnArgs} args - Arguments to update many Solicitud_documentos.
     * @example
     * // Update many Solicitud_documentos
     * const solicitud_documentos = await prisma.solicitud_documentos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Solicitud_documentos and only return the `id`
     * const solicitud_documentosWithIdOnly = await prisma.solicitud_documentos.updateManyAndReturn({
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
    updateManyAndReturn<T extends solicitud_documentosUpdateManyAndReturnArgs>(args: SelectSubset<T, solicitud_documentosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$solicitud_documentosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Solicitud_documentos.
     * @param {solicitud_documentosUpsertArgs} args - Arguments to update or create a Solicitud_documentos.
     * @example
     * // Update or create a Solicitud_documentos
     * const solicitud_documentos = await prisma.solicitud_documentos.upsert({
     *   create: {
     *     // ... data to create a Solicitud_documentos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Solicitud_documentos we want to update
     *   }
     * })
     */
    upsert<T extends solicitud_documentosUpsertArgs>(args: SelectSubset<T, solicitud_documentosUpsertArgs<ExtArgs>>): Prisma__solicitud_documentosClient<$Result.GetResult<Prisma.$solicitud_documentosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Solicitud_documentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solicitud_documentosCountArgs} args - Arguments to filter Solicitud_documentos to count.
     * @example
     * // Count the number of Solicitud_documentos
     * const count = await prisma.solicitud_documentos.count({
     *   where: {
     *     // ... the filter for the Solicitud_documentos we want to count
     *   }
     * })
    **/
    count<T extends solicitud_documentosCountArgs>(
      args?: Subset<T, solicitud_documentosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Solicitud_documentosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Solicitud_documentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Solicitud_documentosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Solicitud_documentosAggregateArgs>(args: Subset<T, Solicitud_documentosAggregateArgs>): Prisma.PrismaPromise<GetSolicitud_documentosAggregateType<T>>

    /**
     * Group by Solicitud_documentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solicitud_documentosGroupByArgs} args - Group by arguments.
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
      T extends solicitud_documentosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: solicitud_documentosGroupByArgs['orderBy'] }
        : { orderBy?: solicitud_documentosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, solicitud_documentosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSolicitud_documentosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the solicitud_documentos model
   */
  readonly fields: solicitud_documentosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for solicitud_documentos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__solicitud_documentosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    solicitud<T extends solicitudesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, solicitudesDefaultArgs<ExtArgs>>): Prisma__solicitudesClient<$Result.GetResult<Prisma.$solicitudesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the solicitud_documentos model
   */
  interface solicitud_documentosFieldRefs {
    readonly id: FieldRef<"solicitud_documentos", 'String'>
    readonly solicitud_id: FieldRef<"solicitud_documentos", 'String'>
    readonly tipo: FieldRef<"solicitud_documentos", 'String'>
    readonly url: FieldRef<"solicitud_documentos", 'String'>
    readonly created_at: FieldRef<"solicitud_documentos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * solicitud_documentos findUnique
   */
  export type solicitud_documentosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_documentos
     */
    select?: solicitud_documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solicitud_documentos
     */
    omit?: solicitud_documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitud_documentosInclude<ExtArgs> | null
    /**
     * Filter, which solicitud_documentos to fetch.
     */
    where: solicitud_documentosWhereUniqueInput
  }

  /**
   * solicitud_documentos findUniqueOrThrow
   */
  export type solicitud_documentosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_documentos
     */
    select?: solicitud_documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solicitud_documentos
     */
    omit?: solicitud_documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitud_documentosInclude<ExtArgs> | null
    /**
     * Filter, which solicitud_documentos to fetch.
     */
    where: solicitud_documentosWhereUniqueInput
  }

  /**
   * solicitud_documentos findFirst
   */
  export type solicitud_documentosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_documentos
     */
    select?: solicitud_documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solicitud_documentos
     */
    omit?: solicitud_documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitud_documentosInclude<ExtArgs> | null
    /**
     * Filter, which solicitud_documentos to fetch.
     */
    where?: solicitud_documentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of solicitud_documentos to fetch.
     */
    orderBy?: solicitud_documentosOrderByWithRelationInput | solicitud_documentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for solicitud_documentos.
     */
    cursor?: solicitud_documentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` solicitud_documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` solicitud_documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of solicitud_documentos.
     */
    distinct?: Solicitud_documentosScalarFieldEnum | Solicitud_documentosScalarFieldEnum[]
  }

  /**
   * solicitud_documentos findFirstOrThrow
   */
  export type solicitud_documentosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_documentos
     */
    select?: solicitud_documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solicitud_documentos
     */
    omit?: solicitud_documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitud_documentosInclude<ExtArgs> | null
    /**
     * Filter, which solicitud_documentos to fetch.
     */
    where?: solicitud_documentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of solicitud_documentos to fetch.
     */
    orderBy?: solicitud_documentosOrderByWithRelationInput | solicitud_documentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for solicitud_documentos.
     */
    cursor?: solicitud_documentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` solicitud_documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` solicitud_documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of solicitud_documentos.
     */
    distinct?: Solicitud_documentosScalarFieldEnum | Solicitud_documentosScalarFieldEnum[]
  }

  /**
   * solicitud_documentos findMany
   */
  export type solicitud_documentosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_documentos
     */
    select?: solicitud_documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solicitud_documentos
     */
    omit?: solicitud_documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitud_documentosInclude<ExtArgs> | null
    /**
     * Filter, which solicitud_documentos to fetch.
     */
    where?: solicitud_documentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of solicitud_documentos to fetch.
     */
    orderBy?: solicitud_documentosOrderByWithRelationInput | solicitud_documentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing solicitud_documentos.
     */
    cursor?: solicitud_documentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` solicitud_documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` solicitud_documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of solicitud_documentos.
     */
    distinct?: Solicitud_documentosScalarFieldEnum | Solicitud_documentosScalarFieldEnum[]
  }

  /**
   * solicitud_documentos create
   */
  export type solicitud_documentosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_documentos
     */
    select?: solicitud_documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solicitud_documentos
     */
    omit?: solicitud_documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitud_documentosInclude<ExtArgs> | null
    /**
     * The data needed to create a solicitud_documentos.
     */
    data: XOR<solicitud_documentosCreateInput, solicitud_documentosUncheckedCreateInput>
  }

  /**
   * solicitud_documentos createMany
   */
  export type solicitud_documentosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many solicitud_documentos.
     */
    data: solicitud_documentosCreateManyInput | solicitud_documentosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * solicitud_documentos createManyAndReturn
   */
  export type solicitud_documentosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_documentos
     */
    select?: solicitud_documentosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the solicitud_documentos
     */
    omit?: solicitud_documentosOmit<ExtArgs> | null
    /**
     * The data used to create many solicitud_documentos.
     */
    data: solicitud_documentosCreateManyInput | solicitud_documentosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitud_documentosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * solicitud_documentos update
   */
  export type solicitud_documentosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_documentos
     */
    select?: solicitud_documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solicitud_documentos
     */
    omit?: solicitud_documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitud_documentosInclude<ExtArgs> | null
    /**
     * The data needed to update a solicitud_documentos.
     */
    data: XOR<solicitud_documentosUpdateInput, solicitud_documentosUncheckedUpdateInput>
    /**
     * Choose, which solicitud_documentos to update.
     */
    where: solicitud_documentosWhereUniqueInput
  }

  /**
   * solicitud_documentos updateMany
   */
  export type solicitud_documentosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update solicitud_documentos.
     */
    data: XOR<solicitud_documentosUpdateManyMutationInput, solicitud_documentosUncheckedUpdateManyInput>
    /**
     * Filter which solicitud_documentos to update
     */
    where?: solicitud_documentosWhereInput
    /**
     * Limit how many solicitud_documentos to update.
     */
    limit?: number
  }

  /**
   * solicitud_documentos updateManyAndReturn
   */
  export type solicitud_documentosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_documentos
     */
    select?: solicitud_documentosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the solicitud_documentos
     */
    omit?: solicitud_documentosOmit<ExtArgs> | null
    /**
     * The data used to update solicitud_documentos.
     */
    data: XOR<solicitud_documentosUpdateManyMutationInput, solicitud_documentosUncheckedUpdateManyInput>
    /**
     * Filter which solicitud_documentos to update
     */
    where?: solicitud_documentosWhereInput
    /**
     * Limit how many solicitud_documentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitud_documentosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * solicitud_documentos upsert
   */
  export type solicitud_documentosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_documentos
     */
    select?: solicitud_documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solicitud_documentos
     */
    omit?: solicitud_documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitud_documentosInclude<ExtArgs> | null
    /**
     * The filter to search for the solicitud_documentos to update in case it exists.
     */
    where: solicitud_documentosWhereUniqueInput
    /**
     * In case the solicitud_documentos found by the `where` argument doesn't exist, create a new solicitud_documentos with this data.
     */
    create: XOR<solicitud_documentosCreateInput, solicitud_documentosUncheckedCreateInput>
    /**
     * In case the solicitud_documentos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<solicitud_documentosUpdateInput, solicitud_documentosUncheckedUpdateInput>
  }

  /**
   * solicitud_documentos delete
   */
  export type solicitud_documentosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_documentos
     */
    select?: solicitud_documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solicitud_documentos
     */
    omit?: solicitud_documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitud_documentosInclude<ExtArgs> | null
    /**
     * Filter which solicitud_documentos to delete.
     */
    where: solicitud_documentosWhereUniqueInput
  }

  /**
   * solicitud_documentos deleteMany
   */
  export type solicitud_documentosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which solicitud_documentos to delete
     */
    where?: solicitud_documentosWhereInput
    /**
     * Limit how many solicitud_documentos to delete.
     */
    limit?: number
  }

  /**
   * solicitud_documentos without action
   */
  export type solicitud_documentosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solicitud_documentos
     */
    select?: solicitud_documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solicitud_documentos
     */
    omit?: solicitud_documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solicitud_documentosInclude<ExtArgs> | null
  }


  /**
   * Model pagos
   */

  export type AggregatePagos = {
    _count: PagosCountAggregateOutputType | null
    _avg: PagosAvgAggregateOutputType | null
    _sum: PagosSumAggregateOutputType | null
    _min: PagosMinAggregateOutputType | null
    _max: PagosMaxAggregateOutputType | null
  }

  export type PagosAvgAggregateOutputType = {
    monto: Decimal | null
  }

  export type PagosSumAggregateOutputType = {
    monto: Decimal | null
  }

  export type PagosMinAggregateOutputType = {
    id: string | null
    solicitud_id: string | null
    mp_preference_id: string | null
    mp_payment_id: string | null
    mp_status: string | null
    monto: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PagosMaxAggregateOutputType = {
    id: string | null
    solicitud_id: string | null
    mp_preference_id: string | null
    mp_payment_id: string | null
    mp_status: string | null
    monto: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PagosCountAggregateOutputType = {
    id: number
    solicitud_id: number
    mp_preference_id: number
    mp_payment_id: number
    mp_status: number
    monto: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PagosAvgAggregateInputType = {
    monto?: true
  }

  export type PagosSumAggregateInputType = {
    monto?: true
  }

  export type PagosMinAggregateInputType = {
    id?: true
    solicitud_id?: true
    mp_preference_id?: true
    mp_payment_id?: true
    mp_status?: true
    monto?: true
    created_at?: true
    updated_at?: true
  }

  export type PagosMaxAggregateInputType = {
    id?: true
    solicitud_id?: true
    mp_preference_id?: true
    mp_payment_id?: true
    mp_status?: true
    monto?: true
    created_at?: true
    updated_at?: true
  }

  export type PagosCountAggregateInputType = {
    id?: true
    solicitud_id?: true
    mp_preference_id?: true
    mp_payment_id?: true
    mp_status?: true
    monto?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PagosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pagos to aggregate.
     */
    where?: pagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagos to fetch.
     */
    orderBy?: pagosOrderByWithRelationInput | pagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pagos
    **/
    _count?: true | PagosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagosMaxAggregateInputType
  }

  export type GetPagosAggregateType<T extends PagosAggregateArgs> = {
        [P in keyof T & keyof AggregatePagos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePagos[P]>
      : GetScalarType<T[P], AggregatePagos[P]>
  }




  export type pagosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pagosWhereInput
    orderBy?: pagosOrderByWithAggregationInput | pagosOrderByWithAggregationInput[]
    by: PagosScalarFieldEnum[] | PagosScalarFieldEnum
    having?: pagosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagosCountAggregateInputType | true
    _avg?: PagosAvgAggregateInputType
    _sum?: PagosSumAggregateInputType
    _min?: PagosMinAggregateInputType
    _max?: PagosMaxAggregateInputType
  }

  export type PagosGroupByOutputType = {
    id: string
    solicitud_id: string
    mp_preference_id: string | null
    mp_payment_id: string | null
    mp_status: string | null
    monto: Decimal
    created_at: Date
    updated_at: Date
    _count: PagosCountAggregateOutputType | null
    _avg: PagosAvgAggregateOutputType | null
    _sum: PagosSumAggregateOutputType | null
    _min: PagosMinAggregateOutputType | null
    _max: PagosMaxAggregateOutputType | null
  }

  type GetPagosGroupByPayload<T extends pagosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagosGroupByOutputType[P]>
            : GetScalarType<T[P], PagosGroupByOutputType[P]>
        }
      >
    >


  export type pagosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    solicitud_id?: boolean
    mp_preference_id?: boolean
    mp_payment_id?: boolean
    mp_status?: boolean
    monto?: boolean
    created_at?: boolean
    updated_at?: boolean
    solicitud?: boolean | solicitudesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagos"]>

  export type pagosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    solicitud_id?: boolean
    mp_preference_id?: boolean
    mp_payment_id?: boolean
    mp_status?: boolean
    monto?: boolean
    created_at?: boolean
    updated_at?: boolean
    solicitud?: boolean | solicitudesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagos"]>

  export type pagosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    solicitud_id?: boolean
    mp_preference_id?: boolean
    mp_payment_id?: boolean
    mp_status?: boolean
    monto?: boolean
    created_at?: boolean
    updated_at?: boolean
    solicitud?: boolean | solicitudesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagos"]>

  export type pagosSelectScalar = {
    id?: boolean
    solicitud_id?: boolean
    mp_preference_id?: boolean
    mp_payment_id?: boolean
    mp_status?: boolean
    monto?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type pagosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "solicitud_id" | "mp_preference_id" | "mp_payment_id" | "mp_status" | "monto" | "created_at" | "updated_at", ExtArgs["result"]["pagos"]>
  export type pagosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solicitud?: boolean | solicitudesDefaultArgs<ExtArgs>
  }
  export type pagosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solicitud?: boolean | solicitudesDefaultArgs<ExtArgs>
  }
  export type pagosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solicitud?: boolean | solicitudesDefaultArgs<ExtArgs>
  }

  export type $pagosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pagos"
    objects: {
      solicitud: Prisma.$solicitudesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      solicitud_id: string
      mp_preference_id: string | null
      mp_payment_id: string | null
      mp_status: string | null
      monto: Prisma.Decimal
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["pagos"]>
    composites: {}
  }

  type pagosGetPayload<S extends boolean | null | undefined | pagosDefaultArgs> = $Result.GetResult<Prisma.$pagosPayload, S>

  type pagosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pagosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PagosCountAggregateInputType | true
    }

  export interface pagosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pagos'], meta: { name: 'pagos' } }
    /**
     * Find zero or one Pagos that matches the filter.
     * @param {pagosFindUniqueArgs} args - Arguments to find a Pagos
     * @example
     * // Get one Pagos
     * const pagos = await prisma.pagos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pagosFindUniqueArgs>(args: SelectSubset<T, pagosFindUniqueArgs<ExtArgs>>): Prisma__pagosClient<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pagos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pagosFindUniqueOrThrowArgs} args - Arguments to find a Pagos
     * @example
     * // Get one Pagos
     * const pagos = await prisma.pagos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pagosFindUniqueOrThrowArgs>(args: SelectSubset<T, pagosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pagosClient<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagosFindFirstArgs} args - Arguments to find a Pagos
     * @example
     * // Get one Pagos
     * const pagos = await prisma.pagos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pagosFindFirstArgs>(args?: SelectSubset<T, pagosFindFirstArgs<ExtArgs>>): Prisma__pagosClient<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagosFindFirstOrThrowArgs} args - Arguments to find a Pagos
     * @example
     * // Get one Pagos
     * const pagos = await prisma.pagos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pagosFindFirstOrThrowArgs>(args?: SelectSubset<T, pagosFindFirstOrThrowArgs<ExtArgs>>): Prisma__pagosClient<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagos
     * const pagos = await prisma.pagos.findMany()
     * 
     * // Get first 10 Pagos
     * const pagos = await prisma.pagos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pagosWithIdOnly = await prisma.pagos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pagosFindManyArgs>(args?: SelectSubset<T, pagosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pagos.
     * @param {pagosCreateArgs} args - Arguments to create a Pagos.
     * @example
     * // Create one Pagos
     * const Pagos = await prisma.pagos.create({
     *   data: {
     *     // ... data to create a Pagos
     *   }
     * })
     * 
     */
    create<T extends pagosCreateArgs>(args: SelectSubset<T, pagosCreateArgs<ExtArgs>>): Prisma__pagosClient<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pagos.
     * @param {pagosCreateManyArgs} args - Arguments to create many Pagos.
     * @example
     * // Create many Pagos
     * const pagos = await prisma.pagos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pagosCreateManyArgs>(args?: SelectSubset<T, pagosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pagos and returns the data saved in the database.
     * @param {pagosCreateManyAndReturnArgs} args - Arguments to create many Pagos.
     * @example
     * // Create many Pagos
     * const pagos = await prisma.pagos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pagos and only return the `id`
     * const pagosWithIdOnly = await prisma.pagos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pagosCreateManyAndReturnArgs>(args?: SelectSubset<T, pagosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pagos.
     * @param {pagosDeleteArgs} args - Arguments to delete one Pagos.
     * @example
     * // Delete one Pagos
     * const Pagos = await prisma.pagos.delete({
     *   where: {
     *     // ... filter to delete one Pagos
     *   }
     * })
     * 
     */
    delete<T extends pagosDeleteArgs>(args: SelectSubset<T, pagosDeleteArgs<ExtArgs>>): Prisma__pagosClient<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pagos.
     * @param {pagosUpdateArgs} args - Arguments to update one Pagos.
     * @example
     * // Update one Pagos
     * const pagos = await prisma.pagos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pagosUpdateArgs>(args: SelectSubset<T, pagosUpdateArgs<ExtArgs>>): Prisma__pagosClient<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pagos.
     * @param {pagosDeleteManyArgs} args - Arguments to filter Pagos to delete.
     * @example
     * // Delete a few Pagos
     * const { count } = await prisma.pagos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pagosDeleteManyArgs>(args?: SelectSubset<T, pagosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagos
     * const pagos = await prisma.pagos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pagosUpdateManyArgs>(args: SelectSubset<T, pagosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagos and returns the data updated in the database.
     * @param {pagosUpdateManyAndReturnArgs} args - Arguments to update many Pagos.
     * @example
     * // Update many Pagos
     * const pagos = await prisma.pagos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pagos and only return the `id`
     * const pagosWithIdOnly = await prisma.pagos.updateManyAndReturn({
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
    updateManyAndReturn<T extends pagosUpdateManyAndReturnArgs>(args: SelectSubset<T, pagosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pagos.
     * @param {pagosUpsertArgs} args - Arguments to update or create a Pagos.
     * @example
     * // Update or create a Pagos
     * const pagos = await prisma.pagos.upsert({
     *   create: {
     *     // ... data to create a Pagos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pagos we want to update
     *   }
     * })
     */
    upsert<T extends pagosUpsertArgs>(args: SelectSubset<T, pagosUpsertArgs<ExtArgs>>): Prisma__pagosClient<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagosCountArgs} args - Arguments to filter Pagos to count.
     * @example
     * // Count the number of Pagos
     * const count = await prisma.pagos.count({
     *   where: {
     *     // ... the filter for the Pagos we want to count
     *   }
     * })
    **/
    count<T extends pagosCountArgs>(
      args?: Subset<T, pagosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PagosAggregateArgs>(args: Subset<T, PagosAggregateArgs>): Prisma.PrismaPromise<GetPagosAggregateType<T>>

    /**
     * Group by Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagosGroupByArgs} args - Group by arguments.
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
      T extends pagosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pagosGroupByArgs['orderBy'] }
        : { orderBy?: pagosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pagosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pagos model
   */
  readonly fields: pagosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pagos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pagosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    solicitud<T extends solicitudesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, solicitudesDefaultArgs<ExtArgs>>): Prisma__solicitudesClient<$Result.GetResult<Prisma.$solicitudesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the pagos model
   */
  interface pagosFieldRefs {
    readonly id: FieldRef<"pagos", 'String'>
    readonly solicitud_id: FieldRef<"pagos", 'String'>
    readonly mp_preference_id: FieldRef<"pagos", 'String'>
    readonly mp_payment_id: FieldRef<"pagos", 'String'>
    readonly mp_status: FieldRef<"pagos", 'String'>
    readonly monto: FieldRef<"pagos", 'Decimal'>
    readonly created_at: FieldRef<"pagos", 'DateTime'>
    readonly updated_at: FieldRef<"pagos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * pagos findUnique
   */
  export type pagosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    /**
     * Filter, which pagos to fetch.
     */
    where: pagosWhereUniqueInput
  }

  /**
   * pagos findUniqueOrThrow
   */
  export type pagosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    /**
     * Filter, which pagos to fetch.
     */
    where: pagosWhereUniqueInput
  }

  /**
   * pagos findFirst
   */
  export type pagosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    /**
     * Filter, which pagos to fetch.
     */
    where?: pagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagos to fetch.
     */
    orderBy?: pagosOrderByWithRelationInput | pagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pagos.
     */
    cursor?: pagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pagos.
     */
    distinct?: PagosScalarFieldEnum | PagosScalarFieldEnum[]
  }

  /**
   * pagos findFirstOrThrow
   */
  export type pagosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    /**
     * Filter, which pagos to fetch.
     */
    where?: pagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagos to fetch.
     */
    orderBy?: pagosOrderByWithRelationInput | pagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pagos.
     */
    cursor?: pagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pagos.
     */
    distinct?: PagosScalarFieldEnum | PagosScalarFieldEnum[]
  }

  /**
   * pagos findMany
   */
  export type pagosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    /**
     * Filter, which pagos to fetch.
     */
    where?: pagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagos to fetch.
     */
    orderBy?: pagosOrderByWithRelationInput | pagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pagos.
     */
    cursor?: pagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pagos.
     */
    distinct?: PagosScalarFieldEnum | PagosScalarFieldEnum[]
  }

  /**
   * pagos create
   */
  export type pagosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    /**
     * The data needed to create a pagos.
     */
    data: XOR<pagosCreateInput, pagosUncheckedCreateInput>
  }

  /**
   * pagos createMany
   */
  export type pagosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pagos.
     */
    data: pagosCreateManyInput | pagosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pagos createManyAndReturn
   */
  export type pagosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * The data used to create many pagos.
     */
    data: pagosCreateManyInput | pagosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pagos update
   */
  export type pagosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    /**
     * The data needed to update a pagos.
     */
    data: XOR<pagosUpdateInput, pagosUncheckedUpdateInput>
    /**
     * Choose, which pagos to update.
     */
    where: pagosWhereUniqueInput
  }

  /**
   * pagos updateMany
   */
  export type pagosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pagos.
     */
    data: XOR<pagosUpdateManyMutationInput, pagosUncheckedUpdateManyInput>
    /**
     * Filter which pagos to update
     */
    where?: pagosWhereInput
    /**
     * Limit how many pagos to update.
     */
    limit?: number
  }

  /**
   * pagos updateManyAndReturn
   */
  export type pagosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * The data used to update pagos.
     */
    data: XOR<pagosUpdateManyMutationInput, pagosUncheckedUpdateManyInput>
    /**
     * Filter which pagos to update
     */
    where?: pagosWhereInput
    /**
     * Limit how many pagos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pagos upsert
   */
  export type pagosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    /**
     * The filter to search for the pagos to update in case it exists.
     */
    where: pagosWhereUniqueInput
    /**
     * In case the pagos found by the `where` argument doesn't exist, create a new pagos with this data.
     */
    create: XOR<pagosCreateInput, pagosUncheckedCreateInput>
    /**
     * In case the pagos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pagosUpdateInput, pagosUncheckedUpdateInput>
  }

  /**
   * pagos delete
   */
  export type pagosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    /**
     * Filter which pagos to delete.
     */
    where: pagosWhereUniqueInput
  }

  /**
   * pagos deleteMany
   */
  export type pagosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pagos to delete
     */
    where?: pagosWhereInput
    /**
     * Limit how many pagos to delete.
     */
    limit?: number
  }

  /**
   * pagos without action
   */
  export type pagosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
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


  export const CompradoresScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    apellido: 'apellido',
    correo: 'correo',
    telefono: 'telefono',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CompradoresScalarFieldEnum = (typeof CompradoresScalarFieldEnum)[keyof typeof CompradoresScalarFieldEnum]


  export const SolicitudesScalarFieldEnum: {
    id: 'id',
    comprador_id: 'comprador_id',
    tipo: 'tipo',
    status: 'status',
    numero_a_portar: 'numero_a_portar',
    nip_portabilidad: 'nip_portabilidad',
    numero_telefono: 'numero_telefono',
    iccid: 'iccid',
    curp: 'curp',
    imei2: 'imei2',
    numero_contacto: 'numero_contacto',
    numero_oficina: 'numero_oficina',
    numero_trabajo: 'numero_trabajo',
    numero_casa: 'numero_casa',
    acepta_privacidad: 'acepta_privacidad',
    observaciones: 'observaciones',
    fecha_solicitud: 'fecha_solicitud',
    fecha_activacion: 'fecha_activacion',
    updated_at: 'updated_at'
  };

  export type SolicitudesScalarFieldEnum = (typeof SolicitudesScalarFieldEnum)[keyof typeof SolicitudesScalarFieldEnum]


  export const Solicitud_referenciasScalarFieldEnum: {
    id: 'id',
    solicitud_id: 'solicitud_id',
    nombre: 'nombre',
    primer_apellido: 'primer_apellido',
    celular: 'celular'
  };

  export type Solicitud_referenciasScalarFieldEnum = (typeof Solicitud_referenciasScalarFieldEnum)[keyof typeof Solicitud_referenciasScalarFieldEnum]


  export const Solicitud_documentosScalarFieldEnum: {
    id: 'id',
    solicitud_id: 'solicitud_id',
    tipo: 'tipo',
    url: 'url',
    created_at: 'created_at'
  };

  export type Solicitud_documentosScalarFieldEnum = (typeof Solicitud_documentosScalarFieldEnum)[keyof typeof Solicitud_documentosScalarFieldEnum]


  export const PagosScalarFieldEnum: {
    id: 'id',
    solicitud_id: 'solicitud_id',
    mp_preference_id: 'mp_preference_id',
    mp_payment_id: 'mp_payment_id',
    mp_status: 'mp_status',
    monto: 'monto',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PagosScalarFieldEnum = (typeof PagosScalarFieldEnum)[keyof typeof PagosScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type compradoresWhereInput = {
    AND?: compradoresWhereInput | compradoresWhereInput[]
    OR?: compradoresWhereInput[]
    NOT?: compradoresWhereInput | compradoresWhereInput[]
    id?: UuidFilter<"compradores"> | string
    nombre?: StringFilter<"compradores"> | string
    apellido?: StringFilter<"compradores"> | string
    correo?: StringFilter<"compradores"> | string
    telefono?: StringNullableFilter<"compradores"> | string | null
    created_at?: DateTimeFilter<"compradores"> | Date | string
    updated_at?: DateTimeFilter<"compradores"> | Date | string
    solicitudes?: SolicitudesListRelationFilter
  }

  export type compradoresOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo?: SortOrder
    telefono?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    solicitudes?: solicitudesOrderByRelationAggregateInput
  }

  export type compradoresWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: compradoresWhereInput | compradoresWhereInput[]
    OR?: compradoresWhereInput[]
    NOT?: compradoresWhereInput | compradoresWhereInput[]
    nombre?: StringFilter<"compradores"> | string
    apellido?: StringFilter<"compradores"> | string
    correo?: StringFilter<"compradores"> | string
    telefono?: StringNullableFilter<"compradores"> | string | null
    created_at?: DateTimeFilter<"compradores"> | Date | string
    updated_at?: DateTimeFilter<"compradores"> | Date | string
    solicitudes?: SolicitudesListRelationFilter
  }, "id">

  export type compradoresOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo?: SortOrder
    telefono?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: compradoresCountOrderByAggregateInput
    _max?: compradoresMaxOrderByAggregateInput
    _min?: compradoresMinOrderByAggregateInput
  }

  export type compradoresScalarWhereWithAggregatesInput = {
    AND?: compradoresScalarWhereWithAggregatesInput | compradoresScalarWhereWithAggregatesInput[]
    OR?: compradoresScalarWhereWithAggregatesInput[]
    NOT?: compradoresScalarWhereWithAggregatesInput | compradoresScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"compradores"> | string
    nombre?: StringWithAggregatesFilter<"compradores"> | string
    apellido?: StringWithAggregatesFilter<"compradores"> | string
    correo?: StringWithAggregatesFilter<"compradores"> | string
    telefono?: StringNullableWithAggregatesFilter<"compradores"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"compradores"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"compradores"> | Date | string
  }

  export type solicitudesWhereInput = {
    AND?: solicitudesWhereInput | solicitudesWhereInput[]
    OR?: solicitudesWhereInput[]
    NOT?: solicitudesWhereInput | solicitudesWhereInput[]
    id?: UuidFilter<"solicitudes"> | string
    comprador_id?: UuidFilter<"solicitudes"> | string
    tipo?: StringFilter<"solicitudes"> | string
    status?: StringFilter<"solicitudes"> | string
    numero_a_portar?: StringNullableFilter<"solicitudes"> | string | null
    nip_portabilidad?: StringNullableFilter<"solicitudes"> | string | null
    numero_telefono?: StringNullableFilter<"solicitudes"> | string | null
    iccid?: StringNullableFilter<"solicitudes"> | string | null
    curp?: StringNullableFilter<"solicitudes"> | string | null
    imei2?: StringNullableFilter<"solicitudes"> | string | null
    numero_contacto?: StringNullableFilter<"solicitudes"> | string | null
    numero_oficina?: StringNullableFilter<"solicitudes"> | string | null
    numero_trabajo?: StringNullableFilter<"solicitudes"> | string | null
    numero_casa?: StringNullableFilter<"solicitudes"> | string | null
    acepta_privacidad?: BoolFilter<"solicitudes"> | boolean
    observaciones?: StringNullableFilter<"solicitudes"> | string | null
    fecha_solicitud?: DateTimeFilter<"solicitudes"> | Date | string
    fecha_activacion?: DateTimeNullableFilter<"solicitudes"> | Date | string | null
    updated_at?: DateTimeFilter<"solicitudes"> | Date | string
    comprador?: XOR<CompradoresScalarRelationFilter, compradoresWhereInput>
    referencias?: Solicitud_referenciasListRelationFilter
    documentos?: Solicitud_documentosListRelationFilter
    pagos?: PagosListRelationFilter
  }

  export type solicitudesOrderByWithRelationInput = {
    id?: SortOrder
    comprador_id?: SortOrder
    tipo?: SortOrder
    status?: SortOrder
    numero_a_portar?: SortOrderInput | SortOrder
    nip_portabilidad?: SortOrderInput | SortOrder
    numero_telefono?: SortOrderInput | SortOrder
    iccid?: SortOrderInput | SortOrder
    curp?: SortOrderInput | SortOrder
    imei2?: SortOrderInput | SortOrder
    numero_contacto?: SortOrderInput | SortOrder
    numero_oficina?: SortOrderInput | SortOrder
    numero_trabajo?: SortOrderInput | SortOrder
    numero_casa?: SortOrderInput | SortOrder
    acepta_privacidad?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    fecha_solicitud?: SortOrder
    fecha_activacion?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    comprador?: compradoresOrderByWithRelationInput
    referencias?: solicitud_referenciasOrderByRelationAggregateInput
    documentos?: solicitud_documentosOrderByRelationAggregateInput
    pagos?: pagosOrderByRelationAggregateInput
  }

  export type solicitudesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: solicitudesWhereInput | solicitudesWhereInput[]
    OR?: solicitudesWhereInput[]
    NOT?: solicitudesWhereInput | solicitudesWhereInput[]
    comprador_id?: UuidFilter<"solicitudes"> | string
    tipo?: StringFilter<"solicitudes"> | string
    status?: StringFilter<"solicitudes"> | string
    numero_a_portar?: StringNullableFilter<"solicitudes"> | string | null
    nip_portabilidad?: StringNullableFilter<"solicitudes"> | string | null
    numero_telefono?: StringNullableFilter<"solicitudes"> | string | null
    iccid?: StringNullableFilter<"solicitudes"> | string | null
    curp?: StringNullableFilter<"solicitudes"> | string | null
    imei2?: StringNullableFilter<"solicitudes"> | string | null
    numero_contacto?: StringNullableFilter<"solicitudes"> | string | null
    numero_oficina?: StringNullableFilter<"solicitudes"> | string | null
    numero_trabajo?: StringNullableFilter<"solicitudes"> | string | null
    numero_casa?: StringNullableFilter<"solicitudes"> | string | null
    acepta_privacidad?: BoolFilter<"solicitudes"> | boolean
    observaciones?: StringNullableFilter<"solicitudes"> | string | null
    fecha_solicitud?: DateTimeFilter<"solicitudes"> | Date | string
    fecha_activacion?: DateTimeNullableFilter<"solicitudes"> | Date | string | null
    updated_at?: DateTimeFilter<"solicitudes"> | Date | string
    comprador?: XOR<CompradoresScalarRelationFilter, compradoresWhereInput>
    referencias?: Solicitud_referenciasListRelationFilter
    documentos?: Solicitud_documentosListRelationFilter
    pagos?: PagosListRelationFilter
  }, "id">

  export type solicitudesOrderByWithAggregationInput = {
    id?: SortOrder
    comprador_id?: SortOrder
    tipo?: SortOrder
    status?: SortOrder
    numero_a_portar?: SortOrderInput | SortOrder
    nip_portabilidad?: SortOrderInput | SortOrder
    numero_telefono?: SortOrderInput | SortOrder
    iccid?: SortOrderInput | SortOrder
    curp?: SortOrderInput | SortOrder
    imei2?: SortOrderInput | SortOrder
    numero_contacto?: SortOrderInput | SortOrder
    numero_oficina?: SortOrderInput | SortOrder
    numero_trabajo?: SortOrderInput | SortOrder
    numero_casa?: SortOrderInput | SortOrder
    acepta_privacidad?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    fecha_solicitud?: SortOrder
    fecha_activacion?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    _count?: solicitudesCountOrderByAggregateInput
    _max?: solicitudesMaxOrderByAggregateInput
    _min?: solicitudesMinOrderByAggregateInput
  }

  export type solicitudesScalarWhereWithAggregatesInput = {
    AND?: solicitudesScalarWhereWithAggregatesInput | solicitudesScalarWhereWithAggregatesInput[]
    OR?: solicitudesScalarWhereWithAggregatesInput[]
    NOT?: solicitudesScalarWhereWithAggregatesInput | solicitudesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"solicitudes"> | string
    comprador_id?: UuidWithAggregatesFilter<"solicitudes"> | string
    tipo?: StringWithAggregatesFilter<"solicitudes"> | string
    status?: StringWithAggregatesFilter<"solicitudes"> | string
    numero_a_portar?: StringNullableWithAggregatesFilter<"solicitudes"> | string | null
    nip_portabilidad?: StringNullableWithAggregatesFilter<"solicitudes"> | string | null
    numero_telefono?: StringNullableWithAggregatesFilter<"solicitudes"> | string | null
    iccid?: StringNullableWithAggregatesFilter<"solicitudes"> | string | null
    curp?: StringNullableWithAggregatesFilter<"solicitudes"> | string | null
    imei2?: StringNullableWithAggregatesFilter<"solicitudes"> | string | null
    numero_contacto?: StringNullableWithAggregatesFilter<"solicitudes"> | string | null
    numero_oficina?: StringNullableWithAggregatesFilter<"solicitudes"> | string | null
    numero_trabajo?: StringNullableWithAggregatesFilter<"solicitudes"> | string | null
    numero_casa?: StringNullableWithAggregatesFilter<"solicitudes"> | string | null
    acepta_privacidad?: BoolWithAggregatesFilter<"solicitudes"> | boolean
    observaciones?: StringNullableWithAggregatesFilter<"solicitudes"> | string | null
    fecha_solicitud?: DateTimeWithAggregatesFilter<"solicitudes"> | Date | string
    fecha_activacion?: DateTimeNullableWithAggregatesFilter<"solicitudes"> | Date | string | null
    updated_at?: DateTimeWithAggregatesFilter<"solicitudes"> | Date | string
  }

  export type solicitud_referenciasWhereInput = {
    AND?: solicitud_referenciasWhereInput | solicitud_referenciasWhereInput[]
    OR?: solicitud_referenciasWhereInput[]
    NOT?: solicitud_referenciasWhereInput | solicitud_referenciasWhereInput[]
    id?: UuidFilter<"solicitud_referencias"> | string
    solicitud_id?: UuidFilter<"solicitud_referencias"> | string
    nombre?: StringFilter<"solicitud_referencias"> | string
    primer_apellido?: StringFilter<"solicitud_referencias"> | string
    celular?: StringFilter<"solicitud_referencias"> | string
    solicitud?: XOR<SolicitudesScalarRelationFilter, solicitudesWhereInput>
  }

  export type solicitud_referenciasOrderByWithRelationInput = {
    id?: SortOrder
    solicitud_id?: SortOrder
    nombre?: SortOrder
    primer_apellido?: SortOrder
    celular?: SortOrder
    solicitud?: solicitudesOrderByWithRelationInput
  }

  export type solicitud_referenciasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: solicitud_referenciasWhereInput | solicitud_referenciasWhereInput[]
    OR?: solicitud_referenciasWhereInput[]
    NOT?: solicitud_referenciasWhereInput | solicitud_referenciasWhereInput[]
    solicitud_id?: UuidFilter<"solicitud_referencias"> | string
    nombre?: StringFilter<"solicitud_referencias"> | string
    primer_apellido?: StringFilter<"solicitud_referencias"> | string
    celular?: StringFilter<"solicitud_referencias"> | string
    solicitud?: XOR<SolicitudesScalarRelationFilter, solicitudesWhereInput>
  }, "id">

  export type solicitud_referenciasOrderByWithAggregationInput = {
    id?: SortOrder
    solicitud_id?: SortOrder
    nombre?: SortOrder
    primer_apellido?: SortOrder
    celular?: SortOrder
    _count?: solicitud_referenciasCountOrderByAggregateInput
    _max?: solicitud_referenciasMaxOrderByAggregateInput
    _min?: solicitud_referenciasMinOrderByAggregateInput
  }

  export type solicitud_referenciasScalarWhereWithAggregatesInput = {
    AND?: solicitud_referenciasScalarWhereWithAggregatesInput | solicitud_referenciasScalarWhereWithAggregatesInput[]
    OR?: solicitud_referenciasScalarWhereWithAggregatesInput[]
    NOT?: solicitud_referenciasScalarWhereWithAggregatesInput | solicitud_referenciasScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"solicitud_referencias"> | string
    solicitud_id?: UuidWithAggregatesFilter<"solicitud_referencias"> | string
    nombre?: StringWithAggregatesFilter<"solicitud_referencias"> | string
    primer_apellido?: StringWithAggregatesFilter<"solicitud_referencias"> | string
    celular?: StringWithAggregatesFilter<"solicitud_referencias"> | string
  }

  export type solicitud_documentosWhereInput = {
    AND?: solicitud_documentosWhereInput | solicitud_documentosWhereInput[]
    OR?: solicitud_documentosWhereInput[]
    NOT?: solicitud_documentosWhereInput | solicitud_documentosWhereInput[]
    id?: UuidFilter<"solicitud_documentos"> | string
    solicitud_id?: UuidFilter<"solicitud_documentos"> | string
    tipo?: StringFilter<"solicitud_documentos"> | string
    url?: StringFilter<"solicitud_documentos"> | string
    created_at?: DateTimeFilter<"solicitud_documentos"> | Date | string
    solicitud?: XOR<SolicitudesScalarRelationFilter, solicitudesWhereInput>
  }

  export type solicitud_documentosOrderByWithRelationInput = {
    id?: SortOrder
    solicitud_id?: SortOrder
    tipo?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    solicitud?: solicitudesOrderByWithRelationInput
  }

  export type solicitud_documentosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: solicitud_documentosWhereInput | solicitud_documentosWhereInput[]
    OR?: solicitud_documentosWhereInput[]
    NOT?: solicitud_documentosWhereInput | solicitud_documentosWhereInput[]
    solicitud_id?: UuidFilter<"solicitud_documentos"> | string
    tipo?: StringFilter<"solicitud_documentos"> | string
    url?: StringFilter<"solicitud_documentos"> | string
    created_at?: DateTimeFilter<"solicitud_documentos"> | Date | string
    solicitud?: XOR<SolicitudesScalarRelationFilter, solicitudesWhereInput>
  }, "id">

  export type solicitud_documentosOrderByWithAggregationInput = {
    id?: SortOrder
    solicitud_id?: SortOrder
    tipo?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    _count?: solicitud_documentosCountOrderByAggregateInput
    _max?: solicitud_documentosMaxOrderByAggregateInput
    _min?: solicitud_documentosMinOrderByAggregateInput
  }

  export type solicitud_documentosScalarWhereWithAggregatesInput = {
    AND?: solicitud_documentosScalarWhereWithAggregatesInput | solicitud_documentosScalarWhereWithAggregatesInput[]
    OR?: solicitud_documentosScalarWhereWithAggregatesInput[]
    NOT?: solicitud_documentosScalarWhereWithAggregatesInput | solicitud_documentosScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"solicitud_documentos"> | string
    solicitud_id?: UuidWithAggregatesFilter<"solicitud_documentos"> | string
    tipo?: StringWithAggregatesFilter<"solicitud_documentos"> | string
    url?: StringWithAggregatesFilter<"solicitud_documentos"> | string
    created_at?: DateTimeWithAggregatesFilter<"solicitud_documentos"> | Date | string
  }

  export type pagosWhereInput = {
    AND?: pagosWhereInput | pagosWhereInput[]
    OR?: pagosWhereInput[]
    NOT?: pagosWhereInput | pagosWhereInput[]
    id?: UuidFilter<"pagos"> | string
    solicitud_id?: UuidFilter<"pagos"> | string
    mp_preference_id?: StringNullableFilter<"pagos"> | string | null
    mp_payment_id?: StringNullableFilter<"pagos"> | string | null
    mp_status?: StringNullableFilter<"pagos"> | string | null
    monto?: DecimalFilter<"pagos"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"pagos"> | Date | string
    updated_at?: DateTimeFilter<"pagos"> | Date | string
    solicitud?: XOR<SolicitudesScalarRelationFilter, solicitudesWhereInput>
  }

  export type pagosOrderByWithRelationInput = {
    id?: SortOrder
    solicitud_id?: SortOrder
    mp_preference_id?: SortOrderInput | SortOrder
    mp_payment_id?: SortOrderInput | SortOrder
    mp_status?: SortOrderInput | SortOrder
    monto?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    solicitud?: solicitudesOrderByWithRelationInput
  }

  export type pagosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: pagosWhereInput | pagosWhereInput[]
    OR?: pagosWhereInput[]
    NOT?: pagosWhereInput | pagosWhereInput[]
    solicitud_id?: UuidFilter<"pagos"> | string
    mp_preference_id?: StringNullableFilter<"pagos"> | string | null
    mp_payment_id?: StringNullableFilter<"pagos"> | string | null
    mp_status?: StringNullableFilter<"pagos"> | string | null
    monto?: DecimalFilter<"pagos"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"pagos"> | Date | string
    updated_at?: DateTimeFilter<"pagos"> | Date | string
    solicitud?: XOR<SolicitudesScalarRelationFilter, solicitudesWhereInput>
  }, "id">

  export type pagosOrderByWithAggregationInput = {
    id?: SortOrder
    solicitud_id?: SortOrder
    mp_preference_id?: SortOrderInput | SortOrder
    mp_payment_id?: SortOrderInput | SortOrder
    mp_status?: SortOrderInput | SortOrder
    monto?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: pagosCountOrderByAggregateInput
    _avg?: pagosAvgOrderByAggregateInput
    _max?: pagosMaxOrderByAggregateInput
    _min?: pagosMinOrderByAggregateInput
    _sum?: pagosSumOrderByAggregateInput
  }

  export type pagosScalarWhereWithAggregatesInput = {
    AND?: pagosScalarWhereWithAggregatesInput | pagosScalarWhereWithAggregatesInput[]
    OR?: pagosScalarWhereWithAggregatesInput[]
    NOT?: pagosScalarWhereWithAggregatesInput | pagosScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"pagos"> | string
    solicitud_id?: UuidWithAggregatesFilter<"pagos"> | string
    mp_preference_id?: StringNullableWithAggregatesFilter<"pagos"> | string | null
    mp_payment_id?: StringNullableWithAggregatesFilter<"pagos"> | string | null
    mp_status?: StringNullableWithAggregatesFilter<"pagos"> | string | null
    monto?: DecimalWithAggregatesFilter<"pagos"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeWithAggregatesFilter<"pagos"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"pagos"> | Date | string
  }

  export type compradoresCreateInput = {
    id?: string
    nombre: string
    apellido: string
    correo: string
    telefono?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    solicitudes?: solicitudesCreateNestedManyWithoutCompradorInput
  }

  export type compradoresUncheckedCreateInput = {
    id?: string
    nombre: string
    apellido: string
    correo: string
    telefono?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    solicitudes?: solicitudesUncheckedCreateNestedManyWithoutCompradorInput
  }

  export type compradoresUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    solicitudes?: solicitudesUpdateManyWithoutCompradorNestedInput
  }

  export type compradoresUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    solicitudes?: solicitudesUncheckedUpdateManyWithoutCompradorNestedInput
  }

  export type compradoresCreateManyInput = {
    id?: string
    nombre: string
    apellido: string
    correo: string
    telefono?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type compradoresUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type compradoresUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type solicitudesCreateInput = {
    id?: string
    tipo: string
    status?: string
    numero_a_portar?: string | null
    nip_portabilidad?: string | null
    numero_telefono?: string | null
    iccid?: string | null
    curp?: string | null
    imei2?: string | null
    numero_contacto?: string | null
    numero_oficina?: string | null
    numero_trabajo?: string | null
    numero_casa?: string | null
    acepta_privacidad?: boolean
    observaciones?: string | null
    fecha_solicitud?: Date | string
    fecha_activacion?: Date | string | null
    updated_at?: Date | string
    comprador: compradoresCreateNestedOneWithoutSolicitudesInput
    referencias?: solicitud_referenciasCreateNestedManyWithoutSolicitudInput
    documentos?: solicitud_documentosCreateNestedManyWithoutSolicitudInput
    pagos?: pagosCreateNestedManyWithoutSolicitudInput
  }

  export type solicitudesUncheckedCreateInput = {
    id?: string
    comprador_id: string
    tipo: string
    status?: string
    numero_a_portar?: string | null
    nip_portabilidad?: string | null
    numero_telefono?: string | null
    iccid?: string | null
    curp?: string | null
    imei2?: string | null
    numero_contacto?: string | null
    numero_oficina?: string | null
    numero_trabajo?: string | null
    numero_casa?: string | null
    acepta_privacidad?: boolean
    observaciones?: string | null
    fecha_solicitud?: Date | string
    fecha_activacion?: Date | string | null
    updated_at?: Date | string
    referencias?: solicitud_referenciasUncheckedCreateNestedManyWithoutSolicitudInput
    documentos?: solicitud_documentosUncheckedCreateNestedManyWithoutSolicitudInput
    pagos?: pagosUncheckedCreateNestedManyWithoutSolicitudInput
  }

  export type solicitudesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    numero_a_portar?: NullableStringFieldUpdateOperationsInput | string | null
    nip_portabilidad?: NullableStringFieldUpdateOperationsInput | string | null
    numero_telefono?: NullableStringFieldUpdateOperationsInput | string | null
    iccid?: NullableStringFieldUpdateOperationsInput | string | null
    curp?: NullableStringFieldUpdateOperationsInput | string | null
    imei2?: NullableStringFieldUpdateOperationsInput | string | null
    numero_contacto?: NullableStringFieldUpdateOperationsInput | string | null
    numero_oficina?: NullableStringFieldUpdateOperationsInput | string | null
    numero_trabajo?: NullableStringFieldUpdateOperationsInput | string | null
    numero_casa?: NullableStringFieldUpdateOperationsInput | string | null
    acepta_privacidad?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_solicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_activacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comprador?: compradoresUpdateOneRequiredWithoutSolicitudesNestedInput
    referencias?: solicitud_referenciasUpdateManyWithoutSolicitudNestedInput
    documentos?: solicitud_documentosUpdateManyWithoutSolicitudNestedInput
    pagos?: pagosUpdateManyWithoutSolicitudNestedInput
  }

  export type solicitudesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    comprador_id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    numero_a_portar?: NullableStringFieldUpdateOperationsInput | string | null
    nip_portabilidad?: NullableStringFieldUpdateOperationsInput | string | null
    numero_telefono?: NullableStringFieldUpdateOperationsInput | string | null
    iccid?: NullableStringFieldUpdateOperationsInput | string | null
    curp?: NullableStringFieldUpdateOperationsInput | string | null
    imei2?: NullableStringFieldUpdateOperationsInput | string | null
    numero_contacto?: NullableStringFieldUpdateOperationsInput | string | null
    numero_oficina?: NullableStringFieldUpdateOperationsInput | string | null
    numero_trabajo?: NullableStringFieldUpdateOperationsInput | string | null
    numero_casa?: NullableStringFieldUpdateOperationsInput | string | null
    acepta_privacidad?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_solicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_activacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referencias?: solicitud_referenciasUncheckedUpdateManyWithoutSolicitudNestedInput
    documentos?: solicitud_documentosUncheckedUpdateManyWithoutSolicitudNestedInput
    pagos?: pagosUncheckedUpdateManyWithoutSolicitudNestedInput
  }

  export type solicitudesCreateManyInput = {
    id?: string
    comprador_id: string
    tipo: string
    status?: string
    numero_a_portar?: string | null
    nip_portabilidad?: string | null
    numero_telefono?: string | null
    iccid?: string | null
    curp?: string | null
    imei2?: string | null
    numero_contacto?: string | null
    numero_oficina?: string | null
    numero_trabajo?: string | null
    numero_casa?: string | null
    acepta_privacidad?: boolean
    observaciones?: string | null
    fecha_solicitud?: Date | string
    fecha_activacion?: Date | string | null
    updated_at?: Date | string
  }

  export type solicitudesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    numero_a_portar?: NullableStringFieldUpdateOperationsInput | string | null
    nip_portabilidad?: NullableStringFieldUpdateOperationsInput | string | null
    numero_telefono?: NullableStringFieldUpdateOperationsInput | string | null
    iccid?: NullableStringFieldUpdateOperationsInput | string | null
    curp?: NullableStringFieldUpdateOperationsInput | string | null
    imei2?: NullableStringFieldUpdateOperationsInput | string | null
    numero_contacto?: NullableStringFieldUpdateOperationsInput | string | null
    numero_oficina?: NullableStringFieldUpdateOperationsInput | string | null
    numero_trabajo?: NullableStringFieldUpdateOperationsInput | string | null
    numero_casa?: NullableStringFieldUpdateOperationsInput | string | null
    acepta_privacidad?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_solicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_activacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type solicitudesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    comprador_id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    numero_a_portar?: NullableStringFieldUpdateOperationsInput | string | null
    nip_portabilidad?: NullableStringFieldUpdateOperationsInput | string | null
    numero_telefono?: NullableStringFieldUpdateOperationsInput | string | null
    iccid?: NullableStringFieldUpdateOperationsInput | string | null
    curp?: NullableStringFieldUpdateOperationsInput | string | null
    imei2?: NullableStringFieldUpdateOperationsInput | string | null
    numero_contacto?: NullableStringFieldUpdateOperationsInput | string | null
    numero_oficina?: NullableStringFieldUpdateOperationsInput | string | null
    numero_trabajo?: NullableStringFieldUpdateOperationsInput | string | null
    numero_casa?: NullableStringFieldUpdateOperationsInput | string | null
    acepta_privacidad?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_solicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_activacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type solicitud_referenciasCreateInput = {
    id?: string
    nombre: string
    primer_apellido: string
    celular: string
    solicitud: solicitudesCreateNestedOneWithoutReferenciasInput
  }

  export type solicitud_referenciasUncheckedCreateInput = {
    id?: string
    solicitud_id: string
    nombre: string
    primer_apellido: string
    celular: string
  }

  export type solicitud_referenciasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    primer_apellido?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    solicitud?: solicitudesUpdateOneRequiredWithoutReferenciasNestedInput
  }

  export type solicitud_referenciasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    solicitud_id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    primer_apellido?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
  }

  export type solicitud_referenciasCreateManyInput = {
    id?: string
    solicitud_id: string
    nombre: string
    primer_apellido: string
    celular: string
  }

  export type solicitud_referenciasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    primer_apellido?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
  }

  export type solicitud_referenciasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    solicitud_id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    primer_apellido?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
  }

  export type solicitud_documentosCreateInput = {
    id?: string
    tipo: string
    url: string
    created_at?: Date | string
    solicitud: solicitudesCreateNestedOneWithoutDocumentosInput
  }

  export type solicitud_documentosUncheckedCreateInput = {
    id?: string
    solicitud_id: string
    tipo: string
    url: string
    created_at?: Date | string
  }

  export type solicitud_documentosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    solicitud?: solicitudesUpdateOneRequiredWithoutDocumentosNestedInput
  }

  export type solicitud_documentosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    solicitud_id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type solicitud_documentosCreateManyInput = {
    id?: string
    solicitud_id: string
    tipo: string
    url: string
    created_at?: Date | string
  }

  export type solicitud_documentosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type solicitud_documentosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    solicitud_id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pagosCreateInput = {
    id?: string
    mp_preference_id?: string | null
    mp_payment_id?: string | null
    mp_status?: string | null
    monto: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    solicitud: solicitudesCreateNestedOneWithoutPagosInput
  }

  export type pagosUncheckedCreateInput = {
    id?: string
    solicitud_id: string
    mp_preference_id?: string | null
    mp_payment_id?: string | null
    mp_status?: string | null
    monto: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type pagosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mp_preference_id?: NullableStringFieldUpdateOperationsInput | string | null
    mp_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    mp_status?: NullableStringFieldUpdateOperationsInput | string | null
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    solicitud?: solicitudesUpdateOneRequiredWithoutPagosNestedInput
  }

  export type pagosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    solicitud_id?: StringFieldUpdateOperationsInput | string
    mp_preference_id?: NullableStringFieldUpdateOperationsInput | string | null
    mp_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    mp_status?: NullableStringFieldUpdateOperationsInput | string | null
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pagosCreateManyInput = {
    id?: string
    solicitud_id: string
    mp_preference_id?: string | null
    mp_payment_id?: string | null
    mp_status?: string | null
    monto: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type pagosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mp_preference_id?: NullableStringFieldUpdateOperationsInput | string | null
    mp_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    mp_status?: NullableStringFieldUpdateOperationsInput | string | null
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pagosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    solicitud_id?: StringFieldUpdateOperationsInput | string
    mp_preference_id?: NullableStringFieldUpdateOperationsInput | string | null
    mp_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    mp_status?: NullableStringFieldUpdateOperationsInput | string | null
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type SolicitudesListRelationFilter = {
    every?: solicitudesWhereInput
    some?: solicitudesWhereInput
    none?: solicitudesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type solicitudesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type compradoresCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type compradoresMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type compradoresMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type CompradoresScalarRelationFilter = {
    is?: compradoresWhereInput
    isNot?: compradoresWhereInput
  }

  export type Solicitud_referenciasListRelationFilter = {
    every?: solicitud_referenciasWhereInput
    some?: solicitud_referenciasWhereInput
    none?: solicitud_referenciasWhereInput
  }

  export type Solicitud_documentosListRelationFilter = {
    every?: solicitud_documentosWhereInput
    some?: solicitud_documentosWhereInput
    none?: solicitud_documentosWhereInput
  }

  export type PagosListRelationFilter = {
    every?: pagosWhereInput
    some?: pagosWhereInput
    none?: pagosWhereInput
  }

  export type solicitud_referenciasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type solicitud_documentosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pagosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type solicitudesCountOrderByAggregateInput = {
    id?: SortOrder
    comprador_id?: SortOrder
    tipo?: SortOrder
    status?: SortOrder
    numero_a_portar?: SortOrder
    nip_portabilidad?: SortOrder
    numero_telefono?: SortOrder
    iccid?: SortOrder
    curp?: SortOrder
    imei2?: SortOrder
    numero_contacto?: SortOrder
    numero_oficina?: SortOrder
    numero_trabajo?: SortOrder
    numero_casa?: SortOrder
    acepta_privacidad?: SortOrder
    observaciones?: SortOrder
    fecha_solicitud?: SortOrder
    fecha_activacion?: SortOrder
    updated_at?: SortOrder
  }

  export type solicitudesMaxOrderByAggregateInput = {
    id?: SortOrder
    comprador_id?: SortOrder
    tipo?: SortOrder
    status?: SortOrder
    numero_a_portar?: SortOrder
    nip_portabilidad?: SortOrder
    numero_telefono?: SortOrder
    iccid?: SortOrder
    curp?: SortOrder
    imei2?: SortOrder
    numero_contacto?: SortOrder
    numero_oficina?: SortOrder
    numero_trabajo?: SortOrder
    numero_casa?: SortOrder
    acepta_privacidad?: SortOrder
    observaciones?: SortOrder
    fecha_solicitud?: SortOrder
    fecha_activacion?: SortOrder
    updated_at?: SortOrder
  }

  export type solicitudesMinOrderByAggregateInput = {
    id?: SortOrder
    comprador_id?: SortOrder
    tipo?: SortOrder
    status?: SortOrder
    numero_a_portar?: SortOrder
    nip_portabilidad?: SortOrder
    numero_telefono?: SortOrder
    iccid?: SortOrder
    curp?: SortOrder
    imei2?: SortOrder
    numero_contacto?: SortOrder
    numero_oficina?: SortOrder
    numero_trabajo?: SortOrder
    numero_casa?: SortOrder
    acepta_privacidad?: SortOrder
    observaciones?: SortOrder
    fecha_solicitud?: SortOrder
    fecha_activacion?: SortOrder
    updated_at?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type SolicitudesScalarRelationFilter = {
    is?: solicitudesWhereInput
    isNot?: solicitudesWhereInput
  }

  export type solicitud_referenciasCountOrderByAggregateInput = {
    id?: SortOrder
    solicitud_id?: SortOrder
    nombre?: SortOrder
    primer_apellido?: SortOrder
    celular?: SortOrder
  }

  export type solicitud_referenciasMaxOrderByAggregateInput = {
    id?: SortOrder
    solicitud_id?: SortOrder
    nombre?: SortOrder
    primer_apellido?: SortOrder
    celular?: SortOrder
  }

  export type solicitud_referenciasMinOrderByAggregateInput = {
    id?: SortOrder
    solicitud_id?: SortOrder
    nombre?: SortOrder
    primer_apellido?: SortOrder
    celular?: SortOrder
  }

  export type solicitud_documentosCountOrderByAggregateInput = {
    id?: SortOrder
    solicitud_id?: SortOrder
    tipo?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
  }

  export type solicitud_documentosMaxOrderByAggregateInput = {
    id?: SortOrder
    solicitud_id?: SortOrder
    tipo?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
  }

  export type solicitud_documentosMinOrderByAggregateInput = {
    id?: SortOrder
    solicitud_id?: SortOrder
    tipo?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type pagosCountOrderByAggregateInput = {
    id?: SortOrder
    solicitud_id?: SortOrder
    mp_preference_id?: SortOrder
    mp_payment_id?: SortOrder
    mp_status?: SortOrder
    monto?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type pagosAvgOrderByAggregateInput = {
    monto?: SortOrder
  }

  export type pagosMaxOrderByAggregateInput = {
    id?: SortOrder
    solicitud_id?: SortOrder
    mp_preference_id?: SortOrder
    mp_payment_id?: SortOrder
    mp_status?: SortOrder
    monto?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type pagosMinOrderByAggregateInput = {
    id?: SortOrder
    solicitud_id?: SortOrder
    mp_preference_id?: SortOrder
    mp_payment_id?: SortOrder
    mp_status?: SortOrder
    monto?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type pagosSumOrderByAggregateInput = {
    monto?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type solicitudesCreateNestedManyWithoutCompradorInput = {
    create?: XOR<solicitudesCreateWithoutCompradorInput, solicitudesUncheckedCreateWithoutCompradorInput> | solicitudesCreateWithoutCompradorInput[] | solicitudesUncheckedCreateWithoutCompradorInput[]
    connectOrCreate?: solicitudesCreateOrConnectWithoutCompradorInput | solicitudesCreateOrConnectWithoutCompradorInput[]
    createMany?: solicitudesCreateManyCompradorInputEnvelope
    connect?: solicitudesWhereUniqueInput | solicitudesWhereUniqueInput[]
  }

  export type solicitudesUncheckedCreateNestedManyWithoutCompradorInput = {
    create?: XOR<solicitudesCreateWithoutCompradorInput, solicitudesUncheckedCreateWithoutCompradorInput> | solicitudesCreateWithoutCompradorInput[] | solicitudesUncheckedCreateWithoutCompradorInput[]
    connectOrCreate?: solicitudesCreateOrConnectWithoutCompradorInput | solicitudesCreateOrConnectWithoutCompradorInput[]
    createMany?: solicitudesCreateManyCompradorInputEnvelope
    connect?: solicitudesWhereUniqueInput | solicitudesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type solicitudesUpdateManyWithoutCompradorNestedInput = {
    create?: XOR<solicitudesCreateWithoutCompradorInput, solicitudesUncheckedCreateWithoutCompradorInput> | solicitudesCreateWithoutCompradorInput[] | solicitudesUncheckedCreateWithoutCompradorInput[]
    connectOrCreate?: solicitudesCreateOrConnectWithoutCompradorInput | solicitudesCreateOrConnectWithoutCompradorInput[]
    upsert?: solicitudesUpsertWithWhereUniqueWithoutCompradorInput | solicitudesUpsertWithWhereUniqueWithoutCompradorInput[]
    createMany?: solicitudesCreateManyCompradorInputEnvelope
    set?: solicitudesWhereUniqueInput | solicitudesWhereUniqueInput[]
    disconnect?: solicitudesWhereUniqueInput | solicitudesWhereUniqueInput[]
    delete?: solicitudesWhereUniqueInput | solicitudesWhereUniqueInput[]
    connect?: solicitudesWhereUniqueInput | solicitudesWhereUniqueInput[]
    update?: solicitudesUpdateWithWhereUniqueWithoutCompradorInput | solicitudesUpdateWithWhereUniqueWithoutCompradorInput[]
    updateMany?: solicitudesUpdateManyWithWhereWithoutCompradorInput | solicitudesUpdateManyWithWhereWithoutCompradorInput[]
    deleteMany?: solicitudesScalarWhereInput | solicitudesScalarWhereInput[]
  }

  export type solicitudesUncheckedUpdateManyWithoutCompradorNestedInput = {
    create?: XOR<solicitudesCreateWithoutCompradorInput, solicitudesUncheckedCreateWithoutCompradorInput> | solicitudesCreateWithoutCompradorInput[] | solicitudesUncheckedCreateWithoutCompradorInput[]
    connectOrCreate?: solicitudesCreateOrConnectWithoutCompradorInput | solicitudesCreateOrConnectWithoutCompradorInput[]
    upsert?: solicitudesUpsertWithWhereUniqueWithoutCompradorInput | solicitudesUpsertWithWhereUniqueWithoutCompradorInput[]
    createMany?: solicitudesCreateManyCompradorInputEnvelope
    set?: solicitudesWhereUniqueInput | solicitudesWhereUniqueInput[]
    disconnect?: solicitudesWhereUniqueInput | solicitudesWhereUniqueInput[]
    delete?: solicitudesWhereUniqueInput | solicitudesWhereUniqueInput[]
    connect?: solicitudesWhereUniqueInput | solicitudesWhereUniqueInput[]
    update?: solicitudesUpdateWithWhereUniqueWithoutCompradorInput | solicitudesUpdateWithWhereUniqueWithoutCompradorInput[]
    updateMany?: solicitudesUpdateManyWithWhereWithoutCompradorInput | solicitudesUpdateManyWithWhereWithoutCompradorInput[]
    deleteMany?: solicitudesScalarWhereInput | solicitudesScalarWhereInput[]
  }

  export type compradoresCreateNestedOneWithoutSolicitudesInput = {
    create?: XOR<compradoresCreateWithoutSolicitudesInput, compradoresUncheckedCreateWithoutSolicitudesInput>
    connectOrCreate?: compradoresCreateOrConnectWithoutSolicitudesInput
    connect?: compradoresWhereUniqueInput
  }

  export type solicitud_referenciasCreateNestedManyWithoutSolicitudInput = {
    create?: XOR<solicitud_referenciasCreateWithoutSolicitudInput, solicitud_referenciasUncheckedCreateWithoutSolicitudInput> | solicitud_referenciasCreateWithoutSolicitudInput[] | solicitud_referenciasUncheckedCreateWithoutSolicitudInput[]
    connectOrCreate?: solicitud_referenciasCreateOrConnectWithoutSolicitudInput | solicitud_referenciasCreateOrConnectWithoutSolicitudInput[]
    createMany?: solicitud_referenciasCreateManySolicitudInputEnvelope
    connect?: solicitud_referenciasWhereUniqueInput | solicitud_referenciasWhereUniqueInput[]
  }

  export type solicitud_documentosCreateNestedManyWithoutSolicitudInput = {
    create?: XOR<solicitud_documentosCreateWithoutSolicitudInput, solicitud_documentosUncheckedCreateWithoutSolicitudInput> | solicitud_documentosCreateWithoutSolicitudInput[] | solicitud_documentosUncheckedCreateWithoutSolicitudInput[]
    connectOrCreate?: solicitud_documentosCreateOrConnectWithoutSolicitudInput | solicitud_documentosCreateOrConnectWithoutSolicitudInput[]
    createMany?: solicitud_documentosCreateManySolicitudInputEnvelope
    connect?: solicitud_documentosWhereUniqueInput | solicitud_documentosWhereUniqueInput[]
  }

  export type pagosCreateNestedManyWithoutSolicitudInput = {
    create?: XOR<pagosCreateWithoutSolicitudInput, pagosUncheckedCreateWithoutSolicitudInput> | pagosCreateWithoutSolicitudInput[] | pagosUncheckedCreateWithoutSolicitudInput[]
    connectOrCreate?: pagosCreateOrConnectWithoutSolicitudInput | pagosCreateOrConnectWithoutSolicitudInput[]
    createMany?: pagosCreateManySolicitudInputEnvelope
    connect?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
  }

  export type solicitud_referenciasUncheckedCreateNestedManyWithoutSolicitudInput = {
    create?: XOR<solicitud_referenciasCreateWithoutSolicitudInput, solicitud_referenciasUncheckedCreateWithoutSolicitudInput> | solicitud_referenciasCreateWithoutSolicitudInput[] | solicitud_referenciasUncheckedCreateWithoutSolicitudInput[]
    connectOrCreate?: solicitud_referenciasCreateOrConnectWithoutSolicitudInput | solicitud_referenciasCreateOrConnectWithoutSolicitudInput[]
    createMany?: solicitud_referenciasCreateManySolicitudInputEnvelope
    connect?: solicitud_referenciasWhereUniqueInput | solicitud_referenciasWhereUniqueInput[]
  }

  export type solicitud_documentosUncheckedCreateNestedManyWithoutSolicitudInput = {
    create?: XOR<solicitud_documentosCreateWithoutSolicitudInput, solicitud_documentosUncheckedCreateWithoutSolicitudInput> | solicitud_documentosCreateWithoutSolicitudInput[] | solicitud_documentosUncheckedCreateWithoutSolicitudInput[]
    connectOrCreate?: solicitud_documentosCreateOrConnectWithoutSolicitudInput | solicitud_documentosCreateOrConnectWithoutSolicitudInput[]
    createMany?: solicitud_documentosCreateManySolicitudInputEnvelope
    connect?: solicitud_documentosWhereUniqueInput | solicitud_documentosWhereUniqueInput[]
  }

  export type pagosUncheckedCreateNestedManyWithoutSolicitudInput = {
    create?: XOR<pagosCreateWithoutSolicitudInput, pagosUncheckedCreateWithoutSolicitudInput> | pagosCreateWithoutSolicitudInput[] | pagosUncheckedCreateWithoutSolicitudInput[]
    connectOrCreate?: pagosCreateOrConnectWithoutSolicitudInput | pagosCreateOrConnectWithoutSolicitudInput[]
    createMany?: pagosCreateManySolicitudInputEnvelope
    connect?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type compradoresUpdateOneRequiredWithoutSolicitudesNestedInput = {
    create?: XOR<compradoresCreateWithoutSolicitudesInput, compradoresUncheckedCreateWithoutSolicitudesInput>
    connectOrCreate?: compradoresCreateOrConnectWithoutSolicitudesInput
    upsert?: compradoresUpsertWithoutSolicitudesInput
    connect?: compradoresWhereUniqueInput
    update?: XOR<XOR<compradoresUpdateToOneWithWhereWithoutSolicitudesInput, compradoresUpdateWithoutSolicitudesInput>, compradoresUncheckedUpdateWithoutSolicitudesInput>
  }

  export type solicitud_referenciasUpdateManyWithoutSolicitudNestedInput = {
    create?: XOR<solicitud_referenciasCreateWithoutSolicitudInput, solicitud_referenciasUncheckedCreateWithoutSolicitudInput> | solicitud_referenciasCreateWithoutSolicitudInput[] | solicitud_referenciasUncheckedCreateWithoutSolicitudInput[]
    connectOrCreate?: solicitud_referenciasCreateOrConnectWithoutSolicitudInput | solicitud_referenciasCreateOrConnectWithoutSolicitudInput[]
    upsert?: solicitud_referenciasUpsertWithWhereUniqueWithoutSolicitudInput | solicitud_referenciasUpsertWithWhereUniqueWithoutSolicitudInput[]
    createMany?: solicitud_referenciasCreateManySolicitudInputEnvelope
    set?: solicitud_referenciasWhereUniqueInput | solicitud_referenciasWhereUniqueInput[]
    disconnect?: solicitud_referenciasWhereUniqueInput | solicitud_referenciasWhereUniqueInput[]
    delete?: solicitud_referenciasWhereUniqueInput | solicitud_referenciasWhereUniqueInput[]
    connect?: solicitud_referenciasWhereUniqueInput | solicitud_referenciasWhereUniqueInput[]
    update?: solicitud_referenciasUpdateWithWhereUniqueWithoutSolicitudInput | solicitud_referenciasUpdateWithWhereUniqueWithoutSolicitudInput[]
    updateMany?: solicitud_referenciasUpdateManyWithWhereWithoutSolicitudInput | solicitud_referenciasUpdateManyWithWhereWithoutSolicitudInput[]
    deleteMany?: solicitud_referenciasScalarWhereInput | solicitud_referenciasScalarWhereInput[]
  }

  export type solicitud_documentosUpdateManyWithoutSolicitudNestedInput = {
    create?: XOR<solicitud_documentosCreateWithoutSolicitudInput, solicitud_documentosUncheckedCreateWithoutSolicitudInput> | solicitud_documentosCreateWithoutSolicitudInput[] | solicitud_documentosUncheckedCreateWithoutSolicitudInput[]
    connectOrCreate?: solicitud_documentosCreateOrConnectWithoutSolicitudInput | solicitud_documentosCreateOrConnectWithoutSolicitudInput[]
    upsert?: solicitud_documentosUpsertWithWhereUniqueWithoutSolicitudInput | solicitud_documentosUpsertWithWhereUniqueWithoutSolicitudInput[]
    createMany?: solicitud_documentosCreateManySolicitudInputEnvelope
    set?: solicitud_documentosWhereUniqueInput | solicitud_documentosWhereUniqueInput[]
    disconnect?: solicitud_documentosWhereUniqueInput | solicitud_documentosWhereUniqueInput[]
    delete?: solicitud_documentosWhereUniqueInput | solicitud_documentosWhereUniqueInput[]
    connect?: solicitud_documentosWhereUniqueInput | solicitud_documentosWhereUniqueInput[]
    update?: solicitud_documentosUpdateWithWhereUniqueWithoutSolicitudInput | solicitud_documentosUpdateWithWhereUniqueWithoutSolicitudInput[]
    updateMany?: solicitud_documentosUpdateManyWithWhereWithoutSolicitudInput | solicitud_documentosUpdateManyWithWhereWithoutSolicitudInput[]
    deleteMany?: solicitud_documentosScalarWhereInput | solicitud_documentosScalarWhereInput[]
  }

  export type pagosUpdateManyWithoutSolicitudNestedInput = {
    create?: XOR<pagosCreateWithoutSolicitudInput, pagosUncheckedCreateWithoutSolicitudInput> | pagosCreateWithoutSolicitudInput[] | pagosUncheckedCreateWithoutSolicitudInput[]
    connectOrCreate?: pagosCreateOrConnectWithoutSolicitudInput | pagosCreateOrConnectWithoutSolicitudInput[]
    upsert?: pagosUpsertWithWhereUniqueWithoutSolicitudInput | pagosUpsertWithWhereUniqueWithoutSolicitudInput[]
    createMany?: pagosCreateManySolicitudInputEnvelope
    set?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
    disconnect?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
    delete?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
    connect?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
    update?: pagosUpdateWithWhereUniqueWithoutSolicitudInput | pagosUpdateWithWhereUniqueWithoutSolicitudInput[]
    updateMany?: pagosUpdateManyWithWhereWithoutSolicitudInput | pagosUpdateManyWithWhereWithoutSolicitudInput[]
    deleteMany?: pagosScalarWhereInput | pagosScalarWhereInput[]
  }

  export type solicitud_referenciasUncheckedUpdateManyWithoutSolicitudNestedInput = {
    create?: XOR<solicitud_referenciasCreateWithoutSolicitudInput, solicitud_referenciasUncheckedCreateWithoutSolicitudInput> | solicitud_referenciasCreateWithoutSolicitudInput[] | solicitud_referenciasUncheckedCreateWithoutSolicitudInput[]
    connectOrCreate?: solicitud_referenciasCreateOrConnectWithoutSolicitudInput | solicitud_referenciasCreateOrConnectWithoutSolicitudInput[]
    upsert?: solicitud_referenciasUpsertWithWhereUniqueWithoutSolicitudInput | solicitud_referenciasUpsertWithWhereUniqueWithoutSolicitudInput[]
    createMany?: solicitud_referenciasCreateManySolicitudInputEnvelope
    set?: solicitud_referenciasWhereUniqueInput | solicitud_referenciasWhereUniqueInput[]
    disconnect?: solicitud_referenciasWhereUniqueInput | solicitud_referenciasWhereUniqueInput[]
    delete?: solicitud_referenciasWhereUniqueInput | solicitud_referenciasWhereUniqueInput[]
    connect?: solicitud_referenciasWhereUniqueInput | solicitud_referenciasWhereUniqueInput[]
    update?: solicitud_referenciasUpdateWithWhereUniqueWithoutSolicitudInput | solicitud_referenciasUpdateWithWhereUniqueWithoutSolicitudInput[]
    updateMany?: solicitud_referenciasUpdateManyWithWhereWithoutSolicitudInput | solicitud_referenciasUpdateManyWithWhereWithoutSolicitudInput[]
    deleteMany?: solicitud_referenciasScalarWhereInput | solicitud_referenciasScalarWhereInput[]
  }

  export type solicitud_documentosUncheckedUpdateManyWithoutSolicitudNestedInput = {
    create?: XOR<solicitud_documentosCreateWithoutSolicitudInput, solicitud_documentosUncheckedCreateWithoutSolicitudInput> | solicitud_documentosCreateWithoutSolicitudInput[] | solicitud_documentosUncheckedCreateWithoutSolicitudInput[]
    connectOrCreate?: solicitud_documentosCreateOrConnectWithoutSolicitudInput | solicitud_documentosCreateOrConnectWithoutSolicitudInput[]
    upsert?: solicitud_documentosUpsertWithWhereUniqueWithoutSolicitudInput | solicitud_documentosUpsertWithWhereUniqueWithoutSolicitudInput[]
    createMany?: solicitud_documentosCreateManySolicitudInputEnvelope
    set?: solicitud_documentosWhereUniqueInput | solicitud_documentosWhereUniqueInput[]
    disconnect?: solicitud_documentosWhereUniqueInput | solicitud_documentosWhereUniqueInput[]
    delete?: solicitud_documentosWhereUniqueInput | solicitud_documentosWhereUniqueInput[]
    connect?: solicitud_documentosWhereUniqueInput | solicitud_documentosWhereUniqueInput[]
    update?: solicitud_documentosUpdateWithWhereUniqueWithoutSolicitudInput | solicitud_documentosUpdateWithWhereUniqueWithoutSolicitudInput[]
    updateMany?: solicitud_documentosUpdateManyWithWhereWithoutSolicitudInput | solicitud_documentosUpdateManyWithWhereWithoutSolicitudInput[]
    deleteMany?: solicitud_documentosScalarWhereInput | solicitud_documentosScalarWhereInput[]
  }

  export type pagosUncheckedUpdateManyWithoutSolicitudNestedInput = {
    create?: XOR<pagosCreateWithoutSolicitudInput, pagosUncheckedCreateWithoutSolicitudInput> | pagosCreateWithoutSolicitudInput[] | pagosUncheckedCreateWithoutSolicitudInput[]
    connectOrCreate?: pagosCreateOrConnectWithoutSolicitudInput | pagosCreateOrConnectWithoutSolicitudInput[]
    upsert?: pagosUpsertWithWhereUniqueWithoutSolicitudInput | pagosUpsertWithWhereUniqueWithoutSolicitudInput[]
    createMany?: pagosCreateManySolicitudInputEnvelope
    set?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
    disconnect?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
    delete?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
    connect?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
    update?: pagosUpdateWithWhereUniqueWithoutSolicitudInput | pagosUpdateWithWhereUniqueWithoutSolicitudInput[]
    updateMany?: pagosUpdateManyWithWhereWithoutSolicitudInput | pagosUpdateManyWithWhereWithoutSolicitudInput[]
    deleteMany?: pagosScalarWhereInput | pagosScalarWhereInput[]
  }

  export type solicitudesCreateNestedOneWithoutReferenciasInput = {
    create?: XOR<solicitudesCreateWithoutReferenciasInput, solicitudesUncheckedCreateWithoutReferenciasInput>
    connectOrCreate?: solicitudesCreateOrConnectWithoutReferenciasInput
    connect?: solicitudesWhereUniqueInput
  }

  export type solicitudesUpdateOneRequiredWithoutReferenciasNestedInput = {
    create?: XOR<solicitudesCreateWithoutReferenciasInput, solicitudesUncheckedCreateWithoutReferenciasInput>
    connectOrCreate?: solicitudesCreateOrConnectWithoutReferenciasInput
    upsert?: solicitudesUpsertWithoutReferenciasInput
    connect?: solicitudesWhereUniqueInput
    update?: XOR<XOR<solicitudesUpdateToOneWithWhereWithoutReferenciasInput, solicitudesUpdateWithoutReferenciasInput>, solicitudesUncheckedUpdateWithoutReferenciasInput>
  }

  export type solicitudesCreateNestedOneWithoutDocumentosInput = {
    create?: XOR<solicitudesCreateWithoutDocumentosInput, solicitudesUncheckedCreateWithoutDocumentosInput>
    connectOrCreate?: solicitudesCreateOrConnectWithoutDocumentosInput
    connect?: solicitudesWhereUniqueInput
  }

  export type solicitudesUpdateOneRequiredWithoutDocumentosNestedInput = {
    create?: XOR<solicitudesCreateWithoutDocumentosInput, solicitudesUncheckedCreateWithoutDocumentosInput>
    connectOrCreate?: solicitudesCreateOrConnectWithoutDocumentosInput
    upsert?: solicitudesUpsertWithoutDocumentosInput
    connect?: solicitudesWhereUniqueInput
    update?: XOR<XOR<solicitudesUpdateToOneWithWhereWithoutDocumentosInput, solicitudesUpdateWithoutDocumentosInput>, solicitudesUncheckedUpdateWithoutDocumentosInput>
  }

  export type solicitudesCreateNestedOneWithoutPagosInput = {
    create?: XOR<solicitudesCreateWithoutPagosInput, solicitudesUncheckedCreateWithoutPagosInput>
    connectOrCreate?: solicitudesCreateOrConnectWithoutPagosInput
    connect?: solicitudesWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type solicitudesUpdateOneRequiredWithoutPagosNestedInput = {
    create?: XOR<solicitudesCreateWithoutPagosInput, solicitudesUncheckedCreateWithoutPagosInput>
    connectOrCreate?: solicitudesCreateOrConnectWithoutPagosInput
    upsert?: solicitudesUpsertWithoutPagosInput
    connect?: solicitudesWhereUniqueInput
    update?: XOR<XOR<solicitudesUpdateToOneWithWhereWithoutPagosInput, solicitudesUpdateWithoutPagosInput>, solicitudesUncheckedUpdateWithoutPagosInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type solicitudesCreateWithoutCompradorInput = {
    id?: string
    tipo: string
    status?: string
    numero_a_portar?: string | null
    nip_portabilidad?: string | null
    numero_telefono?: string | null
    iccid?: string | null
    curp?: string | null
    imei2?: string | null
    numero_contacto?: string | null
    numero_oficina?: string | null
    numero_trabajo?: string | null
    numero_casa?: string | null
    acepta_privacidad?: boolean
    observaciones?: string | null
    fecha_solicitud?: Date | string
    fecha_activacion?: Date | string | null
    updated_at?: Date | string
    referencias?: solicitud_referenciasCreateNestedManyWithoutSolicitudInput
    documentos?: solicitud_documentosCreateNestedManyWithoutSolicitudInput
    pagos?: pagosCreateNestedManyWithoutSolicitudInput
  }

  export type solicitudesUncheckedCreateWithoutCompradorInput = {
    id?: string
    tipo: string
    status?: string
    numero_a_portar?: string | null
    nip_portabilidad?: string | null
    numero_telefono?: string | null
    iccid?: string | null
    curp?: string | null
    imei2?: string | null
    numero_contacto?: string | null
    numero_oficina?: string | null
    numero_trabajo?: string | null
    numero_casa?: string | null
    acepta_privacidad?: boolean
    observaciones?: string | null
    fecha_solicitud?: Date | string
    fecha_activacion?: Date | string | null
    updated_at?: Date | string
    referencias?: solicitud_referenciasUncheckedCreateNestedManyWithoutSolicitudInput
    documentos?: solicitud_documentosUncheckedCreateNestedManyWithoutSolicitudInput
    pagos?: pagosUncheckedCreateNestedManyWithoutSolicitudInput
  }

  export type solicitudesCreateOrConnectWithoutCompradorInput = {
    where: solicitudesWhereUniqueInput
    create: XOR<solicitudesCreateWithoutCompradorInput, solicitudesUncheckedCreateWithoutCompradorInput>
  }

  export type solicitudesCreateManyCompradorInputEnvelope = {
    data: solicitudesCreateManyCompradorInput | solicitudesCreateManyCompradorInput[]
    skipDuplicates?: boolean
  }

  export type solicitudesUpsertWithWhereUniqueWithoutCompradorInput = {
    where: solicitudesWhereUniqueInput
    update: XOR<solicitudesUpdateWithoutCompradorInput, solicitudesUncheckedUpdateWithoutCompradorInput>
    create: XOR<solicitudesCreateWithoutCompradorInput, solicitudesUncheckedCreateWithoutCompradorInput>
  }

  export type solicitudesUpdateWithWhereUniqueWithoutCompradorInput = {
    where: solicitudesWhereUniqueInput
    data: XOR<solicitudesUpdateWithoutCompradorInput, solicitudesUncheckedUpdateWithoutCompradorInput>
  }

  export type solicitudesUpdateManyWithWhereWithoutCompradorInput = {
    where: solicitudesScalarWhereInput
    data: XOR<solicitudesUpdateManyMutationInput, solicitudesUncheckedUpdateManyWithoutCompradorInput>
  }

  export type solicitudesScalarWhereInput = {
    AND?: solicitudesScalarWhereInput | solicitudesScalarWhereInput[]
    OR?: solicitudesScalarWhereInput[]
    NOT?: solicitudesScalarWhereInput | solicitudesScalarWhereInput[]
    id?: UuidFilter<"solicitudes"> | string
    comprador_id?: UuidFilter<"solicitudes"> | string
    tipo?: StringFilter<"solicitudes"> | string
    status?: StringFilter<"solicitudes"> | string
    numero_a_portar?: StringNullableFilter<"solicitudes"> | string | null
    nip_portabilidad?: StringNullableFilter<"solicitudes"> | string | null
    numero_telefono?: StringNullableFilter<"solicitudes"> | string | null
    iccid?: StringNullableFilter<"solicitudes"> | string | null
    curp?: StringNullableFilter<"solicitudes"> | string | null
    imei2?: StringNullableFilter<"solicitudes"> | string | null
    numero_contacto?: StringNullableFilter<"solicitudes"> | string | null
    numero_oficina?: StringNullableFilter<"solicitudes"> | string | null
    numero_trabajo?: StringNullableFilter<"solicitudes"> | string | null
    numero_casa?: StringNullableFilter<"solicitudes"> | string | null
    acepta_privacidad?: BoolFilter<"solicitudes"> | boolean
    observaciones?: StringNullableFilter<"solicitudes"> | string | null
    fecha_solicitud?: DateTimeFilter<"solicitudes"> | Date | string
    fecha_activacion?: DateTimeNullableFilter<"solicitudes"> | Date | string | null
    updated_at?: DateTimeFilter<"solicitudes"> | Date | string
  }

  export type compradoresCreateWithoutSolicitudesInput = {
    id?: string
    nombre: string
    apellido: string
    correo: string
    telefono?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type compradoresUncheckedCreateWithoutSolicitudesInput = {
    id?: string
    nombre: string
    apellido: string
    correo: string
    telefono?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type compradoresCreateOrConnectWithoutSolicitudesInput = {
    where: compradoresWhereUniqueInput
    create: XOR<compradoresCreateWithoutSolicitudesInput, compradoresUncheckedCreateWithoutSolicitudesInput>
  }

  export type solicitud_referenciasCreateWithoutSolicitudInput = {
    id?: string
    nombre: string
    primer_apellido: string
    celular: string
  }

  export type solicitud_referenciasUncheckedCreateWithoutSolicitudInput = {
    id?: string
    nombre: string
    primer_apellido: string
    celular: string
  }

  export type solicitud_referenciasCreateOrConnectWithoutSolicitudInput = {
    where: solicitud_referenciasWhereUniqueInput
    create: XOR<solicitud_referenciasCreateWithoutSolicitudInput, solicitud_referenciasUncheckedCreateWithoutSolicitudInput>
  }

  export type solicitud_referenciasCreateManySolicitudInputEnvelope = {
    data: solicitud_referenciasCreateManySolicitudInput | solicitud_referenciasCreateManySolicitudInput[]
    skipDuplicates?: boolean
  }

  export type solicitud_documentosCreateWithoutSolicitudInput = {
    id?: string
    tipo: string
    url: string
    created_at?: Date | string
  }

  export type solicitud_documentosUncheckedCreateWithoutSolicitudInput = {
    id?: string
    tipo: string
    url: string
    created_at?: Date | string
  }

  export type solicitud_documentosCreateOrConnectWithoutSolicitudInput = {
    where: solicitud_documentosWhereUniqueInput
    create: XOR<solicitud_documentosCreateWithoutSolicitudInput, solicitud_documentosUncheckedCreateWithoutSolicitudInput>
  }

  export type solicitud_documentosCreateManySolicitudInputEnvelope = {
    data: solicitud_documentosCreateManySolicitudInput | solicitud_documentosCreateManySolicitudInput[]
    skipDuplicates?: boolean
  }

  export type pagosCreateWithoutSolicitudInput = {
    id?: string
    mp_preference_id?: string | null
    mp_payment_id?: string | null
    mp_status?: string | null
    monto: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type pagosUncheckedCreateWithoutSolicitudInput = {
    id?: string
    mp_preference_id?: string | null
    mp_payment_id?: string | null
    mp_status?: string | null
    monto: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type pagosCreateOrConnectWithoutSolicitudInput = {
    where: pagosWhereUniqueInput
    create: XOR<pagosCreateWithoutSolicitudInput, pagosUncheckedCreateWithoutSolicitudInput>
  }

  export type pagosCreateManySolicitudInputEnvelope = {
    data: pagosCreateManySolicitudInput | pagosCreateManySolicitudInput[]
    skipDuplicates?: boolean
  }

  export type compradoresUpsertWithoutSolicitudesInput = {
    update: XOR<compradoresUpdateWithoutSolicitudesInput, compradoresUncheckedUpdateWithoutSolicitudesInput>
    create: XOR<compradoresCreateWithoutSolicitudesInput, compradoresUncheckedCreateWithoutSolicitudesInput>
    where?: compradoresWhereInput
  }

  export type compradoresUpdateToOneWithWhereWithoutSolicitudesInput = {
    where?: compradoresWhereInput
    data: XOR<compradoresUpdateWithoutSolicitudesInput, compradoresUncheckedUpdateWithoutSolicitudesInput>
  }

  export type compradoresUpdateWithoutSolicitudesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type compradoresUncheckedUpdateWithoutSolicitudesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type solicitud_referenciasUpsertWithWhereUniqueWithoutSolicitudInput = {
    where: solicitud_referenciasWhereUniqueInput
    update: XOR<solicitud_referenciasUpdateWithoutSolicitudInput, solicitud_referenciasUncheckedUpdateWithoutSolicitudInput>
    create: XOR<solicitud_referenciasCreateWithoutSolicitudInput, solicitud_referenciasUncheckedCreateWithoutSolicitudInput>
  }

  export type solicitud_referenciasUpdateWithWhereUniqueWithoutSolicitudInput = {
    where: solicitud_referenciasWhereUniqueInput
    data: XOR<solicitud_referenciasUpdateWithoutSolicitudInput, solicitud_referenciasUncheckedUpdateWithoutSolicitudInput>
  }

  export type solicitud_referenciasUpdateManyWithWhereWithoutSolicitudInput = {
    where: solicitud_referenciasScalarWhereInput
    data: XOR<solicitud_referenciasUpdateManyMutationInput, solicitud_referenciasUncheckedUpdateManyWithoutSolicitudInput>
  }

  export type solicitud_referenciasScalarWhereInput = {
    AND?: solicitud_referenciasScalarWhereInput | solicitud_referenciasScalarWhereInput[]
    OR?: solicitud_referenciasScalarWhereInput[]
    NOT?: solicitud_referenciasScalarWhereInput | solicitud_referenciasScalarWhereInput[]
    id?: UuidFilter<"solicitud_referencias"> | string
    solicitud_id?: UuidFilter<"solicitud_referencias"> | string
    nombre?: StringFilter<"solicitud_referencias"> | string
    primer_apellido?: StringFilter<"solicitud_referencias"> | string
    celular?: StringFilter<"solicitud_referencias"> | string
  }

  export type solicitud_documentosUpsertWithWhereUniqueWithoutSolicitudInput = {
    where: solicitud_documentosWhereUniqueInput
    update: XOR<solicitud_documentosUpdateWithoutSolicitudInput, solicitud_documentosUncheckedUpdateWithoutSolicitudInput>
    create: XOR<solicitud_documentosCreateWithoutSolicitudInput, solicitud_documentosUncheckedCreateWithoutSolicitudInput>
  }

  export type solicitud_documentosUpdateWithWhereUniqueWithoutSolicitudInput = {
    where: solicitud_documentosWhereUniqueInput
    data: XOR<solicitud_documentosUpdateWithoutSolicitudInput, solicitud_documentosUncheckedUpdateWithoutSolicitudInput>
  }

  export type solicitud_documentosUpdateManyWithWhereWithoutSolicitudInput = {
    where: solicitud_documentosScalarWhereInput
    data: XOR<solicitud_documentosUpdateManyMutationInput, solicitud_documentosUncheckedUpdateManyWithoutSolicitudInput>
  }

  export type solicitud_documentosScalarWhereInput = {
    AND?: solicitud_documentosScalarWhereInput | solicitud_documentosScalarWhereInput[]
    OR?: solicitud_documentosScalarWhereInput[]
    NOT?: solicitud_documentosScalarWhereInput | solicitud_documentosScalarWhereInput[]
    id?: UuidFilter<"solicitud_documentos"> | string
    solicitud_id?: UuidFilter<"solicitud_documentos"> | string
    tipo?: StringFilter<"solicitud_documentos"> | string
    url?: StringFilter<"solicitud_documentos"> | string
    created_at?: DateTimeFilter<"solicitud_documentos"> | Date | string
  }

  export type pagosUpsertWithWhereUniqueWithoutSolicitudInput = {
    where: pagosWhereUniqueInput
    update: XOR<pagosUpdateWithoutSolicitudInput, pagosUncheckedUpdateWithoutSolicitudInput>
    create: XOR<pagosCreateWithoutSolicitudInput, pagosUncheckedCreateWithoutSolicitudInput>
  }

  export type pagosUpdateWithWhereUniqueWithoutSolicitudInput = {
    where: pagosWhereUniqueInput
    data: XOR<pagosUpdateWithoutSolicitudInput, pagosUncheckedUpdateWithoutSolicitudInput>
  }

  export type pagosUpdateManyWithWhereWithoutSolicitudInput = {
    where: pagosScalarWhereInput
    data: XOR<pagosUpdateManyMutationInput, pagosUncheckedUpdateManyWithoutSolicitudInput>
  }

  export type pagosScalarWhereInput = {
    AND?: pagosScalarWhereInput | pagosScalarWhereInput[]
    OR?: pagosScalarWhereInput[]
    NOT?: pagosScalarWhereInput | pagosScalarWhereInput[]
    id?: UuidFilter<"pagos"> | string
    solicitud_id?: UuidFilter<"pagos"> | string
    mp_preference_id?: StringNullableFilter<"pagos"> | string | null
    mp_payment_id?: StringNullableFilter<"pagos"> | string | null
    mp_status?: StringNullableFilter<"pagos"> | string | null
    monto?: DecimalFilter<"pagos"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"pagos"> | Date | string
    updated_at?: DateTimeFilter<"pagos"> | Date | string
  }

  export type solicitudesCreateWithoutReferenciasInput = {
    id?: string
    tipo: string
    status?: string
    numero_a_portar?: string | null
    nip_portabilidad?: string | null
    numero_telefono?: string | null
    iccid?: string | null
    curp?: string | null
    imei2?: string | null
    numero_contacto?: string | null
    numero_oficina?: string | null
    numero_trabajo?: string | null
    numero_casa?: string | null
    acepta_privacidad?: boolean
    observaciones?: string | null
    fecha_solicitud?: Date | string
    fecha_activacion?: Date | string | null
    updated_at?: Date | string
    comprador: compradoresCreateNestedOneWithoutSolicitudesInput
    documentos?: solicitud_documentosCreateNestedManyWithoutSolicitudInput
    pagos?: pagosCreateNestedManyWithoutSolicitudInput
  }

  export type solicitudesUncheckedCreateWithoutReferenciasInput = {
    id?: string
    comprador_id: string
    tipo: string
    status?: string
    numero_a_portar?: string | null
    nip_portabilidad?: string | null
    numero_telefono?: string | null
    iccid?: string | null
    curp?: string | null
    imei2?: string | null
    numero_contacto?: string | null
    numero_oficina?: string | null
    numero_trabajo?: string | null
    numero_casa?: string | null
    acepta_privacidad?: boolean
    observaciones?: string | null
    fecha_solicitud?: Date | string
    fecha_activacion?: Date | string | null
    updated_at?: Date | string
    documentos?: solicitud_documentosUncheckedCreateNestedManyWithoutSolicitudInput
    pagos?: pagosUncheckedCreateNestedManyWithoutSolicitudInput
  }

  export type solicitudesCreateOrConnectWithoutReferenciasInput = {
    where: solicitudesWhereUniqueInput
    create: XOR<solicitudesCreateWithoutReferenciasInput, solicitudesUncheckedCreateWithoutReferenciasInput>
  }

  export type solicitudesUpsertWithoutReferenciasInput = {
    update: XOR<solicitudesUpdateWithoutReferenciasInput, solicitudesUncheckedUpdateWithoutReferenciasInput>
    create: XOR<solicitudesCreateWithoutReferenciasInput, solicitudesUncheckedCreateWithoutReferenciasInput>
    where?: solicitudesWhereInput
  }

  export type solicitudesUpdateToOneWithWhereWithoutReferenciasInput = {
    where?: solicitudesWhereInput
    data: XOR<solicitudesUpdateWithoutReferenciasInput, solicitudesUncheckedUpdateWithoutReferenciasInput>
  }

  export type solicitudesUpdateWithoutReferenciasInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    numero_a_portar?: NullableStringFieldUpdateOperationsInput | string | null
    nip_portabilidad?: NullableStringFieldUpdateOperationsInput | string | null
    numero_telefono?: NullableStringFieldUpdateOperationsInput | string | null
    iccid?: NullableStringFieldUpdateOperationsInput | string | null
    curp?: NullableStringFieldUpdateOperationsInput | string | null
    imei2?: NullableStringFieldUpdateOperationsInput | string | null
    numero_contacto?: NullableStringFieldUpdateOperationsInput | string | null
    numero_oficina?: NullableStringFieldUpdateOperationsInput | string | null
    numero_trabajo?: NullableStringFieldUpdateOperationsInput | string | null
    numero_casa?: NullableStringFieldUpdateOperationsInput | string | null
    acepta_privacidad?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_solicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_activacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comprador?: compradoresUpdateOneRequiredWithoutSolicitudesNestedInput
    documentos?: solicitud_documentosUpdateManyWithoutSolicitudNestedInput
    pagos?: pagosUpdateManyWithoutSolicitudNestedInput
  }

  export type solicitudesUncheckedUpdateWithoutReferenciasInput = {
    id?: StringFieldUpdateOperationsInput | string
    comprador_id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    numero_a_portar?: NullableStringFieldUpdateOperationsInput | string | null
    nip_portabilidad?: NullableStringFieldUpdateOperationsInput | string | null
    numero_telefono?: NullableStringFieldUpdateOperationsInput | string | null
    iccid?: NullableStringFieldUpdateOperationsInput | string | null
    curp?: NullableStringFieldUpdateOperationsInput | string | null
    imei2?: NullableStringFieldUpdateOperationsInput | string | null
    numero_contacto?: NullableStringFieldUpdateOperationsInput | string | null
    numero_oficina?: NullableStringFieldUpdateOperationsInput | string | null
    numero_trabajo?: NullableStringFieldUpdateOperationsInput | string | null
    numero_casa?: NullableStringFieldUpdateOperationsInput | string | null
    acepta_privacidad?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_solicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_activacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    documentos?: solicitud_documentosUncheckedUpdateManyWithoutSolicitudNestedInput
    pagos?: pagosUncheckedUpdateManyWithoutSolicitudNestedInput
  }

  export type solicitudesCreateWithoutDocumentosInput = {
    id?: string
    tipo: string
    status?: string
    numero_a_portar?: string | null
    nip_portabilidad?: string | null
    numero_telefono?: string | null
    iccid?: string | null
    curp?: string | null
    imei2?: string | null
    numero_contacto?: string | null
    numero_oficina?: string | null
    numero_trabajo?: string | null
    numero_casa?: string | null
    acepta_privacidad?: boolean
    observaciones?: string | null
    fecha_solicitud?: Date | string
    fecha_activacion?: Date | string | null
    updated_at?: Date | string
    comprador: compradoresCreateNestedOneWithoutSolicitudesInput
    referencias?: solicitud_referenciasCreateNestedManyWithoutSolicitudInput
    pagos?: pagosCreateNestedManyWithoutSolicitudInput
  }

  export type solicitudesUncheckedCreateWithoutDocumentosInput = {
    id?: string
    comprador_id: string
    tipo: string
    status?: string
    numero_a_portar?: string | null
    nip_portabilidad?: string | null
    numero_telefono?: string | null
    iccid?: string | null
    curp?: string | null
    imei2?: string | null
    numero_contacto?: string | null
    numero_oficina?: string | null
    numero_trabajo?: string | null
    numero_casa?: string | null
    acepta_privacidad?: boolean
    observaciones?: string | null
    fecha_solicitud?: Date | string
    fecha_activacion?: Date | string | null
    updated_at?: Date | string
    referencias?: solicitud_referenciasUncheckedCreateNestedManyWithoutSolicitudInput
    pagos?: pagosUncheckedCreateNestedManyWithoutSolicitudInput
  }

  export type solicitudesCreateOrConnectWithoutDocumentosInput = {
    where: solicitudesWhereUniqueInput
    create: XOR<solicitudesCreateWithoutDocumentosInput, solicitudesUncheckedCreateWithoutDocumentosInput>
  }

  export type solicitudesUpsertWithoutDocumentosInput = {
    update: XOR<solicitudesUpdateWithoutDocumentosInput, solicitudesUncheckedUpdateWithoutDocumentosInput>
    create: XOR<solicitudesCreateWithoutDocumentosInput, solicitudesUncheckedCreateWithoutDocumentosInput>
    where?: solicitudesWhereInput
  }

  export type solicitudesUpdateToOneWithWhereWithoutDocumentosInput = {
    where?: solicitudesWhereInput
    data: XOR<solicitudesUpdateWithoutDocumentosInput, solicitudesUncheckedUpdateWithoutDocumentosInput>
  }

  export type solicitudesUpdateWithoutDocumentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    numero_a_portar?: NullableStringFieldUpdateOperationsInput | string | null
    nip_portabilidad?: NullableStringFieldUpdateOperationsInput | string | null
    numero_telefono?: NullableStringFieldUpdateOperationsInput | string | null
    iccid?: NullableStringFieldUpdateOperationsInput | string | null
    curp?: NullableStringFieldUpdateOperationsInput | string | null
    imei2?: NullableStringFieldUpdateOperationsInput | string | null
    numero_contacto?: NullableStringFieldUpdateOperationsInput | string | null
    numero_oficina?: NullableStringFieldUpdateOperationsInput | string | null
    numero_trabajo?: NullableStringFieldUpdateOperationsInput | string | null
    numero_casa?: NullableStringFieldUpdateOperationsInput | string | null
    acepta_privacidad?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_solicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_activacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comprador?: compradoresUpdateOneRequiredWithoutSolicitudesNestedInput
    referencias?: solicitud_referenciasUpdateManyWithoutSolicitudNestedInput
    pagos?: pagosUpdateManyWithoutSolicitudNestedInput
  }

  export type solicitudesUncheckedUpdateWithoutDocumentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    comprador_id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    numero_a_portar?: NullableStringFieldUpdateOperationsInput | string | null
    nip_portabilidad?: NullableStringFieldUpdateOperationsInput | string | null
    numero_telefono?: NullableStringFieldUpdateOperationsInput | string | null
    iccid?: NullableStringFieldUpdateOperationsInput | string | null
    curp?: NullableStringFieldUpdateOperationsInput | string | null
    imei2?: NullableStringFieldUpdateOperationsInput | string | null
    numero_contacto?: NullableStringFieldUpdateOperationsInput | string | null
    numero_oficina?: NullableStringFieldUpdateOperationsInput | string | null
    numero_trabajo?: NullableStringFieldUpdateOperationsInput | string | null
    numero_casa?: NullableStringFieldUpdateOperationsInput | string | null
    acepta_privacidad?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_solicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_activacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referencias?: solicitud_referenciasUncheckedUpdateManyWithoutSolicitudNestedInput
    pagos?: pagosUncheckedUpdateManyWithoutSolicitudNestedInput
  }

  export type solicitudesCreateWithoutPagosInput = {
    id?: string
    tipo: string
    status?: string
    numero_a_portar?: string | null
    nip_portabilidad?: string | null
    numero_telefono?: string | null
    iccid?: string | null
    curp?: string | null
    imei2?: string | null
    numero_contacto?: string | null
    numero_oficina?: string | null
    numero_trabajo?: string | null
    numero_casa?: string | null
    acepta_privacidad?: boolean
    observaciones?: string | null
    fecha_solicitud?: Date | string
    fecha_activacion?: Date | string | null
    updated_at?: Date | string
    comprador: compradoresCreateNestedOneWithoutSolicitudesInput
    referencias?: solicitud_referenciasCreateNestedManyWithoutSolicitudInput
    documentos?: solicitud_documentosCreateNestedManyWithoutSolicitudInput
  }

  export type solicitudesUncheckedCreateWithoutPagosInput = {
    id?: string
    comprador_id: string
    tipo: string
    status?: string
    numero_a_portar?: string | null
    nip_portabilidad?: string | null
    numero_telefono?: string | null
    iccid?: string | null
    curp?: string | null
    imei2?: string | null
    numero_contacto?: string | null
    numero_oficina?: string | null
    numero_trabajo?: string | null
    numero_casa?: string | null
    acepta_privacidad?: boolean
    observaciones?: string | null
    fecha_solicitud?: Date | string
    fecha_activacion?: Date | string | null
    updated_at?: Date | string
    referencias?: solicitud_referenciasUncheckedCreateNestedManyWithoutSolicitudInput
    documentos?: solicitud_documentosUncheckedCreateNestedManyWithoutSolicitudInput
  }

  export type solicitudesCreateOrConnectWithoutPagosInput = {
    where: solicitudesWhereUniqueInput
    create: XOR<solicitudesCreateWithoutPagosInput, solicitudesUncheckedCreateWithoutPagosInput>
  }

  export type solicitudesUpsertWithoutPagosInput = {
    update: XOR<solicitudesUpdateWithoutPagosInput, solicitudesUncheckedUpdateWithoutPagosInput>
    create: XOR<solicitudesCreateWithoutPagosInput, solicitudesUncheckedCreateWithoutPagosInput>
    where?: solicitudesWhereInput
  }

  export type solicitudesUpdateToOneWithWhereWithoutPagosInput = {
    where?: solicitudesWhereInput
    data: XOR<solicitudesUpdateWithoutPagosInput, solicitudesUncheckedUpdateWithoutPagosInput>
  }

  export type solicitudesUpdateWithoutPagosInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    numero_a_portar?: NullableStringFieldUpdateOperationsInput | string | null
    nip_portabilidad?: NullableStringFieldUpdateOperationsInput | string | null
    numero_telefono?: NullableStringFieldUpdateOperationsInput | string | null
    iccid?: NullableStringFieldUpdateOperationsInput | string | null
    curp?: NullableStringFieldUpdateOperationsInput | string | null
    imei2?: NullableStringFieldUpdateOperationsInput | string | null
    numero_contacto?: NullableStringFieldUpdateOperationsInput | string | null
    numero_oficina?: NullableStringFieldUpdateOperationsInput | string | null
    numero_trabajo?: NullableStringFieldUpdateOperationsInput | string | null
    numero_casa?: NullableStringFieldUpdateOperationsInput | string | null
    acepta_privacidad?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_solicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_activacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comprador?: compradoresUpdateOneRequiredWithoutSolicitudesNestedInput
    referencias?: solicitud_referenciasUpdateManyWithoutSolicitudNestedInput
    documentos?: solicitud_documentosUpdateManyWithoutSolicitudNestedInput
  }

  export type solicitudesUncheckedUpdateWithoutPagosInput = {
    id?: StringFieldUpdateOperationsInput | string
    comprador_id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    numero_a_portar?: NullableStringFieldUpdateOperationsInput | string | null
    nip_portabilidad?: NullableStringFieldUpdateOperationsInput | string | null
    numero_telefono?: NullableStringFieldUpdateOperationsInput | string | null
    iccid?: NullableStringFieldUpdateOperationsInput | string | null
    curp?: NullableStringFieldUpdateOperationsInput | string | null
    imei2?: NullableStringFieldUpdateOperationsInput | string | null
    numero_contacto?: NullableStringFieldUpdateOperationsInput | string | null
    numero_oficina?: NullableStringFieldUpdateOperationsInput | string | null
    numero_trabajo?: NullableStringFieldUpdateOperationsInput | string | null
    numero_casa?: NullableStringFieldUpdateOperationsInput | string | null
    acepta_privacidad?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_solicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_activacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referencias?: solicitud_referenciasUncheckedUpdateManyWithoutSolicitudNestedInput
    documentos?: solicitud_documentosUncheckedUpdateManyWithoutSolicitudNestedInput
  }

  export type solicitudesCreateManyCompradorInput = {
    id?: string
    tipo: string
    status?: string
    numero_a_portar?: string | null
    nip_portabilidad?: string | null
    numero_telefono?: string | null
    iccid?: string | null
    curp?: string | null
    imei2?: string | null
    numero_contacto?: string | null
    numero_oficina?: string | null
    numero_trabajo?: string | null
    numero_casa?: string | null
    acepta_privacidad?: boolean
    observaciones?: string | null
    fecha_solicitud?: Date | string
    fecha_activacion?: Date | string | null
    updated_at?: Date | string
  }

  export type solicitudesUpdateWithoutCompradorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    numero_a_portar?: NullableStringFieldUpdateOperationsInput | string | null
    nip_portabilidad?: NullableStringFieldUpdateOperationsInput | string | null
    numero_telefono?: NullableStringFieldUpdateOperationsInput | string | null
    iccid?: NullableStringFieldUpdateOperationsInput | string | null
    curp?: NullableStringFieldUpdateOperationsInput | string | null
    imei2?: NullableStringFieldUpdateOperationsInput | string | null
    numero_contacto?: NullableStringFieldUpdateOperationsInput | string | null
    numero_oficina?: NullableStringFieldUpdateOperationsInput | string | null
    numero_trabajo?: NullableStringFieldUpdateOperationsInput | string | null
    numero_casa?: NullableStringFieldUpdateOperationsInput | string | null
    acepta_privacidad?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_solicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_activacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referencias?: solicitud_referenciasUpdateManyWithoutSolicitudNestedInput
    documentos?: solicitud_documentosUpdateManyWithoutSolicitudNestedInput
    pagos?: pagosUpdateManyWithoutSolicitudNestedInput
  }

  export type solicitudesUncheckedUpdateWithoutCompradorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    numero_a_portar?: NullableStringFieldUpdateOperationsInput | string | null
    nip_portabilidad?: NullableStringFieldUpdateOperationsInput | string | null
    numero_telefono?: NullableStringFieldUpdateOperationsInput | string | null
    iccid?: NullableStringFieldUpdateOperationsInput | string | null
    curp?: NullableStringFieldUpdateOperationsInput | string | null
    imei2?: NullableStringFieldUpdateOperationsInput | string | null
    numero_contacto?: NullableStringFieldUpdateOperationsInput | string | null
    numero_oficina?: NullableStringFieldUpdateOperationsInput | string | null
    numero_trabajo?: NullableStringFieldUpdateOperationsInput | string | null
    numero_casa?: NullableStringFieldUpdateOperationsInput | string | null
    acepta_privacidad?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_solicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_activacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referencias?: solicitud_referenciasUncheckedUpdateManyWithoutSolicitudNestedInput
    documentos?: solicitud_documentosUncheckedUpdateManyWithoutSolicitudNestedInput
    pagos?: pagosUncheckedUpdateManyWithoutSolicitudNestedInput
  }

  export type solicitudesUncheckedUpdateManyWithoutCompradorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    numero_a_portar?: NullableStringFieldUpdateOperationsInput | string | null
    nip_portabilidad?: NullableStringFieldUpdateOperationsInput | string | null
    numero_telefono?: NullableStringFieldUpdateOperationsInput | string | null
    iccid?: NullableStringFieldUpdateOperationsInput | string | null
    curp?: NullableStringFieldUpdateOperationsInput | string | null
    imei2?: NullableStringFieldUpdateOperationsInput | string | null
    numero_contacto?: NullableStringFieldUpdateOperationsInput | string | null
    numero_oficina?: NullableStringFieldUpdateOperationsInput | string | null
    numero_trabajo?: NullableStringFieldUpdateOperationsInput | string | null
    numero_casa?: NullableStringFieldUpdateOperationsInput | string | null
    acepta_privacidad?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_solicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_activacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type solicitud_referenciasCreateManySolicitudInput = {
    id?: string
    nombre: string
    primer_apellido: string
    celular: string
  }

  export type solicitud_documentosCreateManySolicitudInput = {
    id?: string
    tipo: string
    url: string
    created_at?: Date | string
  }

  export type pagosCreateManySolicitudInput = {
    id?: string
    mp_preference_id?: string | null
    mp_payment_id?: string | null
    mp_status?: string | null
    monto: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type solicitud_referenciasUpdateWithoutSolicitudInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    primer_apellido?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
  }

  export type solicitud_referenciasUncheckedUpdateWithoutSolicitudInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    primer_apellido?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
  }

  export type solicitud_referenciasUncheckedUpdateManyWithoutSolicitudInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    primer_apellido?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
  }

  export type solicitud_documentosUpdateWithoutSolicitudInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type solicitud_documentosUncheckedUpdateWithoutSolicitudInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type solicitud_documentosUncheckedUpdateManyWithoutSolicitudInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pagosUpdateWithoutSolicitudInput = {
    id?: StringFieldUpdateOperationsInput | string
    mp_preference_id?: NullableStringFieldUpdateOperationsInput | string | null
    mp_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    mp_status?: NullableStringFieldUpdateOperationsInput | string | null
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pagosUncheckedUpdateWithoutSolicitudInput = {
    id?: StringFieldUpdateOperationsInput | string
    mp_preference_id?: NullableStringFieldUpdateOperationsInput | string | null
    mp_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    mp_status?: NullableStringFieldUpdateOperationsInput | string | null
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pagosUncheckedUpdateManyWithoutSolicitudInput = {
    id?: StringFieldUpdateOperationsInput | string
    mp_preference_id?: NullableStringFieldUpdateOperationsInput | string | null
    mp_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    mp_status?: NullableStringFieldUpdateOperationsInput | string | null
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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