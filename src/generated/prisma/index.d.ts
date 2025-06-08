
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model FilaAtendimento
 * 
 */
export type FilaAtendimento = $Result.DefaultSelection<Prisma.$FilaAtendimentoPayload>
/**
 * Model Atendimento
 * 
 */
export type Atendimento = $Result.DefaultSelection<Prisma.$AtendimentoPayload>
/**
 * Model Processo
 * 
 */
export type Processo = $Result.DefaultSelection<Prisma.$ProcessoPayload>
/**
 * Model FormularioPreenchido
 * 
 */
export type FormularioPreenchido = $Result.DefaultSelection<Prisma.$FormularioPreenchidoPayload>
/**
 * Model Documento
 * 
 */
export type Documento = $Result.DefaultSelection<Prisma.$DocumentoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  OPERADOR: 'OPERADOR',
  JURISTA: 'JURISTA'
};

export type Role = (typeof Role)[keyof typeof Role]


export const StatusFilaAtendimento: {
  AGUARDANDO: 'AGUARDANDO',
  EM_ATENDIMENTO: 'EM_ATENDIMENTO',
  ATENDIDO: 'ATENDIDO',
  CANCELADO: 'CANCELADO'
};

export type StatusFilaAtendimento = (typeof StatusFilaAtendimento)[keyof typeof StatusFilaAtendimento]


export const StatusAtendimento: {
  NOVO: 'NOVO',
  EM_ANDAMENTO: 'EM_ANDAMENTO',
  CONCLUIDO: 'CONCLUIDO',
  ARQUIVADO: 'ARQUIVADO'
};

export type StatusAtendimento = (typeof StatusAtendimento)[keyof typeof StatusAtendimento]


export const TipoFormulario: {
  TRIAGEM: 'TRIAGEM',
  CAPACIDADE_CIVIL: 'CAPACIDADE_CIVIL',
  COMPLEMENTO_DADOS: 'COMPLEMENTO_DADOS',
  TIPO_DEMANDA: 'TIPO_DEMANDA',
  TIPO_DEMANDA_PREVIDENCIARIA: 'TIPO_DEMANDA_PREVIDENCIARIA',
  LOAS_IDOSO: 'LOAS_IDOSO',
  LOAS_DEFICIENTE: 'LOAS_DEFICIENTE',
  APOSENTADORIA_RURAL: 'APOSENTADORIA_RURAL',
  PENSAO_MORTE_RURAL: 'PENSAO_MORTE_RURAL',
  AUXILIO_RECLUSAO_RURAL: 'AUXILIO_RECLUSAO_RURAL',
  SALARIO_MATERNIDADE_URBANO: 'SALARIO_MATERNIDADE_URBANO',
  SALARIO_MATERNIDADE_RURAL: 'SALARIO_MATERNIDADE_RURAL',
  AUXILIO_DOENCA_INVALIDEZ: 'AUXILIO_DOENCA_INVALIDEZ',
  SEGURO_DEFESO: 'SEGURO_DEFESO',
  REPRESENTANTE_LEGAL: 'REPRESENTANTE_LEGAL',
  ANALISE_RENDA: 'ANALISE_RENDA',
  VIABILIDADE_DEMANDA: 'VIABILIDADE_DEMANDA',
  DOCUMENTOS_OBRIGATORIOS: 'DOCUMENTOS_OBRIGATORIOS',
  JUSTIFICATIVA_ARQUIVAMENTO: 'JUSTIFICATIVA_ARQUIVAMENTO'
};

export type TipoFormulario = (typeof TipoFormulario)[keyof typeof TipoFormulario]


export const TipoDocumento: {
  DOCUMENTO_PESSOAL: 'DOCUMENTO_PESSOAL',
  COMPROVANTE_RESIDENCIA: 'COMPROVANTE_RESIDENCIA',
  COMPROVANTE_RENDA: 'COMPROVANTE_RENDA',
  LAUDO_MEDICO: 'LAUDO_MEDICO',
  PRONTUARIO: 'PRONTUARIO',
  EXAME_MEDICO: 'EXAME_MEDICO',
  CARTEIRA_TRABALHO: 'CARTEIRA_TRABALHO',
  COMPROVANTE_ATIVIDADE_RURAL: 'COMPROVANTE_ATIVIDADE_RURAL',
  CERTIDAO_OBITO: 'CERTIDAO_OBITO',
  CERTIDAO_CASAMENTO: 'CERTIDAO_CASAMENTO',
  CERTIDAO_NASCIMENTO: 'CERTIDAO_NASCIMENTO',
  PROCURACAO: 'PROCURACAO',
  TERMO_REPRESENTACAO: 'TERMO_REPRESENTACAO',
  OUTROS: 'OUTROS'
};

export type TipoDocumento = (typeof TipoDocumento)[keyof typeof TipoDocumento]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type StatusFilaAtendimento = $Enums.StatusFilaAtendimento

export const StatusFilaAtendimento: typeof $Enums.StatusFilaAtendimento

export type StatusAtendimento = $Enums.StatusAtendimento

export const StatusAtendimento: typeof $Enums.StatusAtendimento

export type TipoFormulario = $Enums.TipoFormulario

export const TipoFormulario: typeof $Enums.TipoFormulario

export type TipoDocumento = $Enums.TipoDocumento

export const TipoDocumento: typeof $Enums.TipoDocumento

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.filaAtendimento`: Exposes CRUD operations for the **FilaAtendimento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FilaAtendimentos
    * const filaAtendimentos = await prisma.filaAtendimento.findMany()
    * ```
    */
  get filaAtendimento(): Prisma.FilaAtendimentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.atendimento`: Exposes CRUD operations for the **Atendimento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Atendimentos
    * const atendimentos = await prisma.atendimento.findMany()
    * ```
    */
  get atendimento(): Prisma.AtendimentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.processo`: Exposes CRUD operations for the **Processo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Processos
    * const processos = await prisma.processo.findMany()
    * ```
    */
  get processo(): Prisma.ProcessoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formularioPreenchido`: Exposes CRUD operations for the **FormularioPreenchido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormularioPreenchidos
    * const formularioPreenchidos = await prisma.formularioPreenchido.findMany()
    * ```
    */
  get formularioPreenchido(): Prisma.FormularioPreenchidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documento`: Exposes CRUD operations for the **Documento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documentos
    * const documentos = await prisma.documento.findMany()
    * ```
    */
  get documento(): Prisma.DocumentoDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    FilaAtendimento: 'FilaAtendimento',
    Atendimento: 'Atendimento',
    Processo: 'Processo',
    FormularioPreenchido: 'FormularioPreenchido',
    Documento: 'Documento'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "filaAtendimento" | "atendimento" | "processo" | "formularioPreenchido" | "documento"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      FilaAtendimento: {
        payload: Prisma.$FilaAtendimentoPayload<ExtArgs>
        fields: Prisma.FilaAtendimentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FilaAtendimentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilaAtendimentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FilaAtendimentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilaAtendimentoPayload>
          }
          findFirst: {
            args: Prisma.FilaAtendimentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilaAtendimentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FilaAtendimentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilaAtendimentoPayload>
          }
          findMany: {
            args: Prisma.FilaAtendimentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilaAtendimentoPayload>[]
          }
          create: {
            args: Prisma.FilaAtendimentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilaAtendimentoPayload>
          }
          createMany: {
            args: Prisma.FilaAtendimentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FilaAtendimentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilaAtendimentoPayload>[]
          }
          delete: {
            args: Prisma.FilaAtendimentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilaAtendimentoPayload>
          }
          update: {
            args: Prisma.FilaAtendimentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilaAtendimentoPayload>
          }
          deleteMany: {
            args: Prisma.FilaAtendimentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FilaAtendimentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FilaAtendimentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilaAtendimentoPayload>[]
          }
          upsert: {
            args: Prisma.FilaAtendimentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilaAtendimentoPayload>
          }
          aggregate: {
            args: Prisma.FilaAtendimentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFilaAtendimento>
          }
          groupBy: {
            args: Prisma.FilaAtendimentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilaAtendimentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.FilaAtendimentoCountArgs<ExtArgs>
            result: $Utils.Optional<FilaAtendimentoCountAggregateOutputType> | number
          }
        }
      }
      Atendimento: {
        payload: Prisma.$AtendimentoPayload<ExtArgs>
        fields: Prisma.AtendimentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AtendimentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AtendimentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>
          }
          findFirst: {
            args: Prisma.AtendimentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AtendimentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>
          }
          findMany: {
            args: Prisma.AtendimentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>[]
          }
          create: {
            args: Prisma.AtendimentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>
          }
          createMany: {
            args: Prisma.AtendimentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AtendimentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>[]
          }
          delete: {
            args: Prisma.AtendimentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>
          }
          update: {
            args: Prisma.AtendimentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>
          }
          deleteMany: {
            args: Prisma.AtendimentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AtendimentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AtendimentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>[]
          }
          upsert: {
            args: Prisma.AtendimentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>
          }
          aggregate: {
            args: Prisma.AtendimentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtendimento>
          }
          groupBy: {
            args: Prisma.AtendimentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtendimentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AtendimentoCountArgs<ExtArgs>
            result: $Utils.Optional<AtendimentoCountAggregateOutputType> | number
          }
        }
      }
      Processo: {
        payload: Prisma.$ProcessoPayload<ExtArgs>
        fields: Prisma.ProcessoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProcessoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProcessoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessoPayload>
          }
          findFirst: {
            args: Prisma.ProcessoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProcessoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessoPayload>
          }
          findMany: {
            args: Prisma.ProcessoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessoPayload>[]
          }
          create: {
            args: Prisma.ProcessoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessoPayload>
          }
          createMany: {
            args: Prisma.ProcessoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProcessoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessoPayload>[]
          }
          delete: {
            args: Prisma.ProcessoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessoPayload>
          }
          update: {
            args: Prisma.ProcessoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessoPayload>
          }
          deleteMany: {
            args: Prisma.ProcessoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProcessoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProcessoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessoPayload>[]
          }
          upsert: {
            args: Prisma.ProcessoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessoPayload>
          }
          aggregate: {
            args: Prisma.ProcessoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProcesso>
          }
          groupBy: {
            args: Prisma.ProcessoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProcessoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProcessoCountArgs<ExtArgs>
            result: $Utils.Optional<ProcessoCountAggregateOutputType> | number
          }
        }
      }
      FormularioPreenchido: {
        payload: Prisma.$FormularioPreenchidoPayload<ExtArgs>
        fields: Prisma.FormularioPreenchidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormularioPreenchidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormularioPreenchidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormularioPreenchidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormularioPreenchidoPayload>
          }
          findFirst: {
            args: Prisma.FormularioPreenchidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormularioPreenchidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormularioPreenchidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormularioPreenchidoPayload>
          }
          findMany: {
            args: Prisma.FormularioPreenchidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormularioPreenchidoPayload>[]
          }
          create: {
            args: Prisma.FormularioPreenchidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormularioPreenchidoPayload>
          }
          createMany: {
            args: Prisma.FormularioPreenchidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormularioPreenchidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormularioPreenchidoPayload>[]
          }
          delete: {
            args: Prisma.FormularioPreenchidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormularioPreenchidoPayload>
          }
          update: {
            args: Prisma.FormularioPreenchidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormularioPreenchidoPayload>
          }
          deleteMany: {
            args: Prisma.FormularioPreenchidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormularioPreenchidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormularioPreenchidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormularioPreenchidoPayload>[]
          }
          upsert: {
            args: Prisma.FormularioPreenchidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormularioPreenchidoPayload>
          }
          aggregate: {
            args: Prisma.FormularioPreenchidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormularioPreenchido>
          }
          groupBy: {
            args: Prisma.FormularioPreenchidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormularioPreenchidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormularioPreenchidoCountArgs<ExtArgs>
            result: $Utils.Optional<FormularioPreenchidoCountAggregateOutputType> | number
          }
        }
      }
      Documento: {
        payload: Prisma.$DocumentoPayload<ExtArgs>
        fields: Prisma.DocumentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>
          }
          findFirst: {
            args: Prisma.DocumentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>
          }
          findMany: {
            args: Prisma.DocumentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>[]
          }
          create: {
            args: Prisma.DocumentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>
          }
          createMany: {
            args: Prisma.DocumentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>[]
          }
          delete: {
            args: Prisma.DocumentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>
          }
          update: {
            args: Prisma.DocumentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>
          }
          deleteMany: {
            args: Prisma.DocumentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>[]
          }
          upsert: {
            args: Prisma.DocumentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>
          }
          aggregate: {
            args: Prisma.DocumentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumento>
          }
          groupBy: {
            args: Prisma.DocumentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentoCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentoCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    filaAtendimento?: FilaAtendimentoOmit
    atendimento?: AtendimentoOmit
    processo?: ProcessoOmit
    formularioPreenchido?: FormularioPreenchidoOmit
    documento?: DocumentoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    atendimentosRealizados: number
    atendimentosTriagem: number
    atendimentosEmAndamento: number
    documentosUploadOperador: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atendimentosRealizados?: boolean | UserCountOutputTypeCountAtendimentosRealizadosArgs
    atendimentosTriagem?: boolean | UserCountOutputTypeCountAtendimentosTriagemArgs
    atendimentosEmAndamento?: boolean | UserCountOutputTypeCountAtendimentosEmAndamentoArgs
    documentosUploadOperador?: boolean | UserCountOutputTypeCountDocumentosUploadOperadorArgs
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
  export type UserCountOutputTypeCountAtendimentosRealizadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtendimentoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAtendimentosTriagemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilaAtendimentoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAtendimentosEmAndamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilaAtendimentoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDocumentosUploadOperadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentoWhereInput
  }


  /**
   * Count Type AtendimentoCountOutputType
   */

  export type AtendimentoCountOutputType = {
    formularios: number
    documentos: number
  }

  export type AtendimentoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formularios?: boolean | AtendimentoCountOutputTypeCountFormulariosArgs
    documentos?: boolean | AtendimentoCountOutputTypeCountDocumentosArgs
  }

  // Custom InputTypes
  /**
   * AtendimentoCountOutputType without action
   */
  export type AtendimentoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtendimentoCountOutputType
     */
    select?: AtendimentoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AtendimentoCountOutputType without action
   */
  export type AtendimentoCountOutputTypeCountFormulariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormularioPreenchidoWhereInput
  }

  /**
   * AtendimentoCountOutputType without action
   */
  export type AtendimentoCountOutputTypeCountDocumentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    nome: string | null
    senha: string | null
    role: $Enums.Role | null
    aprovado: boolean | null
    dataCadastro: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    nome: string | null
    senha: string | null
    role: $Enums.Role | null
    aprovado: boolean | null
    dataCadastro: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    nome: number
    senha: number
    role: number
    aprovado: number
    dataCadastro: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    nome?: true
    senha?: true
    role?: true
    aprovado?: true
    dataCadastro?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    nome?: true
    senha?: true
    role?: true
    aprovado?: true
    dataCadastro?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    nome?: true
    senha?: true
    role?: true
    aprovado?: true
    dataCadastro?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    nome: string
    senha: string
    role: $Enums.Role
    aprovado: boolean
    dataCadastro: Date
    _count: UserCountAggregateOutputType | null
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
    nome?: boolean
    senha?: boolean
    role?: boolean
    aprovado?: boolean
    dataCadastro?: boolean
    atendimentosRealizados?: boolean | User$atendimentosRealizadosArgs<ExtArgs>
    atendimentosTriagem?: boolean | User$atendimentosTriagemArgs<ExtArgs>
    atendimentosEmAndamento?: boolean | User$atendimentosEmAndamentoArgs<ExtArgs>
    documentosUploadOperador?: boolean | User$documentosUploadOperadorArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nome?: boolean
    senha?: boolean
    role?: boolean
    aprovado?: boolean
    dataCadastro?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nome?: boolean
    senha?: boolean
    role?: boolean
    aprovado?: boolean
    dataCadastro?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    nome?: boolean
    senha?: boolean
    role?: boolean
    aprovado?: boolean
    dataCadastro?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "nome" | "senha" | "role" | "aprovado" | "dataCadastro", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atendimentosRealizados?: boolean | User$atendimentosRealizadosArgs<ExtArgs>
    atendimentosTriagem?: boolean | User$atendimentosTriagemArgs<ExtArgs>
    atendimentosEmAndamento?: boolean | User$atendimentosEmAndamentoArgs<ExtArgs>
    documentosUploadOperador?: boolean | User$documentosUploadOperadorArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      atendimentosRealizados: Prisma.$AtendimentoPayload<ExtArgs>[]
      atendimentosTriagem: Prisma.$FilaAtendimentoPayload<ExtArgs>[]
      atendimentosEmAndamento: Prisma.$FilaAtendimentoPayload<ExtArgs>[]
      documentosUploadOperador: Prisma.$DocumentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      nome: string
      senha: string
      role: $Enums.Role
      aprovado: boolean
      dataCadastro: Date
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
    atendimentosRealizados<T extends User$atendimentosRealizadosArgs<ExtArgs> = {}>(args?: Subset<T, User$atendimentosRealizadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    atendimentosTriagem<T extends User$atendimentosTriagemArgs<ExtArgs> = {}>(args?: Subset<T, User$atendimentosTriagemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilaAtendimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    atendimentosEmAndamento<T extends User$atendimentosEmAndamentoArgs<ExtArgs> = {}>(args?: Subset<T, User$atendimentosEmAndamentoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilaAtendimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documentosUploadOperador<T extends User$documentosUploadOperadorArgs<ExtArgs> = {}>(args?: Subset<T, User$documentosUploadOperadorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly nome: FieldRef<"User", 'String'>
    readonly senha: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly aprovado: FieldRef<"User", 'Boolean'>
    readonly dataCadastro: FieldRef<"User", 'DateTime'>
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
   * User.atendimentosRealizados
   */
  export type User$atendimentosRealizadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    where?: AtendimentoWhereInput
    orderBy?: AtendimentoOrderByWithRelationInput | AtendimentoOrderByWithRelationInput[]
    cursor?: AtendimentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtendimentoScalarFieldEnum | AtendimentoScalarFieldEnum[]
  }

  /**
   * User.atendimentosTriagem
   */
  export type User$atendimentosTriagemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilaAtendimento
     */
    select?: FilaAtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilaAtendimento
     */
    omit?: FilaAtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaAtendimentoInclude<ExtArgs> | null
    where?: FilaAtendimentoWhereInput
    orderBy?: FilaAtendimentoOrderByWithRelationInput | FilaAtendimentoOrderByWithRelationInput[]
    cursor?: FilaAtendimentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FilaAtendimentoScalarFieldEnum | FilaAtendimentoScalarFieldEnum[]
  }

  /**
   * User.atendimentosEmAndamento
   */
  export type User$atendimentosEmAndamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilaAtendimento
     */
    select?: FilaAtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilaAtendimento
     */
    omit?: FilaAtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaAtendimentoInclude<ExtArgs> | null
    where?: FilaAtendimentoWhereInput
    orderBy?: FilaAtendimentoOrderByWithRelationInput | FilaAtendimentoOrderByWithRelationInput[]
    cursor?: FilaAtendimentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FilaAtendimentoScalarFieldEnum | FilaAtendimentoScalarFieldEnum[]
  }

  /**
   * User.documentosUploadOperador
   */
  export type User$documentosUploadOperadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    where?: DocumentoWhereInput
    orderBy?: DocumentoOrderByWithRelationInput | DocumentoOrderByWithRelationInput[]
    cursor?: DocumentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentoScalarFieldEnum | DocumentoScalarFieldEnum[]
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
   * Model FilaAtendimento
   */

  export type AggregateFilaAtendimento = {
    _count: FilaAtendimentoCountAggregateOutputType | null
    _min: FilaAtendimentoMinAggregateOutputType | null
    _max: FilaAtendimentoMaxAggregateOutputType | null
  }

  export type FilaAtendimentoMinAggregateOutputType = {
    id: string | null
    nomeCompleto: string | null
    nomeSocial: string | null
    cpf: string | null
    telefone: string | null
    isPrioridade: boolean | null
    status: $Enums.StatusFilaAtendimento | null
    dataEntrada: Date | null
    dataInicio: Date | null
    dataFim: Date | null
    operadorTriagemId: string | null
    operadorAtendimentoId: string | null
  }

  export type FilaAtendimentoMaxAggregateOutputType = {
    id: string | null
    nomeCompleto: string | null
    nomeSocial: string | null
    cpf: string | null
    telefone: string | null
    isPrioridade: boolean | null
    status: $Enums.StatusFilaAtendimento | null
    dataEntrada: Date | null
    dataInicio: Date | null
    dataFim: Date | null
    operadorTriagemId: string | null
    operadorAtendimentoId: string | null
  }

  export type FilaAtendimentoCountAggregateOutputType = {
    id: number
    nomeCompleto: number
    nomeSocial: number
    cpf: number
    telefone: number
    isPrioridade: number
    status: number
    dataEntrada: number
    dataInicio: number
    dataFim: number
    operadorTriagemId: number
    operadorAtendimentoId: number
    _all: number
  }


  export type FilaAtendimentoMinAggregateInputType = {
    id?: true
    nomeCompleto?: true
    nomeSocial?: true
    cpf?: true
    telefone?: true
    isPrioridade?: true
    status?: true
    dataEntrada?: true
    dataInicio?: true
    dataFim?: true
    operadorTriagemId?: true
    operadorAtendimentoId?: true
  }

  export type FilaAtendimentoMaxAggregateInputType = {
    id?: true
    nomeCompleto?: true
    nomeSocial?: true
    cpf?: true
    telefone?: true
    isPrioridade?: true
    status?: true
    dataEntrada?: true
    dataInicio?: true
    dataFim?: true
    operadorTriagemId?: true
    operadorAtendimentoId?: true
  }

  export type FilaAtendimentoCountAggregateInputType = {
    id?: true
    nomeCompleto?: true
    nomeSocial?: true
    cpf?: true
    telefone?: true
    isPrioridade?: true
    status?: true
    dataEntrada?: true
    dataInicio?: true
    dataFim?: true
    operadorTriagemId?: true
    operadorAtendimentoId?: true
    _all?: true
  }

  export type FilaAtendimentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FilaAtendimento to aggregate.
     */
    where?: FilaAtendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilaAtendimentos to fetch.
     */
    orderBy?: FilaAtendimentoOrderByWithRelationInput | FilaAtendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FilaAtendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilaAtendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilaAtendimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FilaAtendimentos
    **/
    _count?: true | FilaAtendimentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilaAtendimentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilaAtendimentoMaxAggregateInputType
  }

  export type GetFilaAtendimentoAggregateType<T extends FilaAtendimentoAggregateArgs> = {
        [P in keyof T & keyof AggregateFilaAtendimento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilaAtendimento[P]>
      : GetScalarType<T[P], AggregateFilaAtendimento[P]>
  }




  export type FilaAtendimentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilaAtendimentoWhereInput
    orderBy?: FilaAtendimentoOrderByWithAggregationInput | FilaAtendimentoOrderByWithAggregationInput[]
    by: FilaAtendimentoScalarFieldEnum[] | FilaAtendimentoScalarFieldEnum
    having?: FilaAtendimentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilaAtendimentoCountAggregateInputType | true
    _min?: FilaAtendimentoMinAggregateInputType
    _max?: FilaAtendimentoMaxAggregateInputType
  }

  export type FilaAtendimentoGroupByOutputType = {
    id: string
    nomeCompleto: string
    nomeSocial: string | null
    cpf: string
    telefone: string
    isPrioridade: boolean
    status: $Enums.StatusFilaAtendimento
    dataEntrada: Date
    dataInicio: Date | null
    dataFim: Date | null
    operadorTriagemId: string
    operadorAtendimentoId: string | null
    _count: FilaAtendimentoCountAggregateOutputType | null
    _min: FilaAtendimentoMinAggregateOutputType | null
    _max: FilaAtendimentoMaxAggregateOutputType | null
  }

  type GetFilaAtendimentoGroupByPayload<T extends FilaAtendimentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilaAtendimentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilaAtendimentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilaAtendimentoGroupByOutputType[P]>
            : GetScalarType<T[P], FilaAtendimentoGroupByOutputType[P]>
        }
      >
    >


  export type FilaAtendimentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeCompleto?: boolean
    nomeSocial?: boolean
    cpf?: boolean
    telefone?: boolean
    isPrioridade?: boolean
    status?: boolean
    dataEntrada?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    operadorTriagemId?: boolean
    operadorAtendimentoId?: boolean
    operadorTriagem?: boolean | UserDefaultArgs<ExtArgs>
    operadorAtendimento?: boolean | FilaAtendimento$operadorAtendimentoArgs<ExtArgs>
    atendimento?: boolean | FilaAtendimento$atendimentoArgs<ExtArgs>
  }, ExtArgs["result"]["filaAtendimento"]>

  export type FilaAtendimentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeCompleto?: boolean
    nomeSocial?: boolean
    cpf?: boolean
    telefone?: boolean
    isPrioridade?: boolean
    status?: boolean
    dataEntrada?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    operadorTriagemId?: boolean
    operadorAtendimentoId?: boolean
    operadorTriagem?: boolean | UserDefaultArgs<ExtArgs>
    operadorAtendimento?: boolean | FilaAtendimento$operadorAtendimentoArgs<ExtArgs>
  }, ExtArgs["result"]["filaAtendimento"]>

  export type FilaAtendimentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeCompleto?: boolean
    nomeSocial?: boolean
    cpf?: boolean
    telefone?: boolean
    isPrioridade?: boolean
    status?: boolean
    dataEntrada?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    operadorTriagemId?: boolean
    operadorAtendimentoId?: boolean
    operadorTriagem?: boolean | UserDefaultArgs<ExtArgs>
    operadorAtendimento?: boolean | FilaAtendimento$operadorAtendimentoArgs<ExtArgs>
  }, ExtArgs["result"]["filaAtendimento"]>

  export type FilaAtendimentoSelectScalar = {
    id?: boolean
    nomeCompleto?: boolean
    nomeSocial?: boolean
    cpf?: boolean
    telefone?: boolean
    isPrioridade?: boolean
    status?: boolean
    dataEntrada?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    operadorTriagemId?: boolean
    operadorAtendimentoId?: boolean
  }

  export type FilaAtendimentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomeCompleto" | "nomeSocial" | "cpf" | "telefone" | "isPrioridade" | "status" | "dataEntrada" | "dataInicio" | "dataFim" | "operadorTriagemId" | "operadorAtendimentoId", ExtArgs["result"]["filaAtendimento"]>
  export type FilaAtendimentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operadorTriagem?: boolean | UserDefaultArgs<ExtArgs>
    operadorAtendimento?: boolean | FilaAtendimento$operadorAtendimentoArgs<ExtArgs>
    atendimento?: boolean | FilaAtendimento$atendimentoArgs<ExtArgs>
  }
  export type FilaAtendimentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operadorTriagem?: boolean | UserDefaultArgs<ExtArgs>
    operadorAtendimento?: boolean | FilaAtendimento$operadorAtendimentoArgs<ExtArgs>
  }
  export type FilaAtendimentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operadorTriagem?: boolean | UserDefaultArgs<ExtArgs>
    operadorAtendimento?: boolean | FilaAtendimento$operadorAtendimentoArgs<ExtArgs>
  }

  export type $FilaAtendimentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FilaAtendimento"
    objects: {
      operadorTriagem: Prisma.$UserPayload<ExtArgs>
      operadorAtendimento: Prisma.$UserPayload<ExtArgs> | null
      atendimento: Prisma.$AtendimentoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nomeCompleto: string
      nomeSocial: string | null
      cpf: string
      telefone: string
      isPrioridade: boolean
      status: $Enums.StatusFilaAtendimento
      dataEntrada: Date
      dataInicio: Date | null
      dataFim: Date | null
      operadorTriagemId: string
      operadorAtendimentoId: string | null
    }, ExtArgs["result"]["filaAtendimento"]>
    composites: {}
  }

  type FilaAtendimentoGetPayload<S extends boolean | null | undefined | FilaAtendimentoDefaultArgs> = $Result.GetResult<Prisma.$FilaAtendimentoPayload, S>

  type FilaAtendimentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FilaAtendimentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilaAtendimentoCountAggregateInputType | true
    }

  export interface FilaAtendimentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FilaAtendimento'], meta: { name: 'FilaAtendimento' } }
    /**
     * Find zero or one FilaAtendimento that matches the filter.
     * @param {FilaAtendimentoFindUniqueArgs} args - Arguments to find a FilaAtendimento
     * @example
     * // Get one FilaAtendimento
     * const filaAtendimento = await prisma.filaAtendimento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FilaAtendimentoFindUniqueArgs>(args: SelectSubset<T, FilaAtendimentoFindUniqueArgs<ExtArgs>>): Prisma__FilaAtendimentoClient<$Result.GetResult<Prisma.$FilaAtendimentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FilaAtendimento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FilaAtendimentoFindUniqueOrThrowArgs} args - Arguments to find a FilaAtendimento
     * @example
     * // Get one FilaAtendimento
     * const filaAtendimento = await prisma.filaAtendimento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FilaAtendimentoFindUniqueOrThrowArgs>(args: SelectSubset<T, FilaAtendimentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FilaAtendimentoClient<$Result.GetResult<Prisma.$FilaAtendimentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FilaAtendimento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilaAtendimentoFindFirstArgs} args - Arguments to find a FilaAtendimento
     * @example
     * // Get one FilaAtendimento
     * const filaAtendimento = await prisma.filaAtendimento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FilaAtendimentoFindFirstArgs>(args?: SelectSubset<T, FilaAtendimentoFindFirstArgs<ExtArgs>>): Prisma__FilaAtendimentoClient<$Result.GetResult<Prisma.$FilaAtendimentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FilaAtendimento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilaAtendimentoFindFirstOrThrowArgs} args - Arguments to find a FilaAtendimento
     * @example
     * // Get one FilaAtendimento
     * const filaAtendimento = await prisma.filaAtendimento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FilaAtendimentoFindFirstOrThrowArgs>(args?: SelectSubset<T, FilaAtendimentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__FilaAtendimentoClient<$Result.GetResult<Prisma.$FilaAtendimentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FilaAtendimentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilaAtendimentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FilaAtendimentos
     * const filaAtendimentos = await prisma.filaAtendimento.findMany()
     * 
     * // Get first 10 FilaAtendimentos
     * const filaAtendimentos = await prisma.filaAtendimento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filaAtendimentoWithIdOnly = await prisma.filaAtendimento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FilaAtendimentoFindManyArgs>(args?: SelectSubset<T, FilaAtendimentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilaAtendimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FilaAtendimento.
     * @param {FilaAtendimentoCreateArgs} args - Arguments to create a FilaAtendimento.
     * @example
     * // Create one FilaAtendimento
     * const FilaAtendimento = await prisma.filaAtendimento.create({
     *   data: {
     *     // ... data to create a FilaAtendimento
     *   }
     * })
     * 
     */
    create<T extends FilaAtendimentoCreateArgs>(args: SelectSubset<T, FilaAtendimentoCreateArgs<ExtArgs>>): Prisma__FilaAtendimentoClient<$Result.GetResult<Prisma.$FilaAtendimentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FilaAtendimentos.
     * @param {FilaAtendimentoCreateManyArgs} args - Arguments to create many FilaAtendimentos.
     * @example
     * // Create many FilaAtendimentos
     * const filaAtendimento = await prisma.filaAtendimento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FilaAtendimentoCreateManyArgs>(args?: SelectSubset<T, FilaAtendimentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FilaAtendimentos and returns the data saved in the database.
     * @param {FilaAtendimentoCreateManyAndReturnArgs} args - Arguments to create many FilaAtendimentos.
     * @example
     * // Create many FilaAtendimentos
     * const filaAtendimento = await prisma.filaAtendimento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FilaAtendimentos and only return the `id`
     * const filaAtendimentoWithIdOnly = await prisma.filaAtendimento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FilaAtendimentoCreateManyAndReturnArgs>(args?: SelectSubset<T, FilaAtendimentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilaAtendimentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FilaAtendimento.
     * @param {FilaAtendimentoDeleteArgs} args - Arguments to delete one FilaAtendimento.
     * @example
     * // Delete one FilaAtendimento
     * const FilaAtendimento = await prisma.filaAtendimento.delete({
     *   where: {
     *     // ... filter to delete one FilaAtendimento
     *   }
     * })
     * 
     */
    delete<T extends FilaAtendimentoDeleteArgs>(args: SelectSubset<T, FilaAtendimentoDeleteArgs<ExtArgs>>): Prisma__FilaAtendimentoClient<$Result.GetResult<Prisma.$FilaAtendimentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FilaAtendimento.
     * @param {FilaAtendimentoUpdateArgs} args - Arguments to update one FilaAtendimento.
     * @example
     * // Update one FilaAtendimento
     * const filaAtendimento = await prisma.filaAtendimento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FilaAtendimentoUpdateArgs>(args: SelectSubset<T, FilaAtendimentoUpdateArgs<ExtArgs>>): Prisma__FilaAtendimentoClient<$Result.GetResult<Prisma.$FilaAtendimentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FilaAtendimentos.
     * @param {FilaAtendimentoDeleteManyArgs} args - Arguments to filter FilaAtendimentos to delete.
     * @example
     * // Delete a few FilaAtendimentos
     * const { count } = await prisma.filaAtendimento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FilaAtendimentoDeleteManyArgs>(args?: SelectSubset<T, FilaAtendimentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FilaAtendimentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilaAtendimentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FilaAtendimentos
     * const filaAtendimento = await prisma.filaAtendimento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FilaAtendimentoUpdateManyArgs>(args: SelectSubset<T, FilaAtendimentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FilaAtendimentos and returns the data updated in the database.
     * @param {FilaAtendimentoUpdateManyAndReturnArgs} args - Arguments to update many FilaAtendimentos.
     * @example
     * // Update many FilaAtendimentos
     * const filaAtendimento = await prisma.filaAtendimento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FilaAtendimentos and only return the `id`
     * const filaAtendimentoWithIdOnly = await prisma.filaAtendimento.updateManyAndReturn({
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
    updateManyAndReturn<T extends FilaAtendimentoUpdateManyAndReturnArgs>(args: SelectSubset<T, FilaAtendimentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilaAtendimentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FilaAtendimento.
     * @param {FilaAtendimentoUpsertArgs} args - Arguments to update or create a FilaAtendimento.
     * @example
     * // Update or create a FilaAtendimento
     * const filaAtendimento = await prisma.filaAtendimento.upsert({
     *   create: {
     *     // ... data to create a FilaAtendimento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FilaAtendimento we want to update
     *   }
     * })
     */
    upsert<T extends FilaAtendimentoUpsertArgs>(args: SelectSubset<T, FilaAtendimentoUpsertArgs<ExtArgs>>): Prisma__FilaAtendimentoClient<$Result.GetResult<Prisma.$FilaAtendimentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FilaAtendimentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilaAtendimentoCountArgs} args - Arguments to filter FilaAtendimentos to count.
     * @example
     * // Count the number of FilaAtendimentos
     * const count = await prisma.filaAtendimento.count({
     *   where: {
     *     // ... the filter for the FilaAtendimentos we want to count
     *   }
     * })
    **/
    count<T extends FilaAtendimentoCountArgs>(
      args?: Subset<T, FilaAtendimentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilaAtendimentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FilaAtendimento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilaAtendimentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FilaAtendimentoAggregateArgs>(args: Subset<T, FilaAtendimentoAggregateArgs>): Prisma.PrismaPromise<GetFilaAtendimentoAggregateType<T>>

    /**
     * Group by FilaAtendimento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilaAtendimentoGroupByArgs} args - Group by arguments.
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
      T extends FilaAtendimentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FilaAtendimentoGroupByArgs['orderBy'] }
        : { orderBy?: FilaAtendimentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FilaAtendimentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilaAtendimentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FilaAtendimento model
   */
  readonly fields: FilaAtendimentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FilaAtendimento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FilaAtendimentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    operadorTriagem<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    operadorAtendimento<T extends FilaAtendimento$operadorAtendimentoArgs<ExtArgs> = {}>(args?: Subset<T, FilaAtendimento$operadorAtendimentoArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    atendimento<T extends FilaAtendimento$atendimentoArgs<ExtArgs> = {}>(args?: Subset<T, FilaAtendimento$atendimentoArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FilaAtendimento model
   */
  interface FilaAtendimentoFieldRefs {
    readonly id: FieldRef<"FilaAtendimento", 'String'>
    readonly nomeCompleto: FieldRef<"FilaAtendimento", 'String'>
    readonly nomeSocial: FieldRef<"FilaAtendimento", 'String'>
    readonly cpf: FieldRef<"FilaAtendimento", 'String'>
    readonly telefone: FieldRef<"FilaAtendimento", 'String'>
    readonly isPrioridade: FieldRef<"FilaAtendimento", 'Boolean'>
    readonly status: FieldRef<"FilaAtendimento", 'StatusFilaAtendimento'>
    readonly dataEntrada: FieldRef<"FilaAtendimento", 'DateTime'>
    readonly dataInicio: FieldRef<"FilaAtendimento", 'DateTime'>
    readonly dataFim: FieldRef<"FilaAtendimento", 'DateTime'>
    readonly operadorTriagemId: FieldRef<"FilaAtendimento", 'String'>
    readonly operadorAtendimentoId: FieldRef<"FilaAtendimento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FilaAtendimento findUnique
   */
  export type FilaAtendimentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilaAtendimento
     */
    select?: FilaAtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilaAtendimento
     */
    omit?: FilaAtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaAtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which FilaAtendimento to fetch.
     */
    where: FilaAtendimentoWhereUniqueInput
  }

  /**
   * FilaAtendimento findUniqueOrThrow
   */
  export type FilaAtendimentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilaAtendimento
     */
    select?: FilaAtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilaAtendimento
     */
    omit?: FilaAtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaAtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which FilaAtendimento to fetch.
     */
    where: FilaAtendimentoWhereUniqueInput
  }

  /**
   * FilaAtendimento findFirst
   */
  export type FilaAtendimentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilaAtendimento
     */
    select?: FilaAtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilaAtendimento
     */
    omit?: FilaAtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaAtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which FilaAtendimento to fetch.
     */
    where?: FilaAtendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilaAtendimentos to fetch.
     */
    orderBy?: FilaAtendimentoOrderByWithRelationInput | FilaAtendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FilaAtendimentos.
     */
    cursor?: FilaAtendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilaAtendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilaAtendimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FilaAtendimentos.
     */
    distinct?: FilaAtendimentoScalarFieldEnum | FilaAtendimentoScalarFieldEnum[]
  }

  /**
   * FilaAtendimento findFirstOrThrow
   */
  export type FilaAtendimentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilaAtendimento
     */
    select?: FilaAtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilaAtendimento
     */
    omit?: FilaAtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaAtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which FilaAtendimento to fetch.
     */
    where?: FilaAtendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilaAtendimentos to fetch.
     */
    orderBy?: FilaAtendimentoOrderByWithRelationInput | FilaAtendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FilaAtendimentos.
     */
    cursor?: FilaAtendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilaAtendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilaAtendimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FilaAtendimentos.
     */
    distinct?: FilaAtendimentoScalarFieldEnum | FilaAtendimentoScalarFieldEnum[]
  }

  /**
   * FilaAtendimento findMany
   */
  export type FilaAtendimentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilaAtendimento
     */
    select?: FilaAtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilaAtendimento
     */
    omit?: FilaAtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaAtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which FilaAtendimentos to fetch.
     */
    where?: FilaAtendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilaAtendimentos to fetch.
     */
    orderBy?: FilaAtendimentoOrderByWithRelationInput | FilaAtendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FilaAtendimentos.
     */
    cursor?: FilaAtendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilaAtendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilaAtendimentos.
     */
    skip?: number
    distinct?: FilaAtendimentoScalarFieldEnum | FilaAtendimentoScalarFieldEnum[]
  }

  /**
   * FilaAtendimento create
   */
  export type FilaAtendimentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilaAtendimento
     */
    select?: FilaAtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilaAtendimento
     */
    omit?: FilaAtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaAtendimentoInclude<ExtArgs> | null
    /**
     * The data needed to create a FilaAtendimento.
     */
    data: XOR<FilaAtendimentoCreateInput, FilaAtendimentoUncheckedCreateInput>
  }

  /**
   * FilaAtendimento createMany
   */
  export type FilaAtendimentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FilaAtendimentos.
     */
    data: FilaAtendimentoCreateManyInput | FilaAtendimentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FilaAtendimento createManyAndReturn
   */
  export type FilaAtendimentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilaAtendimento
     */
    select?: FilaAtendimentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FilaAtendimento
     */
    omit?: FilaAtendimentoOmit<ExtArgs> | null
    /**
     * The data used to create many FilaAtendimentos.
     */
    data: FilaAtendimentoCreateManyInput | FilaAtendimentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaAtendimentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FilaAtendimento update
   */
  export type FilaAtendimentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilaAtendimento
     */
    select?: FilaAtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilaAtendimento
     */
    omit?: FilaAtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaAtendimentoInclude<ExtArgs> | null
    /**
     * The data needed to update a FilaAtendimento.
     */
    data: XOR<FilaAtendimentoUpdateInput, FilaAtendimentoUncheckedUpdateInput>
    /**
     * Choose, which FilaAtendimento to update.
     */
    where: FilaAtendimentoWhereUniqueInput
  }

  /**
   * FilaAtendimento updateMany
   */
  export type FilaAtendimentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FilaAtendimentos.
     */
    data: XOR<FilaAtendimentoUpdateManyMutationInput, FilaAtendimentoUncheckedUpdateManyInput>
    /**
     * Filter which FilaAtendimentos to update
     */
    where?: FilaAtendimentoWhereInput
    /**
     * Limit how many FilaAtendimentos to update.
     */
    limit?: number
  }

  /**
   * FilaAtendimento updateManyAndReturn
   */
  export type FilaAtendimentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilaAtendimento
     */
    select?: FilaAtendimentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FilaAtendimento
     */
    omit?: FilaAtendimentoOmit<ExtArgs> | null
    /**
     * The data used to update FilaAtendimentos.
     */
    data: XOR<FilaAtendimentoUpdateManyMutationInput, FilaAtendimentoUncheckedUpdateManyInput>
    /**
     * Filter which FilaAtendimentos to update
     */
    where?: FilaAtendimentoWhereInput
    /**
     * Limit how many FilaAtendimentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaAtendimentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FilaAtendimento upsert
   */
  export type FilaAtendimentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilaAtendimento
     */
    select?: FilaAtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilaAtendimento
     */
    omit?: FilaAtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaAtendimentoInclude<ExtArgs> | null
    /**
     * The filter to search for the FilaAtendimento to update in case it exists.
     */
    where: FilaAtendimentoWhereUniqueInput
    /**
     * In case the FilaAtendimento found by the `where` argument doesn't exist, create a new FilaAtendimento with this data.
     */
    create: XOR<FilaAtendimentoCreateInput, FilaAtendimentoUncheckedCreateInput>
    /**
     * In case the FilaAtendimento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FilaAtendimentoUpdateInput, FilaAtendimentoUncheckedUpdateInput>
  }

  /**
   * FilaAtendimento delete
   */
  export type FilaAtendimentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilaAtendimento
     */
    select?: FilaAtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilaAtendimento
     */
    omit?: FilaAtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaAtendimentoInclude<ExtArgs> | null
    /**
     * Filter which FilaAtendimento to delete.
     */
    where: FilaAtendimentoWhereUniqueInput
  }

  /**
   * FilaAtendimento deleteMany
   */
  export type FilaAtendimentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FilaAtendimentos to delete
     */
    where?: FilaAtendimentoWhereInput
    /**
     * Limit how many FilaAtendimentos to delete.
     */
    limit?: number
  }

  /**
   * FilaAtendimento.operadorAtendimento
   */
  export type FilaAtendimento$operadorAtendimentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * FilaAtendimento.atendimento
   */
  export type FilaAtendimento$atendimentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    where?: AtendimentoWhereInput
  }

  /**
   * FilaAtendimento without action
   */
  export type FilaAtendimentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilaAtendimento
     */
    select?: FilaAtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilaAtendimento
     */
    omit?: FilaAtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaAtendimentoInclude<ExtArgs> | null
  }


  /**
   * Model Atendimento
   */

  export type AggregateAtendimento = {
    _count: AtendimentoCountAggregateOutputType | null
    _min: AtendimentoMinAggregateOutputType | null
    _max: AtendimentoMaxAggregateOutputType | null
  }

  export type AtendimentoMinAggregateOutputType = {
    id: string | null
    nomeCompleto: string | null
    nomeSocial: string | null
    cpf: string | null
    dataNascimento: string | null
    telefone: string | null
    email: string | null
    tipoAtendimento: string | null
    capacidadeCivil: string | null
    estadoCivil: string | null
    profissao: string | null
    tipoDomicilio: string | null
    descricaoDomicilio: string | null
    membrosFamiliares: string | null
    rendaFamiliar: string | null
    tipoDemanda: string | null
    descricaoAtendimento: string | null
    observacoes: string | null
    formId: string | null
    formTipo: string | null
    dataCriacao: Date | null
    status: $Enums.StatusAtendimento | null
    logradouro: string | null
    numero: string | null
    complemento: string | null
    bairro: string | null
    cidade: string | null
    estado: string | null
    cep: string | null
    operadorId: string | null
    filaId: string | null
  }

  export type AtendimentoMaxAggregateOutputType = {
    id: string | null
    nomeCompleto: string | null
    nomeSocial: string | null
    cpf: string | null
    dataNascimento: string | null
    telefone: string | null
    email: string | null
    tipoAtendimento: string | null
    capacidadeCivil: string | null
    estadoCivil: string | null
    profissao: string | null
    tipoDomicilio: string | null
    descricaoDomicilio: string | null
    membrosFamiliares: string | null
    rendaFamiliar: string | null
    tipoDemanda: string | null
    descricaoAtendimento: string | null
    observacoes: string | null
    formId: string | null
    formTipo: string | null
    dataCriacao: Date | null
    status: $Enums.StatusAtendimento | null
    logradouro: string | null
    numero: string | null
    complemento: string | null
    bairro: string | null
    cidade: string | null
    estado: string | null
    cep: string | null
    operadorId: string | null
    filaId: string | null
  }

  export type AtendimentoCountAggregateOutputType = {
    id: number
    nomeCompleto: number
    nomeSocial: number
    cpf: number
    dataNascimento: number
    telefone: number
    email: number
    tipoAtendimento: number
    capacidadeCivil: number
    estadoCivil: number
    profissao: number
    tipoDomicilio: number
    descricaoDomicilio: number
    membrosFamiliares: number
    rendaFamiliar: number
    tipoDemanda: number
    descricaoAtendimento: number
    observacoes: number
    formId: number
    formTipo: number
    dataCriacao: number
    status: number
    logradouro: number
    numero: number
    complemento: number
    bairro: number
    cidade: number
    estado: number
    cep: number
    operadorId: number
    filaId: number
    _all: number
  }


  export type AtendimentoMinAggregateInputType = {
    id?: true
    nomeCompleto?: true
    nomeSocial?: true
    cpf?: true
    dataNascimento?: true
    telefone?: true
    email?: true
    tipoAtendimento?: true
    capacidadeCivil?: true
    estadoCivil?: true
    profissao?: true
    tipoDomicilio?: true
    descricaoDomicilio?: true
    membrosFamiliares?: true
    rendaFamiliar?: true
    tipoDemanda?: true
    descricaoAtendimento?: true
    observacoes?: true
    formId?: true
    formTipo?: true
    dataCriacao?: true
    status?: true
    logradouro?: true
    numero?: true
    complemento?: true
    bairro?: true
    cidade?: true
    estado?: true
    cep?: true
    operadorId?: true
    filaId?: true
  }

  export type AtendimentoMaxAggregateInputType = {
    id?: true
    nomeCompleto?: true
    nomeSocial?: true
    cpf?: true
    dataNascimento?: true
    telefone?: true
    email?: true
    tipoAtendimento?: true
    capacidadeCivil?: true
    estadoCivil?: true
    profissao?: true
    tipoDomicilio?: true
    descricaoDomicilio?: true
    membrosFamiliares?: true
    rendaFamiliar?: true
    tipoDemanda?: true
    descricaoAtendimento?: true
    observacoes?: true
    formId?: true
    formTipo?: true
    dataCriacao?: true
    status?: true
    logradouro?: true
    numero?: true
    complemento?: true
    bairro?: true
    cidade?: true
    estado?: true
    cep?: true
    operadorId?: true
    filaId?: true
  }

  export type AtendimentoCountAggregateInputType = {
    id?: true
    nomeCompleto?: true
    nomeSocial?: true
    cpf?: true
    dataNascimento?: true
    telefone?: true
    email?: true
    tipoAtendimento?: true
    capacidadeCivil?: true
    estadoCivil?: true
    profissao?: true
    tipoDomicilio?: true
    descricaoDomicilio?: true
    membrosFamiliares?: true
    rendaFamiliar?: true
    tipoDemanda?: true
    descricaoAtendimento?: true
    observacoes?: true
    formId?: true
    formTipo?: true
    dataCriacao?: true
    status?: true
    logradouro?: true
    numero?: true
    complemento?: true
    bairro?: true
    cidade?: true
    estado?: true
    cep?: true
    operadorId?: true
    filaId?: true
    _all?: true
  }

  export type AtendimentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atendimento to aggregate.
     */
    where?: AtendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atendimentos to fetch.
     */
    orderBy?: AtendimentoOrderByWithRelationInput | AtendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AtendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atendimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Atendimentos
    **/
    _count?: true | AtendimentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtendimentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtendimentoMaxAggregateInputType
  }

  export type GetAtendimentoAggregateType<T extends AtendimentoAggregateArgs> = {
        [P in keyof T & keyof AggregateAtendimento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtendimento[P]>
      : GetScalarType<T[P], AggregateAtendimento[P]>
  }




  export type AtendimentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtendimentoWhereInput
    orderBy?: AtendimentoOrderByWithAggregationInput | AtendimentoOrderByWithAggregationInput[]
    by: AtendimentoScalarFieldEnum[] | AtendimentoScalarFieldEnum
    having?: AtendimentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtendimentoCountAggregateInputType | true
    _min?: AtendimentoMinAggregateInputType
    _max?: AtendimentoMaxAggregateInputType
  }

  export type AtendimentoGroupByOutputType = {
    id: string
    nomeCompleto: string
    nomeSocial: string | null
    cpf: string
    dataNascimento: string
    telefone: string
    email: string | null
    tipoAtendimento: string
    capacidadeCivil: string | null
    estadoCivil: string | null
    profissao: string | null
    tipoDomicilio: string | null
    descricaoDomicilio: string | null
    membrosFamiliares: string | null
    rendaFamiliar: string | null
    tipoDemanda: string | null
    descricaoAtendimento: string
    observacoes: string | null
    formId: string
    formTipo: string
    dataCriacao: Date
    status: $Enums.StatusAtendimento
    logradouro: string
    numero: string
    complemento: string | null
    bairro: string
    cidade: string
    estado: string
    cep: string
    operadorId: string
    filaId: string | null
    _count: AtendimentoCountAggregateOutputType | null
    _min: AtendimentoMinAggregateOutputType | null
    _max: AtendimentoMaxAggregateOutputType | null
  }

  type GetAtendimentoGroupByPayload<T extends AtendimentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtendimentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtendimentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtendimentoGroupByOutputType[P]>
            : GetScalarType<T[P], AtendimentoGroupByOutputType[P]>
        }
      >
    >


  export type AtendimentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeCompleto?: boolean
    nomeSocial?: boolean
    cpf?: boolean
    dataNascimento?: boolean
    telefone?: boolean
    email?: boolean
    tipoAtendimento?: boolean
    capacidadeCivil?: boolean
    estadoCivil?: boolean
    profissao?: boolean
    tipoDomicilio?: boolean
    descricaoDomicilio?: boolean
    membrosFamiliares?: boolean
    rendaFamiliar?: boolean
    tipoDemanda?: boolean
    descricaoAtendimento?: boolean
    observacoes?: boolean
    formId?: boolean
    formTipo?: boolean
    dataCriacao?: boolean
    status?: boolean
    logradouro?: boolean
    numero?: boolean
    complemento?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    cep?: boolean
    operadorId?: boolean
    filaId?: boolean
    operador?: boolean | UserDefaultArgs<ExtArgs>
    fila?: boolean | Atendimento$filaArgs<ExtArgs>
    processo?: boolean | Atendimento$processoArgs<ExtArgs>
    formularios?: boolean | Atendimento$formulariosArgs<ExtArgs>
    documentos?: boolean | Atendimento$documentosArgs<ExtArgs>
    _count?: boolean | AtendimentoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atendimento"]>

  export type AtendimentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeCompleto?: boolean
    nomeSocial?: boolean
    cpf?: boolean
    dataNascimento?: boolean
    telefone?: boolean
    email?: boolean
    tipoAtendimento?: boolean
    capacidadeCivil?: boolean
    estadoCivil?: boolean
    profissao?: boolean
    tipoDomicilio?: boolean
    descricaoDomicilio?: boolean
    membrosFamiliares?: boolean
    rendaFamiliar?: boolean
    tipoDemanda?: boolean
    descricaoAtendimento?: boolean
    observacoes?: boolean
    formId?: boolean
    formTipo?: boolean
    dataCriacao?: boolean
    status?: boolean
    logradouro?: boolean
    numero?: boolean
    complemento?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    cep?: boolean
    operadorId?: boolean
    filaId?: boolean
    operador?: boolean | UserDefaultArgs<ExtArgs>
    fila?: boolean | Atendimento$filaArgs<ExtArgs>
  }, ExtArgs["result"]["atendimento"]>

  export type AtendimentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeCompleto?: boolean
    nomeSocial?: boolean
    cpf?: boolean
    dataNascimento?: boolean
    telefone?: boolean
    email?: boolean
    tipoAtendimento?: boolean
    capacidadeCivil?: boolean
    estadoCivil?: boolean
    profissao?: boolean
    tipoDomicilio?: boolean
    descricaoDomicilio?: boolean
    membrosFamiliares?: boolean
    rendaFamiliar?: boolean
    tipoDemanda?: boolean
    descricaoAtendimento?: boolean
    observacoes?: boolean
    formId?: boolean
    formTipo?: boolean
    dataCriacao?: boolean
    status?: boolean
    logradouro?: boolean
    numero?: boolean
    complemento?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    cep?: boolean
    operadorId?: boolean
    filaId?: boolean
    operador?: boolean | UserDefaultArgs<ExtArgs>
    fila?: boolean | Atendimento$filaArgs<ExtArgs>
  }, ExtArgs["result"]["atendimento"]>

  export type AtendimentoSelectScalar = {
    id?: boolean
    nomeCompleto?: boolean
    nomeSocial?: boolean
    cpf?: boolean
    dataNascimento?: boolean
    telefone?: boolean
    email?: boolean
    tipoAtendimento?: boolean
    capacidadeCivil?: boolean
    estadoCivil?: boolean
    profissao?: boolean
    tipoDomicilio?: boolean
    descricaoDomicilio?: boolean
    membrosFamiliares?: boolean
    rendaFamiliar?: boolean
    tipoDemanda?: boolean
    descricaoAtendimento?: boolean
    observacoes?: boolean
    formId?: boolean
    formTipo?: boolean
    dataCriacao?: boolean
    status?: boolean
    logradouro?: boolean
    numero?: boolean
    complemento?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    cep?: boolean
    operadorId?: boolean
    filaId?: boolean
  }

  export type AtendimentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomeCompleto" | "nomeSocial" | "cpf" | "dataNascimento" | "telefone" | "email" | "tipoAtendimento" | "capacidadeCivil" | "estadoCivil" | "profissao" | "tipoDomicilio" | "descricaoDomicilio" | "membrosFamiliares" | "rendaFamiliar" | "tipoDemanda" | "descricaoAtendimento" | "observacoes" | "formId" | "formTipo" | "dataCriacao" | "status" | "logradouro" | "numero" | "complemento" | "bairro" | "cidade" | "estado" | "cep" | "operadorId" | "filaId", ExtArgs["result"]["atendimento"]>
  export type AtendimentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operador?: boolean | UserDefaultArgs<ExtArgs>
    fila?: boolean | Atendimento$filaArgs<ExtArgs>
    processo?: boolean | Atendimento$processoArgs<ExtArgs>
    formularios?: boolean | Atendimento$formulariosArgs<ExtArgs>
    documentos?: boolean | Atendimento$documentosArgs<ExtArgs>
    _count?: boolean | AtendimentoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AtendimentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operador?: boolean | UserDefaultArgs<ExtArgs>
    fila?: boolean | Atendimento$filaArgs<ExtArgs>
  }
  export type AtendimentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operador?: boolean | UserDefaultArgs<ExtArgs>
    fila?: boolean | Atendimento$filaArgs<ExtArgs>
  }

  export type $AtendimentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Atendimento"
    objects: {
      operador: Prisma.$UserPayload<ExtArgs>
      fila: Prisma.$FilaAtendimentoPayload<ExtArgs> | null
      processo: Prisma.$ProcessoPayload<ExtArgs> | null
      formularios: Prisma.$FormularioPreenchidoPayload<ExtArgs>[]
      documentos: Prisma.$DocumentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nomeCompleto: string
      nomeSocial: string | null
      cpf: string
      dataNascimento: string
      telefone: string
      email: string | null
      tipoAtendimento: string
      capacidadeCivil: string | null
      estadoCivil: string | null
      profissao: string | null
      tipoDomicilio: string | null
      descricaoDomicilio: string | null
      membrosFamiliares: string | null
      rendaFamiliar: string | null
      tipoDemanda: string | null
      descricaoAtendimento: string
      observacoes: string | null
      formId: string
      formTipo: string
      dataCriacao: Date
      status: $Enums.StatusAtendimento
      logradouro: string
      numero: string
      complemento: string | null
      bairro: string
      cidade: string
      estado: string
      cep: string
      operadorId: string
      filaId: string | null
    }, ExtArgs["result"]["atendimento"]>
    composites: {}
  }

  type AtendimentoGetPayload<S extends boolean | null | undefined | AtendimentoDefaultArgs> = $Result.GetResult<Prisma.$AtendimentoPayload, S>

  type AtendimentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AtendimentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AtendimentoCountAggregateInputType | true
    }

  export interface AtendimentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Atendimento'], meta: { name: 'Atendimento' } }
    /**
     * Find zero or one Atendimento that matches the filter.
     * @param {AtendimentoFindUniqueArgs} args - Arguments to find a Atendimento
     * @example
     * // Get one Atendimento
     * const atendimento = await prisma.atendimento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AtendimentoFindUniqueArgs>(args: SelectSubset<T, AtendimentoFindUniqueArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Atendimento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AtendimentoFindUniqueOrThrowArgs} args - Arguments to find a Atendimento
     * @example
     * // Get one Atendimento
     * const atendimento = await prisma.atendimento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AtendimentoFindUniqueOrThrowArgs>(args: SelectSubset<T, AtendimentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atendimento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoFindFirstArgs} args - Arguments to find a Atendimento
     * @example
     * // Get one Atendimento
     * const atendimento = await prisma.atendimento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AtendimentoFindFirstArgs>(args?: SelectSubset<T, AtendimentoFindFirstArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atendimento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoFindFirstOrThrowArgs} args - Arguments to find a Atendimento
     * @example
     * // Get one Atendimento
     * const atendimento = await prisma.atendimento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AtendimentoFindFirstOrThrowArgs>(args?: SelectSubset<T, AtendimentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Atendimentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Atendimentos
     * const atendimentos = await prisma.atendimento.findMany()
     * 
     * // Get first 10 Atendimentos
     * const atendimentos = await prisma.atendimento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const atendimentoWithIdOnly = await prisma.atendimento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AtendimentoFindManyArgs>(args?: SelectSubset<T, AtendimentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Atendimento.
     * @param {AtendimentoCreateArgs} args - Arguments to create a Atendimento.
     * @example
     * // Create one Atendimento
     * const Atendimento = await prisma.atendimento.create({
     *   data: {
     *     // ... data to create a Atendimento
     *   }
     * })
     * 
     */
    create<T extends AtendimentoCreateArgs>(args: SelectSubset<T, AtendimentoCreateArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Atendimentos.
     * @param {AtendimentoCreateManyArgs} args - Arguments to create many Atendimentos.
     * @example
     * // Create many Atendimentos
     * const atendimento = await prisma.atendimento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AtendimentoCreateManyArgs>(args?: SelectSubset<T, AtendimentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Atendimentos and returns the data saved in the database.
     * @param {AtendimentoCreateManyAndReturnArgs} args - Arguments to create many Atendimentos.
     * @example
     * // Create many Atendimentos
     * const atendimento = await prisma.atendimento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Atendimentos and only return the `id`
     * const atendimentoWithIdOnly = await prisma.atendimento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AtendimentoCreateManyAndReturnArgs>(args?: SelectSubset<T, AtendimentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Atendimento.
     * @param {AtendimentoDeleteArgs} args - Arguments to delete one Atendimento.
     * @example
     * // Delete one Atendimento
     * const Atendimento = await prisma.atendimento.delete({
     *   where: {
     *     // ... filter to delete one Atendimento
     *   }
     * })
     * 
     */
    delete<T extends AtendimentoDeleteArgs>(args: SelectSubset<T, AtendimentoDeleteArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Atendimento.
     * @param {AtendimentoUpdateArgs} args - Arguments to update one Atendimento.
     * @example
     * // Update one Atendimento
     * const atendimento = await prisma.atendimento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AtendimentoUpdateArgs>(args: SelectSubset<T, AtendimentoUpdateArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Atendimentos.
     * @param {AtendimentoDeleteManyArgs} args - Arguments to filter Atendimentos to delete.
     * @example
     * // Delete a few Atendimentos
     * const { count } = await prisma.atendimento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AtendimentoDeleteManyArgs>(args?: SelectSubset<T, AtendimentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atendimentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Atendimentos
     * const atendimento = await prisma.atendimento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AtendimentoUpdateManyArgs>(args: SelectSubset<T, AtendimentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atendimentos and returns the data updated in the database.
     * @param {AtendimentoUpdateManyAndReturnArgs} args - Arguments to update many Atendimentos.
     * @example
     * // Update many Atendimentos
     * const atendimento = await prisma.atendimento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Atendimentos and only return the `id`
     * const atendimentoWithIdOnly = await prisma.atendimento.updateManyAndReturn({
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
    updateManyAndReturn<T extends AtendimentoUpdateManyAndReturnArgs>(args: SelectSubset<T, AtendimentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Atendimento.
     * @param {AtendimentoUpsertArgs} args - Arguments to update or create a Atendimento.
     * @example
     * // Update or create a Atendimento
     * const atendimento = await prisma.atendimento.upsert({
     *   create: {
     *     // ... data to create a Atendimento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Atendimento we want to update
     *   }
     * })
     */
    upsert<T extends AtendimentoUpsertArgs>(args: SelectSubset<T, AtendimentoUpsertArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Atendimentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoCountArgs} args - Arguments to filter Atendimentos to count.
     * @example
     * // Count the number of Atendimentos
     * const count = await prisma.atendimento.count({
     *   where: {
     *     // ... the filter for the Atendimentos we want to count
     *   }
     * })
    **/
    count<T extends AtendimentoCountArgs>(
      args?: Subset<T, AtendimentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtendimentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Atendimento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AtendimentoAggregateArgs>(args: Subset<T, AtendimentoAggregateArgs>): Prisma.PrismaPromise<GetAtendimentoAggregateType<T>>

    /**
     * Group by Atendimento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoGroupByArgs} args - Group by arguments.
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
      T extends AtendimentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtendimentoGroupByArgs['orderBy'] }
        : { orderBy?: AtendimentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AtendimentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtendimentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Atendimento model
   */
  readonly fields: AtendimentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Atendimento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AtendimentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    operador<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fila<T extends Atendimento$filaArgs<ExtArgs> = {}>(args?: Subset<T, Atendimento$filaArgs<ExtArgs>>): Prisma__FilaAtendimentoClient<$Result.GetResult<Prisma.$FilaAtendimentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    processo<T extends Atendimento$processoArgs<ExtArgs> = {}>(args?: Subset<T, Atendimento$processoArgs<ExtArgs>>): Prisma__ProcessoClient<$Result.GetResult<Prisma.$ProcessoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    formularios<T extends Atendimento$formulariosArgs<ExtArgs> = {}>(args?: Subset<T, Atendimento$formulariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormularioPreenchidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documentos<T extends Atendimento$documentosArgs<ExtArgs> = {}>(args?: Subset<T, Atendimento$documentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Atendimento model
   */
  interface AtendimentoFieldRefs {
    readonly id: FieldRef<"Atendimento", 'String'>
    readonly nomeCompleto: FieldRef<"Atendimento", 'String'>
    readonly nomeSocial: FieldRef<"Atendimento", 'String'>
    readonly cpf: FieldRef<"Atendimento", 'String'>
    readonly dataNascimento: FieldRef<"Atendimento", 'String'>
    readonly telefone: FieldRef<"Atendimento", 'String'>
    readonly email: FieldRef<"Atendimento", 'String'>
    readonly tipoAtendimento: FieldRef<"Atendimento", 'String'>
    readonly capacidadeCivil: FieldRef<"Atendimento", 'String'>
    readonly estadoCivil: FieldRef<"Atendimento", 'String'>
    readonly profissao: FieldRef<"Atendimento", 'String'>
    readonly tipoDomicilio: FieldRef<"Atendimento", 'String'>
    readonly descricaoDomicilio: FieldRef<"Atendimento", 'String'>
    readonly membrosFamiliares: FieldRef<"Atendimento", 'String'>
    readonly rendaFamiliar: FieldRef<"Atendimento", 'String'>
    readonly tipoDemanda: FieldRef<"Atendimento", 'String'>
    readonly descricaoAtendimento: FieldRef<"Atendimento", 'String'>
    readonly observacoes: FieldRef<"Atendimento", 'String'>
    readonly formId: FieldRef<"Atendimento", 'String'>
    readonly formTipo: FieldRef<"Atendimento", 'String'>
    readonly dataCriacao: FieldRef<"Atendimento", 'DateTime'>
    readonly status: FieldRef<"Atendimento", 'StatusAtendimento'>
    readonly logradouro: FieldRef<"Atendimento", 'String'>
    readonly numero: FieldRef<"Atendimento", 'String'>
    readonly complemento: FieldRef<"Atendimento", 'String'>
    readonly bairro: FieldRef<"Atendimento", 'String'>
    readonly cidade: FieldRef<"Atendimento", 'String'>
    readonly estado: FieldRef<"Atendimento", 'String'>
    readonly cep: FieldRef<"Atendimento", 'String'>
    readonly operadorId: FieldRef<"Atendimento", 'String'>
    readonly filaId: FieldRef<"Atendimento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Atendimento findUnique
   */
  export type AtendimentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which Atendimento to fetch.
     */
    where: AtendimentoWhereUniqueInput
  }

  /**
   * Atendimento findUniqueOrThrow
   */
  export type AtendimentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which Atendimento to fetch.
     */
    where: AtendimentoWhereUniqueInput
  }

  /**
   * Atendimento findFirst
   */
  export type AtendimentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which Atendimento to fetch.
     */
    where?: AtendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atendimentos to fetch.
     */
    orderBy?: AtendimentoOrderByWithRelationInput | AtendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atendimentos.
     */
    cursor?: AtendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atendimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atendimentos.
     */
    distinct?: AtendimentoScalarFieldEnum | AtendimentoScalarFieldEnum[]
  }

  /**
   * Atendimento findFirstOrThrow
   */
  export type AtendimentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which Atendimento to fetch.
     */
    where?: AtendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atendimentos to fetch.
     */
    orderBy?: AtendimentoOrderByWithRelationInput | AtendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atendimentos.
     */
    cursor?: AtendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atendimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atendimentos.
     */
    distinct?: AtendimentoScalarFieldEnum | AtendimentoScalarFieldEnum[]
  }

  /**
   * Atendimento findMany
   */
  export type AtendimentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which Atendimentos to fetch.
     */
    where?: AtendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atendimentos to fetch.
     */
    orderBy?: AtendimentoOrderByWithRelationInput | AtendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Atendimentos.
     */
    cursor?: AtendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atendimentos.
     */
    skip?: number
    distinct?: AtendimentoScalarFieldEnum | AtendimentoScalarFieldEnum[]
  }

  /**
   * Atendimento create
   */
  export type AtendimentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Atendimento.
     */
    data: XOR<AtendimentoCreateInput, AtendimentoUncheckedCreateInput>
  }

  /**
   * Atendimento createMany
   */
  export type AtendimentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Atendimentos.
     */
    data: AtendimentoCreateManyInput | AtendimentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Atendimento createManyAndReturn
   */
  export type AtendimentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * The data used to create many Atendimentos.
     */
    data: AtendimentoCreateManyInput | AtendimentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Atendimento update
   */
  export type AtendimentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Atendimento.
     */
    data: XOR<AtendimentoUpdateInput, AtendimentoUncheckedUpdateInput>
    /**
     * Choose, which Atendimento to update.
     */
    where: AtendimentoWhereUniqueInput
  }

  /**
   * Atendimento updateMany
   */
  export type AtendimentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Atendimentos.
     */
    data: XOR<AtendimentoUpdateManyMutationInput, AtendimentoUncheckedUpdateManyInput>
    /**
     * Filter which Atendimentos to update
     */
    where?: AtendimentoWhereInput
    /**
     * Limit how many Atendimentos to update.
     */
    limit?: number
  }

  /**
   * Atendimento updateManyAndReturn
   */
  export type AtendimentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * The data used to update Atendimentos.
     */
    data: XOR<AtendimentoUpdateManyMutationInput, AtendimentoUncheckedUpdateManyInput>
    /**
     * Filter which Atendimentos to update
     */
    where?: AtendimentoWhereInput
    /**
     * Limit how many Atendimentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Atendimento upsert
   */
  export type AtendimentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Atendimento to update in case it exists.
     */
    where: AtendimentoWhereUniqueInput
    /**
     * In case the Atendimento found by the `where` argument doesn't exist, create a new Atendimento with this data.
     */
    create: XOR<AtendimentoCreateInput, AtendimentoUncheckedCreateInput>
    /**
     * In case the Atendimento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AtendimentoUpdateInput, AtendimentoUncheckedUpdateInput>
  }

  /**
   * Atendimento delete
   */
  export type AtendimentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * Filter which Atendimento to delete.
     */
    where: AtendimentoWhereUniqueInput
  }

  /**
   * Atendimento deleteMany
   */
  export type AtendimentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atendimentos to delete
     */
    where?: AtendimentoWhereInput
    /**
     * Limit how many Atendimentos to delete.
     */
    limit?: number
  }

  /**
   * Atendimento.fila
   */
  export type Atendimento$filaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilaAtendimento
     */
    select?: FilaAtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilaAtendimento
     */
    omit?: FilaAtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaAtendimentoInclude<ExtArgs> | null
    where?: FilaAtendimentoWhereInput
  }

  /**
   * Atendimento.processo
   */
  export type Atendimento$processoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessoInclude<ExtArgs> | null
    where?: ProcessoWhereInput
  }

  /**
   * Atendimento.formularios
   */
  export type Atendimento$formulariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormularioPreenchido
     */
    select?: FormularioPreenchidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormularioPreenchido
     */
    omit?: FormularioPreenchidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormularioPreenchidoInclude<ExtArgs> | null
    where?: FormularioPreenchidoWhereInput
    orderBy?: FormularioPreenchidoOrderByWithRelationInput | FormularioPreenchidoOrderByWithRelationInput[]
    cursor?: FormularioPreenchidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormularioPreenchidoScalarFieldEnum | FormularioPreenchidoScalarFieldEnum[]
  }

  /**
   * Atendimento.documentos
   */
  export type Atendimento$documentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    where?: DocumentoWhereInput
    orderBy?: DocumentoOrderByWithRelationInput | DocumentoOrderByWithRelationInput[]
    cursor?: DocumentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentoScalarFieldEnum | DocumentoScalarFieldEnum[]
  }

  /**
   * Atendimento without action
   */
  export type AtendimentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
  }


  /**
   * Model Processo
   */

  export type AggregateProcesso = {
    _count: ProcessoCountAggregateOutputType | null
    _min: ProcessoMinAggregateOutputType | null
    _max: ProcessoMaxAggregateOutputType | null
  }

  export type ProcessoMinAggregateOutputType = {
    id: string | null
    numeroProcesso: string | null
    resultado: string | null
    resultadoDetalhado: string | null
    valoresAtrasados: string | null
    beneficios: string | null
    dataAtualizacao: Date | null
    atendimentoId: string | null
  }

  export type ProcessoMaxAggregateOutputType = {
    id: string | null
    numeroProcesso: string | null
    resultado: string | null
    resultadoDetalhado: string | null
    valoresAtrasados: string | null
    beneficios: string | null
    dataAtualizacao: Date | null
    atendimentoId: string | null
  }

  export type ProcessoCountAggregateOutputType = {
    id: number
    numeroProcesso: number
    resultado: number
    resultadoDetalhado: number
    valoresAtrasados: number
    beneficios: number
    dataAtualizacao: number
    atendimentoId: number
    _all: number
  }


  export type ProcessoMinAggregateInputType = {
    id?: true
    numeroProcesso?: true
    resultado?: true
    resultadoDetalhado?: true
    valoresAtrasados?: true
    beneficios?: true
    dataAtualizacao?: true
    atendimentoId?: true
  }

  export type ProcessoMaxAggregateInputType = {
    id?: true
    numeroProcesso?: true
    resultado?: true
    resultadoDetalhado?: true
    valoresAtrasados?: true
    beneficios?: true
    dataAtualizacao?: true
    atendimentoId?: true
  }

  export type ProcessoCountAggregateInputType = {
    id?: true
    numeroProcesso?: true
    resultado?: true
    resultadoDetalhado?: true
    valoresAtrasados?: true
    beneficios?: true
    dataAtualizacao?: true
    atendimentoId?: true
    _all?: true
  }

  export type ProcessoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Processo to aggregate.
     */
    where?: ProcessoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Processos to fetch.
     */
    orderBy?: ProcessoOrderByWithRelationInput | ProcessoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProcessoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Processos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Processos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Processos
    **/
    _count?: true | ProcessoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProcessoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProcessoMaxAggregateInputType
  }

  export type GetProcessoAggregateType<T extends ProcessoAggregateArgs> = {
        [P in keyof T & keyof AggregateProcesso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcesso[P]>
      : GetScalarType<T[P], AggregateProcesso[P]>
  }




  export type ProcessoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessoWhereInput
    orderBy?: ProcessoOrderByWithAggregationInput | ProcessoOrderByWithAggregationInput[]
    by: ProcessoScalarFieldEnum[] | ProcessoScalarFieldEnum
    having?: ProcessoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProcessoCountAggregateInputType | true
    _min?: ProcessoMinAggregateInputType
    _max?: ProcessoMaxAggregateInputType
  }

  export type ProcessoGroupByOutputType = {
    id: string
    numeroProcesso: string
    resultado: string
    resultadoDetalhado: string | null
    valoresAtrasados: string | null
    beneficios: string | null
    dataAtualizacao: Date
    atendimentoId: string
    _count: ProcessoCountAggregateOutputType | null
    _min: ProcessoMinAggregateOutputType | null
    _max: ProcessoMaxAggregateOutputType | null
  }

  type GetProcessoGroupByPayload<T extends ProcessoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProcessoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProcessoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProcessoGroupByOutputType[P]>
            : GetScalarType<T[P], ProcessoGroupByOutputType[P]>
        }
      >
    >


  export type ProcessoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numeroProcesso?: boolean
    resultado?: boolean
    resultadoDetalhado?: boolean
    valoresAtrasados?: boolean
    beneficios?: boolean
    dataAtualizacao?: boolean
    atendimentoId?: boolean
    atendimento?: boolean | AtendimentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["processo"]>

  export type ProcessoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numeroProcesso?: boolean
    resultado?: boolean
    resultadoDetalhado?: boolean
    valoresAtrasados?: boolean
    beneficios?: boolean
    dataAtualizacao?: boolean
    atendimentoId?: boolean
    atendimento?: boolean | AtendimentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["processo"]>

  export type ProcessoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numeroProcesso?: boolean
    resultado?: boolean
    resultadoDetalhado?: boolean
    valoresAtrasados?: boolean
    beneficios?: boolean
    dataAtualizacao?: boolean
    atendimentoId?: boolean
    atendimento?: boolean | AtendimentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["processo"]>

  export type ProcessoSelectScalar = {
    id?: boolean
    numeroProcesso?: boolean
    resultado?: boolean
    resultadoDetalhado?: boolean
    valoresAtrasados?: boolean
    beneficios?: boolean
    dataAtualizacao?: boolean
    atendimentoId?: boolean
  }

  export type ProcessoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numeroProcesso" | "resultado" | "resultadoDetalhado" | "valoresAtrasados" | "beneficios" | "dataAtualizacao" | "atendimentoId", ExtArgs["result"]["processo"]>
  export type ProcessoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atendimento?: boolean | AtendimentoDefaultArgs<ExtArgs>
  }
  export type ProcessoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atendimento?: boolean | AtendimentoDefaultArgs<ExtArgs>
  }
  export type ProcessoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atendimento?: boolean | AtendimentoDefaultArgs<ExtArgs>
  }

  export type $ProcessoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Processo"
    objects: {
      atendimento: Prisma.$AtendimentoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      numeroProcesso: string
      resultado: string
      resultadoDetalhado: string | null
      valoresAtrasados: string | null
      beneficios: string | null
      dataAtualizacao: Date
      atendimentoId: string
    }, ExtArgs["result"]["processo"]>
    composites: {}
  }

  type ProcessoGetPayload<S extends boolean | null | undefined | ProcessoDefaultArgs> = $Result.GetResult<Prisma.$ProcessoPayload, S>

  type ProcessoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProcessoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProcessoCountAggregateInputType | true
    }

  export interface ProcessoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Processo'], meta: { name: 'Processo' } }
    /**
     * Find zero or one Processo that matches the filter.
     * @param {ProcessoFindUniqueArgs} args - Arguments to find a Processo
     * @example
     * // Get one Processo
     * const processo = await prisma.processo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProcessoFindUniqueArgs>(args: SelectSubset<T, ProcessoFindUniqueArgs<ExtArgs>>): Prisma__ProcessoClient<$Result.GetResult<Prisma.$ProcessoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Processo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProcessoFindUniqueOrThrowArgs} args - Arguments to find a Processo
     * @example
     * // Get one Processo
     * const processo = await prisma.processo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProcessoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProcessoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProcessoClient<$Result.GetResult<Prisma.$ProcessoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Processo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessoFindFirstArgs} args - Arguments to find a Processo
     * @example
     * // Get one Processo
     * const processo = await prisma.processo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProcessoFindFirstArgs>(args?: SelectSubset<T, ProcessoFindFirstArgs<ExtArgs>>): Prisma__ProcessoClient<$Result.GetResult<Prisma.$ProcessoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Processo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessoFindFirstOrThrowArgs} args - Arguments to find a Processo
     * @example
     * // Get one Processo
     * const processo = await prisma.processo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProcessoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProcessoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProcessoClient<$Result.GetResult<Prisma.$ProcessoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Processos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Processos
     * const processos = await prisma.processo.findMany()
     * 
     * // Get first 10 Processos
     * const processos = await prisma.processo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const processoWithIdOnly = await prisma.processo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProcessoFindManyArgs>(args?: SelectSubset<T, ProcessoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Processo.
     * @param {ProcessoCreateArgs} args - Arguments to create a Processo.
     * @example
     * // Create one Processo
     * const Processo = await prisma.processo.create({
     *   data: {
     *     // ... data to create a Processo
     *   }
     * })
     * 
     */
    create<T extends ProcessoCreateArgs>(args: SelectSubset<T, ProcessoCreateArgs<ExtArgs>>): Prisma__ProcessoClient<$Result.GetResult<Prisma.$ProcessoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Processos.
     * @param {ProcessoCreateManyArgs} args - Arguments to create many Processos.
     * @example
     * // Create many Processos
     * const processo = await prisma.processo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProcessoCreateManyArgs>(args?: SelectSubset<T, ProcessoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Processos and returns the data saved in the database.
     * @param {ProcessoCreateManyAndReturnArgs} args - Arguments to create many Processos.
     * @example
     * // Create many Processos
     * const processo = await prisma.processo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Processos and only return the `id`
     * const processoWithIdOnly = await prisma.processo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProcessoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProcessoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Processo.
     * @param {ProcessoDeleteArgs} args - Arguments to delete one Processo.
     * @example
     * // Delete one Processo
     * const Processo = await prisma.processo.delete({
     *   where: {
     *     // ... filter to delete one Processo
     *   }
     * })
     * 
     */
    delete<T extends ProcessoDeleteArgs>(args: SelectSubset<T, ProcessoDeleteArgs<ExtArgs>>): Prisma__ProcessoClient<$Result.GetResult<Prisma.$ProcessoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Processo.
     * @param {ProcessoUpdateArgs} args - Arguments to update one Processo.
     * @example
     * // Update one Processo
     * const processo = await prisma.processo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProcessoUpdateArgs>(args: SelectSubset<T, ProcessoUpdateArgs<ExtArgs>>): Prisma__ProcessoClient<$Result.GetResult<Prisma.$ProcessoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Processos.
     * @param {ProcessoDeleteManyArgs} args - Arguments to filter Processos to delete.
     * @example
     * // Delete a few Processos
     * const { count } = await prisma.processo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProcessoDeleteManyArgs>(args?: SelectSubset<T, ProcessoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Processos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Processos
     * const processo = await prisma.processo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProcessoUpdateManyArgs>(args: SelectSubset<T, ProcessoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Processos and returns the data updated in the database.
     * @param {ProcessoUpdateManyAndReturnArgs} args - Arguments to update many Processos.
     * @example
     * // Update many Processos
     * const processo = await prisma.processo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Processos and only return the `id`
     * const processoWithIdOnly = await prisma.processo.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProcessoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProcessoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Processo.
     * @param {ProcessoUpsertArgs} args - Arguments to update or create a Processo.
     * @example
     * // Update or create a Processo
     * const processo = await prisma.processo.upsert({
     *   create: {
     *     // ... data to create a Processo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Processo we want to update
     *   }
     * })
     */
    upsert<T extends ProcessoUpsertArgs>(args: SelectSubset<T, ProcessoUpsertArgs<ExtArgs>>): Prisma__ProcessoClient<$Result.GetResult<Prisma.$ProcessoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Processos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessoCountArgs} args - Arguments to filter Processos to count.
     * @example
     * // Count the number of Processos
     * const count = await prisma.processo.count({
     *   where: {
     *     // ... the filter for the Processos we want to count
     *   }
     * })
    **/
    count<T extends ProcessoCountArgs>(
      args?: Subset<T, ProcessoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProcessoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Processo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProcessoAggregateArgs>(args: Subset<T, ProcessoAggregateArgs>): Prisma.PrismaPromise<GetProcessoAggregateType<T>>

    /**
     * Group by Processo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessoGroupByArgs} args - Group by arguments.
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
      T extends ProcessoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProcessoGroupByArgs['orderBy'] }
        : { orderBy?: ProcessoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProcessoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcessoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Processo model
   */
  readonly fields: ProcessoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Processo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProcessoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    atendimento<T extends AtendimentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AtendimentoDefaultArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Processo model
   */
  interface ProcessoFieldRefs {
    readonly id: FieldRef<"Processo", 'String'>
    readonly numeroProcesso: FieldRef<"Processo", 'String'>
    readonly resultado: FieldRef<"Processo", 'String'>
    readonly resultadoDetalhado: FieldRef<"Processo", 'String'>
    readonly valoresAtrasados: FieldRef<"Processo", 'String'>
    readonly beneficios: FieldRef<"Processo", 'String'>
    readonly dataAtualizacao: FieldRef<"Processo", 'DateTime'>
    readonly atendimentoId: FieldRef<"Processo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Processo findUnique
   */
  export type ProcessoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessoInclude<ExtArgs> | null
    /**
     * Filter, which Processo to fetch.
     */
    where: ProcessoWhereUniqueInput
  }

  /**
   * Processo findUniqueOrThrow
   */
  export type ProcessoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessoInclude<ExtArgs> | null
    /**
     * Filter, which Processo to fetch.
     */
    where: ProcessoWhereUniqueInput
  }

  /**
   * Processo findFirst
   */
  export type ProcessoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessoInclude<ExtArgs> | null
    /**
     * Filter, which Processo to fetch.
     */
    where?: ProcessoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Processos to fetch.
     */
    orderBy?: ProcessoOrderByWithRelationInput | ProcessoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Processos.
     */
    cursor?: ProcessoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Processos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Processos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Processos.
     */
    distinct?: ProcessoScalarFieldEnum | ProcessoScalarFieldEnum[]
  }

  /**
   * Processo findFirstOrThrow
   */
  export type ProcessoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessoInclude<ExtArgs> | null
    /**
     * Filter, which Processo to fetch.
     */
    where?: ProcessoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Processos to fetch.
     */
    orderBy?: ProcessoOrderByWithRelationInput | ProcessoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Processos.
     */
    cursor?: ProcessoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Processos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Processos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Processos.
     */
    distinct?: ProcessoScalarFieldEnum | ProcessoScalarFieldEnum[]
  }

  /**
   * Processo findMany
   */
  export type ProcessoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessoInclude<ExtArgs> | null
    /**
     * Filter, which Processos to fetch.
     */
    where?: ProcessoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Processos to fetch.
     */
    orderBy?: ProcessoOrderByWithRelationInput | ProcessoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Processos.
     */
    cursor?: ProcessoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Processos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Processos.
     */
    skip?: number
    distinct?: ProcessoScalarFieldEnum | ProcessoScalarFieldEnum[]
  }

  /**
   * Processo create
   */
  export type ProcessoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessoInclude<ExtArgs> | null
    /**
     * The data needed to create a Processo.
     */
    data: XOR<ProcessoCreateInput, ProcessoUncheckedCreateInput>
  }

  /**
   * Processo createMany
   */
  export type ProcessoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Processos.
     */
    data: ProcessoCreateManyInput | ProcessoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Processo createManyAndReturn
   */
  export type ProcessoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * The data used to create many Processos.
     */
    data: ProcessoCreateManyInput | ProcessoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Processo update
   */
  export type ProcessoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessoInclude<ExtArgs> | null
    /**
     * The data needed to update a Processo.
     */
    data: XOR<ProcessoUpdateInput, ProcessoUncheckedUpdateInput>
    /**
     * Choose, which Processo to update.
     */
    where: ProcessoWhereUniqueInput
  }

  /**
   * Processo updateMany
   */
  export type ProcessoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Processos.
     */
    data: XOR<ProcessoUpdateManyMutationInput, ProcessoUncheckedUpdateManyInput>
    /**
     * Filter which Processos to update
     */
    where?: ProcessoWhereInput
    /**
     * Limit how many Processos to update.
     */
    limit?: number
  }

  /**
   * Processo updateManyAndReturn
   */
  export type ProcessoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * The data used to update Processos.
     */
    data: XOR<ProcessoUpdateManyMutationInput, ProcessoUncheckedUpdateManyInput>
    /**
     * Filter which Processos to update
     */
    where?: ProcessoWhereInput
    /**
     * Limit how many Processos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Processo upsert
   */
  export type ProcessoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessoInclude<ExtArgs> | null
    /**
     * The filter to search for the Processo to update in case it exists.
     */
    where: ProcessoWhereUniqueInput
    /**
     * In case the Processo found by the `where` argument doesn't exist, create a new Processo with this data.
     */
    create: XOR<ProcessoCreateInput, ProcessoUncheckedCreateInput>
    /**
     * In case the Processo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProcessoUpdateInput, ProcessoUncheckedUpdateInput>
  }

  /**
   * Processo delete
   */
  export type ProcessoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessoInclude<ExtArgs> | null
    /**
     * Filter which Processo to delete.
     */
    where: ProcessoWhereUniqueInput
  }

  /**
   * Processo deleteMany
   */
  export type ProcessoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Processos to delete
     */
    where?: ProcessoWhereInput
    /**
     * Limit how many Processos to delete.
     */
    limit?: number
  }

  /**
   * Processo without action
   */
  export type ProcessoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessoInclude<ExtArgs> | null
  }


  /**
   * Model FormularioPreenchido
   */

  export type AggregateFormularioPreenchido = {
    _count: FormularioPreenchidoCountAggregateOutputType | null
    _min: FormularioPreenchidoMinAggregateOutputType | null
    _max: FormularioPreenchidoMaxAggregateOutputType | null
  }

  export type FormularioPreenchidoMinAggregateOutputType = {
    id: string | null
    tipoFormulario: $Enums.TipoFormulario | null
    dataCriacao: Date | null
    atendimentoId: string | null
  }

  export type FormularioPreenchidoMaxAggregateOutputType = {
    id: string | null
    tipoFormulario: $Enums.TipoFormulario | null
    dataCriacao: Date | null
    atendimentoId: string | null
  }

  export type FormularioPreenchidoCountAggregateOutputType = {
    id: number
    tipoFormulario: number
    dadosFormulario: number
    dataCriacao: number
    atendimentoId: number
    _all: number
  }


  export type FormularioPreenchidoMinAggregateInputType = {
    id?: true
    tipoFormulario?: true
    dataCriacao?: true
    atendimentoId?: true
  }

  export type FormularioPreenchidoMaxAggregateInputType = {
    id?: true
    tipoFormulario?: true
    dataCriacao?: true
    atendimentoId?: true
  }

  export type FormularioPreenchidoCountAggregateInputType = {
    id?: true
    tipoFormulario?: true
    dadosFormulario?: true
    dataCriacao?: true
    atendimentoId?: true
    _all?: true
  }

  export type FormularioPreenchidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormularioPreenchido to aggregate.
     */
    where?: FormularioPreenchidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormularioPreenchidos to fetch.
     */
    orderBy?: FormularioPreenchidoOrderByWithRelationInput | FormularioPreenchidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormularioPreenchidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormularioPreenchidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormularioPreenchidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormularioPreenchidos
    **/
    _count?: true | FormularioPreenchidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormularioPreenchidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormularioPreenchidoMaxAggregateInputType
  }

  export type GetFormularioPreenchidoAggregateType<T extends FormularioPreenchidoAggregateArgs> = {
        [P in keyof T & keyof AggregateFormularioPreenchido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormularioPreenchido[P]>
      : GetScalarType<T[P], AggregateFormularioPreenchido[P]>
  }




  export type FormularioPreenchidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormularioPreenchidoWhereInput
    orderBy?: FormularioPreenchidoOrderByWithAggregationInput | FormularioPreenchidoOrderByWithAggregationInput[]
    by: FormularioPreenchidoScalarFieldEnum[] | FormularioPreenchidoScalarFieldEnum
    having?: FormularioPreenchidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormularioPreenchidoCountAggregateInputType | true
    _min?: FormularioPreenchidoMinAggregateInputType
    _max?: FormularioPreenchidoMaxAggregateInputType
  }

  export type FormularioPreenchidoGroupByOutputType = {
    id: string
    tipoFormulario: $Enums.TipoFormulario
    dadosFormulario: JsonValue
    dataCriacao: Date
    atendimentoId: string
    _count: FormularioPreenchidoCountAggregateOutputType | null
    _min: FormularioPreenchidoMinAggregateOutputType | null
    _max: FormularioPreenchidoMaxAggregateOutputType | null
  }

  type GetFormularioPreenchidoGroupByPayload<T extends FormularioPreenchidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormularioPreenchidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormularioPreenchidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormularioPreenchidoGroupByOutputType[P]>
            : GetScalarType<T[P], FormularioPreenchidoGroupByOutputType[P]>
        }
      >
    >


  export type FormularioPreenchidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipoFormulario?: boolean
    dadosFormulario?: boolean
    dataCriacao?: boolean
    atendimentoId?: boolean
    atendimento?: boolean | AtendimentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formularioPreenchido"]>

  export type FormularioPreenchidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipoFormulario?: boolean
    dadosFormulario?: boolean
    dataCriacao?: boolean
    atendimentoId?: boolean
    atendimento?: boolean | AtendimentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formularioPreenchido"]>

  export type FormularioPreenchidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipoFormulario?: boolean
    dadosFormulario?: boolean
    dataCriacao?: boolean
    atendimentoId?: boolean
    atendimento?: boolean | AtendimentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formularioPreenchido"]>

  export type FormularioPreenchidoSelectScalar = {
    id?: boolean
    tipoFormulario?: boolean
    dadosFormulario?: boolean
    dataCriacao?: boolean
    atendimentoId?: boolean
  }

  export type FormularioPreenchidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipoFormulario" | "dadosFormulario" | "dataCriacao" | "atendimentoId", ExtArgs["result"]["formularioPreenchido"]>
  export type FormularioPreenchidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atendimento?: boolean | AtendimentoDefaultArgs<ExtArgs>
  }
  export type FormularioPreenchidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atendimento?: boolean | AtendimentoDefaultArgs<ExtArgs>
  }
  export type FormularioPreenchidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atendimento?: boolean | AtendimentoDefaultArgs<ExtArgs>
  }

  export type $FormularioPreenchidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FormularioPreenchido"
    objects: {
      atendimento: Prisma.$AtendimentoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tipoFormulario: $Enums.TipoFormulario
      dadosFormulario: Prisma.JsonValue
      dataCriacao: Date
      atendimentoId: string
    }, ExtArgs["result"]["formularioPreenchido"]>
    composites: {}
  }

  type FormularioPreenchidoGetPayload<S extends boolean | null | undefined | FormularioPreenchidoDefaultArgs> = $Result.GetResult<Prisma.$FormularioPreenchidoPayload, S>

  type FormularioPreenchidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormularioPreenchidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormularioPreenchidoCountAggregateInputType | true
    }

  export interface FormularioPreenchidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FormularioPreenchido'], meta: { name: 'FormularioPreenchido' } }
    /**
     * Find zero or one FormularioPreenchido that matches the filter.
     * @param {FormularioPreenchidoFindUniqueArgs} args - Arguments to find a FormularioPreenchido
     * @example
     * // Get one FormularioPreenchido
     * const formularioPreenchido = await prisma.formularioPreenchido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormularioPreenchidoFindUniqueArgs>(args: SelectSubset<T, FormularioPreenchidoFindUniqueArgs<ExtArgs>>): Prisma__FormularioPreenchidoClient<$Result.GetResult<Prisma.$FormularioPreenchidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FormularioPreenchido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormularioPreenchidoFindUniqueOrThrowArgs} args - Arguments to find a FormularioPreenchido
     * @example
     * // Get one FormularioPreenchido
     * const formularioPreenchido = await prisma.formularioPreenchido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormularioPreenchidoFindUniqueOrThrowArgs>(args: SelectSubset<T, FormularioPreenchidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormularioPreenchidoClient<$Result.GetResult<Prisma.$FormularioPreenchidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormularioPreenchido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormularioPreenchidoFindFirstArgs} args - Arguments to find a FormularioPreenchido
     * @example
     * // Get one FormularioPreenchido
     * const formularioPreenchido = await prisma.formularioPreenchido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormularioPreenchidoFindFirstArgs>(args?: SelectSubset<T, FormularioPreenchidoFindFirstArgs<ExtArgs>>): Prisma__FormularioPreenchidoClient<$Result.GetResult<Prisma.$FormularioPreenchidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormularioPreenchido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormularioPreenchidoFindFirstOrThrowArgs} args - Arguments to find a FormularioPreenchido
     * @example
     * // Get one FormularioPreenchido
     * const formularioPreenchido = await prisma.formularioPreenchido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormularioPreenchidoFindFirstOrThrowArgs>(args?: SelectSubset<T, FormularioPreenchidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormularioPreenchidoClient<$Result.GetResult<Prisma.$FormularioPreenchidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FormularioPreenchidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormularioPreenchidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormularioPreenchidos
     * const formularioPreenchidos = await prisma.formularioPreenchido.findMany()
     * 
     * // Get first 10 FormularioPreenchidos
     * const formularioPreenchidos = await prisma.formularioPreenchido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formularioPreenchidoWithIdOnly = await prisma.formularioPreenchido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormularioPreenchidoFindManyArgs>(args?: SelectSubset<T, FormularioPreenchidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormularioPreenchidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FormularioPreenchido.
     * @param {FormularioPreenchidoCreateArgs} args - Arguments to create a FormularioPreenchido.
     * @example
     * // Create one FormularioPreenchido
     * const FormularioPreenchido = await prisma.formularioPreenchido.create({
     *   data: {
     *     // ... data to create a FormularioPreenchido
     *   }
     * })
     * 
     */
    create<T extends FormularioPreenchidoCreateArgs>(args: SelectSubset<T, FormularioPreenchidoCreateArgs<ExtArgs>>): Prisma__FormularioPreenchidoClient<$Result.GetResult<Prisma.$FormularioPreenchidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FormularioPreenchidos.
     * @param {FormularioPreenchidoCreateManyArgs} args - Arguments to create many FormularioPreenchidos.
     * @example
     * // Create many FormularioPreenchidos
     * const formularioPreenchido = await prisma.formularioPreenchido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormularioPreenchidoCreateManyArgs>(args?: SelectSubset<T, FormularioPreenchidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FormularioPreenchidos and returns the data saved in the database.
     * @param {FormularioPreenchidoCreateManyAndReturnArgs} args - Arguments to create many FormularioPreenchidos.
     * @example
     * // Create many FormularioPreenchidos
     * const formularioPreenchido = await prisma.formularioPreenchido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FormularioPreenchidos and only return the `id`
     * const formularioPreenchidoWithIdOnly = await prisma.formularioPreenchido.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormularioPreenchidoCreateManyAndReturnArgs>(args?: SelectSubset<T, FormularioPreenchidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormularioPreenchidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FormularioPreenchido.
     * @param {FormularioPreenchidoDeleteArgs} args - Arguments to delete one FormularioPreenchido.
     * @example
     * // Delete one FormularioPreenchido
     * const FormularioPreenchido = await prisma.formularioPreenchido.delete({
     *   where: {
     *     // ... filter to delete one FormularioPreenchido
     *   }
     * })
     * 
     */
    delete<T extends FormularioPreenchidoDeleteArgs>(args: SelectSubset<T, FormularioPreenchidoDeleteArgs<ExtArgs>>): Prisma__FormularioPreenchidoClient<$Result.GetResult<Prisma.$FormularioPreenchidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FormularioPreenchido.
     * @param {FormularioPreenchidoUpdateArgs} args - Arguments to update one FormularioPreenchido.
     * @example
     * // Update one FormularioPreenchido
     * const formularioPreenchido = await prisma.formularioPreenchido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormularioPreenchidoUpdateArgs>(args: SelectSubset<T, FormularioPreenchidoUpdateArgs<ExtArgs>>): Prisma__FormularioPreenchidoClient<$Result.GetResult<Prisma.$FormularioPreenchidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FormularioPreenchidos.
     * @param {FormularioPreenchidoDeleteManyArgs} args - Arguments to filter FormularioPreenchidos to delete.
     * @example
     * // Delete a few FormularioPreenchidos
     * const { count } = await prisma.formularioPreenchido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormularioPreenchidoDeleteManyArgs>(args?: SelectSubset<T, FormularioPreenchidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormularioPreenchidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormularioPreenchidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormularioPreenchidos
     * const formularioPreenchido = await prisma.formularioPreenchido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormularioPreenchidoUpdateManyArgs>(args: SelectSubset<T, FormularioPreenchidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormularioPreenchidos and returns the data updated in the database.
     * @param {FormularioPreenchidoUpdateManyAndReturnArgs} args - Arguments to update many FormularioPreenchidos.
     * @example
     * // Update many FormularioPreenchidos
     * const formularioPreenchido = await prisma.formularioPreenchido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FormularioPreenchidos and only return the `id`
     * const formularioPreenchidoWithIdOnly = await prisma.formularioPreenchido.updateManyAndReturn({
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
    updateManyAndReturn<T extends FormularioPreenchidoUpdateManyAndReturnArgs>(args: SelectSubset<T, FormularioPreenchidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormularioPreenchidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FormularioPreenchido.
     * @param {FormularioPreenchidoUpsertArgs} args - Arguments to update or create a FormularioPreenchido.
     * @example
     * // Update or create a FormularioPreenchido
     * const formularioPreenchido = await prisma.formularioPreenchido.upsert({
     *   create: {
     *     // ... data to create a FormularioPreenchido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormularioPreenchido we want to update
     *   }
     * })
     */
    upsert<T extends FormularioPreenchidoUpsertArgs>(args: SelectSubset<T, FormularioPreenchidoUpsertArgs<ExtArgs>>): Prisma__FormularioPreenchidoClient<$Result.GetResult<Prisma.$FormularioPreenchidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FormularioPreenchidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormularioPreenchidoCountArgs} args - Arguments to filter FormularioPreenchidos to count.
     * @example
     * // Count the number of FormularioPreenchidos
     * const count = await prisma.formularioPreenchido.count({
     *   where: {
     *     // ... the filter for the FormularioPreenchidos we want to count
     *   }
     * })
    **/
    count<T extends FormularioPreenchidoCountArgs>(
      args?: Subset<T, FormularioPreenchidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormularioPreenchidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormularioPreenchido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormularioPreenchidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FormularioPreenchidoAggregateArgs>(args: Subset<T, FormularioPreenchidoAggregateArgs>): Prisma.PrismaPromise<GetFormularioPreenchidoAggregateType<T>>

    /**
     * Group by FormularioPreenchido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormularioPreenchidoGroupByArgs} args - Group by arguments.
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
      T extends FormularioPreenchidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormularioPreenchidoGroupByArgs['orderBy'] }
        : { orderBy?: FormularioPreenchidoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FormularioPreenchidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormularioPreenchidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FormularioPreenchido model
   */
  readonly fields: FormularioPreenchidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormularioPreenchido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormularioPreenchidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    atendimento<T extends AtendimentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AtendimentoDefaultArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FormularioPreenchido model
   */
  interface FormularioPreenchidoFieldRefs {
    readonly id: FieldRef<"FormularioPreenchido", 'String'>
    readonly tipoFormulario: FieldRef<"FormularioPreenchido", 'TipoFormulario'>
    readonly dadosFormulario: FieldRef<"FormularioPreenchido", 'Json'>
    readonly dataCriacao: FieldRef<"FormularioPreenchido", 'DateTime'>
    readonly atendimentoId: FieldRef<"FormularioPreenchido", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FormularioPreenchido findUnique
   */
  export type FormularioPreenchidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormularioPreenchido
     */
    select?: FormularioPreenchidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormularioPreenchido
     */
    omit?: FormularioPreenchidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormularioPreenchidoInclude<ExtArgs> | null
    /**
     * Filter, which FormularioPreenchido to fetch.
     */
    where: FormularioPreenchidoWhereUniqueInput
  }

  /**
   * FormularioPreenchido findUniqueOrThrow
   */
  export type FormularioPreenchidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormularioPreenchido
     */
    select?: FormularioPreenchidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormularioPreenchido
     */
    omit?: FormularioPreenchidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormularioPreenchidoInclude<ExtArgs> | null
    /**
     * Filter, which FormularioPreenchido to fetch.
     */
    where: FormularioPreenchidoWhereUniqueInput
  }

  /**
   * FormularioPreenchido findFirst
   */
  export type FormularioPreenchidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormularioPreenchido
     */
    select?: FormularioPreenchidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormularioPreenchido
     */
    omit?: FormularioPreenchidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormularioPreenchidoInclude<ExtArgs> | null
    /**
     * Filter, which FormularioPreenchido to fetch.
     */
    where?: FormularioPreenchidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormularioPreenchidos to fetch.
     */
    orderBy?: FormularioPreenchidoOrderByWithRelationInput | FormularioPreenchidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormularioPreenchidos.
     */
    cursor?: FormularioPreenchidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormularioPreenchidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormularioPreenchidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormularioPreenchidos.
     */
    distinct?: FormularioPreenchidoScalarFieldEnum | FormularioPreenchidoScalarFieldEnum[]
  }

  /**
   * FormularioPreenchido findFirstOrThrow
   */
  export type FormularioPreenchidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormularioPreenchido
     */
    select?: FormularioPreenchidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormularioPreenchido
     */
    omit?: FormularioPreenchidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormularioPreenchidoInclude<ExtArgs> | null
    /**
     * Filter, which FormularioPreenchido to fetch.
     */
    where?: FormularioPreenchidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormularioPreenchidos to fetch.
     */
    orderBy?: FormularioPreenchidoOrderByWithRelationInput | FormularioPreenchidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormularioPreenchidos.
     */
    cursor?: FormularioPreenchidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormularioPreenchidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormularioPreenchidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormularioPreenchidos.
     */
    distinct?: FormularioPreenchidoScalarFieldEnum | FormularioPreenchidoScalarFieldEnum[]
  }

  /**
   * FormularioPreenchido findMany
   */
  export type FormularioPreenchidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormularioPreenchido
     */
    select?: FormularioPreenchidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormularioPreenchido
     */
    omit?: FormularioPreenchidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormularioPreenchidoInclude<ExtArgs> | null
    /**
     * Filter, which FormularioPreenchidos to fetch.
     */
    where?: FormularioPreenchidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormularioPreenchidos to fetch.
     */
    orderBy?: FormularioPreenchidoOrderByWithRelationInput | FormularioPreenchidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormularioPreenchidos.
     */
    cursor?: FormularioPreenchidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormularioPreenchidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormularioPreenchidos.
     */
    skip?: number
    distinct?: FormularioPreenchidoScalarFieldEnum | FormularioPreenchidoScalarFieldEnum[]
  }

  /**
   * FormularioPreenchido create
   */
  export type FormularioPreenchidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormularioPreenchido
     */
    select?: FormularioPreenchidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormularioPreenchido
     */
    omit?: FormularioPreenchidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormularioPreenchidoInclude<ExtArgs> | null
    /**
     * The data needed to create a FormularioPreenchido.
     */
    data: XOR<FormularioPreenchidoCreateInput, FormularioPreenchidoUncheckedCreateInput>
  }

  /**
   * FormularioPreenchido createMany
   */
  export type FormularioPreenchidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FormularioPreenchidos.
     */
    data: FormularioPreenchidoCreateManyInput | FormularioPreenchidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormularioPreenchido createManyAndReturn
   */
  export type FormularioPreenchidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormularioPreenchido
     */
    select?: FormularioPreenchidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormularioPreenchido
     */
    omit?: FormularioPreenchidoOmit<ExtArgs> | null
    /**
     * The data used to create many FormularioPreenchidos.
     */
    data: FormularioPreenchidoCreateManyInput | FormularioPreenchidoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormularioPreenchidoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FormularioPreenchido update
   */
  export type FormularioPreenchidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormularioPreenchido
     */
    select?: FormularioPreenchidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormularioPreenchido
     */
    omit?: FormularioPreenchidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormularioPreenchidoInclude<ExtArgs> | null
    /**
     * The data needed to update a FormularioPreenchido.
     */
    data: XOR<FormularioPreenchidoUpdateInput, FormularioPreenchidoUncheckedUpdateInput>
    /**
     * Choose, which FormularioPreenchido to update.
     */
    where: FormularioPreenchidoWhereUniqueInput
  }

  /**
   * FormularioPreenchido updateMany
   */
  export type FormularioPreenchidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FormularioPreenchidos.
     */
    data: XOR<FormularioPreenchidoUpdateManyMutationInput, FormularioPreenchidoUncheckedUpdateManyInput>
    /**
     * Filter which FormularioPreenchidos to update
     */
    where?: FormularioPreenchidoWhereInput
    /**
     * Limit how many FormularioPreenchidos to update.
     */
    limit?: number
  }

  /**
   * FormularioPreenchido updateManyAndReturn
   */
  export type FormularioPreenchidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormularioPreenchido
     */
    select?: FormularioPreenchidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormularioPreenchido
     */
    omit?: FormularioPreenchidoOmit<ExtArgs> | null
    /**
     * The data used to update FormularioPreenchidos.
     */
    data: XOR<FormularioPreenchidoUpdateManyMutationInput, FormularioPreenchidoUncheckedUpdateManyInput>
    /**
     * Filter which FormularioPreenchidos to update
     */
    where?: FormularioPreenchidoWhereInput
    /**
     * Limit how many FormularioPreenchidos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormularioPreenchidoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FormularioPreenchido upsert
   */
  export type FormularioPreenchidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormularioPreenchido
     */
    select?: FormularioPreenchidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormularioPreenchido
     */
    omit?: FormularioPreenchidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormularioPreenchidoInclude<ExtArgs> | null
    /**
     * The filter to search for the FormularioPreenchido to update in case it exists.
     */
    where: FormularioPreenchidoWhereUniqueInput
    /**
     * In case the FormularioPreenchido found by the `where` argument doesn't exist, create a new FormularioPreenchido with this data.
     */
    create: XOR<FormularioPreenchidoCreateInput, FormularioPreenchidoUncheckedCreateInput>
    /**
     * In case the FormularioPreenchido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormularioPreenchidoUpdateInput, FormularioPreenchidoUncheckedUpdateInput>
  }

  /**
   * FormularioPreenchido delete
   */
  export type FormularioPreenchidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormularioPreenchido
     */
    select?: FormularioPreenchidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormularioPreenchido
     */
    omit?: FormularioPreenchidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormularioPreenchidoInclude<ExtArgs> | null
    /**
     * Filter which FormularioPreenchido to delete.
     */
    where: FormularioPreenchidoWhereUniqueInput
  }

  /**
   * FormularioPreenchido deleteMany
   */
  export type FormularioPreenchidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormularioPreenchidos to delete
     */
    where?: FormularioPreenchidoWhereInput
    /**
     * Limit how many FormularioPreenchidos to delete.
     */
    limit?: number
  }

  /**
   * FormularioPreenchido without action
   */
  export type FormularioPreenchidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormularioPreenchido
     */
    select?: FormularioPreenchidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormularioPreenchido
     */
    omit?: FormularioPreenchidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormularioPreenchidoInclude<ExtArgs> | null
  }


  /**
   * Model Documento
   */

  export type AggregateDocumento = {
    _count: DocumentoCountAggregateOutputType | null
    _avg: DocumentoAvgAggregateOutputType | null
    _sum: DocumentoSumAggregateOutputType | null
    _min: DocumentoMinAggregateOutputType | null
    _max: DocumentoMaxAggregateOutputType | null
  }

  export type DocumentoAvgAggregateOutputType = {
    tamanho: number | null
  }

  export type DocumentoSumAggregateOutputType = {
    tamanho: number | null
  }

  export type DocumentoMinAggregateOutputType = {
    id: string | null
    nomeOriginal: string | null
    nomeArmazenamento: string | null
    tipo: string | null
    tamanho: number | null
    caminho: string | null
    tipoDocumento: $Enums.TipoDocumento | null
    dataCriacao: Date | null
    atendimentoId: string | null
    operadorUploadId: string | null
  }

  export type DocumentoMaxAggregateOutputType = {
    id: string | null
    nomeOriginal: string | null
    nomeArmazenamento: string | null
    tipo: string | null
    tamanho: number | null
    caminho: string | null
    tipoDocumento: $Enums.TipoDocumento | null
    dataCriacao: Date | null
    atendimentoId: string | null
    operadorUploadId: string | null
  }

  export type DocumentoCountAggregateOutputType = {
    id: number
    nomeOriginal: number
    nomeArmazenamento: number
    tipo: number
    tamanho: number
    caminho: number
    tipoDocumento: number
    dataCriacao: number
    atendimentoId: number
    operadorUploadId: number
    _all: number
  }


  export type DocumentoAvgAggregateInputType = {
    tamanho?: true
  }

  export type DocumentoSumAggregateInputType = {
    tamanho?: true
  }

  export type DocumentoMinAggregateInputType = {
    id?: true
    nomeOriginal?: true
    nomeArmazenamento?: true
    tipo?: true
    tamanho?: true
    caminho?: true
    tipoDocumento?: true
    dataCriacao?: true
    atendimentoId?: true
    operadorUploadId?: true
  }

  export type DocumentoMaxAggregateInputType = {
    id?: true
    nomeOriginal?: true
    nomeArmazenamento?: true
    tipo?: true
    tamanho?: true
    caminho?: true
    tipoDocumento?: true
    dataCriacao?: true
    atendimentoId?: true
    operadorUploadId?: true
  }

  export type DocumentoCountAggregateInputType = {
    id?: true
    nomeOriginal?: true
    nomeArmazenamento?: true
    tipo?: true
    tamanho?: true
    caminho?: true
    tipoDocumento?: true
    dataCriacao?: true
    atendimentoId?: true
    operadorUploadId?: true
    _all?: true
  }

  export type DocumentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documento to aggregate.
     */
    where?: DocumentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documentos to fetch.
     */
    orderBy?: DocumentoOrderByWithRelationInput | DocumentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documentos
    **/
    _count?: true | DocumentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentoMaxAggregateInputType
  }

  export type GetDocumentoAggregateType<T extends DocumentoAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumento[P]>
      : GetScalarType<T[P], AggregateDocumento[P]>
  }




  export type DocumentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentoWhereInput
    orderBy?: DocumentoOrderByWithAggregationInput | DocumentoOrderByWithAggregationInput[]
    by: DocumentoScalarFieldEnum[] | DocumentoScalarFieldEnum
    having?: DocumentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentoCountAggregateInputType | true
    _avg?: DocumentoAvgAggregateInputType
    _sum?: DocumentoSumAggregateInputType
    _min?: DocumentoMinAggregateInputType
    _max?: DocumentoMaxAggregateInputType
  }

  export type DocumentoGroupByOutputType = {
    id: string
    nomeOriginal: string
    nomeArmazenamento: string
    tipo: string
    tamanho: number
    caminho: string
    tipoDocumento: $Enums.TipoDocumento
    dataCriacao: Date
    atendimentoId: string
    operadorUploadId: string
    _count: DocumentoCountAggregateOutputType | null
    _avg: DocumentoAvgAggregateOutputType | null
    _sum: DocumentoSumAggregateOutputType | null
    _min: DocumentoMinAggregateOutputType | null
    _max: DocumentoMaxAggregateOutputType | null
  }

  type GetDocumentoGroupByPayload<T extends DocumentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentoGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentoGroupByOutputType[P]>
        }
      >
    >


  export type DocumentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeOriginal?: boolean
    nomeArmazenamento?: boolean
    tipo?: boolean
    tamanho?: boolean
    caminho?: boolean
    tipoDocumento?: boolean
    dataCriacao?: boolean
    atendimentoId?: boolean
    operadorUploadId?: boolean
    atendimento?: boolean | AtendimentoDefaultArgs<ExtArgs>
    operadorUpload?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documento"]>

  export type DocumentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeOriginal?: boolean
    nomeArmazenamento?: boolean
    tipo?: boolean
    tamanho?: boolean
    caminho?: boolean
    tipoDocumento?: boolean
    dataCriacao?: boolean
    atendimentoId?: boolean
    operadorUploadId?: boolean
    atendimento?: boolean | AtendimentoDefaultArgs<ExtArgs>
    operadorUpload?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documento"]>

  export type DocumentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeOriginal?: boolean
    nomeArmazenamento?: boolean
    tipo?: boolean
    tamanho?: boolean
    caminho?: boolean
    tipoDocumento?: boolean
    dataCriacao?: boolean
    atendimentoId?: boolean
    operadorUploadId?: boolean
    atendimento?: boolean | AtendimentoDefaultArgs<ExtArgs>
    operadorUpload?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documento"]>

  export type DocumentoSelectScalar = {
    id?: boolean
    nomeOriginal?: boolean
    nomeArmazenamento?: boolean
    tipo?: boolean
    tamanho?: boolean
    caminho?: boolean
    tipoDocumento?: boolean
    dataCriacao?: boolean
    atendimentoId?: boolean
    operadorUploadId?: boolean
  }

  export type DocumentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomeOriginal" | "nomeArmazenamento" | "tipo" | "tamanho" | "caminho" | "tipoDocumento" | "dataCriacao" | "atendimentoId" | "operadorUploadId", ExtArgs["result"]["documento"]>
  export type DocumentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atendimento?: boolean | AtendimentoDefaultArgs<ExtArgs>
    operadorUpload?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DocumentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atendimento?: boolean | AtendimentoDefaultArgs<ExtArgs>
    operadorUpload?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DocumentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atendimento?: boolean | AtendimentoDefaultArgs<ExtArgs>
    operadorUpload?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DocumentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Documento"
    objects: {
      atendimento: Prisma.$AtendimentoPayload<ExtArgs>
      operadorUpload: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nomeOriginal: string
      nomeArmazenamento: string
      tipo: string
      tamanho: number
      caminho: string
      tipoDocumento: $Enums.TipoDocumento
      dataCriacao: Date
      atendimentoId: string
      operadorUploadId: string
    }, ExtArgs["result"]["documento"]>
    composites: {}
  }

  type DocumentoGetPayload<S extends boolean | null | undefined | DocumentoDefaultArgs> = $Result.GetResult<Prisma.$DocumentoPayload, S>

  type DocumentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentoCountAggregateInputType | true
    }

  export interface DocumentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Documento'], meta: { name: 'Documento' } }
    /**
     * Find zero or one Documento that matches the filter.
     * @param {DocumentoFindUniqueArgs} args - Arguments to find a Documento
     * @example
     * // Get one Documento
     * const documento = await prisma.documento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentoFindUniqueArgs>(args: SelectSubset<T, DocumentoFindUniqueArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Documento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentoFindUniqueOrThrowArgs} args - Arguments to find a Documento
     * @example
     * // Get one Documento
     * const documento = await prisma.documento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentoFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoFindFirstArgs} args - Arguments to find a Documento
     * @example
     * // Get one Documento
     * const documento = await prisma.documento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentoFindFirstArgs>(args?: SelectSubset<T, DocumentoFindFirstArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoFindFirstOrThrowArgs} args - Arguments to find a Documento
     * @example
     * // Get one Documento
     * const documento = await prisma.documento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentoFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documentos
     * const documentos = await prisma.documento.findMany()
     * 
     * // Get first 10 Documentos
     * const documentos = await prisma.documento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentoWithIdOnly = await prisma.documento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentoFindManyArgs>(args?: SelectSubset<T, DocumentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Documento.
     * @param {DocumentoCreateArgs} args - Arguments to create a Documento.
     * @example
     * // Create one Documento
     * const Documento = await prisma.documento.create({
     *   data: {
     *     // ... data to create a Documento
     *   }
     * })
     * 
     */
    create<T extends DocumentoCreateArgs>(args: SelectSubset<T, DocumentoCreateArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documentos.
     * @param {DocumentoCreateManyArgs} args - Arguments to create many Documentos.
     * @example
     * // Create many Documentos
     * const documento = await prisma.documento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentoCreateManyArgs>(args?: SelectSubset<T, DocumentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documentos and returns the data saved in the database.
     * @param {DocumentoCreateManyAndReturnArgs} args - Arguments to create many Documentos.
     * @example
     * // Create many Documentos
     * const documento = await prisma.documento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documentos and only return the `id`
     * const documentoWithIdOnly = await prisma.documento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentoCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Documento.
     * @param {DocumentoDeleteArgs} args - Arguments to delete one Documento.
     * @example
     * // Delete one Documento
     * const Documento = await prisma.documento.delete({
     *   where: {
     *     // ... filter to delete one Documento
     *   }
     * })
     * 
     */
    delete<T extends DocumentoDeleteArgs>(args: SelectSubset<T, DocumentoDeleteArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Documento.
     * @param {DocumentoUpdateArgs} args - Arguments to update one Documento.
     * @example
     * // Update one Documento
     * const documento = await prisma.documento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentoUpdateArgs>(args: SelectSubset<T, DocumentoUpdateArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documentos.
     * @param {DocumentoDeleteManyArgs} args - Arguments to filter Documentos to delete.
     * @example
     * // Delete a few Documentos
     * const { count } = await prisma.documento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentoDeleteManyArgs>(args?: SelectSubset<T, DocumentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documentos
     * const documento = await prisma.documento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentoUpdateManyArgs>(args: SelectSubset<T, DocumentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documentos and returns the data updated in the database.
     * @param {DocumentoUpdateManyAndReturnArgs} args - Arguments to update many Documentos.
     * @example
     * // Update many Documentos
     * const documento = await prisma.documento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documentos and only return the `id`
     * const documentoWithIdOnly = await prisma.documento.updateManyAndReturn({
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
    updateManyAndReturn<T extends DocumentoUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Documento.
     * @param {DocumentoUpsertArgs} args - Arguments to update or create a Documento.
     * @example
     * // Update or create a Documento
     * const documento = await prisma.documento.upsert({
     *   create: {
     *     // ... data to create a Documento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Documento we want to update
     *   }
     * })
     */
    upsert<T extends DocumentoUpsertArgs>(args: SelectSubset<T, DocumentoUpsertArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoCountArgs} args - Arguments to filter Documentos to count.
     * @example
     * // Count the number of Documentos
     * const count = await prisma.documento.count({
     *   where: {
     *     // ... the filter for the Documentos we want to count
     *   }
     * })
    **/
    count<T extends DocumentoCountArgs>(
      args?: Subset<T, DocumentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Documento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentoAggregateArgs>(args: Subset<T, DocumentoAggregateArgs>): Prisma.PrismaPromise<GetDocumentoAggregateType<T>>

    /**
     * Group by Documento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoGroupByArgs} args - Group by arguments.
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
      T extends DocumentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentoGroupByArgs['orderBy'] }
        : { orderBy?: DocumentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Documento model
   */
  readonly fields: DocumentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Documento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    atendimento<T extends AtendimentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AtendimentoDefaultArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    operadorUpload<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Documento model
   */
  interface DocumentoFieldRefs {
    readonly id: FieldRef<"Documento", 'String'>
    readonly nomeOriginal: FieldRef<"Documento", 'String'>
    readonly nomeArmazenamento: FieldRef<"Documento", 'String'>
    readonly tipo: FieldRef<"Documento", 'String'>
    readonly tamanho: FieldRef<"Documento", 'Int'>
    readonly caminho: FieldRef<"Documento", 'String'>
    readonly tipoDocumento: FieldRef<"Documento", 'TipoDocumento'>
    readonly dataCriacao: FieldRef<"Documento", 'DateTime'>
    readonly atendimentoId: FieldRef<"Documento", 'String'>
    readonly operadorUploadId: FieldRef<"Documento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Documento findUnique
   */
  export type DocumentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * Filter, which Documento to fetch.
     */
    where: DocumentoWhereUniqueInput
  }

  /**
   * Documento findUniqueOrThrow
   */
  export type DocumentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * Filter, which Documento to fetch.
     */
    where: DocumentoWhereUniqueInput
  }

  /**
   * Documento findFirst
   */
  export type DocumentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * Filter, which Documento to fetch.
     */
    where?: DocumentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documentos to fetch.
     */
    orderBy?: DocumentoOrderByWithRelationInput | DocumentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documentos.
     */
    cursor?: DocumentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documentos.
     */
    distinct?: DocumentoScalarFieldEnum | DocumentoScalarFieldEnum[]
  }

  /**
   * Documento findFirstOrThrow
   */
  export type DocumentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * Filter, which Documento to fetch.
     */
    where?: DocumentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documentos to fetch.
     */
    orderBy?: DocumentoOrderByWithRelationInput | DocumentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documentos.
     */
    cursor?: DocumentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documentos.
     */
    distinct?: DocumentoScalarFieldEnum | DocumentoScalarFieldEnum[]
  }

  /**
   * Documento findMany
   */
  export type DocumentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * Filter, which Documentos to fetch.
     */
    where?: DocumentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documentos to fetch.
     */
    orderBy?: DocumentoOrderByWithRelationInput | DocumentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documentos.
     */
    cursor?: DocumentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documentos.
     */
    skip?: number
    distinct?: DocumentoScalarFieldEnum | DocumentoScalarFieldEnum[]
  }

  /**
   * Documento create
   */
  export type DocumentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Documento.
     */
    data: XOR<DocumentoCreateInput, DocumentoUncheckedCreateInput>
  }

  /**
   * Documento createMany
   */
  export type DocumentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documentos.
     */
    data: DocumentoCreateManyInput | DocumentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Documento createManyAndReturn
   */
  export type DocumentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * The data used to create many Documentos.
     */
    data: DocumentoCreateManyInput | DocumentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Documento update
   */
  export type DocumentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Documento.
     */
    data: XOR<DocumentoUpdateInput, DocumentoUncheckedUpdateInput>
    /**
     * Choose, which Documento to update.
     */
    where: DocumentoWhereUniqueInput
  }

  /**
   * Documento updateMany
   */
  export type DocumentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documentos.
     */
    data: XOR<DocumentoUpdateManyMutationInput, DocumentoUncheckedUpdateManyInput>
    /**
     * Filter which Documentos to update
     */
    where?: DocumentoWhereInput
    /**
     * Limit how many Documentos to update.
     */
    limit?: number
  }

  /**
   * Documento updateManyAndReturn
   */
  export type DocumentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * The data used to update Documentos.
     */
    data: XOR<DocumentoUpdateManyMutationInput, DocumentoUncheckedUpdateManyInput>
    /**
     * Filter which Documentos to update
     */
    where?: DocumentoWhereInput
    /**
     * Limit how many Documentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Documento upsert
   */
  export type DocumentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Documento to update in case it exists.
     */
    where: DocumentoWhereUniqueInput
    /**
     * In case the Documento found by the `where` argument doesn't exist, create a new Documento with this data.
     */
    create: XOR<DocumentoCreateInput, DocumentoUncheckedCreateInput>
    /**
     * In case the Documento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentoUpdateInput, DocumentoUncheckedUpdateInput>
  }

  /**
   * Documento delete
   */
  export type DocumentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * Filter which Documento to delete.
     */
    where: DocumentoWhereUniqueInput
  }

  /**
   * Documento deleteMany
   */
  export type DocumentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documentos to delete
     */
    where?: DocumentoWhereInput
    /**
     * Limit how many Documentos to delete.
     */
    limit?: number
  }

  /**
   * Documento without action
   */
  export type DocumentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    nome: 'nome',
    senha: 'senha',
    role: 'role',
    aprovado: 'aprovado',
    dataCadastro: 'dataCadastro'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FilaAtendimentoScalarFieldEnum: {
    id: 'id',
    nomeCompleto: 'nomeCompleto',
    nomeSocial: 'nomeSocial',
    cpf: 'cpf',
    telefone: 'telefone',
    isPrioridade: 'isPrioridade',
    status: 'status',
    dataEntrada: 'dataEntrada',
    dataInicio: 'dataInicio',
    dataFim: 'dataFim',
    operadorTriagemId: 'operadorTriagemId',
    operadorAtendimentoId: 'operadorAtendimentoId'
  };

  export type FilaAtendimentoScalarFieldEnum = (typeof FilaAtendimentoScalarFieldEnum)[keyof typeof FilaAtendimentoScalarFieldEnum]


  export const AtendimentoScalarFieldEnum: {
    id: 'id',
    nomeCompleto: 'nomeCompleto',
    nomeSocial: 'nomeSocial',
    cpf: 'cpf',
    dataNascimento: 'dataNascimento',
    telefone: 'telefone',
    email: 'email',
    tipoAtendimento: 'tipoAtendimento',
    capacidadeCivil: 'capacidadeCivil',
    estadoCivil: 'estadoCivil',
    profissao: 'profissao',
    tipoDomicilio: 'tipoDomicilio',
    descricaoDomicilio: 'descricaoDomicilio',
    membrosFamiliares: 'membrosFamiliares',
    rendaFamiliar: 'rendaFamiliar',
    tipoDemanda: 'tipoDemanda',
    descricaoAtendimento: 'descricaoAtendimento',
    observacoes: 'observacoes',
    formId: 'formId',
    formTipo: 'formTipo',
    dataCriacao: 'dataCriacao',
    status: 'status',
    logradouro: 'logradouro',
    numero: 'numero',
    complemento: 'complemento',
    bairro: 'bairro',
    cidade: 'cidade',
    estado: 'estado',
    cep: 'cep',
    operadorId: 'operadorId',
    filaId: 'filaId'
  };

  export type AtendimentoScalarFieldEnum = (typeof AtendimentoScalarFieldEnum)[keyof typeof AtendimentoScalarFieldEnum]


  export const ProcessoScalarFieldEnum: {
    id: 'id',
    numeroProcesso: 'numeroProcesso',
    resultado: 'resultado',
    resultadoDetalhado: 'resultadoDetalhado',
    valoresAtrasados: 'valoresAtrasados',
    beneficios: 'beneficios',
    dataAtualizacao: 'dataAtualizacao',
    atendimentoId: 'atendimentoId'
  };

  export type ProcessoScalarFieldEnum = (typeof ProcessoScalarFieldEnum)[keyof typeof ProcessoScalarFieldEnum]


  export const FormularioPreenchidoScalarFieldEnum: {
    id: 'id',
    tipoFormulario: 'tipoFormulario',
    dadosFormulario: 'dadosFormulario',
    dataCriacao: 'dataCriacao',
    atendimentoId: 'atendimentoId'
  };

  export type FormularioPreenchidoScalarFieldEnum = (typeof FormularioPreenchidoScalarFieldEnum)[keyof typeof FormularioPreenchidoScalarFieldEnum]


  export const DocumentoScalarFieldEnum: {
    id: 'id',
    nomeOriginal: 'nomeOriginal',
    nomeArmazenamento: 'nomeArmazenamento',
    tipo: 'tipo',
    tamanho: 'tamanho',
    caminho: 'caminho',
    tipoDocumento: 'tipoDocumento',
    dataCriacao: 'dataCriacao',
    atendimentoId: 'atendimentoId',
    operadorUploadId: 'operadorUploadId'
  };

  export type DocumentoScalarFieldEnum = (typeof DocumentoScalarFieldEnum)[keyof typeof DocumentoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'StatusFilaAtendimento'
   */
  export type EnumStatusFilaAtendimentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusFilaAtendimento'>
    


  /**
   * Reference to a field of type 'StatusFilaAtendimento[]'
   */
  export type ListEnumStatusFilaAtendimentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusFilaAtendimento[]'>
    


  /**
   * Reference to a field of type 'StatusAtendimento'
   */
  export type EnumStatusAtendimentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusAtendimento'>
    


  /**
   * Reference to a field of type 'StatusAtendimento[]'
   */
  export type ListEnumStatusAtendimentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusAtendimento[]'>
    


  /**
   * Reference to a field of type 'TipoFormulario'
   */
  export type EnumTipoFormularioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoFormulario'>
    


  /**
   * Reference to a field of type 'TipoFormulario[]'
   */
  export type ListEnumTipoFormularioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoFormulario[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TipoDocumento'
   */
  export type EnumTipoDocumentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoDocumento'>
    


  /**
   * Reference to a field of type 'TipoDocumento[]'
   */
  export type ListEnumTipoDocumentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoDocumento[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    nome?: StringFilter<"User"> | string
    senha?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    aprovado?: BoolFilter<"User"> | boolean
    dataCadastro?: DateTimeFilter<"User"> | Date | string
    atendimentosRealizados?: AtendimentoListRelationFilter
    atendimentosTriagem?: FilaAtendimentoListRelationFilter
    atendimentosEmAndamento?: FilaAtendimentoListRelationFilter
    documentosUploadOperador?: DocumentoListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    role?: SortOrder
    aprovado?: SortOrder
    dataCadastro?: SortOrder
    atendimentosRealizados?: AtendimentoOrderByRelationAggregateInput
    atendimentosTriagem?: FilaAtendimentoOrderByRelationAggregateInput
    atendimentosEmAndamento?: FilaAtendimentoOrderByRelationAggregateInput
    documentosUploadOperador?: DocumentoOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nome?: StringFilter<"User"> | string
    senha?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    aprovado?: BoolFilter<"User"> | boolean
    dataCadastro?: DateTimeFilter<"User"> | Date | string
    atendimentosRealizados?: AtendimentoListRelationFilter
    atendimentosTriagem?: FilaAtendimentoListRelationFilter
    atendimentosEmAndamento?: FilaAtendimentoListRelationFilter
    documentosUploadOperador?: DocumentoListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    role?: SortOrder
    aprovado?: SortOrder
    dataCadastro?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    nome?: StringWithAggregatesFilter<"User"> | string
    senha?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    aprovado?: BoolWithAggregatesFilter<"User"> | boolean
    dataCadastro?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FilaAtendimentoWhereInput = {
    AND?: FilaAtendimentoWhereInput | FilaAtendimentoWhereInput[]
    OR?: FilaAtendimentoWhereInput[]
    NOT?: FilaAtendimentoWhereInput | FilaAtendimentoWhereInput[]
    id?: StringFilter<"FilaAtendimento"> | string
    nomeCompleto?: StringFilter<"FilaAtendimento"> | string
    nomeSocial?: StringNullableFilter<"FilaAtendimento"> | string | null
    cpf?: StringFilter<"FilaAtendimento"> | string
    telefone?: StringFilter<"FilaAtendimento"> | string
    isPrioridade?: BoolFilter<"FilaAtendimento"> | boolean
    status?: EnumStatusFilaAtendimentoFilter<"FilaAtendimento"> | $Enums.StatusFilaAtendimento
    dataEntrada?: DateTimeFilter<"FilaAtendimento"> | Date | string
    dataInicio?: DateTimeNullableFilter<"FilaAtendimento"> | Date | string | null
    dataFim?: DateTimeNullableFilter<"FilaAtendimento"> | Date | string | null
    operadorTriagemId?: StringFilter<"FilaAtendimento"> | string
    operadorAtendimentoId?: StringNullableFilter<"FilaAtendimento"> | string | null
    operadorTriagem?: XOR<UserScalarRelationFilter, UserWhereInput>
    operadorAtendimento?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    atendimento?: XOR<AtendimentoNullableScalarRelationFilter, AtendimentoWhereInput> | null
  }

  export type FilaAtendimentoOrderByWithRelationInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    nomeSocial?: SortOrderInput | SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    isPrioridade?: SortOrder
    status?: SortOrder
    dataEntrada?: SortOrder
    dataInicio?: SortOrderInput | SortOrder
    dataFim?: SortOrderInput | SortOrder
    operadorTriagemId?: SortOrder
    operadorAtendimentoId?: SortOrderInput | SortOrder
    operadorTriagem?: UserOrderByWithRelationInput
    operadorAtendimento?: UserOrderByWithRelationInput
    atendimento?: AtendimentoOrderByWithRelationInput
  }

  export type FilaAtendimentoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FilaAtendimentoWhereInput | FilaAtendimentoWhereInput[]
    OR?: FilaAtendimentoWhereInput[]
    NOT?: FilaAtendimentoWhereInput | FilaAtendimentoWhereInput[]
    nomeCompleto?: StringFilter<"FilaAtendimento"> | string
    nomeSocial?: StringNullableFilter<"FilaAtendimento"> | string | null
    cpf?: StringFilter<"FilaAtendimento"> | string
    telefone?: StringFilter<"FilaAtendimento"> | string
    isPrioridade?: BoolFilter<"FilaAtendimento"> | boolean
    status?: EnumStatusFilaAtendimentoFilter<"FilaAtendimento"> | $Enums.StatusFilaAtendimento
    dataEntrada?: DateTimeFilter<"FilaAtendimento"> | Date | string
    dataInicio?: DateTimeNullableFilter<"FilaAtendimento"> | Date | string | null
    dataFim?: DateTimeNullableFilter<"FilaAtendimento"> | Date | string | null
    operadorTriagemId?: StringFilter<"FilaAtendimento"> | string
    operadorAtendimentoId?: StringNullableFilter<"FilaAtendimento"> | string | null
    operadorTriagem?: XOR<UserScalarRelationFilter, UserWhereInput>
    operadorAtendimento?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    atendimento?: XOR<AtendimentoNullableScalarRelationFilter, AtendimentoWhereInput> | null
  }, "id">

  export type FilaAtendimentoOrderByWithAggregationInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    nomeSocial?: SortOrderInput | SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    isPrioridade?: SortOrder
    status?: SortOrder
    dataEntrada?: SortOrder
    dataInicio?: SortOrderInput | SortOrder
    dataFim?: SortOrderInput | SortOrder
    operadorTriagemId?: SortOrder
    operadorAtendimentoId?: SortOrderInput | SortOrder
    _count?: FilaAtendimentoCountOrderByAggregateInput
    _max?: FilaAtendimentoMaxOrderByAggregateInput
    _min?: FilaAtendimentoMinOrderByAggregateInput
  }

  export type FilaAtendimentoScalarWhereWithAggregatesInput = {
    AND?: FilaAtendimentoScalarWhereWithAggregatesInput | FilaAtendimentoScalarWhereWithAggregatesInput[]
    OR?: FilaAtendimentoScalarWhereWithAggregatesInput[]
    NOT?: FilaAtendimentoScalarWhereWithAggregatesInput | FilaAtendimentoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FilaAtendimento"> | string
    nomeCompleto?: StringWithAggregatesFilter<"FilaAtendimento"> | string
    nomeSocial?: StringNullableWithAggregatesFilter<"FilaAtendimento"> | string | null
    cpf?: StringWithAggregatesFilter<"FilaAtendimento"> | string
    telefone?: StringWithAggregatesFilter<"FilaAtendimento"> | string
    isPrioridade?: BoolWithAggregatesFilter<"FilaAtendimento"> | boolean
    status?: EnumStatusFilaAtendimentoWithAggregatesFilter<"FilaAtendimento"> | $Enums.StatusFilaAtendimento
    dataEntrada?: DateTimeWithAggregatesFilter<"FilaAtendimento"> | Date | string
    dataInicio?: DateTimeNullableWithAggregatesFilter<"FilaAtendimento"> | Date | string | null
    dataFim?: DateTimeNullableWithAggregatesFilter<"FilaAtendimento"> | Date | string | null
    operadorTriagemId?: StringWithAggregatesFilter<"FilaAtendimento"> | string
    operadorAtendimentoId?: StringNullableWithAggregatesFilter<"FilaAtendimento"> | string | null
  }

  export type AtendimentoWhereInput = {
    AND?: AtendimentoWhereInput | AtendimentoWhereInput[]
    OR?: AtendimentoWhereInput[]
    NOT?: AtendimentoWhereInput | AtendimentoWhereInput[]
    id?: StringFilter<"Atendimento"> | string
    nomeCompleto?: StringFilter<"Atendimento"> | string
    nomeSocial?: StringNullableFilter<"Atendimento"> | string | null
    cpf?: StringFilter<"Atendimento"> | string
    dataNascimento?: StringFilter<"Atendimento"> | string
    telefone?: StringFilter<"Atendimento"> | string
    email?: StringNullableFilter<"Atendimento"> | string | null
    tipoAtendimento?: StringFilter<"Atendimento"> | string
    capacidadeCivil?: StringNullableFilter<"Atendimento"> | string | null
    estadoCivil?: StringNullableFilter<"Atendimento"> | string | null
    profissao?: StringNullableFilter<"Atendimento"> | string | null
    tipoDomicilio?: StringNullableFilter<"Atendimento"> | string | null
    descricaoDomicilio?: StringNullableFilter<"Atendimento"> | string | null
    membrosFamiliares?: StringNullableFilter<"Atendimento"> | string | null
    rendaFamiliar?: StringNullableFilter<"Atendimento"> | string | null
    tipoDemanda?: StringNullableFilter<"Atendimento"> | string | null
    descricaoAtendimento?: StringFilter<"Atendimento"> | string
    observacoes?: StringNullableFilter<"Atendimento"> | string | null
    formId?: StringFilter<"Atendimento"> | string
    formTipo?: StringFilter<"Atendimento"> | string
    dataCriacao?: DateTimeFilter<"Atendimento"> | Date | string
    status?: EnumStatusAtendimentoFilter<"Atendimento"> | $Enums.StatusAtendimento
    logradouro?: StringFilter<"Atendimento"> | string
    numero?: StringFilter<"Atendimento"> | string
    complemento?: StringNullableFilter<"Atendimento"> | string | null
    bairro?: StringFilter<"Atendimento"> | string
    cidade?: StringFilter<"Atendimento"> | string
    estado?: StringFilter<"Atendimento"> | string
    cep?: StringFilter<"Atendimento"> | string
    operadorId?: StringFilter<"Atendimento"> | string
    filaId?: StringNullableFilter<"Atendimento"> | string | null
    operador?: XOR<UserScalarRelationFilter, UserWhereInput>
    fila?: XOR<FilaAtendimentoNullableScalarRelationFilter, FilaAtendimentoWhereInput> | null
    processo?: XOR<ProcessoNullableScalarRelationFilter, ProcessoWhereInput> | null
    formularios?: FormularioPreenchidoListRelationFilter
    documentos?: DocumentoListRelationFilter
  }

  export type AtendimentoOrderByWithRelationInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    nomeSocial?: SortOrderInput | SortOrder
    cpf?: SortOrder
    dataNascimento?: SortOrder
    telefone?: SortOrder
    email?: SortOrderInput | SortOrder
    tipoAtendimento?: SortOrder
    capacidadeCivil?: SortOrderInput | SortOrder
    estadoCivil?: SortOrderInput | SortOrder
    profissao?: SortOrderInput | SortOrder
    tipoDomicilio?: SortOrderInput | SortOrder
    descricaoDomicilio?: SortOrderInput | SortOrder
    membrosFamiliares?: SortOrderInput | SortOrder
    rendaFamiliar?: SortOrderInput | SortOrder
    tipoDemanda?: SortOrderInput | SortOrder
    descricaoAtendimento?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    formId?: SortOrder
    formTipo?: SortOrder
    dataCriacao?: SortOrder
    status?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrderInput | SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    cep?: SortOrder
    operadorId?: SortOrder
    filaId?: SortOrderInput | SortOrder
    operador?: UserOrderByWithRelationInput
    fila?: FilaAtendimentoOrderByWithRelationInput
    processo?: ProcessoOrderByWithRelationInput
    formularios?: FormularioPreenchidoOrderByRelationAggregateInput
    documentos?: DocumentoOrderByRelationAggregateInput
  }

  export type AtendimentoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    filaId?: string
    AND?: AtendimentoWhereInput | AtendimentoWhereInput[]
    OR?: AtendimentoWhereInput[]
    NOT?: AtendimentoWhereInput | AtendimentoWhereInput[]
    nomeCompleto?: StringFilter<"Atendimento"> | string
    nomeSocial?: StringNullableFilter<"Atendimento"> | string | null
    cpf?: StringFilter<"Atendimento"> | string
    dataNascimento?: StringFilter<"Atendimento"> | string
    telefone?: StringFilter<"Atendimento"> | string
    email?: StringNullableFilter<"Atendimento"> | string | null
    tipoAtendimento?: StringFilter<"Atendimento"> | string
    capacidadeCivil?: StringNullableFilter<"Atendimento"> | string | null
    estadoCivil?: StringNullableFilter<"Atendimento"> | string | null
    profissao?: StringNullableFilter<"Atendimento"> | string | null
    tipoDomicilio?: StringNullableFilter<"Atendimento"> | string | null
    descricaoDomicilio?: StringNullableFilter<"Atendimento"> | string | null
    membrosFamiliares?: StringNullableFilter<"Atendimento"> | string | null
    rendaFamiliar?: StringNullableFilter<"Atendimento"> | string | null
    tipoDemanda?: StringNullableFilter<"Atendimento"> | string | null
    descricaoAtendimento?: StringFilter<"Atendimento"> | string
    observacoes?: StringNullableFilter<"Atendimento"> | string | null
    formId?: StringFilter<"Atendimento"> | string
    formTipo?: StringFilter<"Atendimento"> | string
    dataCriacao?: DateTimeFilter<"Atendimento"> | Date | string
    status?: EnumStatusAtendimentoFilter<"Atendimento"> | $Enums.StatusAtendimento
    logradouro?: StringFilter<"Atendimento"> | string
    numero?: StringFilter<"Atendimento"> | string
    complemento?: StringNullableFilter<"Atendimento"> | string | null
    bairro?: StringFilter<"Atendimento"> | string
    cidade?: StringFilter<"Atendimento"> | string
    estado?: StringFilter<"Atendimento"> | string
    cep?: StringFilter<"Atendimento"> | string
    operadorId?: StringFilter<"Atendimento"> | string
    operador?: XOR<UserScalarRelationFilter, UserWhereInput>
    fila?: XOR<FilaAtendimentoNullableScalarRelationFilter, FilaAtendimentoWhereInput> | null
    processo?: XOR<ProcessoNullableScalarRelationFilter, ProcessoWhereInput> | null
    formularios?: FormularioPreenchidoListRelationFilter
    documentos?: DocumentoListRelationFilter
  }, "id" | "filaId">

  export type AtendimentoOrderByWithAggregationInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    nomeSocial?: SortOrderInput | SortOrder
    cpf?: SortOrder
    dataNascimento?: SortOrder
    telefone?: SortOrder
    email?: SortOrderInput | SortOrder
    tipoAtendimento?: SortOrder
    capacidadeCivil?: SortOrderInput | SortOrder
    estadoCivil?: SortOrderInput | SortOrder
    profissao?: SortOrderInput | SortOrder
    tipoDomicilio?: SortOrderInput | SortOrder
    descricaoDomicilio?: SortOrderInput | SortOrder
    membrosFamiliares?: SortOrderInput | SortOrder
    rendaFamiliar?: SortOrderInput | SortOrder
    tipoDemanda?: SortOrderInput | SortOrder
    descricaoAtendimento?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    formId?: SortOrder
    formTipo?: SortOrder
    dataCriacao?: SortOrder
    status?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrderInput | SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    cep?: SortOrder
    operadorId?: SortOrder
    filaId?: SortOrderInput | SortOrder
    _count?: AtendimentoCountOrderByAggregateInput
    _max?: AtendimentoMaxOrderByAggregateInput
    _min?: AtendimentoMinOrderByAggregateInput
  }

  export type AtendimentoScalarWhereWithAggregatesInput = {
    AND?: AtendimentoScalarWhereWithAggregatesInput | AtendimentoScalarWhereWithAggregatesInput[]
    OR?: AtendimentoScalarWhereWithAggregatesInput[]
    NOT?: AtendimentoScalarWhereWithAggregatesInput | AtendimentoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Atendimento"> | string
    nomeCompleto?: StringWithAggregatesFilter<"Atendimento"> | string
    nomeSocial?: StringNullableWithAggregatesFilter<"Atendimento"> | string | null
    cpf?: StringWithAggregatesFilter<"Atendimento"> | string
    dataNascimento?: StringWithAggregatesFilter<"Atendimento"> | string
    telefone?: StringWithAggregatesFilter<"Atendimento"> | string
    email?: StringNullableWithAggregatesFilter<"Atendimento"> | string | null
    tipoAtendimento?: StringWithAggregatesFilter<"Atendimento"> | string
    capacidadeCivil?: StringNullableWithAggregatesFilter<"Atendimento"> | string | null
    estadoCivil?: StringNullableWithAggregatesFilter<"Atendimento"> | string | null
    profissao?: StringNullableWithAggregatesFilter<"Atendimento"> | string | null
    tipoDomicilio?: StringNullableWithAggregatesFilter<"Atendimento"> | string | null
    descricaoDomicilio?: StringNullableWithAggregatesFilter<"Atendimento"> | string | null
    membrosFamiliares?: StringNullableWithAggregatesFilter<"Atendimento"> | string | null
    rendaFamiliar?: StringNullableWithAggregatesFilter<"Atendimento"> | string | null
    tipoDemanda?: StringNullableWithAggregatesFilter<"Atendimento"> | string | null
    descricaoAtendimento?: StringWithAggregatesFilter<"Atendimento"> | string
    observacoes?: StringNullableWithAggregatesFilter<"Atendimento"> | string | null
    formId?: StringWithAggregatesFilter<"Atendimento"> | string
    formTipo?: StringWithAggregatesFilter<"Atendimento"> | string
    dataCriacao?: DateTimeWithAggregatesFilter<"Atendimento"> | Date | string
    status?: EnumStatusAtendimentoWithAggregatesFilter<"Atendimento"> | $Enums.StatusAtendimento
    logradouro?: StringWithAggregatesFilter<"Atendimento"> | string
    numero?: StringWithAggregatesFilter<"Atendimento"> | string
    complemento?: StringNullableWithAggregatesFilter<"Atendimento"> | string | null
    bairro?: StringWithAggregatesFilter<"Atendimento"> | string
    cidade?: StringWithAggregatesFilter<"Atendimento"> | string
    estado?: StringWithAggregatesFilter<"Atendimento"> | string
    cep?: StringWithAggregatesFilter<"Atendimento"> | string
    operadorId?: StringWithAggregatesFilter<"Atendimento"> | string
    filaId?: StringNullableWithAggregatesFilter<"Atendimento"> | string | null
  }

  export type ProcessoWhereInput = {
    AND?: ProcessoWhereInput | ProcessoWhereInput[]
    OR?: ProcessoWhereInput[]
    NOT?: ProcessoWhereInput | ProcessoWhereInput[]
    id?: StringFilter<"Processo"> | string
    numeroProcesso?: StringFilter<"Processo"> | string
    resultado?: StringFilter<"Processo"> | string
    resultadoDetalhado?: StringNullableFilter<"Processo"> | string | null
    valoresAtrasados?: StringNullableFilter<"Processo"> | string | null
    beneficios?: StringNullableFilter<"Processo"> | string | null
    dataAtualizacao?: DateTimeFilter<"Processo"> | Date | string
    atendimentoId?: StringFilter<"Processo"> | string
    atendimento?: XOR<AtendimentoScalarRelationFilter, AtendimentoWhereInput>
  }

  export type ProcessoOrderByWithRelationInput = {
    id?: SortOrder
    numeroProcesso?: SortOrder
    resultado?: SortOrder
    resultadoDetalhado?: SortOrderInput | SortOrder
    valoresAtrasados?: SortOrderInput | SortOrder
    beneficios?: SortOrderInput | SortOrder
    dataAtualizacao?: SortOrder
    atendimentoId?: SortOrder
    atendimento?: AtendimentoOrderByWithRelationInput
  }

  export type ProcessoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    atendimentoId?: string
    AND?: ProcessoWhereInput | ProcessoWhereInput[]
    OR?: ProcessoWhereInput[]
    NOT?: ProcessoWhereInput | ProcessoWhereInput[]
    numeroProcesso?: StringFilter<"Processo"> | string
    resultado?: StringFilter<"Processo"> | string
    resultadoDetalhado?: StringNullableFilter<"Processo"> | string | null
    valoresAtrasados?: StringNullableFilter<"Processo"> | string | null
    beneficios?: StringNullableFilter<"Processo"> | string | null
    dataAtualizacao?: DateTimeFilter<"Processo"> | Date | string
    atendimento?: XOR<AtendimentoScalarRelationFilter, AtendimentoWhereInput>
  }, "id" | "atendimentoId">

  export type ProcessoOrderByWithAggregationInput = {
    id?: SortOrder
    numeroProcesso?: SortOrder
    resultado?: SortOrder
    resultadoDetalhado?: SortOrderInput | SortOrder
    valoresAtrasados?: SortOrderInput | SortOrder
    beneficios?: SortOrderInput | SortOrder
    dataAtualizacao?: SortOrder
    atendimentoId?: SortOrder
    _count?: ProcessoCountOrderByAggregateInput
    _max?: ProcessoMaxOrderByAggregateInput
    _min?: ProcessoMinOrderByAggregateInput
  }

  export type ProcessoScalarWhereWithAggregatesInput = {
    AND?: ProcessoScalarWhereWithAggregatesInput | ProcessoScalarWhereWithAggregatesInput[]
    OR?: ProcessoScalarWhereWithAggregatesInput[]
    NOT?: ProcessoScalarWhereWithAggregatesInput | ProcessoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Processo"> | string
    numeroProcesso?: StringWithAggregatesFilter<"Processo"> | string
    resultado?: StringWithAggregatesFilter<"Processo"> | string
    resultadoDetalhado?: StringNullableWithAggregatesFilter<"Processo"> | string | null
    valoresAtrasados?: StringNullableWithAggregatesFilter<"Processo"> | string | null
    beneficios?: StringNullableWithAggregatesFilter<"Processo"> | string | null
    dataAtualizacao?: DateTimeWithAggregatesFilter<"Processo"> | Date | string
    atendimentoId?: StringWithAggregatesFilter<"Processo"> | string
  }

  export type FormularioPreenchidoWhereInput = {
    AND?: FormularioPreenchidoWhereInput | FormularioPreenchidoWhereInput[]
    OR?: FormularioPreenchidoWhereInput[]
    NOT?: FormularioPreenchidoWhereInput | FormularioPreenchidoWhereInput[]
    id?: StringFilter<"FormularioPreenchido"> | string
    tipoFormulario?: EnumTipoFormularioFilter<"FormularioPreenchido"> | $Enums.TipoFormulario
    dadosFormulario?: JsonFilter<"FormularioPreenchido">
    dataCriacao?: DateTimeFilter<"FormularioPreenchido"> | Date | string
    atendimentoId?: StringFilter<"FormularioPreenchido"> | string
    atendimento?: XOR<AtendimentoScalarRelationFilter, AtendimentoWhereInput>
  }

  export type FormularioPreenchidoOrderByWithRelationInput = {
    id?: SortOrder
    tipoFormulario?: SortOrder
    dadosFormulario?: SortOrder
    dataCriacao?: SortOrder
    atendimentoId?: SortOrder
    atendimento?: AtendimentoOrderByWithRelationInput
  }

  export type FormularioPreenchidoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FormularioPreenchidoWhereInput | FormularioPreenchidoWhereInput[]
    OR?: FormularioPreenchidoWhereInput[]
    NOT?: FormularioPreenchidoWhereInput | FormularioPreenchidoWhereInput[]
    tipoFormulario?: EnumTipoFormularioFilter<"FormularioPreenchido"> | $Enums.TipoFormulario
    dadosFormulario?: JsonFilter<"FormularioPreenchido">
    dataCriacao?: DateTimeFilter<"FormularioPreenchido"> | Date | string
    atendimentoId?: StringFilter<"FormularioPreenchido"> | string
    atendimento?: XOR<AtendimentoScalarRelationFilter, AtendimentoWhereInput>
  }, "id">

  export type FormularioPreenchidoOrderByWithAggregationInput = {
    id?: SortOrder
    tipoFormulario?: SortOrder
    dadosFormulario?: SortOrder
    dataCriacao?: SortOrder
    atendimentoId?: SortOrder
    _count?: FormularioPreenchidoCountOrderByAggregateInput
    _max?: FormularioPreenchidoMaxOrderByAggregateInput
    _min?: FormularioPreenchidoMinOrderByAggregateInput
  }

  export type FormularioPreenchidoScalarWhereWithAggregatesInput = {
    AND?: FormularioPreenchidoScalarWhereWithAggregatesInput | FormularioPreenchidoScalarWhereWithAggregatesInput[]
    OR?: FormularioPreenchidoScalarWhereWithAggregatesInput[]
    NOT?: FormularioPreenchidoScalarWhereWithAggregatesInput | FormularioPreenchidoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FormularioPreenchido"> | string
    tipoFormulario?: EnumTipoFormularioWithAggregatesFilter<"FormularioPreenchido"> | $Enums.TipoFormulario
    dadosFormulario?: JsonWithAggregatesFilter<"FormularioPreenchido">
    dataCriacao?: DateTimeWithAggregatesFilter<"FormularioPreenchido"> | Date | string
    atendimentoId?: StringWithAggregatesFilter<"FormularioPreenchido"> | string
  }

  export type DocumentoWhereInput = {
    AND?: DocumentoWhereInput | DocumentoWhereInput[]
    OR?: DocumentoWhereInput[]
    NOT?: DocumentoWhereInput | DocumentoWhereInput[]
    id?: StringFilter<"Documento"> | string
    nomeOriginal?: StringFilter<"Documento"> | string
    nomeArmazenamento?: StringFilter<"Documento"> | string
    tipo?: StringFilter<"Documento"> | string
    tamanho?: IntFilter<"Documento"> | number
    caminho?: StringFilter<"Documento"> | string
    tipoDocumento?: EnumTipoDocumentoFilter<"Documento"> | $Enums.TipoDocumento
    dataCriacao?: DateTimeFilter<"Documento"> | Date | string
    atendimentoId?: StringFilter<"Documento"> | string
    operadorUploadId?: StringFilter<"Documento"> | string
    atendimento?: XOR<AtendimentoScalarRelationFilter, AtendimentoWhereInput>
    operadorUpload?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DocumentoOrderByWithRelationInput = {
    id?: SortOrder
    nomeOriginal?: SortOrder
    nomeArmazenamento?: SortOrder
    tipo?: SortOrder
    tamanho?: SortOrder
    caminho?: SortOrder
    tipoDocumento?: SortOrder
    dataCriacao?: SortOrder
    atendimentoId?: SortOrder
    operadorUploadId?: SortOrder
    atendimento?: AtendimentoOrderByWithRelationInput
    operadorUpload?: UserOrderByWithRelationInput
  }

  export type DocumentoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentoWhereInput | DocumentoWhereInput[]
    OR?: DocumentoWhereInput[]
    NOT?: DocumentoWhereInput | DocumentoWhereInput[]
    nomeOriginal?: StringFilter<"Documento"> | string
    nomeArmazenamento?: StringFilter<"Documento"> | string
    tipo?: StringFilter<"Documento"> | string
    tamanho?: IntFilter<"Documento"> | number
    caminho?: StringFilter<"Documento"> | string
    tipoDocumento?: EnumTipoDocumentoFilter<"Documento"> | $Enums.TipoDocumento
    dataCriacao?: DateTimeFilter<"Documento"> | Date | string
    atendimentoId?: StringFilter<"Documento"> | string
    operadorUploadId?: StringFilter<"Documento"> | string
    atendimento?: XOR<AtendimentoScalarRelationFilter, AtendimentoWhereInput>
    operadorUpload?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DocumentoOrderByWithAggregationInput = {
    id?: SortOrder
    nomeOriginal?: SortOrder
    nomeArmazenamento?: SortOrder
    tipo?: SortOrder
    tamanho?: SortOrder
    caminho?: SortOrder
    tipoDocumento?: SortOrder
    dataCriacao?: SortOrder
    atendimentoId?: SortOrder
    operadorUploadId?: SortOrder
    _count?: DocumentoCountOrderByAggregateInput
    _avg?: DocumentoAvgOrderByAggregateInput
    _max?: DocumentoMaxOrderByAggregateInput
    _min?: DocumentoMinOrderByAggregateInput
    _sum?: DocumentoSumOrderByAggregateInput
  }

  export type DocumentoScalarWhereWithAggregatesInput = {
    AND?: DocumentoScalarWhereWithAggregatesInput | DocumentoScalarWhereWithAggregatesInput[]
    OR?: DocumentoScalarWhereWithAggregatesInput[]
    NOT?: DocumentoScalarWhereWithAggregatesInput | DocumentoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Documento"> | string
    nomeOriginal?: StringWithAggregatesFilter<"Documento"> | string
    nomeArmazenamento?: StringWithAggregatesFilter<"Documento"> | string
    tipo?: StringWithAggregatesFilter<"Documento"> | string
    tamanho?: IntWithAggregatesFilter<"Documento"> | number
    caminho?: StringWithAggregatesFilter<"Documento"> | string
    tipoDocumento?: EnumTipoDocumentoWithAggregatesFilter<"Documento"> | $Enums.TipoDocumento
    dataCriacao?: DateTimeWithAggregatesFilter<"Documento"> | Date | string
    atendimentoId?: StringWithAggregatesFilter<"Documento"> | string
    operadorUploadId?: StringWithAggregatesFilter<"Documento"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    nome: string
    senha: string
    role?: $Enums.Role
    aprovado?: boolean
    dataCadastro?: Date | string
    atendimentosRealizados?: AtendimentoCreateNestedManyWithoutOperadorInput
    atendimentosTriagem?: FilaAtendimentoCreateNestedManyWithoutOperadorTriagemInput
    atendimentosEmAndamento?: FilaAtendimentoCreateNestedManyWithoutOperadorAtendimentoInput
    documentosUploadOperador?: DocumentoCreateNestedManyWithoutOperadorUploadInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    nome: string
    senha: string
    role?: $Enums.Role
    aprovado?: boolean
    dataCadastro?: Date | string
    atendimentosRealizados?: AtendimentoUncheckedCreateNestedManyWithoutOperadorInput
    atendimentosTriagem?: FilaAtendimentoUncheckedCreateNestedManyWithoutOperadorTriagemInput
    atendimentosEmAndamento?: FilaAtendimentoUncheckedCreateNestedManyWithoutOperadorAtendimentoInput
    documentosUploadOperador?: DocumentoUncheckedCreateNestedManyWithoutOperadorUploadInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    aprovado?: BoolFieldUpdateOperationsInput | boolean
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimentosRealizados?: AtendimentoUpdateManyWithoutOperadorNestedInput
    atendimentosTriagem?: FilaAtendimentoUpdateManyWithoutOperadorTriagemNestedInput
    atendimentosEmAndamento?: FilaAtendimentoUpdateManyWithoutOperadorAtendimentoNestedInput
    documentosUploadOperador?: DocumentoUpdateManyWithoutOperadorUploadNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    aprovado?: BoolFieldUpdateOperationsInput | boolean
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimentosRealizados?: AtendimentoUncheckedUpdateManyWithoutOperadorNestedInput
    atendimentosTriagem?: FilaAtendimentoUncheckedUpdateManyWithoutOperadorTriagemNestedInput
    atendimentosEmAndamento?: FilaAtendimentoUncheckedUpdateManyWithoutOperadorAtendimentoNestedInput
    documentosUploadOperador?: DocumentoUncheckedUpdateManyWithoutOperadorUploadNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    nome: string
    senha: string
    role?: $Enums.Role
    aprovado?: boolean
    dataCadastro?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    aprovado?: BoolFieldUpdateOperationsInput | boolean
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    aprovado?: BoolFieldUpdateOperationsInput | boolean
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilaAtendimentoCreateInput = {
    id?: string
    nomeCompleto: string
    nomeSocial?: string | null
    cpf: string
    telefone: string
    isPrioridade?: boolean
    status: $Enums.StatusFilaAtendimento
    dataEntrada?: Date | string
    dataInicio?: Date | string | null
    dataFim?: Date | string | null
    operadorTriagem: UserCreateNestedOneWithoutAtendimentosTriagemInput
    operadorAtendimento?: UserCreateNestedOneWithoutAtendimentosEmAndamentoInput
    atendimento?: AtendimentoCreateNestedOneWithoutFilaInput
  }

  export type FilaAtendimentoUncheckedCreateInput = {
    id?: string
    nomeCompleto: string
    nomeSocial?: string | null
    cpf: string
    telefone: string
    isPrioridade?: boolean
    status: $Enums.StatusFilaAtendimento
    dataEntrada?: Date | string
    dataInicio?: Date | string | null
    dataFim?: Date | string | null
    operadorTriagemId: string
    operadorAtendimentoId?: string | null
    atendimento?: AtendimentoUncheckedCreateNestedOneWithoutFilaInput
  }

  export type FilaAtendimentoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    isPrioridade?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFilaAtendimentoFieldUpdateOperationsInput | $Enums.StatusFilaAtendimento
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    operadorTriagem?: UserUpdateOneRequiredWithoutAtendimentosTriagemNestedInput
    operadorAtendimento?: UserUpdateOneWithoutAtendimentosEmAndamentoNestedInput
    atendimento?: AtendimentoUpdateOneWithoutFilaNestedInput
  }

  export type FilaAtendimentoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    isPrioridade?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFilaAtendimentoFieldUpdateOperationsInput | $Enums.StatusFilaAtendimento
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    operadorTriagemId?: StringFieldUpdateOperationsInput | string
    operadorAtendimentoId?: NullableStringFieldUpdateOperationsInput | string | null
    atendimento?: AtendimentoUncheckedUpdateOneWithoutFilaNestedInput
  }

  export type FilaAtendimentoCreateManyInput = {
    id?: string
    nomeCompleto: string
    nomeSocial?: string | null
    cpf: string
    telefone: string
    isPrioridade?: boolean
    status: $Enums.StatusFilaAtendimento
    dataEntrada?: Date | string
    dataInicio?: Date | string | null
    dataFim?: Date | string | null
    operadorTriagemId: string
    operadorAtendimentoId?: string | null
  }

  export type FilaAtendimentoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    isPrioridade?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFilaAtendimentoFieldUpdateOperationsInput | $Enums.StatusFilaAtendimento
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FilaAtendimentoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    isPrioridade?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFilaAtendimentoFieldUpdateOperationsInput | $Enums.StatusFilaAtendimento
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    operadorTriagemId?: StringFieldUpdateOperationsInput | string
    operadorAtendimentoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AtendimentoCreateInput = {
    id?: string
    nomeCompleto: string
    nomeSocial?: string | null
    cpf: string
    dataNascimento: string
    telefone: string
    email?: string | null
    tipoAtendimento: string
    capacidadeCivil?: string | null
    estadoCivil?: string | null
    profissao?: string | null
    tipoDomicilio?: string | null
    descricaoDomicilio?: string | null
    membrosFamiliares?: string | null
    rendaFamiliar?: string | null
    tipoDemanda?: string | null
    descricaoAtendimento: string
    observacoes?: string | null
    formId: string
    formTipo: string
    dataCriacao?: Date | string
    status?: $Enums.StatusAtendimento
    logradouro: string
    numero: string
    complemento?: string | null
    bairro: string
    cidade: string
    estado: string
    cep: string
    operador: UserCreateNestedOneWithoutAtendimentosRealizadosInput
    fila?: FilaAtendimentoCreateNestedOneWithoutAtendimentoInput
    processo?: ProcessoCreateNestedOneWithoutAtendimentoInput
    formularios?: FormularioPreenchidoCreateNestedManyWithoutAtendimentoInput
    documentos?: DocumentoCreateNestedManyWithoutAtendimentoInput
  }

  export type AtendimentoUncheckedCreateInput = {
    id?: string
    nomeCompleto: string
    nomeSocial?: string | null
    cpf: string
    dataNascimento: string
    telefone: string
    email?: string | null
    tipoAtendimento: string
    capacidadeCivil?: string | null
    estadoCivil?: string | null
    profissao?: string | null
    tipoDomicilio?: string | null
    descricaoDomicilio?: string | null
    membrosFamiliares?: string | null
    rendaFamiliar?: string | null
    tipoDemanda?: string | null
    descricaoAtendimento: string
    observacoes?: string | null
    formId: string
    formTipo: string
    dataCriacao?: Date | string
    status?: $Enums.StatusAtendimento
    logradouro: string
    numero: string
    complemento?: string | null
    bairro: string
    cidade: string
    estado: string
    cep: string
    operadorId: string
    filaId?: string | null
    processo?: ProcessoUncheckedCreateNestedOneWithoutAtendimentoInput
    formularios?: FormularioPreenchidoUncheckedCreateNestedManyWithoutAtendimentoInput
    documentos?: DocumentoUncheckedCreateNestedManyWithoutAtendimentoInput
  }

  export type AtendimentoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    dataNascimento?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAtendimento?: StringFieldUpdateOperationsInput | string
    capacidadeCivil?: NullableStringFieldUpdateOperationsInput | string | null
    estadoCivil?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    membrosFamiliares?: NullableStringFieldUpdateOperationsInput | string | null
    rendaFamiliar?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDemanda?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoAtendimento?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    formId?: StringFieldUpdateOperationsInput | string
    formTipo?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAtendimentoFieldUpdateOperationsInput | $Enums.StatusAtendimento
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    operador?: UserUpdateOneRequiredWithoutAtendimentosRealizadosNestedInput
    fila?: FilaAtendimentoUpdateOneWithoutAtendimentoNestedInput
    processo?: ProcessoUpdateOneWithoutAtendimentoNestedInput
    formularios?: FormularioPreenchidoUpdateManyWithoutAtendimentoNestedInput
    documentos?: DocumentoUpdateManyWithoutAtendimentoNestedInput
  }

  export type AtendimentoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    dataNascimento?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAtendimento?: StringFieldUpdateOperationsInput | string
    capacidadeCivil?: NullableStringFieldUpdateOperationsInput | string | null
    estadoCivil?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    membrosFamiliares?: NullableStringFieldUpdateOperationsInput | string | null
    rendaFamiliar?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDemanda?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoAtendimento?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    formId?: StringFieldUpdateOperationsInput | string
    formTipo?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAtendimentoFieldUpdateOperationsInput | $Enums.StatusAtendimento
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    operadorId?: StringFieldUpdateOperationsInput | string
    filaId?: NullableStringFieldUpdateOperationsInput | string | null
    processo?: ProcessoUncheckedUpdateOneWithoutAtendimentoNestedInput
    formularios?: FormularioPreenchidoUncheckedUpdateManyWithoutAtendimentoNestedInput
    documentos?: DocumentoUncheckedUpdateManyWithoutAtendimentoNestedInput
  }

  export type AtendimentoCreateManyInput = {
    id?: string
    nomeCompleto: string
    nomeSocial?: string | null
    cpf: string
    dataNascimento: string
    telefone: string
    email?: string | null
    tipoAtendimento: string
    capacidadeCivil?: string | null
    estadoCivil?: string | null
    profissao?: string | null
    tipoDomicilio?: string | null
    descricaoDomicilio?: string | null
    membrosFamiliares?: string | null
    rendaFamiliar?: string | null
    tipoDemanda?: string | null
    descricaoAtendimento: string
    observacoes?: string | null
    formId: string
    formTipo: string
    dataCriacao?: Date | string
    status?: $Enums.StatusAtendimento
    logradouro: string
    numero: string
    complemento?: string | null
    bairro: string
    cidade: string
    estado: string
    cep: string
    operadorId: string
    filaId?: string | null
  }

  export type AtendimentoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    dataNascimento?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAtendimento?: StringFieldUpdateOperationsInput | string
    capacidadeCivil?: NullableStringFieldUpdateOperationsInput | string | null
    estadoCivil?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    membrosFamiliares?: NullableStringFieldUpdateOperationsInput | string | null
    rendaFamiliar?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDemanda?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoAtendimento?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    formId?: StringFieldUpdateOperationsInput | string
    formTipo?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAtendimentoFieldUpdateOperationsInput | $Enums.StatusAtendimento
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
  }

  export type AtendimentoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    dataNascimento?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAtendimento?: StringFieldUpdateOperationsInput | string
    capacidadeCivil?: NullableStringFieldUpdateOperationsInput | string | null
    estadoCivil?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    membrosFamiliares?: NullableStringFieldUpdateOperationsInput | string | null
    rendaFamiliar?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDemanda?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoAtendimento?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    formId?: StringFieldUpdateOperationsInput | string
    formTipo?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAtendimentoFieldUpdateOperationsInput | $Enums.StatusAtendimento
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    operadorId?: StringFieldUpdateOperationsInput | string
    filaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessoCreateInput = {
    id?: string
    numeroProcesso: string
    resultado: string
    resultadoDetalhado?: string | null
    valoresAtrasados?: string | null
    beneficios?: string | null
    dataAtualizacao?: Date | string
    atendimento: AtendimentoCreateNestedOneWithoutProcessoInput
  }

  export type ProcessoUncheckedCreateInput = {
    id?: string
    numeroProcesso: string
    resultado: string
    resultadoDetalhado?: string | null
    valoresAtrasados?: string | null
    beneficios?: string | null
    dataAtualizacao?: Date | string
    atendimentoId: string
  }

  export type ProcessoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroProcesso?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    resultadoDetalhado?: NullableStringFieldUpdateOperationsInput | string | null
    valoresAtrasados?: NullableStringFieldUpdateOperationsInput | string | null
    beneficios?: NullableStringFieldUpdateOperationsInput | string | null
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimento?: AtendimentoUpdateOneRequiredWithoutProcessoNestedInput
  }

  export type ProcessoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroProcesso?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    resultadoDetalhado?: NullableStringFieldUpdateOperationsInput | string | null
    valoresAtrasados?: NullableStringFieldUpdateOperationsInput | string | null
    beneficios?: NullableStringFieldUpdateOperationsInput | string | null
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimentoId?: StringFieldUpdateOperationsInput | string
  }

  export type ProcessoCreateManyInput = {
    id?: string
    numeroProcesso: string
    resultado: string
    resultadoDetalhado?: string | null
    valoresAtrasados?: string | null
    beneficios?: string | null
    dataAtualizacao?: Date | string
    atendimentoId: string
  }

  export type ProcessoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroProcesso?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    resultadoDetalhado?: NullableStringFieldUpdateOperationsInput | string | null
    valoresAtrasados?: NullableStringFieldUpdateOperationsInput | string | null
    beneficios?: NullableStringFieldUpdateOperationsInput | string | null
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroProcesso?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    resultadoDetalhado?: NullableStringFieldUpdateOperationsInput | string | null
    valoresAtrasados?: NullableStringFieldUpdateOperationsInput | string | null
    beneficios?: NullableStringFieldUpdateOperationsInput | string | null
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimentoId?: StringFieldUpdateOperationsInput | string
  }

  export type FormularioPreenchidoCreateInput = {
    id?: string
    tipoFormulario: $Enums.TipoFormulario
    dadosFormulario: JsonNullValueInput | InputJsonValue
    dataCriacao?: Date | string
    atendimento: AtendimentoCreateNestedOneWithoutFormulariosInput
  }

  export type FormularioPreenchidoUncheckedCreateInput = {
    id?: string
    tipoFormulario: $Enums.TipoFormulario
    dadosFormulario: JsonNullValueInput | InputJsonValue
    dataCriacao?: Date | string
    atendimentoId: string
  }

  export type FormularioPreenchidoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoFormulario?: EnumTipoFormularioFieldUpdateOperationsInput | $Enums.TipoFormulario
    dadosFormulario?: JsonNullValueInput | InputJsonValue
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimento?: AtendimentoUpdateOneRequiredWithoutFormulariosNestedInput
  }

  export type FormularioPreenchidoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoFormulario?: EnumTipoFormularioFieldUpdateOperationsInput | $Enums.TipoFormulario
    dadosFormulario?: JsonNullValueInput | InputJsonValue
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimentoId?: StringFieldUpdateOperationsInput | string
  }

  export type FormularioPreenchidoCreateManyInput = {
    id?: string
    tipoFormulario: $Enums.TipoFormulario
    dadosFormulario: JsonNullValueInput | InputJsonValue
    dataCriacao?: Date | string
    atendimentoId: string
  }

  export type FormularioPreenchidoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoFormulario?: EnumTipoFormularioFieldUpdateOperationsInput | $Enums.TipoFormulario
    dadosFormulario?: JsonNullValueInput | InputJsonValue
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormularioPreenchidoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoFormulario?: EnumTipoFormularioFieldUpdateOperationsInput | $Enums.TipoFormulario
    dadosFormulario?: JsonNullValueInput | InputJsonValue
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimentoId?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentoCreateInput = {
    id?: string
    nomeOriginal: string
    nomeArmazenamento: string
    tipo: string
    tamanho: number
    caminho: string
    tipoDocumento: $Enums.TipoDocumento
    dataCriacao?: Date | string
    atendimento: AtendimentoCreateNestedOneWithoutDocumentosInput
    operadorUpload: UserCreateNestedOneWithoutDocumentosUploadOperadorInput
  }

  export type DocumentoUncheckedCreateInput = {
    id?: string
    nomeOriginal: string
    nomeArmazenamento: string
    tipo: string
    tamanho: number
    caminho: string
    tipoDocumento: $Enums.TipoDocumento
    dataCriacao?: Date | string
    atendimentoId: string
    operadorUploadId: string
  }

  export type DocumentoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeOriginal?: StringFieldUpdateOperationsInput | string
    nomeArmazenamento?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    caminho?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimento?: AtendimentoUpdateOneRequiredWithoutDocumentosNestedInput
    operadorUpload?: UserUpdateOneRequiredWithoutDocumentosUploadOperadorNestedInput
  }

  export type DocumentoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeOriginal?: StringFieldUpdateOperationsInput | string
    nomeArmazenamento?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    caminho?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimentoId?: StringFieldUpdateOperationsInput | string
    operadorUploadId?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentoCreateManyInput = {
    id?: string
    nomeOriginal: string
    nomeArmazenamento: string
    tipo: string
    tamanho: number
    caminho: string
    tipoDocumento: $Enums.TipoDocumento
    dataCriacao?: Date | string
    atendimentoId: string
    operadorUploadId: string
  }

  export type DocumentoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeOriginal?: StringFieldUpdateOperationsInput | string
    nomeArmazenamento?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    caminho?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeOriginal?: StringFieldUpdateOperationsInput | string
    nomeArmazenamento?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    caminho?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimentoId?: StringFieldUpdateOperationsInput | string
    operadorUploadId?: StringFieldUpdateOperationsInput | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type AtendimentoListRelationFilter = {
    every?: AtendimentoWhereInput
    some?: AtendimentoWhereInput
    none?: AtendimentoWhereInput
  }

  export type FilaAtendimentoListRelationFilter = {
    every?: FilaAtendimentoWhereInput
    some?: FilaAtendimentoWhereInput
    none?: FilaAtendimentoWhereInput
  }

  export type DocumentoListRelationFilter = {
    every?: DocumentoWhereInput
    some?: DocumentoWhereInput
    none?: DocumentoWhereInput
  }

  export type AtendimentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FilaAtendimentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    role?: SortOrder
    aprovado?: SortOrder
    dataCadastro?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    role?: SortOrder
    aprovado?: SortOrder
    dataCadastro?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    role?: SortOrder
    aprovado?: SortOrder
    dataCadastro?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumStatusFilaAtendimentoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusFilaAtendimento | EnumStatusFilaAtendimentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusFilaAtendimento[] | ListEnumStatusFilaAtendimentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusFilaAtendimento[] | ListEnumStatusFilaAtendimentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilaAtendimentoFilter<$PrismaModel> | $Enums.StatusFilaAtendimento
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AtendimentoNullableScalarRelationFilter = {
    is?: AtendimentoWhereInput | null
    isNot?: AtendimentoWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FilaAtendimentoCountOrderByAggregateInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    nomeSocial?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    isPrioridade?: SortOrder
    status?: SortOrder
    dataEntrada?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    operadorTriagemId?: SortOrder
    operadorAtendimentoId?: SortOrder
  }

  export type FilaAtendimentoMaxOrderByAggregateInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    nomeSocial?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    isPrioridade?: SortOrder
    status?: SortOrder
    dataEntrada?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    operadorTriagemId?: SortOrder
    operadorAtendimentoId?: SortOrder
  }

  export type FilaAtendimentoMinOrderByAggregateInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    nomeSocial?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    isPrioridade?: SortOrder
    status?: SortOrder
    dataEntrada?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    operadorTriagemId?: SortOrder
    operadorAtendimentoId?: SortOrder
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

  export type EnumStatusFilaAtendimentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusFilaAtendimento | EnumStatusFilaAtendimentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusFilaAtendimento[] | ListEnumStatusFilaAtendimentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusFilaAtendimento[] | ListEnumStatusFilaAtendimentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilaAtendimentoWithAggregatesFilter<$PrismaModel> | $Enums.StatusFilaAtendimento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilaAtendimentoFilter<$PrismaModel>
    _max?: NestedEnumStatusFilaAtendimentoFilter<$PrismaModel>
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

  export type EnumStatusAtendimentoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAtendimento | EnumStatusAtendimentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAtendimento[] | ListEnumStatusAtendimentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAtendimento[] | ListEnumStatusAtendimentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAtendimentoFilter<$PrismaModel> | $Enums.StatusAtendimento
  }

  export type FilaAtendimentoNullableScalarRelationFilter = {
    is?: FilaAtendimentoWhereInput | null
    isNot?: FilaAtendimentoWhereInput | null
  }

  export type ProcessoNullableScalarRelationFilter = {
    is?: ProcessoWhereInput | null
    isNot?: ProcessoWhereInput | null
  }

  export type FormularioPreenchidoListRelationFilter = {
    every?: FormularioPreenchidoWhereInput
    some?: FormularioPreenchidoWhereInput
    none?: FormularioPreenchidoWhereInput
  }

  export type FormularioPreenchidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AtendimentoCountOrderByAggregateInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    nomeSocial?: SortOrder
    cpf?: SortOrder
    dataNascimento?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    tipoAtendimento?: SortOrder
    capacidadeCivil?: SortOrder
    estadoCivil?: SortOrder
    profissao?: SortOrder
    tipoDomicilio?: SortOrder
    descricaoDomicilio?: SortOrder
    membrosFamiliares?: SortOrder
    rendaFamiliar?: SortOrder
    tipoDemanda?: SortOrder
    descricaoAtendimento?: SortOrder
    observacoes?: SortOrder
    formId?: SortOrder
    formTipo?: SortOrder
    dataCriacao?: SortOrder
    status?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    cep?: SortOrder
    operadorId?: SortOrder
    filaId?: SortOrder
  }

  export type AtendimentoMaxOrderByAggregateInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    nomeSocial?: SortOrder
    cpf?: SortOrder
    dataNascimento?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    tipoAtendimento?: SortOrder
    capacidadeCivil?: SortOrder
    estadoCivil?: SortOrder
    profissao?: SortOrder
    tipoDomicilio?: SortOrder
    descricaoDomicilio?: SortOrder
    membrosFamiliares?: SortOrder
    rendaFamiliar?: SortOrder
    tipoDemanda?: SortOrder
    descricaoAtendimento?: SortOrder
    observacoes?: SortOrder
    formId?: SortOrder
    formTipo?: SortOrder
    dataCriacao?: SortOrder
    status?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    cep?: SortOrder
    operadorId?: SortOrder
    filaId?: SortOrder
  }

  export type AtendimentoMinOrderByAggregateInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    nomeSocial?: SortOrder
    cpf?: SortOrder
    dataNascimento?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    tipoAtendimento?: SortOrder
    capacidadeCivil?: SortOrder
    estadoCivil?: SortOrder
    profissao?: SortOrder
    tipoDomicilio?: SortOrder
    descricaoDomicilio?: SortOrder
    membrosFamiliares?: SortOrder
    rendaFamiliar?: SortOrder
    tipoDemanda?: SortOrder
    descricaoAtendimento?: SortOrder
    observacoes?: SortOrder
    formId?: SortOrder
    formTipo?: SortOrder
    dataCriacao?: SortOrder
    status?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    cep?: SortOrder
    operadorId?: SortOrder
    filaId?: SortOrder
  }

  export type EnumStatusAtendimentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAtendimento | EnumStatusAtendimentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAtendimento[] | ListEnumStatusAtendimentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAtendimento[] | ListEnumStatusAtendimentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAtendimentoWithAggregatesFilter<$PrismaModel> | $Enums.StatusAtendimento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusAtendimentoFilter<$PrismaModel>
    _max?: NestedEnumStatusAtendimentoFilter<$PrismaModel>
  }

  export type AtendimentoScalarRelationFilter = {
    is?: AtendimentoWhereInput
    isNot?: AtendimentoWhereInput
  }

  export type ProcessoCountOrderByAggregateInput = {
    id?: SortOrder
    numeroProcesso?: SortOrder
    resultado?: SortOrder
    resultadoDetalhado?: SortOrder
    valoresAtrasados?: SortOrder
    beneficios?: SortOrder
    dataAtualizacao?: SortOrder
    atendimentoId?: SortOrder
  }

  export type ProcessoMaxOrderByAggregateInput = {
    id?: SortOrder
    numeroProcesso?: SortOrder
    resultado?: SortOrder
    resultadoDetalhado?: SortOrder
    valoresAtrasados?: SortOrder
    beneficios?: SortOrder
    dataAtualizacao?: SortOrder
    atendimentoId?: SortOrder
  }

  export type ProcessoMinOrderByAggregateInput = {
    id?: SortOrder
    numeroProcesso?: SortOrder
    resultado?: SortOrder
    resultadoDetalhado?: SortOrder
    valoresAtrasados?: SortOrder
    beneficios?: SortOrder
    dataAtualizacao?: SortOrder
    atendimentoId?: SortOrder
  }

  export type EnumTipoFormularioFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoFormulario | EnumTipoFormularioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoFormulario[] | ListEnumTipoFormularioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoFormulario[] | ListEnumTipoFormularioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoFormularioFilter<$PrismaModel> | $Enums.TipoFormulario
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FormularioPreenchidoCountOrderByAggregateInput = {
    id?: SortOrder
    tipoFormulario?: SortOrder
    dadosFormulario?: SortOrder
    dataCriacao?: SortOrder
    atendimentoId?: SortOrder
  }

  export type FormularioPreenchidoMaxOrderByAggregateInput = {
    id?: SortOrder
    tipoFormulario?: SortOrder
    dataCriacao?: SortOrder
    atendimentoId?: SortOrder
  }

  export type FormularioPreenchidoMinOrderByAggregateInput = {
    id?: SortOrder
    tipoFormulario?: SortOrder
    dataCriacao?: SortOrder
    atendimentoId?: SortOrder
  }

  export type EnumTipoFormularioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoFormulario | EnumTipoFormularioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoFormulario[] | ListEnumTipoFormularioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoFormulario[] | ListEnumTipoFormularioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoFormularioWithAggregatesFilter<$PrismaModel> | $Enums.TipoFormulario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoFormularioFilter<$PrismaModel>
    _max?: NestedEnumTipoFormularioFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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

  export type EnumTipoDocumentoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoDocumento | EnumTipoDocumentoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoDocumento[] | ListEnumTipoDocumentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoDocumento[] | ListEnumTipoDocumentoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoDocumentoFilter<$PrismaModel> | $Enums.TipoDocumento
  }

  export type DocumentoCountOrderByAggregateInput = {
    id?: SortOrder
    nomeOriginal?: SortOrder
    nomeArmazenamento?: SortOrder
    tipo?: SortOrder
    tamanho?: SortOrder
    caminho?: SortOrder
    tipoDocumento?: SortOrder
    dataCriacao?: SortOrder
    atendimentoId?: SortOrder
    operadorUploadId?: SortOrder
  }

  export type DocumentoAvgOrderByAggregateInput = {
    tamanho?: SortOrder
  }

  export type DocumentoMaxOrderByAggregateInput = {
    id?: SortOrder
    nomeOriginal?: SortOrder
    nomeArmazenamento?: SortOrder
    tipo?: SortOrder
    tamanho?: SortOrder
    caminho?: SortOrder
    tipoDocumento?: SortOrder
    dataCriacao?: SortOrder
    atendimentoId?: SortOrder
    operadorUploadId?: SortOrder
  }

  export type DocumentoMinOrderByAggregateInput = {
    id?: SortOrder
    nomeOriginal?: SortOrder
    nomeArmazenamento?: SortOrder
    tipo?: SortOrder
    tamanho?: SortOrder
    caminho?: SortOrder
    tipoDocumento?: SortOrder
    dataCriacao?: SortOrder
    atendimentoId?: SortOrder
    operadorUploadId?: SortOrder
  }

  export type DocumentoSumOrderByAggregateInput = {
    tamanho?: SortOrder
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

  export type EnumTipoDocumentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoDocumento | EnumTipoDocumentoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoDocumento[] | ListEnumTipoDocumentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoDocumento[] | ListEnumTipoDocumentoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoDocumentoWithAggregatesFilter<$PrismaModel> | $Enums.TipoDocumento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoDocumentoFilter<$PrismaModel>
    _max?: NestedEnumTipoDocumentoFilter<$PrismaModel>
  }

  export type AtendimentoCreateNestedManyWithoutOperadorInput = {
    create?: XOR<AtendimentoCreateWithoutOperadorInput, AtendimentoUncheckedCreateWithoutOperadorInput> | AtendimentoCreateWithoutOperadorInput[] | AtendimentoUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutOperadorInput | AtendimentoCreateOrConnectWithoutOperadorInput[]
    createMany?: AtendimentoCreateManyOperadorInputEnvelope
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
  }

  export type FilaAtendimentoCreateNestedManyWithoutOperadorTriagemInput = {
    create?: XOR<FilaAtendimentoCreateWithoutOperadorTriagemInput, FilaAtendimentoUncheckedCreateWithoutOperadorTriagemInput> | FilaAtendimentoCreateWithoutOperadorTriagemInput[] | FilaAtendimentoUncheckedCreateWithoutOperadorTriagemInput[]
    connectOrCreate?: FilaAtendimentoCreateOrConnectWithoutOperadorTriagemInput | FilaAtendimentoCreateOrConnectWithoutOperadorTriagemInput[]
    createMany?: FilaAtendimentoCreateManyOperadorTriagemInputEnvelope
    connect?: FilaAtendimentoWhereUniqueInput | FilaAtendimentoWhereUniqueInput[]
  }

  export type FilaAtendimentoCreateNestedManyWithoutOperadorAtendimentoInput = {
    create?: XOR<FilaAtendimentoCreateWithoutOperadorAtendimentoInput, FilaAtendimentoUncheckedCreateWithoutOperadorAtendimentoInput> | FilaAtendimentoCreateWithoutOperadorAtendimentoInput[] | FilaAtendimentoUncheckedCreateWithoutOperadorAtendimentoInput[]
    connectOrCreate?: FilaAtendimentoCreateOrConnectWithoutOperadorAtendimentoInput | FilaAtendimentoCreateOrConnectWithoutOperadorAtendimentoInput[]
    createMany?: FilaAtendimentoCreateManyOperadorAtendimentoInputEnvelope
    connect?: FilaAtendimentoWhereUniqueInput | FilaAtendimentoWhereUniqueInput[]
  }

  export type DocumentoCreateNestedManyWithoutOperadorUploadInput = {
    create?: XOR<DocumentoCreateWithoutOperadorUploadInput, DocumentoUncheckedCreateWithoutOperadorUploadInput> | DocumentoCreateWithoutOperadorUploadInput[] | DocumentoUncheckedCreateWithoutOperadorUploadInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutOperadorUploadInput | DocumentoCreateOrConnectWithoutOperadorUploadInput[]
    createMany?: DocumentoCreateManyOperadorUploadInputEnvelope
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
  }

  export type AtendimentoUncheckedCreateNestedManyWithoutOperadorInput = {
    create?: XOR<AtendimentoCreateWithoutOperadorInput, AtendimentoUncheckedCreateWithoutOperadorInput> | AtendimentoCreateWithoutOperadorInput[] | AtendimentoUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutOperadorInput | AtendimentoCreateOrConnectWithoutOperadorInput[]
    createMany?: AtendimentoCreateManyOperadorInputEnvelope
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
  }

  export type FilaAtendimentoUncheckedCreateNestedManyWithoutOperadorTriagemInput = {
    create?: XOR<FilaAtendimentoCreateWithoutOperadorTriagemInput, FilaAtendimentoUncheckedCreateWithoutOperadorTriagemInput> | FilaAtendimentoCreateWithoutOperadorTriagemInput[] | FilaAtendimentoUncheckedCreateWithoutOperadorTriagemInput[]
    connectOrCreate?: FilaAtendimentoCreateOrConnectWithoutOperadorTriagemInput | FilaAtendimentoCreateOrConnectWithoutOperadorTriagemInput[]
    createMany?: FilaAtendimentoCreateManyOperadorTriagemInputEnvelope
    connect?: FilaAtendimentoWhereUniqueInput | FilaAtendimentoWhereUniqueInput[]
  }

  export type FilaAtendimentoUncheckedCreateNestedManyWithoutOperadorAtendimentoInput = {
    create?: XOR<FilaAtendimentoCreateWithoutOperadorAtendimentoInput, FilaAtendimentoUncheckedCreateWithoutOperadorAtendimentoInput> | FilaAtendimentoCreateWithoutOperadorAtendimentoInput[] | FilaAtendimentoUncheckedCreateWithoutOperadorAtendimentoInput[]
    connectOrCreate?: FilaAtendimentoCreateOrConnectWithoutOperadorAtendimentoInput | FilaAtendimentoCreateOrConnectWithoutOperadorAtendimentoInput[]
    createMany?: FilaAtendimentoCreateManyOperadorAtendimentoInputEnvelope
    connect?: FilaAtendimentoWhereUniqueInput | FilaAtendimentoWhereUniqueInput[]
  }

  export type DocumentoUncheckedCreateNestedManyWithoutOperadorUploadInput = {
    create?: XOR<DocumentoCreateWithoutOperadorUploadInput, DocumentoUncheckedCreateWithoutOperadorUploadInput> | DocumentoCreateWithoutOperadorUploadInput[] | DocumentoUncheckedCreateWithoutOperadorUploadInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutOperadorUploadInput | DocumentoCreateOrConnectWithoutOperadorUploadInput[]
    createMany?: DocumentoCreateManyOperadorUploadInputEnvelope
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AtendimentoUpdateManyWithoutOperadorNestedInput = {
    create?: XOR<AtendimentoCreateWithoutOperadorInput, AtendimentoUncheckedCreateWithoutOperadorInput> | AtendimentoCreateWithoutOperadorInput[] | AtendimentoUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutOperadorInput | AtendimentoCreateOrConnectWithoutOperadorInput[]
    upsert?: AtendimentoUpsertWithWhereUniqueWithoutOperadorInput | AtendimentoUpsertWithWhereUniqueWithoutOperadorInput[]
    createMany?: AtendimentoCreateManyOperadorInputEnvelope
    set?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    disconnect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    delete?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    update?: AtendimentoUpdateWithWhereUniqueWithoutOperadorInput | AtendimentoUpdateWithWhereUniqueWithoutOperadorInput[]
    updateMany?: AtendimentoUpdateManyWithWhereWithoutOperadorInput | AtendimentoUpdateManyWithWhereWithoutOperadorInput[]
    deleteMany?: AtendimentoScalarWhereInput | AtendimentoScalarWhereInput[]
  }

  export type FilaAtendimentoUpdateManyWithoutOperadorTriagemNestedInput = {
    create?: XOR<FilaAtendimentoCreateWithoutOperadorTriagemInput, FilaAtendimentoUncheckedCreateWithoutOperadorTriagemInput> | FilaAtendimentoCreateWithoutOperadorTriagemInput[] | FilaAtendimentoUncheckedCreateWithoutOperadorTriagemInput[]
    connectOrCreate?: FilaAtendimentoCreateOrConnectWithoutOperadorTriagemInput | FilaAtendimentoCreateOrConnectWithoutOperadorTriagemInput[]
    upsert?: FilaAtendimentoUpsertWithWhereUniqueWithoutOperadorTriagemInput | FilaAtendimentoUpsertWithWhereUniqueWithoutOperadorTriagemInput[]
    createMany?: FilaAtendimentoCreateManyOperadorTriagemInputEnvelope
    set?: FilaAtendimentoWhereUniqueInput | FilaAtendimentoWhereUniqueInput[]
    disconnect?: FilaAtendimentoWhereUniqueInput | FilaAtendimentoWhereUniqueInput[]
    delete?: FilaAtendimentoWhereUniqueInput | FilaAtendimentoWhereUniqueInput[]
    connect?: FilaAtendimentoWhereUniqueInput | FilaAtendimentoWhereUniqueInput[]
    update?: FilaAtendimentoUpdateWithWhereUniqueWithoutOperadorTriagemInput | FilaAtendimentoUpdateWithWhereUniqueWithoutOperadorTriagemInput[]
    updateMany?: FilaAtendimentoUpdateManyWithWhereWithoutOperadorTriagemInput | FilaAtendimentoUpdateManyWithWhereWithoutOperadorTriagemInput[]
    deleteMany?: FilaAtendimentoScalarWhereInput | FilaAtendimentoScalarWhereInput[]
  }

  export type FilaAtendimentoUpdateManyWithoutOperadorAtendimentoNestedInput = {
    create?: XOR<FilaAtendimentoCreateWithoutOperadorAtendimentoInput, FilaAtendimentoUncheckedCreateWithoutOperadorAtendimentoInput> | FilaAtendimentoCreateWithoutOperadorAtendimentoInput[] | FilaAtendimentoUncheckedCreateWithoutOperadorAtendimentoInput[]
    connectOrCreate?: FilaAtendimentoCreateOrConnectWithoutOperadorAtendimentoInput | FilaAtendimentoCreateOrConnectWithoutOperadorAtendimentoInput[]
    upsert?: FilaAtendimentoUpsertWithWhereUniqueWithoutOperadorAtendimentoInput | FilaAtendimentoUpsertWithWhereUniqueWithoutOperadorAtendimentoInput[]
    createMany?: FilaAtendimentoCreateManyOperadorAtendimentoInputEnvelope
    set?: FilaAtendimentoWhereUniqueInput | FilaAtendimentoWhereUniqueInput[]
    disconnect?: FilaAtendimentoWhereUniqueInput | FilaAtendimentoWhereUniqueInput[]
    delete?: FilaAtendimentoWhereUniqueInput | FilaAtendimentoWhereUniqueInput[]
    connect?: FilaAtendimentoWhereUniqueInput | FilaAtendimentoWhereUniqueInput[]
    update?: FilaAtendimentoUpdateWithWhereUniqueWithoutOperadorAtendimentoInput | FilaAtendimentoUpdateWithWhereUniqueWithoutOperadorAtendimentoInput[]
    updateMany?: FilaAtendimentoUpdateManyWithWhereWithoutOperadorAtendimentoInput | FilaAtendimentoUpdateManyWithWhereWithoutOperadorAtendimentoInput[]
    deleteMany?: FilaAtendimentoScalarWhereInput | FilaAtendimentoScalarWhereInput[]
  }

  export type DocumentoUpdateManyWithoutOperadorUploadNestedInput = {
    create?: XOR<DocumentoCreateWithoutOperadorUploadInput, DocumentoUncheckedCreateWithoutOperadorUploadInput> | DocumentoCreateWithoutOperadorUploadInput[] | DocumentoUncheckedCreateWithoutOperadorUploadInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutOperadorUploadInput | DocumentoCreateOrConnectWithoutOperadorUploadInput[]
    upsert?: DocumentoUpsertWithWhereUniqueWithoutOperadorUploadInput | DocumentoUpsertWithWhereUniqueWithoutOperadorUploadInput[]
    createMany?: DocumentoCreateManyOperadorUploadInputEnvelope
    set?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    disconnect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    delete?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    update?: DocumentoUpdateWithWhereUniqueWithoutOperadorUploadInput | DocumentoUpdateWithWhereUniqueWithoutOperadorUploadInput[]
    updateMany?: DocumentoUpdateManyWithWhereWithoutOperadorUploadInput | DocumentoUpdateManyWithWhereWithoutOperadorUploadInput[]
    deleteMany?: DocumentoScalarWhereInput | DocumentoScalarWhereInput[]
  }

  export type AtendimentoUncheckedUpdateManyWithoutOperadorNestedInput = {
    create?: XOR<AtendimentoCreateWithoutOperadorInput, AtendimentoUncheckedCreateWithoutOperadorInput> | AtendimentoCreateWithoutOperadorInput[] | AtendimentoUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutOperadorInput | AtendimentoCreateOrConnectWithoutOperadorInput[]
    upsert?: AtendimentoUpsertWithWhereUniqueWithoutOperadorInput | AtendimentoUpsertWithWhereUniqueWithoutOperadorInput[]
    createMany?: AtendimentoCreateManyOperadorInputEnvelope
    set?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    disconnect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    delete?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    update?: AtendimentoUpdateWithWhereUniqueWithoutOperadorInput | AtendimentoUpdateWithWhereUniqueWithoutOperadorInput[]
    updateMany?: AtendimentoUpdateManyWithWhereWithoutOperadorInput | AtendimentoUpdateManyWithWhereWithoutOperadorInput[]
    deleteMany?: AtendimentoScalarWhereInput | AtendimentoScalarWhereInput[]
  }

  export type FilaAtendimentoUncheckedUpdateManyWithoutOperadorTriagemNestedInput = {
    create?: XOR<FilaAtendimentoCreateWithoutOperadorTriagemInput, FilaAtendimentoUncheckedCreateWithoutOperadorTriagemInput> | FilaAtendimentoCreateWithoutOperadorTriagemInput[] | FilaAtendimentoUncheckedCreateWithoutOperadorTriagemInput[]
    connectOrCreate?: FilaAtendimentoCreateOrConnectWithoutOperadorTriagemInput | FilaAtendimentoCreateOrConnectWithoutOperadorTriagemInput[]
    upsert?: FilaAtendimentoUpsertWithWhereUniqueWithoutOperadorTriagemInput | FilaAtendimentoUpsertWithWhereUniqueWithoutOperadorTriagemInput[]
    createMany?: FilaAtendimentoCreateManyOperadorTriagemInputEnvelope
    set?: FilaAtendimentoWhereUniqueInput | FilaAtendimentoWhereUniqueInput[]
    disconnect?: FilaAtendimentoWhereUniqueInput | FilaAtendimentoWhereUniqueInput[]
    delete?: FilaAtendimentoWhereUniqueInput | FilaAtendimentoWhereUniqueInput[]
    connect?: FilaAtendimentoWhereUniqueInput | FilaAtendimentoWhereUniqueInput[]
    update?: FilaAtendimentoUpdateWithWhereUniqueWithoutOperadorTriagemInput | FilaAtendimentoUpdateWithWhereUniqueWithoutOperadorTriagemInput[]
    updateMany?: FilaAtendimentoUpdateManyWithWhereWithoutOperadorTriagemInput | FilaAtendimentoUpdateManyWithWhereWithoutOperadorTriagemInput[]
    deleteMany?: FilaAtendimentoScalarWhereInput | FilaAtendimentoScalarWhereInput[]
  }

  export type FilaAtendimentoUncheckedUpdateManyWithoutOperadorAtendimentoNestedInput = {
    create?: XOR<FilaAtendimentoCreateWithoutOperadorAtendimentoInput, FilaAtendimentoUncheckedCreateWithoutOperadorAtendimentoInput> | FilaAtendimentoCreateWithoutOperadorAtendimentoInput[] | FilaAtendimentoUncheckedCreateWithoutOperadorAtendimentoInput[]
    connectOrCreate?: FilaAtendimentoCreateOrConnectWithoutOperadorAtendimentoInput | FilaAtendimentoCreateOrConnectWithoutOperadorAtendimentoInput[]
    upsert?: FilaAtendimentoUpsertWithWhereUniqueWithoutOperadorAtendimentoInput | FilaAtendimentoUpsertWithWhereUniqueWithoutOperadorAtendimentoInput[]
    createMany?: FilaAtendimentoCreateManyOperadorAtendimentoInputEnvelope
    set?: FilaAtendimentoWhereUniqueInput | FilaAtendimentoWhereUniqueInput[]
    disconnect?: FilaAtendimentoWhereUniqueInput | FilaAtendimentoWhereUniqueInput[]
    delete?: FilaAtendimentoWhereUniqueInput | FilaAtendimentoWhereUniqueInput[]
    connect?: FilaAtendimentoWhereUniqueInput | FilaAtendimentoWhereUniqueInput[]
    update?: FilaAtendimentoUpdateWithWhereUniqueWithoutOperadorAtendimentoInput | FilaAtendimentoUpdateWithWhereUniqueWithoutOperadorAtendimentoInput[]
    updateMany?: FilaAtendimentoUpdateManyWithWhereWithoutOperadorAtendimentoInput | FilaAtendimentoUpdateManyWithWhereWithoutOperadorAtendimentoInput[]
    deleteMany?: FilaAtendimentoScalarWhereInput | FilaAtendimentoScalarWhereInput[]
  }

  export type DocumentoUncheckedUpdateManyWithoutOperadorUploadNestedInput = {
    create?: XOR<DocumentoCreateWithoutOperadorUploadInput, DocumentoUncheckedCreateWithoutOperadorUploadInput> | DocumentoCreateWithoutOperadorUploadInput[] | DocumentoUncheckedCreateWithoutOperadorUploadInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutOperadorUploadInput | DocumentoCreateOrConnectWithoutOperadorUploadInput[]
    upsert?: DocumentoUpsertWithWhereUniqueWithoutOperadorUploadInput | DocumentoUpsertWithWhereUniqueWithoutOperadorUploadInput[]
    createMany?: DocumentoCreateManyOperadorUploadInputEnvelope
    set?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    disconnect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    delete?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    update?: DocumentoUpdateWithWhereUniqueWithoutOperadorUploadInput | DocumentoUpdateWithWhereUniqueWithoutOperadorUploadInput[]
    updateMany?: DocumentoUpdateManyWithWhereWithoutOperadorUploadInput | DocumentoUpdateManyWithWhereWithoutOperadorUploadInput[]
    deleteMany?: DocumentoScalarWhereInput | DocumentoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAtendimentosTriagemInput = {
    create?: XOR<UserCreateWithoutAtendimentosTriagemInput, UserUncheckedCreateWithoutAtendimentosTriagemInput>
    connectOrCreate?: UserCreateOrConnectWithoutAtendimentosTriagemInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAtendimentosEmAndamentoInput = {
    create?: XOR<UserCreateWithoutAtendimentosEmAndamentoInput, UserUncheckedCreateWithoutAtendimentosEmAndamentoInput>
    connectOrCreate?: UserCreateOrConnectWithoutAtendimentosEmAndamentoInput
    connect?: UserWhereUniqueInput
  }

  export type AtendimentoCreateNestedOneWithoutFilaInput = {
    create?: XOR<AtendimentoCreateWithoutFilaInput, AtendimentoUncheckedCreateWithoutFilaInput>
    connectOrCreate?: AtendimentoCreateOrConnectWithoutFilaInput
    connect?: AtendimentoWhereUniqueInput
  }

  export type AtendimentoUncheckedCreateNestedOneWithoutFilaInput = {
    create?: XOR<AtendimentoCreateWithoutFilaInput, AtendimentoUncheckedCreateWithoutFilaInput>
    connectOrCreate?: AtendimentoCreateOrConnectWithoutFilaInput
    connect?: AtendimentoWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumStatusFilaAtendimentoFieldUpdateOperationsInput = {
    set?: $Enums.StatusFilaAtendimento
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAtendimentosTriagemNestedInput = {
    create?: XOR<UserCreateWithoutAtendimentosTriagemInput, UserUncheckedCreateWithoutAtendimentosTriagemInput>
    connectOrCreate?: UserCreateOrConnectWithoutAtendimentosTriagemInput
    upsert?: UserUpsertWithoutAtendimentosTriagemInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAtendimentosTriagemInput, UserUpdateWithoutAtendimentosTriagemInput>, UserUncheckedUpdateWithoutAtendimentosTriagemInput>
  }

  export type UserUpdateOneWithoutAtendimentosEmAndamentoNestedInput = {
    create?: XOR<UserCreateWithoutAtendimentosEmAndamentoInput, UserUncheckedCreateWithoutAtendimentosEmAndamentoInput>
    connectOrCreate?: UserCreateOrConnectWithoutAtendimentosEmAndamentoInput
    upsert?: UserUpsertWithoutAtendimentosEmAndamentoInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAtendimentosEmAndamentoInput, UserUpdateWithoutAtendimentosEmAndamentoInput>, UserUncheckedUpdateWithoutAtendimentosEmAndamentoInput>
  }

  export type AtendimentoUpdateOneWithoutFilaNestedInput = {
    create?: XOR<AtendimentoCreateWithoutFilaInput, AtendimentoUncheckedCreateWithoutFilaInput>
    connectOrCreate?: AtendimentoCreateOrConnectWithoutFilaInput
    upsert?: AtendimentoUpsertWithoutFilaInput
    disconnect?: AtendimentoWhereInput | boolean
    delete?: AtendimentoWhereInput | boolean
    connect?: AtendimentoWhereUniqueInput
    update?: XOR<XOR<AtendimentoUpdateToOneWithWhereWithoutFilaInput, AtendimentoUpdateWithoutFilaInput>, AtendimentoUncheckedUpdateWithoutFilaInput>
  }

  export type AtendimentoUncheckedUpdateOneWithoutFilaNestedInput = {
    create?: XOR<AtendimentoCreateWithoutFilaInput, AtendimentoUncheckedCreateWithoutFilaInput>
    connectOrCreate?: AtendimentoCreateOrConnectWithoutFilaInput
    upsert?: AtendimentoUpsertWithoutFilaInput
    disconnect?: AtendimentoWhereInput | boolean
    delete?: AtendimentoWhereInput | boolean
    connect?: AtendimentoWhereUniqueInput
    update?: XOR<XOR<AtendimentoUpdateToOneWithWhereWithoutFilaInput, AtendimentoUpdateWithoutFilaInput>, AtendimentoUncheckedUpdateWithoutFilaInput>
  }

  export type UserCreateNestedOneWithoutAtendimentosRealizadosInput = {
    create?: XOR<UserCreateWithoutAtendimentosRealizadosInput, UserUncheckedCreateWithoutAtendimentosRealizadosInput>
    connectOrCreate?: UserCreateOrConnectWithoutAtendimentosRealizadosInput
    connect?: UserWhereUniqueInput
  }

  export type FilaAtendimentoCreateNestedOneWithoutAtendimentoInput = {
    create?: XOR<FilaAtendimentoCreateWithoutAtendimentoInput, FilaAtendimentoUncheckedCreateWithoutAtendimentoInput>
    connectOrCreate?: FilaAtendimentoCreateOrConnectWithoutAtendimentoInput
    connect?: FilaAtendimentoWhereUniqueInput
  }

  export type ProcessoCreateNestedOneWithoutAtendimentoInput = {
    create?: XOR<ProcessoCreateWithoutAtendimentoInput, ProcessoUncheckedCreateWithoutAtendimentoInput>
    connectOrCreate?: ProcessoCreateOrConnectWithoutAtendimentoInput
    connect?: ProcessoWhereUniqueInput
  }

  export type FormularioPreenchidoCreateNestedManyWithoutAtendimentoInput = {
    create?: XOR<FormularioPreenchidoCreateWithoutAtendimentoInput, FormularioPreenchidoUncheckedCreateWithoutAtendimentoInput> | FormularioPreenchidoCreateWithoutAtendimentoInput[] | FormularioPreenchidoUncheckedCreateWithoutAtendimentoInput[]
    connectOrCreate?: FormularioPreenchidoCreateOrConnectWithoutAtendimentoInput | FormularioPreenchidoCreateOrConnectWithoutAtendimentoInput[]
    createMany?: FormularioPreenchidoCreateManyAtendimentoInputEnvelope
    connect?: FormularioPreenchidoWhereUniqueInput | FormularioPreenchidoWhereUniqueInput[]
  }

  export type DocumentoCreateNestedManyWithoutAtendimentoInput = {
    create?: XOR<DocumentoCreateWithoutAtendimentoInput, DocumentoUncheckedCreateWithoutAtendimentoInput> | DocumentoCreateWithoutAtendimentoInput[] | DocumentoUncheckedCreateWithoutAtendimentoInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutAtendimentoInput | DocumentoCreateOrConnectWithoutAtendimentoInput[]
    createMany?: DocumentoCreateManyAtendimentoInputEnvelope
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
  }

  export type ProcessoUncheckedCreateNestedOneWithoutAtendimentoInput = {
    create?: XOR<ProcessoCreateWithoutAtendimentoInput, ProcessoUncheckedCreateWithoutAtendimentoInput>
    connectOrCreate?: ProcessoCreateOrConnectWithoutAtendimentoInput
    connect?: ProcessoWhereUniqueInput
  }

  export type FormularioPreenchidoUncheckedCreateNestedManyWithoutAtendimentoInput = {
    create?: XOR<FormularioPreenchidoCreateWithoutAtendimentoInput, FormularioPreenchidoUncheckedCreateWithoutAtendimentoInput> | FormularioPreenchidoCreateWithoutAtendimentoInput[] | FormularioPreenchidoUncheckedCreateWithoutAtendimentoInput[]
    connectOrCreate?: FormularioPreenchidoCreateOrConnectWithoutAtendimentoInput | FormularioPreenchidoCreateOrConnectWithoutAtendimentoInput[]
    createMany?: FormularioPreenchidoCreateManyAtendimentoInputEnvelope
    connect?: FormularioPreenchidoWhereUniqueInput | FormularioPreenchidoWhereUniqueInput[]
  }

  export type DocumentoUncheckedCreateNestedManyWithoutAtendimentoInput = {
    create?: XOR<DocumentoCreateWithoutAtendimentoInput, DocumentoUncheckedCreateWithoutAtendimentoInput> | DocumentoCreateWithoutAtendimentoInput[] | DocumentoUncheckedCreateWithoutAtendimentoInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutAtendimentoInput | DocumentoCreateOrConnectWithoutAtendimentoInput[]
    createMany?: DocumentoCreateManyAtendimentoInputEnvelope
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
  }

  export type EnumStatusAtendimentoFieldUpdateOperationsInput = {
    set?: $Enums.StatusAtendimento
  }

  export type UserUpdateOneRequiredWithoutAtendimentosRealizadosNestedInput = {
    create?: XOR<UserCreateWithoutAtendimentosRealizadosInput, UserUncheckedCreateWithoutAtendimentosRealizadosInput>
    connectOrCreate?: UserCreateOrConnectWithoutAtendimentosRealizadosInput
    upsert?: UserUpsertWithoutAtendimentosRealizadosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAtendimentosRealizadosInput, UserUpdateWithoutAtendimentosRealizadosInput>, UserUncheckedUpdateWithoutAtendimentosRealizadosInput>
  }

  export type FilaAtendimentoUpdateOneWithoutAtendimentoNestedInput = {
    create?: XOR<FilaAtendimentoCreateWithoutAtendimentoInput, FilaAtendimentoUncheckedCreateWithoutAtendimentoInput>
    connectOrCreate?: FilaAtendimentoCreateOrConnectWithoutAtendimentoInput
    upsert?: FilaAtendimentoUpsertWithoutAtendimentoInput
    disconnect?: FilaAtendimentoWhereInput | boolean
    delete?: FilaAtendimentoWhereInput | boolean
    connect?: FilaAtendimentoWhereUniqueInput
    update?: XOR<XOR<FilaAtendimentoUpdateToOneWithWhereWithoutAtendimentoInput, FilaAtendimentoUpdateWithoutAtendimentoInput>, FilaAtendimentoUncheckedUpdateWithoutAtendimentoInput>
  }

  export type ProcessoUpdateOneWithoutAtendimentoNestedInput = {
    create?: XOR<ProcessoCreateWithoutAtendimentoInput, ProcessoUncheckedCreateWithoutAtendimentoInput>
    connectOrCreate?: ProcessoCreateOrConnectWithoutAtendimentoInput
    upsert?: ProcessoUpsertWithoutAtendimentoInput
    disconnect?: ProcessoWhereInput | boolean
    delete?: ProcessoWhereInput | boolean
    connect?: ProcessoWhereUniqueInput
    update?: XOR<XOR<ProcessoUpdateToOneWithWhereWithoutAtendimentoInput, ProcessoUpdateWithoutAtendimentoInput>, ProcessoUncheckedUpdateWithoutAtendimentoInput>
  }

  export type FormularioPreenchidoUpdateManyWithoutAtendimentoNestedInput = {
    create?: XOR<FormularioPreenchidoCreateWithoutAtendimentoInput, FormularioPreenchidoUncheckedCreateWithoutAtendimentoInput> | FormularioPreenchidoCreateWithoutAtendimentoInput[] | FormularioPreenchidoUncheckedCreateWithoutAtendimentoInput[]
    connectOrCreate?: FormularioPreenchidoCreateOrConnectWithoutAtendimentoInput | FormularioPreenchidoCreateOrConnectWithoutAtendimentoInput[]
    upsert?: FormularioPreenchidoUpsertWithWhereUniqueWithoutAtendimentoInput | FormularioPreenchidoUpsertWithWhereUniqueWithoutAtendimentoInput[]
    createMany?: FormularioPreenchidoCreateManyAtendimentoInputEnvelope
    set?: FormularioPreenchidoWhereUniqueInput | FormularioPreenchidoWhereUniqueInput[]
    disconnect?: FormularioPreenchidoWhereUniqueInput | FormularioPreenchidoWhereUniqueInput[]
    delete?: FormularioPreenchidoWhereUniqueInput | FormularioPreenchidoWhereUniqueInput[]
    connect?: FormularioPreenchidoWhereUniqueInput | FormularioPreenchidoWhereUniqueInput[]
    update?: FormularioPreenchidoUpdateWithWhereUniqueWithoutAtendimentoInput | FormularioPreenchidoUpdateWithWhereUniqueWithoutAtendimentoInput[]
    updateMany?: FormularioPreenchidoUpdateManyWithWhereWithoutAtendimentoInput | FormularioPreenchidoUpdateManyWithWhereWithoutAtendimentoInput[]
    deleteMany?: FormularioPreenchidoScalarWhereInput | FormularioPreenchidoScalarWhereInput[]
  }

  export type DocumentoUpdateManyWithoutAtendimentoNestedInput = {
    create?: XOR<DocumentoCreateWithoutAtendimentoInput, DocumentoUncheckedCreateWithoutAtendimentoInput> | DocumentoCreateWithoutAtendimentoInput[] | DocumentoUncheckedCreateWithoutAtendimentoInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutAtendimentoInput | DocumentoCreateOrConnectWithoutAtendimentoInput[]
    upsert?: DocumentoUpsertWithWhereUniqueWithoutAtendimentoInput | DocumentoUpsertWithWhereUniqueWithoutAtendimentoInput[]
    createMany?: DocumentoCreateManyAtendimentoInputEnvelope
    set?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    disconnect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    delete?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    update?: DocumentoUpdateWithWhereUniqueWithoutAtendimentoInput | DocumentoUpdateWithWhereUniqueWithoutAtendimentoInput[]
    updateMany?: DocumentoUpdateManyWithWhereWithoutAtendimentoInput | DocumentoUpdateManyWithWhereWithoutAtendimentoInput[]
    deleteMany?: DocumentoScalarWhereInput | DocumentoScalarWhereInput[]
  }

  export type ProcessoUncheckedUpdateOneWithoutAtendimentoNestedInput = {
    create?: XOR<ProcessoCreateWithoutAtendimentoInput, ProcessoUncheckedCreateWithoutAtendimentoInput>
    connectOrCreate?: ProcessoCreateOrConnectWithoutAtendimentoInput
    upsert?: ProcessoUpsertWithoutAtendimentoInput
    disconnect?: ProcessoWhereInput | boolean
    delete?: ProcessoWhereInput | boolean
    connect?: ProcessoWhereUniqueInput
    update?: XOR<XOR<ProcessoUpdateToOneWithWhereWithoutAtendimentoInput, ProcessoUpdateWithoutAtendimentoInput>, ProcessoUncheckedUpdateWithoutAtendimentoInput>
  }

  export type FormularioPreenchidoUncheckedUpdateManyWithoutAtendimentoNestedInput = {
    create?: XOR<FormularioPreenchidoCreateWithoutAtendimentoInput, FormularioPreenchidoUncheckedCreateWithoutAtendimentoInput> | FormularioPreenchidoCreateWithoutAtendimentoInput[] | FormularioPreenchidoUncheckedCreateWithoutAtendimentoInput[]
    connectOrCreate?: FormularioPreenchidoCreateOrConnectWithoutAtendimentoInput | FormularioPreenchidoCreateOrConnectWithoutAtendimentoInput[]
    upsert?: FormularioPreenchidoUpsertWithWhereUniqueWithoutAtendimentoInput | FormularioPreenchidoUpsertWithWhereUniqueWithoutAtendimentoInput[]
    createMany?: FormularioPreenchidoCreateManyAtendimentoInputEnvelope
    set?: FormularioPreenchidoWhereUniqueInput | FormularioPreenchidoWhereUniqueInput[]
    disconnect?: FormularioPreenchidoWhereUniqueInput | FormularioPreenchidoWhereUniqueInput[]
    delete?: FormularioPreenchidoWhereUniqueInput | FormularioPreenchidoWhereUniqueInput[]
    connect?: FormularioPreenchidoWhereUniqueInput | FormularioPreenchidoWhereUniqueInput[]
    update?: FormularioPreenchidoUpdateWithWhereUniqueWithoutAtendimentoInput | FormularioPreenchidoUpdateWithWhereUniqueWithoutAtendimentoInput[]
    updateMany?: FormularioPreenchidoUpdateManyWithWhereWithoutAtendimentoInput | FormularioPreenchidoUpdateManyWithWhereWithoutAtendimentoInput[]
    deleteMany?: FormularioPreenchidoScalarWhereInput | FormularioPreenchidoScalarWhereInput[]
  }

  export type DocumentoUncheckedUpdateManyWithoutAtendimentoNestedInput = {
    create?: XOR<DocumentoCreateWithoutAtendimentoInput, DocumentoUncheckedCreateWithoutAtendimentoInput> | DocumentoCreateWithoutAtendimentoInput[] | DocumentoUncheckedCreateWithoutAtendimentoInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutAtendimentoInput | DocumentoCreateOrConnectWithoutAtendimentoInput[]
    upsert?: DocumentoUpsertWithWhereUniqueWithoutAtendimentoInput | DocumentoUpsertWithWhereUniqueWithoutAtendimentoInput[]
    createMany?: DocumentoCreateManyAtendimentoInputEnvelope
    set?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    disconnect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    delete?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    update?: DocumentoUpdateWithWhereUniqueWithoutAtendimentoInput | DocumentoUpdateWithWhereUniqueWithoutAtendimentoInput[]
    updateMany?: DocumentoUpdateManyWithWhereWithoutAtendimentoInput | DocumentoUpdateManyWithWhereWithoutAtendimentoInput[]
    deleteMany?: DocumentoScalarWhereInput | DocumentoScalarWhereInput[]
  }

  export type AtendimentoCreateNestedOneWithoutProcessoInput = {
    create?: XOR<AtendimentoCreateWithoutProcessoInput, AtendimentoUncheckedCreateWithoutProcessoInput>
    connectOrCreate?: AtendimentoCreateOrConnectWithoutProcessoInput
    connect?: AtendimentoWhereUniqueInput
  }

  export type AtendimentoUpdateOneRequiredWithoutProcessoNestedInput = {
    create?: XOR<AtendimentoCreateWithoutProcessoInput, AtendimentoUncheckedCreateWithoutProcessoInput>
    connectOrCreate?: AtendimentoCreateOrConnectWithoutProcessoInput
    upsert?: AtendimentoUpsertWithoutProcessoInput
    connect?: AtendimentoWhereUniqueInput
    update?: XOR<XOR<AtendimentoUpdateToOneWithWhereWithoutProcessoInput, AtendimentoUpdateWithoutProcessoInput>, AtendimentoUncheckedUpdateWithoutProcessoInput>
  }

  export type AtendimentoCreateNestedOneWithoutFormulariosInput = {
    create?: XOR<AtendimentoCreateWithoutFormulariosInput, AtendimentoUncheckedCreateWithoutFormulariosInput>
    connectOrCreate?: AtendimentoCreateOrConnectWithoutFormulariosInput
    connect?: AtendimentoWhereUniqueInput
  }

  export type EnumTipoFormularioFieldUpdateOperationsInput = {
    set?: $Enums.TipoFormulario
  }

  export type AtendimentoUpdateOneRequiredWithoutFormulariosNestedInput = {
    create?: XOR<AtendimentoCreateWithoutFormulariosInput, AtendimentoUncheckedCreateWithoutFormulariosInput>
    connectOrCreate?: AtendimentoCreateOrConnectWithoutFormulariosInput
    upsert?: AtendimentoUpsertWithoutFormulariosInput
    connect?: AtendimentoWhereUniqueInput
    update?: XOR<XOR<AtendimentoUpdateToOneWithWhereWithoutFormulariosInput, AtendimentoUpdateWithoutFormulariosInput>, AtendimentoUncheckedUpdateWithoutFormulariosInput>
  }

  export type AtendimentoCreateNestedOneWithoutDocumentosInput = {
    create?: XOR<AtendimentoCreateWithoutDocumentosInput, AtendimentoUncheckedCreateWithoutDocumentosInput>
    connectOrCreate?: AtendimentoCreateOrConnectWithoutDocumentosInput
    connect?: AtendimentoWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDocumentosUploadOperadorInput = {
    create?: XOR<UserCreateWithoutDocumentosUploadOperadorInput, UserUncheckedCreateWithoutDocumentosUploadOperadorInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocumentosUploadOperadorInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumTipoDocumentoFieldUpdateOperationsInput = {
    set?: $Enums.TipoDocumento
  }

  export type AtendimentoUpdateOneRequiredWithoutDocumentosNestedInput = {
    create?: XOR<AtendimentoCreateWithoutDocumentosInput, AtendimentoUncheckedCreateWithoutDocumentosInput>
    connectOrCreate?: AtendimentoCreateOrConnectWithoutDocumentosInput
    upsert?: AtendimentoUpsertWithoutDocumentosInput
    connect?: AtendimentoWhereUniqueInput
    update?: XOR<XOR<AtendimentoUpdateToOneWithWhereWithoutDocumentosInput, AtendimentoUpdateWithoutDocumentosInput>, AtendimentoUncheckedUpdateWithoutDocumentosInput>
  }

  export type UserUpdateOneRequiredWithoutDocumentosUploadOperadorNestedInput = {
    create?: XOR<UserCreateWithoutDocumentosUploadOperadorInput, UserUncheckedCreateWithoutDocumentosUploadOperadorInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocumentosUploadOperadorInput
    upsert?: UserUpsertWithoutDocumentosUploadOperadorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDocumentosUploadOperadorInput, UserUpdateWithoutDocumentosUploadOperadorInput>, UserUncheckedUpdateWithoutDocumentosUploadOperadorInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumStatusFilaAtendimentoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusFilaAtendimento | EnumStatusFilaAtendimentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusFilaAtendimento[] | ListEnumStatusFilaAtendimentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusFilaAtendimento[] | ListEnumStatusFilaAtendimentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilaAtendimentoFilter<$PrismaModel> | $Enums.StatusFilaAtendimento
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

  export type NestedEnumStatusFilaAtendimentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusFilaAtendimento | EnumStatusFilaAtendimentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusFilaAtendimento[] | ListEnumStatusFilaAtendimentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusFilaAtendimento[] | ListEnumStatusFilaAtendimentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilaAtendimentoWithAggregatesFilter<$PrismaModel> | $Enums.StatusFilaAtendimento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilaAtendimentoFilter<$PrismaModel>
    _max?: NestedEnumStatusFilaAtendimentoFilter<$PrismaModel>
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

  export type NestedEnumStatusAtendimentoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAtendimento | EnumStatusAtendimentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAtendimento[] | ListEnumStatusAtendimentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAtendimento[] | ListEnumStatusAtendimentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAtendimentoFilter<$PrismaModel> | $Enums.StatusAtendimento
  }

  export type NestedEnumStatusAtendimentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAtendimento | EnumStatusAtendimentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAtendimento[] | ListEnumStatusAtendimentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAtendimento[] | ListEnumStatusAtendimentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAtendimentoWithAggregatesFilter<$PrismaModel> | $Enums.StatusAtendimento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusAtendimentoFilter<$PrismaModel>
    _max?: NestedEnumStatusAtendimentoFilter<$PrismaModel>
  }

  export type NestedEnumTipoFormularioFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoFormulario | EnumTipoFormularioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoFormulario[] | ListEnumTipoFormularioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoFormulario[] | ListEnumTipoFormularioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoFormularioFilter<$PrismaModel> | $Enums.TipoFormulario
  }

  export type NestedEnumTipoFormularioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoFormulario | EnumTipoFormularioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoFormulario[] | ListEnumTipoFormularioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoFormulario[] | ListEnumTipoFormularioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoFormularioWithAggregatesFilter<$PrismaModel> | $Enums.TipoFormulario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoFormularioFilter<$PrismaModel>
    _max?: NestedEnumTipoFormularioFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumTipoDocumentoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoDocumento | EnumTipoDocumentoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoDocumento[] | ListEnumTipoDocumentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoDocumento[] | ListEnumTipoDocumentoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoDocumentoFilter<$PrismaModel> | $Enums.TipoDocumento
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

  export type NestedEnumTipoDocumentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoDocumento | EnumTipoDocumentoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoDocumento[] | ListEnumTipoDocumentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoDocumento[] | ListEnumTipoDocumentoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoDocumentoWithAggregatesFilter<$PrismaModel> | $Enums.TipoDocumento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoDocumentoFilter<$PrismaModel>
    _max?: NestedEnumTipoDocumentoFilter<$PrismaModel>
  }

  export type AtendimentoCreateWithoutOperadorInput = {
    id?: string
    nomeCompleto: string
    nomeSocial?: string | null
    cpf: string
    dataNascimento: string
    telefone: string
    email?: string | null
    tipoAtendimento: string
    capacidadeCivil?: string | null
    estadoCivil?: string | null
    profissao?: string | null
    tipoDomicilio?: string | null
    descricaoDomicilio?: string | null
    membrosFamiliares?: string | null
    rendaFamiliar?: string | null
    tipoDemanda?: string | null
    descricaoAtendimento: string
    observacoes?: string | null
    formId: string
    formTipo: string
    dataCriacao?: Date | string
    status?: $Enums.StatusAtendimento
    logradouro: string
    numero: string
    complemento?: string | null
    bairro: string
    cidade: string
    estado: string
    cep: string
    fila?: FilaAtendimentoCreateNestedOneWithoutAtendimentoInput
    processo?: ProcessoCreateNestedOneWithoutAtendimentoInput
    formularios?: FormularioPreenchidoCreateNestedManyWithoutAtendimentoInput
    documentos?: DocumentoCreateNestedManyWithoutAtendimentoInput
  }

  export type AtendimentoUncheckedCreateWithoutOperadorInput = {
    id?: string
    nomeCompleto: string
    nomeSocial?: string | null
    cpf: string
    dataNascimento: string
    telefone: string
    email?: string | null
    tipoAtendimento: string
    capacidadeCivil?: string | null
    estadoCivil?: string | null
    profissao?: string | null
    tipoDomicilio?: string | null
    descricaoDomicilio?: string | null
    membrosFamiliares?: string | null
    rendaFamiliar?: string | null
    tipoDemanda?: string | null
    descricaoAtendimento: string
    observacoes?: string | null
    formId: string
    formTipo: string
    dataCriacao?: Date | string
    status?: $Enums.StatusAtendimento
    logradouro: string
    numero: string
    complemento?: string | null
    bairro: string
    cidade: string
    estado: string
    cep: string
    filaId?: string | null
    processo?: ProcessoUncheckedCreateNestedOneWithoutAtendimentoInput
    formularios?: FormularioPreenchidoUncheckedCreateNestedManyWithoutAtendimentoInput
    documentos?: DocumentoUncheckedCreateNestedManyWithoutAtendimentoInput
  }

  export type AtendimentoCreateOrConnectWithoutOperadorInput = {
    where: AtendimentoWhereUniqueInput
    create: XOR<AtendimentoCreateWithoutOperadorInput, AtendimentoUncheckedCreateWithoutOperadorInput>
  }

  export type AtendimentoCreateManyOperadorInputEnvelope = {
    data: AtendimentoCreateManyOperadorInput | AtendimentoCreateManyOperadorInput[]
    skipDuplicates?: boolean
  }

  export type FilaAtendimentoCreateWithoutOperadorTriagemInput = {
    id?: string
    nomeCompleto: string
    nomeSocial?: string | null
    cpf: string
    telefone: string
    isPrioridade?: boolean
    status: $Enums.StatusFilaAtendimento
    dataEntrada?: Date | string
    dataInicio?: Date | string | null
    dataFim?: Date | string | null
    operadorAtendimento?: UserCreateNestedOneWithoutAtendimentosEmAndamentoInput
    atendimento?: AtendimentoCreateNestedOneWithoutFilaInput
  }

  export type FilaAtendimentoUncheckedCreateWithoutOperadorTriagemInput = {
    id?: string
    nomeCompleto: string
    nomeSocial?: string | null
    cpf: string
    telefone: string
    isPrioridade?: boolean
    status: $Enums.StatusFilaAtendimento
    dataEntrada?: Date | string
    dataInicio?: Date | string | null
    dataFim?: Date | string | null
    operadorAtendimentoId?: string | null
    atendimento?: AtendimentoUncheckedCreateNestedOneWithoutFilaInput
  }

  export type FilaAtendimentoCreateOrConnectWithoutOperadorTriagemInput = {
    where: FilaAtendimentoWhereUniqueInput
    create: XOR<FilaAtendimentoCreateWithoutOperadorTriagemInput, FilaAtendimentoUncheckedCreateWithoutOperadorTriagemInput>
  }

  export type FilaAtendimentoCreateManyOperadorTriagemInputEnvelope = {
    data: FilaAtendimentoCreateManyOperadorTriagemInput | FilaAtendimentoCreateManyOperadorTriagemInput[]
    skipDuplicates?: boolean
  }

  export type FilaAtendimentoCreateWithoutOperadorAtendimentoInput = {
    id?: string
    nomeCompleto: string
    nomeSocial?: string | null
    cpf: string
    telefone: string
    isPrioridade?: boolean
    status: $Enums.StatusFilaAtendimento
    dataEntrada?: Date | string
    dataInicio?: Date | string | null
    dataFim?: Date | string | null
    operadorTriagem: UserCreateNestedOneWithoutAtendimentosTriagemInput
    atendimento?: AtendimentoCreateNestedOneWithoutFilaInput
  }

  export type FilaAtendimentoUncheckedCreateWithoutOperadorAtendimentoInput = {
    id?: string
    nomeCompleto: string
    nomeSocial?: string | null
    cpf: string
    telefone: string
    isPrioridade?: boolean
    status: $Enums.StatusFilaAtendimento
    dataEntrada?: Date | string
    dataInicio?: Date | string | null
    dataFim?: Date | string | null
    operadorTriagemId: string
    atendimento?: AtendimentoUncheckedCreateNestedOneWithoutFilaInput
  }

  export type FilaAtendimentoCreateOrConnectWithoutOperadorAtendimentoInput = {
    where: FilaAtendimentoWhereUniqueInput
    create: XOR<FilaAtendimentoCreateWithoutOperadorAtendimentoInput, FilaAtendimentoUncheckedCreateWithoutOperadorAtendimentoInput>
  }

  export type FilaAtendimentoCreateManyOperadorAtendimentoInputEnvelope = {
    data: FilaAtendimentoCreateManyOperadorAtendimentoInput | FilaAtendimentoCreateManyOperadorAtendimentoInput[]
    skipDuplicates?: boolean
  }

  export type DocumentoCreateWithoutOperadorUploadInput = {
    id?: string
    nomeOriginal: string
    nomeArmazenamento: string
    tipo: string
    tamanho: number
    caminho: string
    tipoDocumento: $Enums.TipoDocumento
    dataCriacao?: Date | string
    atendimento: AtendimentoCreateNestedOneWithoutDocumentosInput
  }

  export type DocumentoUncheckedCreateWithoutOperadorUploadInput = {
    id?: string
    nomeOriginal: string
    nomeArmazenamento: string
    tipo: string
    tamanho: number
    caminho: string
    tipoDocumento: $Enums.TipoDocumento
    dataCriacao?: Date | string
    atendimentoId: string
  }

  export type DocumentoCreateOrConnectWithoutOperadorUploadInput = {
    where: DocumentoWhereUniqueInput
    create: XOR<DocumentoCreateWithoutOperadorUploadInput, DocumentoUncheckedCreateWithoutOperadorUploadInput>
  }

  export type DocumentoCreateManyOperadorUploadInputEnvelope = {
    data: DocumentoCreateManyOperadorUploadInput | DocumentoCreateManyOperadorUploadInput[]
    skipDuplicates?: boolean
  }

  export type AtendimentoUpsertWithWhereUniqueWithoutOperadorInput = {
    where: AtendimentoWhereUniqueInput
    update: XOR<AtendimentoUpdateWithoutOperadorInput, AtendimentoUncheckedUpdateWithoutOperadorInput>
    create: XOR<AtendimentoCreateWithoutOperadorInput, AtendimentoUncheckedCreateWithoutOperadorInput>
  }

  export type AtendimentoUpdateWithWhereUniqueWithoutOperadorInput = {
    where: AtendimentoWhereUniqueInput
    data: XOR<AtendimentoUpdateWithoutOperadorInput, AtendimentoUncheckedUpdateWithoutOperadorInput>
  }

  export type AtendimentoUpdateManyWithWhereWithoutOperadorInput = {
    where: AtendimentoScalarWhereInput
    data: XOR<AtendimentoUpdateManyMutationInput, AtendimentoUncheckedUpdateManyWithoutOperadorInput>
  }

  export type AtendimentoScalarWhereInput = {
    AND?: AtendimentoScalarWhereInput | AtendimentoScalarWhereInput[]
    OR?: AtendimentoScalarWhereInput[]
    NOT?: AtendimentoScalarWhereInput | AtendimentoScalarWhereInput[]
    id?: StringFilter<"Atendimento"> | string
    nomeCompleto?: StringFilter<"Atendimento"> | string
    nomeSocial?: StringNullableFilter<"Atendimento"> | string | null
    cpf?: StringFilter<"Atendimento"> | string
    dataNascimento?: StringFilter<"Atendimento"> | string
    telefone?: StringFilter<"Atendimento"> | string
    email?: StringNullableFilter<"Atendimento"> | string | null
    tipoAtendimento?: StringFilter<"Atendimento"> | string
    capacidadeCivil?: StringNullableFilter<"Atendimento"> | string | null
    estadoCivil?: StringNullableFilter<"Atendimento"> | string | null
    profissao?: StringNullableFilter<"Atendimento"> | string | null
    tipoDomicilio?: StringNullableFilter<"Atendimento"> | string | null
    descricaoDomicilio?: StringNullableFilter<"Atendimento"> | string | null
    membrosFamiliares?: StringNullableFilter<"Atendimento"> | string | null
    rendaFamiliar?: StringNullableFilter<"Atendimento"> | string | null
    tipoDemanda?: StringNullableFilter<"Atendimento"> | string | null
    descricaoAtendimento?: StringFilter<"Atendimento"> | string
    observacoes?: StringNullableFilter<"Atendimento"> | string | null
    formId?: StringFilter<"Atendimento"> | string
    formTipo?: StringFilter<"Atendimento"> | string
    dataCriacao?: DateTimeFilter<"Atendimento"> | Date | string
    status?: EnumStatusAtendimentoFilter<"Atendimento"> | $Enums.StatusAtendimento
    logradouro?: StringFilter<"Atendimento"> | string
    numero?: StringFilter<"Atendimento"> | string
    complemento?: StringNullableFilter<"Atendimento"> | string | null
    bairro?: StringFilter<"Atendimento"> | string
    cidade?: StringFilter<"Atendimento"> | string
    estado?: StringFilter<"Atendimento"> | string
    cep?: StringFilter<"Atendimento"> | string
    operadorId?: StringFilter<"Atendimento"> | string
    filaId?: StringNullableFilter<"Atendimento"> | string | null
  }

  export type FilaAtendimentoUpsertWithWhereUniqueWithoutOperadorTriagemInput = {
    where: FilaAtendimentoWhereUniqueInput
    update: XOR<FilaAtendimentoUpdateWithoutOperadorTriagemInput, FilaAtendimentoUncheckedUpdateWithoutOperadorTriagemInput>
    create: XOR<FilaAtendimentoCreateWithoutOperadorTriagemInput, FilaAtendimentoUncheckedCreateWithoutOperadorTriagemInput>
  }

  export type FilaAtendimentoUpdateWithWhereUniqueWithoutOperadorTriagemInput = {
    where: FilaAtendimentoWhereUniqueInput
    data: XOR<FilaAtendimentoUpdateWithoutOperadorTriagemInput, FilaAtendimentoUncheckedUpdateWithoutOperadorTriagemInput>
  }

  export type FilaAtendimentoUpdateManyWithWhereWithoutOperadorTriagemInput = {
    where: FilaAtendimentoScalarWhereInput
    data: XOR<FilaAtendimentoUpdateManyMutationInput, FilaAtendimentoUncheckedUpdateManyWithoutOperadorTriagemInput>
  }

  export type FilaAtendimentoScalarWhereInput = {
    AND?: FilaAtendimentoScalarWhereInput | FilaAtendimentoScalarWhereInput[]
    OR?: FilaAtendimentoScalarWhereInput[]
    NOT?: FilaAtendimentoScalarWhereInput | FilaAtendimentoScalarWhereInput[]
    id?: StringFilter<"FilaAtendimento"> | string
    nomeCompleto?: StringFilter<"FilaAtendimento"> | string
    nomeSocial?: StringNullableFilter<"FilaAtendimento"> | string | null
    cpf?: StringFilter<"FilaAtendimento"> | string
    telefone?: StringFilter<"FilaAtendimento"> | string
    isPrioridade?: BoolFilter<"FilaAtendimento"> | boolean
    status?: EnumStatusFilaAtendimentoFilter<"FilaAtendimento"> | $Enums.StatusFilaAtendimento
    dataEntrada?: DateTimeFilter<"FilaAtendimento"> | Date | string
    dataInicio?: DateTimeNullableFilter<"FilaAtendimento"> | Date | string | null
    dataFim?: DateTimeNullableFilter<"FilaAtendimento"> | Date | string | null
    operadorTriagemId?: StringFilter<"FilaAtendimento"> | string
    operadorAtendimentoId?: StringNullableFilter<"FilaAtendimento"> | string | null
  }

  export type FilaAtendimentoUpsertWithWhereUniqueWithoutOperadorAtendimentoInput = {
    where: FilaAtendimentoWhereUniqueInput
    update: XOR<FilaAtendimentoUpdateWithoutOperadorAtendimentoInput, FilaAtendimentoUncheckedUpdateWithoutOperadorAtendimentoInput>
    create: XOR<FilaAtendimentoCreateWithoutOperadorAtendimentoInput, FilaAtendimentoUncheckedCreateWithoutOperadorAtendimentoInput>
  }

  export type FilaAtendimentoUpdateWithWhereUniqueWithoutOperadorAtendimentoInput = {
    where: FilaAtendimentoWhereUniqueInput
    data: XOR<FilaAtendimentoUpdateWithoutOperadorAtendimentoInput, FilaAtendimentoUncheckedUpdateWithoutOperadorAtendimentoInput>
  }

  export type FilaAtendimentoUpdateManyWithWhereWithoutOperadorAtendimentoInput = {
    where: FilaAtendimentoScalarWhereInput
    data: XOR<FilaAtendimentoUpdateManyMutationInput, FilaAtendimentoUncheckedUpdateManyWithoutOperadorAtendimentoInput>
  }

  export type DocumentoUpsertWithWhereUniqueWithoutOperadorUploadInput = {
    where: DocumentoWhereUniqueInput
    update: XOR<DocumentoUpdateWithoutOperadorUploadInput, DocumentoUncheckedUpdateWithoutOperadorUploadInput>
    create: XOR<DocumentoCreateWithoutOperadorUploadInput, DocumentoUncheckedCreateWithoutOperadorUploadInput>
  }

  export type DocumentoUpdateWithWhereUniqueWithoutOperadorUploadInput = {
    where: DocumentoWhereUniqueInput
    data: XOR<DocumentoUpdateWithoutOperadorUploadInput, DocumentoUncheckedUpdateWithoutOperadorUploadInput>
  }

  export type DocumentoUpdateManyWithWhereWithoutOperadorUploadInput = {
    where: DocumentoScalarWhereInput
    data: XOR<DocumentoUpdateManyMutationInput, DocumentoUncheckedUpdateManyWithoutOperadorUploadInput>
  }

  export type DocumentoScalarWhereInput = {
    AND?: DocumentoScalarWhereInput | DocumentoScalarWhereInput[]
    OR?: DocumentoScalarWhereInput[]
    NOT?: DocumentoScalarWhereInput | DocumentoScalarWhereInput[]
    id?: StringFilter<"Documento"> | string
    nomeOriginal?: StringFilter<"Documento"> | string
    nomeArmazenamento?: StringFilter<"Documento"> | string
    tipo?: StringFilter<"Documento"> | string
    tamanho?: IntFilter<"Documento"> | number
    caminho?: StringFilter<"Documento"> | string
    tipoDocumento?: EnumTipoDocumentoFilter<"Documento"> | $Enums.TipoDocumento
    dataCriacao?: DateTimeFilter<"Documento"> | Date | string
    atendimentoId?: StringFilter<"Documento"> | string
    operadorUploadId?: StringFilter<"Documento"> | string
  }

  export type UserCreateWithoutAtendimentosTriagemInput = {
    id?: string
    email: string
    nome: string
    senha: string
    role?: $Enums.Role
    aprovado?: boolean
    dataCadastro?: Date | string
    atendimentosRealizados?: AtendimentoCreateNestedManyWithoutOperadorInput
    atendimentosEmAndamento?: FilaAtendimentoCreateNestedManyWithoutOperadorAtendimentoInput
    documentosUploadOperador?: DocumentoCreateNestedManyWithoutOperadorUploadInput
  }

  export type UserUncheckedCreateWithoutAtendimentosTriagemInput = {
    id?: string
    email: string
    nome: string
    senha: string
    role?: $Enums.Role
    aprovado?: boolean
    dataCadastro?: Date | string
    atendimentosRealizados?: AtendimentoUncheckedCreateNestedManyWithoutOperadorInput
    atendimentosEmAndamento?: FilaAtendimentoUncheckedCreateNestedManyWithoutOperadorAtendimentoInput
    documentosUploadOperador?: DocumentoUncheckedCreateNestedManyWithoutOperadorUploadInput
  }

  export type UserCreateOrConnectWithoutAtendimentosTriagemInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAtendimentosTriagemInput, UserUncheckedCreateWithoutAtendimentosTriagemInput>
  }

  export type UserCreateWithoutAtendimentosEmAndamentoInput = {
    id?: string
    email: string
    nome: string
    senha: string
    role?: $Enums.Role
    aprovado?: boolean
    dataCadastro?: Date | string
    atendimentosRealizados?: AtendimentoCreateNestedManyWithoutOperadorInput
    atendimentosTriagem?: FilaAtendimentoCreateNestedManyWithoutOperadorTriagemInput
    documentosUploadOperador?: DocumentoCreateNestedManyWithoutOperadorUploadInput
  }

  export type UserUncheckedCreateWithoutAtendimentosEmAndamentoInput = {
    id?: string
    email: string
    nome: string
    senha: string
    role?: $Enums.Role
    aprovado?: boolean
    dataCadastro?: Date | string
    atendimentosRealizados?: AtendimentoUncheckedCreateNestedManyWithoutOperadorInput
    atendimentosTriagem?: FilaAtendimentoUncheckedCreateNestedManyWithoutOperadorTriagemInput
    documentosUploadOperador?: DocumentoUncheckedCreateNestedManyWithoutOperadorUploadInput
  }

  export type UserCreateOrConnectWithoutAtendimentosEmAndamentoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAtendimentosEmAndamentoInput, UserUncheckedCreateWithoutAtendimentosEmAndamentoInput>
  }

  export type AtendimentoCreateWithoutFilaInput = {
    id?: string
    nomeCompleto: string
    nomeSocial?: string | null
    cpf: string
    dataNascimento: string
    telefone: string
    email?: string | null
    tipoAtendimento: string
    capacidadeCivil?: string | null
    estadoCivil?: string | null
    profissao?: string | null
    tipoDomicilio?: string | null
    descricaoDomicilio?: string | null
    membrosFamiliares?: string | null
    rendaFamiliar?: string | null
    tipoDemanda?: string | null
    descricaoAtendimento: string
    observacoes?: string | null
    formId: string
    formTipo: string
    dataCriacao?: Date | string
    status?: $Enums.StatusAtendimento
    logradouro: string
    numero: string
    complemento?: string | null
    bairro: string
    cidade: string
    estado: string
    cep: string
    operador: UserCreateNestedOneWithoutAtendimentosRealizadosInput
    processo?: ProcessoCreateNestedOneWithoutAtendimentoInput
    formularios?: FormularioPreenchidoCreateNestedManyWithoutAtendimentoInput
    documentos?: DocumentoCreateNestedManyWithoutAtendimentoInput
  }

  export type AtendimentoUncheckedCreateWithoutFilaInput = {
    id?: string
    nomeCompleto: string
    nomeSocial?: string | null
    cpf: string
    dataNascimento: string
    telefone: string
    email?: string | null
    tipoAtendimento: string
    capacidadeCivil?: string | null
    estadoCivil?: string | null
    profissao?: string | null
    tipoDomicilio?: string | null
    descricaoDomicilio?: string | null
    membrosFamiliares?: string | null
    rendaFamiliar?: string | null
    tipoDemanda?: string | null
    descricaoAtendimento: string
    observacoes?: string | null
    formId: string
    formTipo: string
    dataCriacao?: Date | string
    status?: $Enums.StatusAtendimento
    logradouro: string
    numero: string
    complemento?: string | null
    bairro: string
    cidade: string
    estado: string
    cep: string
    operadorId: string
    processo?: ProcessoUncheckedCreateNestedOneWithoutAtendimentoInput
    formularios?: FormularioPreenchidoUncheckedCreateNestedManyWithoutAtendimentoInput
    documentos?: DocumentoUncheckedCreateNestedManyWithoutAtendimentoInput
  }

  export type AtendimentoCreateOrConnectWithoutFilaInput = {
    where: AtendimentoWhereUniqueInput
    create: XOR<AtendimentoCreateWithoutFilaInput, AtendimentoUncheckedCreateWithoutFilaInput>
  }

  export type UserUpsertWithoutAtendimentosTriagemInput = {
    update: XOR<UserUpdateWithoutAtendimentosTriagemInput, UserUncheckedUpdateWithoutAtendimentosTriagemInput>
    create: XOR<UserCreateWithoutAtendimentosTriagemInput, UserUncheckedCreateWithoutAtendimentosTriagemInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAtendimentosTriagemInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAtendimentosTriagemInput, UserUncheckedUpdateWithoutAtendimentosTriagemInput>
  }

  export type UserUpdateWithoutAtendimentosTriagemInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    aprovado?: BoolFieldUpdateOperationsInput | boolean
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimentosRealizados?: AtendimentoUpdateManyWithoutOperadorNestedInput
    atendimentosEmAndamento?: FilaAtendimentoUpdateManyWithoutOperadorAtendimentoNestedInput
    documentosUploadOperador?: DocumentoUpdateManyWithoutOperadorUploadNestedInput
  }

  export type UserUncheckedUpdateWithoutAtendimentosTriagemInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    aprovado?: BoolFieldUpdateOperationsInput | boolean
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimentosRealizados?: AtendimentoUncheckedUpdateManyWithoutOperadorNestedInput
    atendimentosEmAndamento?: FilaAtendimentoUncheckedUpdateManyWithoutOperadorAtendimentoNestedInput
    documentosUploadOperador?: DocumentoUncheckedUpdateManyWithoutOperadorUploadNestedInput
  }

  export type UserUpsertWithoutAtendimentosEmAndamentoInput = {
    update: XOR<UserUpdateWithoutAtendimentosEmAndamentoInput, UserUncheckedUpdateWithoutAtendimentosEmAndamentoInput>
    create: XOR<UserCreateWithoutAtendimentosEmAndamentoInput, UserUncheckedCreateWithoutAtendimentosEmAndamentoInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAtendimentosEmAndamentoInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAtendimentosEmAndamentoInput, UserUncheckedUpdateWithoutAtendimentosEmAndamentoInput>
  }

  export type UserUpdateWithoutAtendimentosEmAndamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    aprovado?: BoolFieldUpdateOperationsInput | boolean
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimentosRealizados?: AtendimentoUpdateManyWithoutOperadorNestedInput
    atendimentosTriagem?: FilaAtendimentoUpdateManyWithoutOperadorTriagemNestedInput
    documentosUploadOperador?: DocumentoUpdateManyWithoutOperadorUploadNestedInput
  }

  export type UserUncheckedUpdateWithoutAtendimentosEmAndamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    aprovado?: BoolFieldUpdateOperationsInput | boolean
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimentosRealizados?: AtendimentoUncheckedUpdateManyWithoutOperadorNestedInput
    atendimentosTriagem?: FilaAtendimentoUncheckedUpdateManyWithoutOperadorTriagemNestedInput
    documentosUploadOperador?: DocumentoUncheckedUpdateManyWithoutOperadorUploadNestedInput
  }

  export type AtendimentoUpsertWithoutFilaInput = {
    update: XOR<AtendimentoUpdateWithoutFilaInput, AtendimentoUncheckedUpdateWithoutFilaInput>
    create: XOR<AtendimentoCreateWithoutFilaInput, AtendimentoUncheckedCreateWithoutFilaInput>
    where?: AtendimentoWhereInput
  }

  export type AtendimentoUpdateToOneWithWhereWithoutFilaInput = {
    where?: AtendimentoWhereInput
    data: XOR<AtendimentoUpdateWithoutFilaInput, AtendimentoUncheckedUpdateWithoutFilaInput>
  }

  export type AtendimentoUpdateWithoutFilaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    dataNascimento?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAtendimento?: StringFieldUpdateOperationsInput | string
    capacidadeCivil?: NullableStringFieldUpdateOperationsInput | string | null
    estadoCivil?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    membrosFamiliares?: NullableStringFieldUpdateOperationsInput | string | null
    rendaFamiliar?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDemanda?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoAtendimento?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    formId?: StringFieldUpdateOperationsInput | string
    formTipo?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAtendimentoFieldUpdateOperationsInput | $Enums.StatusAtendimento
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    operador?: UserUpdateOneRequiredWithoutAtendimentosRealizadosNestedInput
    processo?: ProcessoUpdateOneWithoutAtendimentoNestedInput
    formularios?: FormularioPreenchidoUpdateManyWithoutAtendimentoNestedInput
    documentos?: DocumentoUpdateManyWithoutAtendimentoNestedInput
  }

  export type AtendimentoUncheckedUpdateWithoutFilaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    dataNascimento?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAtendimento?: StringFieldUpdateOperationsInput | string
    capacidadeCivil?: NullableStringFieldUpdateOperationsInput | string | null
    estadoCivil?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    membrosFamiliares?: NullableStringFieldUpdateOperationsInput | string | null
    rendaFamiliar?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDemanda?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoAtendimento?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    formId?: StringFieldUpdateOperationsInput | string
    formTipo?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAtendimentoFieldUpdateOperationsInput | $Enums.StatusAtendimento
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    operadorId?: StringFieldUpdateOperationsInput | string
    processo?: ProcessoUncheckedUpdateOneWithoutAtendimentoNestedInput
    formularios?: FormularioPreenchidoUncheckedUpdateManyWithoutAtendimentoNestedInput
    documentos?: DocumentoUncheckedUpdateManyWithoutAtendimentoNestedInput
  }

  export type UserCreateWithoutAtendimentosRealizadosInput = {
    id?: string
    email: string
    nome: string
    senha: string
    role?: $Enums.Role
    aprovado?: boolean
    dataCadastro?: Date | string
    atendimentosTriagem?: FilaAtendimentoCreateNestedManyWithoutOperadorTriagemInput
    atendimentosEmAndamento?: FilaAtendimentoCreateNestedManyWithoutOperadorAtendimentoInput
    documentosUploadOperador?: DocumentoCreateNestedManyWithoutOperadorUploadInput
  }

  export type UserUncheckedCreateWithoutAtendimentosRealizadosInput = {
    id?: string
    email: string
    nome: string
    senha: string
    role?: $Enums.Role
    aprovado?: boolean
    dataCadastro?: Date | string
    atendimentosTriagem?: FilaAtendimentoUncheckedCreateNestedManyWithoutOperadorTriagemInput
    atendimentosEmAndamento?: FilaAtendimentoUncheckedCreateNestedManyWithoutOperadorAtendimentoInput
    documentosUploadOperador?: DocumentoUncheckedCreateNestedManyWithoutOperadorUploadInput
  }

  export type UserCreateOrConnectWithoutAtendimentosRealizadosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAtendimentosRealizadosInput, UserUncheckedCreateWithoutAtendimentosRealizadosInput>
  }

  export type FilaAtendimentoCreateWithoutAtendimentoInput = {
    id?: string
    nomeCompleto: string
    nomeSocial?: string | null
    cpf: string
    telefone: string
    isPrioridade?: boolean
    status: $Enums.StatusFilaAtendimento
    dataEntrada?: Date | string
    dataInicio?: Date | string | null
    dataFim?: Date | string | null
    operadorTriagem: UserCreateNestedOneWithoutAtendimentosTriagemInput
    operadorAtendimento?: UserCreateNestedOneWithoutAtendimentosEmAndamentoInput
  }

  export type FilaAtendimentoUncheckedCreateWithoutAtendimentoInput = {
    id?: string
    nomeCompleto: string
    nomeSocial?: string | null
    cpf: string
    telefone: string
    isPrioridade?: boolean
    status: $Enums.StatusFilaAtendimento
    dataEntrada?: Date | string
    dataInicio?: Date | string | null
    dataFim?: Date | string | null
    operadorTriagemId: string
    operadorAtendimentoId?: string | null
  }

  export type FilaAtendimentoCreateOrConnectWithoutAtendimentoInput = {
    where: FilaAtendimentoWhereUniqueInput
    create: XOR<FilaAtendimentoCreateWithoutAtendimentoInput, FilaAtendimentoUncheckedCreateWithoutAtendimentoInput>
  }

  export type ProcessoCreateWithoutAtendimentoInput = {
    id?: string
    numeroProcesso: string
    resultado: string
    resultadoDetalhado?: string | null
    valoresAtrasados?: string | null
    beneficios?: string | null
    dataAtualizacao?: Date | string
  }

  export type ProcessoUncheckedCreateWithoutAtendimentoInput = {
    id?: string
    numeroProcesso: string
    resultado: string
    resultadoDetalhado?: string | null
    valoresAtrasados?: string | null
    beneficios?: string | null
    dataAtualizacao?: Date | string
  }

  export type ProcessoCreateOrConnectWithoutAtendimentoInput = {
    where: ProcessoWhereUniqueInput
    create: XOR<ProcessoCreateWithoutAtendimentoInput, ProcessoUncheckedCreateWithoutAtendimentoInput>
  }

  export type FormularioPreenchidoCreateWithoutAtendimentoInput = {
    id?: string
    tipoFormulario: $Enums.TipoFormulario
    dadosFormulario: JsonNullValueInput | InputJsonValue
    dataCriacao?: Date | string
  }

  export type FormularioPreenchidoUncheckedCreateWithoutAtendimentoInput = {
    id?: string
    tipoFormulario: $Enums.TipoFormulario
    dadosFormulario: JsonNullValueInput | InputJsonValue
    dataCriacao?: Date | string
  }

  export type FormularioPreenchidoCreateOrConnectWithoutAtendimentoInput = {
    where: FormularioPreenchidoWhereUniqueInput
    create: XOR<FormularioPreenchidoCreateWithoutAtendimentoInput, FormularioPreenchidoUncheckedCreateWithoutAtendimentoInput>
  }

  export type FormularioPreenchidoCreateManyAtendimentoInputEnvelope = {
    data: FormularioPreenchidoCreateManyAtendimentoInput | FormularioPreenchidoCreateManyAtendimentoInput[]
    skipDuplicates?: boolean
  }

  export type DocumentoCreateWithoutAtendimentoInput = {
    id?: string
    nomeOriginal: string
    nomeArmazenamento: string
    tipo: string
    tamanho: number
    caminho: string
    tipoDocumento: $Enums.TipoDocumento
    dataCriacao?: Date | string
    operadorUpload: UserCreateNestedOneWithoutDocumentosUploadOperadorInput
  }

  export type DocumentoUncheckedCreateWithoutAtendimentoInput = {
    id?: string
    nomeOriginal: string
    nomeArmazenamento: string
    tipo: string
    tamanho: number
    caminho: string
    tipoDocumento: $Enums.TipoDocumento
    dataCriacao?: Date | string
    operadorUploadId: string
  }

  export type DocumentoCreateOrConnectWithoutAtendimentoInput = {
    where: DocumentoWhereUniqueInput
    create: XOR<DocumentoCreateWithoutAtendimentoInput, DocumentoUncheckedCreateWithoutAtendimentoInput>
  }

  export type DocumentoCreateManyAtendimentoInputEnvelope = {
    data: DocumentoCreateManyAtendimentoInput | DocumentoCreateManyAtendimentoInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAtendimentosRealizadosInput = {
    update: XOR<UserUpdateWithoutAtendimentosRealizadosInput, UserUncheckedUpdateWithoutAtendimentosRealizadosInput>
    create: XOR<UserCreateWithoutAtendimentosRealizadosInput, UserUncheckedCreateWithoutAtendimentosRealizadosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAtendimentosRealizadosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAtendimentosRealizadosInput, UserUncheckedUpdateWithoutAtendimentosRealizadosInput>
  }

  export type UserUpdateWithoutAtendimentosRealizadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    aprovado?: BoolFieldUpdateOperationsInput | boolean
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimentosTriagem?: FilaAtendimentoUpdateManyWithoutOperadorTriagemNestedInput
    atendimentosEmAndamento?: FilaAtendimentoUpdateManyWithoutOperadorAtendimentoNestedInput
    documentosUploadOperador?: DocumentoUpdateManyWithoutOperadorUploadNestedInput
  }

  export type UserUncheckedUpdateWithoutAtendimentosRealizadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    aprovado?: BoolFieldUpdateOperationsInput | boolean
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimentosTriagem?: FilaAtendimentoUncheckedUpdateManyWithoutOperadorTriagemNestedInput
    atendimentosEmAndamento?: FilaAtendimentoUncheckedUpdateManyWithoutOperadorAtendimentoNestedInput
    documentosUploadOperador?: DocumentoUncheckedUpdateManyWithoutOperadorUploadNestedInput
  }

  export type FilaAtendimentoUpsertWithoutAtendimentoInput = {
    update: XOR<FilaAtendimentoUpdateWithoutAtendimentoInput, FilaAtendimentoUncheckedUpdateWithoutAtendimentoInput>
    create: XOR<FilaAtendimentoCreateWithoutAtendimentoInput, FilaAtendimentoUncheckedCreateWithoutAtendimentoInput>
    where?: FilaAtendimentoWhereInput
  }

  export type FilaAtendimentoUpdateToOneWithWhereWithoutAtendimentoInput = {
    where?: FilaAtendimentoWhereInput
    data: XOR<FilaAtendimentoUpdateWithoutAtendimentoInput, FilaAtendimentoUncheckedUpdateWithoutAtendimentoInput>
  }

  export type FilaAtendimentoUpdateWithoutAtendimentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    isPrioridade?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFilaAtendimentoFieldUpdateOperationsInput | $Enums.StatusFilaAtendimento
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    operadorTriagem?: UserUpdateOneRequiredWithoutAtendimentosTriagemNestedInput
    operadorAtendimento?: UserUpdateOneWithoutAtendimentosEmAndamentoNestedInput
  }

  export type FilaAtendimentoUncheckedUpdateWithoutAtendimentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    isPrioridade?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFilaAtendimentoFieldUpdateOperationsInput | $Enums.StatusFilaAtendimento
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    operadorTriagemId?: StringFieldUpdateOperationsInput | string
    operadorAtendimentoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessoUpsertWithoutAtendimentoInput = {
    update: XOR<ProcessoUpdateWithoutAtendimentoInput, ProcessoUncheckedUpdateWithoutAtendimentoInput>
    create: XOR<ProcessoCreateWithoutAtendimentoInput, ProcessoUncheckedCreateWithoutAtendimentoInput>
    where?: ProcessoWhereInput
  }

  export type ProcessoUpdateToOneWithWhereWithoutAtendimentoInput = {
    where?: ProcessoWhereInput
    data: XOR<ProcessoUpdateWithoutAtendimentoInput, ProcessoUncheckedUpdateWithoutAtendimentoInput>
  }

  export type ProcessoUpdateWithoutAtendimentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroProcesso?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    resultadoDetalhado?: NullableStringFieldUpdateOperationsInput | string | null
    valoresAtrasados?: NullableStringFieldUpdateOperationsInput | string | null
    beneficios?: NullableStringFieldUpdateOperationsInput | string | null
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessoUncheckedUpdateWithoutAtendimentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroProcesso?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    resultadoDetalhado?: NullableStringFieldUpdateOperationsInput | string | null
    valoresAtrasados?: NullableStringFieldUpdateOperationsInput | string | null
    beneficios?: NullableStringFieldUpdateOperationsInput | string | null
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormularioPreenchidoUpsertWithWhereUniqueWithoutAtendimentoInput = {
    where: FormularioPreenchidoWhereUniqueInput
    update: XOR<FormularioPreenchidoUpdateWithoutAtendimentoInput, FormularioPreenchidoUncheckedUpdateWithoutAtendimentoInput>
    create: XOR<FormularioPreenchidoCreateWithoutAtendimentoInput, FormularioPreenchidoUncheckedCreateWithoutAtendimentoInput>
  }

  export type FormularioPreenchidoUpdateWithWhereUniqueWithoutAtendimentoInput = {
    where: FormularioPreenchidoWhereUniqueInput
    data: XOR<FormularioPreenchidoUpdateWithoutAtendimentoInput, FormularioPreenchidoUncheckedUpdateWithoutAtendimentoInput>
  }

  export type FormularioPreenchidoUpdateManyWithWhereWithoutAtendimentoInput = {
    where: FormularioPreenchidoScalarWhereInput
    data: XOR<FormularioPreenchidoUpdateManyMutationInput, FormularioPreenchidoUncheckedUpdateManyWithoutAtendimentoInput>
  }

  export type FormularioPreenchidoScalarWhereInput = {
    AND?: FormularioPreenchidoScalarWhereInput | FormularioPreenchidoScalarWhereInput[]
    OR?: FormularioPreenchidoScalarWhereInput[]
    NOT?: FormularioPreenchidoScalarWhereInput | FormularioPreenchidoScalarWhereInput[]
    id?: StringFilter<"FormularioPreenchido"> | string
    tipoFormulario?: EnumTipoFormularioFilter<"FormularioPreenchido"> | $Enums.TipoFormulario
    dadosFormulario?: JsonFilter<"FormularioPreenchido">
    dataCriacao?: DateTimeFilter<"FormularioPreenchido"> | Date | string
    atendimentoId?: StringFilter<"FormularioPreenchido"> | string
  }

  export type DocumentoUpsertWithWhereUniqueWithoutAtendimentoInput = {
    where: DocumentoWhereUniqueInput
    update: XOR<DocumentoUpdateWithoutAtendimentoInput, DocumentoUncheckedUpdateWithoutAtendimentoInput>
    create: XOR<DocumentoCreateWithoutAtendimentoInput, DocumentoUncheckedCreateWithoutAtendimentoInput>
  }

  export type DocumentoUpdateWithWhereUniqueWithoutAtendimentoInput = {
    where: DocumentoWhereUniqueInput
    data: XOR<DocumentoUpdateWithoutAtendimentoInput, DocumentoUncheckedUpdateWithoutAtendimentoInput>
  }

  export type DocumentoUpdateManyWithWhereWithoutAtendimentoInput = {
    where: DocumentoScalarWhereInput
    data: XOR<DocumentoUpdateManyMutationInput, DocumentoUncheckedUpdateManyWithoutAtendimentoInput>
  }

  export type AtendimentoCreateWithoutProcessoInput = {
    id?: string
    nomeCompleto: string
    nomeSocial?: string | null
    cpf: string
    dataNascimento: string
    telefone: string
    email?: string | null
    tipoAtendimento: string
    capacidadeCivil?: string | null
    estadoCivil?: string | null
    profissao?: string | null
    tipoDomicilio?: string | null
    descricaoDomicilio?: string | null
    membrosFamiliares?: string | null
    rendaFamiliar?: string | null
    tipoDemanda?: string | null
    descricaoAtendimento: string
    observacoes?: string | null
    formId: string
    formTipo: string
    dataCriacao?: Date | string
    status?: $Enums.StatusAtendimento
    logradouro: string
    numero: string
    complemento?: string | null
    bairro: string
    cidade: string
    estado: string
    cep: string
    operador: UserCreateNestedOneWithoutAtendimentosRealizadosInput
    fila?: FilaAtendimentoCreateNestedOneWithoutAtendimentoInput
    formularios?: FormularioPreenchidoCreateNestedManyWithoutAtendimentoInput
    documentos?: DocumentoCreateNestedManyWithoutAtendimentoInput
  }

  export type AtendimentoUncheckedCreateWithoutProcessoInput = {
    id?: string
    nomeCompleto: string
    nomeSocial?: string | null
    cpf: string
    dataNascimento: string
    telefone: string
    email?: string | null
    tipoAtendimento: string
    capacidadeCivil?: string | null
    estadoCivil?: string | null
    profissao?: string | null
    tipoDomicilio?: string | null
    descricaoDomicilio?: string | null
    membrosFamiliares?: string | null
    rendaFamiliar?: string | null
    tipoDemanda?: string | null
    descricaoAtendimento: string
    observacoes?: string | null
    formId: string
    formTipo: string
    dataCriacao?: Date | string
    status?: $Enums.StatusAtendimento
    logradouro: string
    numero: string
    complemento?: string | null
    bairro: string
    cidade: string
    estado: string
    cep: string
    operadorId: string
    filaId?: string | null
    formularios?: FormularioPreenchidoUncheckedCreateNestedManyWithoutAtendimentoInput
    documentos?: DocumentoUncheckedCreateNestedManyWithoutAtendimentoInput
  }

  export type AtendimentoCreateOrConnectWithoutProcessoInput = {
    where: AtendimentoWhereUniqueInput
    create: XOR<AtendimentoCreateWithoutProcessoInput, AtendimentoUncheckedCreateWithoutProcessoInput>
  }

  export type AtendimentoUpsertWithoutProcessoInput = {
    update: XOR<AtendimentoUpdateWithoutProcessoInput, AtendimentoUncheckedUpdateWithoutProcessoInput>
    create: XOR<AtendimentoCreateWithoutProcessoInput, AtendimentoUncheckedCreateWithoutProcessoInput>
    where?: AtendimentoWhereInput
  }

  export type AtendimentoUpdateToOneWithWhereWithoutProcessoInput = {
    where?: AtendimentoWhereInput
    data: XOR<AtendimentoUpdateWithoutProcessoInput, AtendimentoUncheckedUpdateWithoutProcessoInput>
  }

  export type AtendimentoUpdateWithoutProcessoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    dataNascimento?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAtendimento?: StringFieldUpdateOperationsInput | string
    capacidadeCivil?: NullableStringFieldUpdateOperationsInput | string | null
    estadoCivil?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    membrosFamiliares?: NullableStringFieldUpdateOperationsInput | string | null
    rendaFamiliar?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDemanda?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoAtendimento?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    formId?: StringFieldUpdateOperationsInput | string
    formTipo?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAtendimentoFieldUpdateOperationsInput | $Enums.StatusAtendimento
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    operador?: UserUpdateOneRequiredWithoutAtendimentosRealizadosNestedInput
    fila?: FilaAtendimentoUpdateOneWithoutAtendimentoNestedInput
    formularios?: FormularioPreenchidoUpdateManyWithoutAtendimentoNestedInput
    documentos?: DocumentoUpdateManyWithoutAtendimentoNestedInput
  }

  export type AtendimentoUncheckedUpdateWithoutProcessoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    dataNascimento?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAtendimento?: StringFieldUpdateOperationsInput | string
    capacidadeCivil?: NullableStringFieldUpdateOperationsInput | string | null
    estadoCivil?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    membrosFamiliares?: NullableStringFieldUpdateOperationsInput | string | null
    rendaFamiliar?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDemanda?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoAtendimento?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    formId?: StringFieldUpdateOperationsInput | string
    formTipo?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAtendimentoFieldUpdateOperationsInput | $Enums.StatusAtendimento
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    operadorId?: StringFieldUpdateOperationsInput | string
    filaId?: NullableStringFieldUpdateOperationsInput | string | null
    formularios?: FormularioPreenchidoUncheckedUpdateManyWithoutAtendimentoNestedInput
    documentos?: DocumentoUncheckedUpdateManyWithoutAtendimentoNestedInput
  }

  export type AtendimentoCreateWithoutFormulariosInput = {
    id?: string
    nomeCompleto: string
    nomeSocial?: string | null
    cpf: string
    dataNascimento: string
    telefone: string
    email?: string | null
    tipoAtendimento: string
    capacidadeCivil?: string | null
    estadoCivil?: string | null
    profissao?: string | null
    tipoDomicilio?: string | null
    descricaoDomicilio?: string | null
    membrosFamiliares?: string | null
    rendaFamiliar?: string | null
    tipoDemanda?: string | null
    descricaoAtendimento: string
    observacoes?: string | null
    formId: string
    formTipo: string
    dataCriacao?: Date | string
    status?: $Enums.StatusAtendimento
    logradouro: string
    numero: string
    complemento?: string | null
    bairro: string
    cidade: string
    estado: string
    cep: string
    operador: UserCreateNestedOneWithoutAtendimentosRealizadosInput
    fila?: FilaAtendimentoCreateNestedOneWithoutAtendimentoInput
    processo?: ProcessoCreateNestedOneWithoutAtendimentoInput
    documentos?: DocumentoCreateNestedManyWithoutAtendimentoInput
  }

  export type AtendimentoUncheckedCreateWithoutFormulariosInput = {
    id?: string
    nomeCompleto: string
    nomeSocial?: string | null
    cpf: string
    dataNascimento: string
    telefone: string
    email?: string | null
    tipoAtendimento: string
    capacidadeCivil?: string | null
    estadoCivil?: string | null
    profissao?: string | null
    tipoDomicilio?: string | null
    descricaoDomicilio?: string | null
    membrosFamiliares?: string | null
    rendaFamiliar?: string | null
    tipoDemanda?: string | null
    descricaoAtendimento: string
    observacoes?: string | null
    formId: string
    formTipo: string
    dataCriacao?: Date | string
    status?: $Enums.StatusAtendimento
    logradouro: string
    numero: string
    complemento?: string | null
    bairro: string
    cidade: string
    estado: string
    cep: string
    operadorId: string
    filaId?: string | null
    processo?: ProcessoUncheckedCreateNestedOneWithoutAtendimentoInput
    documentos?: DocumentoUncheckedCreateNestedManyWithoutAtendimentoInput
  }

  export type AtendimentoCreateOrConnectWithoutFormulariosInput = {
    where: AtendimentoWhereUniqueInput
    create: XOR<AtendimentoCreateWithoutFormulariosInput, AtendimentoUncheckedCreateWithoutFormulariosInput>
  }

  export type AtendimentoUpsertWithoutFormulariosInput = {
    update: XOR<AtendimentoUpdateWithoutFormulariosInput, AtendimentoUncheckedUpdateWithoutFormulariosInput>
    create: XOR<AtendimentoCreateWithoutFormulariosInput, AtendimentoUncheckedCreateWithoutFormulariosInput>
    where?: AtendimentoWhereInput
  }

  export type AtendimentoUpdateToOneWithWhereWithoutFormulariosInput = {
    where?: AtendimentoWhereInput
    data: XOR<AtendimentoUpdateWithoutFormulariosInput, AtendimentoUncheckedUpdateWithoutFormulariosInput>
  }

  export type AtendimentoUpdateWithoutFormulariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    dataNascimento?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAtendimento?: StringFieldUpdateOperationsInput | string
    capacidadeCivil?: NullableStringFieldUpdateOperationsInput | string | null
    estadoCivil?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    membrosFamiliares?: NullableStringFieldUpdateOperationsInput | string | null
    rendaFamiliar?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDemanda?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoAtendimento?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    formId?: StringFieldUpdateOperationsInput | string
    formTipo?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAtendimentoFieldUpdateOperationsInput | $Enums.StatusAtendimento
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    operador?: UserUpdateOneRequiredWithoutAtendimentosRealizadosNestedInput
    fila?: FilaAtendimentoUpdateOneWithoutAtendimentoNestedInput
    processo?: ProcessoUpdateOneWithoutAtendimentoNestedInput
    documentos?: DocumentoUpdateManyWithoutAtendimentoNestedInput
  }

  export type AtendimentoUncheckedUpdateWithoutFormulariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    dataNascimento?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAtendimento?: StringFieldUpdateOperationsInput | string
    capacidadeCivil?: NullableStringFieldUpdateOperationsInput | string | null
    estadoCivil?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    membrosFamiliares?: NullableStringFieldUpdateOperationsInput | string | null
    rendaFamiliar?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDemanda?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoAtendimento?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    formId?: StringFieldUpdateOperationsInput | string
    formTipo?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAtendimentoFieldUpdateOperationsInput | $Enums.StatusAtendimento
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    operadorId?: StringFieldUpdateOperationsInput | string
    filaId?: NullableStringFieldUpdateOperationsInput | string | null
    processo?: ProcessoUncheckedUpdateOneWithoutAtendimentoNestedInput
    documentos?: DocumentoUncheckedUpdateManyWithoutAtendimentoNestedInput
  }

  export type AtendimentoCreateWithoutDocumentosInput = {
    id?: string
    nomeCompleto: string
    nomeSocial?: string | null
    cpf: string
    dataNascimento: string
    telefone: string
    email?: string | null
    tipoAtendimento: string
    capacidadeCivil?: string | null
    estadoCivil?: string | null
    profissao?: string | null
    tipoDomicilio?: string | null
    descricaoDomicilio?: string | null
    membrosFamiliares?: string | null
    rendaFamiliar?: string | null
    tipoDemanda?: string | null
    descricaoAtendimento: string
    observacoes?: string | null
    formId: string
    formTipo: string
    dataCriacao?: Date | string
    status?: $Enums.StatusAtendimento
    logradouro: string
    numero: string
    complemento?: string | null
    bairro: string
    cidade: string
    estado: string
    cep: string
    operador: UserCreateNestedOneWithoutAtendimentosRealizadosInput
    fila?: FilaAtendimentoCreateNestedOneWithoutAtendimentoInput
    processo?: ProcessoCreateNestedOneWithoutAtendimentoInput
    formularios?: FormularioPreenchidoCreateNestedManyWithoutAtendimentoInput
  }

  export type AtendimentoUncheckedCreateWithoutDocumentosInput = {
    id?: string
    nomeCompleto: string
    nomeSocial?: string | null
    cpf: string
    dataNascimento: string
    telefone: string
    email?: string | null
    tipoAtendimento: string
    capacidadeCivil?: string | null
    estadoCivil?: string | null
    profissao?: string | null
    tipoDomicilio?: string | null
    descricaoDomicilio?: string | null
    membrosFamiliares?: string | null
    rendaFamiliar?: string | null
    tipoDemanda?: string | null
    descricaoAtendimento: string
    observacoes?: string | null
    formId: string
    formTipo: string
    dataCriacao?: Date | string
    status?: $Enums.StatusAtendimento
    logradouro: string
    numero: string
    complemento?: string | null
    bairro: string
    cidade: string
    estado: string
    cep: string
    operadorId: string
    filaId?: string | null
    processo?: ProcessoUncheckedCreateNestedOneWithoutAtendimentoInput
    formularios?: FormularioPreenchidoUncheckedCreateNestedManyWithoutAtendimentoInput
  }

  export type AtendimentoCreateOrConnectWithoutDocumentosInput = {
    where: AtendimentoWhereUniqueInput
    create: XOR<AtendimentoCreateWithoutDocumentosInput, AtendimentoUncheckedCreateWithoutDocumentosInput>
  }

  export type UserCreateWithoutDocumentosUploadOperadorInput = {
    id?: string
    email: string
    nome: string
    senha: string
    role?: $Enums.Role
    aprovado?: boolean
    dataCadastro?: Date | string
    atendimentosRealizados?: AtendimentoCreateNestedManyWithoutOperadorInput
    atendimentosTriagem?: FilaAtendimentoCreateNestedManyWithoutOperadorTriagemInput
    atendimentosEmAndamento?: FilaAtendimentoCreateNestedManyWithoutOperadorAtendimentoInput
  }

  export type UserUncheckedCreateWithoutDocumentosUploadOperadorInput = {
    id?: string
    email: string
    nome: string
    senha: string
    role?: $Enums.Role
    aprovado?: boolean
    dataCadastro?: Date | string
    atendimentosRealizados?: AtendimentoUncheckedCreateNestedManyWithoutOperadorInput
    atendimentosTriagem?: FilaAtendimentoUncheckedCreateNestedManyWithoutOperadorTriagemInput
    atendimentosEmAndamento?: FilaAtendimentoUncheckedCreateNestedManyWithoutOperadorAtendimentoInput
  }

  export type UserCreateOrConnectWithoutDocumentosUploadOperadorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDocumentosUploadOperadorInput, UserUncheckedCreateWithoutDocumentosUploadOperadorInput>
  }

  export type AtendimentoUpsertWithoutDocumentosInput = {
    update: XOR<AtendimentoUpdateWithoutDocumentosInput, AtendimentoUncheckedUpdateWithoutDocumentosInput>
    create: XOR<AtendimentoCreateWithoutDocumentosInput, AtendimentoUncheckedCreateWithoutDocumentosInput>
    where?: AtendimentoWhereInput
  }

  export type AtendimentoUpdateToOneWithWhereWithoutDocumentosInput = {
    where?: AtendimentoWhereInput
    data: XOR<AtendimentoUpdateWithoutDocumentosInput, AtendimentoUncheckedUpdateWithoutDocumentosInput>
  }

  export type AtendimentoUpdateWithoutDocumentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    dataNascimento?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAtendimento?: StringFieldUpdateOperationsInput | string
    capacidadeCivil?: NullableStringFieldUpdateOperationsInput | string | null
    estadoCivil?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    membrosFamiliares?: NullableStringFieldUpdateOperationsInput | string | null
    rendaFamiliar?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDemanda?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoAtendimento?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    formId?: StringFieldUpdateOperationsInput | string
    formTipo?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAtendimentoFieldUpdateOperationsInput | $Enums.StatusAtendimento
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    operador?: UserUpdateOneRequiredWithoutAtendimentosRealizadosNestedInput
    fila?: FilaAtendimentoUpdateOneWithoutAtendimentoNestedInput
    processo?: ProcessoUpdateOneWithoutAtendimentoNestedInput
    formularios?: FormularioPreenchidoUpdateManyWithoutAtendimentoNestedInput
  }

  export type AtendimentoUncheckedUpdateWithoutDocumentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    dataNascimento?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAtendimento?: StringFieldUpdateOperationsInput | string
    capacidadeCivil?: NullableStringFieldUpdateOperationsInput | string | null
    estadoCivil?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    membrosFamiliares?: NullableStringFieldUpdateOperationsInput | string | null
    rendaFamiliar?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDemanda?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoAtendimento?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    formId?: StringFieldUpdateOperationsInput | string
    formTipo?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAtendimentoFieldUpdateOperationsInput | $Enums.StatusAtendimento
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    operadorId?: StringFieldUpdateOperationsInput | string
    filaId?: NullableStringFieldUpdateOperationsInput | string | null
    processo?: ProcessoUncheckedUpdateOneWithoutAtendimentoNestedInput
    formularios?: FormularioPreenchidoUncheckedUpdateManyWithoutAtendimentoNestedInput
  }

  export type UserUpsertWithoutDocumentosUploadOperadorInput = {
    update: XOR<UserUpdateWithoutDocumentosUploadOperadorInput, UserUncheckedUpdateWithoutDocumentosUploadOperadorInput>
    create: XOR<UserCreateWithoutDocumentosUploadOperadorInput, UserUncheckedCreateWithoutDocumentosUploadOperadorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDocumentosUploadOperadorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDocumentosUploadOperadorInput, UserUncheckedUpdateWithoutDocumentosUploadOperadorInput>
  }

  export type UserUpdateWithoutDocumentosUploadOperadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    aprovado?: BoolFieldUpdateOperationsInput | boolean
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimentosRealizados?: AtendimentoUpdateManyWithoutOperadorNestedInput
    atendimentosTriagem?: FilaAtendimentoUpdateManyWithoutOperadorTriagemNestedInput
    atendimentosEmAndamento?: FilaAtendimentoUpdateManyWithoutOperadorAtendimentoNestedInput
  }

  export type UserUncheckedUpdateWithoutDocumentosUploadOperadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    aprovado?: BoolFieldUpdateOperationsInput | boolean
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimentosRealizados?: AtendimentoUncheckedUpdateManyWithoutOperadorNestedInput
    atendimentosTriagem?: FilaAtendimentoUncheckedUpdateManyWithoutOperadorTriagemNestedInput
    atendimentosEmAndamento?: FilaAtendimentoUncheckedUpdateManyWithoutOperadorAtendimentoNestedInput
  }

  export type AtendimentoCreateManyOperadorInput = {
    id?: string
    nomeCompleto: string
    nomeSocial?: string | null
    cpf: string
    dataNascimento: string
    telefone: string
    email?: string | null
    tipoAtendimento: string
    capacidadeCivil?: string | null
    estadoCivil?: string | null
    profissao?: string | null
    tipoDomicilio?: string | null
    descricaoDomicilio?: string | null
    membrosFamiliares?: string | null
    rendaFamiliar?: string | null
    tipoDemanda?: string | null
    descricaoAtendimento: string
    observacoes?: string | null
    formId: string
    formTipo: string
    dataCriacao?: Date | string
    status?: $Enums.StatusAtendimento
    logradouro: string
    numero: string
    complemento?: string | null
    bairro: string
    cidade: string
    estado: string
    cep: string
    filaId?: string | null
  }

  export type FilaAtendimentoCreateManyOperadorTriagemInput = {
    id?: string
    nomeCompleto: string
    nomeSocial?: string | null
    cpf: string
    telefone: string
    isPrioridade?: boolean
    status: $Enums.StatusFilaAtendimento
    dataEntrada?: Date | string
    dataInicio?: Date | string | null
    dataFim?: Date | string | null
    operadorAtendimentoId?: string | null
  }

  export type FilaAtendimentoCreateManyOperadorAtendimentoInput = {
    id?: string
    nomeCompleto: string
    nomeSocial?: string | null
    cpf: string
    telefone: string
    isPrioridade?: boolean
    status: $Enums.StatusFilaAtendimento
    dataEntrada?: Date | string
    dataInicio?: Date | string | null
    dataFim?: Date | string | null
    operadorTriagemId: string
  }

  export type DocumentoCreateManyOperadorUploadInput = {
    id?: string
    nomeOriginal: string
    nomeArmazenamento: string
    tipo: string
    tamanho: number
    caminho: string
    tipoDocumento: $Enums.TipoDocumento
    dataCriacao?: Date | string
    atendimentoId: string
  }

  export type AtendimentoUpdateWithoutOperadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    dataNascimento?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAtendimento?: StringFieldUpdateOperationsInput | string
    capacidadeCivil?: NullableStringFieldUpdateOperationsInput | string | null
    estadoCivil?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    membrosFamiliares?: NullableStringFieldUpdateOperationsInput | string | null
    rendaFamiliar?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDemanda?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoAtendimento?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    formId?: StringFieldUpdateOperationsInput | string
    formTipo?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAtendimentoFieldUpdateOperationsInput | $Enums.StatusAtendimento
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    fila?: FilaAtendimentoUpdateOneWithoutAtendimentoNestedInput
    processo?: ProcessoUpdateOneWithoutAtendimentoNestedInput
    formularios?: FormularioPreenchidoUpdateManyWithoutAtendimentoNestedInput
    documentos?: DocumentoUpdateManyWithoutAtendimentoNestedInput
  }

  export type AtendimentoUncheckedUpdateWithoutOperadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    dataNascimento?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAtendimento?: StringFieldUpdateOperationsInput | string
    capacidadeCivil?: NullableStringFieldUpdateOperationsInput | string | null
    estadoCivil?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    membrosFamiliares?: NullableStringFieldUpdateOperationsInput | string | null
    rendaFamiliar?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDemanda?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoAtendimento?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    formId?: StringFieldUpdateOperationsInput | string
    formTipo?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAtendimentoFieldUpdateOperationsInput | $Enums.StatusAtendimento
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    filaId?: NullableStringFieldUpdateOperationsInput | string | null
    processo?: ProcessoUncheckedUpdateOneWithoutAtendimentoNestedInput
    formularios?: FormularioPreenchidoUncheckedUpdateManyWithoutAtendimentoNestedInput
    documentos?: DocumentoUncheckedUpdateManyWithoutAtendimentoNestedInput
  }

  export type AtendimentoUncheckedUpdateManyWithoutOperadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    dataNascimento?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAtendimento?: StringFieldUpdateOperationsInput | string
    capacidadeCivil?: NullableStringFieldUpdateOperationsInput | string | null
    estadoCivil?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    membrosFamiliares?: NullableStringFieldUpdateOperationsInput | string | null
    rendaFamiliar?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDemanda?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoAtendimento?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    formId?: StringFieldUpdateOperationsInput | string
    formTipo?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAtendimentoFieldUpdateOperationsInput | $Enums.StatusAtendimento
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    filaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FilaAtendimentoUpdateWithoutOperadorTriagemInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    isPrioridade?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFilaAtendimentoFieldUpdateOperationsInput | $Enums.StatusFilaAtendimento
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    operadorAtendimento?: UserUpdateOneWithoutAtendimentosEmAndamentoNestedInput
    atendimento?: AtendimentoUpdateOneWithoutFilaNestedInput
  }

  export type FilaAtendimentoUncheckedUpdateWithoutOperadorTriagemInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    isPrioridade?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFilaAtendimentoFieldUpdateOperationsInput | $Enums.StatusFilaAtendimento
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    operadorAtendimentoId?: NullableStringFieldUpdateOperationsInput | string | null
    atendimento?: AtendimentoUncheckedUpdateOneWithoutFilaNestedInput
  }

  export type FilaAtendimentoUncheckedUpdateManyWithoutOperadorTriagemInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    isPrioridade?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFilaAtendimentoFieldUpdateOperationsInput | $Enums.StatusFilaAtendimento
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    operadorAtendimentoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FilaAtendimentoUpdateWithoutOperadorAtendimentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    isPrioridade?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFilaAtendimentoFieldUpdateOperationsInput | $Enums.StatusFilaAtendimento
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    operadorTriagem?: UserUpdateOneRequiredWithoutAtendimentosTriagemNestedInput
    atendimento?: AtendimentoUpdateOneWithoutFilaNestedInput
  }

  export type FilaAtendimentoUncheckedUpdateWithoutOperadorAtendimentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    isPrioridade?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFilaAtendimentoFieldUpdateOperationsInput | $Enums.StatusFilaAtendimento
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    operadorTriagemId?: StringFieldUpdateOperationsInput | string
    atendimento?: AtendimentoUncheckedUpdateOneWithoutFilaNestedInput
  }

  export type FilaAtendimentoUncheckedUpdateManyWithoutOperadorAtendimentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    isPrioridade?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFilaAtendimentoFieldUpdateOperationsInput | $Enums.StatusFilaAtendimento
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    operadorTriagemId?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentoUpdateWithoutOperadorUploadInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeOriginal?: StringFieldUpdateOperationsInput | string
    nomeArmazenamento?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    caminho?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimento?: AtendimentoUpdateOneRequiredWithoutDocumentosNestedInput
  }

  export type DocumentoUncheckedUpdateWithoutOperadorUploadInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeOriginal?: StringFieldUpdateOperationsInput | string
    nomeArmazenamento?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    caminho?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimentoId?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentoUncheckedUpdateManyWithoutOperadorUploadInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeOriginal?: StringFieldUpdateOperationsInput | string
    nomeArmazenamento?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    caminho?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimentoId?: StringFieldUpdateOperationsInput | string
  }

  export type FormularioPreenchidoCreateManyAtendimentoInput = {
    id?: string
    tipoFormulario: $Enums.TipoFormulario
    dadosFormulario: JsonNullValueInput | InputJsonValue
    dataCriacao?: Date | string
  }

  export type DocumentoCreateManyAtendimentoInput = {
    id?: string
    nomeOriginal: string
    nomeArmazenamento: string
    tipo: string
    tamanho: number
    caminho: string
    tipoDocumento: $Enums.TipoDocumento
    dataCriacao?: Date | string
    operadorUploadId: string
  }

  export type FormularioPreenchidoUpdateWithoutAtendimentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoFormulario?: EnumTipoFormularioFieldUpdateOperationsInput | $Enums.TipoFormulario
    dadosFormulario?: JsonNullValueInput | InputJsonValue
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormularioPreenchidoUncheckedUpdateWithoutAtendimentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoFormulario?: EnumTipoFormularioFieldUpdateOperationsInput | $Enums.TipoFormulario
    dadosFormulario?: JsonNullValueInput | InputJsonValue
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormularioPreenchidoUncheckedUpdateManyWithoutAtendimentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoFormulario?: EnumTipoFormularioFieldUpdateOperationsInput | $Enums.TipoFormulario
    dadosFormulario?: JsonNullValueInput | InputJsonValue
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentoUpdateWithoutAtendimentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeOriginal?: StringFieldUpdateOperationsInput | string
    nomeArmazenamento?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    caminho?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    operadorUpload?: UserUpdateOneRequiredWithoutDocumentosUploadOperadorNestedInput
  }

  export type DocumentoUncheckedUpdateWithoutAtendimentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeOriginal?: StringFieldUpdateOperationsInput | string
    nomeArmazenamento?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    caminho?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    operadorUploadId?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentoUncheckedUpdateManyWithoutAtendimentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeOriginal?: StringFieldUpdateOperationsInput | string
    nomeArmazenamento?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    caminho?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    operadorUploadId?: StringFieldUpdateOperationsInput | string
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