
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type EscolaPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Escola"
  objects: {
    turmas: TurmaPayload<ExtArgs>[]
    alunos: AlunoPayload<ExtArgs>[]
    usuarios: UsuarioPayload<ExtArgs>[]
    desempenhoHabilidades: DesempenhoHabilidadePayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    nome: string
    regiao: string | null
    grupo: string | null
    endereco: string | null
    telefone: string | null
    email: string | null
    diretor: string | null
    dataCriacao: Date
    dataAtualizacao: Date
  }, ExtArgs["result"]["escola"]>
  composites: {}
}

/**
 * Model Escola
 * 
 */
export type Escola = runtime.Types.DefaultSelection<EscolaPayload>
export type TurmaPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Turma"
  objects: {
    escola: EscolaPayload<ExtArgs>
    alunos: AlunoPayload<ExtArgs>[]
    aplicacoesProva: AplicacaoProvaPayload<ExtArgs>[]
    desempenhoHabilidades: DesempenhoHabilidadePayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    nome: string
    serie: number
    turno: string
    anoLetivo: string
    escolaId: number
    professorResponsavel: string | null
    sala: string | null
    dataCriacao: Date
    dataAtualizacao: Date
  }, ExtArgs["result"]["turma"]>
  composites: {}
}

/**
 * Model Turma
 * 
 */
export type Turma = runtime.Types.DefaultSelection<TurmaPayload>
export type AlunoPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Aluno"
  objects: {
    turma: TurmaPayload<ExtArgs> | null
    escola: EscolaPayload<ExtArgs>
    resultados: ResultadoPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    nome: string
    matricula: string
    dataNascimento: Date | null
    genero: string | null
    responsavel: string | null
    telefoneResponsavel: string | null
    emailResponsavel: string | null
    turmaId: number | null
    escolaId: number
    fotoUrl: string | null
    dataCriacao: Date
    dataAtualizacao: Date
  }, ExtArgs["result"]["aluno"]>
  composites: {}
}

/**
 * Model Aluno
 * 
 */
export type Aluno = runtime.Types.DefaultSelection<AlunoPayload>
export type ProvaPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Prova"
  objects: {
    questoes: QuestaoPayload<ExtArgs>[]
    aplicacoesProva: AplicacaoProvaPayload<ExtArgs>[]
    resultados: ResultadoPayload<ExtArgs>[]
    desempenhoHabilidades: DesempenhoHabilidadePayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    nome: string
    descricao: string | null
    dataAplicacao: Date | null
    tipo: string
    disciplina: string | null
    serie: number | null
    criadoPor: number | null
    dataCriacao: Date
    dataAtualizacao: Date
  }, ExtArgs["result"]["prova"]>
  composites: {}
}

/**
 * Model Prova
 * 
 */
export type Prova = runtime.Types.DefaultSelection<ProvaPayload>
export type QuestaoPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Questao"
  objects: {
    prova: ProvaPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: number
    provaId: number
    ordem: number
    enunciado: string
    tipo: string
    opcoes: Prisma.JsonValue | null
    respostaCorreta: string | null
    valor: Prisma.Decimal
    habilidadeBncc: string | null
    descricaoBncc: string | null
    dataCriacao: Date
    dataAtualizacao: Date
  }, ExtArgs["result"]["questao"]>
  composites: {}
}

/**
 * Model Questao
 * 
 */
export type Questao = runtime.Types.DefaultSelection<QuestaoPayload>
export type AplicacaoProvaPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "AplicacaoProva"
  objects: {
    prova: ProvaPayload<ExtArgs>
    turma: TurmaPayload<ExtArgs>
    resultados: ResultadoPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    provaId: number
    turmaId: number
    dataAplicacao: Date
    horaInicio: Date | null
    horaTermino: Date | null
    observacoes: string | null
    dataCriacao: Date
  }, ExtArgs["result"]["aplicacaoProva"]>
  composites: {}
}

/**
 * Model AplicacaoProva
 * 
 */
export type AplicacaoProva = runtime.Types.DefaultSelection<AplicacaoProvaPayload>
export type ResultadoPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Resultado"
  objects: {
    aluno: AlunoPayload<ExtArgs>
    prova: ProvaPayload<ExtArgs>
    aplicacao: AplicacaoProvaPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: number
    alunoId: number
    provaId: number
    aplicacaoId: number
    respostas: Prisma.JsonValue | null
    pontuacao: Prisma.Decimal | null
    percentual: Prisma.Decimal | null
    dataCorrecao: Date | null
    corrigidoPor: number | null
    observacoes: string | null
    dataCriacao: Date
    dataAtualizacao: Date
  }, ExtArgs["result"]["resultado"]>
  composites: {}
}

/**
 * Model Resultado
 * 
 */
export type Resultado = runtime.Types.DefaultSelection<ResultadoPayload>
export type UsuarioPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Usuario"
  objects: {
    escola: EscolaPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    id: number
    nome: string
    email: string
    senha: string
    tipo: string
    escolaId: number | null
    fotoUrl: string | null
    ultimoAcesso: Date | null
    ativo: boolean
    dataCriacao: Date
    dataAtualizacao: Date
  }, ExtArgs["result"]["usuario"]>
  composites: {}
}

/**
 * Model Usuario
 * 
 */
export type Usuario = runtime.Types.DefaultSelection<UsuarioPayload>
export type HabilidadeBnccPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "HabilidadeBncc"
  objects: {
    desempenhoHabilidades: DesempenhoHabilidadePayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    codigo: string
    componente: string
    ano: string
    descricao: string
    dataCriacao: Date
  }, ExtArgs["result"]["habilidadeBncc"]>
  composites: {}
}

/**
 * Model HabilidadeBncc
 * 
 */
export type HabilidadeBncc = runtime.Types.DefaultSelection<HabilidadeBnccPayload>
export type DesempenhoHabilidadePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "DesempenhoHabilidade"
  objects: {
    habilidade: HabilidadeBnccPayload<ExtArgs>
    escola: EscolaPayload<ExtArgs>
    turma: TurmaPayload<ExtArgs> | null
    prova: ProvaPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    id: number
    habilidadeId: number
    escolaId: number
    turmaId: number | null
    provaId: number | null
    totalQuestoes: number
    totalAcertos: number
    percentualAcertos: Prisma.Decimal
    dataAvaliacao: Date
    anoLetivo: string
    dataCriacao: Date
  }, ExtArgs["result"]["desempenhoHabilidade"]>
  composites: {}
}

/**
 * Model DesempenhoHabilidade
 * 
 */
export type DesempenhoHabilidade = runtime.Types.DefaultSelection<DesempenhoHabilidadePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Escolas
 * const escolas = await prisma.escola.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Escolas
   * const escolas = await prisma.escola.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.escola`: Exposes CRUD operations for the **Escola** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Escolas
    * const escolas = await prisma.escola.findMany()
    * ```
    */
  get escola(): Prisma.EscolaDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.turma`: Exposes CRUD operations for the **Turma** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Turmas
    * const turmas = await prisma.turma.findMany()
    * ```
    */
  get turma(): Prisma.TurmaDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.aluno`: Exposes CRUD operations for the **Aluno** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alunos
    * const alunos = await prisma.aluno.findMany()
    * ```
    */
  get aluno(): Prisma.AlunoDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.prova`: Exposes CRUD operations for the **Prova** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prova
    * const prova = await prisma.prova.findMany()
    * ```
    */
  get prova(): Prisma.ProvaDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.questao`: Exposes CRUD operations for the **Questao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questaos
    * const questaos = await prisma.questao.findMany()
    * ```
    */
  get questao(): Prisma.QuestaoDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.aplicacaoProva`: Exposes CRUD operations for the **AplicacaoProva** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AplicacaoProva
    * const aplicacaoProva = await prisma.aplicacaoProva.findMany()
    * ```
    */
  get aplicacaoProva(): Prisma.AplicacaoProvaDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.resultado`: Exposes CRUD operations for the **Resultado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resultados
    * const resultados = await prisma.resultado.findMany()
    * ```
    */
  get resultado(): Prisma.ResultadoDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.habilidadeBncc`: Exposes CRUD operations for the **HabilidadeBncc** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HabilidadeBnccs
    * const habilidadeBnccs = await prisma.habilidadeBncc.findMany()
    * ```
    */
  get habilidadeBncc(): Prisma.HabilidadeBnccDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.desempenhoHabilidade`: Exposes CRUD operations for the **DesempenhoHabilidade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DesempenhoHabilidades
    * const desempenhoHabilidades = await prisma.desempenhoHabilidade.findMany()
    * ```
    */
  get desempenhoHabilidade(): Prisma.DesempenhoHabilidadeDelegate<GlobalReject, ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 4.16.2
   * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Escola: 'Escola',
    Turma: 'Turma',
    Aluno: 'Aluno',
    Prova: 'Prova',
    Questao: 'Questao',
    AplicacaoProva: 'AplicacaoProva',
    Resultado: 'Resultado',
    Usuario: 'Usuario',
    HabilidadeBncc: 'HabilidadeBncc',
    DesempenhoHabilidade: 'DesempenhoHabilidade'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'escola' | 'turma' | 'aluno' | 'prova' | 'questao' | 'aplicacaoProva' | 'resultado' | 'usuario' | 'habilidadeBncc' | 'desempenhoHabilidade'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Escola: {
        payload: EscolaPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.EscolaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EscolaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EscolaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EscolaPayload>
          }
          findFirst: {
            args: Prisma.EscolaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EscolaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EscolaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EscolaPayload>
          }
          findMany: {
            args: Prisma.EscolaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EscolaPayload>[]
          }
          create: {
            args: Prisma.EscolaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EscolaPayload>
          }
          createMany: {
            args: Prisma.EscolaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EscolaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EscolaPayload>
          }
          update: {
            args: Prisma.EscolaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EscolaPayload>
          }
          deleteMany: {
            args: Prisma.EscolaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EscolaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EscolaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EscolaPayload>
          }
          aggregate: {
            args: Prisma.EscolaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEscola>
          }
          groupBy: {
            args: Prisma.EscolaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EscolaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EscolaCountArgs<ExtArgs>,
            result: $Utils.Optional<EscolaCountAggregateOutputType> | number
          }
        }
      }
      Turma: {
        payload: TurmaPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.TurmaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TurmaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TurmaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TurmaPayload>
          }
          findFirst: {
            args: Prisma.TurmaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TurmaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TurmaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TurmaPayload>
          }
          findMany: {
            args: Prisma.TurmaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TurmaPayload>[]
          }
          create: {
            args: Prisma.TurmaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TurmaPayload>
          }
          createMany: {
            args: Prisma.TurmaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TurmaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TurmaPayload>
          }
          update: {
            args: Prisma.TurmaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TurmaPayload>
          }
          deleteMany: {
            args: Prisma.TurmaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TurmaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TurmaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TurmaPayload>
          }
          aggregate: {
            args: Prisma.TurmaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTurma>
          }
          groupBy: {
            args: Prisma.TurmaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TurmaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TurmaCountArgs<ExtArgs>,
            result: $Utils.Optional<TurmaCountAggregateOutputType> | number
          }
        }
      }
      Aluno: {
        payload: AlunoPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.AlunoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AlunoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlunoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AlunoPayload>
          }
          findFirst: {
            args: Prisma.AlunoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AlunoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlunoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AlunoPayload>
          }
          findMany: {
            args: Prisma.AlunoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AlunoPayload>[]
          }
          create: {
            args: Prisma.AlunoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AlunoPayload>
          }
          createMany: {
            args: Prisma.AlunoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AlunoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AlunoPayload>
          }
          update: {
            args: Prisma.AlunoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AlunoPayload>
          }
          deleteMany: {
            args: Prisma.AlunoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AlunoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AlunoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AlunoPayload>
          }
          aggregate: {
            args: Prisma.AlunoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAluno>
          }
          groupBy: {
            args: Prisma.AlunoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AlunoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlunoCountArgs<ExtArgs>,
            result: $Utils.Optional<AlunoCountAggregateOutputType> | number
          }
        }
      }
      Prova: {
        payload: ProvaPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.ProvaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProvaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProvaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProvaPayload>
          }
          findFirst: {
            args: Prisma.ProvaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProvaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProvaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProvaPayload>
          }
          findMany: {
            args: Prisma.ProvaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProvaPayload>[]
          }
          create: {
            args: Prisma.ProvaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProvaPayload>
          }
          createMany: {
            args: Prisma.ProvaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProvaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProvaPayload>
          }
          update: {
            args: Prisma.ProvaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProvaPayload>
          }
          deleteMany: {
            args: Prisma.ProvaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProvaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProvaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProvaPayload>
          }
          aggregate: {
            args: Prisma.ProvaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProva>
          }
          groupBy: {
            args: Prisma.ProvaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProvaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProvaCountArgs<ExtArgs>,
            result: $Utils.Optional<ProvaCountAggregateOutputType> | number
          }
        }
      }
      Questao: {
        payload: QuestaoPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.QuestaoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<QuestaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestaoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<QuestaoPayload>
          }
          findFirst: {
            args: Prisma.QuestaoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<QuestaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestaoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<QuestaoPayload>
          }
          findMany: {
            args: Prisma.QuestaoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<QuestaoPayload>[]
          }
          create: {
            args: Prisma.QuestaoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<QuestaoPayload>
          }
          createMany: {
            args: Prisma.QuestaoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.QuestaoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<QuestaoPayload>
          }
          update: {
            args: Prisma.QuestaoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<QuestaoPayload>
          }
          deleteMany: {
            args: Prisma.QuestaoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.QuestaoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.QuestaoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<QuestaoPayload>
          }
          aggregate: {
            args: Prisma.QuestaoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateQuestao>
          }
          groupBy: {
            args: Prisma.QuestaoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<QuestaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestaoCountArgs<ExtArgs>,
            result: $Utils.Optional<QuestaoCountAggregateOutputType> | number
          }
        }
      }
      AplicacaoProva: {
        payload: AplicacaoProvaPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.AplicacaoProvaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AplicacaoProvaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AplicacaoProvaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AplicacaoProvaPayload>
          }
          findFirst: {
            args: Prisma.AplicacaoProvaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AplicacaoProvaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AplicacaoProvaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AplicacaoProvaPayload>
          }
          findMany: {
            args: Prisma.AplicacaoProvaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AplicacaoProvaPayload>[]
          }
          create: {
            args: Prisma.AplicacaoProvaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AplicacaoProvaPayload>
          }
          createMany: {
            args: Prisma.AplicacaoProvaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AplicacaoProvaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AplicacaoProvaPayload>
          }
          update: {
            args: Prisma.AplicacaoProvaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AplicacaoProvaPayload>
          }
          deleteMany: {
            args: Prisma.AplicacaoProvaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AplicacaoProvaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AplicacaoProvaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AplicacaoProvaPayload>
          }
          aggregate: {
            args: Prisma.AplicacaoProvaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAplicacaoProva>
          }
          groupBy: {
            args: Prisma.AplicacaoProvaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AplicacaoProvaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AplicacaoProvaCountArgs<ExtArgs>,
            result: $Utils.Optional<AplicacaoProvaCountAggregateOutputType> | number
          }
        }
      }
      Resultado: {
        payload: ResultadoPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.ResultadoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ResultadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResultadoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ResultadoPayload>
          }
          findFirst: {
            args: Prisma.ResultadoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ResultadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResultadoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ResultadoPayload>
          }
          findMany: {
            args: Prisma.ResultadoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ResultadoPayload>[]
          }
          create: {
            args: Prisma.ResultadoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ResultadoPayload>
          }
          createMany: {
            args: Prisma.ResultadoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ResultadoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ResultadoPayload>
          }
          update: {
            args: Prisma.ResultadoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ResultadoPayload>
          }
          deleteMany: {
            args: Prisma.ResultadoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ResultadoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ResultadoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ResultadoPayload>
          }
          aggregate: {
            args: Prisma.ResultadoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateResultado>
          }
          groupBy: {
            args: Prisma.ResultadoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ResultadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResultadoCountArgs<ExtArgs>,
            result: $Utils.Optional<ResultadoCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: UsuarioPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>,
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      HabilidadeBncc: {
        payload: HabilidadeBnccPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.HabilidadeBnccFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HabilidadeBnccPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HabilidadeBnccFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HabilidadeBnccPayload>
          }
          findFirst: {
            args: Prisma.HabilidadeBnccFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HabilidadeBnccPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HabilidadeBnccFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HabilidadeBnccPayload>
          }
          findMany: {
            args: Prisma.HabilidadeBnccFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HabilidadeBnccPayload>[]
          }
          create: {
            args: Prisma.HabilidadeBnccCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HabilidadeBnccPayload>
          }
          createMany: {
            args: Prisma.HabilidadeBnccCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.HabilidadeBnccDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HabilidadeBnccPayload>
          }
          update: {
            args: Prisma.HabilidadeBnccUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HabilidadeBnccPayload>
          }
          deleteMany: {
            args: Prisma.HabilidadeBnccDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.HabilidadeBnccUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.HabilidadeBnccUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HabilidadeBnccPayload>
          }
          aggregate: {
            args: Prisma.HabilidadeBnccAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHabilidadeBncc>
          }
          groupBy: {
            args: Prisma.HabilidadeBnccGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HabilidadeBnccGroupByOutputType>[]
          }
          count: {
            args: Prisma.HabilidadeBnccCountArgs<ExtArgs>,
            result: $Utils.Optional<HabilidadeBnccCountAggregateOutputType> | number
          }
        }
      }
      DesempenhoHabilidade: {
        payload: DesempenhoHabilidadePayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.DesempenhoHabilidadeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DesempenhoHabilidadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DesempenhoHabilidadeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DesempenhoHabilidadePayload>
          }
          findFirst: {
            args: Prisma.DesempenhoHabilidadeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DesempenhoHabilidadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DesempenhoHabilidadeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DesempenhoHabilidadePayload>
          }
          findMany: {
            args: Prisma.DesempenhoHabilidadeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DesempenhoHabilidadePayload>[]
          }
          create: {
            args: Prisma.DesempenhoHabilidadeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DesempenhoHabilidadePayload>
          }
          createMany: {
            args: Prisma.DesempenhoHabilidadeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DesempenhoHabilidadeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DesempenhoHabilidadePayload>
          }
          update: {
            args: Prisma.DesempenhoHabilidadeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DesempenhoHabilidadePayload>
          }
          deleteMany: {
            args: Prisma.DesempenhoHabilidadeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DesempenhoHabilidadeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DesempenhoHabilidadeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DesempenhoHabilidadePayload>
          }
          aggregate: {
            args: Prisma.DesempenhoHabilidadeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDesempenhoHabilidade>
          }
          groupBy: {
            args: Prisma.DesempenhoHabilidadeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DesempenhoHabilidadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DesempenhoHabilidadeCountArgs<ExtArgs>,
            result: $Utils.Optional<DesempenhoHabilidadeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

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
   * Count Type EscolaCountOutputType
   */


  export type EscolaCountOutputType = {
    turmas: number
    alunos: number
    usuarios: number
    desempenhoHabilidades: number
  }

  export type EscolaCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    turmas?: boolean | EscolaCountOutputTypeCountTurmasArgs
    alunos?: boolean | EscolaCountOutputTypeCountAlunosArgs
    usuarios?: boolean | EscolaCountOutputTypeCountUsuariosArgs
    desempenhoHabilidades?: boolean | EscolaCountOutputTypeCountDesempenhoHabilidadesArgs
  }

  // Custom InputTypes

  /**
   * EscolaCountOutputType without action
   */
  export type EscolaCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscolaCountOutputType
     */
    select?: EscolaCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * EscolaCountOutputType without action
   */
  export type EscolaCountOutputTypeCountTurmasArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TurmaWhereInput
  }


  /**
   * EscolaCountOutputType without action
   */
  export type EscolaCountOutputTypeCountAlunosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AlunoWhereInput
  }


  /**
   * EscolaCountOutputType without action
   */
  export type EscolaCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * EscolaCountOutputType without action
   */
  export type EscolaCountOutputTypeCountDesempenhoHabilidadesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DesempenhoHabilidadeWhereInput
  }



  /**
   * Count Type TurmaCountOutputType
   */


  export type TurmaCountOutputType = {
    alunos: number
    aplicacoesProva: number
    desempenhoHabilidades: number
  }

  export type TurmaCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    alunos?: boolean | TurmaCountOutputTypeCountAlunosArgs
    aplicacoesProva?: boolean | TurmaCountOutputTypeCountAplicacoesProvaArgs
    desempenhoHabilidades?: boolean | TurmaCountOutputTypeCountDesempenhoHabilidadesArgs
  }

  // Custom InputTypes

  /**
   * TurmaCountOutputType without action
   */
  export type TurmaCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurmaCountOutputType
     */
    select?: TurmaCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TurmaCountOutputType without action
   */
  export type TurmaCountOutputTypeCountAlunosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AlunoWhereInput
  }


  /**
   * TurmaCountOutputType without action
   */
  export type TurmaCountOutputTypeCountAplicacoesProvaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AplicacaoProvaWhereInput
  }


  /**
   * TurmaCountOutputType without action
   */
  export type TurmaCountOutputTypeCountDesempenhoHabilidadesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DesempenhoHabilidadeWhereInput
  }



  /**
   * Count Type AlunoCountOutputType
   */


  export type AlunoCountOutputType = {
    resultados: number
  }

  export type AlunoCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    resultados?: boolean | AlunoCountOutputTypeCountResultadosArgs
  }

  // Custom InputTypes

  /**
   * AlunoCountOutputType without action
   */
  export type AlunoCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunoCountOutputType
     */
    select?: AlunoCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AlunoCountOutputType without action
   */
  export type AlunoCountOutputTypeCountResultadosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ResultadoWhereInput
  }



  /**
   * Count Type ProvaCountOutputType
   */


  export type ProvaCountOutputType = {
    questoes: number
    aplicacoesProva: number
    resultados: number
    desempenhoHabilidades: number
  }

  export type ProvaCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    questoes?: boolean | ProvaCountOutputTypeCountQuestoesArgs
    aplicacoesProva?: boolean | ProvaCountOutputTypeCountAplicacoesProvaArgs
    resultados?: boolean | ProvaCountOutputTypeCountResultadosArgs
    desempenhoHabilidades?: boolean | ProvaCountOutputTypeCountDesempenhoHabilidadesArgs
  }

  // Custom InputTypes

  /**
   * ProvaCountOutputType without action
   */
  export type ProvaCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProvaCountOutputType
     */
    select?: ProvaCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProvaCountOutputType without action
   */
  export type ProvaCountOutputTypeCountQuestoesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: QuestaoWhereInput
  }


  /**
   * ProvaCountOutputType without action
   */
  export type ProvaCountOutputTypeCountAplicacoesProvaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AplicacaoProvaWhereInput
  }


  /**
   * ProvaCountOutputType without action
   */
  export type ProvaCountOutputTypeCountResultadosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ResultadoWhereInput
  }


  /**
   * ProvaCountOutputType without action
   */
  export type ProvaCountOutputTypeCountDesempenhoHabilidadesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DesempenhoHabilidadeWhereInput
  }



  /**
   * Count Type AplicacaoProvaCountOutputType
   */


  export type AplicacaoProvaCountOutputType = {
    resultados: number
  }

  export type AplicacaoProvaCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    resultados?: boolean | AplicacaoProvaCountOutputTypeCountResultadosArgs
  }

  // Custom InputTypes

  /**
   * AplicacaoProvaCountOutputType without action
   */
  export type AplicacaoProvaCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AplicacaoProvaCountOutputType
     */
    select?: AplicacaoProvaCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AplicacaoProvaCountOutputType without action
   */
  export type AplicacaoProvaCountOutputTypeCountResultadosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ResultadoWhereInput
  }



  /**
   * Count Type HabilidadeBnccCountOutputType
   */


  export type HabilidadeBnccCountOutputType = {
    desempenhoHabilidades: number
  }

  export type HabilidadeBnccCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    desempenhoHabilidades?: boolean | HabilidadeBnccCountOutputTypeCountDesempenhoHabilidadesArgs
  }

  // Custom InputTypes

  /**
   * HabilidadeBnccCountOutputType without action
   */
  export type HabilidadeBnccCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabilidadeBnccCountOutputType
     */
    select?: HabilidadeBnccCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * HabilidadeBnccCountOutputType without action
   */
  export type HabilidadeBnccCountOutputTypeCountDesempenhoHabilidadesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DesempenhoHabilidadeWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Escola
   */


  export type AggregateEscola = {
    _count: EscolaCountAggregateOutputType | null
    _avg: EscolaAvgAggregateOutputType | null
    _sum: EscolaSumAggregateOutputType | null
    _min: EscolaMinAggregateOutputType | null
    _max: EscolaMaxAggregateOutputType | null
  }

  export type EscolaAvgAggregateOutputType = {
    id: number | null
  }

  export type EscolaSumAggregateOutputType = {
    id: number | null
  }

  export type EscolaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    regiao: string | null
    grupo: string | null
    endereco: string | null
    telefone: string | null
    email: string | null
    diretor: string | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
  }

  export type EscolaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    regiao: string | null
    grupo: string | null
    endereco: string | null
    telefone: string | null
    email: string | null
    diretor: string | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
  }

  export type EscolaCountAggregateOutputType = {
    id: number
    nome: number
    regiao: number
    grupo: number
    endereco: number
    telefone: number
    email: number
    diretor: number
    dataCriacao: number
    dataAtualizacao: number
    _all: number
  }


  export type EscolaAvgAggregateInputType = {
    id?: true
  }

  export type EscolaSumAggregateInputType = {
    id?: true
  }

  export type EscolaMinAggregateInputType = {
    id?: true
    nome?: true
    regiao?: true
    grupo?: true
    endereco?: true
    telefone?: true
    email?: true
    diretor?: true
    dataCriacao?: true
    dataAtualizacao?: true
  }

  export type EscolaMaxAggregateInputType = {
    id?: true
    nome?: true
    regiao?: true
    grupo?: true
    endereco?: true
    telefone?: true
    email?: true
    diretor?: true
    dataCriacao?: true
    dataAtualizacao?: true
  }

  export type EscolaCountAggregateInputType = {
    id?: true
    nome?: true
    regiao?: true
    grupo?: true
    endereco?: true
    telefone?: true
    email?: true
    diretor?: true
    dataCriacao?: true
    dataAtualizacao?: true
    _all?: true
  }

  export type EscolaAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Escola to aggregate.
     */
    where?: EscolaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Escolas to fetch.
     */
    orderBy?: Enumerable<EscolaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EscolaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Escolas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Escolas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Escolas
    **/
    _count?: true | EscolaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EscolaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EscolaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EscolaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EscolaMaxAggregateInputType
  }

  export type GetEscolaAggregateType<T extends EscolaAggregateArgs> = {
        [P in keyof T & keyof AggregateEscola]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEscola[P]>
      : GetScalarType<T[P], AggregateEscola[P]>
  }




  export type EscolaGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: EscolaWhereInput
    orderBy?: Enumerable<EscolaOrderByWithAggregationInput>
    by: EscolaScalarFieldEnum[]
    having?: EscolaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EscolaCountAggregateInputType | true
    _avg?: EscolaAvgAggregateInputType
    _sum?: EscolaSumAggregateInputType
    _min?: EscolaMinAggregateInputType
    _max?: EscolaMaxAggregateInputType
  }


  export type EscolaGroupByOutputType = {
    id: number
    nome: string
    regiao: string | null
    grupo: string | null
    endereco: string | null
    telefone: string | null
    email: string | null
    diretor: string | null
    dataCriacao: Date
    dataAtualizacao: Date
    _count: EscolaCountAggregateOutputType | null
    _avg: EscolaAvgAggregateOutputType | null
    _sum: EscolaSumAggregateOutputType | null
    _min: EscolaMinAggregateOutputType | null
    _max: EscolaMaxAggregateOutputType | null
  }

  type GetEscolaGroupByPayload<T extends EscolaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<EscolaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EscolaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EscolaGroupByOutputType[P]>
            : GetScalarType<T[P], EscolaGroupByOutputType[P]>
        }
      >
    >


  export type EscolaSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    regiao?: boolean
    grupo?: boolean
    endereco?: boolean
    telefone?: boolean
    email?: boolean
    diretor?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    turmas?: boolean | Escola$turmasArgs<ExtArgs>
    alunos?: boolean | Escola$alunosArgs<ExtArgs>
    usuarios?: boolean | Escola$usuariosArgs<ExtArgs>
    desempenhoHabilidades?: boolean | Escola$desempenhoHabilidadesArgs<ExtArgs>
    _count?: boolean | EscolaCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["escola"]>

  export type EscolaSelectScalar = {
    id?: boolean
    nome?: boolean
    regiao?: boolean
    grupo?: boolean
    endereco?: boolean
    telefone?: boolean
    email?: boolean
    diretor?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
  }

  export type EscolaInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    turmas?: boolean | Escola$turmasArgs<ExtArgs>
    alunos?: boolean | Escola$alunosArgs<ExtArgs>
    usuarios?: boolean | Escola$usuariosArgs<ExtArgs>
    desempenhoHabilidades?: boolean | Escola$desempenhoHabilidadesArgs<ExtArgs>
    _count?: boolean | EscolaCountOutputTypeArgs<ExtArgs>
  }


  type EscolaGetPayload<S extends boolean | null | undefined | EscolaArgs> = $Types.GetResult<EscolaPayload, S>

  type EscolaCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<EscolaFindManyArgs, 'select' | 'include'> & {
      select?: EscolaCountAggregateInputType | true
    }

  export interface EscolaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Escola'], meta: { name: 'Escola' } }
    /**
     * Find zero or one Escola that matches the filter.
     * @param {EscolaFindUniqueArgs} args - Arguments to find a Escola
     * @example
     * // Get one Escola
     * const escola = await prisma.escola.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EscolaFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EscolaFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Escola'> extends True ? Prisma__EscolaClient<$Types.GetResult<EscolaPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__EscolaClient<$Types.GetResult<EscolaPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Escola that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EscolaFindUniqueOrThrowArgs} args - Arguments to find a Escola
     * @example
     * // Get one Escola
     * const escola = await prisma.escola.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EscolaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EscolaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EscolaClient<$Types.GetResult<EscolaPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Escola that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscolaFindFirstArgs} args - Arguments to find a Escola
     * @example
     * // Get one Escola
     * const escola = await prisma.escola.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EscolaFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EscolaFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Escola'> extends True ? Prisma__EscolaClient<$Types.GetResult<EscolaPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__EscolaClient<$Types.GetResult<EscolaPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Escola that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscolaFindFirstOrThrowArgs} args - Arguments to find a Escola
     * @example
     * // Get one Escola
     * const escola = await prisma.escola.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EscolaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EscolaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EscolaClient<$Types.GetResult<EscolaPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Escolas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscolaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Escolas
     * const escolas = await prisma.escola.findMany()
     * 
     * // Get first 10 Escolas
     * const escolas = await prisma.escola.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const escolaWithIdOnly = await prisma.escola.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EscolaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EscolaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<EscolaPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Escola.
     * @param {EscolaCreateArgs} args - Arguments to create a Escola.
     * @example
     * // Create one Escola
     * const Escola = await prisma.escola.create({
     *   data: {
     *     // ... data to create a Escola
     *   }
     * })
     * 
    **/
    create<T extends EscolaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EscolaCreateArgs<ExtArgs>>
    ): Prisma__EscolaClient<$Types.GetResult<EscolaPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Escolas.
     *     @param {EscolaCreateManyArgs} args - Arguments to create many Escolas.
     *     @example
     *     // Create many Escolas
     *     const escola = await prisma.escola.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EscolaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EscolaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Escola.
     * @param {EscolaDeleteArgs} args - Arguments to delete one Escola.
     * @example
     * // Delete one Escola
     * const Escola = await prisma.escola.delete({
     *   where: {
     *     // ... filter to delete one Escola
     *   }
     * })
     * 
    **/
    delete<T extends EscolaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EscolaDeleteArgs<ExtArgs>>
    ): Prisma__EscolaClient<$Types.GetResult<EscolaPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Escola.
     * @param {EscolaUpdateArgs} args - Arguments to update one Escola.
     * @example
     * // Update one Escola
     * const escola = await prisma.escola.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EscolaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EscolaUpdateArgs<ExtArgs>>
    ): Prisma__EscolaClient<$Types.GetResult<EscolaPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Escolas.
     * @param {EscolaDeleteManyArgs} args - Arguments to filter Escolas to delete.
     * @example
     * // Delete a few Escolas
     * const { count } = await prisma.escola.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EscolaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EscolaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Escolas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscolaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Escolas
     * const escola = await prisma.escola.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EscolaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EscolaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Escola.
     * @param {EscolaUpsertArgs} args - Arguments to update or create a Escola.
     * @example
     * // Update or create a Escola
     * const escola = await prisma.escola.upsert({
     *   create: {
     *     // ... data to create a Escola
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Escola we want to update
     *   }
     * })
    **/
    upsert<T extends EscolaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EscolaUpsertArgs<ExtArgs>>
    ): Prisma__EscolaClient<$Types.GetResult<EscolaPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Escolas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscolaCountArgs} args - Arguments to filter Escolas to count.
     * @example
     * // Count the number of Escolas
     * const count = await prisma.escola.count({
     *   where: {
     *     // ... the filter for the Escolas we want to count
     *   }
     * })
    **/
    count<T extends EscolaCountArgs>(
      args?: Subset<T, EscolaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EscolaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Escola.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscolaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EscolaAggregateArgs>(args: Subset<T, EscolaAggregateArgs>): Prisma.PrismaPromise<GetEscolaAggregateType<T>>

    /**
     * Group by Escola.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscolaGroupByArgs} args - Group by arguments.
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
      T extends EscolaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EscolaGroupByArgs['orderBy'] }
        : { orderBy?: EscolaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EscolaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEscolaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Escola.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EscolaClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    turmas<T extends Escola$turmasArgs<ExtArgs> = {}>(args?: Subset<T, Escola$turmasArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<TurmaPayload<ExtArgs>, T, 'findMany', never>| Null>;

    alunos<T extends Escola$alunosArgs<ExtArgs> = {}>(args?: Subset<T, Escola$alunosArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<AlunoPayload<ExtArgs>, T, 'findMany', never>| Null>;

    usuarios<T extends Escola$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Escola$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<UsuarioPayload<ExtArgs>, T, 'findMany', never>| Null>;

    desempenhoHabilidades<T extends Escola$desempenhoHabilidadesArgs<ExtArgs> = {}>(args?: Subset<T, Escola$desempenhoHabilidadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DesempenhoHabilidadePayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Escola base type for findUnique actions
   */
  export type EscolaFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escola
     */
    select?: EscolaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EscolaInclude<ExtArgs> | null
    /**
     * Filter, which Escola to fetch.
     */
    where: EscolaWhereUniqueInput
  }

  /**
   * Escola findUnique
   */
  export interface EscolaFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends EscolaFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Escola findUniqueOrThrow
   */
  export type EscolaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escola
     */
    select?: EscolaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EscolaInclude<ExtArgs> | null
    /**
     * Filter, which Escola to fetch.
     */
    where: EscolaWhereUniqueInput
  }


  /**
   * Escola base type for findFirst actions
   */
  export type EscolaFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escola
     */
    select?: EscolaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EscolaInclude<ExtArgs> | null
    /**
     * Filter, which Escola to fetch.
     */
    where?: EscolaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Escolas to fetch.
     */
    orderBy?: Enumerable<EscolaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Escolas.
     */
    cursor?: EscolaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Escolas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Escolas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Escolas.
     */
    distinct?: Enumerable<EscolaScalarFieldEnum>
  }

  /**
   * Escola findFirst
   */
  export interface EscolaFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends EscolaFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Escola findFirstOrThrow
   */
  export type EscolaFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escola
     */
    select?: EscolaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EscolaInclude<ExtArgs> | null
    /**
     * Filter, which Escola to fetch.
     */
    where?: EscolaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Escolas to fetch.
     */
    orderBy?: Enumerable<EscolaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Escolas.
     */
    cursor?: EscolaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Escolas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Escolas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Escolas.
     */
    distinct?: Enumerable<EscolaScalarFieldEnum>
  }


  /**
   * Escola findMany
   */
  export type EscolaFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escola
     */
    select?: EscolaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EscolaInclude<ExtArgs> | null
    /**
     * Filter, which Escolas to fetch.
     */
    where?: EscolaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Escolas to fetch.
     */
    orderBy?: Enumerable<EscolaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Escolas.
     */
    cursor?: EscolaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Escolas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Escolas.
     */
    skip?: number
    distinct?: Enumerable<EscolaScalarFieldEnum>
  }


  /**
   * Escola create
   */
  export type EscolaCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escola
     */
    select?: EscolaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EscolaInclude<ExtArgs> | null
    /**
     * The data needed to create a Escola.
     */
    data: XOR<EscolaCreateInput, EscolaUncheckedCreateInput>
  }


  /**
   * Escola createMany
   */
  export type EscolaCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Escolas.
     */
    data: Enumerable<EscolaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Escola update
   */
  export type EscolaUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escola
     */
    select?: EscolaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EscolaInclude<ExtArgs> | null
    /**
     * The data needed to update a Escola.
     */
    data: XOR<EscolaUpdateInput, EscolaUncheckedUpdateInput>
    /**
     * Choose, which Escola to update.
     */
    where: EscolaWhereUniqueInput
  }


  /**
   * Escola updateMany
   */
  export type EscolaUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Escolas.
     */
    data: XOR<EscolaUpdateManyMutationInput, EscolaUncheckedUpdateManyInput>
    /**
     * Filter which Escolas to update
     */
    where?: EscolaWhereInput
  }


  /**
   * Escola upsert
   */
  export type EscolaUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escola
     */
    select?: EscolaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EscolaInclude<ExtArgs> | null
    /**
     * The filter to search for the Escola to update in case it exists.
     */
    where: EscolaWhereUniqueInput
    /**
     * In case the Escola found by the `where` argument doesn't exist, create a new Escola with this data.
     */
    create: XOR<EscolaCreateInput, EscolaUncheckedCreateInput>
    /**
     * In case the Escola was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EscolaUpdateInput, EscolaUncheckedUpdateInput>
  }


  /**
   * Escola delete
   */
  export type EscolaDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escola
     */
    select?: EscolaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EscolaInclude<ExtArgs> | null
    /**
     * Filter which Escola to delete.
     */
    where: EscolaWhereUniqueInput
  }


  /**
   * Escola deleteMany
   */
  export type EscolaDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Escolas to delete
     */
    where?: EscolaWhereInput
  }


  /**
   * Escola.turmas
   */
  export type Escola$turmasArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TurmaInclude<ExtArgs> | null
    where?: TurmaWhereInput
    orderBy?: Enumerable<TurmaOrderByWithRelationInput>
    cursor?: TurmaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TurmaScalarFieldEnum>
  }


  /**
   * Escola.alunos
   */
  export type Escola$alunosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlunoInclude<ExtArgs> | null
    where?: AlunoWhereInput
    orderBy?: Enumerable<AlunoOrderByWithRelationInput>
    cursor?: AlunoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AlunoScalarFieldEnum>
  }


  /**
   * Escola.usuarios
   */
  export type Escola$usuariosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: Enumerable<UsuarioOrderByWithRelationInput>
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UsuarioScalarFieldEnum>
  }


  /**
   * Escola.desempenhoHabilidades
   */
  export type Escola$desempenhoHabilidadesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesempenhoHabilidade
     */
    select?: DesempenhoHabilidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesempenhoHabilidadeInclude<ExtArgs> | null
    where?: DesempenhoHabilidadeWhereInput
    orderBy?: Enumerable<DesempenhoHabilidadeOrderByWithRelationInput>
    cursor?: DesempenhoHabilidadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DesempenhoHabilidadeScalarFieldEnum>
  }


  /**
   * Escola without action
   */
  export type EscolaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escola
     */
    select?: EscolaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EscolaInclude<ExtArgs> | null
  }



  /**
   * Model Turma
   */


  export type AggregateTurma = {
    _count: TurmaCountAggregateOutputType | null
    _avg: TurmaAvgAggregateOutputType | null
    _sum: TurmaSumAggregateOutputType | null
    _min: TurmaMinAggregateOutputType | null
    _max: TurmaMaxAggregateOutputType | null
  }

  export type TurmaAvgAggregateOutputType = {
    id: number | null
    serie: number | null
    escolaId: number | null
  }

  export type TurmaSumAggregateOutputType = {
    id: number | null
    serie: number | null
    escolaId: number | null
  }

  export type TurmaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    serie: number | null
    turno: string | null
    anoLetivo: string | null
    escolaId: number | null
    professorResponsavel: string | null
    sala: string | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
  }

  export type TurmaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    serie: number | null
    turno: string | null
    anoLetivo: string | null
    escolaId: number | null
    professorResponsavel: string | null
    sala: string | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
  }

  export type TurmaCountAggregateOutputType = {
    id: number
    nome: number
    serie: number
    turno: number
    anoLetivo: number
    escolaId: number
    professorResponsavel: number
    sala: number
    dataCriacao: number
    dataAtualizacao: number
    _all: number
  }


  export type TurmaAvgAggregateInputType = {
    id?: true
    serie?: true
    escolaId?: true
  }

  export type TurmaSumAggregateInputType = {
    id?: true
    serie?: true
    escolaId?: true
  }

  export type TurmaMinAggregateInputType = {
    id?: true
    nome?: true
    serie?: true
    turno?: true
    anoLetivo?: true
    escolaId?: true
    professorResponsavel?: true
    sala?: true
    dataCriacao?: true
    dataAtualizacao?: true
  }

  export type TurmaMaxAggregateInputType = {
    id?: true
    nome?: true
    serie?: true
    turno?: true
    anoLetivo?: true
    escolaId?: true
    professorResponsavel?: true
    sala?: true
    dataCriacao?: true
    dataAtualizacao?: true
  }

  export type TurmaCountAggregateInputType = {
    id?: true
    nome?: true
    serie?: true
    turno?: true
    anoLetivo?: true
    escolaId?: true
    professorResponsavel?: true
    sala?: true
    dataCriacao?: true
    dataAtualizacao?: true
    _all?: true
  }

  export type TurmaAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turma to aggregate.
     */
    where?: TurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turmas to fetch.
     */
    orderBy?: Enumerable<TurmaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Turmas
    **/
    _count?: true | TurmaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TurmaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TurmaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TurmaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TurmaMaxAggregateInputType
  }

  export type GetTurmaAggregateType<T extends TurmaAggregateArgs> = {
        [P in keyof T & keyof AggregateTurma]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTurma[P]>
      : GetScalarType<T[P], AggregateTurma[P]>
  }




  export type TurmaGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TurmaWhereInput
    orderBy?: Enumerable<TurmaOrderByWithAggregationInput>
    by: TurmaScalarFieldEnum[]
    having?: TurmaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TurmaCountAggregateInputType | true
    _avg?: TurmaAvgAggregateInputType
    _sum?: TurmaSumAggregateInputType
    _min?: TurmaMinAggregateInputType
    _max?: TurmaMaxAggregateInputType
  }


  export type TurmaGroupByOutputType = {
    id: number
    nome: string
    serie: number
    turno: string
    anoLetivo: string
    escolaId: number
    professorResponsavel: string | null
    sala: string | null
    dataCriacao: Date
    dataAtualizacao: Date
    _count: TurmaCountAggregateOutputType | null
    _avg: TurmaAvgAggregateOutputType | null
    _sum: TurmaSumAggregateOutputType | null
    _min: TurmaMinAggregateOutputType | null
    _max: TurmaMaxAggregateOutputType | null
  }

  type GetTurmaGroupByPayload<T extends TurmaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TurmaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TurmaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TurmaGroupByOutputType[P]>
            : GetScalarType<T[P], TurmaGroupByOutputType[P]>
        }
      >
    >


  export type TurmaSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    serie?: boolean
    turno?: boolean
    anoLetivo?: boolean
    escolaId?: boolean
    professorResponsavel?: boolean
    sala?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    escola?: boolean | EscolaArgs<ExtArgs>
    alunos?: boolean | Turma$alunosArgs<ExtArgs>
    aplicacoesProva?: boolean | Turma$aplicacoesProvaArgs<ExtArgs>
    desempenhoHabilidades?: boolean | Turma$desempenhoHabilidadesArgs<ExtArgs>
    _count?: boolean | TurmaCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["turma"]>

  export type TurmaSelectScalar = {
    id?: boolean
    nome?: boolean
    serie?: boolean
    turno?: boolean
    anoLetivo?: boolean
    escolaId?: boolean
    professorResponsavel?: boolean
    sala?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
  }

  export type TurmaInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    escola?: boolean | EscolaArgs<ExtArgs>
    alunos?: boolean | Turma$alunosArgs<ExtArgs>
    aplicacoesProva?: boolean | Turma$aplicacoesProvaArgs<ExtArgs>
    desempenhoHabilidades?: boolean | Turma$desempenhoHabilidadesArgs<ExtArgs>
    _count?: boolean | TurmaCountOutputTypeArgs<ExtArgs>
  }


  type TurmaGetPayload<S extends boolean | null | undefined | TurmaArgs> = $Types.GetResult<TurmaPayload, S>

  type TurmaCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<TurmaFindManyArgs, 'select' | 'include'> & {
      select?: TurmaCountAggregateInputType | true
    }

  export interface TurmaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Turma'], meta: { name: 'Turma' } }
    /**
     * Find zero or one Turma that matches the filter.
     * @param {TurmaFindUniqueArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TurmaFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TurmaFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Turma'> extends True ? Prisma__TurmaClient<$Types.GetResult<TurmaPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__TurmaClient<$Types.GetResult<TurmaPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Turma that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TurmaFindUniqueOrThrowArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TurmaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TurmaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TurmaClient<$Types.GetResult<TurmaPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Turma that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaFindFirstArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TurmaFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TurmaFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Turma'> extends True ? Prisma__TurmaClient<$Types.GetResult<TurmaPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__TurmaClient<$Types.GetResult<TurmaPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Turma that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaFindFirstOrThrowArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TurmaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TurmaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TurmaClient<$Types.GetResult<TurmaPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Turmas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Turmas
     * const turmas = await prisma.turma.findMany()
     * 
     * // Get first 10 Turmas
     * const turmas = await prisma.turma.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const turmaWithIdOnly = await prisma.turma.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TurmaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TurmaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<TurmaPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Turma.
     * @param {TurmaCreateArgs} args - Arguments to create a Turma.
     * @example
     * // Create one Turma
     * const Turma = await prisma.turma.create({
     *   data: {
     *     // ... data to create a Turma
     *   }
     * })
     * 
    **/
    create<T extends TurmaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TurmaCreateArgs<ExtArgs>>
    ): Prisma__TurmaClient<$Types.GetResult<TurmaPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Turmas.
     *     @param {TurmaCreateManyArgs} args - Arguments to create many Turmas.
     *     @example
     *     // Create many Turmas
     *     const turma = await prisma.turma.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TurmaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TurmaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Turma.
     * @param {TurmaDeleteArgs} args - Arguments to delete one Turma.
     * @example
     * // Delete one Turma
     * const Turma = await prisma.turma.delete({
     *   where: {
     *     // ... filter to delete one Turma
     *   }
     * })
     * 
    **/
    delete<T extends TurmaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TurmaDeleteArgs<ExtArgs>>
    ): Prisma__TurmaClient<$Types.GetResult<TurmaPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Turma.
     * @param {TurmaUpdateArgs} args - Arguments to update one Turma.
     * @example
     * // Update one Turma
     * const turma = await prisma.turma.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TurmaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TurmaUpdateArgs<ExtArgs>>
    ): Prisma__TurmaClient<$Types.GetResult<TurmaPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Turmas.
     * @param {TurmaDeleteManyArgs} args - Arguments to filter Turmas to delete.
     * @example
     * // Delete a few Turmas
     * const { count } = await prisma.turma.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TurmaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TurmaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Turmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Turmas
     * const turma = await prisma.turma.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TurmaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TurmaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Turma.
     * @param {TurmaUpsertArgs} args - Arguments to update or create a Turma.
     * @example
     * // Update or create a Turma
     * const turma = await prisma.turma.upsert({
     *   create: {
     *     // ... data to create a Turma
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Turma we want to update
     *   }
     * })
    **/
    upsert<T extends TurmaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TurmaUpsertArgs<ExtArgs>>
    ): Prisma__TurmaClient<$Types.GetResult<TurmaPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Turmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaCountArgs} args - Arguments to filter Turmas to count.
     * @example
     * // Count the number of Turmas
     * const count = await prisma.turma.count({
     *   where: {
     *     // ... the filter for the Turmas we want to count
     *   }
     * })
    **/
    count<T extends TurmaCountArgs>(
      args?: Subset<T, TurmaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TurmaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Turma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TurmaAggregateArgs>(args: Subset<T, TurmaAggregateArgs>): Prisma.PrismaPromise<GetTurmaAggregateType<T>>

    /**
     * Group by Turma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaGroupByArgs} args - Group by arguments.
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
      T extends TurmaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TurmaGroupByArgs['orderBy'] }
        : { orderBy?: TurmaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TurmaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTurmaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Turma.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TurmaClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    escola<T extends EscolaArgs<ExtArgs> = {}>(args?: Subset<T, EscolaArgs<ExtArgs>>): Prisma__EscolaClient<$Types.GetResult<EscolaPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    alunos<T extends Turma$alunosArgs<ExtArgs> = {}>(args?: Subset<T, Turma$alunosArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<AlunoPayload<ExtArgs>, T, 'findMany', never>| Null>;

    aplicacoesProva<T extends Turma$aplicacoesProvaArgs<ExtArgs> = {}>(args?: Subset<T, Turma$aplicacoesProvaArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<AplicacaoProvaPayload<ExtArgs>, T, 'findMany', never>| Null>;

    desempenhoHabilidades<T extends Turma$desempenhoHabilidadesArgs<ExtArgs> = {}>(args?: Subset<T, Turma$desempenhoHabilidadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DesempenhoHabilidadePayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Turma base type for findUnique actions
   */
  export type TurmaFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turma to fetch.
     */
    where: TurmaWhereUniqueInput
  }

  /**
   * Turma findUnique
   */
  export interface TurmaFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends TurmaFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Turma findUniqueOrThrow
   */
  export type TurmaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turma to fetch.
     */
    where: TurmaWhereUniqueInput
  }


  /**
   * Turma base type for findFirst actions
   */
  export type TurmaFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turma to fetch.
     */
    where?: TurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turmas to fetch.
     */
    orderBy?: Enumerable<TurmaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turmas.
     */
    cursor?: TurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turmas.
     */
    distinct?: Enumerable<TurmaScalarFieldEnum>
  }

  /**
   * Turma findFirst
   */
  export interface TurmaFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends TurmaFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Turma findFirstOrThrow
   */
  export type TurmaFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turma to fetch.
     */
    where?: TurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turmas to fetch.
     */
    orderBy?: Enumerable<TurmaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turmas.
     */
    cursor?: TurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turmas.
     */
    distinct?: Enumerable<TurmaScalarFieldEnum>
  }


  /**
   * Turma findMany
   */
  export type TurmaFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turmas to fetch.
     */
    where?: TurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turmas to fetch.
     */
    orderBy?: Enumerable<TurmaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Turmas.
     */
    cursor?: TurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turmas.
     */
    skip?: number
    distinct?: Enumerable<TurmaScalarFieldEnum>
  }


  /**
   * Turma create
   */
  export type TurmaCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * The data needed to create a Turma.
     */
    data: XOR<TurmaCreateInput, TurmaUncheckedCreateInput>
  }


  /**
   * Turma createMany
   */
  export type TurmaCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Turmas.
     */
    data: Enumerable<TurmaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Turma update
   */
  export type TurmaUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * The data needed to update a Turma.
     */
    data: XOR<TurmaUpdateInput, TurmaUncheckedUpdateInput>
    /**
     * Choose, which Turma to update.
     */
    where: TurmaWhereUniqueInput
  }


  /**
   * Turma updateMany
   */
  export type TurmaUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Turmas.
     */
    data: XOR<TurmaUpdateManyMutationInput, TurmaUncheckedUpdateManyInput>
    /**
     * Filter which Turmas to update
     */
    where?: TurmaWhereInput
  }


  /**
   * Turma upsert
   */
  export type TurmaUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * The filter to search for the Turma to update in case it exists.
     */
    where: TurmaWhereUniqueInput
    /**
     * In case the Turma found by the `where` argument doesn't exist, create a new Turma with this data.
     */
    create: XOR<TurmaCreateInput, TurmaUncheckedCreateInput>
    /**
     * In case the Turma was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TurmaUpdateInput, TurmaUncheckedUpdateInput>
  }


  /**
   * Turma delete
   */
  export type TurmaDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter which Turma to delete.
     */
    where: TurmaWhereUniqueInput
  }


  /**
   * Turma deleteMany
   */
  export type TurmaDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turmas to delete
     */
    where?: TurmaWhereInput
  }


  /**
   * Turma.alunos
   */
  export type Turma$alunosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlunoInclude<ExtArgs> | null
    where?: AlunoWhereInput
    orderBy?: Enumerable<AlunoOrderByWithRelationInput>
    cursor?: AlunoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AlunoScalarFieldEnum>
  }


  /**
   * Turma.aplicacoesProva
   */
  export type Turma$aplicacoesProvaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AplicacaoProva
     */
    select?: AplicacaoProvaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AplicacaoProvaInclude<ExtArgs> | null
    where?: AplicacaoProvaWhereInput
    orderBy?: Enumerable<AplicacaoProvaOrderByWithRelationInput>
    cursor?: AplicacaoProvaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AplicacaoProvaScalarFieldEnum>
  }


  /**
   * Turma.desempenhoHabilidades
   */
  export type Turma$desempenhoHabilidadesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesempenhoHabilidade
     */
    select?: DesempenhoHabilidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesempenhoHabilidadeInclude<ExtArgs> | null
    where?: DesempenhoHabilidadeWhereInput
    orderBy?: Enumerable<DesempenhoHabilidadeOrderByWithRelationInput>
    cursor?: DesempenhoHabilidadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DesempenhoHabilidadeScalarFieldEnum>
  }


  /**
   * Turma without action
   */
  export type TurmaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TurmaInclude<ExtArgs> | null
  }



  /**
   * Model Aluno
   */


  export type AggregateAluno = {
    _count: AlunoCountAggregateOutputType | null
    _avg: AlunoAvgAggregateOutputType | null
    _sum: AlunoSumAggregateOutputType | null
    _min: AlunoMinAggregateOutputType | null
    _max: AlunoMaxAggregateOutputType | null
  }

  export type AlunoAvgAggregateOutputType = {
    id: number | null
    turmaId: number | null
    escolaId: number | null
  }

  export type AlunoSumAggregateOutputType = {
    id: number | null
    turmaId: number | null
    escolaId: number | null
  }

  export type AlunoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    matricula: string | null
    dataNascimento: Date | null
    genero: string | null
    responsavel: string | null
    telefoneResponsavel: string | null
    emailResponsavel: string | null
    turmaId: number | null
    escolaId: number | null
    fotoUrl: string | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
  }

  export type AlunoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    matricula: string | null
    dataNascimento: Date | null
    genero: string | null
    responsavel: string | null
    telefoneResponsavel: string | null
    emailResponsavel: string | null
    turmaId: number | null
    escolaId: number | null
    fotoUrl: string | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
  }

  export type AlunoCountAggregateOutputType = {
    id: number
    nome: number
    matricula: number
    dataNascimento: number
    genero: number
    responsavel: number
    telefoneResponsavel: number
    emailResponsavel: number
    turmaId: number
    escolaId: number
    fotoUrl: number
    dataCriacao: number
    dataAtualizacao: number
    _all: number
  }


  export type AlunoAvgAggregateInputType = {
    id?: true
    turmaId?: true
    escolaId?: true
  }

  export type AlunoSumAggregateInputType = {
    id?: true
    turmaId?: true
    escolaId?: true
  }

  export type AlunoMinAggregateInputType = {
    id?: true
    nome?: true
    matricula?: true
    dataNascimento?: true
    genero?: true
    responsavel?: true
    telefoneResponsavel?: true
    emailResponsavel?: true
    turmaId?: true
    escolaId?: true
    fotoUrl?: true
    dataCriacao?: true
    dataAtualizacao?: true
  }

  export type AlunoMaxAggregateInputType = {
    id?: true
    nome?: true
    matricula?: true
    dataNascimento?: true
    genero?: true
    responsavel?: true
    telefoneResponsavel?: true
    emailResponsavel?: true
    turmaId?: true
    escolaId?: true
    fotoUrl?: true
    dataCriacao?: true
    dataAtualizacao?: true
  }

  export type AlunoCountAggregateInputType = {
    id?: true
    nome?: true
    matricula?: true
    dataNascimento?: true
    genero?: true
    responsavel?: true
    telefoneResponsavel?: true
    emailResponsavel?: true
    turmaId?: true
    escolaId?: true
    fotoUrl?: true
    dataCriacao?: true
    dataAtualizacao?: true
    _all?: true
  }

  export type AlunoAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aluno to aggregate.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: Enumerable<AlunoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alunos
    **/
    _count?: true | AlunoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlunoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlunoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlunoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlunoMaxAggregateInputType
  }

  export type GetAlunoAggregateType<T extends AlunoAggregateArgs> = {
        [P in keyof T & keyof AggregateAluno]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAluno[P]>
      : GetScalarType<T[P], AggregateAluno[P]>
  }




  export type AlunoGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AlunoWhereInput
    orderBy?: Enumerable<AlunoOrderByWithAggregationInput>
    by: AlunoScalarFieldEnum[]
    having?: AlunoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlunoCountAggregateInputType | true
    _avg?: AlunoAvgAggregateInputType
    _sum?: AlunoSumAggregateInputType
    _min?: AlunoMinAggregateInputType
    _max?: AlunoMaxAggregateInputType
  }


  export type AlunoGroupByOutputType = {
    id: number
    nome: string
    matricula: string
    dataNascimento: Date | null
    genero: string | null
    responsavel: string | null
    telefoneResponsavel: string | null
    emailResponsavel: string | null
    turmaId: number | null
    escolaId: number
    fotoUrl: string | null
    dataCriacao: Date
    dataAtualizacao: Date
    _count: AlunoCountAggregateOutputType | null
    _avg: AlunoAvgAggregateOutputType | null
    _sum: AlunoSumAggregateOutputType | null
    _min: AlunoMinAggregateOutputType | null
    _max: AlunoMaxAggregateOutputType | null
  }

  type GetAlunoGroupByPayload<T extends AlunoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AlunoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlunoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlunoGroupByOutputType[P]>
            : GetScalarType<T[P], AlunoGroupByOutputType[P]>
        }
      >
    >


  export type AlunoSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    matricula?: boolean
    dataNascimento?: boolean
    genero?: boolean
    responsavel?: boolean
    telefoneResponsavel?: boolean
    emailResponsavel?: boolean
    turmaId?: boolean
    escolaId?: boolean
    fotoUrl?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    turma?: boolean | TurmaArgs<ExtArgs>
    escola?: boolean | EscolaArgs<ExtArgs>
    resultados?: boolean | Aluno$resultadosArgs<ExtArgs>
    _count?: boolean | AlunoCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["aluno"]>

  export type AlunoSelectScalar = {
    id?: boolean
    nome?: boolean
    matricula?: boolean
    dataNascimento?: boolean
    genero?: boolean
    responsavel?: boolean
    telefoneResponsavel?: boolean
    emailResponsavel?: boolean
    turmaId?: boolean
    escolaId?: boolean
    fotoUrl?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
  }

  export type AlunoInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    turma?: boolean | TurmaArgs<ExtArgs>
    escola?: boolean | EscolaArgs<ExtArgs>
    resultados?: boolean | Aluno$resultadosArgs<ExtArgs>
    _count?: boolean | AlunoCountOutputTypeArgs<ExtArgs>
  }


  type AlunoGetPayload<S extends boolean | null | undefined | AlunoArgs> = $Types.GetResult<AlunoPayload, S>

  type AlunoCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AlunoFindManyArgs, 'select' | 'include'> & {
      select?: AlunoCountAggregateInputType | true
    }

  export interface AlunoDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Aluno'], meta: { name: 'Aluno' } }
    /**
     * Find zero or one Aluno that matches the filter.
     * @param {AlunoFindUniqueArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AlunoFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AlunoFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Aluno'> extends True ? Prisma__AlunoClient<$Types.GetResult<AlunoPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__AlunoClient<$Types.GetResult<AlunoPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Aluno that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AlunoFindUniqueOrThrowArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AlunoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AlunoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AlunoClient<$Types.GetResult<AlunoPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Aluno that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoFindFirstArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AlunoFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AlunoFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Aluno'> extends True ? Prisma__AlunoClient<$Types.GetResult<AlunoPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__AlunoClient<$Types.GetResult<AlunoPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Aluno that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoFindFirstOrThrowArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AlunoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AlunoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AlunoClient<$Types.GetResult<AlunoPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Alunos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alunos
     * const alunos = await prisma.aluno.findMany()
     * 
     * // Get first 10 Alunos
     * const alunos = await prisma.aluno.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alunoWithIdOnly = await prisma.aluno.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AlunoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlunoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<AlunoPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Aluno.
     * @param {AlunoCreateArgs} args - Arguments to create a Aluno.
     * @example
     * // Create one Aluno
     * const Aluno = await prisma.aluno.create({
     *   data: {
     *     // ... data to create a Aluno
     *   }
     * })
     * 
    **/
    create<T extends AlunoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AlunoCreateArgs<ExtArgs>>
    ): Prisma__AlunoClient<$Types.GetResult<AlunoPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Alunos.
     *     @param {AlunoCreateManyArgs} args - Arguments to create many Alunos.
     *     @example
     *     // Create many Alunos
     *     const aluno = await prisma.aluno.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AlunoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlunoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Aluno.
     * @param {AlunoDeleteArgs} args - Arguments to delete one Aluno.
     * @example
     * // Delete one Aluno
     * const Aluno = await prisma.aluno.delete({
     *   where: {
     *     // ... filter to delete one Aluno
     *   }
     * })
     * 
    **/
    delete<T extends AlunoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AlunoDeleteArgs<ExtArgs>>
    ): Prisma__AlunoClient<$Types.GetResult<AlunoPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Aluno.
     * @param {AlunoUpdateArgs} args - Arguments to update one Aluno.
     * @example
     * // Update one Aluno
     * const aluno = await prisma.aluno.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AlunoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AlunoUpdateArgs<ExtArgs>>
    ): Prisma__AlunoClient<$Types.GetResult<AlunoPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Alunos.
     * @param {AlunoDeleteManyArgs} args - Arguments to filter Alunos to delete.
     * @example
     * // Delete a few Alunos
     * const { count } = await prisma.aluno.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AlunoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlunoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alunos
     * const aluno = await prisma.aluno.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AlunoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AlunoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Aluno.
     * @param {AlunoUpsertArgs} args - Arguments to update or create a Aluno.
     * @example
     * // Update or create a Aluno
     * const aluno = await prisma.aluno.upsert({
     *   create: {
     *     // ... data to create a Aluno
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aluno we want to update
     *   }
     * })
    **/
    upsert<T extends AlunoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AlunoUpsertArgs<ExtArgs>>
    ): Prisma__AlunoClient<$Types.GetResult<AlunoPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoCountArgs} args - Arguments to filter Alunos to count.
     * @example
     * // Count the number of Alunos
     * const count = await prisma.aluno.count({
     *   where: {
     *     // ... the filter for the Alunos we want to count
     *   }
     * })
    **/
    count<T extends AlunoCountArgs>(
      args?: Subset<T, AlunoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlunoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aluno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlunoAggregateArgs>(args: Subset<T, AlunoAggregateArgs>): Prisma.PrismaPromise<GetAlunoAggregateType<T>>

    /**
     * Group by Aluno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoGroupByArgs} args - Group by arguments.
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
      T extends AlunoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlunoGroupByArgs['orderBy'] }
        : { orderBy?: AlunoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AlunoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlunoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Aluno.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AlunoClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    turma<T extends TurmaArgs<ExtArgs> = {}>(args?: Subset<T, TurmaArgs<ExtArgs>>): Prisma__TurmaClient<$Types.GetResult<TurmaPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    escola<T extends EscolaArgs<ExtArgs> = {}>(args?: Subset<T, EscolaArgs<ExtArgs>>): Prisma__EscolaClient<$Types.GetResult<EscolaPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    resultados<T extends Aluno$resultadosArgs<ExtArgs> = {}>(args?: Subset<T, Aluno$resultadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ResultadoPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Aluno base type for findUnique actions
   */
  export type AlunoFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno findUnique
   */
  export interface AlunoFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends AlunoFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Aluno findUniqueOrThrow
   */
  export type AlunoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where: AlunoWhereUniqueInput
  }


  /**
   * Aluno base type for findFirst actions
   */
  export type AlunoFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: Enumerable<AlunoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alunos.
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alunos.
     */
    distinct?: Enumerable<AlunoScalarFieldEnum>
  }

  /**
   * Aluno findFirst
   */
  export interface AlunoFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends AlunoFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Aluno findFirstOrThrow
   */
  export type AlunoFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: Enumerable<AlunoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alunos.
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alunos.
     */
    distinct?: Enumerable<AlunoScalarFieldEnum>
  }


  /**
   * Aluno findMany
   */
  export type AlunoFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Alunos to fetch.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: Enumerable<AlunoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alunos.
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    distinct?: Enumerable<AlunoScalarFieldEnum>
  }


  /**
   * Aluno create
   */
  export type AlunoCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * The data needed to create a Aluno.
     */
    data: XOR<AlunoCreateInput, AlunoUncheckedCreateInput>
  }


  /**
   * Aluno createMany
   */
  export type AlunoCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alunos.
     */
    data: Enumerable<AlunoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Aluno update
   */
  export type AlunoUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * The data needed to update a Aluno.
     */
    data: XOR<AlunoUpdateInput, AlunoUncheckedUpdateInput>
    /**
     * Choose, which Aluno to update.
     */
    where: AlunoWhereUniqueInput
  }


  /**
   * Aluno updateMany
   */
  export type AlunoUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alunos.
     */
    data: XOR<AlunoUpdateManyMutationInput, AlunoUncheckedUpdateManyInput>
    /**
     * Filter which Alunos to update
     */
    where?: AlunoWhereInput
  }


  /**
   * Aluno upsert
   */
  export type AlunoUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * The filter to search for the Aluno to update in case it exists.
     */
    where: AlunoWhereUniqueInput
    /**
     * In case the Aluno found by the `where` argument doesn't exist, create a new Aluno with this data.
     */
    create: XOR<AlunoCreateInput, AlunoUncheckedCreateInput>
    /**
     * In case the Aluno was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlunoUpdateInput, AlunoUncheckedUpdateInput>
  }


  /**
   * Aluno delete
   */
  export type AlunoDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter which Aluno to delete.
     */
    where: AlunoWhereUniqueInput
  }


  /**
   * Aluno deleteMany
   */
  export type AlunoDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alunos to delete
     */
    where?: AlunoWhereInput
  }


  /**
   * Aluno.resultados
   */
  export type Aluno$resultadosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultadoInclude<ExtArgs> | null
    where?: ResultadoWhereInput
    orderBy?: Enumerable<ResultadoOrderByWithRelationInput>
    cursor?: ResultadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ResultadoScalarFieldEnum>
  }


  /**
   * Aluno without action
   */
  export type AlunoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlunoInclude<ExtArgs> | null
  }



  /**
   * Model Prova
   */


  export type AggregateProva = {
    _count: ProvaCountAggregateOutputType | null
    _avg: ProvaAvgAggregateOutputType | null
    _sum: ProvaSumAggregateOutputType | null
    _min: ProvaMinAggregateOutputType | null
    _max: ProvaMaxAggregateOutputType | null
  }

  export type ProvaAvgAggregateOutputType = {
    id: number | null
    serie: number | null
    criadoPor: number | null
  }

  export type ProvaSumAggregateOutputType = {
    id: number | null
    serie: number | null
    criadoPor: number | null
  }

  export type ProvaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    dataAplicacao: Date | null
    tipo: string | null
    disciplina: string | null
    serie: number | null
    criadoPor: number | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
  }

  export type ProvaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    dataAplicacao: Date | null
    tipo: string | null
    disciplina: string | null
    serie: number | null
    criadoPor: number | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
  }

  export type ProvaCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    dataAplicacao: number
    tipo: number
    disciplina: number
    serie: number
    criadoPor: number
    dataCriacao: number
    dataAtualizacao: number
    _all: number
  }


  export type ProvaAvgAggregateInputType = {
    id?: true
    serie?: true
    criadoPor?: true
  }

  export type ProvaSumAggregateInputType = {
    id?: true
    serie?: true
    criadoPor?: true
  }

  export type ProvaMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    dataAplicacao?: true
    tipo?: true
    disciplina?: true
    serie?: true
    criadoPor?: true
    dataCriacao?: true
    dataAtualizacao?: true
  }

  export type ProvaMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    dataAplicacao?: true
    tipo?: true
    disciplina?: true
    serie?: true
    criadoPor?: true
    dataCriacao?: true
    dataAtualizacao?: true
  }

  export type ProvaCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    dataAplicacao?: true
    tipo?: true
    disciplina?: true
    serie?: true
    criadoPor?: true
    dataCriacao?: true
    dataAtualizacao?: true
    _all?: true
  }

  export type ProvaAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prova to aggregate.
     */
    where?: ProvaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prova to fetch.
     */
    orderBy?: Enumerable<ProvaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProvaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prova from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prova.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prova
    **/
    _count?: true | ProvaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProvaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProvaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProvaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProvaMaxAggregateInputType
  }

  export type GetProvaAggregateType<T extends ProvaAggregateArgs> = {
        [P in keyof T & keyof AggregateProva]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProva[P]>
      : GetScalarType<T[P], AggregateProva[P]>
  }




  export type ProvaGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ProvaWhereInput
    orderBy?: Enumerable<ProvaOrderByWithAggregationInput>
    by: ProvaScalarFieldEnum[]
    having?: ProvaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProvaCountAggregateInputType | true
    _avg?: ProvaAvgAggregateInputType
    _sum?: ProvaSumAggregateInputType
    _min?: ProvaMinAggregateInputType
    _max?: ProvaMaxAggregateInputType
  }


  export type ProvaGroupByOutputType = {
    id: number
    nome: string
    descricao: string | null
    dataAplicacao: Date | null
    tipo: string
    disciplina: string | null
    serie: number | null
    criadoPor: number | null
    dataCriacao: Date
    dataAtualizacao: Date
    _count: ProvaCountAggregateOutputType | null
    _avg: ProvaAvgAggregateOutputType | null
    _sum: ProvaSumAggregateOutputType | null
    _min: ProvaMinAggregateOutputType | null
    _max: ProvaMaxAggregateOutputType | null
  }

  type GetProvaGroupByPayload<T extends ProvaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ProvaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProvaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProvaGroupByOutputType[P]>
            : GetScalarType<T[P], ProvaGroupByOutputType[P]>
        }
      >
    >


  export type ProvaSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    dataAplicacao?: boolean
    tipo?: boolean
    disciplina?: boolean
    serie?: boolean
    criadoPor?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    questoes?: boolean | Prova$questoesArgs<ExtArgs>
    aplicacoesProva?: boolean | Prova$aplicacoesProvaArgs<ExtArgs>
    resultados?: boolean | Prova$resultadosArgs<ExtArgs>
    desempenhoHabilidades?: boolean | Prova$desempenhoHabilidadesArgs<ExtArgs>
    _count?: boolean | ProvaCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["prova"]>

  export type ProvaSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    dataAplicacao?: boolean
    tipo?: boolean
    disciplina?: boolean
    serie?: boolean
    criadoPor?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
  }

  export type ProvaInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    questoes?: boolean | Prova$questoesArgs<ExtArgs>
    aplicacoesProva?: boolean | Prova$aplicacoesProvaArgs<ExtArgs>
    resultados?: boolean | Prova$resultadosArgs<ExtArgs>
    desempenhoHabilidades?: boolean | Prova$desempenhoHabilidadesArgs<ExtArgs>
    _count?: boolean | ProvaCountOutputTypeArgs<ExtArgs>
  }


  type ProvaGetPayload<S extends boolean | null | undefined | ProvaArgs> = $Types.GetResult<ProvaPayload, S>

  type ProvaCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ProvaFindManyArgs, 'select' | 'include'> & {
      select?: ProvaCountAggregateInputType | true
    }

  export interface ProvaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prova'], meta: { name: 'Prova' } }
    /**
     * Find zero or one Prova that matches the filter.
     * @param {ProvaFindUniqueArgs} args - Arguments to find a Prova
     * @example
     * // Get one Prova
     * const prova = await prisma.prova.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProvaFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProvaFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Prova'> extends True ? Prisma__ProvaClient<$Types.GetResult<ProvaPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__ProvaClient<$Types.GetResult<ProvaPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Prova that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProvaFindUniqueOrThrowArgs} args - Arguments to find a Prova
     * @example
     * // Get one Prova
     * const prova = await prisma.prova.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProvaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProvaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProvaClient<$Types.GetResult<ProvaPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Prova that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvaFindFirstArgs} args - Arguments to find a Prova
     * @example
     * // Get one Prova
     * const prova = await prisma.prova.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProvaFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProvaFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Prova'> extends True ? Prisma__ProvaClient<$Types.GetResult<ProvaPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__ProvaClient<$Types.GetResult<ProvaPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Prova that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvaFindFirstOrThrowArgs} args - Arguments to find a Prova
     * @example
     * // Get one Prova
     * const prova = await prisma.prova.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProvaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProvaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProvaClient<$Types.GetResult<ProvaPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Prova that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prova
     * const prova = await prisma.prova.findMany()
     * 
     * // Get first 10 Prova
     * const prova = await prisma.prova.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const provaWithIdOnly = await prisma.prova.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProvaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProvaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<ProvaPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Prova.
     * @param {ProvaCreateArgs} args - Arguments to create a Prova.
     * @example
     * // Create one Prova
     * const Prova = await prisma.prova.create({
     *   data: {
     *     // ... data to create a Prova
     *   }
     * })
     * 
    **/
    create<T extends ProvaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProvaCreateArgs<ExtArgs>>
    ): Prisma__ProvaClient<$Types.GetResult<ProvaPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Prova.
     *     @param {ProvaCreateManyArgs} args - Arguments to create many Prova.
     *     @example
     *     // Create many Prova
     *     const prova = await prisma.prova.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProvaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProvaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Prova.
     * @param {ProvaDeleteArgs} args - Arguments to delete one Prova.
     * @example
     * // Delete one Prova
     * const Prova = await prisma.prova.delete({
     *   where: {
     *     // ... filter to delete one Prova
     *   }
     * })
     * 
    **/
    delete<T extends ProvaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProvaDeleteArgs<ExtArgs>>
    ): Prisma__ProvaClient<$Types.GetResult<ProvaPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Prova.
     * @param {ProvaUpdateArgs} args - Arguments to update one Prova.
     * @example
     * // Update one Prova
     * const prova = await prisma.prova.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProvaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProvaUpdateArgs<ExtArgs>>
    ): Prisma__ProvaClient<$Types.GetResult<ProvaPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Prova.
     * @param {ProvaDeleteManyArgs} args - Arguments to filter Prova to delete.
     * @example
     * // Delete a few Prova
     * const { count } = await prisma.prova.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProvaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProvaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prova.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prova
     * const prova = await prisma.prova.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProvaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProvaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Prova.
     * @param {ProvaUpsertArgs} args - Arguments to update or create a Prova.
     * @example
     * // Update or create a Prova
     * const prova = await prisma.prova.upsert({
     *   create: {
     *     // ... data to create a Prova
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prova we want to update
     *   }
     * })
    **/
    upsert<T extends ProvaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProvaUpsertArgs<ExtArgs>>
    ): Prisma__ProvaClient<$Types.GetResult<ProvaPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Prova.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvaCountArgs} args - Arguments to filter Prova to count.
     * @example
     * // Count the number of Prova
     * const count = await prisma.prova.count({
     *   where: {
     *     // ... the filter for the Prova we want to count
     *   }
     * })
    **/
    count<T extends ProvaCountArgs>(
      args?: Subset<T, ProvaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProvaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prova.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProvaAggregateArgs>(args: Subset<T, ProvaAggregateArgs>): Prisma.PrismaPromise<GetProvaAggregateType<T>>

    /**
     * Group by Prova.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvaGroupByArgs} args - Group by arguments.
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
      T extends ProvaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProvaGroupByArgs['orderBy'] }
        : { orderBy?: ProvaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProvaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProvaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Prova.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProvaClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    questoes<T extends Prova$questoesArgs<ExtArgs> = {}>(args?: Subset<T, Prova$questoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<QuestaoPayload<ExtArgs>, T, 'findMany', never>| Null>;

    aplicacoesProva<T extends Prova$aplicacoesProvaArgs<ExtArgs> = {}>(args?: Subset<T, Prova$aplicacoesProvaArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<AplicacaoProvaPayload<ExtArgs>, T, 'findMany', never>| Null>;

    resultados<T extends Prova$resultadosArgs<ExtArgs> = {}>(args?: Subset<T, Prova$resultadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ResultadoPayload<ExtArgs>, T, 'findMany', never>| Null>;

    desempenhoHabilidades<T extends Prova$desempenhoHabilidadesArgs<ExtArgs> = {}>(args?: Subset<T, Prova$desempenhoHabilidadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DesempenhoHabilidadePayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Prova base type for findUnique actions
   */
  export type ProvaFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova
     */
    select?: ProvaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProvaInclude<ExtArgs> | null
    /**
     * Filter, which Prova to fetch.
     */
    where: ProvaWhereUniqueInput
  }

  /**
   * Prova findUnique
   */
  export interface ProvaFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ProvaFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Prova findUniqueOrThrow
   */
  export type ProvaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova
     */
    select?: ProvaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProvaInclude<ExtArgs> | null
    /**
     * Filter, which Prova to fetch.
     */
    where: ProvaWhereUniqueInput
  }


  /**
   * Prova base type for findFirst actions
   */
  export type ProvaFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova
     */
    select?: ProvaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProvaInclude<ExtArgs> | null
    /**
     * Filter, which Prova to fetch.
     */
    where?: ProvaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prova to fetch.
     */
    orderBy?: Enumerable<ProvaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prova.
     */
    cursor?: ProvaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prova from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prova.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prova.
     */
    distinct?: Enumerable<ProvaScalarFieldEnum>
  }

  /**
   * Prova findFirst
   */
  export interface ProvaFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ProvaFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Prova findFirstOrThrow
   */
  export type ProvaFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova
     */
    select?: ProvaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProvaInclude<ExtArgs> | null
    /**
     * Filter, which Prova to fetch.
     */
    where?: ProvaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prova to fetch.
     */
    orderBy?: Enumerable<ProvaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prova.
     */
    cursor?: ProvaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prova from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prova.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prova.
     */
    distinct?: Enumerable<ProvaScalarFieldEnum>
  }


  /**
   * Prova findMany
   */
  export type ProvaFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova
     */
    select?: ProvaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProvaInclude<ExtArgs> | null
    /**
     * Filter, which Prova to fetch.
     */
    where?: ProvaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prova to fetch.
     */
    orderBy?: Enumerable<ProvaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prova.
     */
    cursor?: ProvaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prova from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prova.
     */
    skip?: number
    distinct?: Enumerable<ProvaScalarFieldEnum>
  }


  /**
   * Prova create
   */
  export type ProvaCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova
     */
    select?: ProvaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProvaInclude<ExtArgs> | null
    /**
     * The data needed to create a Prova.
     */
    data: XOR<ProvaCreateInput, ProvaUncheckedCreateInput>
  }


  /**
   * Prova createMany
   */
  export type ProvaCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prova.
     */
    data: Enumerable<ProvaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Prova update
   */
  export type ProvaUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova
     */
    select?: ProvaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProvaInclude<ExtArgs> | null
    /**
     * The data needed to update a Prova.
     */
    data: XOR<ProvaUpdateInput, ProvaUncheckedUpdateInput>
    /**
     * Choose, which Prova to update.
     */
    where: ProvaWhereUniqueInput
  }


  /**
   * Prova updateMany
   */
  export type ProvaUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prova.
     */
    data: XOR<ProvaUpdateManyMutationInput, ProvaUncheckedUpdateManyInput>
    /**
     * Filter which Prova to update
     */
    where?: ProvaWhereInput
  }


  /**
   * Prova upsert
   */
  export type ProvaUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova
     */
    select?: ProvaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProvaInclude<ExtArgs> | null
    /**
     * The filter to search for the Prova to update in case it exists.
     */
    where: ProvaWhereUniqueInput
    /**
     * In case the Prova found by the `where` argument doesn't exist, create a new Prova with this data.
     */
    create: XOR<ProvaCreateInput, ProvaUncheckedCreateInput>
    /**
     * In case the Prova was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProvaUpdateInput, ProvaUncheckedUpdateInput>
  }


  /**
   * Prova delete
   */
  export type ProvaDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova
     */
    select?: ProvaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProvaInclude<ExtArgs> | null
    /**
     * Filter which Prova to delete.
     */
    where: ProvaWhereUniqueInput
  }


  /**
   * Prova deleteMany
   */
  export type ProvaDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prova to delete
     */
    where?: ProvaWhereInput
  }


  /**
   * Prova.questoes
   */
  export type Prova$questoesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestaoInclude<ExtArgs> | null
    where?: QuestaoWhereInput
    orderBy?: Enumerable<QuestaoOrderByWithRelationInput>
    cursor?: QuestaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<QuestaoScalarFieldEnum>
  }


  /**
   * Prova.aplicacoesProva
   */
  export type Prova$aplicacoesProvaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AplicacaoProva
     */
    select?: AplicacaoProvaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AplicacaoProvaInclude<ExtArgs> | null
    where?: AplicacaoProvaWhereInput
    orderBy?: Enumerable<AplicacaoProvaOrderByWithRelationInput>
    cursor?: AplicacaoProvaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AplicacaoProvaScalarFieldEnum>
  }


  /**
   * Prova.resultados
   */
  export type Prova$resultadosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultadoInclude<ExtArgs> | null
    where?: ResultadoWhereInput
    orderBy?: Enumerable<ResultadoOrderByWithRelationInput>
    cursor?: ResultadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ResultadoScalarFieldEnum>
  }


  /**
   * Prova.desempenhoHabilidades
   */
  export type Prova$desempenhoHabilidadesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesempenhoHabilidade
     */
    select?: DesempenhoHabilidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesempenhoHabilidadeInclude<ExtArgs> | null
    where?: DesempenhoHabilidadeWhereInput
    orderBy?: Enumerable<DesempenhoHabilidadeOrderByWithRelationInput>
    cursor?: DesempenhoHabilidadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DesempenhoHabilidadeScalarFieldEnum>
  }


  /**
   * Prova without action
   */
  export type ProvaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova
     */
    select?: ProvaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProvaInclude<ExtArgs> | null
  }



  /**
   * Model Questao
   */


  export type AggregateQuestao = {
    _count: QuestaoCountAggregateOutputType | null
    _avg: QuestaoAvgAggregateOutputType | null
    _sum: QuestaoSumAggregateOutputType | null
    _min: QuestaoMinAggregateOutputType | null
    _max: QuestaoMaxAggregateOutputType | null
  }

  export type QuestaoAvgAggregateOutputType = {
    id: number | null
    provaId: number | null
    ordem: number | null
    valor: Decimal | null
  }

  export type QuestaoSumAggregateOutputType = {
    id: number | null
    provaId: number | null
    ordem: number | null
    valor: Decimal | null
  }

  export type QuestaoMinAggregateOutputType = {
    id: number | null
    provaId: number | null
    ordem: number | null
    enunciado: string | null
    tipo: string | null
    respostaCorreta: string | null
    valor: Decimal | null
    habilidadeBncc: string | null
    descricaoBncc: string | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
  }

  export type QuestaoMaxAggregateOutputType = {
    id: number | null
    provaId: number | null
    ordem: number | null
    enunciado: string | null
    tipo: string | null
    respostaCorreta: string | null
    valor: Decimal | null
    habilidadeBncc: string | null
    descricaoBncc: string | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
  }

  export type QuestaoCountAggregateOutputType = {
    id: number
    provaId: number
    ordem: number
    enunciado: number
    tipo: number
    opcoes: number
    respostaCorreta: number
    valor: number
    habilidadeBncc: number
    descricaoBncc: number
    dataCriacao: number
    dataAtualizacao: number
    _all: number
  }


  export type QuestaoAvgAggregateInputType = {
    id?: true
    provaId?: true
    ordem?: true
    valor?: true
  }

  export type QuestaoSumAggregateInputType = {
    id?: true
    provaId?: true
    ordem?: true
    valor?: true
  }

  export type QuestaoMinAggregateInputType = {
    id?: true
    provaId?: true
    ordem?: true
    enunciado?: true
    tipo?: true
    respostaCorreta?: true
    valor?: true
    habilidadeBncc?: true
    descricaoBncc?: true
    dataCriacao?: true
    dataAtualizacao?: true
  }

  export type QuestaoMaxAggregateInputType = {
    id?: true
    provaId?: true
    ordem?: true
    enunciado?: true
    tipo?: true
    respostaCorreta?: true
    valor?: true
    habilidadeBncc?: true
    descricaoBncc?: true
    dataCriacao?: true
    dataAtualizacao?: true
  }

  export type QuestaoCountAggregateInputType = {
    id?: true
    provaId?: true
    ordem?: true
    enunciado?: true
    tipo?: true
    opcoes?: true
    respostaCorreta?: true
    valor?: true
    habilidadeBncc?: true
    descricaoBncc?: true
    dataCriacao?: true
    dataAtualizacao?: true
    _all?: true
  }

  export type QuestaoAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questao to aggregate.
     */
    where?: QuestaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questaos to fetch.
     */
    orderBy?: Enumerable<QuestaoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questaos
    **/
    _count?: true | QuestaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestaoMaxAggregateInputType
  }

  export type GetQuestaoAggregateType<T extends QuestaoAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestao[P]>
      : GetScalarType<T[P], AggregateQuestao[P]>
  }




  export type QuestaoGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: QuestaoWhereInput
    orderBy?: Enumerable<QuestaoOrderByWithAggregationInput>
    by: QuestaoScalarFieldEnum[]
    having?: QuestaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestaoCountAggregateInputType | true
    _avg?: QuestaoAvgAggregateInputType
    _sum?: QuestaoSumAggregateInputType
    _min?: QuestaoMinAggregateInputType
    _max?: QuestaoMaxAggregateInputType
  }


  export type QuestaoGroupByOutputType = {
    id: number
    provaId: number
    ordem: number
    enunciado: string
    tipo: string
    opcoes: JsonValue | null
    respostaCorreta: string | null
    valor: Decimal
    habilidadeBncc: string | null
    descricaoBncc: string | null
    dataCriacao: Date
    dataAtualizacao: Date
    _count: QuestaoCountAggregateOutputType | null
    _avg: QuestaoAvgAggregateOutputType | null
    _sum: QuestaoSumAggregateOutputType | null
    _min: QuestaoMinAggregateOutputType | null
    _max: QuestaoMaxAggregateOutputType | null
  }

  type GetQuestaoGroupByPayload<T extends QuestaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<QuestaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestaoGroupByOutputType[P]>
            : GetScalarType<T[P], QuestaoGroupByOutputType[P]>
        }
      >
    >


  export type QuestaoSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provaId?: boolean
    ordem?: boolean
    enunciado?: boolean
    tipo?: boolean
    opcoes?: boolean
    respostaCorreta?: boolean
    valor?: boolean
    habilidadeBncc?: boolean
    descricaoBncc?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    prova?: boolean | ProvaArgs<ExtArgs>
  }, ExtArgs["result"]["questao"]>

  export type QuestaoSelectScalar = {
    id?: boolean
    provaId?: boolean
    ordem?: boolean
    enunciado?: boolean
    tipo?: boolean
    opcoes?: boolean
    respostaCorreta?: boolean
    valor?: boolean
    habilidadeBncc?: boolean
    descricaoBncc?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
  }

  export type QuestaoInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    prova?: boolean | ProvaArgs<ExtArgs>
  }


  type QuestaoGetPayload<S extends boolean | null | undefined | QuestaoArgs> = $Types.GetResult<QuestaoPayload, S>

  type QuestaoCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<QuestaoFindManyArgs, 'select' | 'include'> & {
      select?: QuestaoCountAggregateInputType | true
    }

  export interface QuestaoDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Questao'], meta: { name: 'Questao' } }
    /**
     * Find zero or one Questao that matches the filter.
     * @param {QuestaoFindUniqueArgs} args - Arguments to find a Questao
     * @example
     * // Get one Questao
     * const questao = await prisma.questao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QuestaoFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, QuestaoFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Questao'> extends True ? Prisma__QuestaoClient<$Types.GetResult<QuestaoPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__QuestaoClient<$Types.GetResult<QuestaoPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Questao that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {QuestaoFindUniqueOrThrowArgs} args - Arguments to find a Questao
     * @example
     * // Get one Questao
     * const questao = await prisma.questao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends QuestaoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestaoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__QuestaoClient<$Types.GetResult<QuestaoPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Questao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestaoFindFirstArgs} args - Arguments to find a Questao
     * @example
     * // Get one Questao
     * const questao = await prisma.questao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QuestaoFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, QuestaoFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Questao'> extends True ? Prisma__QuestaoClient<$Types.GetResult<QuestaoPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__QuestaoClient<$Types.GetResult<QuestaoPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Questao that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestaoFindFirstOrThrowArgs} args - Arguments to find a Questao
     * @example
     * // Get one Questao
     * const questao = await prisma.questao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends QuestaoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestaoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__QuestaoClient<$Types.GetResult<QuestaoPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Questaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestaoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questaos
     * const questaos = await prisma.questao.findMany()
     * 
     * // Get first 10 Questaos
     * const questaos = await prisma.questao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questaoWithIdOnly = await prisma.questao.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends QuestaoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestaoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<QuestaoPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Questao.
     * @param {QuestaoCreateArgs} args - Arguments to create a Questao.
     * @example
     * // Create one Questao
     * const Questao = await prisma.questao.create({
     *   data: {
     *     // ... data to create a Questao
     *   }
     * })
     * 
    **/
    create<T extends QuestaoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, QuestaoCreateArgs<ExtArgs>>
    ): Prisma__QuestaoClient<$Types.GetResult<QuestaoPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Questaos.
     *     @param {QuestaoCreateManyArgs} args - Arguments to create many Questaos.
     *     @example
     *     // Create many Questaos
     *     const questao = await prisma.questao.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends QuestaoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestaoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Questao.
     * @param {QuestaoDeleteArgs} args - Arguments to delete one Questao.
     * @example
     * // Delete one Questao
     * const Questao = await prisma.questao.delete({
     *   where: {
     *     // ... filter to delete one Questao
     *   }
     * })
     * 
    **/
    delete<T extends QuestaoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, QuestaoDeleteArgs<ExtArgs>>
    ): Prisma__QuestaoClient<$Types.GetResult<QuestaoPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Questao.
     * @param {QuestaoUpdateArgs} args - Arguments to update one Questao.
     * @example
     * // Update one Questao
     * const questao = await prisma.questao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QuestaoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, QuestaoUpdateArgs<ExtArgs>>
    ): Prisma__QuestaoClient<$Types.GetResult<QuestaoPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Questaos.
     * @param {QuestaoDeleteManyArgs} args - Arguments to filter Questaos to delete.
     * @example
     * // Delete a few Questaos
     * const { count } = await prisma.questao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QuestaoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestaoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questaos
     * const questao = await prisma.questao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QuestaoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, QuestaoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Questao.
     * @param {QuestaoUpsertArgs} args - Arguments to update or create a Questao.
     * @example
     * // Update or create a Questao
     * const questao = await prisma.questao.upsert({
     *   create: {
     *     // ... data to create a Questao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Questao we want to update
     *   }
     * })
    **/
    upsert<T extends QuestaoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, QuestaoUpsertArgs<ExtArgs>>
    ): Prisma__QuestaoClient<$Types.GetResult<QuestaoPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Questaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestaoCountArgs} args - Arguments to filter Questaos to count.
     * @example
     * // Count the number of Questaos
     * const count = await prisma.questao.count({
     *   where: {
     *     // ... the filter for the Questaos we want to count
     *   }
     * })
    **/
    count<T extends QuestaoCountArgs>(
      args?: Subset<T, QuestaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Questao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestaoAggregateArgs>(args: Subset<T, QuestaoAggregateArgs>): Prisma.PrismaPromise<GetQuestaoAggregateType<T>>

    /**
     * Group by Questao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestaoGroupByArgs} args - Group by arguments.
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
      T extends QuestaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestaoGroupByArgs['orderBy'] }
        : { orderBy?: QuestaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, QuestaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Questao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__QuestaoClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    prova<T extends ProvaArgs<ExtArgs> = {}>(args?: Subset<T, ProvaArgs<ExtArgs>>): Prisma__ProvaClient<$Types.GetResult<ProvaPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Questao base type for findUnique actions
   */
  export type QuestaoFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestaoInclude<ExtArgs> | null
    /**
     * Filter, which Questao to fetch.
     */
    where: QuestaoWhereUniqueInput
  }

  /**
   * Questao findUnique
   */
  export interface QuestaoFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends QuestaoFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Questao findUniqueOrThrow
   */
  export type QuestaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestaoInclude<ExtArgs> | null
    /**
     * Filter, which Questao to fetch.
     */
    where: QuestaoWhereUniqueInput
  }


  /**
   * Questao base type for findFirst actions
   */
  export type QuestaoFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestaoInclude<ExtArgs> | null
    /**
     * Filter, which Questao to fetch.
     */
    where?: QuestaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questaos to fetch.
     */
    orderBy?: Enumerable<QuestaoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questaos.
     */
    cursor?: QuestaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questaos.
     */
    distinct?: Enumerable<QuestaoScalarFieldEnum>
  }

  /**
   * Questao findFirst
   */
  export interface QuestaoFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends QuestaoFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Questao findFirstOrThrow
   */
  export type QuestaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestaoInclude<ExtArgs> | null
    /**
     * Filter, which Questao to fetch.
     */
    where?: QuestaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questaos to fetch.
     */
    orderBy?: Enumerable<QuestaoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questaos.
     */
    cursor?: QuestaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questaos.
     */
    distinct?: Enumerable<QuestaoScalarFieldEnum>
  }


  /**
   * Questao findMany
   */
  export type QuestaoFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestaoInclude<ExtArgs> | null
    /**
     * Filter, which Questaos to fetch.
     */
    where?: QuestaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questaos to fetch.
     */
    orderBy?: Enumerable<QuestaoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questaos.
     */
    cursor?: QuestaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questaos.
     */
    skip?: number
    distinct?: Enumerable<QuestaoScalarFieldEnum>
  }


  /**
   * Questao create
   */
  export type QuestaoCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Questao.
     */
    data: XOR<QuestaoCreateInput, QuestaoUncheckedCreateInput>
  }


  /**
   * Questao createMany
   */
  export type QuestaoCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questaos.
     */
    data: Enumerable<QuestaoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Questao update
   */
  export type QuestaoUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Questao.
     */
    data: XOR<QuestaoUpdateInput, QuestaoUncheckedUpdateInput>
    /**
     * Choose, which Questao to update.
     */
    where: QuestaoWhereUniqueInput
  }


  /**
   * Questao updateMany
   */
  export type QuestaoUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questaos.
     */
    data: XOR<QuestaoUpdateManyMutationInput, QuestaoUncheckedUpdateManyInput>
    /**
     * Filter which Questaos to update
     */
    where?: QuestaoWhereInput
  }


  /**
   * Questao upsert
   */
  export type QuestaoUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Questao to update in case it exists.
     */
    where: QuestaoWhereUniqueInput
    /**
     * In case the Questao found by the `where` argument doesn't exist, create a new Questao with this data.
     */
    create: XOR<QuestaoCreateInput, QuestaoUncheckedCreateInput>
    /**
     * In case the Questao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestaoUpdateInput, QuestaoUncheckedUpdateInput>
  }


  /**
   * Questao delete
   */
  export type QuestaoDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestaoInclude<ExtArgs> | null
    /**
     * Filter which Questao to delete.
     */
    where: QuestaoWhereUniqueInput
  }


  /**
   * Questao deleteMany
   */
  export type QuestaoDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questaos to delete
     */
    where?: QuestaoWhereInput
  }


  /**
   * Questao without action
   */
  export type QuestaoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestaoInclude<ExtArgs> | null
  }



  /**
   * Model AplicacaoProva
   */


  export type AggregateAplicacaoProva = {
    _count: AplicacaoProvaCountAggregateOutputType | null
    _avg: AplicacaoProvaAvgAggregateOutputType | null
    _sum: AplicacaoProvaSumAggregateOutputType | null
    _min: AplicacaoProvaMinAggregateOutputType | null
    _max: AplicacaoProvaMaxAggregateOutputType | null
  }

  export type AplicacaoProvaAvgAggregateOutputType = {
    id: number | null
    provaId: number | null
    turmaId: number | null
  }

  export type AplicacaoProvaSumAggregateOutputType = {
    id: number | null
    provaId: number | null
    turmaId: number | null
  }

  export type AplicacaoProvaMinAggregateOutputType = {
    id: number | null
    provaId: number | null
    turmaId: number | null
    dataAplicacao: Date | null
    horaInicio: Date | null
    horaTermino: Date | null
    observacoes: string | null
    dataCriacao: Date | null
  }

  export type AplicacaoProvaMaxAggregateOutputType = {
    id: number | null
    provaId: number | null
    turmaId: number | null
    dataAplicacao: Date | null
    horaInicio: Date | null
    horaTermino: Date | null
    observacoes: string | null
    dataCriacao: Date | null
  }

  export type AplicacaoProvaCountAggregateOutputType = {
    id: number
    provaId: number
    turmaId: number
    dataAplicacao: number
    horaInicio: number
    horaTermino: number
    observacoes: number
    dataCriacao: number
    _all: number
  }


  export type AplicacaoProvaAvgAggregateInputType = {
    id?: true
    provaId?: true
    turmaId?: true
  }

  export type AplicacaoProvaSumAggregateInputType = {
    id?: true
    provaId?: true
    turmaId?: true
  }

  export type AplicacaoProvaMinAggregateInputType = {
    id?: true
    provaId?: true
    turmaId?: true
    dataAplicacao?: true
    horaInicio?: true
    horaTermino?: true
    observacoes?: true
    dataCriacao?: true
  }

  export type AplicacaoProvaMaxAggregateInputType = {
    id?: true
    provaId?: true
    turmaId?: true
    dataAplicacao?: true
    horaInicio?: true
    horaTermino?: true
    observacoes?: true
    dataCriacao?: true
  }

  export type AplicacaoProvaCountAggregateInputType = {
    id?: true
    provaId?: true
    turmaId?: true
    dataAplicacao?: true
    horaInicio?: true
    horaTermino?: true
    observacoes?: true
    dataCriacao?: true
    _all?: true
  }

  export type AplicacaoProvaAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which AplicacaoProva to aggregate.
     */
    where?: AplicacaoProvaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AplicacaoProva to fetch.
     */
    orderBy?: Enumerable<AplicacaoProvaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AplicacaoProvaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AplicacaoProva from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AplicacaoProva.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AplicacaoProva
    **/
    _count?: true | AplicacaoProvaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AplicacaoProvaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AplicacaoProvaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AplicacaoProvaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AplicacaoProvaMaxAggregateInputType
  }

  export type GetAplicacaoProvaAggregateType<T extends AplicacaoProvaAggregateArgs> = {
        [P in keyof T & keyof AggregateAplicacaoProva]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAplicacaoProva[P]>
      : GetScalarType<T[P], AggregateAplicacaoProva[P]>
  }




  export type AplicacaoProvaGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AplicacaoProvaWhereInput
    orderBy?: Enumerable<AplicacaoProvaOrderByWithAggregationInput>
    by: AplicacaoProvaScalarFieldEnum[]
    having?: AplicacaoProvaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AplicacaoProvaCountAggregateInputType | true
    _avg?: AplicacaoProvaAvgAggregateInputType
    _sum?: AplicacaoProvaSumAggregateInputType
    _min?: AplicacaoProvaMinAggregateInputType
    _max?: AplicacaoProvaMaxAggregateInputType
  }


  export type AplicacaoProvaGroupByOutputType = {
    id: number
    provaId: number
    turmaId: number
    dataAplicacao: Date
    horaInicio: Date | null
    horaTermino: Date | null
    observacoes: string | null
    dataCriacao: Date
    _count: AplicacaoProvaCountAggregateOutputType | null
    _avg: AplicacaoProvaAvgAggregateOutputType | null
    _sum: AplicacaoProvaSumAggregateOutputType | null
    _min: AplicacaoProvaMinAggregateOutputType | null
    _max: AplicacaoProvaMaxAggregateOutputType | null
  }

  type GetAplicacaoProvaGroupByPayload<T extends AplicacaoProvaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AplicacaoProvaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AplicacaoProvaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AplicacaoProvaGroupByOutputType[P]>
            : GetScalarType<T[P], AplicacaoProvaGroupByOutputType[P]>
        }
      >
    >


  export type AplicacaoProvaSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provaId?: boolean
    turmaId?: boolean
    dataAplicacao?: boolean
    horaInicio?: boolean
    horaTermino?: boolean
    observacoes?: boolean
    dataCriacao?: boolean
    prova?: boolean | ProvaArgs<ExtArgs>
    turma?: boolean | TurmaArgs<ExtArgs>
    resultados?: boolean | AplicacaoProva$resultadosArgs<ExtArgs>
    _count?: boolean | AplicacaoProvaCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["aplicacaoProva"]>

  export type AplicacaoProvaSelectScalar = {
    id?: boolean
    provaId?: boolean
    turmaId?: boolean
    dataAplicacao?: boolean
    horaInicio?: boolean
    horaTermino?: boolean
    observacoes?: boolean
    dataCriacao?: boolean
  }

  export type AplicacaoProvaInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    prova?: boolean | ProvaArgs<ExtArgs>
    turma?: boolean | TurmaArgs<ExtArgs>
    resultados?: boolean | AplicacaoProva$resultadosArgs<ExtArgs>
    _count?: boolean | AplicacaoProvaCountOutputTypeArgs<ExtArgs>
  }


  type AplicacaoProvaGetPayload<S extends boolean | null | undefined | AplicacaoProvaArgs> = $Types.GetResult<AplicacaoProvaPayload, S>

  type AplicacaoProvaCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AplicacaoProvaFindManyArgs, 'select' | 'include'> & {
      select?: AplicacaoProvaCountAggregateInputType | true
    }

  export interface AplicacaoProvaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AplicacaoProva'], meta: { name: 'AplicacaoProva' } }
    /**
     * Find zero or one AplicacaoProva that matches the filter.
     * @param {AplicacaoProvaFindUniqueArgs} args - Arguments to find a AplicacaoProva
     * @example
     * // Get one AplicacaoProva
     * const aplicacaoProva = await prisma.aplicacaoProva.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AplicacaoProvaFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AplicacaoProvaFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'AplicacaoProva'> extends True ? Prisma__AplicacaoProvaClient<$Types.GetResult<AplicacaoProvaPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__AplicacaoProvaClient<$Types.GetResult<AplicacaoProvaPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one AplicacaoProva that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AplicacaoProvaFindUniqueOrThrowArgs} args - Arguments to find a AplicacaoProva
     * @example
     * // Get one AplicacaoProva
     * const aplicacaoProva = await prisma.aplicacaoProva.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AplicacaoProvaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AplicacaoProvaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AplicacaoProvaClient<$Types.GetResult<AplicacaoProvaPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first AplicacaoProva that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AplicacaoProvaFindFirstArgs} args - Arguments to find a AplicacaoProva
     * @example
     * // Get one AplicacaoProva
     * const aplicacaoProva = await prisma.aplicacaoProva.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AplicacaoProvaFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AplicacaoProvaFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'AplicacaoProva'> extends True ? Prisma__AplicacaoProvaClient<$Types.GetResult<AplicacaoProvaPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__AplicacaoProvaClient<$Types.GetResult<AplicacaoProvaPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first AplicacaoProva that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AplicacaoProvaFindFirstOrThrowArgs} args - Arguments to find a AplicacaoProva
     * @example
     * // Get one AplicacaoProva
     * const aplicacaoProva = await prisma.aplicacaoProva.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AplicacaoProvaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AplicacaoProvaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AplicacaoProvaClient<$Types.GetResult<AplicacaoProvaPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more AplicacaoProva that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AplicacaoProvaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AplicacaoProva
     * const aplicacaoProva = await prisma.aplicacaoProva.findMany()
     * 
     * // Get first 10 AplicacaoProva
     * const aplicacaoProva = await prisma.aplicacaoProva.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aplicacaoProvaWithIdOnly = await prisma.aplicacaoProva.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AplicacaoProvaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AplicacaoProvaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<AplicacaoProvaPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a AplicacaoProva.
     * @param {AplicacaoProvaCreateArgs} args - Arguments to create a AplicacaoProva.
     * @example
     * // Create one AplicacaoProva
     * const AplicacaoProva = await prisma.aplicacaoProva.create({
     *   data: {
     *     // ... data to create a AplicacaoProva
     *   }
     * })
     * 
    **/
    create<T extends AplicacaoProvaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AplicacaoProvaCreateArgs<ExtArgs>>
    ): Prisma__AplicacaoProvaClient<$Types.GetResult<AplicacaoProvaPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many AplicacaoProva.
     *     @param {AplicacaoProvaCreateManyArgs} args - Arguments to create many AplicacaoProva.
     *     @example
     *     // Create many AplicacaoProva
     *     const aplicacaoProva = await prisma.aplicacaoProva.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AplicacaoProvaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AplicacaoProvaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AplicacaoProva.
     * @param {AplicacaoProvaDeleteArgs} args - Arguments to delete one AplicacaoProva.
     * @example
     * // Delete one AplicacaoProva
     * const AplicacaoProva = await prisma.aplicacaoProva.delete({
     *   where: {
     *     // ... filter to delete one AplicacaoProva
     *   }
     * })
     * 
    **/
    delete<T extends AplicacaoProvaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AplicacaoProvaDeleteArgs<ExtArgs>>
    ): Prisma__AplicacaoProvaClient<$Types.GetResult<AplicacaoProvaPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one AplicacaoProva.
     * @param {AplicacaoProvaUpdateArgs} args - Arguments to update one AplicacaoProva.
     * @example
     * // Update one AplicacaoProva
     * const aplicacaoProva = await prisma.aplicacaoProva.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AplicacaoProvaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AplicacaoProvaUpdateArgs<ExtArgs>>
    ): Prisma__AplicacaoProvaClient<$Types.GetResult<AplicacaoProvaPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more AplicacaoProva.
     * @param {AplicacaoProvaDeleteManyArgs} args - Arguments to filter AplicacaoProva to delete.
     * @example
     * // Delete a few AplicacaoProva
     * const { count } = await prisma.aplicacaoProva.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AplicacaoProvaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AplicacaoProvaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AplicacaoProva.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AplicacaoProvaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AplicacaoProva
     * const aplicacaoProva = await prisma.aplicacaoProva.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AplicacaoProvaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AplicacaoProvaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AplicacaoProva.
     * @param {AplicacaoProvaUpsertArgs} args - Arguments to update or create a AplicacaoProva.
     * @example
     * // Update or create a AplicacaoProva
     * const aplicacaoProva = await prisma.aplicacaoProva.upsert({
     *   create: {
     *     // ... data to create a AplicacaoProva
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AplicacaoProva we want to update
     *   }
     * })
    **/
    upsert<T extends AplicacaoProvaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AplicacaoProvaUpsertArgs<ExtArgs>>
    ): Prisma__AplicacaoProvaClient<$Types.GetResult<AplicacaoProvaPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of AplicacaoProva.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AplicacaoProvaCountArgs} args - Arguments to filter AplicacaoProva to count.
     * @example
     * // Count the number of AplicacaoProva
     * const count = await prisma.aplicacaoProva.count({
     *   where: {
     *     // ... the filter for the AplicacaoProva we want to count
     *   }
     * })
    **/
    count<T extends AplicacaoProvaCountArgs>(
      args?: Subset<T, AplicacaoProvaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AplicacaoProvaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AplicacaoProva.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AplicacaoProvaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AplicacaoProvaAggregateArgs>(args: Subset<T, AplicacaoProvaAggregateArgs>): Prisma.PrismaPromise<GetAplicacaoProvaAggregateType<T>>

    /**
     * Group by AplicacaoProva.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AplicacaoProvaGroupByArgs} args - Group by arguments.
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
      T extends AplicacaoProvaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AplicacaoProvaGroupByArgs['orderBy'] }
        : { orderBy?: AplicacaoProvaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AplicacaoProvaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAplicacaoProvaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for AplicacaoProva.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AplicacaoProvaClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    prova<T extends ProvaArgs<ExtArgs> = {}>(args?: Subset<T, ProvaArgs<ExtArgs>>): Prisma__ProvaClient<$Types.GetResult<ProvaPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    turma<T extends TurmaArgs<ExtArgs> = {}>(args?: Subset<T, TurmaArgs<ExtArgs>>): Prisma__TurmaClient<$Types.GetResult<TurmaPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    resultados<T extends AplicacaoProva$resultadosArgs<ExtArgs> = {}>(args?: Subset<T, AplicacaoProva$resultadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ResultadoPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * AplicacaoProva base type for findUnique actions
   */
  export type AplicacaoProvaFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AplicacaoProva
     */
    select?: AplicacaoProvaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AplicacaoProvaInclude<ExtArgs> | null
    /**
     * Filter, which AplicacaoProva to fetch.
     */
    where: AplicacaoProvaWhereUniqueInput
  }

  /**
   * AplicacaoProva findUnique
   */
  export interface AplicacaoProvaFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends AplicacaoProvaFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AplicacaoProva findUniqueOrThrow
   */
  export type AplicacaoProvaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AplicacaoProva
     */
    select?: AplicacaoProvaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AplicacaoProvaInclude<ExtArgs> | null
    /**
     * Filter, which AplicacaoProva to fetch.
     */
    where: AplicacaoProvaWhereUniqueInput
  }


  /**
   * AplicacaoProva base type for findFirst actions
   */
  export type AplicacaoProvaFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AplicacaoProva
     */
    select?: AplicacaoProvaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AplicacaoProvaInclude<ExtArgs> | null
    /**
     * Filter, which AplicacaoProva to fetch.
     */
    where?: AplicacaoProvaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AplicacaoProva to fetch.
     */
    orderBy?: Enumerable<AplicacaoProvaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AplicacaoProva.
     */
    cursor?: AplicacaoProvaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AplicacaoProva from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AplicacaoProva.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AplicacaoProva.
     */
    distinct?: Enumerable<AplicacaoProvaScalarFieldEnum>
  }

  /**
   * AplicacaoProva findFirst
   */
  export interface AplicacaoProvaFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends AplicacaoProvaFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AplicacaoProva findFirstOrThrow
   */
  export type AplicacaoProvaFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AplicacaoProva
     */
    select?: AplicacaoProvaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AplicacaoProvaInclude<ExtArgs> | null
    /**
     * Filter, which AplicacaoProva to fetch.
     */
    where?: AplicacaoProvaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AplicacaoProva to fetch.
     */
    orderBy?: Enumerable<AplicacaoProvaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AplicacaoProva.
     */
    cursor?: AplicacaoProvaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AplicacaoProva from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AplicacaoProva.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AplicacaoProva.
     */
    distinct?: Enumerable<AplicacaoProvaScalarFieldEnum>
  }


  /**
   * AplicacaoProva findMany
   */
  export type AplicacaoProvaFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AplicacaoProva
     */
    select?: AplicacaoProvaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AplicacaoProvaInclude<ExtArgs> | null
    /**
     * Filter, which AplicacaoProva to fetch.
     */
    where?: AplicacaoProvaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AplicacaoProva to fetch.
     */
    orderBy?: Enumerable<AplicacaoProvaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AplicacaoProva.
     */
    cursor?: AplicacaoProvaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AplicacaoProva from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AplicacaoProva.
     */
    skip?: number
    distinct?: Enumerable<AplicacaoProvaScalarFieldEnum>
  }


  /**
   * AplicacaoProva create
   */
  export type AplicacaoProvaCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AplicacaoProva
     */
    select?: AplicacaoProvaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AplicacaoProvaInclude<ExtArgs> | null
    /**
     * The data needed to create a AplicacaoProva.
     */
    data: XOR<AplicacaoProvaCreateInput, AplicacaoProvaUncheckedCreateInput>
  }


  /**
   * AplicacaoProva createMany
   */
  export type AplicacaoProvaCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AplicacaoProva.
     */
    data: Enumerable<AplicacaoProvaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * AplicacaoProva update
   */
  export type AplicacaoProvaUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AplicacaoProva
     */
    select?: AplicacaoProvaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AplicacaoProvaInclude<ExtArgs> | null
    /**
     * The data needed to update a AplicacaoProva.
     */
    data: XOR<AplicacaoProvaUpdateInput, AplicacaoProvaUncheckedUpdateInput>
    /**
     * Choose, which AplicacaoProva to update.
     */
    where: AplicacaoProvaWhereUniqueInput
  }


  /**
   * AplicacaoProva updateMany
   */
  export type AplicacaoProvaUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AplicacaoProva.
     */
    data: XOR<AplicacaoProvaUpdateManyMutationInput, AplicacaoProvaUncheckedUpdateManyInput>
    /**
     * Filter which AplicacaoProva to update
     */
    where?: AplicacaoProvaWhereInput
  }


  /**
   * AplicacaoProva upsert
   */
  export type AplicacaoProvaUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AplicacaoProva
     */
    select?: AplicacaoProvaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AplicacaoProvaInclude<ExtArgs> | null
    /**
     * The filter to search for the AplicacaoProva to update in case it exists.
     */
    where: AplicacaoProvaWhereUniqueInput
    /**
     * In case the AplicacaoProva found by the `where` argument doesn't exist, create a new AplicacaoProva with this data.
     */
    create: XOR<AplicacaoProvaCreateInput, AplicacaoProvaUncheckedCreateInput>
    /**
     * In case the AplicacaoProva was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AplicacaoProvaUpdateInput, AplicacaoProvaUncheckedUpdateInput>
  }


  /**
   * AplicacaoProva delete
   */
  export type AplicacaoProvaDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AplicacaoProva
     */
    select?: AplicacaoProvaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AplicacaoProvaInclude<ExtArgs> | null
    /**
     * Filter which AplicacaoProva to delete.
     */
    where: AplicacaoProvaWhereUniqueInput
  }


  /**
   * AplicacaoProva deleteMany
   */
  export type AplicacaoProvaDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which AplicacaoProva to delete
     */
    where?: AplicacaoProvaWhereInput
  }


  /**
   * AplicacaoProva.resultados
   */
  export type AplicacaoProva$resultadosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultadoInclude<ExtArgs> | null
    where?: ResultadoWhereInput
    orderBy?: Enumerable<ResultadoOrderByWithRelationInput>
    cursor?: ResultadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ResultadoScalarFieldEnum>
  }


  /**
   * AplicacaoProva without action
   */
  export type AplicacaoProvaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AplicacaoProva
     */
    select?: AplicacaoProvaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AplicacaoProvaInclude<ExtArgs> | null
  }



  /**
   * Model Resultado
   */


  export type AggregateResultado = {
    _count: ResultadoCountAggregateOutputType | null
    _avg: ResultadoAvgAggregateOutputType | null
    _sum: ResultadoSumAggregateOutputType | null
    _min: ResultadoMinAggregateOutputType | null
    _max: ResultadoMaxAggregateOutputType | null
  }

  export type ResultadoAvgAggregateOutputType = {
    id: number | null
    alunoId: number | null
    provaId: number | null
    aplicacaoId: number | null
    pontuacao: Decimal | null
    percentual: Decimal | null
    corrigidoPor: number | null
  }

  export type ResultadoSumAggregateOutputType = {
    id: number | null
    alunoId: number | null
    provaId: number | null
    aplicacaoId: number | null
    pontuacao: Decimal | null
    percentual: Decimal | null
    corrigidoPor: number | null
  }

  export type ResultadoMinAggregateOutputType = {
    id: number | null
    alunoId: number | null
    provaId: number | null
    aplicacaoId: number | null
    pontuacao: Decimal | null
    percentual: Decimal | null
    dataCorrecao: Date | null
    corrigidoPor: number | null
    observacoes: string | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
  }

  export type ResultadoMaxAggregateOutputType = {
    id: number | null
    alunoId: number | null
    provaId: number | null
    aplicacaoId: number | null
    pontuacao: Decimal | null
    percentual: Decimal | null
    dataCorrecao: Date | null
    corrigidoPor: number | null
    observacoes: string | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
  }

  export type ResultadoCountAggregateOutputType = {
    id: number
    alunoId: number
    provaId: number
    aplicacaoId: number
    respostas: number
    pontuacao: number
    percentual: number
    dataCorrecao: number
    corrigidoPor: number
    observacoes: number
    dataCriacao: number
    dataAtualizacao: number
    _all: number
  }


  export type ResultadoAvgAggregateInputType = {
    id?: true
    alunoId?: true
    provaId?: true
    aplicacaoId?: true
    pontuacao?: true
    percentual?: true
    corrigidoPor?: true
  }

  export type ResultadoSumAggregateInputType = {
    id?: true
    alunoId?: true
    provaId?: true
    aplicacaoId?: true
    pontuacao?: true
    percentual?: true
    corrigidoPor?: true
  }

  export type ResultadoMinAggregateInputType = {
    id?: true
    alunoId?: true
    provaId?: true
    aplicacaoId?: true
    pontuacao?: true
    percentual?: true
    dataCorrecao?: true
    corrigidoPor?: true
    observacoes?: true
    dataCriacao?: true
    dataAtualizacao?: true
  }

  export type ResultadoMaxAggregateInputType = {
    id?: true
    alunoId?: true
    provaId?: true
    aplicacaoId?: true
    pontuacao?: true
    percentual?: true
    dataCorrecao?: true
    corrigidoPor?: true
    observacoes?: true
    dataCriacao?: true
    dataAtualizacao?: true
  }

  export type ResultadoCountAggregateInputType = {
    id?: true
    alunoId?: true
    provaId?: true
    aplicacaoId?: true
    respostas?: true
    pontuacao?: true
    percentual?: true
    dataCorrecao?: true
    corrigidoPor?: true
    observacoes?: true
    dataCriacao?: true
    dataAtualizacao?: true
    _all?: true
  }

  export type ResultadoAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resultado to aggregate.
     */
    where?: ResultadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resultados to fetch.
     */
    orderBy?: Enumerable<ResultadoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResultadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resultados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resultados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resultados
    **/
    _count?: true | ResultadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResultadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResultadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResultadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResultadoMaxAggregateInputType
  }

  export type GetResultadoAggregateType<T extends ResultadoAggregateArgs> = {
        [P in keyof T & keyof AggregateResultado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResultado[P]>
      : GetScalarType<T[P], AggregateResultado[P]>
  }




  export type ResultadoGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ResultadoWhereInput
    orderBy?: Enumerable<ResultadoOrderByWithAggregationInput>
    by: ResultadoScalarFieldEnum[]
    having?: ResultadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResultadoCountAggregateInputType | true
    _avg?: ResultadoAvgAggregateInputType
    _sum?: ResultadoSumAggregateInputType
    _min?: ResultadoMinAggregateInputType
    _max?: ResultadoMaxAggregateInputType
  }


  export type ResultadoGroupByOutputType = {
    id: number
    alunoId: number
    provaId: number
    aplicacaoId: number
    respostas: JsonValue | null
    pontuacao: Decimal | null
    percentual: Decimal | null
    dataCorrecao: Date | null
    corrigidoPor: number | null
    observacoes: string | null
    dataCriacao: Date
    dataAtualizacao: Date
    _count: ResultadoCountAggregateOutputType | null
    _avg: ResultadoAvgAggregateOutputType | null
    _sum: ResultadoSumAggregateOutputType | null
    _min: ResultadoMinAggregateOutputType | null
    _max: ResultadoMaxAggregateOutputType | null
  }

  type GetResultadoGroupByPayload<T extends ResultadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ResultadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResultadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResultadoGroupByOutputType[P]>
            : GetScalarType<T[P], ResultadoGroupByOutputType[P]>
        }
      >
    >


  export type ResultadoSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alunoId?: boolean
    provaId?: boolean
    aplicacaoId?: boolean
    respostas?: boolean
    pontuacao?: boolean
    percentual?: boolean
    dataCorrecao?: boolean
    corrigidoPor?: boolean
    observacoes?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    aluno?: boolean | AlunoArgs<ExtArgs>
    prova?: boolean | ProvaArgs<ExtArgs>
    aplicacao?: boolean | AplicacaoProvaArgs<ExtArgs>
  }, ExtArgs["result"]["resultado"]>

  export type ResultadoSelectScalar = {
    id?: boolean
    alunoId?: boolean
    provaId?: boolean
    aplicacaoId?: boolean
    respostas?: boolean
    pontuacao?: boolean
    percentual?: boolean
    dataCorrecao?: boolean
    corrigidoPor?: boolean
    observacoes?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
  }

  export type ResultadoInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    aluno?: boolean | AlunoArgs<ExtArgs>
    prova?: boolean | ProvaArgs<ExtArgs>
    aplicacao?: boolean | AplicacaoProvaArgs<ExtArgs>
  }


  type ResultadoGetPayload<S extends boolean | null | undefined | ResultadoArgs> = $Types.GetResult<ResultadoPayload, S>

  type ResultadoCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ResultadoFindManyArgs, 'select' | 'include'> & {
      select?: ResultadoCountAggregateInputType | true
    }

  export interface ResultadoDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resultado'], meta: { name: 'Resultado' } }
    /**
     * Find zero or one Resultado that matches the filter.
     * @param {ResultadoFindUniqueArgs} args - Arguments to find a Resultado
     * @example
     * // Get one Resultado
     * const resultado = await prisma.resultado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ResultadoFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ResultadoFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Resultado'> extends True ? Prisma__ResultadoClient<$Types.GetResult<ResultadoPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__ResultadoClient<$Types.GetResult<ResultadoPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Resultado that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ResultadoFindUniqueOrThrowArgs} args - Arguments to find a Resultado
     * @example
     * // Get one Resultado
     * const resultado = await prisma.resultado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ResultadoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ResultadoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ResultadoClient<$Types.GetResult<ResultadoPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Resultado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoFindFirstArgs} args - Arguments to find a Resultado
     * @example
     * // Get one Resultado
     * const resultado = await prisma.resultado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ResultadoFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ResultadoFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Resultado'> extends True ? Prisma__ResultadoClient<$Types.GetResult<ResultadoPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__ResultadoClient<$Types.GetResult<ResultadoPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Resultado that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoFindFirstOrThrowArgs} args - Arguments to find a Resultado
     * @example
     * // Get one Resultado
     * const resultado = await prisma.resultado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ResultadoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ResultadoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ResultadoClient<$Types.GetResult<ResultadoPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Resultados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resultados
     * const resultados = await prisma.resultado.findMany()
     * 
     * // Get first 10 Resultados
     * const resultados = await prisma.resultado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resultadoWithIdOnly = await prisma.resultado.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ResultadoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResultadoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<ResultadoPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Resultado.
     * @param {ResultadoCreateArgs} args - Arguments to create a Resultado.
     * @example
     * // Create one Resultado
     * const Resultado = await prisma.resultado.create({
     *   data: {
     *     // ... data to create a Resultado
     *   }
     * })
     * 
    **/
    create<T extends ResultadoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ResultadoCreateArgs<ExtArgs>>
    ): Prisma__ResultadoClient<$Types.GetResult<ResultadoPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Resultados.
     *     @param {ResultadoCreateManyArgs} args - Arguments to create many Resultados.
     *     @example
     *     // Create many Resultados
     *     const resultado = await prisma.resultado.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ResultadoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResultadoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Resultado.
     * @param {ResultadoDeleteArgs} args - Arguments to delete one Resultado.
     * @example
     * // Delete one Resultado
     * const Resultado = await prisma.resultado.delete({
     *   where: {
     *     // ... filter to delete one Resultado
     *   }
     * })
     * 
    **/
    delete<T extends ResultadoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ResultadoDeleteArgs<ExtArgs>>
    ): Prisma__ResultadoClient<$Types.GetResult<ResultadoPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Resultado.
     * @param {ResultadoUpdateArgs} args - Arguments to update one Resultado.
     * @example
     * // Update one Resultado
     * const resultado = await prisma.resultado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ResultadoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ResultadoUpdateArgs<ExtArgs>>
    ): Prisma__ResultadoClient<$Types.GetResult<ResultadoPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Resultados.
     * @param {ResultadoDeleteManyArgs} args - Arguments to filter Resultados to delete.
     * @example
     * // Delete a few Resultados
     * const { count } = await prisma.resultado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ResultadoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResultadoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resultados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resultados
     * const resultado = await prisma.resultado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ResultadoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ResultadoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Resultado.
     * @param {ResultadoUpsertArgs} args - Arguments to update or create a Resultado.
     * @example
     * // Update or create a Resultado
     * const resultado = await prisma.resultado.upsert({
     *   create: {
     *     // ... data to create a Resultado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resultado we want to update
     *   }
     * })
    **/
    upsert<T extends ResultadoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ResultadoUpsertArgs<ExtArgs>>
    ): Prisma__ResultadoClient<$Types.GetResult<ResultadoPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Resultados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoCountArgs} args - Arguments to filter Resultados to count.
     * @example
     * // Count the number of Resultados
     * const count = await prisma.resultado.count({
     *   where: {
     *     // ... the filter for the Resultados we want to count
     *   }
     * })
    **/
    count<T extends ResultadoCountArgs>(
      args?: Subset<T, ResultadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResultadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resultado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResultadoAggregateArgs>(args: Subset<T, ResultadoAggregateArgs>): Prisma.PrismaPromise<GetResultadoAggregateType<T>>

    /**
     * Group by Resultado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoGroupByArgs} args - Group by arguments.
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
      T extends ResultadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResultadoGroupByArgs['orderBy'] }
        : { orderBy?: ResultadoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ResultadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResultadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Resultado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ResultadoClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    aluno<T extends AlunoArgs<ExtArgs> = {}>(args?: Subset<T, AlunoArgs<ExtArgs>>): Prisma__AlunoClient<$Types.GetResult<AlunoPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    prova<T extends ProvaArgs<ExtArgs> = {}>(args?: Subset<T, ProvaArgs<ExtArgs>>): Prisma__ProvaClient<$Types.GetResult<ProvaPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    aplicacao<T extends AplicacaoProvaArgs<ExtArgs> = {}>(args?: Subset<T, AplicacaoProvaArgs<ExtArgs>>): Prisma__AplicacaoProvaClient<$Types.GetResult<AplicacaoProvaPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Resultado base type for findUnique actions
   */
  export type ResultadoFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultadoInclude<ExtArgs> | null
    /**
     * Filter, which Resultado to fetch.
     */
    where: ResultadoWhereUniqueInput
  }

  /**
   * Resultado findUnique
   */
  export interface ResultadoFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ResultadoFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Resultado findUniqueOrThrow
   */
  export type ResultadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultadoInclude<ExtArgs> | null
    /**
     * Filter, which Resultado to fetch.
     */
    where: ResultadoWhereUniqueInput
  }


  /**
   * Resultado base type for findFirst actions
   */
  export type ResultadoFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultadoInclude<ExtArgs> | null
    /**
     * Filter, which Resultado to fetch.
     */
    where?: ResultadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resultados to fetch.
     */
    orderBy?: Enumerable<ResultadoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resultados.
     */
    cursor?: ResultadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resultados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resultados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resultados.
     */
    distinct?: Enumerable<ResultadoScalarFieldEnum>
  }

  /**
   * Resultado findFirst
   */
  export interface ResultadoFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ResultadoFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Resultado findFirstOrThrow
   */
  export type ResultadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultadoInclude<ExtArgs> | null
    /**
     * Filter, which Resultado to fetch.
     */
    where?: ResultadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resultados to fetch.
     */
    orderBy?: Enumerable<ResultadoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resultados.
     */
    cursor?: ResultadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resultados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resultados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resultados.
     */
    distinct?: Enumerable<ResultadoScalarFieldEnum>
  }


  /**
   * Resultado findMany
   */
  export type ResultadoFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultadoInclude<ExtArgs> | null
    /**
     * Filter, which Resultados to fetch.
     */
    where?: ResultadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resultados to fetch.
     */
    orderBy?: Enumerable<ResultadoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resultados.
     */
    cursor?: ResultadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resultados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resultados.
     */
    skip?: number
    distinct?: Enumerable<ResultadoScalarFieldEnum>
  }


  /**
   * Resultado create
   */
  export type ResultadoCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultadoInclude<ExtArgs> | null
    /**
     * The data needed to create a Resultado.
     */
    data: XOR<ResultadoCreateInput, ResultadoUncheckedCreateInput>
  }


  /**
   * Resultado createMany
   */
  export type ResultadoCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resultados.
     */
    data: Enumerable<ResultadoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Resultado update
   */
  export type ResultadoUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultadoInclude<ExtArgs> | null
    /**
     * The data needed to update a Resultado.
     */
    data: XOR<ResultadoUpdateInput, ResultadoUncheckedUpdateInput>
    /**
     * Choose, which Resultado to update.
     */
    where: ResultadoWhereUniqueInput
  }


  /**
   * Resultado updateMany
   */
  export type ResultadoUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resultados.
     */
    data: XOR<ResultadoUpdateManyMutationInput, ResultadoUncheckedUpdateManyInput>
    /**
     * Filter which Resultados to update
     */
    where?: ResultadoWhereInput
  }


  /**
   * Resultado upsert
   */
  export type ResultadoUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultadoInclude<ExtArgs> | null
    /**
     * The filter to search for the Resultado to update in case it exists.
     */
    where: ResultadoWhereUniqueInput
    /**
     * In case the Resultado found by the `where` argument doesn't exist, create a new Resultado with this data.
     */
    create: XOR<ResultadoCreateInput, ResultadoUncheckedCreateInput>
    /**
     * In case the Resultado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResultadoUpdateInput, ResultadoUncheckedUpdateInput>
  }


  /**
   * Resultado delete
   */
  export type ResultadoDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultadoInclude<ExtArgs> | null
    /**
     * Filter which Resultado to delete.
     */
    where: ResultadoWhereUniqueInput
  }


  /**
   * Resultado deleteMany
   */
  export type ResultadoDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resultados to delete
     */
    where?: ResultadoWhereInput
  }


  /**
   * Resultado without action
   */
  export type ResultadoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultadoInclude<ExtArgs> | null
  }



  /**
   * Model Usuario
   */


  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
    escolaId: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
    escolaId: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    tipo: string | null
    escolaId: number | null
    fotoUrl: string | null
    ultimoAcesso: Date | null
    ativo: boolean | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    tipo: string | null
    escolaId: number | null
    fotoUrl: string | null
    ultimoAcesso: Date | null
    ativo: boolean | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    tipo: number
    escolaId: number
    fotoUrl: number
    ultimoAcesso: number
    ativo: number
    dataCriacao: number
    dataAtualizacao: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
    escolaId?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
    escolaId?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    tipo?: true
    escolaId?: true
    fotoUrl?: true
    ultimoAcesso?: true
    ativo?: true
    dataCriacao?: true
    dataAtualizacao?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    tipo?: true
    escolaId?: true
    fotoUrl?: true
    ultimoAcesso?: true
    ativo?: true
    dataCriacao?: true
    dataAtualizacao?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    tipo?: true
    escolaId?: true
    fotoUrl?: true
    ultimoAcesso?: true
    ativo?: true
    dataCriacao?: true
    dataAtualizacao?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: Enumerable<UsuarioOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: Enumerable<UsuarioOrderByWithAggregationInput>
    by: UsuarioScalarFieldEnum[]
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }


  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha: string
    tipo: string
    escolaId: number | null
    fotoUrl: string | null
    ultimoAcesso: Date | null
    ativo: boolean
    dataCriacao: Date
    dataAtualizacao: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    tipo?: boolean
    escolaId?: boolean
    fotoUrl?: boolean
    ultimoAcesso?: boolean
    ativo?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    escola?: boolean | EscolaArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    tipo?: boolean
    escolaId?: boolean
    fotoUrl?: boolean
    ultimoAcesso?: boolean
    ativo?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
  }

  export type UsuarioInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    escola?: boolean | EscolaArgs<ExtArgs>
  }


  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioArgs> = $Types.GetResult<UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UsuarioFindManyArgs, 'select' | 'include'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsuarioFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Usuario'> extends True ? Prisma__UsuarioClient<$Types.GetResult<UsuarioPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__UsuarioClient<$Types.GetResult<UsuarioPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Usuario that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Types.GetResult<UsuarioPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsuarioFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Usuario'> extends True ? Prisma__UsuarioClient<$Types.GetResult<UsuarioPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__UsuarioClient<$Types.GetResult<UsuarioPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Usuario that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Types.GetResult<UsuarioPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UsuarioFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<UsuarioPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
    **/
    create<T extends UsuarioCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Types.GetResult<UsuarioPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Usuarios.
     *     @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     *     @example
     *     // Create many Usuarios
     *     const usuario = await prisma.usuario.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsuarioCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
    **/
    delete<T extends UsuarioDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Types.GetResult<UsuarioPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsuarioUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Types.GetResult<UsuarioPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsuarioDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsuarioUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
    **/
    upsert<T extends UsuarioUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Types.GetResult<UsuarioPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    escola<T extends EscolaArgs<ExtArgs> = {}>(args?: Subset<T, EscolaArgs<ExtArgs>>): Prisma__EscolaClient<$Types.GetResult<EscolaPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Usuario base type for findUnique actions
   */
  export type UsuarioFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUnique
   */
  export interface UsuarioFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UsuarioFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario base type for findFirst actions
   */
  export type UsuarioFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: Enumerable<UsuarioOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: Enumerable<UsuarioScalarFieldEnum>
  }

  /**
   * Usuario findFirst
   */
  export interface UsuarioFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UsuarioFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: Enumerable<UsuarioOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: Enumerable<UsuarioScalarFieldEnum>
  }


  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: Enumerable<UsuarioOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: Enumerable<UsuarioScalarFieldEnum>
  }


  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }


  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: Enumerable<UsuarioCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
  }


  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }


  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
  }


  /**
   * Usuario without action
   */
  export type UsuarioArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
  }



  /**
   * Model HabilidadeBncc
   */


  export type AggregateHabilidadeBncc = {
    _count: HabilidadeBnccCountAggregateOutputType | null
    _avg: HabilidadeBnccAvgAggregateOutputType | null
    _sum: HabilidadeBnccSumAggregateOutputType | null
    _min: HabilidadeBnccMinAggregateOutputType | null
    _max: HabilidadeBnccMaxAggregateOutputType | null
  }

  export type HabilidadeBnccAvgAggregateOutputType = {
    id: number | null
  }

  export type HabilidadeBnccSumAggregateOutputType = {
    id: number | null
  }

  export type HabilidadeBnccMinAggregateOutputType = {
    id: number | null
    codigo: string | null
    componente: string | null
    ano: string | null
    descricao: string | null
    dataCriacao: Date | null
  }

  export type HabilidadeBnccMaxAggregateOutputType = {
    id: number | null
    codigo: string | null
    componente: string | null
    ano: string | null
    descricao: string | null
    dataCriacao: Date | null
  }

  export type HabilidadeBnccCountAggregateOutputType = {
    id: number
    codigo: number
    componente: number
    ano: number
    descricao: number
    dataCriacao: number
    _all: number
  }


  export type HabilidadeBnccAvgAggregateInputType = {
    id?: true
  }

  export type HabilidadeBnccSumAggregateInputType = {
    id?: true
  }

  export type HabilidadeBnccMinAggregateInputType = {
    id?: true
    codigo?: true
    componente?: true
    ano?: true
    descricao?: true
    dataCriacao?: true
  }

  export type HabilidadeBnccMaxAggregateInputType = {
    id?: true
    codigo?: true
    componente?: true
    ano?: true
    descricao?: true
    dataCriacao?: true
  }

  export type HabilidadeBnccCountAggregateInputType = {
    id?: true
    codigo?: true
    componente?: true
    ano?: true
    descricao?: true
    dataCriacao?: true
    _all?: true
  }

  export type HabilidadeBnccAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which HabilidadeBncc to aggregate.
     */
    where?: HabilidadeBnccWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabilidadeBnccs to fetch.
     */
    orderBy?: Enumerable<HabilidadeBnccOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HabilidadeBnccWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabilidadeBnccs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabilidadeBnccs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HabilidadeBnccs
    **/
    _count?: true | HabilidadeBnccCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HabilidadeBnccAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HabilidadeBnccSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HabilidadeBnccMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HabilidadeBnccMaxAggregateInputType
  }

  export type GetHabilidadeBnccAggregateType<T extends HabilidadeBnccAggregateArgs> = {
        [P in keyof T & keyof AggregateHabilidadeBncc]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabilidadeBncc[P]>
      : GetScalarType<T[P], AggregateHabilidadeBncc[P]>
  }




  export type HabilidadeBnccGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: HabilidadeBnccWhereInput
    orderBy?: Enumerable<HabilidadeBnccOrderByWithAggregationInput>
    by: HabilidadeBnccScalarFieldEnum[]
    having?: HabilidadeBnccScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HabilidadeBnccCountAggregateInputType | true
    _avg?: HabilidadeBnccAvgAggregateInputType
    _sum?: HabilidadeBnccSumAggregateInputType
    _min?: HabilidadeBnccMinAggregateInputType
    _max?: HabilidadeBnccMaxAggregateInputType
  }


  export type HabilidadeBnccGroupByOutputType = {
    id: number
    codigo: string
    componente: string
    ano: string
    descricao: string
    dataCriacao: Date
    _count: HabilidadeBnccCountAggregateOutputType | null
    _avg: HabilidadeBnccAvgAggregateOutputType | null
    _sum: HabilidadeBnccSumAggregateOutputType | null
    _min: HabilidadeBnccMinAggregateOutputType | null
    _max: HabilidadeBnccMaxAggregateOutputType | null
  }

  type GetHabilidadeBnccGroupByPayload<T extends HabilidadeBnccGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<HabilidadeBnccGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HabilidadeBnccGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HabilidadeBnccGroupByOutputType[P]>
            : GetScalarType<T[P], HabilidadeBnccGroupByOutputType[P]>
        }
      >
    >


  export type HabilidadeBnccSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    componente?: boolean
    ano?: boolean
    descricao?: boolean
    dataCriacao?: boolean
    desempenhoHabilidades?: boolean | HabilidadeBncc$desempenhoHabilidadesArgs<ExtArgs>
    _count?: boolean | HabilidadeBnccCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["habilidadeBncc"]>

  export type HabilidadeBnccSelectScalar = {
    id?: boolean
    codigo?: boolean
    componente?: boolean
    ano?: boolean
    descricao?: boolean
    dataCriacao?: boolean
  }

  export type HabilidadeBnccInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    desempenhoHabilidades?: boolean | HabilidadeBncc$desempenhoHabilidadesArgs<ExtArgs>
    _count?: boolean | HabilidadeBnccCountOutputTypeArgs<ExtArgs>
  }


  type HabilidadeBnccGetPayload<S extends boolean | null | undefined | HabilidadeBnccArgs> = $Types.GetResult<HabilidadeBnccPayload, S>

  type HabilidadeBnccCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<HabilidadeBnccFindManyArgs, 'select' | 'include'> & {
      select?: HabilidadeBnccCountAggregateInputType | true
    }

  export interface HabilidadeBnccDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HabilidadeBncc'], meta: { name: 'HabilidadeBncc' } }
    /**
     * Find zero or one HabilidadeBncc that matches the filter.
     * @param {HabilidadeBnccFindUniqueArgs} args - Arguments to find a HabilidadeBncc
     * @example
     * // Get one HabilidadeBncc
     * const habilidadeBncc = await prisma.habilidadeBncc.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HabilidadeBnccFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, HabilidadeBnccFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'HabilidadeBncc'> extends True ? Prisma__HabilidadeBnccClient<$Types.GetResult<HabilidadeBnccPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__HabilidadeBnccClient<$Types.GetResult<HabilidadeBnccPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one HabilidadeBncc that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HabilidadeBnccFindUniqueOrThrowArgs} args - Arguments to find a HabilidadeBncc
     * @example
     * // Get one HabilidadeBncc
     * const habilidadeBncc = await prisma.habilidadeBncc.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HabilidadeBnccFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HabilidadeBnccFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__HabilidadeBnccClient<$Types.GetResult<HabilidadeBnccPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first HabilidadeBncc that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabilidadeBnccFindFirstArgs} args - Arguments to find a HabilidadeBncc
     * @example
     * // Get one HabilidadeBncc
     * const habilidadeBncc = await prisma.habilidadeBncc.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HabilidadeBnccFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, HabilidadeBnccFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'HabilidadeBncc'> extends True ? Prisma__HabilidadeBnccClient<$Types.GetResult<HabilidadeBnccPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__HabilidadeBnccClient<$Types.GetResult<HabilidadeBnccPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first HabilidadeBncc that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabilidadeBnccFindFirstOrThrowArgs} args - Arguments to find a HabilidadeBncc
     * @example
     * // Get one HabilidadeBncc
     * const habilidadeBncc = await prisma.habilidadeBncc.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HabilidadeBnccFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HabilidadeBnccFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__HabilidadeBnccClient<$Types.GetResult<HabilidadeBnccPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more HabilidadeBnccs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabilidadeBnccFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HabilidadeBnccs
     * const habilidadeBnccs = await prisma.habilidadeBncc.findMany()
     * 
     * // Get first 10 HabilidadeBnccs
     * const habilidadeBnccs = await prisma.habilidadeBncc.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habilidadeBnccWithIdOnly = await prisma.habilidadeBncc.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HabilidadeBnccFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HabilidadeBnccFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<HabilidadeBnccPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a HabilidadeBncc.
     * @param {HabilidadeBnccCreateArgs} args - Arguments to create a HabilidadeBncc.
     * @example
     * // Create one HabilidadeBncc
     * const HabilidadeBncc = await prisma.habilidadeBncc.create({
     *   data: {
     *     // ... data to create a HabilidadeBncc
     *   }
     * })
     * 
    **/
    create<T extends HabilidadeBnccCreateArgs<ExtArgs>>(
      args: SelectSubset<T, HabilidadeBnccCreateArgs<ExtArgs>>
    ): Prisma__HabilidadeBnccClient<$Types.GetResult<HabilidadeBnccPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many HabilidadeBnccs.
     *     @param {HabilidadeBnccCreateManyArgs} args - Arguments to create many HabilidadeBnccs.
     *     @example
     *     // Create many HabilidadeBnccs
     *     const habilidadeBncc = await prisma.habilidadeBncc.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HabilidadeBnccCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HabilidadeBnccCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HabilidadeBncc.
     * @param {HabilidadeBnccDeleteArgs} args - Arguments to delete one HabilidadeBncc.
     * @example
     * // Delete one HabilidadeBncc
     * const HabilidadeBncc = await prisma.habilidadeBncc.delete({
     *   where: {
     *     // ... filter to delete one HabilidadeBncc
     *   }
     * })
     * 
    **/
    delete<T extends HabilidadeBnccDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, HabilidadeBnccDeleteArgs<ExtArgs>>
    ): Prisma__HabilidadeBnccClient<$Types.GetResult<HabilidadeBnccPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one HabilidadeBncc.
     * @param {HabilidadeBnccUpdateArgs} args - Arguments to update one HabilidadeBncc.
     * @example
     * // Update one HabilidadeBncc
     * const habilidadeBncc = await prisma.habilidadeBncc.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HabilidadeBnccUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, HabilidadeBnccUpdateArgs<ExtArgs>>
    ): Prisma__HabilidadeBnccClient<$Types.GetResult<HabilidadeBnccPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more HabilidadeBnccs.
     * @param {HabilidadeBnccDeleteManyArgs} args - Arguments to filter HabilidadeBnccs to delete.
     * @example
     * // Delete a few HabilidadeBnccs
     * const { count } = await prisma.habilidadeBncc.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HabilidadeBnccDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HabilidadeBnccDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HabilidadeBnccs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabilidadeBnccUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HabilidadeBnccs
     * const habilidadeBncc = await prisma.habilidadeBncc.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HabilidadeBnccUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, HabilidadeBnccUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HabilidadeBncc.
     * @param {HabilidadeBnccUpsertArgs} args - Arguments to update or create a HabilidadeBncc.
     * @example
     * // Update or create a HabilidadeBncc
     * const habilidadeBncc = await prisma.habilidadeBncc.upsert({
     *   create: {
     *     // ... data to create a HabilidadeBncc
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HabilidadeBncc we want to update
     *   }
     * })
    **/
    upsert<T extends HabilidadeBnccUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, HabilidadeBnccUpsertArgs<ExtArgs>>
    ): Prisma__HabilidadeBnccClient<$Types.GetResult<HabilidadeBnccPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of HabilidadeBnccs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabilidadeBnccCountArgs} args - Arguments to filter HabilidadeBnccs to count.
     * @example
     * // Count the number of HabilidadeBnccs
     * const count = await prisma.habilidadeBncc.count({
     *   where: {
     *     // ... the filter for the HabilidadeBnccs we want to count
     *   }
     * })
    **/
    count<T extends HabilidadeBnccCountArgs>(
      args?: Subset<T, HabilidadeBnccCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HabilidadeBnccCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HabilidadeBncc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabilidadeBnccAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HabilidadeBnccAggregateArgs>(args: Subset<T, HabilidadeBnccAggregateArgs>): Prisma.PrismaPromise<GetHabilidadeBnccAggregateType<T>>

    /**
     * Group by HabilidadeBncc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabilidadeBnccGroupByArgs} args - Group by arguments.
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
      T extends HabilidadeBnccGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HabilidadeBnccGroupByArgs['orderBy'] }
        : { orderBy?: HabilidadeBnccGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, HabilidadeBnccGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabilidadeBnccGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for HabilidadeBncc.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__HabilidadeBnccClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    desempenhoHabilidades<T extends HabilidadeBncc$desempenhoHabilidadesArgs<ExtArgs> = {}>(args?: Subset<T, HabilidadeBncc$desempenhoHabilidadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DesempenhoHabilidadePayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * HabilidadeBncc base type for findUnique actions
   */
  export type HabilidadeBnccFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabilidadeBncc
     */
    select?: HabilidadeBnccSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HabilidadeBnccInclude<ExtArgs> | null
    /**
     * Filter, which HabilidadeBncc to fetch.
     */
    where: HabilidadeBnccWhereUniqueInput
  }

  /**
   * HabilidadeBncc findUnique
   */
  export interface HabilidadeBnccFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends HabilidadeBnccFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HabilidadeBncc findUniqueOrThrow
   */
  export type HabilidadeBnccFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabilidadeBncc
     */
    select?: HabilidadeBnccSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HabilidadeBnccInclude<ExtArgs> | null
    /**
     * Filter, which HabilidadeBncc to fetch.
     */
    where: HabilidadeBnccWhereUniqueInput
  }


  /**
   * HabilidadeBncc base type for findFirst actions
   */
  export type HabilidadeBnccFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabilidadeBncc
     */
    select?: HabilidadeBnccSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HabilidadeBnccInclude<ExtArgs> | null
    /**
     * Filter, which HabilidadeBncc to fetch.
     */
    where?: HabilidadeBnccWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabilidadeBnccs to fetch.
     */
    orderBy?: Enumerable<HabilidadeBnccOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HabilidadeBnccs.
     */
    cursor?: HabilidadeBnccWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabilidadeBnccs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabilidadeBnccs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HabilidadeBnccs.
     */
    distinct?: Enumerable<HabilidadeBnccScalarFieldEnum>
  }

  /**
   * HabilidadeBncc findFirst
   */
  export interface HabilidadeBnccFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends HabilidadeBnccFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HabilidadeBncc findFirstOrThrow
   */
  export type HabilidadeBnccFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabilidadeBncc
     */
    select?: HabilidadeBnccSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HabilidadeBnccInclude<ExtArgs> | null
    /**
     * Filter, which HabilidadeBncc to fetch.
     */
    where?: HabilidadeBnccWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabilidadeBnccs to fetch.
     */
    orderBy?: Enumerable<HabilidadeBnccOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HabilidadeBnccs.
     */
    cursor?: HabilidadeBnccWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabilidadeBnccs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabilidadeBnccs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HabilidadeBnccs.
     */
    distinct?: Enumerable<HabilidadeBnccScalarFieldEnum>
  }


  /**
   * HabilidadeBncc findMany
   */
  export type HabilidadeBnccFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabilidadeBncc
     */
    select?: HabilidadeBnccSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HabilidadeBnccInclude<ExtArgs> | null
    /**
     * Filter, which HabilidadeBnccs to fetch.
     */
    where?: HabilidadeBnccWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabilidadeBnccs to fetch.
     */
    orderBy?: Enumerable<HabilidadeBnccOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HabilidadeBnccs.
     */
    cursor?: HabilidadeBnccWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabilidadeBnccs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabilidadeBnccs.
     */
    skip?: number
    distinct?: Enumerable<HabilidadeBnccScalarFieldEnum>
  }


  /**
   * HabilidadeBncc create
   */
  export type HabilidadeBnccCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabilidadeBncc
     */
    select?: HabilidadeBnccSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HabilidadeBnccInclude<ExtArgs> | null
    /**
     * The data needed to create a HabilidadeBncc.
     */
    data: XOR<HabilidadeBnccCreateInput, HabilidadeBnccUncheckedCreateInput>
  }


  /**
   * HabilidadeBncc createMany
   */
  export type HabilidadeBnccCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HabilidadeBnccs.
     */
    data: Enumerable<HabilidadeBnccCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * HabilidadeBncc update
   */
  export type HabilidadeBnccUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabilidadeBncc
     */
    select?: HabilidadeBnccSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HabilidadeBnccInclude<ExtArgs> | null
    /**
     * The data needed to update a HabilidadeBncc.
     */
    data: XOR<HabilidadeBnccUpdateInput, HabilidadeBnccUncheckedUpdateInput>
    /**
     * Choose, which HabilidadeBncc to update.
     */
    where: HabilidadeBnccWhereUniqueInput
  }


  /**
   * HabilidadeBncc updateMany
   */
  export type HabilidadeBnccUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HabilidadeBnccs.
     */
    data: XOR<HabilidadeBnccUpdateManyMutationInput, HabilidadeBnccUncheckedUpdateManyInput>
    /**
     * Filter which HabilidadeBnccs to update
     */
    where?: HabilidadeBnccWhereInput
  }


  /**
   * HabilidadeBncc upsert
   */
  export type HabilidadeBnccUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabilidadeBncc
     */
    select?: HabilidadeBnccSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HabilidadeBnccInclude<ExtArgs> | null
    /**
     * The filter to search for the HabilidadeBncc to update in case it exists.
     */
    where: HabilidadeBnccWhereUniqueInput
    /**
     * In case the HabilidadeBncc found by the `where` argument doesn't exist, create a new HabilidadeBncc with this data.
     */
    create: XOR<HabilidadeBnccCreateInput, HabilidadeBnccUncheckedCreateInput>
    /**
     * In case the HabilidadeBncc was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HabilidadeBnccUpdateInput, HabilidadeBnccUncheckedUpdateInput>
  }


  /**
   * HabilidadeBncc delete
   */
  export type HabilidadeBnccDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabilidadeBncc
     */
    select?: HabilidadeBnccSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HabilidadeBnccInclude<ExtArgs> | null
    /**
     * Filter which HabilidadeBncc to delete.
     */
    where: HabilidadeBnccWhereUniqueInput
  }


  /**
   * HabilidadeBncc deleteMany
   */
  export type HabilidadeBnccDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which HabilidadeBnccs to delete
     */
    where?: HabilidadeBnccWhereInput
  }


  /**
   * HabilidadeBncc.desempenhoHabilidades
   */
  export type HabilidadeBncc$desempenhoHabilidadesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesempenhoHabilidade
     */
    select?: DesempenhoHabilidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesempenhoHabilidadeInclude<ExtArgs> | null
    where?: DesempenhoHabilidadeWhereInput
    orderBy?: Enumerable<DesempenhoHabilidadeOrderByWithRelationInput>
    cursor?: DesempenhoHabilidadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DesempenhoHabilidadeScalarFieldEnum>
  }


  /**
   * HabilidadeBncc without action
   */
  export type HabilidadeBnccArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabilidadeBncc
     */
    select?: HabilidadeBnccSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HabilidadeBnccInclude<ExtArgs> | null
  }



  /**
   * Model DesempenhoHabilidade
   */


  export type AggregateDesempenhoHabilidade = {
    _count: DesempenhoHabilidadeCountAggregateOutputType | null
    _avg: DesempenhoHabilidadeAvgAggregateOutputType | null
    _sum: DesempenhoHabilidadeSumAggregateOutputType | null
    _min: DesempenhoHabilidadeMinAggregateOutputType | null
    _max: DesempenhoHabilidadeMaxAggregateOutputType | null
  }

  export type DesempenhoHabilidadeAvgAggregateOutputType = {
    id: number | null
    habilidadeId: number | null
    escolaId: number | null
    turmaId: number | null
    provaId: number | null
    totalQuestoes: number | null
    totalAcertos: number | null
    percentualAcertos: Decimal | null
  }

  export type DesempenhoHabilidadeSumAggregateOutputType = {
    id: number | null
    habilidadeId: number | null
    escolaId: number | null
    turmaId: number | null
    provaId: number | null
    totalQuestoes: number | null
    totalAcertos: number | null
    percentualAcertos: Decimal | null
  }

  export type DesempenhoHabilidadeMinAggregateOutputType = {
    id: number | null
    habilidadeId: number | null
    escolaId: number | null
    turmaId: number | null
    provaId: number | null
    totalQuestoes: number | null
    totalAcertos: number | null
    percentualAcertos: Decimal | null
    dataAvaliacao: Date | null
    anoLetivo: string | null
    dataCriacao: Date | null
  }

  export type DesempenhoHabilidadeMaxAggregateOutputType = {
    id: number | null
    habilidadeId: number | null
    escolaId: number | null
    turmaId: number | null
    provaId: number | null
    totalQuestoes: number | null
    totalAcertos: number | null
    percentualAcertos: Decimal | null
    dataAvaliacao: Date | null
    anoLetivo: string | null
    dataCriacao: Date | null
  }

  export type DesempenhoHabilidadeCountAggregateOutputType = {
    id: number
    habilidadeId: number
    escolaId: number
    turmaId: number
    provaId: number
    totalQuestoes: number
    totalAcertos: number
    percentualAcertos: number
    dataAvaliacao: number
    anoLetivo: number
    dataCriacao: number
    _all: number
  }


  export type DesempenhoHabilidadeAvgAggregateInputType = {
    id?: true
    habilidadeId?: true
    escolaId?: true
    turmaId?: true
    provaId?: true
    totalQuestoes?: true
    totalAcertos?: true
    percentualAcertos?: true
  }

  export type DesempenhoHabilidadeSumAggregateInputType = {
    id?: true
    habilidadeId?: true
    escolaId?: true
    turmaId?: true
    provaId?: true
    totalQuestoes?: true
    totalAcertos?: true
    percentualAcertos?: true
  }

  export type DesempenhoHabilidadeMinAggregateInputType = {
    id?: true
    habilidadeId?: true
    escolaId?: true
    turmaId?: true
    provaId?: true
    totalQuestoes?: true
    totalAcertos?: true
    percentualAcertos?: true
    dataAvaliacao?: true
    anoLetivo?: true
    dataCriacao?: true
  }

  export type DesempenhoHabilidadeMaxAggregateInputType = {
    id?: true
    habilidadeId?: true
    escolaId?: true
    turmaId?: true
    provaId?: true
    totalQuestoes?: true
    totalAcertos?: true
    percentualAcertos?: true
    dataAvaliacao?: true
    anoLetivo?: true
    dataCriacao?: true
  }

  export type DesempenhoHabilidadeCountAggregateInputType = {
    id?: true
    habilidadeId?: true
    escolaId?: true
    turmaId?: true
    provaId?: true
    totalQuestoes?: true
    totalAcertos?: true
    percentualAcertos?: true
    dataAvaliacao?: true
    anoLetivo?: true
    dataCriacao?: true
    _all?: true
  }

  export type DesempenhoHabilidadeAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which DesempenhoHabilidade to aggregate.
     */
    where?: DesempenhoHabilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DesempenhoHabilidades to fetch.
     */
    orderBy?: Enumerable<DesempenhoHabilidadeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DesempenhoHabilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DesempenhoHabilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DesempenhoHabilidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DesempenhoHabilidades
    **/
    _count?: true | DesempenhoHabilidadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DesempenhoHabilidadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DesempenhoHabilidadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DesempenhoHabilidadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DesempenhoHabilidadeMaxAggregateInputType
  }

  export type GetDesempenhoHabilidadeAggregateType<T extends DesempenhoHabilidadeAggregateArgs> = {
        [P in keyof T & keyof AggregateDesempenhoHabilidade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDesempenhoHabilidade[P]>
      : GetScalarType<T[P], AggregateDesempenhoHabilidade[P]>
  }




  export type DesempenhoHabilidadeGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DesempenhoHabilidadeWhereInput
    orderBy?: Enumerable<DesempenhoHabilidadeOrderByWithAggregationInput>
    by: DesempenhoHabilidadeScalarFieldEnum[]
    having?: DesempenhoHabilidadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DesempenhoHabilidadeCountAggregateInputType | true
    _avg?: DesempenhoHabilidadeAvgAggregateInputType
    _sum?: DesempenhoHabilidadeSumAggregateInputType
    _min?: DesempenhoHabilidadeMinAggregateInputType
    _max?: DesempenhoHabilidadeMaxAggregateInputType
  }


  export type DesempenhoHabilidadeGroupByOutputType = {
    id: number
    habilidadeId: number
    escolaId: number
    turmaId: number | null
    provaId: number | null
    totalQuestoes: number
    totalAcertos: number
    percentualAcertos: Decimal
    dataAvaliacao: Date
    anoLetivo: string
    dataCriacao: Date
    _count: DesempenhoHabilidadeCountAggregateOutputType | null
    _avg: DesempenhoHabilidadeAvgAggregateOutputType | null
    _sum: DesempenhoHabilidadeSumAggregateOutputType | null
    _min: DesempenhoHabilidadeMinAggregateOutputType | null
    _max: DesempenhoHabilidadeMaxAggregateOutputType | null
  }

  type GetDesempenhoHabilidadeGroupByPayload<T extends DesempenhoHabilidadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DesempenhoHabilidadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DesempenhoHabilidadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DesempenhoHabilidadeGroupByOutputType[P]>
            : GetScalarType<T[P], DesempenhoHabilidadeGroupByOutputType[P]>
        }
      >
    >


  export type DesempenhoHabilidadeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habilidadeId?: boolean
    escolaId?: boolean
    turmaId?: boolean
    provaId?: boolean
    totalQuestoes?: boolean
    totalAcertos?: boolean
    percentualAcertos?: boolean
    dataAvaliacao?: boolean
    anoLetivo?: boolean
    dataCriacao?: boolean
    habilidade?: boolean | HabilidadeBnccArgs<ExtArgs>
    escola?: boolean | EscolaArgs<ExtArgs>
    turma?: boolean | TurmaArgs<ExtArgs>
    prova?: boolean | ProvaArgs<ExtArgs>
  }, ExtArgs["result"]["desempenhoHabilidade"]>

  export type DesempenhoHabilidadeSelectScalar = {
    id?: boolean
    habilidadeId?: boolean
    escolaId?: boolean
    turmaId?: boolean
    provaId?: boolean
    totalQuestoes?: boolean
    totalAcertos?: boolean
    percentualAcertos?: boolean
    dataAvaliacao?: boolean
    anoLetivo?: boolean
    dataCriacao?: boolean
  }

  export type DesempenhoHabilidadeInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    habilidade?: boolean | HabilidadeBnccArgs<ExtArgs>
    escola?: boolean | EscolaArgs<ExtArgs>
    turma?: boolean | TurmaArgs<ExtArgs>
    prova?: boolean | ProvaArgs<ExtArgs>
  }


  type DesempenhoHabilidadeGetPayload<S extends boolean | null | undefined | DesempenhoHabilidadeArgs> = $Types.GetResult<DesempenhoHabilidadePayload, S>

  type DesempenhoHabilidadeCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<DesempenhoHabilidadeFindManyArgs, 'select' | 'include'> & {
      select?: DesempenhoHabilidadeCountAggregateInputType | true
    }

  export interface DesempenhoHabilidadeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DesempenhoHabilidade'], meta: { name: 'DesempenhoHabilidade' } }
    /**
     * Find zero or one DesempenhoHabilidade that matches the filter.
     * @param {DesempenhoHabilidadeFindUniqueArgs} args - Arguments to find a DesempenhoHabilidade
     * @example
     * // Get one DesempenhoHabilidade
     * const desempenhoHabilidade = await prisma.desempenhoHabilidade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DesempenhoHabilidadeFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DesempenhoHabilidadeFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DesempenhoHabilidade'> extends True ? Prisma__DesempenhoHabilidadeClient<$Types.GetResult<DesempenhoHabilidadePayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__DesempenhoHabilidadeClient<$Types.GetResult<DesempenhoHabilidadePayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one DesempenhoHabilidade that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DesempenhoHabilidadeFindUniqueOrThrowArgs} args - Arguments to find a DesempenhoHabilidade
     * @example
     * // Get one DesempenhoHabilidade
     * const desempenhoHabilidade = await prisma.desempenhoHabilidade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DesempenhoHabilidadeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DesempenhoHabilidadeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DesempenhoHabilidadeClient<$Types.GetResult<DesempenhoHabilidadePayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first DesempenhoHabilidade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesempenhoHabilidadeFindFirstArgs} args - Arguments to find a DesempenhoHabilidade
     * @example
     * // Get one DesempenhoHabilidade
     * const desempenhoHabilidade = await prisma.desempenhoHabilidade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DesempenhoHabilidadeFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DesempenhoHabilidadeFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DesempenhoHabilidade'> extends True ? Prisma__DesempenhoHabilidadeClient<$Types.GetResult<DesempenhoHabilidadePayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__DesempenhoHabilidadeClient<$Types.GetResult<DesempenhoHabilidadePayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first DesempenhoHabilidade that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesempenhoHabilidadeFindFirstOrThrowArgs} args - Arguments to find a DesempenhoHabilidade
     * @example
     * // Get one DesempenhoHabilidade
     * const desempenhoHabilidade = await prisma.desempenhoHabilidade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DesempenhoHabilidadeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DesempenhoHabilidadeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DesempenhoHabilidadeClient<$Types.GetResult<DesempenhoHabilidadePayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more DesempenhoHabilidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesempenhoHabilidadeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DesempenhoHabilidades
     * const desempenhoHabilidades = await prisma.desempenhoHabilidade.findMany()
     * 
     * // Get first 10 DesempenhoHabilidades
     * const desempenhoHabilidades = await prisma.desempenhoHabilidade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const desempenhoHabilidadeWithIdOnly = await prisma.desempenhoHabilidade.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DesempenhoHabilidadeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DesempenhoHabilidadeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<DesempenhoHabilidadePayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a DesempenhoHabilidade.
     * @param {DesempenhoHabilidadeCreateArgs} args - Arguments to create a DesempenhoHabilidade.
     * @example
     * // Create one DesempenhoHabilidade
     * const DesempenhoHabilidade = await prisma.desempenhoHabilidade.create({
     *   data: {
     *     // ... data to create a DesempenhoHabilidade
     *   }
     * })
     * 
    **/
    create<T extends DesempenhoHabilidadeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DesempenhoHabilidadeCreateArgs<ExtArgs>>
    ): Prisma__DesempenhoHabilidadeClient<$Types.GetResult<DesempenhoHabilidadePayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many DesempenhoHabilidades.
     *     @param {DesempenhoHabilidadeCreateManyArgs} args - Arguments to create many DesempenhoHabilidades.
     *     @example
     *     // Create many DesempenhoHabilidades
     *     const desempenhoHabilidade = await prisma.desempenhoHabilidade.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DesempenhoHabilidadeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DesempenhoHabilidadeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DesempenhoHabilidade.
     * @param {DesempenhoHabilidadeDeleteArgs} args - Arguments to delete one DesempenhoHabilidade.
     * @example
     * // Delete one DesempenhoHabilidade
     * const DesempenhoHabilidade = await prisma.desempenhoHabilidade.delete({
     *   where: {
     *     // ... filter to delete one DesempenhoHabilidade
     *   }
     * })
     * 
    **/
    delete<T extends DesempenhoHabilidadeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DesempenhoHabilidadeDeleteArgs<ExtArgs>>
    ): Prisma__DesempenhoHabilidadeClient<$Types.GetResult<DesempenhoHabilidadePayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one DesempenhoHabilidade.
     * @param {DesempenhoHabilidadeUpdateArgs} args - Arguments to update one DesempenhoHabilidade.
     * @example
     * // Update one DesempenhoHabilidade
     * const desempenhoHabilidade = await prisma.desempenhoHabilidade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DesempenhoHabilidadeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DesempenhoHabilidadeUpdateArgs<ExtArgs>>
    ): Prisma__DesempenhoHabilidadeClient<$Types.GetResult<DesempenhoHabilidadePayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more DesempenhoHabilidades.
     * @param {DesempenhoHabilidadeDeleteManyArgs} args - Arguments to filter DesempenhoHabilidades to delete.
     * @example
     * // Delete a few DesempenhoHabilidades
     * const { count } = await prisma.desempenhoHabilidade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DesempenhoHabilidadeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DesempenhoHabilidadeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DesempenhoHabilidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesempenhoHabilidadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DesempenhoHabilidades
     * const desempenhoHabilidade = await prisma.desempenhoHabilidade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DesempenhoHabilidadeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DesempenhoHabilidadeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DesempenhoHabilidade.
     * @param {DesempenhoHabilidadeUpsertArgs} args - Arguments to update or create a DesempenhoHabilidade.
     * @example
     * // Update or create a DesempenhoHabilidade
     * const desempenhoHabilidade = await prisma.desempenhoHabilidade.upsert({
     *   create: {
     *     // ... data to create a DesempenhoHabilidade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DesempenhoHabilidade we want to update
     *   }
     * })
    **/
    upsert<T extends DesempenhoHabilidadeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DesempenhoHabilidadeUpsertArgs<ExtArgs>>
    ): Prisma__DesempenhoHabilidadeClient<$Types.GetResult<DesempenhoHabilidadePayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of DesempenhoHabilidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesempenhoHabilidadeCountArgs} args - Arguments to filter DesempenhoHabilidades to count.
     * @example
     * // Count the number of DesempenhoHabilidades
     * const count = await prisma.desempenhoHabilidade.count({
     *   where: {
     *     // ... the filter for the DesempenhoHabilidades we want to count
     *   }
     * })
    **/
    count<T extends DesempenhoHabilidadeCountArgs>(
      args?: Subset<T, DesempenhoHabilidadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DesempenhoHabilidadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DesempenhoHabilidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesempenhoHabilidadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DesempenhoHabilidadeAggregateArgs>(args: Subset<T, DesempenhoHabilidadeAggregateArgs>): Prisma.PrismaPromise<GetDesempenhoHabilidadeAggregateType<T>>

    /**
     * Group by DesempenhoHabilidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesempenhoHabilidadeGroupByArgs} args - Group by arguments.
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
      T extends DesempenhoHabilidadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DesempenhoHabilidadeGroupByArgs['orderBy'] }
        : { orderBy?: DesempenhoHabilidadeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, DesempenhoHabilidadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDesempenhoHabilidadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DesempenhoHabilidade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DesempenhoHabilidadeClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    habilidade<T extends HabilidadeBnccArgs<ExtArgs> = {}>(args?: Subset<T, HabilidadeBnccArgs<ExtArgs>>): Prisma__HabilidadeBnccClient<$Types.GetResult<HabilidadeBnccPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    escola<T extends EscolaArgs<ExtArgs> = {}>(args?: Subset<T, EscolaArgs<ExtArgs>>): Prisma__EscolaClient<$Types.GetResult<EscolaPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    turma<T extends TurmaArgs<ExtArgs> = {}>(args?: Subset<T, TurmaArgs<ExtArgs>>): Prisma__TurmaClient<$Types.GetResult<TurmaPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    prova<T extends ProvaArgs<ExtArgs> = {}>(args?: Subset<T, ProvaArgs<ExtArgs>>): Prisma__ProvaClient<$Types.GetResult<ProvaPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * DesempenhoHabilidade base type for findUnique actions
   */
  export type DesempenhoHabilidadeFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesempenhoHabilidade
     */
    select?: DesempenhoHabilidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesempenhoHabilidadeInclude<ExtArgs> | null
    /**
     * Filter, which DesempenhoHabilidade to fetch.
     */
    where: DesempenhoHabilidadeWhereUniqueInput
  }

  /**
   * DesempenhoHabilidade findUnique
   */
  export interface DesempenhoHabilidadeFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends DesempenhoHabilidadeFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DesempenhoHabilidade findUniqueOrThrow
   */
  export type DesempenhoHabilidadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesempenhoHabilidade
     */
    select?: DesempenhoHabilidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesempenhoHabilidadeInclude<ExtArgs> | null
    /**
     * Filter, which DesempenhoHabilidade to fetch.
     */
    where: DesempenhoHabilidadeWhereUniqueInput
  }


  /**
   * DesempenhoHabilidade base type for findFirst actions
   */
  export type DesempenhoHabilidadeFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesempenhoHabilidade
     */
    select?: DesempenhoHabilidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesempenhoHabilidadeInclude<ExtArgs> | null
    /**
     * Filter, which DesempenhoHabilidade to fetch.
     */
    where?: DesempenhoHabilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DesempenhoHabilidades to fetch.
     */
    orderBy?: Enumerable<DesempenhoHabilidadeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DesempenhoHabilidades.
     */
    cursor?: DesempenhoHabilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DesempenhoHabilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DesempenhoHabilidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DesempenhoHabilidades.
     */
    distinct?: Enumerable<DesempenhoHabilidadeScalarFieldEnum>
  }

  /**
   * DesempenhoHabilidade findFirst
   */
  export interface DesempenhoHabilidadeFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends DesempenhoHabilidadeFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DesempenhoHabilidade findFirstOrThrow
   */
  export type DesempenhoHabilidadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesempenhoHabilidade
     */
    select?: DesempenhoHabilidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesempenhoHabilidadeInclude<ExtArgs> | null
    /**
     * Filter, which DesempenhoHabilidade to fetch.
     */
    where?: DesempenhoHabilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DesempenhoHabilidades to fetch.
     */
    orderBy?: Enumerable<DesempenhoHabilidadeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DesempenhoHabilidades.
     */
    cursor?: DesempenhoHabilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DesempenhoHabilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DesempenhoHabilidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DesempenhoHabilidades.
     */
    distinct?: Enumerable<DesempenhoHabilidadeScalarFieldEnum>
  }


  /**
   * DesempenhoHabilidade findMany
   */
  export type DesempenhoHabilidadeFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesempenhoHabilidade
     */
    select?: DesempenhoHabilidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesempenhoHabilidadeInclude<ExtArgs> | null
    /**
     * Filter, which DesempenhoHabilidades to fetch.
     */
    where?: DesempenhoHabilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DesempenhoHabilidades to fetch.
     */
    orderBy?: Enumerable<DesempenhoHabilidadeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DesempenhoHabilidades.
     */
    cursor?: DesempenhoHabilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DesempenhoHabilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DesempenhoHabilidades.
     */
    skip?: number
    distinct?: Enumerable<DesempenhoHabilidadeScalarFieldEnum>
  }


  /**
   * DesempenhoHabilidade create
   */
  export type DesempenhoHabilidadeCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesempenhoHabilidade
     */
    select?: DesempenhoHabilidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesempenhoHabilidadeInclude<ExtArgs> | null
    /**
     * The data needed to create a DesempenhoHabilidade.
     */
    data: XOR<DesempenhoHabilidadeCreateInput, DesempenhoHabilidadeUncheckedCreateInput>
  }


  /**
   * DesempenhoHabilidade createMany
   */
  export type DesempenhoHabilidadeCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DesempenhoHabilidades.
     */
    data: Enumerable<DesempenhoHabilidadeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DesempenhoHabilidade update
   */
  export type DesempenhoHabilidadeUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesempenhoHabilidade
     */
    select?: DesempenhoHabilidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesempenhoHabilidadeInclude<ExtArgs> | null
    /**
     * The data needed to update a DesempenhoHabilidade.
     */
    data: XOR<DesempenhoHabilidadeUpdateInput, DesempenhoHabilidadeUncheckedUpdateInput>
    /**
     * Choose, which DesempenhoHabilidade to update.
     */
    where: DesempenhoHabilidadeWhereUniqueInput
  }


  /**
   * DesempenhoHabilidade updateMany
   */
  export type DesempenhoHabilidadeUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DesempenhoHabilidades.
     */
    data: XOR<DesempenhoHabilidadeUpdateManyMutationInput, DesempenhoHabilidadeUncheckedUpdateManyInput>
    /**
     * Filter which DesempenhoHabilidades to update
     */
    where?: DesempenhoHabilidadeWhereInput
  }


  /**
   * DesempenhoHabilidade upsert
   */
  export type DesempenhoHabilidadeUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesempenhoHabilidade
     */
    select?: DesempenhoHabilidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesempenhoHabilidadeInclude<ExtArgs> | null
    /**
     * The filter to search for the DesempenhoHabilidade to update in case it exists.
     */
    where: DesempenhoHabilidadeWhereUniqueInput
    /**
     * In case the DesempenhoHabilidade found by the `where` argument doesn't exist, create a new DesempenhoHabilidade with this data.
     */
    create: XOR<DesempenhoHabilidadeCreateInput, DesempenhoHabilidadeUncheckedCreateInput>
    /**
     * In case the DesempenhoHabilidade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DesempenhoHabilidadeUpdateInput, DesempenhoHabilidadeUncheckedUpdateInput>
  }


  /**
   * DesempenhoHabilidade delete
   */
  export type DesempenhoHabilidadeDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesempenhoHabilidade
     */
    select?: DesempenhoHabilidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesempenhoHabilidadeInclude<ExtArgs> | null
    /**
     * Filter which DesempenhoHabilidade to delete.
     */
    where: DesempenhoHabilidadeWhereUniqueInput
  }


  /**
   * DesempenhoHabilidade deleteMany
   */
  export type DesempenhoHabilidadeDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which DesempenhoHabilidades to delete
     */
    where?: DesempenhoHabilidadeWhereInput
  }


  /**
   * DesempenhoHabilidade without action
   */
  export type DesempenhoHabilidadeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesempenhoHabilidade
     */
    select?: DesempenhoHabilidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DesempenhoHabilidadeInclude<ExtArgs> | null
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


  export const EscolaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    regiao: 'regiao',
    grupo: 'grupo',
    endereco: 'endereco',
    telefone: 'telefone',
    email: 'email',
    diretor: 'diretor',
    dataCriacao: 'dataCriacao',
    dataAtualizacao: 'dataAtualizacao'
  };

  export type EscolaScalarFieldEnum = (typeof EscolaScalarFieldEnum)[keyof typeof EscolaScalarFieldEnum]


  export const TurmaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    serie: 'serie',
    turno: 'turno',
    anoLetivo: 'anoLetivo',
    escolaId: 'escolaId',
    professorResponsavel: 'professorResponsavel',
    sala: 'sala',
    dataCriacao: 'dataCriacao',
    dataAtualizacao: 'dataAtualizacao'
  };

  export type TurmaScalarFieldEnum = (typeof TurmaScalarFieldEnum)[keyof typeof TurmaScalarFieldEnum]


  export const AlunoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    matricula: 'matricula',
    dataNascimento: 'dataNascimento',
    genero: 'genero',
    responsavel: 'responsavel',
    telefoneResponsavel: 'telefoneResponsavel',
    emailResponsavel: 'emailResponsavel',
    turmaId: 'turmaId',
    escolaId: 'escolaId',
    fotoUrl: 'fotoUrl',
    dataCriacao: 'dataCriacao',
    dataAtualizacao: 'dataAtualizacao'
  };

  export type AlunoScalarFieldEnum = (typeof AlunoScalarFieldEnum)[keyof typeof AlunoScalarFieldEnum]


  export const ProvaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    dataAplicacao: 'dataAplicacao',
    tipo: 'tipo',
    disciplina: 'disciplina',
    serie: 'serie',
    criadoPor: 'criadoPor',
    dataCriacao: 'dataCriacao',
    dataAtualizacao: 'dataAtualizacao'
  };

  export type ProvaScalarFieldEnum = (typeof ProvaScalarFieldEnum)[keyof typeof ProvaScalarFieldEnum]


  export const QuestaoScalarFieldEnum: {
    id: 'id',
    provaId: 'provaId',
    ordem: 'ordem',
    enunciado: 'enunciado',
    tipo: 'tipo',
    opcoes: 'opcoes',
    respostaCorreta: 'respostaCorreta',
    valor: 'valor',
    habilidadeBncc: 'habilidadeBncc',
    descricaoBncc: 'descricaoBncc',
    dataCriacao: 'dataCriacao',
    dataAtualizacao: 'dataAtualizacao'
  };

  export type QuestaoScalarFieldEnum = (typeof QuestaoScalarFieldEnum)[keyof typeof QuestaoScalarFieldEnum]


  export const AplicacaoProvaScalarFieldEnum: {
    id: 'id',
    provaId: 'provaId',
    turmaId: 'turmaId',
    dataAplicacao: 'dataAplicacao',
    horaInicio: 'horaInicio',
    horaTermino: 'horaTermino',
    observacoes: 'observacoes',
    dataCriacao: 'dataCriacao'
  };

  export type AplicacaoProvaScalarFieldEnum = (typeof AplicacaoProvaScalarFieldEnum)[keyof typeof AplicacaoProvaScalarFieldEnum]


  export const ResultadoScalarFieldEnum: {
    id: 'id',
    alunoId: 'alunoId',
    provaId: 'provaId',
    aplicacaoId: 'aplicacaoId',
    respostas: 'respostas',
    pontuacao: 'pontuacao',
    percentual: 'percentual',
    dataCorrecao: 'dataCorrecao',
    corrigidoPor: 'corrigidoPor',
    observacoes: 'observacoes',
    dataCriacao: 'dataCriacao',
    dataAtualizacao: 'dataAtualizacao'
  };

  export type ResultadoScalarFieldEnum = (typeof ResultadoScalarFieldEnum)[keyof typeof ResultadoScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    tipo: 'tipo',
    escolaId: 'escolaId',
    fotoUrl: 'fotoUrl',
    ultimoAcesso: 'ultimoAcesso',
    ativo: 'ativo',
    dataCriacao: 'dataCriacao',
    dataAtualizacao: 'dataAtualizacao'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const HabilidadeBnccScalarFieldEnum: {
    id: 'id',
    codigo: 'codigo',
    componente: 'componente',
    ano: 'ano',
    descricao: 'descricao',
    dataCriacao: 'dataCriacao'
  };

  export type HabilidadeBnccScalarFieldEnum = (typeof HabilidadeBnccScalarFieldEnum)[keyof typeof HabilidadeBnccScalarFieldEnum]


  export const DesempenhoHabilidadeScalarFieldEnum: {
    id: 'id',
    habilidadeId: 'habilidadeId',
    escolaId: 'escolaId',
    turmaId: 'turmaId',
    provaId: 'provaId',
    totalQuestoes: 'totalQuestoes',
    totalAcertos: 'totalAcertos',
    percentualAcertos: 'percentualAcertos',
    dataAvaliacao: 'dataAvaliacao',
    anoLetivo: 'anoLetivo',
    dataCriacao: 'dataCriacao'
  };

  export type DesempenhoHabilidadeScalarFieldEnum = (typeof DesempenhoHabilidadeScalarFieldEnum)[keyof typeof DesempenhoHabilidadeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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
   * Deep Input Types
   */


  export type EscolaWhereInput = {
    AND?: Enumerable<EscolaWhereInput>
    OR?: Enumerable<EscolaWhereInput>
    NOT?: Enumerable<EscolaWhereInput>
    id?: IntFilter | number
    nome?: StringFilter | string
    regiao?: StringNullableFilter | string | null
    grupo?: StringNullableFilter | string | null
    endereco?: StringNullableFilter | string | null
    telefone?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    diretor?: StringNullableFilter | string | null
    dataCriacao?: DateTimeFilter | Date | string
    dataAtualizacao?: DateTimeFilter | Date | string
    turmas?: TurmaListRelationFilter
    alunos?: AlunoListRelationFilter
    usuarios?: UsuarioListRelationFilter
    desempenhoHabilidades?: DesempenhoHabilidadeListRelationFilter
  }

  export type EscolaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    regiao?: SortOrderInput | SortOrder
    grupo?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    diretor?: SortOrderInput | SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    turmas?: TurmaOrderByRelationAggregateInput
    alunos?: AlunoOrderByRelationAggregateInput
    usuarios?: UsuarioOrderByRelationAggregateInput
    desempenhoHabilidades?: DesempenhoHabilidadeOrderByRelationAggregateInput
  }

  export type EscolaWhereUniqueInput = {
    id?: number
  }

  export type EscolaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    regiao?: SortOrderInput | SortOrder
    grupo?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    diretor?: SortOrderInput | SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    _count?: EscolaCountOrderByAggregateInput
    _avg?: EscolaAvgOrderByAggregateInput
    _max?: EscolaMaxOrderByAggregateInput
    _min?: EscolaMinOrderByAggregateInput
    _sum?: EscolaSumOrderByAggregateInput
  }

  export type EscolaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EscolaScalarWhereWithAggregatesInput>
    OR?: Enumerable<EscolaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EscolaScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    nome?: StringWithAggregatesFilter | string
    regiao?: StringNullableWithAggregatesFilter | string | null
    grupo?: StringNullableWithAggregatesFilter | string | null
    endereco?: StringNullableWithAggregatesFilter | string | null
    telefone?: StringNullableWithAggregatesFilter | string | null
    email?: StringNullableWithAggregatesFilter | string | null
    diretor?: StringNullableWithAggregatesFilter | string | null
    dataCriacao?: DateTimeWithAggregatesFilter | Date | string
    dataAtualizacao?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TurmaWhereInput = {
    AND?: Enumerable<TurmaWhereInput>
    OR?: Enumerable<TurmaWhereInput>
    NOT?: Enumerable<TurmaWhereInput>
    id?: IntFilter | number
    nome?: StringFilter | string
    serie?: IntFilter | number
    turno?: StringFilter | string
    anoLetivo?: StringFilter | string
    escolaId?: IntFilter | number
    professorResponsavel?: StringNullableFilter | string | null
    sala?: StringNullableFilter | string | null
    dataCriacao?: DateTimeFilter | Date | string
    dataAtualizacao?: DateTimeFilter | Date | string
    escola?: XOR<EscolaRelationFilter, EscolaWhereInput>
    alunos?: AlunoListRelationFilter
    aplicacoesProva?: AplicacaoProvaListRelationFilter
    desempenhoHabilidades?: DesempenhoHabilidadeListRelationFilter
  }

  export type TurmaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    serie?: SortOrder
    turno?: SortOrder
    anoLetivo?: SortOrder
    escolaId?: SortOrder
    professorResponsavel?: SortOrderInput | SortOrder
    sala?: SortOrderInput | SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    escola?: EscolaOrderByWithRelationInput
    alunos?: AlunoOrderByRelationAggregateInput
    aplicacoesProva?: AplicacaoProvaOrderByRelationAggregateInput
    desempenhoHabilidades?: DesempenhoHabilidadeOrderByRelationAggregateInput
  }

  export type TurmaWhereUniqueInput = {
    id?: number
  }

  export type TurmaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    serie?: SortOrder
    turno?: SortOrder
    anoLetivo?: SortOrder
    escolaId?: SortOrder
    professorResponsavel?: SortOrderInput | SortOrder
    sala?: SortOrderInput | SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    _count?: TurmaCountOrderByAggregateInput
    _avg?: TurmaAvgOrderByAggregateInput
    _max?: TurmaMaxOrderByAggregateInput
    _min?: TurmaMinOrderByAggregateInput
    _sum?: TurmaSumOrderByAggregateInput
  }

  export type TurmaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TurmaScalarWhereWithAggregatesInput>
    OR?: Enumerable<TurmaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TurmaScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    nome?: StringWithAggregatesFilter | string
    serie?: IntWithAggregatesFilter | number
    turno?: StringWithAggregatesFilter | string
    anoLetivo?: StringWithAggregatesFilter | string
    escolaId?: IntWithAggregatesFilter | number
    professorResponsavel?: StringNullableWithAggregatesFilter | string | null
    sala?: StringNullableWithAggregatesFilter | string | null
    dataCriacao?: DateTimeWithAggregatesFilter | Date | string
    dataAtualizacao?: DateTimeWithAggregatesFilter | Date | string
  }

  export type AlunoWhereInput = {
    AND?: Enumerable<AlunoWhereInput>
    OR?: Enumerable<AlunoWhereInput>
    NOT?: Enumerable<AlunoWhereInput>
    id?: IntFilter | number
    nome?: StringFilter | string
    matricula?: StringFilter | string
    dataNascimento?: DateTimeNullableFilter | Date | string | null
    genero?: StringNullableFilter | string | null
    responsavel?: StringNullableFilter | string | null
    telefoneResponsavel?: StringNullableFilter | string | null
    emailResponsavel?: StringNullableFilter | string | null
    turmaId?: IntNullableFilter | number | null
    escolaId?: IntFilter | number
    fotoUrl?: StringNullableFilter | string | null
    dataCriacao?: DateTimeFilter | Date | string
    dataAtualizacao?: DateTimeFilter | Date | string
    turma?: XOR<TurmaRelationFilter, TurmaWhereInput> | null
    escola?: XOR<EscolaRelationFilter, EscolaWhereInput>
    resultados?: ResultadoListRelationFilter
  }

  export type AlunoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    matricula?: SortOrder
    dataNascimento?: SortOrderInput | SortOrder
    genero?: SortOrderInput | SortOrder
    responsavel?: SortOrderInput | SortOrder
    telefoneResponsavel?: SortOrderInput | SortOrder
    emailResponsavel?: SortOrderInput | SortOrder
    turmaId?: SortOrderInput | SortOrder
    escolaId?: SortOrder
    fotoUrl?: SortOrderInput | SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    turma?: TurmaOrderByWithRelationInput
    escola?: EscolaOrderByWithRelationInput
    resultados?: ResultadoOrderByRelationAggregateInput
  }

  export type AlunoWhereUniqueInput = {
    id?: number
    matricula?: string
  }

  export type AlunoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    matricula?: SortOrder
    dataNascimento?: SortOrderInput | SortOrder
    genero?: SortOrderInput | SortOrder
    responsavel?: SortOrderInput | SortOrder
    telefoneResponsavel?: SortOrderInput | SortOrder
    emailResponsavel?: SortOrderInput | SortOrder
    turmaId?: SortOrderInput | SortOrder
    escolaId?: SortOrder
    fotoUrl?: SortOrderInput | SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    _count?: AlunoCountOrderByAggregateInput
    _avg?: AlunoAvgOrderByAggregateInput
    _max?: AlunoMaxOrderByAggregateInput
    _min?: AlunoMinOrderByAggregateInput
    _sum?: AlunoSumOrderByAggregateInput
  }

  export type AlunoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AlunoScalarWhereWithAggregatesInput>
    OR?: Enumerable<AlunoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AlunoScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    nome?: StringWithAggregatesFilter | string
    matricula?: StringWithAggregatesFilter | string
    dataNascimento?: DateTimeNullableWithAggregatesFilter | Date | string | null
    genero?: StringNullableWithAggregatesFilter | string | null
    responsavel?: StringNullableWithAggregatesFilter | string | null
    telefoneResponsavel?: StringNullableWithAggregatesFilter | string | null
    emailResponsavel?: StringNullableWithAggregatesFilter | string | null
    turmaId?: IntNullableWithAggregatesFilter | number | null
    escolaId?: IntWithAggregatesFilter | number
    fotoUrl?: StringNullableWithAggregatesFilter | string | null
    dataCriacao?: DateTimeWithAggregatesFilter | Date | string
    dataAtualizacao?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ProvaWhereInput = {
    AND?: Enumerable<ProvaWhereInput>
    OR?: Enumerable<ProvaWhereInput>
    NOT?: Enumerable<ProvaWhereInput>
    id?: IntFilter | number
    nome?: StringFilter | string
    descricao?: StringNullableFilter | string | null
    dataAplicacao?: DateTimeNullableFilter | Date | string | null
    tipo?: StringFilter | string
    disciplina?: StringNullableFilter | string | null
    serie?: IntNullableFilter | number | null
    criadoPor?: IntNullableFilter | number | null
    dataCriacao?: DateTimeFilter | Date | string
    dataAtualizacao?: DateTimeFilter | Date | string
    questoes?: QuestaoListRelationFilter
    aplicacoesProva?: AplicacaoProvaListRelationFilter
    resultados?: ResultadoListRelationFilter
    desempenhoHabilidades?: DesempenhoHabilidadeListRelationFilter
  }

  export type ProvaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    dataAplicacao?: SortOrderInput | SortOrder
    tipo?: SortOrder
    disciplina?: SortOrderInput | SortOrder
    serie?: SortOrderInput | SortOrder
    criadoPor?: SortOrderInput | SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    questoes?: QuestaoOrderByRelationAggregateInput
    aplicacoesProva?: AplicacaoProvaOrderByRelationAggregateInput
    resultados?: ResultadoOrderByRelationAggregateInput
    desempenhoHabilidades?: DesempenhoHabilidadeOrderByRelationAggregateInput
  }

  export type ProvaWhereUniqueInput = {
    id?: number
  }

  export type ProvaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    dataAplicacao?: SortOrderInput | SortOrder
    tipo?: SortOrder
    disciplina?: SortOrderInput | SortOrder
    serie?: SortOrderInput | SortOrder
    criadoPor?: SortOrderInput | SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    _count?: ProvaCountOrderByAggregateInput
    _avg?: ProvaAvgOrderByAggregateInput
    _max?: ProvaMaxOrderByAggregateInput
    _min?: ProvaMinOrderByAggregateInput
    _sum?: ProvaSumOrderByAggregateInput
  }

  export type ProvaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProvaScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProvaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProvaScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    nome?: StringWithAggregatesFilter | string
    descricao?: StringNullableWithAggregatesFilter | string | null
    dataAplicacao?: DateTimeNullableWithAggregatesFilter | Date | string | null
    tipo?: StringWithAggregatesFilter | string
    disciplina?: StringNullableWithAggregatesFilter | string | null
    serie?: IntNullableWithAggregatesFilter | number | null
    criadoPor?: IntNullableWithAggregatesFilter | number | null
    dataCriacao?: DateTimeWithAggregatesFilter | Date | string
    dataAtualizacao?: DateTimeWithAggregatesFilter | Date | string
  }

  export type QuestaoWhereInput = {
    AND?: Enumerable<QuestaoWhereInput>
    OR?: Enumerable<QuestaoWhereInput>
    NOT?: Enumerable<QuestaoWhereInput>
    id?: IntFilter | number
    provaId?: IntFilter | number
    ordem?: IntFilter | number
    enunciado?: StringFilter | string
    tipo?: StringFilter | string
    opcoes?: JsonNullableFilter
    respostaCorreta?: StringNullableFilter | string | null
    valor?: DecimalFilter | Decimal | DecimalJsLike | number | string
    habilidadeBncc?: StringNullableFilter | string | null
    descricaoBncc?: StringNullableFilter | string | null
    dataCriacao?: DateTimeFilter | Date | string
    dataAtualizacao?: DateTimeFilter | Date | string
    prova?: XOR<ProvaRelationFilter, ProvaWhereInput>
  }

  export type QuestaoOrderByWithRelationInput = {
    id?: SortOrder
    provaId?: SortOrder
    ordem?: SortOrder
    enunciado?: SortOrder
    tipo?: SortOrder
    opcoes?: SortOrderInput | SortOrder
    respostaCorreta?: SortOrderInput | SortOrder
    valor?: SortOrder
    habilidadeBncc?: SortOrderInput | SortOrder
    descricaoBncc?: SortOrderInput | SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    prova?: ProvaOrderByWithRelationInput
  }

  export type QuestaoWhereUniqueInput = {
    id?: number
  }

  export type QuestaoOrderByWithAggregationInput = {
    id?: SortOrder
    provaId?: SortOrder
    ordem?: SortOrder
    enunciado?: SortOrder
    tipo?: SortOrder
    opcoes?: SortOrderInput | SortOrder
    respostaCorreta?: SortOrderInput | SortOrder
    valor?: SortOrder
    habilidadeBncc?: SortOrderInput | SortOrder
    descricaoBncc?: SortOrderInput | SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    _count?: QuestaoCountOrderByAggregateInput
    _avg?: QuestaoAvgOrderByAggregateInput
    _max?: QuestaoMaxOrderByAggregateInput
    _min?: QuestaoMinOrderByAggregateInput
    _sum?: QuestaoSumOrderByAggregateInput
  }

  export type QuestaoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<QuestaoScalarWhereWithAggregatesInput>
    OR?: Enumerable<QuestaoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<QuestaoScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    provaId?: IntWithAggregatesFilter | number
    ordem?: IntWithAggregatesFilter | number
    enunciado?: StringWithAggregatesFilter | string
    tipo?: StringWithAggregatesFilter | string
    opcoes?: JsonNullableWithAggregatesFilter
    respostaCorreta?: StringNullableWithAggregatesFilter | string | null
    valor?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    habilidadeBncc?: StringNullableWithAggregatesFilter | string | null
    descricaoBncc?: StringNullableWithAggregatesFilter | string | null
    dataCriacao?: DateTimeWithAggregatesFilter | Date | string
    dataAtualizacao?: DateTimeWithAggregatesFilter | Date | string
  }

  export type AplicacaoProvaWhereInput = {
    AND?: Enumerable<AplicacaoProvaWhereInput>
    OR?: Enumerable<AplicacaoProvaWhereInput>
    NOT?: Enumerable<AplicacaoProvaWhereInput>
    id?: IntFilter | number
    provaId?: IntFilter | number
    turmaId?: IntFilter | number
    dataAplicacao?: DateTimeFilter | Date | string
    horaInicio?: DateTimeNullableFilter | Date | string | null
    horaTermino?: DateTimeNullableFilter | Date | string | null
    observacoes?: StringNullableFilter | string | null
    dataCriacao?: DateTimeFilter | Date | string
    prova?: XOR<ProvaRelationFilter, ProvaWhereInput>
    turma?: XOR<TurmaRelationFilter, TurmaWhereInput>
    resultados?: ResultadoListRelationFilter
  }

  export type AplicacaoProvaOrderByWithRelationInput = {
    id?: SortOrder
    provaId?: SortOrder
    turmaId?: SortOrder
    dataAplicacao?: SortOrder
    horaInicio?: SortOrderInput | SortOrder
    horaTermino?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    dataCriacao?: SortOrder
    prova?: ProvaOrderByWithRelationInput
    turma?: TurmaOrderByWithRelationInput
    resultados?: ResultadoOrderByRelationAggregateInput
  }

  export type AplicacaoProvaWhereUniqueInput = {
    id?: number
  }

  export type AplicacaoProvaOrderByWithAggregationInput = {
    id?: SortOrder
    provaId?: SortOrder
    turmaId?: SortOrder
    dataAplicacao?: SortOrder
    horaInicio?: SortOrderInput | SortOrder
    horaTermino?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    dataCriacao?: SortOrder
    _count?: AplicacaoProvaCountOrderByAggregateInput
    _avg?: AplicacaoProvaAvgOrderByAggregateInput
    _max?: AplicacaoProvaMaxOrderByAggregateInput
    _min?: AplicacaoProvaMinOrderByAggregateInput
    _sum?: AplicacaoProvaSumOrderByAggregateInput
  }

  export type AplicacaoProvaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AplicacaoProvaScalarWhereWithAggregatesInput>
    OR?: Enumerable<AplicacaoProvaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AplicacaoProvaScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    provaId?: IntWithAggregatesFilter | number
    turmaId?: IntWithAggregatesFilter | number
    dataAplicacao?: DateTimeWithAggregatesFilter | Date | string
    horaInicio?: DateTimeNullableWithAggregatesFilter | Date | string | null
    horaTermino?: DateTimeNullableWithAggregatesFilter | Date | string | null
    observacoes?: StringNullableWithAggregatesFilter | string | null
    dataCriacao?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ResultadoWhereInput = {
    AND?: Enumerable<ResultadoWhereInput>
    OR?: Enumerable<ResultadoWhereInput>
    NOT?: Enumerable<ResultadoWhereInput>
    id?: IntFilter | number
    alunoId?: IntFilter | number
    provaId?: IntFilter | number
    aplicacaoId?: IntFilter | number
    respostas?: JsonNullableFilter
    pontuacao?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    percentual?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    dataCorrecao?: DateTimeNullableFilter | Date | string | null
    corrigidoPor?: IntNullableFilter | number | null
    observacoes?: StringNullableFilter | string | null
    dataCriacao?: DateTimeFilter | Date | string
    dataAtualizacao?: DateTimeFilter | Date | string
    aluno?: XOR<AlunoRelationFilter, AlunoWhereInput>
    prova?: XOR<ProvaRelationFilter, ProvaWhereInput>
    aplicacao?: XOR<AplicacaoProvaRelationFilter, AplicacaoProvaWhereInput>
  }

  export type ResultadoOrderByWithRelationInput = {
    id?: SortOrder
    alunoId?: SortOrder
    provaId?: SortOrder
    aplicacaoId?: SortOrder
    respostas?: SortOrderInput | SortOrder
    pontuacao?: SortOrderInput | SortOrder
    percentual?: SortOrderInput | SortOrder
    dataCorrecao?: SortOrderInput | SortOrder
    corrigidoPor?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    aluno?: AlunoOrderByWithRelationInput
    prova?: ProvaOrderByWithRelationInput
    aplicacao?: AplicacaoProvaOrderByWithRelationInput
  }

  export type ResultadoWhereUniqueInput = {
    id?: number
  }

  export type ResultadoOrderByWithAggregationInput = {
    id?: SortOrder
    alunoId?: SortOrder
    provaId?: SortOrder
    aplicacaoId?: SortOrder
    respostas?: SortOrderInput | SortOrder
    pontuacao?: SortOrderInput | SortOrder
    percentual?: SortOrderInput | SortOrder
    dataCorrecao?: SortOrderInput | SortOrder
    corrigidoPor?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    _count?: ResultadoCountOrderByAggregateInput
    _avg?: ResultadoAvgOrderByAggregateInput
    _max?: ResultadoMaxOrderByAggregateInput
    _min?: ResultadoMinOrderByAggregateInput
    _sum?: ResultadoSumOrderByAggregateInput
  }

  export type ResultadoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ResultadoScalarWhereWithAggregatesInput>
    OR?: Enumerable<ResultadoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ResultadoScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    alunoId?: IntWithAggregatesFilter | number
    provaId?: IntWithAggregatesFilter | number
    aplicacaoId?: IntWithAggregatesFilter | number
    respostas?: JsonNullableWithAggregatesFilter
    pontuacao?: DecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    percentual?: DecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    dataCorrecao?: DateTimeNullableWithAggregatesFilter | Date | string | null
    corrigidoPor?: IntNullableWithAggregatesFilter | number | null
    observacoes?: StringNullableWithAggregatesFilter | string | null
    dataCriacao?: DateTimeWithAggregatesFilter | Date | string
    dataAtualizacao?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UsuarioWhereInput = {
    AND?: Enumerable<UsuarioWhereInput>
    OR?: Enumerable<UsuarioWhereInput>
    NOT?: Enumerable<UsuarioWhereInput>
    id?: IntFilter | number
    nome?: StringFilter | string
    email?: StringFilter | string
    senha?: StringFilter | string
    tipo?: StringFilter | string
    escolaId?: IntNullableFilter | number | null
    fotoUrl?: StringNullableFilter | string | null
    ultimoAcesso?: DateTimeNullableFilter | Date | string | null
    ativo?: BoolFilter | boolean
    dataCriacao?: DateTimeFilter | Date | string
    dataAtualizacao?: DateTimeFilter | Date | string
    escola?: XOR<EscolaRelationFilter, EscolaWhereInput> | null
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    escolaId?: SortOrderInput | SortOrder
    fotoUrl?: SortOrderInput | SortOrder
    ultimoAcesso?: SortOrderInput | SortOrder
    ativo?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    escola?: EscolaOrderByWithRelationInput
  }

  export type UsuarioWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    escolaId?: SortOrderInput | SortOrder
    fotoUrl?: SortOrderInput | SortOrder
    ultimoAcesso?: SortOrderInput | SortOrder
    ativo?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UsuarioScalarWhereWithAggregatesInput>
    OR?: Enumerable<UsuarioScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UsuarioScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    nome?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    senha?: StringWithAggregatesFilter | string
    tipo?: StringWithAggregatesFilter | string
    escolaId?: IntNullableWithAggregatesFilter | number | null
    fotoUrl?: StringNullableWithAggregatesFilter | string | null
    ultimoAcesso?: DateTimeNullableWithAggregatesFilter | Date | string | null
    ativo?: BoolWithAggregatesFilter | boolean
    dataCriacao?: DateTimeWithAggregatesFilter | Date | string
    dataAtualizacao?: DateTimeWithAggregatesFilter | Date | string
  }

  export type HabilidadeBnccWhereInput = {
    AND?: Enumerable<HabilidadeBnccWhereInput>
    OR?: Enumerable<HabilidadeBnccWhereInput>
    NOT?: Enumerable<HabilidadeBnccWhereInput>
    id?: IntFilter | number
    codigo?: StringFilter | string
    componente?: StringFilter | string
    ano?: StringFilter | string
    descricao?: StringFilter | string
    dataCriacao?: DateTimeFilter | Date | string
    desempenhoHabilidades?: DesempenhoHabilidadeListRelationFilter
  }

  export type HabilidadeBnccOrderByWithRelationInput = {
    id?: SortOrder
    codigo?: SortOrder
    componente?: SortOrder
    ano?: SortOrder
    descricao?: SortOrder
    dataCriacao?: SortOrder
    desempenhoHabilidades?: DesempenhoHabilidadeOrderByRelationAggregateInput
  }

  export type HabilidadeBnccWhereUniqueInput = {
    id?: number
    codigo?: string
  }

  export type HabilidadeBnccOrderByWithAggregationInput = {
    id?: SortOrder
    codigo?: SortOrder
    componente?: SortOrder
    ano?: SortOrder
    descricao?: SortOrder
    dataCriacao?: SortOrder
    _count?: HabilidadeBnccCountOrderByAggregateInput
    _avg?: HabilidadeBnccAvgOrderByAggregateInput
    _max?: HabilidadeBnccMaxOrderByAggregateInput
    _min?: HabilidadeBnccMinOrderByAggregateInput
    _sum?: HabilidadeBnccSumOrderByAggregateInput
  }

  export type HabilidadeBnccScalarWhereWithAggregatesInput = {
    AND?: Enumerable<HabilidadeBnccScalarWhereWithAggregatesInput>
    OR?: Enumerable<HabilidadeBnccScalarWhereWithAggregatesInput>
    NOT?: Enumerable<HabilidadeBnccScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    codigo?: StringWithAggregatesFilter | string
    componente?: StringWithAggregatesFilter | string
    ano?: StringWithAggregatesFilter | string
    descricao?: StringWithAggregatesFilter | string
    dataCriacao?: DateTimeWithAggregatesFilter | Date | string
  }

  export type DesempenhoHabilidadeWhereInput = {
    AND?: Enumerable<DesempenhoHabilidadeWhereInput>
    OR?: Enumerable<DesempenhoHabilidadeWhereInput>
    NOT?: Enumerable<DesempenhoHabilidadeWhereInput>
    id?: IntFilter | number
    habilidadeId?: IntFilter | number
    escolaId?: IntFilter | number
    turmaId?: IntNullableFilter | number | null
    provaId?: IntNullableFilter | number | null
    totalQuestoes?: IntFilter | number
    totalAcertos?: IntFilter | number
    percentualAcertos?: DecimalFilter | Decimal | DecimalJsLike | number | string
    dataAvaliacao?: DateTimeFilter | Date | string
    anoLetivo?: StringFilter | string
    dataCriacao?: DateTimeFilter | Date | string
    habilidade?: XOR<HabilidadeBnccRelationFilter, HabilidadeBnccWhereInput>
    escola?: XOR<EscolaRelationFilter, EscolaWhereInput>
    turma?: XOR<TurmaRelationFilter, TurmaWhereInput> | null
    prova?: XOR<ProvaRelationFilter, ProvaWhereInput> | null
  }

  export type DesempenhoHabilidadeOrderByWithRelationInput = {
    id?: SortOrder
    habilidadeId?: SortOrder
    escolaId?: SortOrder
    turmaId?: SortOrderInput | SortOrder
    provaId?: SortOrderInput | SortOrder
    totalQuestoes?: SortOrder
    totalAcertos?: SortOrder
    percentualAcertos?: SortOrder
    dataAvaliacao?: SortOrder
    anoLetivo?: SortOrder
    dataCriacao?: SortOrder
    habilidade?: HabilidadeBnccOrderByWithRelationInput
    escola?: EscolaOrderByWithRelationInput
    turma?: TurmaOrderByWithRelationInput
    prova?: ProvaOrderByWithRelationInput
  }

  export type DesempenhoHabilidadeWhereUniqueInput = {
    id?: number
  }

  export type DesempenhoHabilidadeOrderByWithAggregationInput = {
    id?: SortOrder
    habilidadeId?: SortOrder
    escolaId?: SortOrder
    turmaId?: SortOrderInput | SortOrder
    provaId?: SortOrderInput | SortOrder
    totalQuestoes?: SortOrder
    totalAcertos?: SortOrder
    percentualAcertos?: SortOrder
    dataAvaliacao?: SortOrder
    anoLetivo?: SortOrder
    dataCriacao?: SortOrder
    _count?: DesempenhoHabilidadeCountOrderByAggregateInput
    _avg?: DesempenhoHabilidadeAvgOrderByAggregateInput
    _max?: DesempenhoHabilidadeMaxOrderByAggregateInput
    _min?: DesempenhoHabilidadeMinOrderByAggregateInput
    _sum?: DesempenhoHabilidadeSumOrderByAggregateInput
  }

  export type DesempenhoHabilidadeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DesempenhoHabilidadeScalarWhereWithAggregatesInput>
    OR?: Enumerable<DesempenhoHabilidadeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DesempenhoHabilidadeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    habilidadeId?: IntWithAggregatesFilter | number
    escolaId?: IntWithAggregatesFilter | number
    turmaId?: IntNullableWithAggregatesFilter | number | null
    provaId?: IntNullableWithAggregatesFilter | number | null
    totalQuestoes?: IntWithAggregatesFilter | number
    totalAcertos?: IntWithAggregatesFilter | number
    percentualAcertos?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    dataAvaliacao?: DateTimeWithAggregatesFilter | Date | string
    anoLetivo?: StringWithAggregatesFilter | string
    dataCriacao?: DateTimeWithAggregatesFilter | Date | string
  }

  export type EscolaCreateInput = {
    nome: string
    regiao?: string | null
    grupo?: string | null
    endereco?: string | null
    telefone?: string | null
    email?: string | null
    diretor?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    turmas?: TurmaCreateNestedManyWithoutEscolaInput
    alunos?: AlunoCreateNestedManyWithoutEscolaInput
    usuarios?: UsuarioCreateNestedManyWithoutEscolaInput
    desempenhoHabilidades?: DesempenhoHabilidadeCreateNestedManyWithoutEscolaInput
  }

  export type EscolaUncheckedCreateInput = {
    id?: number
    nome: string
    regiao?: string | null
    grupo?: string | null
    endereco?: string | null
    telefone?: string | null
    email?: string | null
    diretor?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    turmas?: TurmaUncheckedCreateNestedManyWithoutEscolaInput
    alunos?: AlunoUncheckedCreateNestedManyWithoutEscolaInput
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutEscolaInput
    desempenhoHabilidades?: DesempenhoHabilidadeUncheckedCreateNestedManyWithoutEscolaInput
  }

  export type EscolaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    regiao?: NullableStringFieldUpdateOperationsInput | string | null
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    diretor?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    turmas?: TurmaUpdateManyWithoutEscolaNestedInput
    alunos?: AlunoUpdateManyWithoutEscolaNestedInput
    usuarios?: UsuarioUpdateManyWithoutEscolaNestedInput
    desempenhoHabilidades?: DesempenhoHabilidadeUpdateManyWithoutEscolaNestedInput
  }

  export type EscolaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    regiao?: NullableStringFieldUpdateOperationsInput | string | null
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    diretor?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    turmas?: TurmaUncheckedUpdateManyWithoutEscolaNestedInput
    alunos?: AlunoUncheckedUpdateManyWithoutEscolaNestedInput
    usuarios?: UsuarioUncheckedUpdateManyWithoutEscolaNestedInput
    desempenhoHabilidades?: DesempenhoHabilidadeUncheckedUpdateManyWithoutEscolaNestedInput
  }

  export type EscolaCreateManyInput = {
    id?: number
    nome: string
    regiao?: string | null
    grupo?: string | null
    endereco?: string | null
    telefone?: string | null
    email?: string | null
    diretor?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type EscolaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    regiao?: NullableStringFieldUpdateOperationsInput | string | null
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    diretor?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EscolaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    regiao?: NullableStringFieldUpdateOperationsInput | string | null
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    diretor?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurmaCreateInput = {
    nome: string
    serie: number
    turno: string
    anoLetivo: string
    professorResponsavel?: string | null
    sala?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    escola: EscolaCreateNestedOneWithoutTurmasInput
    alunos?: AlunoCreateNestedManyWithoutTurmaInput
    aplicacoesProva?: AplicacaoProvaCreateNestedManyWithoutTurmaInput
    desempenhoHabilidades?: DesempenhoHabilidadeCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUncheckedCreateInput = {
    id?: number
    nome: string
    serie: number
    turno: string
    anoLetivo: string
    escolaId: number
    professorResponsavel?: string | null
    sala?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    alunos?: AlunoUncheckedCreateNestedManyWithoutTurmaInput
    aplicacoesProva?: AplicacaoProvaUncheckedCreateNestedManyWithoutTurmaInput
    desempenhoHabilidades?: DesempenhoHabilidadeUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    serie?: IntFieldUpdateOperationsInput | number
    turno?: StringFieldUpdateOperationsInput | string
    anoLetivo?: StringFieldUpdateOperationsInput | string
    professorResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    sala?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    escola?: EscolaUpdateOneRequiredWithoutTurmasNestedInput
    alunos?: AlunoUpdateManyWithoutTurmaNestedInput
    aplicacoesProva?: AplicacaoProvaUpdateManyWithoutTurmaNestedInput
    desempenhoHabilidades?: DesempenhoHabilidadeUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    serie?: IntFieldUpdateOperationsInput | number
    turno?: StringFieldUpdateOperationsInput | string
    anoLetivo?: StringFieldUpdateOperationsInput | string
    escolaId?: IntFieldUpdateOperationsInput | number
    professorResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    sala?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    alunos?: AlunoUncheckedUpdateManyWithoutTurmaNestedInput
    aplicacoesProva?: AplicacaoProvaUncheckedUpdateManyWithoutTurmaNestedInput
    desempenhoHabilidades?: DesempenhoHabilidadeUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaCreateManyInput = {
    id?: number
    nome: string
    serie: number
    turno: string
    anoLetivo: string
    escolaId: number
    professorResponsavel?: string | null
    sala?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type TurmaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    serie?: IntFieldUpdateOperationsInput | number
    turno?: StringFieldUpdateOperationsInput | string
    anoLetivo?: StringFieldUpdateOperationsInput | string
    professorResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    sala?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurmaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    serie?: IntFieldUpdateOperationsInput | number
    turno?: StringFieldUpdateOperationsInput | string
    anoLetivo?: StringFieldUpdateOperationsInput | string
    escolaId?: IntFieldUpdateOperationsInput | number
    professorResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    sala?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlunoCreateInput = {
    nome: string
    matricula: string
    dataNascimento?: Date | string | null
    genero?: string | null
    responsavel?: string | null
    telefoneResponsavel?: string | null
    emailResponsavel?: string | null
    fotoUrl?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    turma?: TurmaCreateNestedOneWithoutAlunosInput
    escola: EscolaCreateNestedOneWithoutAlunosInput
    resultados?: ResultadoCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUncheckedCreateInput = {
    id?: number
    nome: string
    matricula: string
    dataNascimento?: Date | string | null
    genero?: string | null
    responsavel?: string | null
    telefoneResponsavel?: string | null
    emailResponsavel?: string | null
    turmaId?: number | null
    escolaId: number
    fotoUrl?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    resultados?: ResultadoUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    emailResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    turma?: TurmaUpdateOneWithoutAlunosNestedInput
    escola?: EscolaUpdateOneRequiredWithoutAlunosNestedInput
    resultados?: ResultadoUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    emailResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    turmaId?: NullableIntFieldUpdateOperationsInput | number | null
    escolaId?: IntFieldUpdateOperationsInput | number
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    resultados?: ResultadoUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoCreateManyInput = {
    id?: number
    nome: string
    matricula: string
    dataNascimento?: Date | string | null
    genero?: string | null
    responsavel?: string | null
    telefoneResponsavel?: string | null
    emailResponsavel?: string | null
    turmaId?: number | null
    escolaId: number
    fotoUrl?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type AlunoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    emailResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlunoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    emailResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    turmaId?: NullableIntFieldUpdateOperationsInput | number | null
    escolaId?: IntFieldUpdateOperationsInput | number
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProvaCreateInput = {
    nome: string
    descricao?: string | null
    dataAplicacao?: Date | string | null
    tipo: string
    disciplina?: string | null
    serie?: number | null
    criadoPor?: number | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    questoes?: QuestaoCreateNestedManyWithoutProvaInput
    aplicacoesProva?: AplicacaoProvaCreateNestedManyWithoutProvaInput
    resultados?: ResultadoCreateNestedManyWithoutProvaInput
    desempenhoHabilidades?: DesempenhoHabilidadeCreateNestedManyWithoutProvaInput
  }

  export type ProvaUncheckedCreateInput = {
    id?: number
    nome: string
    descricao?: string | null
    dataAplicacao?: Date | string | null
    tipo: string
    disciplina?: string | null
    serie?: number | null
    criadoPor?: number | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    questoes?: QuestaoUncheckedCreateNestedManyWithoutProvaInput
    aplicacoesProva?: AplicacaoProvaUncheckedCreateNestedManyWithoutProvaInput
    resultados?: ResultadoUncheckedCreateNestedManyWithoutProvaInput
    desempenhoHabilidades?: DesempenhoHabilidadeUncheckedCreateNestedManyWithoutProvaInput
  }

  export type ProvaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataAplicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    disciplina?: NullableStringFieldUpdateOperationsInput | string | null
    serie?: NullableIntFieldUpdateOperationsInput | number | null
    criadoPor?: NullableIntFieldUpdateOperationsInput | number | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    questoes?: QuestaoUpdateManyWithoutProvaNestedInput
    aplicacoesProva?: AplicacaoProvaUpdateManyWithoutProvaNestedInput
    resultados?: ResultadoUpdateManyWithoutProvaNestedInput
    desempenhoHabilidades?: DesempenhoHabilidadeUpdateManyWithoutProvaNestedInput
  }

  export type ProvaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataAplicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    disciplina?: NullableStringFieldUpdateOperationsInput | string | null
    serie?: NullableIntFieldUpdateOperationsInput | number | null
    criadoPor?: NullableIntFieldUpdateOperationsInput | number | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    questoes?: QuestaoUncheckedUpdateManyWithoutProvaNestedInput
    aplicacoesProva?: AplicacaoProvaUncheckedUpdateManyWithoutProvaNestedInput
    resultados?: ResultadoUncheckedUpdateManyWithoutProvaNestedInput
    desempenhoHabilidades?: DesempenhoHabilidadeUncheckedUpdateManyWithoutProvaNestedInput
  }

  export type ProvaCreateManyInput = {
    id?: number
    nome: string
    descricao?: string | null
    dataAplicacao?: Date | string | null
    tipo: string
    disciplina?: string | null
    serie?: number | null
    criadoPor?: number | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type ProvaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataAplicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    disciplina?: NullableStringFieldUpdateOperationsInput | string | null
    serie?: NullableIntFieldUpdateOperationsInput | number | null
    criadoPor?: NullableIntFieldUpdateOperationsInput | number | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProvaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataAplicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    disciplina?: NullableStringFieldUpdateOperationsInput | string | null
    serie?: NullableIntFieldUpdateOperationsInput | number | null
    criadoPor?: NullableIntFieldUpdateOperationsInput | number | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestaoCreateInput = {
    ordem: number
    enunciado: string
    tipo: string
    opcoes?: NullableJsonNullValueInput | InputJsonValue
    respostaCorreta?: string | null
    valor?: Decimal | DecimalJsLike | number | string
    habilidadeBncc?: string | null
    descricaoBncc?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    prova: ProvaCreateNestedOneWithoutQuestoesInput
  }

  export type QuestaoUncheckedCreateInput = {
    id?: number
    provaId: number
    ordem: number
    enunciado: string
    tipo: string
    opcoes?: NullableJsonNullValueInput | InputJsonValue
    respostaCorreta?: string | null
    valor?: Decimal | DecimalJsLike | number | string
    habilidadeBncc?: string | null
    descricaoBncc?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type QuestaoUpdateInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    enunciado?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    opcoes?: NullableJsonNullValueInput | InputJsonValue
    respostaCorreta?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    habilidadeBncc?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoBncc?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    prova?: ProvaUpdateOneRequiredWithoutQuestoesNestedInput
  }

  export type QuestaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    provaId?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
    enunciado?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    opcoes?: NullableJsonNullValueInput | InputJsonValue
    respostaCorreta?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    habilidadeBncc?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoBncc?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestaoCreateManyInput = {
    id?: number
    provaId: number
    ordem: number
    enunciado: string
    tipo: string
    opcoes?: NullableJsonNullValueInput | InputJsonValue
    respostaCorreta?: string | null
    valor?: Decimal | DecimalJsLike | number | string
    habilidadeBncc?: string | null
    descricaoBncc?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type QuestaoUpdateManyMutationInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    enunciado?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    opcoes?: NullableJsonNullValueInput | InputJsonValue
    respostaCorreta?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    habilidadeBncc?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoBncc?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    provaId?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
    enunciado?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    opcoes?: NullableJsonNullValueInput | InputJsonValue
    respostaCorreta?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    habilidadeBncc?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoBncc?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AplicacaoProvaCreateInput = {
    dataAplicacao: Date | string
    horaInicio?: Date | string | null
    horaTermino?: Date | string | null
    observacoes?: string | null
    dataCriacao?: Date | string
    prova: ProvaCreateNestedOneWithoutAplicacoesProvaInput
    turma: TurmaCreateNestedOneWithoutAplicacoesProvaInput
    resultados?: ResultadoCreateNestedManyWithoutAplicacaoInput
  }

  export type AplicacaoProvaUncheckedCreateInput = {
    id?: number
    provaId: number
    turmaId: number
    dataAplicacao: Date | string
    horaInicio?: Date | string | null
    horaTermino?: Date | string | null
    observacoes?: string | null
    dataCriacao?: Date | string
    resultados?: ResultadoUncheckedCreateNestedManyWithoutAplicacaoInput
  }

  export type AplicacaoProvaUpdateInput = {
    dataAplicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaTermino?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    prova?: ProvaUpdateOneRequiredWithoutAplicacoesProvaNestedInput
    turma?: TurmaUpdateOneRequiredWithoutAplicacoesProvaNestedInput
    resultados?: ResultadoUpdateManyWithoutAplicacaoNestedInput
  }

  export type AplicacaoProvaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    provaId?: IntFieldUpdateOperationsInput | number
    turmaId?: IntFieldUpdateOperationsInput | number
    dataAplicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaTermino?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    resultados?: ResultadoUncheckedUpdateManyWithoutAplicacaoNestedInput
  }

  export type AplicacaoProvaCreateManyInput = {
    id?: number
    provaId: number
    turmaId: number
    dataAplicacao: Date | string
    horaInicio?: Date | string | null
    horaTermino?: Date | string | null
    observacoes?: string | null
    dataCriacao?: Date | string
  }

  export type AplicacaoProvaUpdateManyMutationInput = {
    dataAplicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaTermino?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AplicacaoProvaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    provaId?: IntFieldUpdateOperationsInput | number
    turmaId?: IntFieldUpdateOperationsInput | number
    dataAplicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaTermino?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultadoCreateInput = {
    respostas?: NullableJsonNullValueInput | InputJsonValue
    pontuacao?: Decimal | DecimalJsLike | number | string | null
    percentual?: Decimal | DecimalJsLike | number | string | null
    dataCorrecao?: Date | string | null
    corrigidoPor?: number | null
    observacoes?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    aluno: AlunoCreateNestedOneWithoutResultadosInput
    prova: ProvaCreateNestedOneWithoutResultadosInput
    aplicacao: AplicacaoProvaCreateNestedOneWithoutResultadosInput
  }

  export type ResultadoUncheckedCreateInput = {
    id?: number
    alunoId: number
    provaId: number
    aplicacaoId: number
    respostas?: NullableJsonNullValueInput | InputJsonValue
    pontuacao?: Decimal | DecimalJsLike | number | string | null
    percentual?: Decimal | DecimalJsLike | number | string | null
    dataCorrecao?: Date | string | null
    corrigidoPor?: number | null
    observacoes?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type ResultadoUpdateInput = {
    respostas?: NullableJsonNullValueInput | InputJsonValue
    pontuacao?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percentual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dataCorrecao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    corrigidoPor?: NullableIntFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    aluno?: AlunoUpdateOneRequiredWithoutResultadosNestedInput
    prova?: ProvaUpdateOneRequiredWithoutResultadosNestedInput
    aplicacao?: AplicacaoProvaUpdateOneRequiredWithoutResultadosNestedInput
  }

  export type ResultadoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    alunoId?: IntFieldUpdateOperationsInput | number
    provaId?: IntFieldUpdateOperationsInput | number
    aplicacaoId?: IntFieldUpdateOperationsInput | number
    respostas?: NullableJsonNullValueInput | InputJsonValue
    pontuacao?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percentual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dataCorrecao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    corrigidoPor?: NullableIntFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultadoCreateManyInput = {
    id?: number
    alunoId: number
    provaId: number
    aplicacaoId: number
    respostas?: NullableJsonNullValueInput | InputJsonValue
    pontuacao?: Decimal | DecimalJsLike | number | string | null
    percentual?: Decimal | DecimalJsLike | number | string | null
    dataCorrecao?: Date | string | null
    corrigidoPor?: number | null
    observacoes?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type ResultadoUpdateManyMutationInput = {
    respostas?: NullableJsonNullValueInput | InputJsonValue
    pontuacao?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percentual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dataCorrecao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    corrigidoPor?: NullableIntFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultadoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    alunoId?: IntFieldUpdateOperationsInput | number
    provaId?: IntFieldUpdateOperationsInput | number
    aplicacaoId?: IntFieldUpdateOperationsInput | number
    respostas?: NullableJsonNullValueInput | InputJsonValue
    pontuacao?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percentual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dataCorrecao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    corrigidoPor?: NullableIntFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateInput = {
    nome: string
    email: string
    senha: string
    tipo: string
    fotoUrl?: string | null
    ultimoAcesso?: Date | string | null
    ativo?: boolean
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    escola?: EscolaCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    tipo: string
    escolaId?: number | null
    fotoUrl?: string | null
    ultimoAcesso?: Date | string | null
    ativo?: boolean
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ultimoAcesso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    escola?: EscolaUpdateOneWithoutUsuariosNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    escolaId?: NullableIntFieldUpdateOperationsInput | number | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ultimoAcesso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha: string
    tipo: string
    escolaId?: number | null
    fotoUrl?: string | null
    ultimoAcesso?: Date | string | null
    ativo?: boolean
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ultimoAcesso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    escolaId?: NullableIntFieldUpdateOperationsInput | number | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ultimoAcesso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabilidadeBnccCreateInput = {
    codigo: string
    componente: string
    ano: string
    descricao: string
    dataCriacao?: Date | string
    desempenhoHabilidades?: DesempenhoHabilidadeCreateNestedManyWithoutHabilidadeInput
  }

  export type HabilidadeBnccUncheckedCreateInput = {
    id?: number
    codigo: string
    componente: string
    ano: string
    descricao: string
    dataCriacao?: Date | string
    desempenhoHabilidades?: DesempenhoHabilidadeUncheckedCreateNestedManyWithoutHabilidadeInput
  }

  export type HabilidadeBnccUpdateInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    componente?: StringFieldUpdateOperationsInput | string
    ano?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    desempenhoHabilidades?: DesempenhoHabilidadeUpdateManyWithoutHabilidadeNestedInput
  }

  export type HabilidadeBnccUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    componente?: StringFieldUpdateOperationsInput | string
    ano?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    desempenhoHabilidades?: DesempenhoHabilidadeUncheckedUpdateManyWithoutHabilidadeNestedInput
  }

  export type HabilidadeBnccCreateManyInput = {
    id?: number
    codigo: string
    componente: string
    ano: string
    descricao: string
    dataCriacao?: Date | string
  }

  export type HabilidadeBnccUpdateManyMutationInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    componente?: StringFieldUpdateOperationsInput | string
    ano?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabilidadeBnccUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    componente?: StringFieldUpdateOperationsInput | string
    ano?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DesempenhoHabilidadeCreateInput = {
    totalQuestoes: number
    totalAcertos: number
    percentualAcertos: Decimal | DecimalJsLike | number | string
    dataAvaliacao: Date | string
    anoLetivo: string
    dataCriacao?: Date | string
    habilidade: HabilidadeBnccCreateNestedOneWithoutDesempenhoHabilidadesInput
    escola: EscolaCreateNestedOneWithoutDesempenhoHabilidadesInput
    turma?: TurmaCreateNestedOneWithoutDesempenhoHabilidadesInput
    prova?: ProvaCreateNestedOneWithoutDesempenhoHabilidadesInput
  }

  export type DesempenhoHabilidadeUncheckedCreateInput = {
    id?: number
    habilidadeId: number
    escolaId: number
    turmaId?: number | null
    provaId?: number | null
    totalQuestoes: number
    totalAcertos: number
    percentualAcertos: Decimal | DecimalJsLike | number | string
    dataAvaliacao: Date | string
    anoLetivo: string
    dataCriacao?: Date | string
  }

  export type DesempenhoHabilidadeUpdateInput = {
    totalQuestoes?: IntFieldUpdateOperationsInput | number
    totalAcertos?: IntFieldUpdateOperationsInput | number
    percentualAcertos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAvaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
    anoLetivo?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    habilidade?: HabilidadeBnccUpdateOneRequiredWithoutDesempenhoHabilidadesNestedInput
    escola?: EscolaUpdateOneRequiredWithoutDesempenhoHabilidadesNestedInput
    turma?: TurmaUpdateOneWithoutDesempenhoHabilidadesNestedInput
    prova?: ProvaUpdateOneWithoutDesempenhoHabilidadesNestedInput
  }

  export type DesempenhoHabilidadeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    habilidadeId?: IntFieldUpdateOperationsInput | number
    escolaId?: IntFieldUpdateOperationsInput | number
    turmaId?: NullableIntFieldUpdateOperationsInput | number | null
    provaId?: NullableIntFieldUpdateOperationsInput | number | null
    totalQuestoes?: IntFieldUpdateOperationsInput | number
    totalAcertos?: IntFieldUpdateOperationsInput | number
    percentualAcertos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAvaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
    anoLetivo?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DesempenhoHabilidadeCreateManyInput = {
    id?: number
    habilidadeId: number
    escolaId: number
    turmaId?: number | null
    provaId?: number | null
    totalQuestoes: number
    totalAcertos: number
    percentualAcertos: Decimal | DecimalJsLike | number | string
    dataAvaliacao: Date | string
    anoLetivo: string
    dataCriacao?: Date | string
  }

  export type DesempenhoHabilidadeUpdateManyMutationInput = {
    totalQuestoes?: IntFieldUpdateOperationsInput | number
    totalAcertos?: IntFieldUpdateOperationsInput | number
    percentualAcertos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAvaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
    anoLetivo?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DesempenhoHabilidadeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    habilidadeId?: IntFieldUpdateOperationsInput | number
    escolaId?: IntFieldUpdateOperationsInput | number
    turmaId?: NullableIntFieldUpdateOperationsInput | number | null
    provaId?: NullableIntFieldUpdateOperationsInput | number | null
    totalQuestoes?: IntFieldUpdateOperationsInput | number
    totalAcertos?: IntFieldUpdateOperationsInput | number
    percentualAcertos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAvaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
    anoLetivo?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type TurmaListRelationFilter = {
    every?: TurmaWhereInput
    some?: TurmaWhereInput
    none?: TurmaWhereInput
  }

  export type AlunoListRelationFilter = {
    every?: AlunoWhereInput
    some?: AlunoWhereInput
    none?: AlunoWhereInput
  }

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type DesempenhoHabilidadeListRelationFilter = {
    every?: DesempenhoHabilidadeWhereInput
    some?: DesempenhoHabilidadeWhereInput
    none?: DesempenhoHabilidadeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TurmaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlunoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DesempenhoHabilidadeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EscolaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    regiao?: SortOrder
    grupo?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    diretor?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type EscolaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EscolaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    regiao?: SortOrder
    grupo?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    diretor?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type EscolaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    regiao?: SortOrder
    grupo?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    diretor?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type EscolaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type EscolaRelationFilter = {
    is?: EscolaWhereInput | null
    isNot?: EscolaWhereInput | null
  }

  export type AplicacaoProvaListRelationFilter = {
    every?: AplicacaoProvaWhereInput
    some?: AplicacaoProvaWhereInput
    none?: AplicacaoProvaWhereInput
  }

  export type AplicacaoProvaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TurmaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    serie?: SortOrder
    turno?: SortOrder
    anoLetivo?: SortOrder
    escolaId?: SortOrder
    professorResponsavel?: SortOrder
    sala?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type TurmaAvgOrderByAggregateInput = {
    id?: SortOrder
    serie?: SortOrder
    escolaId?: SortOrder
  }

  export type TurmaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    serie?: SortOrder
    turno?: SortOrder
    anoLetivo?: SortOrder
    escolaId?: SortOrder
    professorResponsavel?: SortOrder
    sala?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type TurmaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    serie?: SortOrder
    turno?: SortOrder
    anoLetivo?: SortOrder
    escolaId?: SortOrder
    professorResponsavel?: SortOrder
    sala?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type TurmaSumOrderByAggregateInput = {
    id?: SortOrder
    serie?: SortOrder
    escolaId?: SortOrder
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type TurmaRelationFilter = {
    is?: TurmaWhereInput | null
    isNot?: TurmaWhereInput | null
  }

  export type ResultadoListRelationFilter = {
    every?: ResultadoWhereInput
    some?: ResultadoWhereInput
    none?: ResultadoWhereInput
  }

  export type ResultadoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlunoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    matricula?: SortOrder
    dataNascimento?: SortOrder
    genero?: SortOrder
    responsavel?: SortOrder
    telefoneResponsavel?: SortOrder
    emailResponsavel?: SortOrder
    turmaId?: SortOrder
    escolaId?: SortOrder
    fotoUrl?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type AlunoAvgOrderByAggregateInput = {
    id?: SortOrder
    turmaId?: SortOrder
    escolaId?: SortOrder
  }

  export type AlunoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    matricula?: SortOrder
    dataNascimento?: SortOrder
    genero?: SortOrder
    responsavel?: SortOrder
    telefoneResponsavel?: SortOrder
    emailResponsavel?: SortOrder
    turmaId?: SortOrder
    escolaId?: SortOrder
    fotoUrl?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type AlunoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    matricula?: SortOrder
    dataNascimento?: SortOrder
    genero?: SortOrder
    responsavel?: SortOrder
    telefoneResponsavel?: SortOrder
    emailResponsavel?: SortOrder
    turmaId?: SortOrder
    escolaId?: SortOrder
    fotoUrl?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type AlunoSumOrderByAggregateInput = {
    id?: SortOrder
    turmaId?: SortOrder
    escolaId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type QuestaoListRelationFilter = {
    every?: QuestaoWhereInput
    some?: QuestaoWhereInput
    none?: QuestaoWhereInput
  }

  export type QuestaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProvaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    dataAplicacao?: SortOrder
    tipo?: SortOrder
    disciplina?: SortOrder
    serie?: SortOrder
    criadoPor?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type ProvaAvgOrderByAggregateInput = {
    id?: SortOrder
    serie?: SortOrder
    criadoPor?: SortOrder
  }

  export type ProvaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    dataAplicacao?: SortOrder
    tipo?: SortOrder
    disciplina?: SortOrder
    serie?: SortOrder
    criadoPor?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type ProvaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    dataAplicacao?: SortOrder
    tipo?: SortOrder
    disciplina?: SortOrder
    serie?: SortOrder
    criadoPor?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type ProvaSumOrderByAggregateInput = {
    id?: SortOrder
    serie?: SortOrder
    criadoPor?: SortOrder
  }
  export type JsonNullableFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase>, Exclude<keyof Required<JsonNullableFilterBase>, 'path'>>,
        Required<JsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase>, 'path'>>

  export type JsonNullableFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type DecimalFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalFilter | Decimal | DecimalJsLike | number | string
  }

  export type ProvaRelationFilter = {
    is?: ProvaWhereInput | null
    isNot?: ProvaWhereInput | null
  }

  export type QuestaoCountOrderByAggregateInput = {
    id?: SortOrder
    provaId?: SortOrder
    ordem?: SortOrder
    enunciado?: SortOrder
    tipo?: SortOrder
    opcoes?: SortOrder
    respostaCorreta?: SortOrder
    valor?: SortOrder
    habilidadeBncc?: SortOrder
    descricaoBncc?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type QuestaoAvgOrderByAggregateInput = {
    id?: SortOrder
    provaId?: SortOrder
    ordem?: SortOrder
    valor?: SortOrder
  }

  export type QuestaoMaxOrderByAggregateInput = {
    id?: SortOrder
    provaId?: SortOrder
    ordem?: SortOrder
    enunciado?: SortOrder
    tipo?: SortOrder
    respostaCorreta?: SortOrder
    valor?: SortOrder
    habilidadeBncc?: SortOrder
    descricaoBncc?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type QuestaoMinOrderByAggregateInput = {
    id?: SortOrder
    provaId?: SortOrder
    ordem?: SortOrder
    enunciado?: SortOrder
    tipo?: SortOrder
    respostaCorreta?: SortOrder
    valor?: SortOrder
    habilidadeBncc?: SortOrder
    descricaoBncc?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type QuestaoSumOrderByAggregateInput = {
    id?: SortOrder
    provaId?: SortOrder
    ordem?: SortOrder
    valor?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
    _count?: NestedIntNullableFilter
    _min?: NestedJsonNullableFilter
    _max?: NestedJsonNullableFilter
  }

  export type DecimalWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type AplicacaoProvaCountOrderByAggregateInput = {
    id?: SortOrder
    provaId?: SortOrder
    turmaId?: SortOrder
    dataAplicacao?: SortOrder
    horaInicio?: SortOrder
    horaTermino?: SortOrder
    observacoes?: SortOrder
    dataCriacao?: SortOrder
  }

  export type AplicacaoProvaAvgOrderByAggregateInput = {
    id?: SortOrder
    provaId?: SortOrder
    turmaId?: SortOrder
  }

  export type AplicacaoProvaMaxOrderByAggregateInput = {
    id?: SortOrder
    provaId?: SortOrder
    turmaId?: SortOrder
    dataAplicacao?: SortOrder
    horaInicio?: SortOrder
    horaTermino?: SortOrder
    observacoes?: SortOrder
    dataCriacao?: SortOrder
  }

  export type AplicacaoProvaMinOrderByAggregateInput = {
    id?: SortOrder
    provaId?: SortOrder
    turmaId?: SortOrder
    dataAplicacao?: SortOrder
    horaInicio?: SortOrder
    horaTermino?: SortOrder
    observacoes?: SortOrder
    dataCriacao?: SortOrder
  }

  export type AplicacaoProvaSumOrderByAggregateInput = {
    id?: SortOrder
    provaId?: SortOrder
    turmaId?: SortOrder
  }

  export type DecimalNullableFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
  }

  export type AlunoRelationFilter = {
    is?: AlunoWhereInput | null
    isNot?: AlunoWhereInput | null
  }

  export type AplicacaoProvaRelationFilter = {
    is?: AplicacaoProvaWhereInput | null
    isNot?: AplicacaoProvaWhereInput | null
  }

  export type ResultadoCountOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    provaId?: SortOrder
    aplicacaoId?: SortOrder
    respostas?: SortOrder
    pontuacao?: SortOrder
    percentual?: SortOrder
    dataCorrecao?: SortOrder
    corrigidoPor?: SortOrder
    observacoes?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type ResultadoAvgOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    provaId?: SortOrder
    aplicacaoId?: SortOrder
    pontuacao?: SortOrder
    percentual?: SortOrder
    corrigidoPor?: SortOrder
  }

  export type ResultadoMaxOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    provaId?: SortOrder
    aplicacaoId?: SortOrder
    pontuacao?: SortOrder
    percentual?: SortOrder
    dataCorrecao?: SortOrder
    corrigidoPor?: SortOrder
    observacoes?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type ResultadoMinOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    provaId?: SortOrder
    aplicacaoId?: SortOrder
    pontuacao?: SortOrder
    percentual?: SortOrder
    dataCorrecao?: SortOrder
    corrigidoPor?: SortOrder
    observacoes?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type ResultadoSumOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    provaId?: SortOrder
    aplicacaoId?: SortOrder
    pontuacao?: SortOrder
    percentual?: SortOrder
    corrigidoPor?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter
    _avg?: NestedDecimalNullableFilter
    _sum?: NestedDecimalNullableFilter
    _min?: NestedDecimalNullableFilter
    _max?: NestedDecimalNullableFilter
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    escolaId?: SortOrder
    fotoUrl?: SortOrder
    ultimoAcesso?: SortOrder
    ativo?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    escolaId?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    escolaId?: SortOrder
    fotoUrl?: SortOrder
    ultimoAcesso?: SortOrder
    ativo?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    escolaId?: SortOrder
    fotoUrl?: SortOrder
    ultimoAcesso?: SortOrder
    ativo?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
    escolaId?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type HabilidadeBnccCountOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    componente?: SortOrder
    ano?: SortOrder
    descricao?: SortOrder
    dataCriacao?: SortOrder
  }

  export type HabilidadeBnccAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HabilidadeBnccMaxOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    componente?: SortOrder
    ano?: SortOrder
    descricao?: SortOrder
    dataCriacao?: SortOrder
  }

  export type HabilidadeBnccMinOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    componente?: SortOrder
    ano?: SortOrder
    descricao?: SortOrder
    dataCriacao?: SortOrder
  }

  export type HabilidadeBnccSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HabilidadeBnccRelationFilter = {
    is?: HabilidadeBnccWhereInput | null
    isNot?: HabilidadeBnccWhereInput | null
  }

  export type DesempenhoHabilidadeCountOrderByAggregateInput = {
    id?: SortOrder
    habilidadeId?: SortOrder
    escolaId?: SortOrder
    turmaId?: SortOrder
    provaId?: SortOrder
    totalQuestoes?: SortOrder
    totalAcertos?: SortOrder
    percentualAcertos?: SortOrder
    dataAvaliacao?: SortOrder
    anoLetivo?: SortOrder
    dataCriacao?: SortOrder
  }

  export type DesempenhoHabilidadeAvgOrderByAggregateInput = {
    id?: SortOrder
    habilidadeId?: SortOrder
    escolaId?: SortOrder
    turmaId?: SortOrder
    provaId?: SortOrder
    totalQuestoes?: SortOrder
    totalAcertos?: SortOrder
    percentualAcertos?: SortOrder
  }

  export type DesempenhoHabilidadeMaxOrderByAggregateInput = {
    id?: SortOrder
    habilidadeId?: SortOrder
    escolaId?: SortOrder
    turmaId?: SortOrder
    provaId?: SortOrder
    totalQuestoes?: SortOrder
    totalAcertos?: SortOrder
    percentualAcertos?: SortOrder
    dataAvaliacao?: SortOrder
    anoLetivo?: SortOrder
    dataCriacao?: SortOrder
  }

  export type DesempenhoHabilidadeMinOrderByAggregateInput = {
    id?: SortOrder
    habilidadeId?: SortOrder
    escolaId?: SortOrder
    turmaId?: SortOrder
    provaId?: SortOrder
    totalQuestoes?: SortOrder
    totalAcertos?: SortOrder
    percentualAcertos?: SortOrder
    dataAvaliacao?: SortOrder
    anoLetivo?: SortOrder
    dataCriacao?: SortOrder
  }

  export type DesempenhoHabilidadeSumOrderByAggregateInput = {
    id?: SortOrder
    habilidadeId?: SortOrder
    escolaId?: SortOrder
    turmaId?: SortOrder
    provaId?: SortOrder
    totalQuestoes?: SortOrder
    totalAcertos?: SortOrder
    percentualAcertos?: SortOrder
  }

  export type TurmaCreateNestedManyWithoutEscolaInput = {
    create?: XOR<Enumerable<TurmaCreateWithoutEscolaInput>, Enumerable<TurmaUncheckedCreateWithoutEscolaInput>>
    connectOrCreate?: Enumerable<TurmaCreateOrConnectWithoutEscolaInput>
    createMany?: TurmaCreateManyEscolaInputEnvelope
    connect?: Enumerable<TurmaWhereUniqueInput>
  }

  export type AlunoCreateNestedManyWithoutEscolaInput = {
    create?: XOR<Enumerable<AlunoCreateWithoutEscolaInput>, Enumerable<AlunoUncheckedCreateWithoutEscolaInput>>
    connectOrCreate?: Enumerable<AlunoCreateOrConnectWithoutEscolaInput>
    createMany?: AlunoCreateManyEscolaInputEnvelope
    connect?: Enumerable<AlunoWhereUniqueInput>
  }

  export type UsuarioCreateNestedManyWithoutEscolaInput = {
    create?: XOR<Enumerable<UsuarioCreateWithoutEscolaInput>, Enumerable<UsuarioUncheckedCreateWithoutEscolaInput>>
    connectOrCreate?: Enumerable<UsuarioCreateOrConnectWithoutEscolaInput>
    createMany?: UsuarioCreateManyEscolaInputEnvelope
    connect?: Enumerable<UsuarioWhereUniqueInput>
  }

  export type DesempenhoHabilidadeCreateNestedManyWithoutEscolaInput = {
    create?: XOR<Enumerable<DesempenhoHabilidadeCreateWithoutEscolaInput>, Enumerable<DesempenhoHabilidadeUncheckedCreateWithoutEscolaInput>>
    connectOrCreate?: Enumerable<DesempenhoHabilidadeCreateOrConnectWithoutEscolaInput>
    createMany?: DesempenhoHabilidadeCreateManyEscolaInputEnvelope
    connect?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
  }

  export type TurmaUncheckedCreateNestedManyWithoutEscolaInput = {
    create?: XOR<Enumerable<TurmaCreateWithoutEscolaInput>, Enumerable<TurmaUncheckedCreateWithoutEscolaInput>>
    connectOrCreate?: Enumerable<TurmaCreateOrConnectWithoutEscolaInput>
    createMany?: TurmaCreateManyEscolaInputEnvelope
    connect?: Enumerable<TurmaWhereUniqueInput>
  }

  export type AlunoUncheckedCreateNestedManyWithoutEscolaInput = {
    create?: XOR<Enumerable<AlunoCreateWithoutEscolaInput>, Enumerable<AlunoUncheckedCreateWithoutEscolaInput>>
    connectOrCreate?: Enumerable<AlunoCreateOrConnectWithoutEscolaInput>
    createMany?: AlunoCreateManyEscolaInputEnvelope
    connect?: Enumerable<AlunoWhereUniqueInput>
  }

  export type UsuarioUncheckedCreateNestedManyWithoutEscolaInput = {
    create?: XOR<Enumerable<UsuarioCreateWithoutEscolaInput>, Enumerable<UsuarioUncheckedCreateWithoutEscolaInput>>
    connectOrCreate?: Enumerable<UsuarioCreateOrConnectWithoutEscolaInput>
    createMany?: UsuarioCreateManyEscolaInputEnvelope
    connect?: Enumerable<UsuarioWhereUniqueInput>
  }

  export type DesempenhoHabilidadeUncheckedCreateNestedManyWithoutEscolaInput = {
    create?: XOR<Enumerable<DesempenhoHabilidadeCreateWithoutEscolaInput>, Enumerable<DesempenhoHabilidadeUncheckedCreateWithoutEscolaInput>>
    connectOrCreate?: Enumerable<DesempenhoHabilidadeCreateOrConnectWithoutEscolaInput>
    createMany?: DesempenhoHabilidadeCreateManyEscolaInputEnvelope
    connect?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
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

  export type TurmaUpdateManyWithoutEscolaNestedInput = {
    create?: XOR<Enumerable<TurmaCreateWithoutEscolaInput>, Enumerable<TurmaUncheckedCreateWithoutEscolaInput>>
    connectOrCreate?: Enumerable<TurmaCreateOrConnectWithoutEscolaInput>
    upsert?: Enumerable<TurmaUpsertWithWhereUniqueWithoutEscolaInput>
    createMany?: TurmaCreateManyEscolaInputEnvelope
    set?: Enumerable<TurmaWhereUniqueInput>
    disconnect?: Enumerable<TurmaWhereUniqueInput>
    delete?: Enumerable<TurmaWhereUniqueInput>
    connect?: Enumerable<TurmaWhereUniqueInput>
    update?: Enumerable<TurmaUpdateWithWhereUniqueWithoutEscolaInput>
    updateMany?: Enumerable<TurmaUpdateManyWithWhereWithoutEscolaInput>
    deleteMany?: Enumerable<TurmaScalarWhereInput>
  }

  export type AlunoUpdateManyWithoutEscolaNestedInput = {
    create?: XOR<Enumerable<AlunoCreateWithoutEscolaInput>, Enumerable<AlunoUncheckedCreateWithoutEscolaInput>>
    connectOrCreate?: Enumerable<AlunoCreateOrConnectWithoutEscolaInput>
    upsert?: Enumerable<AlunoUpsertWithWhereUniqueWithoutEscolaInput>
    createMany?: AlunoCreateManyEscolaInputEnvelope
    set?: Enumerable<AlunoWhereUniqueInput>
    disconnect?: Enumerable<AlunoWhereUniqueInput>
    delete?: Enumerable<AlunoWhereUniqueInput>
    connect?: Enumerable<AlunoWhereUniqueInput>
    update?: Enumerable<AlunoUpdateWithWhereUniqueWithoutEscolaInput>
    updateMany?: Enumerable<AlunoUpdateManyWithWhereWithoutEscolaInput>
    deleteMany?: Enumerable<AlunoScalarWhereInput>
  }

  export type UsuarioUpdateManyWithoutEscolaNestedInput = {
    create?: XOR<Enumerable<UsuarioCreateWithoutEscolaInput>, Enumerable<UsuarioUncheckedCreateWithoutEscolaInput>>
    connectOrCreate?: Enumerable<UsuarioCreateOrConnectWithoutEscolaInput>
    upsert?: Enumerable<UsuarioUpsertWithWhereUniqueWithoutEscolaInput>
    createMany?: UsuarioCreateManyEscolaInputEnvelope
    set?: Enumerable<UsuarioWhereUniqueInput>
    disconnect?: Enumerable<UsuarioWhereUniqueInput>
    delete?: Enumerable<UsuarioWhereUniqueInput>
    connect?: Enumerable<UsuarioWhereUniqueInput>
    update?: Enumerable<UsuarioUpdateWithWhereUniqueWithoutEscolaInput>
    updateMany?: Enumerable<UsuarioUpdateManyWithWhereWithoutEscolaInput>
    deleteMany?: Enumerable<UsuarioScalarWhereInput>
  }

  export type DesempenhoHabilidadeUpdateManyWithoutEscolaNestedInput = {
    create?: XOR<Enumerable<DesempenhoHabilidadeCreateWithoutEscolaInput>, Enumerable<DesempenhoHabilidadeUncheckedCreateWithoutEscolaInput>>
    connectOrCreate?: Enumerable<DesempenhoHabilidadeCreateOrConnectWithoutEscolaInput>
    upsert?: Enumerable<DesempenhoHabilidadeUpsertWithWhereUniqueWithoutEscolaInput>
    createMany?: DesempenhoHabilidadeCreateManyEscolaInputEnvelope
    set?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
    disconnect?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
    delete?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
    connect?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
    update?: Enumerable<DesempenhoHabilidadeUpdateWithWhereUniqueWithoutEscolaInput>
    updateMany?: Enumerable<DesempenhoHabilidadeUpdateManyWithWhereWithoutEscolaInput>
    deleteMany?: Enumerable<DesempenhoHabilidadeScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TurmaUncheckedUpdateManyWithoutEscolaNestedInput = {
    create?: XOR<Enumerable<TurmaCreateWithoutEscolaInput>, Enumerable<TurmaUncheckedCreateWithoutEscolaInput>>
    connectOrCreate?: Enumerable<TurmaCreateOrConnectWithoutEscolaInput>
    upsert?: Enumerable<TurmaUpsertWithWhereUniqueWithoutEscolaInput>
    createMany?: TurmaCreateManyEscolaInputEnvelope
    set?: Enumerable<TurmaWhereUniqueInput>
    disconnect?: Enumerable<TurmaWhereUniqueInput>
    delete?: Enumerable<TurmaWhereUniqueInput>
    connect?: Enumerable<TurmaWhereUniqueInput>
    update?: Enumerable<TurmaUpdateWithWhereUniqueWithoutEscolaInput>
    updateMany?: Enumerable<TurmaUpdateManyWithWhereWithoutEscolaInput>
    deleteMany?: Enumerable<TurmaScalarWhereInput>
  }

  export type AlunoUncheckedUpdateManyWithoutEscolaNestedInput = {
    create?: XOR<Enumerable<AlunoCreateWithoutEscolaInput>, Enumerable<AlunoUncheckedCreateWithoutEscolaInput>>
    connectOrCreate?: Enumerable<AlunoCreateOrConnectWithoutEscolaInput>
    upsert?: Enumerable<AlunoUpsertWithWhereUniqueWithoutEscolaInput>
    createMany?: AlunoCreateManyEscolaInputEnvelope
    set?: Enumerable<AlunoWhereUniqueInput>
    disconnect?: Enumerable<AlunoWhereUniqueInput>
    delete?: Enumerable<AlunoWhereUniqueInput>
    connect?: Enumerable<AlunoWhereUniqueInput>
    update?: Enumerable<AlunoUpdateWithWhereUniqueWithoutEscolaInput>
    updateMany?: Enumerable<AlunoUpdateManyWithWhereWithoutEscolaInput>
    deleteMany?: Enumerable<AlunoScalarWhereInput>
  }

  export type UsuarioUncheckedUpdateManyWithoutEscolaNestedInput = {
    create?: XOR<Enumerable<UsuarioCreateWithoutEscolaInput>, Enumerable<UsuarioUncheckedCreateWithoutEscolaInput>>
    connectOrCreate?: Enumerable<UsuarioCreateOrConnectWithoutEscolaInput>
    upsert?: Enumerable<UsuarioUpsertWithWhereUniqueWithoutEscolaInput>
    createMany?: UsuarioCreateManyEscolaInputEnvelope
    set?: Enumerable<UsuarioWhereUniqueInput>
    disconnect?: Enumerable<UsuarioWhereUniqueInput>
    delete?: Enumerable<UsuarioWhereUniqueInput>
    connect?: Enumerable<UsuarioWhereUniqueInput>
    update?: Enumerable<UsuarioUpdateWithWhereUniqueWithoutEscolaInput>
    updateMany?: Enumerable<UsuarioUpdateManyWithWhereWithoutEscolaInput>
    deleteMany?: Enumerable<UsuarioScalarWhereInput>
  }

  export type DesempenhoHabilidadeUncheckedUpdateManyWithoutEscolaNestedInput = {
    create?: XOR<Enumerable<DesempenhoHabilidadeCreateWithoutEscolaInput>, Enumerable<DesempenhoHabilidadeUncheckedCreateWithoutEscolaInput>>
    connectOrCreate?: Enumerable<DesempenhoHabilidadeCreateOrConnectWithoutEscolaInput>
    upsert?: Enumerable<DesempenhoHabilidadeUpsertWithWhereUniqueWithoutEscolaInput>
    createMany?: DesempenhoHabilidadeCreateManyEscolaInputEnvelope
    set?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
    disconnect?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
    delete?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
    connect?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
    update?: Enumerable<DesempenhoHabilidadeUpdateWithWhereUniqueWithoutEscolaInput>
    updateMany?: Enumerable<DesempenhoHabilidadeUpdateManyWithWhereWithoutEscolaInput>
    deleteMany?: Enumerable<DesempenhoHabilidadeScalarWhereInput>
  }

  export type EscolaCreateNestedOneWithoutTurmasInput = {
    create?: XOR<EscolaCreateWithoutTurmasInput, EscolaUncheckedCreateWithoutTurmasInput>
    connectOrCreate?: EscolaCreateOrConnectWithoutTurmasInput
    connect?: EscolaWhereUniqueInput
  }

  export type AlunoCreateNestedManyWithoutTurmaInput = {
    create?: XOR<Enumerable<AlunoCreateWithoutTurmaInput>, Enumerable<AlunoUncheckedCreateWithoutTurmaInput>>
    connectOrCreate?: Enumerable<AlunoCreateOrConnectWithoutTurmaInput>
    createMany?: AlunoCreateManyTurmaInputEnvelope
    connect?: Enumerable<AlunoWhereUniqueInput>
  }

  export type AplicacaoProvaCreateNestedManyWithoutTurmaInput = {
    create?: XOR<Enumerable<AplicacaoProvaCreateWithoutTurmaInput>, Enumerable<AplicacaoProvaUncheckedCreateWithoutTurmaInput>>
    connectOrCreate?: Enumerable<AplicacaoProvaCreateOrConnectWithoutTurmaInput>
    createMany?: AplicacaoProvaCreateManyTurmaInputEnvelope
    connect?: Enumerable<AplicacaoProvaWhereUniqueInput>
  }

  export type DesempenhoHabilidadeCreateNestedManyWithoutTurmaInput = {
    create?: XOR<Enumerable<DesempenhoHabilidadeCreateWithoutTurmaInput>, Enumerable<DesempenhoHabilidadeUncheckedCreateWithoutTurmaInput>>
    connectOrCreate?: Enumerable<DesempenhoHabilidadeCreateOrConnectWithoutTurmaInput>
    createMany?: DesempenhoHabilidadeCreateManyTurmaInputEnvelope
    connect?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
  }

  export type AlunoUncheckedCreateNestedManyWithoutTurmaInput = {
    create?: XOR<Enumerable<AlunoCreateWithoutTurmaInput>, Enumerable<AlunoUncheckedCreateWithoutTurmaInput>>
    connectOrCreate?: Enumerable<AlunoCreateOrConnectWithoutTurmaInput>
    createMany?: AlunoCreateManyTurmaInputEnvelope
    connect?: Enumerable<AlunoWhereUniqueInput>
  }

  export type AplicacaoProvaUncheckedCreateNestedManyWithoutTurmaInput = {
    create?: XOR<Enumerable<AplicacaoProvaCreateWithoutTurmaInput>, Enumerable<AplicacaoProvaUncheckedCreateWithoutTurmaInput>>
    connectOrCreate?: Enumerable<AplicacaoProvaCreateOrConnectWithoutTurmaInput>
    createMany?: AplicacaoProvaCreateManyTurmaInputEnvelope
    connect?: Enumerable<AplicacaoProvaWhereUniqueInput>
  }

  export type DesempenhoHabilidadeUncheckedCreateNestedManyWithoutTurmaInput = {
    create?: XOR<Enumerable<DesempenhoHabilidadeCreateWithoutTurmaInput>, Enumerable<DesempenhoHabilidadeUncheckedCreateWithoutTurmaInput>>
    connectOrCreate?: Enumerable<DesempenhoHabilidadeCreateOrConnectWithoutTurmaInput>
    createMany?: DesempenhoHabilidadeCreateManyTurmaInputEnvelope
    connect?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
  }

  export type EscolaUpdateOneRequiredWithoutTurmasNestedInput = {
    create?: XOR<EscolaCreateWithoutTurmasInput, EscolaUncheckedCreateWithoutTurmasInput>
    connectOrCreate?: EscolaCreateOrConnectWithoutTurmasInput
    upsert?: EscolaUpsertWithoutTurmasInput
    connect?: EscolaWhereUniqueInput
    update?: XOR<EscolaUpdateWithoutTurmasInput, EscolaUncheckedUpdateWithoutTurmasInput>
  }

  export type AlunoUpdateManyWithoutTurmaNestedInput = {
    create?: XOR<Enumerable<AlunoCreateWithoutTurmaInput>, Enumerable<AlunoUncheckedCreateWithoutTurmaInput>>
    connectOrCreate?: Enumerable<AlunoCreateOrConnectWithoutTurmaInput>
    upsert?: Enumerable<AlunoUpsertWithWhereUniqueWithoutTurmaInput>
    createMany?: AlunoCreateManyTurmaInputEnvelope
    set?: Enumerable<AlunoWhereUniqueInput>
    disconnect?: Enumerable<AlunoWhereUniqueInput>
    delete?: Enumerable<AlunoWhereUniqueInput>
    connect?: Enumerable<AlunoWhereUniqueInput>
    update?: Enumerable<AlunoUpdateWithWhereUniqueWithoutTurmaInput>
    updateMany?: Enumerable<AlunoUpdateManyWithWhereWithoutTurmaInput>
    deleteMany?: Enumerable<AlunoScalarWhereInput>
  }

  export type AplicacaoProvaUpdateManyWithoutTurmaNestedInput = {
    create?: XOR<Enumerable<AplicacaoProvaCreateWithoutTurmaInput>, Enumerable<AplicacaoProvaUncheckedCreateWithoutTurmaInput>>
    connectOrCreate?: Enumerable<AplicacaoProvaCreateOrConnectWithoutTurmaInput>
    upsert?: Enumerable<AplicacaoProvaUpsertWithWhereUniqueWithoutTurmaInput>
    createMany?: AplicacaoProvaCreateManyTurmaInputEnvelope
    set?: Enumerable<AplicacaoProvaWhereUniqueInput>
    disconnect?: Enumerable<AplicacaoProvaWhereUniqueInput>
    delete?: Enumerable<AplicacaoProvaWhereUniqueInput>
    connect?: Enumerable<AplicacaoProvaWhereUniqueInput>
    update?: Enumerable<AplicacaoProvaUpdateWithWhereUniqueWithoutTurmaInput>
    updateMany?: Enumerable<AplicacaoProvaUpdateManyWithWhereWithoutTurmaInput>
    deleteMany?: Enumerable<AplicacaoProvaScalarWhereInput>
  }

  export type DesempenhoHabilidadeUpdateManyWithoutTurmaNestedInput = {
    create?: XOR<Enumerable<DesempenhoHabilidadeCreateWithoutTurmaInput>, Enumerable<DesempenhoHabilidadeUncheckedCreateWithoutTurmaInput>>
    connectOrCreate?: Enumerable<DesempenhoHabilidadeCreateOrConnectWithoutTurmaInput>
    upsert?: Enumerable<DesempenhoHabilidadeUpsertWithWhereUniqueWithoutTurmaInput>
    createMany?: DesempenhoHabilidadeCreateManyTurmaInputEnvelope
    set?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
    disconnect?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
    delete?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
    connect?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
    update?: Enumerable<DesempenhoHabilidadeUpdateWithWhereUniqueWithoutTurmaInput>
    updateMany?: Enumerable<DesempenhoHabilidadeUpdateManyWithWhereWithoutTurmaInput>
    deleteMany?: Enumerable<DesempenhoHabilidadeScalarWhereInput>
  }

  export type AlunoUncheckedUpdateManyWithoutTurmaNestedInput = {
    create?: XOR<Enumerable<AlunoCreateWithoutTurmaInput>, Enumerable<AlunoUncheckedCreateWithoutTurmaInput>>
    connectOrCreate?: Enumerable<AlunoCreateOrConnectWithoutTurmaInput>
    upsert?: Enumerable<AlunoUpsertWithWhereUniqueWithoutTurmaInput>
    createMany?: AlunoCreateManyTurmaInputEnvelope
    set?: Enumerable<AlunoWhereUniqueInput>
    disconnect?: Enumerable<AlunoWhereUniqueInput>
    delete?: Enumerable<AlunoWhereUniqueInput>
    connect?: Enumerable<AlunoWhereUniqueInput>
    update?: Enumerable<AlunoUpdateWithWhereUniqueWithoutTurmaInput>
    updateMany?: Enumerable<AlunoUpdateManyWithWhereWithoutTurmaInput>
    deleteMany?: Enumerable<AlunoScalarWhereInput>
  }

  export type AplicacaoProvaUncheckedUpdateManyWithoutTurmaNestedInput = {
    create?: XOR<Enumerable<AplicacaoProvaCreateWithoutTurmaInput>, Enumerable<AplicacaoProvaUncheckedCreateWithoutTurmaInput>>
    connectOrCreate?: Enumerable<AplicacaoProvaCreateOrConnectWithoutTurmaInput>
    upsert?: Enumerable<AplicacaoProvaUpsertWithWhereUniqueWithoutTurmaInput>
    createMany?: AplicacaoProvaCreateManyTurmaInputEnvelope
    set?: Enumerable<AplicacaoProvaWhereUniqueInput>
    disconnect?: Enumerable<AplicacaoProvaWhereUniqueInput>
    delete?: Enumerable<AplicacaoProvaWhereUniqueInput>
    connect?: Enumerable<AplicacaoProvaWhereUniqueInput>
    update?: Enumerable<AplicacaoProvaUpdateWithWhereUniqueWithoutTurmaInput>
    updateMany?: Enumerable<AplicacaoProvaUpdateManyWithWhereWithoutTurmaInput>
    deleteMany?: Enumerable<AplicacaoProvaScalarWhereInput>
  }

  export type DesempenhoHabilidadeUncheckedUpdateManyWithoutTurmaNestedInput = {
    create?: XOR<Enumerable<DesempenhoHabilidadeCreateWithoutTurmaInput>, Enumerable<DesempenhoHabilidadeUncheckedCreateWithoutTurmaInput>>
    connectOrCreate?: Enumerable<DesempenhoHabilidadeCreateOrConnectWithoutTurmaInput>
    upsert?: Enumerable<DesempenhoHabilidadeUpsertWithWhereUniqueWithoutTurmaInput>
    createMany?: DesempenhoHabilidadeCreateManyTurmaInputEnvelope
    set?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
    disconnect?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
    delete?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
    connect?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
    update?: Enumerable<DesempenhoHabilidadeUpdateWithWhereUniqueWithoutTurmaInput>
    updateMany?: Enumerable<DesempenhoHabilidadeUpdateManyWithWhereWithoutTurmaInput>
    deleteMany?: Enumerable<DesempenhoHabilidadeScalarWhereInput>
  }

  export type TurmaCreateNestedOneWithoutAlunosInput = {
    create?: XOR<TurmaCreateWithoutAlunosInput, TurmaUncheckedCreateWithoutAlunosInput>
    connectOrCreate?: TurmaCreateOrConnectWithoutAlunosInput
    connect?: TurmaWhereUniqueInput
  }

  export type EscolaCreateNestedOneWithoutAlunosInput = {
    create?: XOR<EscolaCreateWithoutAlunosInput, EscolaUncheckedCreateWithoutAlunosInput>
    connectOrCreate?: EscolaCreateOrConnectWithoutAlunosInput
    connect?: EscolaWhereUniqueInput
  }

  export type ResultadoCreateNestedManyWithoutAlunoInput = {
    create?: XOR<Enumerable<ResultadoCreateWithoutAlunoInput>, Enumerable<ResultadoUncheckedCreateWithoutAlunoInput>>
    connectOrCreate?: Enumerable<ResultadoCreateOrConnectWithoutAlunoInput>
    createMany?: ResultadoCreateManyAlunoInputEnvelope
    connect?: Enumerable<ResultadoWhereUniqueInput>
  }

  export type ResultadoUncheckedCreateNestedManyWithoutAlunoInput = {
    create?: XOR<Enumerable<ResultadoCreateWithoutAlunoInput>, Enumerable<ResultadoUncheckedCreateWithoutAlunoInput>>
    connectOrCreate?: Enumerable<ResultadoCreateOrConnectWithoutAlunoInput>
    createMany?: ResultadoCreateManyAlunoInputEnvelope
    connect?: Enumerable<ResultadoWhereUniqueInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TurmaUpdateOneWithoutAlunosNestedInput = {
    create?: XOR<TurmaCreateWithoutAlunosInput, TurmaUncheckedCreateWithoutAlunosInput>
    connectOrCreate?: TurmaCreateOrConnectWithoutAlunosInput
    upsert?: TurmaUpsertWithoutAlunosInput
    disconnect?: boolean
    delete?: boolean
    connect?: TurmaWhereUniqueInput
    update?: XOR<TurmaUpdateWithoutAlunosInput, TurmaUncheckedUpdateWithoutAlunosInput>
  }

  export type EscolaUpdateOneRequiredWithoutAlunosNestedInput = {
    create?: XOR<EscolaCreateWithoutAlunosInput, EscolaUncheckedCreateWithoutAlunosInput>
    connectOrCreate?: EscolaCreateOrConnectWithoutAlunosInput
    upsert?: EscolaUpsertWithoutAlunosInput
    connect?: EscolaWhereUniqueInput
    update?: XOR<EscolaUpdateWithoutAlunosInput, EscolaUncheckedUpdateWithoutAlunosInput>
  }

  export type ResultadoUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<Enumerable<ResultadoCreateWithoutAlunoInput>, Enumerable<ResultadoUncheckedCreateWithoutAlunoInput>>
    connectOrCreate?: Enumerable<ResultadoCreateOrConnectWithoutAlunoInput>
    upsert?: Enumerable<ResultadoUpsertWithWhereUniqueWithoutAlunoInput>
    createMany?: ResultadoCreateManyAlunoInputEnvelope
    set?: Enumerable<ResultadoWhereUniqueInput>
    disconnect?: Enumerable<ResultadoWhereUniqueInput>
    delete?: Enumerable<ResultadoWhereUniqueInput>
    connect?: Enumerable<ResultadoWhereUniqueInput>
    update?: Enumerable<ResultadoUpdateWithWhereUniqueWithoutAlunoInput>
    updateMany?: Enumerable<ResultadoUpdateManyWithWhereWithoutAlunoInput>
    deleteMany?: Enumerable<ResultadoScalarWhereInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ResultadoUncheckedUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<Enumerable<ResultadoCreateWithoutAlunoInput>, Enumerable<ResultadoUncheckedCreateWithoutAlunoInput>>
    connectOrCreate?: Enumerable<ResultadoCreateOrConnectWithoutAlunoInput>
    upsert?: Enumerable<ResultadoUpsertWithWhereUniqueWithoutAlunoInput>
    createMany?: ResultadoCreateManyAlunoInputEnvelope
    set?: Enumerable<ResultadoWhereUniqueInput>
    disconnect?: Enumerable<ResultadoWhereUniqueInput>
    delete?: Enumerable<ResultadoWhereUniqueInput>
    connect?: Enumerable<ResultadoWhereUniqueInput>
    update?: Enumerable<ResultadoUpdateWithWhereUniqueWithoutAlunoInput>
    updateMany?: Enumerable<ResultadoUpdateManyWithWhereWithoutAlunoInput>
    deleteMany?: Enumerable<ResultadoScalarWhereInput>
  }

  export type QuestaoCreateNestedManyWithoutProvaInput = {
    create?: XOR<Enumerable<QuestaoCreateWithoutProvaInput>, Enumerable<QuestaoUncheckedCreateWithoutProvaInput>>
    connectOrCreate?: Enumerable<QuestaoCreateOrConnectWithoutProvaInput>
    createMany?: QuestaoCreateManyProvaInputEnvelope
    connect?: Enumerable<QuestaoWhereUniqueInput>
  }

  export type AplicacaoProvaCreateNestedManyWithoutProvaInput = {
    create?: XOR<Enumerable<AplicacaoProvaCreateWithoutProvaInput>, Enumerable<AplicacaoProvaUncheckedCreateWithoutProvaInput>>
    connectOrCreate?: Enumerable<AplicacaoProvaCreateOrConnectWithoutProvaInput>
    createMany?: AplicacaoProvaCreateManyProvaInputEnvelope
    connect?: Enumerable<AplicacaoProvaWhereUniqueInput>
  }

  export type ResultadoCreateNestedManyWithoutProvaInput = {
    create?: XOR<Enumerable<ResultadoCreateWithoutProvaInput>, Enumerable<ResultadoUncheckedCreateWithoutProvaInput>>
    connectOrCreate?: Enumerable<ResultadoCreateOrConnectWithoutProvaInput>
    createMany?: ResultadoCreateManyProvaInputEnvelope
    connect?: Enumerable<ResultadoWhereUniqueInput>
  }

  export type DesempenhoHabilidadeCreateNestedManyWithoutProvaInput = {
    create?: XOR<Enumerable<DesempenhoHabilidadeCreateWithoutProvaInput>, Enumerable<DesempenhoHabilidadeUncheckedCreateWithoutProvaInput>>
    connectOrCreate?: Enumerable<DesempenhoHabilidadeCreateOrConnectWithoutProvaInput>
    createMany?: DesempenhoHabilidadeCreateManyProvaInputEnvelope
    connect?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
  }

  export type QuestaoUncheckedCreateNestedManyWithoutProvaInput = {
    create?: XOR<Enumerable<QuestaoCreateWithoutProvaInput>, Enumerable<QuestaoUncheckedCreateWithoutProvaInput>>
    connectOrCreate?: Enumerable<QuestaoCreateOrConnectWithoutProvaInput>
    createMany?: QuestaoCreateManyProvaInputEnvelope
    connect?: Enumerable<QuestaoWhereUniqueInput>
  }

  export type AplicacaoProvaUncheckedCreateNestedManyWithoutProvaInput = {
    create?: XOR<Enumerable<AplicacaoProvaCreateWithoutProvaInput>, Enumerable<AplicacaoProvaUncheckedCreateWithoutProvaInput>>
    connectOrCreate?: Enumerable<AplicacaoProvaCreateOrConnectWithoutProvaInput>
    createMany?: AplicacaoProvaCreateManyProvaInputEnvelope
    connect?: Enumerable<AplicacaoProvaWhereUniqueInput>
  }

  export type ResultadoUncheckedCreateNestedManyWithoutProvaInput = {
    create?: XOR<Enumerable<ResultadoCreateWithoutProvaInput>, Enumerable<ResultadoUncheckedCreateWithoutProvaInput>>
    connectOrCreate?: Enumerable<ResultadoCreateOrConnectWithoutProvaInput>
    createMany?: ResultadoCreateManyProvaInputEnvelope
    connect?: Enumerable<ResultadoWhereUniqueInput>
  }

  export type DesempenhoHabilidadeUncheckedCreateNestedManyWithoutProvaInput = {
    create?: XOR<Enumerable<DesempenhoHabilidadeCreateWithoutProvaInput>, Enumerable<DesempenhoHabilidadeUncheckedCreateWithoutProvaInput>>
    connectOrCreate?: Enumerable<DesempenhoHabilidadeCreateOrConnectWithoutProvaInput>
    createMany?: DesempenhoHabilidadeCreateManyProvaInputEnvelope
    connect?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
  }

  export type QuestaoUpdateManyWithoutProvaNestedInput = {
    create?: XOR<Enumerable<QuestaoCreateWithoutProvaInput>, Enumerable<QuestaoUncheckedCreateWithoutProvaInput>>
    connectOrCreate?: Enumerable<QuestaoCreateOrConnectWithoutProvaInput>
    upsert?: Enumerable<QuestaoUpsertWithWhereUniqueWithoutProvaInput>
    createMany?: QuestaoCreateManyProvaInputEnvelope
    set?: Enumerable<QuestaoWhereUniqueInput>
    disconnect?: Enumerable<QuestaoWhereUniqueInput>
    delete?: Enumerable<QuestaoWhereUniqueInput>
    connect?: Enumerable<QuestaoWhereUniqueInput>
    update?: Enumerable<QuestaoUpdateWithWhereUniqueWithoutProvaInput>
    updateMany?: Enumerable<QuestaoUpdateManyWithWhereWithoutProvaInput>
    deleteMany?: Enumerable<QuestaoScalarWhereInput>
  }

  export type AplicacaoProvaUpdateManyWithoutProvaNestedInput = {
    create?: XOR<Enumerable<AplicacaoProvaCreateWithoutProvaInput>, Enumerable<AplicacaoProvaUncheckedCreateWithoutProvaInput>>
    connectOrCreate?: Enumerable<AplicacaoProvaCreateOrConnectWithoutProvaInput>
    upsert?: Enumerable<AplicacaoProvaUpsertWithWhereUniqueWithoutProvaInput>
    createMany?: AplicacaoProvaCreateManyProvaInputEnvelope
    set?: Enumerable<AplicacaoProvaWhereUniqueInput>
    disconnect?: Enumerable<AplicacaoProvaWhereUniqueInput>
    delete?: Enumerable<AplicacaoProvaWhereUniqueInput>
    connect?: Enumerable<AplicacaoProvaWhereUniqueInput>
    update?: Enumerable<AplicacaoProvaUpdateWithWhereUniqueWithoutProvaInput>
    updateMany?: Enumerable<AplicacaoProvaUpdateManyWithWhereWithoutProvaInput>
    deleteMany?: Enumerable<AplicacaoProvaScalarWhereInput>
  }

  export type ResultadoUpdateManyWithoutProvaNestedInput = {
    create?: XOR<Enumerable<ResultadoCreateWithoutProvaInput>, Enumerable<ResultadoUncheckedCreateWithoutProvaInput>>
    connectOrCreate?: Enumerable<ResultadoCreateOrConnectWithoutProvaInput>
    upsert?: Enumerable<ResultadoUpsertWithWhereUniqueWithoutProvaInput>
    createMany?: ResultadoCreateManyProvaInputEnvelope
    set?: Enumerable<ResultadoWhereUniqueInput>
    disconnect?: Enumerable<ResultadoWhereUniqueInput>
    delete?: Enumerable<ResultadoWhereUniqueInput>
    connect?: Enumerable<ResultadoWhereUniqueInput>
    update?: Enumerable<ResultadoUpdateWithWhereUniqueWithoutProvaInput>
    updateMany?: Enumerable<ResultadoUpdateManyWithWhereWithoutProvaInput>
    deleteMany?: Enumerable<ResultadoScalarWhereInput>
  }

  export type DesempenhoHabilidadeUpdateManyWithoutProvaNestedInput = {
    create?: XOR<Enumerable<DesempenhoHabilidadeCreateWithoutProvaInput>, Enumerable<DesempenhoHabilidadeUncheckedCreateWithoutProvaInput>>
    connectOrCreate?: Enumerable<DesempenhoHabilidadeCreateOrConnectWithoutProvaInput>
    upsert?: Enumerable<DesempenhoHabilidadeUpsertWithWhereUniqueWithoutProvaInput>
    createMany?: DesempenhoHabilidadeCreateManyProvaInputEnvelope
    set?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
    disconnect?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
    delete?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
    connect?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
    update?: Enumerable<DesempenhoHabilidadeUpdateWithWhereUniqueWithoutProvaInput>
    updateMany?: Enumerable<DesempenhoHabilidadeUpdateManyWithWhereWithoutProvaInput>
    deleteMany?: Enumerable<DesempenhoHabilidadeScalarWhereInput>
  }

  export type QuestaoUncheckedUpdateManyWithoutProvaNestedInput = {
    create?: XOR<Enumerable<QuestaoCreateWithoutProvaInput>, Enumerable<QuestaoUncheckedCreateWithoutProvaInput>>
    connectOrCreate?: Enumerable<QuestaoCreateOrConnectWithoutProvaInput>
    upsert?: Enumerable<QuestaoUpsertWithWhereUniqueWithoutProvaInput>
    createMany?: QuestaoCreateManyProvaInputEnvelope
    set?: Enumerable<QuestaoWhereUniqueInput>
    disconnect?: Enumerable<QuestaoWhereUniqueInput>
    delete?: Enumerable<QuestaoWhereUniqueInput>
    connect?: Enumerable<QuestaoWhereUniqueInput>
    update?: Enumerable<QuestaoUpdateWithWhereUniqueWithoutProvaInput>
    updateMany?: Enumerable<QuestaoUpdateManyWithWhereWithoutProvaInput>
    deleteMany?: Enumerable<QuestaoScalarWhereInput>
  }

  export type AplicacaoProvaUncheckedUpdateManyWithoutProvaNestedInput = {
    create?: XOR<Enumerable<AplicacaoProvaCreateWithoutProvaInput>, Enumerable<AplicacaoProvaUncheckedCreateWithoutProvaInput>>
    connectOrCreate?: Enumerable<AplicacaoProvaCreateOrConnectWithoutProvaInput>
    upsert?: Enumerable<AplicacaoProvaUpsertWithWhereUniqueWithoutProvaInput>
    createMany?: AplicacaoProvaCreateManyProvaInputEnvelope
    set?: Enumerable<AplicacaoProvaWhereUniqueInput>
    disconnect?: Enumerable<AplicacaoProvaWhereUniqueInput>
    delete?: Enumerable<AplicacaoProvaWhereUniqueInput>
    connect?: Enumerable<AplicacaoProvaWhereUniqueInput>
    update?: Enumerable<AplicacaoProvaUpdateWithWhereUniqueWithoutProvaInput>
    updateMany?: Enumerable<AplicacaoProvaUpdateManyWithWhereWithoutProvaInput>
    deleteMany?: Enumerable<AplicacaoProvaScalarWhereInput>
  }

  export type ResultadoUncheckedUpdateManyWithoutProvaNestedInput = {
    create?: XOR<Enumerable<ResultadoCreateWithoutProvaInput>, Enumerable<ResultadoUncheckedCreateWithoutProvaInput>>
    connectOrCreate?: Enumerable<ResultadoCreateOrConnectWithoutProvaInput>
    upsert?: Enumerable<ResultadoUpsertWithWhereUniqueWithoutProvaInput>
    createMany?: ResultadoCreateManyProvaInputEnvelope
    set?: Enumerable<ResultadoWhereUniqueInput>
    disconnect?: Enumerable<ResultadoWhereUniqueInput>
    delete?: Enumerable<ResultadoWhereUniqueInput>
    connect?: Enumerable<ResultadoWhereUniqueInput>
    update?: Enumerable<ResultadoUpdateWithWhereUniqueWithoutProvaInput>
    updateMany?: Enumerable<ResultadoUpdateManyWithWhereWithoutProvaInput>
    deleteMany?: Enumerable<ResultadoScalarWhereInput>
  }

  export type DesempenhoHabilidadeUncheckedUpdateManyWithoutProvaNestedInput = {
    create?: XOR<Enumerable<DesempenhoHabilidadeCreateWithoutProvaInput>, Enumerable<DesempenhoHabilidadeUncheckedCreateWithoutProvaInput>>
    connectOrCreate?: Enumerable<DesempenhoHabilidadeCreateOrConnectWithoutProvaInput>
    upsert?: Enumerable<DesempenhoHabilidadeUpsertWithWhereUniqueWithoutProvaInput>
    createMany?: DesempenhoHabilidadeCreateManyProvaInputEnvelope
    set?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
    disconnect?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
    delete?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
    connect?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
    update?: Enumerable<DesempenhoHabilidadeUpdateWithWhereUniqueWithoutProvaInput>
    updateMany?: Enumerable<DesempenhoHabilidadeUpdateManyWithWhereWithoutProvaInput>
    deleteMany?: Enumerable<DesempenhoHabilidadeScalarWhereInput>
  }

  export type ProvaCreateNestedOneWithoutQuestoesInput = {
    create?: XOR<ProvaCreateWithoutQuestoesInput, ProvaUncheckedCreateWithoutQuestoesInput>
    connectOrCreate?: ProvaCreateOrConnectWithoutQuestoesInput
    connect?: ProvaWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ProvaUpdateOneRequiredWithoutQuestoesNestedInput = {
    create?: XOR<ProvaCreateWithoutQuestoesInput, ProvaUncheckedCreateWithoutQuestoesInput>
    connectOrCreate?: ProvaCreateOrConnectWithoutQuestoesInput
    upsert?: ProvaUpsertWithoutQuestoesInput
    connect?: ProvaWhereUniqueInput
    update?: XOR<ProvaUpdateWithoutQuestoesInput, ProvaUncheckedUpdateWithoutQuestoesInput>
  }

  export type ProvaCreateNestedOneWithoutAplicacoesProvaInput = {
    create?: XOR<ProvaCreateWithoutAplicacoesProvaInput, ProvaUncheckedCreateWithoutAplicacoesProvaInput>
    connectOrCreate?: ProvaCreateOrConnectWithoutAplicacoesProvaInput
    connect?: ProvaWhereUniqueInput
  }

  export type TurmaCreateNestedOneWithoutAplicacoesProvaInput = {
    create?: XOR<TurmaCreateWithoutAplicacoesProvaInput, TurmaUncheckedCreateWithoutAplicacoesProvaInput>
    connectOrCreate?: TurmaCreateOrConnectWithoutAplicacoesProvaInput
    connect?: TurmaWhereUniqueInput
  }

  export type ResultadoCreateNestedManyWithoutAplicacaoInput = {
    create?: XOR<Enumerable<ResultadoCreateWithoutAplicacaoInput>, Enumerable<ResultadoUncheckedCreateWithoutAplicacaoInput>>
    connectOrCreate?: Enumerable<ResultadoCreateOrConnectWithoutAplicacaoInput>
    createMany?: ResultadoCreateManyAplicacaoInputEnvelope
    connect?: Enumerable<ResultadoWhereUniqueInput>
  }

  export type ResultadoUncheckedCreateNestedManyWithoutAplicacaoInput = {
    create?: XOR<Enumerable<ResultadoCreateWithoutAplicacaoInput>, Enumerable<ResultadoUncheckedCreateWithoutAplicacaoInput>>
    connectOrCreate?: Enumerable<ResultadoCreateOrConnectWithoutAplicacaoInput>
    createMany?: ResultadoCreateManyAplicacaoInputEnvelope
    connect?: Enumerable<ResultadoWhereUniqueInput>
  }

  export type ProvaUpdateOneRequiredWithoutAplicacoesProvaNestedInput = {
    create?: XOR<ProvaCreateWithoutAplicacoesProvaInput, ProvaUncheckedCreateWithoutAplicacoesProvaInput>
    connectOrCreate?: ProvaCreateOrConnectWithoutAplicacoesProvaInput
    upsert?: ProvaUpsertWithoutAplicacoesProvaInput
    connect?: ProvaWhereUniqueInput
    update?: XOR<ProvaUpdateWithoutAplicacoesProvaInput, ProvaUncheckedUpdateWithoutAplicacoesProvaInput>
  }

  export type TurmaUpdateOneRequiredWithoutAplicacoesProvaNestedInput = {
    create?: XOR<TurmaCreateWithoutAplicacoesProvaInput, TurmaUncheckedCreateWithoutAplicacoesProvaInput>
    connectOrCreate?: TurmaCreateOrConnectWithoutAplicacoesProvaInput
    upsert?: TurmaUpsertWithoutAplicacoesProvaInput
    connect?: TurmaWhereUniqueInput
    update?: XOR<TurmaUpdateWithoutAplicacoesProvaInput, TurmaUncheckedUpdateWithoutAplicacoesProvaInput>
  }

  export type ResultadoUpdateManyWithoutAplicacaoNestedInput = {
    create?: XOR<Enumerable<ResultadoCreateWithoutAplicacaoInput>, Enumerable<ResultadoUncheckedCreateWithoutAplicacaoInput>>
    connectOrCreate?: Enumerable<ResultadoCreateOrConnectWithoutAplicacaoInput>
    upsert?: Enumerable<ResultadoUpsertWithWhereUniqueWithoutAplicacaoInput>
    createMany?: ResultadoCreateManyAplicacaoInputEnvelope
    set?: Enumerable<ResultadoWhereUniqueInput>
    disconnect?: Enumerable<ResultadoWhereUniqueInput>
    delete?: Enumerable<ResultadoWhereUniqueInput>
    connect?: Enumerable<ResultadoWhereUniqueInput>
    update?: Enumerable<ResultadoUpdateWithWhereUniqueWithoutAplicacaoInput>
    updateMany?: Enumerable<ResultadoUpdateManyWithWhereWithoutAplicacaoInput>
    deleteMany?: Enumerable<ResultadoScalarWhereInput>
  }

  export type ResultadoUncheckedUpdateManyWithoutAplicacaoNestedInput = {
    create?: XOR<Enumerable<ResultadoCreateWithoutAplicacaoInput>, Enumerable<ResultadoUncheckedCreateWithoutAplicacaoInput>>
    connectOrCreate?: Enumerable<ResultadoCreateOrConnectWithoutAplicacaoInput>
    upsert?: Enumerable<ResultadoUpsertWithWhereUniqueWithoutAplicacaoInput>
    createMany?: ResultadoCreateManyAplicacaoInputEnvelope
    set?: Enumerable<ResultadoWhereUniqueInput>
    disconnect?: Enumerable<ResultadoWhereUniqueInput>
    delete?: Enumerable<ResultadoWhereUniqueInput>
    connect?: Enumerable<ResultadoWhereUniqueInput>
    update?: Enumerable<ResultadoUpdateWithWhereUniqueWithoutAplicacaoInput>
    updateMany?: Enumerable<ResultadoUpdateManyWithWhereWithoutAplicacaoInput>
    deleteMany?: Enumerable<ResultadoScalarWhereInput>
  }

  export type AlunoCreateNestedOneWithoutResultadosInput = {
    create?: XOR<AlunoCreateWithoutResultadosInput, AlunoUncheckedCreateWithoutResultadosInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutResultadosInput
    connect?: AlunoWhereUniqueInput
  }

  export type ProvaCreateNestedOneWithoutResultadosInput = {
    create?: XOR<ProvaCreateWithoutResultadosInput, ProvaUncheckedCreateWithoutResultadosInput>
    connectOrCreate?: ProvaCreateOrConnectWithoutResultadosInput
    connect?: ProvaWhereUniqueInput
  }

  export type AplicacaoProvaCreateNestedOneWithoutResultadosInput = {
    create?: XOR<AplicacaoProvaCreateWithoutResultadosInput, AplicacaoProvaUncheckedCreateWithoutResultadosInput>
    connectOrCreate?: AplicacaoProvaCreateOrConnectWithoutResultadosInput
    connect?: AplicacaoProvaWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type AlunoUpdateOneRequiredWithoutResultadosNestedInput = {
    create?: XOR<AlunoCreateWithoutResultadosInput, AlunoUncheckedCreateWithoutResultadosInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutResultadosInput
    upsert?: AlunoUpsertWithoutResultadosInput
    connect?: AlunoWhereUniqueInput
    update?: XOR<AlunoUpdateWithoutResultadosInput, AlunoUncheckedUpdateWithoutResultadosInput>
  }

  export type ProvaUpdateOneRequiredWithoutResultadosNestedInput = {
    create?: XOR<ProvaCreateWithoutResultadosInput, ProvaUncheckedCreateWithoutResultadosInput>
    connectOrCreate?: ProvaCreateOrConnectWithoutResultadosInput
    upsert?: ProvaUpsertWithoutResultadosInput
    connect?: ProvaWhereUniqueInput
    update?: XOR<ProvaUpdateWithoutResultadosInput, ProvaUncheckedUpdateWithoutResultadosInput>
  }

  export type AplicacaoProvaUpdateOneRequiredWithoutResultadosNestedInput = {
    create?: XOR<AplicacaoProvaCreateWithoutResultadosInput, AplicacaoProvaUncheckedCreateWithoutResultadosInput>
    connectOrCreate?: AplicacaoProvaCreateOrConnectWithoutResultadosInput
    upsert?: AplicacaoProvaUpsertWithoutResultadosInput
    connect?: AplicacaoProvaWhereUniqueInput
    update?: XOR<AplicacaoProvaUpdateWithoutResultadosInput, AplicacaoProvaUncheckedUpdateWithoutResultadosInput>
  }

  export type EscolaCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<EscolaCreateWithoutUsuariosInput, EscolaUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: EscolaCreateOrConnectWithoutUsuariosInput
    connect?: EscolaWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EscolaUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<EscolaCreateWithoutUsuariosInput, EscolaUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: EscolaCreateOrConnectWithoutUsuariosInput
    upsert?: EscolaUpsertWithoutUsuariosInput
    disconnect?: boolean
    delete?: boolean
    connect?: EscolaWhereUniqueInput
    update?: XOR<EscolaUpdateWithoutUsuariosInput, EscolaUncheckedUpdateWithoutUsuariosInput>
  }

  export type DesempenhoHabilidadeCreateNestedManyWithoutHabilidadeInput = {
    create?: XOR<Enumerable<DesempenhoHabilidadeCreateWithoutHabilidadeInput>, Enumerable<DesempenhoHabilidadeUncheckedCreateWithoutHabilidadeInput>>
    connectOrCreate?: Enumerable<DesempenhoHabilidadeCreateOrConnectWithoutHabilidadeInput>
    createMany?: DesempenhoHabilidadeCreateManyHabilidadeInputEnvelope
    connect?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
  }

  export type DesempenhoHabilidadeUncheckedCreateNestedManyWithoutHabilidadeInput = {
    create?: XOR<Enumerable<DesempenhoHabilidadeCreateWithoutHabilidadeInput>, Enumerable<DesempenhoHabilidadeUncheckedCreateWithoutHabilidadeInput>>
    connectOrCreate?: Enumerable<DesempenhoHabilidadeCreateOrConnectWithoutHabilidadeInput>
    createMany?: DesempenhoHabilidadeCreateManyHabilidadeInputEnvelope
    connect?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
  }

  export type DesempenhoHabilidadeUpdateManyWithoutHabilidadeNestedInput = {
    create?: XOR<Enumerable<DesempenhoHabilidadeCreateWithoutHabilidadeInput>, Enumerable<DesempenhoHabilidadeUncheckedCreateWithoutHabilidadeInput>>
    connectOrCreate?: Enumerable<DesempenhoHabilidadeCreateOrConnectWithoutHabilidadeInput>
    upsert?: Enumerable<DesempenhoHabilidadeUpsertWithWhereUniqueWithoutHabilidadeInput>
    createMany?: DesempenhoHabilidadeCreateManyHabilidadeInputEnvelope
    set?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
    disconnect?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
    delete?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
    connect?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
    update?: Enumerable<DesempenhoHabilidadeUpdateWithWhereUniqueWithoutHabilidadeInput>
    updateMany?: Enumerable<DesempenhoHabilidadeUpdateManyWithWhereWithoutHabilidadeInput>
    deleteMany?: Enumerable<DesempenhoHabilidadeScalarWhereInput>
  }

  export type DesempenhoHabilidadeUncheckedUpdateManyWithoutHabilidadeNestedInput = {
    create?: XOR<Enumerable<DesempenhoHabilidadeCreateWithoutHabilidadeInput>, Enumerable<DesempenhoHabilidadeUncheckedCreateWithoutHabilidadeInput>>
    connectOrCreate?: Enumerable<DesempenhoHabilidadeCreateOrConnectWithoutHabilidadeInput>
    upsert?: Enumerable<DesempenhoHabilidadeUpsertWithWhereUniqueWithoutHabilidadeInput>
    createMany?: DesempenhoHabilidadeCreateManyHabilidadeInputEnvelope
    set?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
    disconnect?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
    delete?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
    connect?: Enumerable<DesempenhoHabilidadeWhereUniqueInput>
    update?: Enumerable<DesempenhoHabilidadeUpdateWithWhereUniqueWithoutHabilidadeInput>
    updateMany?: Enumerable<DesempenhoHabilidadeUpdateManyWithWhereWithoutHabilidadeInput>
    deleteMany?: Enumerable<DesempenhoHabilidadeScalarWhereInput>
  }

  export type HabilidadeBnccCreateNestedOneWithoutDesempenhoHabilidadesInput = {
    create?: XOR<HabilidadeBnccCreateWithoutDesempenhoHabilidadesInput, HabilidadeBnccUncheckedCreateWithoutDesempenhoHabilidadesInput>
    connectOrCreate?: HabilidadeBnccCreateOrConnectWithoutDesempenhoHabilidadesInput
    connect?: HabilidadeBnccWhereUniqueInput
  }

  export type EscolaCreateNestedOneWithoutDesempenhoHabilidadesInput = {
    create?: XOR<EscolaCreateWithoutDesempenhoHabilidadesInput, EscolaUncheckedCreateWithoutDesempenhoHabilidadesInput>
    connectOrCreate?: EscolaCreateOrConnectWithoutDesempenhoHabilidadesInput
    connect?: EscolaWhereUniqueInput
  }

  export type TurmaCreateNestedOneWithoutDesempenhoHabilidadesInput = {
    create?: XOR<TurmaCreateWithoutDesempenhoHabilidadesInput, TurmaUncheckedCreateWithoutDesempenhoHabilidadesInput>
    connectOrCreate?: TurmaCreateOrConnectWithoutDesempenhoHabilidadesInput
    connect?: TurmaWhereUniqueInput
  }

  export type ProvaCreateNestedOneWithoutDesempenhoHabilidadesInput = {
    create?: XOR<ProvaCreateWithoutDesempenhoHabilidadesInput, ProvaUncheckedCreateWithoutDesempenhoHabilidadesInput>
    connectOrCreate?: ProvaCreateOrConnectWithoutDesempenhoHabilidadesInput
    connect?: ProvaWhereUniqueInput
  }

  export type HabilidadeBnccUpdateOneRequiredWithoutDesempenhoHabilidadesNestedInput = {
    create?: XOR<HabilidadeBnccCreateWithoutDesempenhoHabilidadesInput, HabilidadeBnccUncheckedCreateWithoutDesempenhoHabilidadesInput>
    connectOrCreate?: HabilidadeBnccCreateOrConnectWithoutDesempenhoHabilidadesInput
    upsert?: HabilidadeBnccUpsertWithoutDesempenhoHabilidadesInput
    connect?: HabilidadeBnccWhereUniqueInput
    update?: XOR<HabilidadeBnccUpdateWithoutDesempenhoHabilidadesInput, HabilidadeBnccUncheckedUpdateWithoutDesempenhoHabilidadesInput>
  }

  export type EscolaUpdateOneRequiredWithoutDesempenhoHabilidadesNestedInput = {
    create?: XOR<EscolaCreateWithoutDesempenhoHabilidadesInput, EscolaUncheckedCreateWithoutDesempenhoHabilidadesInput>
    connectOrCreate?: EscolaCreateOrConnectWithoutDesempenhoHabilidadesInput
    upsert?: EscolaUpsertWithoutDesempenhoHabilidadesInput
    connect?: EscolaWhereUniqueInput
    update?: XOR<EscolaUpdateWithoutDesempenhoHabilidadesInput, EscolaUncheckedUpdateWithoutDesempenhoHabilidadesInput>
  }

  export type TurmaUpdateOneWithoutDesempenhoHabilidadesNestedInput = {
    create?: XOR<TurmaCreateWithoutDesempenhoHabilidadesInput, TurmaUncheckedCreateWithoutDesempenhoHabilidadesInput>
    connectOrCreate?: TurmaCreateOrConnectWithoutDesempenhoHabilidadesInput
    upsert?: TurmaUpsertWithoutDesempenhoHabilidadesInput
    disconnect?: boolean
    delete?: boolean
    connect?: TurmaWhereUniqueInput
    update?: XOR<TurmaUpdateWithoutDesempenhoHabilidadesInput, TurmaUncheckedUpdateWithoutDesempenhoHabilidadesInput>
  }

  export type ProvaUpdateOneWithoutDesempenhoHabilidadesNestedInput = {
    create?: XOR<ProvaCreateWithoutDesempenhoHabilidadesInput, ProvaUncheckedCreateWithoutDesempenhoHabilidadesInput>
    connectOrCreate?: ProvaCreateOrConnectWithoutDesempenhoHabilidadesInput
    upsert?: ProvaUpsertWithoutDesempenhoHabilidadesInput
    disconnect?: boolean
    delete?: boolean
    connect?: ProvaWhereUniqueInput
    update?: XOR<ProvaUpdateWithoutDesempenhoHabilidadesInput, ProvaUncheckedUpdateWithoutDesempenhoHabilidadesInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedDecimalFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalFilter | Decimal | DecimalJsLike | number | string
  }
  export type NestedJsonNullableFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase>, Exclude<keyof Required<NestedJsonNullableFilterBase>, 'path'>>,
        Required<NestedJsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase>, 'path'>>

  export type NestedJsonNullableFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type NestedDecimalWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type NestedDecimalNullableFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter
    _avg?: NestedDecimalNullableFilter
    _sum?: NestedDecimalNullableFilter
    _min?: NestedDecimalNullableFilter
    _max?: NestedDecimalNullableFilter
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type TurmaCreateWithoutEscolaInput = {
    nome: string
    serie: number
    turno: string
    anoLetivo: string
    professorResponsavel?: string | null
    sala?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    alunos?: AlunoCreateNestedManyWithoutTurmaInput
    aplicacoesProva?: AplicacaoProvaCreateNestedManyWithoutTurmaInput
    desempenhoHabilidades?: DesempenhoHabilidadeCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUncheckedCreateWithoutEscolaInput = {
    id?: number
    nome: string
    serie: number
    turno: string
    anoLetivo: string
    professorResponsavel?: string | null
    sala?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    alunos?: AlunoUncheckedCreateNestedManyWithoutTurmaInput
    aplicacoesProva?: AplicacaoProvaUncheckedCreateNestedManyWithoutTurmaInput
    desempenhoHabilidades?: DesempenhoHabilidadeUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type TurmaCreateOrConnectWithoutEscolaInput = {
    where: TurmaWhereUniqueInput
    create: XOR<TurmaCreateWithoutEscolaInput, TurmaUncheckedCreateWithoutEscolaInput>
  }

  export type TurmaCreateManyEscolaInputEnvelope = {
    data: Enumerable<TurmaCreateManyEscolaInput>
    skipDuplicates?: boolean
  }

  export type AlunoCreateWithoutEscolaInput = {
    nome: string
    matricula: string
    dataNascimento?: Date | string | null
    genero?: string | null
    responsavel?: string | null
    telefoneResponsavel?: string | null
    emailResponsavel?: string | null
    fotoUrl?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    turma?: TurmaCreateNestedOneWithoutAlunosInput
    resultados?: ResultadoCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUncheckedCreateWithoutEscolaInput = {
    id?: number
    nome: string
    matricula: string
    dataNascimento?: Date | string | null
    genero?: string | null
    responsavel?: string | null
    telefoneResponsavel?: string | null
    emailResponsavel?: string | null
    turmaId?: number | null
    fotoUrl?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    resultados?: ResultadoUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type AlunoCreateOrConnectWithoutEscolaInput = {
    where: AlunoWhereUniqueInput
    create: XOR<AlunoCreateWithoutEscolaInput, AlunoUncheckedCreateWithoutEscolaInput>
  }

  export type AlunoCreateManyEscolaInputEnvelope = {
    data: Enumerable<AlunoCreateManyEscolaInput>
    skipDuplicates?: boolean
  }

  export type UsuarioCreateWithoutEscolaInput = {
    nome: string
    email: string
    senha: string
    tipo: string
    fotoUrl?: string | null
    ultimoAcesso?: Date | string | null
    ativo?: boolean
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type UsuarioUncheckedCreateWithoutEscolaInput = {
    id?: number
    nome: string
    email: string
    senha: string
    tipo: string
    fotoUrl?: string | null
    ultimoAcesso?: Date | string | null
    ativo?: boolean
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type UsuarioCreateOrConnectWithoutEscolaInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutEscolaInput, UsuarioUncheckedCreateWithoutEscolaInput>
  }

  export type UsuarioCreateManyEscolaInputEnvelope = {
    data: Enumerable<UsuarioCreateManyEscolaInput>
    skipDuplicates?: boolean
  }

  export type DesempenhoHabilidadeCreateWithoutEscolaInput = {
    totalQuestoes: number
    totalAcertos: number
    percentualAcertos: Decimal | DecimalJsLike | number | string
    dataAvaliacao: Date | string
    anoLetivo: string
    dataCriacao?: Date | string
    habilidade: HabilidadeBnccCreateNestedOneWithoutDesempenhoHabilidadesInput
    turma?: TurmaCreateNestedOneWithoutDesempenhoHabilidadesInput
    prova?: ProvaCreateNestedOneWithoutDesempenhoHabilidadesInput
  }

  export type DesempenhoHabilidadeUncheckedCreateWithoutEscolaInput = {
    id?: number
    habilidadeId: number
    turmaId?: number | null
    provaId?: number | null
    totalQuestoes: number
    totalAcertos: number
    percentualAcertos: Decimal | DecimalJsLike | number | string
    dataAvaliacao: Date | string
    anoLetivo: string
    dataCriacao?: Date | string
  }

  export type DesempenhoHabilidadeCreateOrConnectWithoutEscolaInput = {
    where: DesempenhoHabilidadeWhereUniqueInput
    create: XOR<DesempenhoHabilidadeCreateWithoutEscolaInput, DesempenhoHabilidadeUncheckedCreateWithoutEscolaInput>
  }

  export type DesempenhoHabilidadeCreateManyEscolaInputEnvelope = {
    data: Enumerable<DesempenhoHabilidadeCreateManyEscolaInput>
    skipDuplicates?: boolean
  }

  export type TurmaUpsertWithWhereUniqueWithoutEscolaInput = {
    where: TurmaWhereUniqueInput
    update: XOR<TurmaUpdateWithoutEscolaInput, TurmaUncheckedUpdateWithoutEscolaInput>
    create: XOR<TurmaCreateWithoutEscolaInput, TurmaUncheckedCreateWithoutEscolaInput>
  }

  export type TurmaUpdateWithWhereUniqueWithoutEscolaInput = {
    where: TurmaWhereUniqueInput
    data: XOR<TurmaUpdateWithoutEscolaInput, TurmaUncheckedUpdateWithoutEscolaInput>
  }

  export type TurmaUpdateManyWithWhereWithoutEscolaInput = {
    where: TurmaScalarWhereInput
    data: XOR<TurmaUpdateManyMutationInput, TurmaUncheckedUpdateManyWithoutTurmasInput>
  }

  export type TurmaScalarWhereInput = {
    AND?: Enumerable<TurmaScalarWhereInput>
    OR?: Enumerable<TurmaScalarWhereInput>
    NOT?: Enumerable<TurmaScalarWhereInput>
    id?: IntFilter | number
    nome?: StringFilter | string
    serie?: IntFilter | number
    turno?: StringFilter | string
    anoLetivo?: StringFilter | string
    escolaId?: IntFilter | number
    professorResponsavel?: StringNullableFilter | string | null
    sala?: StringNullableFilter | string | null
    dataCriacao?: DateTimeFilter | Date | string
    dataAtualizacao?: DateTimeFilter | Date | string
  }

  export type AlunoUpsertWithWhereUniqueWithoutEscolaInput = {
    where: AlunoWhereUniqueInput
    update: XOR<AlunoUpdateWithoutEscolaInput, AlunoUncheckedUpdateWithoutEscolaInput>
    create: XOR<AlunoCreateWithoutEscolaInput, AlunoUncheckedCreateWithoutEscolaInput>
  }

  export type AlunoUpdateWithWhereUniqueWithoutEscolaInput = {
    where: AlunoWhereUniqueInput
    data: XOR<AlunoUpdateWithoutEscolaInput, AlunoUncheckedUpdateWithoutEscolaInput>
  }

  export type AlunoUpdateManyWithWhereWithoutEscolaInput = {
    where: AlunoScalarWhereInput
    data: XOR<AlunoUpdateManyMutationInput, AlunoUncheckedUpdateManyWithoutAlunosInput>
  }

  export type AlunoScalarWhereInput = {
    AND?: Enumerable<AlunoScalarWhereInput>
    OR?: Enumerable<AlunoScalarWhereInput>
    NOT?: Enumerable<AlunoScalarWhereInput>
    id?: IntFilter | number
    nome?: StringFilter | string
    matricula?: StringFilter | string
    dataNascimento?: DateTimeNullableFilter | Date | string | null
    genero?: StringNullableFilter | string | null
    responsavel?: StringNullableFilter | string | null
    telefoneResponsavel?: StringNullableFilter | string | null
    emailResponsavel?: StringNullableFilter | string | null
    turmaId?: IntNullableFilter | number | null
    escolaId?: IntFilter | number
    fotoUrl?: StringNullableFilter | string | null
    dataCriacao?: DateTimeFilter | Date | string
    dataAtualizacao?: DateTimeFilter | Date | string
  }

  export type UsuarioUpsertWithWhereUniqueWithoutEscolaInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutEscolaInput, UsuarioUncheckedUpdateWithoutEscolaInput>
    create: XOR<UsuarioCreateWithoutEscolaInput, UsuarioUncheckedCreateWithoutEscolaInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutEscolaInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutEscolaInput, UsuarioUncheckedUpdateWithoutEscolaInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutEscolaInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: Enumerable<UsuarioScalarWhereInput>
    OR?: Enumerable<UsuarioScalarWhereInput>
    NOT?: Enumerable<UsuarioScalarWhereInput>
    id?: IntFilter | number
    nome?: StringFilter | string
    email?: StringFilter | string
    senha?: StringFilter | string
    tipo?: StringFilter | string
    escolaId?: IntNullableFilter | number | null
    fotoUrl?: StringNullableFilter | string | null
    ultimoAcesso?: DateTimeNullableFilter | Date | string | null
    ativo?: BoolFilter | boolean
    dataCriacao?: DateTimeFilter | Date | string
    dataAtualizacao?: DateTimeFilter | Date | string
  }

  export type DesempenhoHabilidadeUpsertWithWhereUniqueWithoutEscolaInput = {
    where: DesempenhoHabilidadeWhereUniqueInput
    update: XOR<DesempenhoHabilidadeUpdateWithoutEscolaInput, DesempenhoHabilidadeUncheckedUpdateWithoutEscolaInput>
    create: XOR<DesempenhoHabilidadeCreateWithoutEscolaInput, DesempenhoHabilidadeUncheckedCreateWithoutEscolaInput>
  }

  export type DesempenhoHabilidadeUpdateWithWhereUniqueWithoutEscolaInput = {
    where: DesempenhoHabilidadeWhereUniqueInput
    data: XOR<DesempenhoHabilidadeUpdateWithoutEscolaInput, DesempenhoHabilidadeUncheckedUpdateWithoutEscolaInput>
  }

  export type DesempenhoHabilidadeUpdateManyWithWhereWithoutEscolaInput = {
    where: DesempenhoHabilidadeScalarWhereInput
    data: XOR<DesempenhoHabilidadeUpdateManyMutationInput, DesempenhoHabilidadeUncheckedUpdateManyWithoutDesempenhoHabilidadesInput>
  }

  export type DesempenhoHabilidadeScalarWhereInput = {
    AND?: Enumerable<DesempenhoHabilidadeScalarWhereInput>
    OR?: Enumerable<DesempenhoHabilidadeScalarWhereInput>
    NOT?: Enumerable<DesempenhoHabilidadeScalarWhereInput>
    id?: IntFilter | number
    habilidadeId?: IntFilter | number
    escolaId?: IntFilter | number
    turmaId?: IntNullableFilter | number | null
    provaId?: IntNullableFilter | number | null
    totalQuestoes?: IntFilter | number
    totalAcertos?: IntFilter | number
    percentualAcertos?: DecimalFilter | Decimal | DecimalJsLike | number | string
    dataAvaliacao?: DateTimeFilter | Date | string
    anoLetivo?: StringFilter | string
    dataCriacao?: DateTimeFilter | Date | string
  }

  export type EscolaCreateWithoutTurmasInput = {
    nome: string
    regiao?: string | null
    grupo?: string | null
    endereco?: string | null
    telefone?: string | null
    email?: string | null
    diretor?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    alunos?: AlunoCreateNestedManyWithoutEscolaInput
    usuarios?: UsuarioCreateNestedManyWithoutEscolaInput
    desempenhoHabilidades?: DesempenhoHabilidadeCreateNestedManyWithoutEscolaInput
  }

  export type EscolaUncheckedCreateWithoutTurmasInput = {
    id?: number
    nome: string
    regiao?: string | null
    grupo?: string | null
    endereco?: string | null
    telefone?: string | null
    email?: string | null
    diretor?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    alunos?: AlunoUncheckedCreateNestedManyWithoutEscolaInput
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutEscolaInput
    desempenhoHabilidades?: DesempenhoHabilidadeUncheckedCreateNestedManyWithoutEscolaInput
  }

  export type EscolaCreateOrConnectWithoutTurmasInput = {
    where: EscolaWhereUniqueInput
    create: XOR<EscolaCreateWithoutTurmasInput, EscolaUncheckedCreateWithoutTurmasInput>
  }

  export type AlunoCreateWithoutTurmaInput = {
    nome: string
    matricula: string
    dataNascimento?: Date | string | null
    genero?: string | null
    responsavel?: string | null
    telefoneResponsavel?: string | null
    emailResponsavel?: string | null
    fotoUrl?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    escola: EscolaCreateNestedOneWithoutAlunosInput
    resultados?: ResultadoCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUncheckedCreateWithoutTurmaInput = {
    id?: number
    nome: string
    matricula: string
    dataNascimento?: Date | string | null
    genero?: string | null
    responsavel?: string | null
    telefoneResponsavel?: string | null
    emailResponsavel?: string | null
    escolaId: number
    fotoUrl?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    resultados?: ResultadoUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type AlunoCreateOrConnectWithoutTurmaInput = {
    where: AlunoWhereUniqueInput
    create: XOR<AlunoCreateWithoutTurmaInput, AlunoUncheckedCreateWithoutTurmaInput>
  }

  export type AlunoCreateManyTurmaInputEnvelope = {
    data: Enumerable<AlunoCreateManyTurmaInput>
    skipDuplicates?: boolean
  }

  export type AplicacaoProvaCreateWithoutTurmaInput = {
    dataAplicacao: Date | string
    horaInicio?: Date | string | null
    horaTermino?: Date | string | null
    observacoes?: string | null
    dataCriacao?: Date | string
    prova: ProvaCreateNestedOneWithoutAplicacoesProvaInput
    resultados?: ResultadoCreateNestedManyWithoutAplicacaoInput
  }

  export type AplicacaoProvaUncheckedCreateWithoutTurmaInput = {
    id?: number
    provaId: number
    dataAplicacao: Date | string
    horaInicio?: Date | string | null
    horaTermino?: Date | string | null
    observacoes?: string | null
    dataCriacao?: Date | string
    resultados?: ResultadoUncheckedCreateNestedManyWithoutAplicacaoInput
  }

  export type AplicacaoProvaCreateOrConnectWithoutTurmaInput = {
    where: AplicacaoProvaWhereUniqueInput
    create: XOR<AplicacaoProvaCreateWithoutTurmaInput, AplicacaoProvaUncheckedCreateWithoutTurmaInput>
  }

  export type AplicacaoProvaCreateManyTurmaInputEnvelope = {
    data: Enumerable<AplicacaoProvaCreateManyTurmaInput>
    skipDuplicates?: boolean
  }

  export type DesempenhoHabilidadeCreateWithoutTurmaInput = {
    totalQuestoes: number
    totalAcertos: number
    percentualAcertos: Decimal | DecimalJsLike | number | string
    dataAvaliacao: Date | string
    anoLetivo: string
    dataCriacao?: Date | string
    habilidade: HabilidadeBnccCreateNestedOneWithoutDesempenhoHabilidadesInput
    escola: EscolaCreateNestedOneWithoutDesempenhoHabilidadesInput
    prova?: ProvaCreateNestedOneWithoutDesempenhoHabilidadesInput
  }

  export type DesempenhoHabilidadeUncheckedCreateWithoutTurmaInput = {
    id?: number
    habilidadeId: number
    escolaId: number
    provaId?: number | null
    totalQuestoes: number
    totalAcertos: number
    percentualAcertos: Decimal | DecimalJsLike | number | string
    dataAvaliacao: Date | string
    anoLetivo: string
    dataCriacao?: Date | string
  }

  export type DesempenhoHabilidadeCreateOrConnectWithoutTurmaInput = {
    where: DesempenhoHabilidadeWhereUniqueInput
    create: XOR<DesempenhoHabilidadeCreateWithoutTurmaInput, DesempenhoHabilidadeUncheckedCreateWithoutTurmaInput>
  }

  export type DesempenhoHabilidadeCreateManyTurmaInputEnvelope = {
    data: Enumerable<DesempenhoHabilidadeCreateManyTurmaInput>
    skipDuplicates?: boolean
  }

  export type EscolaUpsertWithoutTurmasInput = {
    update: XOR<EscolaUpdateWithoutTurmasInput, EscolaUncheckedUpdateWithoutTurmasInput>
    create: XOR<EscolaCreateWithoutTurmasInput, EscolaUncheckedCreateWithoutTurmasInput>
  }

  export type EscolaUpdateWithoutTurmasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    regiao?: NullableStringFieldUpdateOperationsInput | string | null
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    diretor?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    alunos?: AlunoUpdateManyWithoutEscolaNestedInput
    usuarios?: UsuarioUpdateManyWithoutEscolaNestedInput
    desempenhoHabilidades?: DesempenhoHabilidadeUpdateManyWithoutEscolaNestedInput
  }

  export type EscolaUncheckedUpdateWithoutTurmasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    regiao?: NullableStringFieldUpdateOperationsInput | string | null
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    diretor?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    alunos?: AlunoUncheckedUpdateManyWithoutEscolaNestedInput
    usuarios?: UsuarioUncheckedUpdateManyWithoutEscolaNestedInput
    desempenhoHabilidades?: DesempenhoHabilidadeUncheckedUpdateManyWithoutEscolaNestedInput
  }

  export type AlunoUpsertWithWhereUniqueWithoutTurmaInput = {
    where: AlunoWhereUniqueInput
    update: XOR<AlunoUpdateWithoutTurmaInput, AlunoUncheckedUpdateWithoutTurmaInput>
    create: XOR<AlunoCreateWithoutTurmaInput, AlunoUncheckedCreateWithoutTurmaInput>
  }

  export type AlunoUpdateWithWhereUniqueWithoutTurmaInput = {
    where: AlunoWhereUniqueInput
    data: XOR<AlunoUpdateWithoutTurmaInput, AlunoUncheckedUpdateWithoutTurmaInput>
  }

  export type AlunoUpdateManyWithWhereWithoutTurmaInput = {
    where: AlunoScalarWhereInput
    data: XOR<AlunoUpdateManyMutationInput, AlunoUncheckedUpdateManyWithoutAlunosInput>
  }

  export type AplicacaoProvaUpsertWithWhereUniqueWithoutTurmaInput = {
    where: AplicacaoProvaWhereUniqueInput
    update: XOR<AplicacaoProvaUpdateWithoutTurmaInput, AplicacaoProvaUncheckedUpdateWithoutTurmaInput>
    create: XOR<AplicacaoProvaCreateWithoutTurmaInput, AplicacaoProvaUncheckedCreateWithoutTurmaInput>
  }

  export type AplicacaoProvaUpdateWithWhereUniqueWithoutTurmaInput = {
    where: AplicacaoProvaWhereUniqueInput
    data: XOR<AplicacaoProvaUpdateWithoutTurmaInput, AplicacaoProvaUncheckedUpdateWithoutTurmaInput>
  }

  export type AplicacaoProvaUpdateManyWithWhereWithoutTurmaInput = {
    where: AplicacaoProvaScalarWhereInput
    data: XOR<AplicacaoProvaUpdateManyMutationInput, AplicacaoProvaUncheckedUpdateManyWithoutAplicacoesProvaInput>
  }

  export type AplicacaoProvaScalarWhereInput = {
    AND?: Enumerable<AplicacaoProvaScalarWhereInput>
    OR?: Enumerable<AplicacaoProvaScalarWhereInput>
    NOT?: Enumerable<AplicacaoProvaScalarWhereInput>
    id?: IntFilter | number
    provaId?: IntFilter | number
    turmaId?: IntFilter | number
    dataAplicacao?: DateTimeFilter | Date | string
    horaInicio?: DateTimeNullableFilter | Date | string | null
    horaTermino?: DateTimeNullableFilter | Date | string | null
    observacoes?: StringNullableFilter | string | null
    dataCriacao?: DateTimeFilter | Date | string
  }

  export type DesempenhoHabilidadeUpsertWithWhereUniqueWithoutTurmaInput = {
    where: DesempenhoHabilidadeWhereUniqueInput
    update: XOR<DesempenhoHabilidadeUpdateWithoutTurmaInput, DesempenhoHabilidadeUncheckedUpdateWithoutTurmaInput>
    create: XOR<DesempenhoHabilidadeCreateWithoutTurmaInput, DesempenhoHabilidadeUncheckedCreateWithoutTurmaInput>
  }

  export type DesempenhoHabilidadeUpdateWithWhereUniqueWithoutTurmaInput = {
    where: DesempenhoHabilidadeWhereUniqueInput
    data: XOR<DesempenhoHabilidadeUpdateWithoutTurmaInput, DesempenhoHabilidadeUncheckedUpdateWithoutTurmaInput>
  }

  export type DesempenhoHabilidadeUpdateManyWithWhereWithoutTurmaInput = {
    where: DesempenhoHabilidadeScalarWhereInput
    data: XOR<DesempenhoHabilidadeUpdateManyMutationInput, DesempenhoHabilidadeUncheckedUpdateManyWithoutDesempenhoHabilidadesInput>
  }

  export type TurmaCreateWithoutAlunosInput = {
    nome: string
    serie: number
    turno: string
    anoLetivo: string
    professorResponsavel?: string | null
    sala?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    escola: EscolaCreateNestedOneWithoutTurmasInput
    aplicacoesProva?: AplicacaoProvaCreateNestedManyWithoutTurmaInput
    desempenhoHabilidades?: DesempenhoHabilidadeCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUncheckedCreateWithoutAlunosInput = {
    id?: number
    nome: string
    serie: number
    turno: string
    anoLetivo: string
    escolaId: number
    professorResponsavel?: string | null
    sala?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    aplicacoesProva?: AplicacaoProvaUncheckedCreateNestedManyWithoutTurmaInput
    desempenhoHabilidades?: DesempenhoHabilidadeUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type TurmaCreateOrConnectWithoutAlunosInput = {
    where: TurmaWhereUniqueInput
    create: XOR<TurmaCreateWithoutAlunosInput, TurmaUncheckedCreateWithoutAlunosInput>
  }

  export type EscolaCreateWithoutAlunosInput = {
    nome: string
    regiao?: string | null
    grupo?: string | null
    endereco?: string | null
    telefone?: string | null
    email?: string | null
    diretor?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    turmas?: TurmaCreateNestedManyWithoutEscolaInput
    usuarios?: UsuarioCreateNestedManyWithoutEscolaInput
    desempenhoHabilidades?: DesempenhoHabilidadeCreateNestedManyWithoutEscolaInput
  }

  export type EscolaUncheckedCreateWithoutAlunosInput = {
    id?: number
    nome: string
    regiao?: string | null
    grupo?: string | null
    endereco?: string | null
    telefone?: string | null
    email?: string | null
    diretor?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    turmas?: TurmaUncheckedCreateNestedManyWithoutEscolaInput
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutEscolaInput
    desempenhoHabilidades?: DesempenhoHabilidadeUncheckedCreateNestedManyWithoutEscolaInput
  }

  export type EscolaCreateOrConnectWithoutAlunosInput = {
    where: EscolaWhereUniqueInput
    create: XOR<EscolaCreateWithoutAlunosInput, EscolaUncheckedCreateWithoutAlunosInput>
  }

  export type ResultadoCreateWithoutAlunoInput = {
    respostas?: NullableJsonNullValueInput | InputJsonValue
    pontuacao?: Decimal | DecimalJsLike | number | string | null
    percentual?: Decimal | DecimalJsLike | number | string | null
    dataCorrecao?: Date | string | null
    corrigidoPor?: number | null
    observacoes?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    prova: ProvaCreateNestedOneWithoutResultadosInput
    aplicacao: AplicacaoProvaCreateNestedOneWithoutResultadosInput
  }

  export type ResultadoUncheckedCreateWithoutAlunoInput = {
    id?: number
    provaId: number
    aplicacaoId: number
    respostas?: NullableJsonNullValueInput | InputJsonValue
    pontuacao?: Decimal | DecimalJsLike | number | string | null
    percentual?: Decimal | DecimalJsLike | number | string | null
    dataCorrecao?: Date | string | null
    corrigidoPor?: number | null
    observacoes?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type ResultadoCreateOrConnectWithoutAlunoInput = {
    where: ResultadoWhereUniqueInput
    create: XOR<ResultadoCreateWithoutAlunoInput, ResultadoUncheckedCreateWithoutAlunoInput>
  }

  export type ResultadoCreateManyAlunoInputEnvelope = {
    data: Enumerable<ResultadoCreateManyAlunoInput>
    skipDuplicates?: boolean
  }

  export type TurmaUpsertWithoutAlunosInput = {
    update: XOR<TurmaUpdateWithoutAlunosInput, TurmaUncheckedUpdateWithoutAlunosInput>
    create: XOR<TurmaCreateWithoutAlunosInput, TurmaUncheckedCreateWithoutAlunosInput>
  }

  export type TurmaUpdateWithoutAlunosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    serie?: IntFieldUpdateOperationsInput | number
    turno?: StringFieldUpdateOperationsInput | string
    anoLetivo?: StringFieldUpdateOperationsInput | string
    professorResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    sala?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    escola?: EscolaUpdateOneRequiredWithoutTurmasNestedInput
    aplicacoesProva?: AplicacaoProvaUpdateManyWithoutTurmaNestedInput
    desempenhoHabilidades?: DesempenhoHabilidadeUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateWithoutAlunosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    serie?: IntFieldUpdateOperationsInput | number
    turno?: StringFieldUpdateOperationsInput | string
    anoLetivo?: StringFieldUpdateOperationsInput | string
    escolaId?: IntFieldUpdateOperationsInput | number
    professorResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    sala?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    aplicacoesProva?: AplicacaoProvaUncheckedUpdateManyWithoutTurmaNestedInput
    desempenhoHabilidades?: DesempenhoHabilidadeUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type EscolaUpsertWithoutAlunosInput = {
    update: XOR<EscolaUpdateWithoutAlunosInput, EscolaUncheckedUpdateWithoutAlunosInput>
    create: XOR<EscolaCreateWithoutAlunosInput, EscolaUncheckedCreateWithoutAlunosInput>
  }

  export type EscolaUpdateWithoutAlunosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    regiao?: NullableStringFieldUpdateOperationsInput | string | null
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    diretor?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    turmas?: TurmaUpdateManyWithoutEscolaNestedInput
    usuarios?: UsuarioUpdateManyWithoutEscolaNestedInput
    desempenhoHabilidades?: DesempenhoHabilidadeUpdateManyWithoutEscolaNestedInput
  }

  export type EscolaUncheckedUpdateWithoutAlunosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    regiao?: NullableStringFieldUpdateOperationsInput | string | null
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    diretor?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    turmas?: TurmaUncheckedUpdateManyWithoutEscolaNestedInput
    usuarios?: UsuarioUncheckedUpdateManyWithoutEscolaNestedInput
    desempenhoHabilidades?: DesempenhoHabilidadeUncheckedUpdateManyWithoutEscolaNestedInput
  }

  export type ResultadoUpsertWithWhereUniqueWithoutAlunoInput = {
    where: ResultadoWhereUniqueInput
    update: XOR<ResultadoUpdateWithoutAlunoInput, ResultadoUncheckedUpdateWithoutAlunoInput>
    create: XOR<ResultadoCreateWithoutAlunoInput, ResultadoUncheckedCreateWithoutAlunoInput>
  }

  export type ResultadoUpdateWithWhereUniqueWithoutAlunoInput = {
    where: ResultadoWhereUniqueInput
    data: XOR<ResultadoUpdateWithoutAlunoInput, ResultadoUncheckedUpdateWithoutAlunoInput>
  }

  export type ResultadoUpdateManyWithWhereWithoutAlunoInput = {
    where: ResultadoScalarWhereInput
    data: XOR<ResultadoUpdateManyMutationInput, ResultadoUncheckedUpdateManyWithoutResultadosInput>
  }

  export type ResultadoScalarWhereInput = {
    AND?: Enumerable<ResultadoScalarWhereInput>
    OR?: Enumerable<ResultadoScalarWhereInput>
    NOT?: Enumerable<ResultadoScalarWhereInput>
    id?: IntFilter | number
    alunoId?: IntFilter | number
    provaId?: IntFilter | number
    aplicacaoId?: IntFilter | number
    respostas?: JsonNullableFilter
    pontuacao?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    percentual?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    dataCorrecao?: DateTimeNullableFilter | Date | string | null
    corrigidoPor?: IntNullableFilter | number | null
    observacoes?: StringNullableFilter | string | null
    dataCriacao?: DateTimeFilter | Date | string
    dataAtualizacao?: DateTimeFilter | Date | string
  }

  export type QuestaoCreateWithoutProvaInput = {
    ordem: number
    enunciado: string
    tipo: string
    opcoes?: NullableJsonNullValueInput | InputJsonValue
    respostaCorreta?: string | null
    valor?: Decimal | DecimalJsLike | number | string
    habilidadeBncc?: string | null
    descricaoBncc?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type QuestaoUncheckedCreateWithoutProvaInput = {
    id?: number
    ordem: number
    enunciado: string
    tipo: string
    opcoes?: NullableJsonNullValueInput | InputJsonValue
    respostaCorreta?: string | null
    valor?: Decimal | DecimalJsLike | number | string
    habilidadeBncc?: string | null
    descricaoBncc?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type QuestaoCreateOrConnectWithoutProvaInput = {
    where: QuestaoWhereUniqueInput
    create: XOR<QuestaoCreateWithoutProvaInput, QuestaoUncheckedCreateWithoutProvaInput>
  }

  export type QuestaoCreateManyProvaInputEnvelope = {
    data: Enumerable<QuestaoCreateManyProvaInput>
    skipDuplicates?: boolean
  }

  export type AplicacaoProvaCreateWithoutProvaInput = {
    dataAplicacao: Date | string
    horaInicio?: Date | string | null
    horaTermino?: Date | string | null
    observacoes?: string | null
    dataCriacao?: Date | string
    turma: TurmaCreateNestedOneWithoutAplicacoesProvaInput
    resultados?: ResultadoCreateNestedManyWithoutAplicacaoInput
  }

  export type AplicacaoProvaUncheckedCreateWithoutProvaInput = {
    id?: number
    turmaId: number
    dataAplicacao: Date | string
    horaInicio?: Date | string | null
    horaTermino?: Date | string | null
    observacoes?: string | null
    dataCriacao?: Date | string
    resultados?: ResultadoUncheckedCreateNestedManyWithoutAplicacaoInput
  }

  export type AplicacaoProvaCreateOrConnectWithoutProvaInput = {
    where: AplicacaoProvaWhereUniqueInput
    create: XOR<AplicacaoProvaCreateWithoutProvaInput, AplicacaoProvaUncheckedCreateWithoutProvaInput>
  }

  export type AplicacaoProvaCreateManyProvaInputEnvelope = {
    data: Enumerable<AplicacaoProvaCreateManyProvaInput>
    skipDuplicates?: boolean
  }

  export type ResultadoCreateWithoutProvaInput = {
    respostas?: NullableJsonNullValueInput | InputJsonValue
    pontuacao?: Decimal | DecimalJsLike | number | string | null
    percentual?: Decimal | DecimalJsLike | number | string | null
    dataCorrecao?: Date | string | null
    corrigidoPor?: number | null
    observacoes?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    aluno: AlunoCreateNestedOneWithoutResultadosInput
    aplicacao: AplicacaoProvaCreateNestedOneWithoutResultadosInput
  }

  export type ResultadoUncheckedCreateWithoutProvaInput = {
    id?: number
    alunoId: number
    aplicacaoId: number
    respostas?: NullableJsonNullValueInput | InputJsonValue
    pontuacao?: Decimal | DecimalJsLike | number | string | null
    percentual?: Decimal | DecimalJsLike | number | string | null
    dataCorrecao?: Date | string | null
    corrigidoPor?: number | null
    observacoes?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type ResultadoCreateOrConnectWithoutProvaInput = {
    where: ResultadoWhereUniqueInput
    create: XOR<ResultadoCreateWithoutProvaInput, ResultadoUncheckedCreateWithoutProvaInput>
  }

  export type ResultadoCreateManyProvaInputEnvelope = {
    data: Enumerable<ResultadoCreateManyProvaInput>
    skipDuplicates?: boolean
  }

  export type DesempenhoHabilidadeCreateWithoutProvaInput = {
    totalQuestoes: number
    totalAcertos: number
    percentualAcertos: Decimal | DecimalJsLike | number | string
    dataAvaliacao: Date | string
    anoLetivo: string
    dataCriacao?: Date | string
    habilidade: HabilidadeBnccCreateNestedOneWithoutDesempenhoHabilidadesInput
    escola: EscolaCreateNestedOneWithoutDesempenhoHabilidadesInput
    turma?: TurmaCreateNestedOneWithoutDesempenhoHabilidadesInput
  }

  export type DesempenhoHabilidadeUncheckedCreateWithoutProvaInput = {
    id?: number
    habilidadeId: number
    escolaId: number
    turmaId?: number | null
    totalQuestoes: number
    totalAcertos: number
    percentualAcertos: Decimal | DecimalJsLike | number | string
    dataAvaliacao: Date | string
    anoLetivo: string
    dataCriacao?: Date | string
  }

  export type DesempenhoHabilidadeCreateOrConnectWithoutProvaInput = {
    where: DesempenhoHabilidadeWhereUniqueInput
    create: XOR<DesempenhoHabilidadeCreateWithoutProvaInput, DesempenhoHabilidadeUncheckedCreateWithoutProvaInput>
  }

  export type DesempenhoHabilidadeCreateManyProvaInputEnvelope = {
    data: Enumerable<DesempenhoHabilidadeCreateManyProvaInput>
    skipDuplicates?: boolean
  }

  export type QuestaoUpsertWithWhereUniqueWithoutProvaInput = {
    where: QuestaoWhereUniqueInput
    update: XOR<QuestaoUpdateWithoutProvaInput, QuestaoUncheckedUpdateWithoutProvaInput>
    create: XOR<QuestaoCreateWithoutProvaInput, QuestaoUncheckedCreateWithoutProvaInput>
  }

  export type QuestaoUpdateWithWhereUniqueWithoutProvaInput = {
    where: QuestaoWhereUniqueInput
    data: XOR<QuestaoUpdateWithoutProvaInput, QuestaoUncheckedUpdateWithoutProvaInput>
  }

  export type QuestaoUpdateManyWithWhereWithoutProvaInput = {
    where: QuestaoScalarWhereInput
    data: XOR<QuestaoUpdateManyMutationInput, QuestaoUncheckedUpdateManyWithoutQuestoesInput>
  }

  export type QuestaoScalarWhereInput = {
    AND?: Enumerable<QuestaoScalarWhereInput>
    OR?: Enumerable<QuestaoScalarWhereInput>
    NOT?: Enumerable<QuestaoScalarWhereInput>
    id?: IntFilter | number
    provaId?: IntFilter | number
    ordem?: IntFilter | number
    enunciado?: StringFilter | string
    tipo?: StringFilter | string
    opcoes?: JsonNullableFilter
    respostaCorreta?: StringNullableFilter | string | null
    valor?: DecimalFilter | Decimal | DecimalJsLike | number | string
    habilidadeBncc?: StringNullableFilter | string | null
    descricaoBncc?: StringNullableFilter | string | null
    dataCriacao?: DateTimeFilter | Date | string
    dataAtualizacao?: DateTimeFilter | Date | string
  }

  export type AplicacaoProvaUpsertWithWhereUniqueWithoutProvaInput = {
    where: AplicacaoProvaWhereUniqueInput
    update: XOR<AplicacaoProvaUpdateWithoutProvaInput, AplicacaoProvaUncheckedUpdateWithoutProvaInput>
    create: XOR<AplicacaoProvaCreateWithoutProvaInput, AplicacaoProvaUncheckedCreateWithoutProvaInput>
  }

  export type AplicacaoProvaUpdateWithWhereUniqueWithoutProvaInput = {
    where: AplicacaoProvaWhereUniqueInput
    data: XOR<AplicacaoProvaUpdateWithoutProvaInput, AplicacaoProvaUncheckedUpdateWithoutProvaInput>
  }

  export type AplicacaoProvaUpdateManyWithWhereWithoutProvaInput = {
    where: AplicacaoProvaScalarWhereInput
    data: XOR<AplicacaoProvaUpdateManyMutationInput, AplicacaoProvaUncheckedUpdateManyWithoutAplicacoesProvaInput>
  }

  export type ResultadoUpsertWithWhereUniqueWithoutProvaInput = {
    where: ResultadoWhereUniqueInput
    update: XOR<ResultadoUpdateWithoutProvaInput, ResultadoUncheckedUpdateWithoutProvaInput>
    create: XOR<ResultadoCreateWithoutProvaInput, ResultadoUncheckedCreateWithoutProvaInput>
  }

  export type ResultadoUpdateWithWhereUniqueWithoutProvaInput = {
    where: ResultadoWhereUniqueInput
    data: XOR<ResultadoUpdateWithoutProvaInput, ResultadoUncheckedUpdateWithoutProvaInput>
  }

  export type ResultadoUpdateManyWithWhereWithoutProvaInput = {
    where: ResultadoScalarWhereInput
    data: XOR<ResultadoUpdateManyMutationInput, ResultadoUncheckedUpdateManyWithoutResultadosInput>
  }

  export type DesempenhoHabilidadeUpsertWithWhereUniqueWithoutProvaInput = {
    where: DesempenhoHabilidadeWhereUniqueInput
    update: XOR<DesempenhoHabilidadeUpdateWithoutProvaInput, DesempenhoHabilidadeUncheckedUpdateWithoutProvaInput>
    create: XOR<DesempenhoHabilidadeCreateWithoutProvaInput, DesempenhoHabilidadeUncheckedCreateWithoutProvaInput>
  }

  export type DesempenhoHabilidadeUpdateWithWhereUniqueWithoutProvaInput = {
    where: DesempenhoHabilidadeWhereUniqueInput
    data: XOR<DesempenhoHabilidadeUpdateWithoutProvaInput, DesempenhoHabilidadeUncheckedUpdateWithoutProvaInput>
  }

  export type DesempenhoHabilidadeUpdateManyWithWhereWithoutProvaInput = {
    where: DesempenhoHabilidadeScalarWhereInput
    data: XOR<DesempenhoHabilidadeUpdateManyMutationInput, DesempenhoHabilidadeUncheckedUpdateManyWithoutDesempenhoHabilidadesInput>
  }

  export type ProvaCreateWithoutQuestoesInput = {
    nome: string
    descricao?: string | null
    dataAplicacao?: Date | string | null
    tipo: string
    disciplina?: string | null
    serie?: number | null
    criadoPor?: number | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    aplicacoesProva?: AplicacaoProvaCreateNestedManyWithoutProvaInput
    resultados?: ResultadoCreateNestedManyWithoutProvaInput
    desempenhoHabilidades?: DesempenhoHabilidadeCreateNestedManyWithoutProvaInput
  }

  export type ProvaUncheckedCreateWithoutQuestoesInput = {
    id?: number
    nome: string
    descricao?: string | null
    dataAplicacao?: Date | string | null
    tipo: string
    disciplina?: string | null
    serie?: number | null
    criadoPor?: number | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    aplicacoesProva?: AplicacaoProvaUncheckedCreateNestedManyWithoutProvaInput
    resultados?: ResultadoUncheckedCreateNestedManyWithoutProvaInput
    desempenhoHabilidades?: DesempenhoHabilidadeUncheckedCreateNestedManyWithoutProvaInput
  }

  export type ProvaCreateOrConnectWithoutQuestoesInput = {
    where: ProvaWhereUniqueInput
    create: XOR<ProvaCreateWithoutQuestoesInput, ProvaUncheckedCreateWithoutQuestoesInput>
  }

  export type ProvaUpsertWithoutQuestoesInput = {
    update: XOR<ProvaUpdateWithoutQuestoesInput, ProvaUncheckedUpdateWithoutQuestoesInput>
    create: XOR<ProvaCreateWithoutQuestoesInput, ProvaUncheckedCreateWithoutQuestoesInput>
  }

  export type ProvaUpdateWithoutQuestoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataAplicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    disciplina?: NullableStringFieldUpdateOperationsInput | string | null
    serie?: NullableIntFieldUpdateOperationsInput | number | null
    criadoPor?: NullableIntFieldUpdateOperationsInput | number | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    aplicacoesProva?: AplicacaoProvaUpdateManyWithoutProvaNestedInput
    resultados?: ResultadoUpdateManyWithoutProvaNestedInput
    desempenhoHabilidades?: DesempenhoHabilidadeUpdateManyWithoutProvaNestedInput
  }

  export type ProvaUncheckedUpdateWithoutQuestoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataAplicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    disciplina?: NullableStringFieldUpdateOperationsInput | string | null
    serie?: NullableIntFieldUpdateOperationsInput | number | null
    criadoPor?: NullableIntFieldUpdateOperationsInput | number | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    aplicacoesProva?: AplicacaoProvaUncheckedUpdateManyWithoutProvaNestedInput
    resultados?: ResultadoUncheckedUpdateManyWithoutProvaNestedInput
    desempenhoHabilidades?: DesempenhoHabilidadeUncheckedUpdateManyWithoutProvaNestedInput
  }

  export type ProvaCreateWithoutAplicacoesProvaInput = {
    nome: string
    descricao?: string | null
    dataAplicacao?: Date | string | null
    tipo: string
    disciplina?: string | null
    serie?: number | null
    criadoPor?: number | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    questoes?: QuestaoCreateNestedManyWithoutProvaInput
    resultados?: ResultadoCreateNestedManyWithoutProvaInput
    desempenhoHabilidades?: DesempenhoHabilidadeCreateNestedManyWithoutProvaInput
  }

  export type ProvaUncheckedCreateWithoutAplicacoesProvaInput = {
    id?: number
    nome: string
    descricao?: string | null
    dataAplicacao?: Date | string | null
    tipo: string
    disciplina?: string | null
    serie?: number | null
    criadoPor?: number | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    questoes?: QuestaoUncheckedCreateNestedManyWithoutProvaInput
    resultados?: ResultadoUncheckedCreateNestedManyWithoutProvaInput
    desempenhoHabilidades?: DesempenhoHabilidadeUncheckedCreateNestedManyWithoutProvaInput
  }

  export type ProvaCreateOrConnectWithoutAplicacoesProvaInput = {
    where: ProvaWhereUniqueInput
    create: XOR<ProvaCreateWithoutAplicacoesProvaInput, ProvaUncheckedCreateWithoutAplicacoesProvaInput>
  }

  export type TurmaCreateWithoutAplicacoesProvaInput = {
    nome: string
    serie: number
    turno: string
    anoLetivo: string
    professorResponsavel?: string | null
    sala?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    escola: EscolaCreateNestedOneWithoutTurmasInput
    alunos?: AlunoCreateNestedManyWithoutTurmaInput
    desempenhoHabilidades?: DesempenhoHabilidadeCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUncheckedCreateWithoutAplicacoesProvaInput = {
    id?: number
    nome: string
    serie: number
    turno: string
    anoLetivo: string
    escolaId: number
    professorResponsavel?: string | null
    sala?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    alunos?: AlunoUncheckedCreateNestedManyWithoutTurmaInput
    desempenhoHabilidades?: DesempenhoHabilidadeUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type TurmaCreateOrConnectWithoutAplicacoesProvaInput = {
    where: TurmaWhereUniqueInput
    create: XOR<TurmaCreateWithoutAplicacoesProvaInput, TurmaUncheckedCreateWithoutAplicacoesProvaInput>
  }

  export type ResultadoCreateWithoutAplicacaoInput = {
    respostas?: NullableJsonNullValueInput | InputJsonValue
    pontuacao?: Decimal | DecimalJsLike | number | string | null
    percentual?: Decimal | DecimalJsLike | number | string | null
    dataCorrecao?: Date | string | null
    corrigidoPor?: number | null
    observacoes?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    aluno: AlunoCreateNestedOneWithoutResultadosInput
    prova: ProvaCreateNestedOneWithoutResultadosInput
  }

  export type ResultadoUncheckedCreateWithoutAplicacaoInput = {
    id?: number
    alunoId: number
    provaId: number
    respostas?: NullableJsonNullValueInput | InputJsonValue
    pontuacao?: Decimal | DecimalJsLike | number | string | null
    percentual?: Decimal | DecimalJsLike | number | string | null
    dataCorrecao?: Date | string | null
    corrigidoPor?: number | null
    observacoes?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type ResultadoCreateOrConnectWithoutAplicacaoInput = {
    where: ResultadoWhereUniqueInput
    create: XOR<ResultadoCreateWithoutAplicacaoInput, ResultadoUncheckedCreateWithoutAplicacaoInput>
  }

  export type ResultadoCreateManyAplicacaoInputEnvelope = {
    data: Enumerable<ResultadoCreateManyAplicacaoInput>
    skipDuplicates?: boolean
  }

  export type ProvaUpsertWithoutAplicacoesProvaInput = {
    update: XOR<ProvaUpdateWithoutAplicacoesProvaInput, ProvaUncheckedUpdateWithoutAplicacoesProvaInput>
    create: XOR<ProvaCreateWithoutAplicacoesProvaInput, ProvaUncheckedCreateWithoutAplicacoesProvaInput>
  }

  export type ProvaUpdateWithoutAplicacoesProvaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataAplicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    disciplina?: NullableStringFieldUpdateOperationsInput | string | null
    serie?: NullableIntFieldUpdateOperationsInput | number | null
    criadoPor?: NullableIntFieldUpdateOperationsInput | number | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    questoes?: QuestaoUpdateManyWithoutProvaNestedInput
    resultados?: ResultadoUpdateManyWithoutProvaNestedInput
    desempenhoHabilidades?: DesempenhoHabilidadeUpdateManyWithoutProvaNestedInput
  }

  export type ProvaUncheckedUpdateWithoutAplicacoesProvaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataAplicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    disciplina?: NullableStringFieldUpdateOperationsInput | string | null
    serie?: NullableIntFieldUpdateOperationsInput | number | null
    criadoPor?: NullableIntFieldUpdateOperationsInput | number | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    questoes?: QuestaoUncheckedUpdateManyWithoutProvaNestedInput
    resultados?: ResultadoUncheckedUpdateManyWithoutProvaNestedInput
    desempenhoHabilidades?: DesempenhoHabilidadeUncheckedUpdateManyWithoutProvaNestedInput
  }

  export type TurmaUpsertWithoutAplicacoesProvaInput = {
    update: XOR<TurmaUpdateWithoutAplicacoesProvaInput, TurmaUncheckedUpdateWithoutAplicacoesProvaInput>
    create: XOR<TurmaCreateWithoutAplicacoesProvaInput, TurmaUncheckedCreateWithoutAplicacoesProvaInput>
  }

  export type TurmaUpdateWithoutAplicacoesProvaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    serie?: IntFieldUpdateOperationsInput | number
    turno?: StringFieldUpdateOperationsInput | string
    anoLetivo?: StringFieldUpdateOperationsInput | string
    professorResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    sala?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    escola?: EscolaUpdateOneRequiredWithoutTurmasNestedInput
    alunos?: AlunoUpdateManyWithoutTurmaNestedInput
    desempenhoHabilidades?: DesempenhoHabilidadeUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateWithoutAplicacoesProvaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    serie?: IntFieldUpdateOperationsInput | number
    turno?: StringFieldUpdateOperationsInput | string
    anoLetivo?: StringFieldUpdateOperationsInput | string
    escolaId?: IntFieldUpdateOperationsInput | number
    professorResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    sala?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    alunos?: AlunoUncheckedUpdateManyWithoutTurmaNestedInput
    desempenhoHabilidades?: DesempenhoHabilidadeUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type ResultadoUpsertWithWhereUniqueWithoutAplicacaoInput = {
    where: ResultadoWhereUniqueInput
    update: XOR<ResultadoUpdateWithoutAplicacaoInput, ResultadoUncheckedUpdateWithoutAplicacaoInput>
    create: XOR<ResultadoCreateWithoutAplicacaoInput, ResultadoUncheckedCreateWithoutAplicacaoInput>
  }

  export type ResultadoUpdateWithWhereUniqueWithoutAplicacaoInput = {
    where: ResultadoWhereUniqueInput
    data: XOR<ResultadoUpdateWithoutAplicacaoInput, ResultadoUncheckedUpdateWithoutAplicacaoInput>
  }

  export type ResultadoUpdateManyWithWhereWithoutAplicacaoInput = {
    where: ResultadoScalarWhereInput
    data: XOR<ResultadoUpdateManyMutationInput, ResultadoUncheckedUpdateManyWithoutResultadosInput>
  }

  export type AlunoCreateWithoutResultadosInput = {
    nome: string
    matricula: string
    dataNascimento?: Date | string | null
    genero?: string | null
    responsavel?: string | null
    telefoneResponsavel?: string | null
    emailResponsavel?: string | null
    fotoUrl?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    turma?: TurmaCreateNestedOneWithoutAlunosInput
    escola: EscolaCreateNestedOneWithoutAlunosInput
  }

  export type AlunoUncheckedCreateWithoutResultadosInput = {
    id?: number
    nome: string
    matricula: string
    dataNascimento?: Date | string | null
    genero?: string | null
    responsavel?: string | null
    telefoneResponsavel?: string | null
    emailResponsavel?: string | null
    turmaId?: number | null
    escolaId: number
    fotoUrl?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type AlunoCreateOrConnectWithoutResultadosInput = {
    where: AlunoWhereUniqueInput
    create: XOR<AlunoCreateWithoutResultadosInput, AlunoUncheckedCreateWithoutResultadosInput>
  }

  export type ProvaCreateWithoutResultadosInput = {
    nome: string
    descricao?: string | null
    dataAplicacao?: Date | string | null
    tipo: string
    disciplina?: string | null
    serie?: number | null
    criadoPor?: number | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    questoes?: QuestaoCreateNestedManyWithoutProvaInput
    aplicacoesProva?: AplicacaoProvaCreateNestedManyWithoutProvaInput
    desempenhoHabilidades?: DesempenhoHabilidadeCreateNestedManyWithoutProvaInput
  }

  export type ProvaUncheckedCreateWithoutResultadosInput = {
    id?: number
    nome: string
    descricao?: string | null
    dataAplicacao?: Date | string | null
    tipo: string
    disciplina?: string | null
    serie?: number | null
    criadoPor?: number | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    questoes?: QuestaoUncheckedCreateNestedManyWithoutProvaInput
    aplicacoesProva?: AplicacaoProvaUncheckedCreateNestedManyWithoutProvaInput
    desempenhoHabilidades?: DesempenhoHabilidadeUncheckedCreateNestedManyWithoutProvaInput
  }

  export type ProvaCreateOrConnectWithoutResultadosInput = {
    where: ProvaWhereUniqueInput
    create: XOR<ProvaCreateWithoutResultadosInput, ProvaUncheckedCreateWithoutResultadosInput>
  }

  export type AplicacaoProvaCreateWithoutResultadosInput = {
    dataAplicacao: Date | string
    horaInicio?: Date | string | null
    horaTermino?: Date | string | null
    observacoes?: string | null
    dataCriacao?: Date | string
    prova: ProvaCreateNestedOneWithoutAplicacoesProvaInput
    turma: TurmaCreateNestedOneWithoutAplicacoesProvaInput
  }

  export type AplicacaoProvaUncheckedCreateWithoutResultadosInput = {
    id?: number
    provaId: number
    turmaId: number
    dataAplicacao: Date | string
    horaInicio?: Date | string | null
    horaTermino?: Date | string | null
    observacoes?: string | null
    dataCriacao?: Date | string
  }

  export type AplicacaoProvaCreateOrConnectWithoutResultadosInput = {
    where: AplicacaoProvaWhereUniqueInput
    create: XOR<AplicacaoProvaCreateWithoutResultadosInput, AplicacaoProvaUncheckedCreateWithoutResultadosInput>
  }

  export type AlunoUpsertWithoutResultadosInput = {
    update: XOR<AlunoUpdateWithoutResultadosInput, AlunoUncheckedUpdateWithoutResultadosInput>
    create: XOR<AlunoCreateWithoutResultadosInput, AlunoUncheckedCreateWithoutResultadosInput>
  }

  export type AlunoUpdateWithoutResultadosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    emailResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    turma?: TurmaUpdateOneWithoutAlunosNestedInput
    escola?: EscolaUpdateOneRequiredWithoutAlunosNestedInput
  }

  export type AlunoUncheckedUpdateWithoutResultadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    emailResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    turmaId?: NullableIntFieldUpdateOperationsInput | number | null
    escolaId?: IntFieldUpdateOperationsInput | number
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProvaUpsertWithoutResultadosInput = {
    update: XOR<ProvaUpdateWithoutResultadosInput, ProvaUncheckedUpdateWithoutResultadosInput>
    create: XOR<ProvaCreateWithoutResultadosInput, ProvaUncheckedCreateWithoutResultadosInput>
  }

  export type ProvaUpdateWithoutResultadosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataAplicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    disciplina?: NullableStringFieldUpdateOperationsInput | string | null
    serie?: NullableIntFieldUpdateOperationsInput | number | null
    criadoPor?: NullableIntFieldUpdateOperationsInput | number | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    questoes?: QuestaoUpdateManyWithoutProvaNestedInput
    aplicacoesProva?: AplicacaoProvaUpdateManyWithoutProvaNestedInput
    desempenhoHabilidades?: DesempenhoHabilidadeUpdateManyWithoutProvaNestedInput
  }

  export type ProvaUncheckedUpdateWithoutResultadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataAplicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    disciplina?: NullableStringFieldUpdateOperationsInput | string | null
    serie?: NullableIntFieldUpdateOperationsInput | number | null
    criadoPor?: NullableIntFieldUpdateOperationsInput | number | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    questoes?: QuestaoUncheckedUpdateManyWithoutProvaNestedInput
    aplicacoesProva?: AplicacaoProvaUncheckedUpdateManyWithoutProvaNestedInput
    desempenhoHabilidades?: DesempenhoHabilidadeUncheckedUpdateManyWithoutProvaNestedInput
  }

  export type AplicacaoProvaUpsertWithoutResultadosInput = {
    update: XOR<AplicacaoProvaUpdateWithoutResultadosInput, AplicacaoProvaUncheckedUpdateWithoutResultadosInput>
    create: XOR<AplicacaoProvaCreateWithoutResultadosInput, AplicacaoProvaUncheckedCreateWithoutResultadosInput>
  }

  export type AplicacaoProvaUpdateWithoutResultadosInput = {
    dataAplicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaTermino?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    prova?: ProvaUpdateOneRequiredWithoutAplicacoesProvaNestedInput
    turma?: TurmaUpdateOneRequiredWithoutAplicacoesProvaNestedInput
  }

  export type AplicacaoProvaUncheckedUpdateWithoutResultadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    provaId?: IntFieldUpdateOperationsInput | number
    turmaId?: IntFieldUpdateOperationsInput | number
    dataAplicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaTermino?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EscolaCreateWithoutUsuariosInput = {
    nome: string
    regiao?: string | null
    grupo?: string | null
    endereco?: string | null
    telefone?: string | null
    email?: string | null
    diretor?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    turmas?: TurmaCreateNestedManyWithoutEscolaInput
    alunos?: AlunoCreateNestedManyWithoutEscolaInput
    desempenhoHabilidades?: DesempenhoHabilidadeCreateNestedManyWithoutEscolaInput
  }

  export type EscolaUncheckedCreateWithoutUsuariosInput = {
    id?: number
    nome: string
    regiao?: string | null
    grupo?: string | null
    endereco?: string | null
    telefone?: string | null
    email?: string | null
    diretor?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    turmas?: TurmaUncheckedCreateNestedManyWithoutEscolaInput
    alunos?: AlunoUncheckedCreateNestedManyWithoutEscolaInput
    desempenhoHabilidades?: DesempenhoHabilidadeUncheckedCreateNestedManyWithoutEscolaInput
  }

  export type EscolaCreateOrConnectWithoutUsuariosInput = {
    where: EscolaWhereUniqueInput
    create: XOR<EscolaCreateWithoutUsuariosInput, EscolaUncheckedCreateWithoutUsuariosInput>
  }

  export type EscolaUpsertWithoutUsuariosInput = {
    update: XOR<EscolaUpdateWithoutUsuariosInput, EscolaUncheckedUpdateWithoutUsuariosInput>
    create: XOR<EscolaCreateWithoutUsuariosInput, EscolaUncheckedCreateWithoutUsuariosInput>
  }

  export type EscolaUpdateWithoutUsuariosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    regiao?: NullableStringFieldUpdateOperationsInput | string | null
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    diretor?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    turmas?: TurmaUpdateManyWithoutEscolaNestedInput
    alunos?: AlunoUpdateManyWithoutEscolaNestedInput
    desempenhoHabilidades?: DesempenhoHabilidadeUpdateManyWithoutEscolaNestedInput
  }

  export type EscolaUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    regiao?: NullableStringFieldUpdateOperationsInput | string | null
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    diretor?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    turmas?: TurmaUncheckedUpdateManyWithoutEscolaNestedInput
    alunos?: AlunoUncheckedUpdateManyWithoutEscolaNestedInput
    desempenhoHabilidades?: DesempenhoHabilidadeUncheckedUpdateManyWithoutEscolaNestedInput
  }

  export type DesempenhoHabilidadeCreateWithoutHabilidadeInput = {
    totalQuestoes: number
    totalAcertos: number
    percentualAcertos: Decimal | DecimalJsLike | number | string
    dataAvaliacao: Date | string
    anoLetivo: string
    dataCriacao?: Date | string
    escola: EscolaCreateNestedOneWithoutDesempenhoHabilidadesInput
    turma?: TurmaCreateNestedOneWithoutDesempenhoHabilidadesInput
    prova?: ProvaCreateNestedOneWithoutDesempenhoHabilidadesInput
  }

  export type DesempenhoHabilidadeUncheckedCreateWithoutHabilidadeInput = {
    id?: number
    escolaId: number
    turmaId?: number | null
    provaId?: number | null
    totalQuestoes: number
    totalAcertos: number
    percentualAcertos: Decimal | DecimalJsLike | number | string
    dataAvaliacao: Date | string
    anoLetivo: string
    dataCriacao?: Date | string
  }

  export type DesempenhoHabilidadeCreateOrConnectWithoutHabilidadeInput = {
    where: DesempenhoHabilidadeWhereUniqueInput
    create: XOR<DesempenhoHabilidadeCreateWithoutHabilidadeInput, DesempenhoHabilidadeUncheckedCreateWithoutHabilidadeInput>
  }

  export type DesempenhoHabilidadeCreateManyHabilidadeInputEnvelope = {
    data: Enumerable<DesempenhoHabilidadeCreateManyHabilidadeInput>
    skipDuplicates?: boolean
  }

  export type DesempenhoHabilidadeUpsertWithWhereUniqueWithoutHabilidadeInput = {
    where: DesempenhoHabilidadeWhereUniqueInput
    update: XOR<DesempenhoHabilidadeUpdateWithoutHabilidadeInput, DesempenhoHabilidadeUncheckedUpdateWithoutHabilidadeInput>
    create: XOR<DesempenhoHabilidadeCreateWithoutHabilidadeInput, DesempenhoHabilidadeUncheckedCreateWithoutHabilidadeInput>
  }

  export type DesempenhoHabilidadeUpdateWithWhereUniqueWithoutHabilidadeInput = {
    where: DesempenhoHabilidadeWhereUniqueInput
    data: XOR<DesempenhoHabilidadeUpdateWithoutHabilidadeInput, DesempenhoHabilidadeUncheckedUpdateWithoutHabilidadeInput>
  }

  export type DesempenhoHabilidadeUpdateManyWithWhereWithoutHabilidadeInput = {
    where: DesempenhoHabilidadeScalarWhereInput
    data: XOR<DesempenhoHabilidadeUpdateManyMutationInput, DesempenhoHabilidadeUncheckedUpdateManyWithoutDesempenhoHabilidadesInput>
  }

  export type HabilidadeBnccCreateWithoutDesempenhoHabilidadesInput = {
    codigo: string
    componente: string
    ano: string
    descricao: string
    dataCriacao?: Date | string
  }

  export type HabilidadeBnccUncheckedCreateWithoutDesempenhoHabilidadesInput = {
    id?: number
    codigo: string
    componente: string
    ano: string
    descricao: string
    dataCriacao?: Date | string
  }

  export type HabilidadeBnccCreateOrConnectWithoutDesempenhoHabilidadesInput = {
    where: HabilidadeBnccWhereUniqueInput
    create: XOR<HabilidadeBnccCreateWithoutDesempenhoHabilidadesInput, HabilidadeBnccUncheckedCreateWithoutDesempenhoHabilidadesInput>
  }

  export type EscolaCreateWithoutDesempenhoHabilidadesInput = {
    nome: string
    regiao?: string | null
    grupo?: string | null
    endereco?: string | null
    telefone?: string | null
    email?: string | null
    diretor?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    turmas?: TurmaCreateNestedManyWithoutEscolaInput
    alunos?: AlunoCreateNestedManyWithoutEscolaInput
    usuarios?: UsuarioCreateNestedManyWithoutEscolaInput
  }

  export type EscolaUncheckedCreateWithoutDesempenhoHabilidadesInput = {
    id?: number
    nome: string
    regiao?: string | null
    grupo?: string | null
    endereco?: string | null
    telefone?: string | null
    email?: string | null
    diretor?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    turmas?: TurmaUncheckedCreateNestedManyWithoutEscolaInput
    alunos?: AlunoUncheckedCreateNestedManyWithoutEscolaInput
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutEscolaInput
  }

  export type EscolaCreateOrConnectWithoutDesempenhoHabilidadesInput = {
    where: EscolaWhereUniqueInput
    create: XOR<EscolaCreateWithoutDesempenhoHabilidadesInput, EscolaUncheckedCreateWithoutDesempenhoHabilidadesInput>
  }

  export type TurmaCreateWithoutDesempenhoHabilidadesInput = {
    nome: string
    serie: number
    turno: string
    anoLetivo: string
    professorResponsavel?: string | null
    sala?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    escola: EscolaCreateNestedOneWithoutTurmasInput
    alunos?: AlunoCreateNestedManyWithoutTurmaInput
    aplicacoesProva?: AplicacaoProvaCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUncheckedCreateWithoutDesempenhoHabilidadesInput = {
    id?: number
    nome: string
    serie: number
    turno: string
    anoLetivo: string
    escolaId: number
    professorResponsavel?: string | null
    sala?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    alunos?: AlunoUncheckedCreateNestedManyWithoutTurmaInput
    aplicacoesProva?: AplicacaoProvaUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type TurmaCreateOrConnectWithoutDesempenhoHabilidadesInput = {
    where: TurmaWhereUniqueInput
    create: XOR<TurmaCreateWithoutDesempenhoHabilidadesInput, TurmaUncheckedCreateWithoutDesempenhoHabilidadesInput>
  }

  export type ProvaCreateWithoutDesempenhoHabilidadesInput = {
    nome: string
    descricao?: string | null
    dataAplicacao?: Date | string | null
    tipo: string
    disciplina?: string | null
    serie?: number | null
    criadoPor?: number | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    questoes?: QuestaoCreateNestedManyWithoutProvaInput
    aplicacoesProva?: AplicacaoProvaCreateNestedManyWithoutProvaInput
    resultados?: ResultadoCreateNestedManyWithoutProvaInput
  }

  export type ProvaUncheckedCreateWithoutDesempenhoHabilidadesInput = {
    id?: number
    nome: string
    descricao?: string | null
    dataAplicacao?: Date | string | null
    tipo: string
    disciplina?: string | null
    serie?: number | null
    criadoPor?: number | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    questoes?: QuestaoUncheckedCreateNestedManyWithoutProvaInput
    aplicacoesProva?: AplicacaoProvaUncheckedCreateNestedManyWithoutProvaInput
    resultados?: ResultadoUncheckedCreateNestedManyWithoutProvaInput
  }

  export type ProvaCreateOrConnectWithoutDesempenhoHabilidadesInput = {
    where: ProvaWhereUniqueInput
    create: XOR<ProvaCreateWithoutDesempenhoHabilidadesInput, ProvaUncheckedCreateWithoutDesempenhoHabilidadesInput>
  }

  export type HabilidadeBnccUpsertWithoutDesempenhoHabilidadesInput = {
    update: XOR<HabilidadeBnccUpdateWithoutDesempenhoHabilidadesInput, HabilidadeBnccUncheckedUpdateWithoutDesempenhoHabilidadesInput>
    create: XOR<HabilidadeBnccCreateWithoutDesempenhoHabilidadesInput, HabilidadeBnccUncheckedCreateWithoutDesempenhoHabilidadesInput>
  }

  export type HabilidadeBnccUpdateWithoutDesempenhoHabilidadesInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    componente?: StringFieldUpdateOperationsInput | string
    ano?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabilidadeBnccUncheckedUpdateWithoutDesempenhoHabilidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    componente?: StringFieldUpdateOperationsInput | string
    ano?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EscolaUpsertWithoutDesempenhoHabilidadesInput = {
    update: XOR<EscolaUpdateWithoutDesempenhoHabilidadesInput, EscolaUncheckedUpdateWithoutDesempenhoHabilidadesInput>
    create: XOR<EscolaCreateWithoutDesempenhoHabilidadesInput, EscolaUncheckedCreateWithoutDesempenhoHabilidadesInput>
  }

  export type EscolaUpdateWithoutDesempenhoHabilidadesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    regiao?: NullableStringFieldUpdateOperationsInput | string | null
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    diretor?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    turmas?: TurmaUpdateManyWithoutEscolaNestedInput
    alunos?: AlunoUpdateManyWithoutEscolaNestedInput
    usuarios?: UsuarioUpdateManyWithoutEscolaNestedInput
  }

  export type EscolaUncheckedUpdateWithoutDesempenhoHabilidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    regiao?: NullableStringFieldUpdateOperationsInput | string | null
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    diretor?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    turmas?: TurmaUncheckedUpdateManyWithoutEscolaNestedInput
    alunos?: AlunoUncheckedUpdateManyWithoutEscolaNestedInput
    usuarios?: UsuarioUncheckedUpdateManyWithoutEscolaNestedInput
  }

  export type TurmaUpsertWithoutDesempenhoHabilidadesInput = {
    update: XOR<TurmaUpdateWithoutDesempenhoHabilidadesInput, TurmaUncheckedUpdateWithoutDesempenhoHabilidadesInput>
    create: XOR<TurmaCreateWithoutDesempenhoHabilidadesInput, TurmaUncheckedCreateWithoutDesempenhoHabilidadesInput>
  }

  export type TurmaUpdateWithoutDesempenhoHabilidadesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    serie?: IntFieldUpdateOperationsInput | number
    turno?: StringFieldUpdateOperationsInput | string
    anoLetivo?: StringFieldUpdateOperationsInput | string
    professorResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    sala?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    escola?: EscolaUpdateOneRequiredWithoutTurmasNestedInput
    alunos?: AlunoUpdateManyWithoutTurmaNestedInput
    aplicacoesProva?: AplicacaoProvaUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateWithoutDesempenhoHabilidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    serie?: IntFieldUpdateOperationsInput | number
    turno?: StringFieldUpdateOperationsInput | string
    anoLetivo?: StringFieldUpdateOperationsInput | string
    escolaId?: IntFieldUpdateOperationsInput | number
    professorResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    sala?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    alunos?: AlunoUncheckedUpdateManyWithoutTurmaNestedInput
    aplicacoesProva?: AplicacaoProvaUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type ProvaUpsertWithoutDesempenhoHabilidadesInput = {
    update: XOR<ProvaUpdateWithoutDesempenhoHabilidadesInput, ProvaUncheckedUpdateWithoutDesempenhoHabilidadesInput>
    create: XOR<ProvaCreateWithoutDesempenhoHabilidadesInput, ProvaUncheckedCreateWithoutDesempenhoHabilidadesInput>
  }

  export type ProvaUpdateWithoutDesempenhoHabilidadesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataAplicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    disciplina?: NullableStringFieldUpdateOperationsInput | string | null
    serie?: NullableIntFieldUpdateOperationsInput | number | null
    criadoPor?: NullableIntFieldUpdateOperationsInput | number | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    questoes?: QuestaoUpdateManyWithoutProvaNestedInput
    aplicacoesProva?: AplicacaoProvaUpdateManyWithoutProvaNestedInput
    resultados?: ResultadoUpdateManyWithoutProvaNestedInput
  }

  export type ProvaUncheckedUpdateWithoutDesempenhoHabilidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataAplicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    disciplina?: NullableStringFieldUpdateOperationsInput | string | null
    serie?: NullableIntFieldUpdateOperationsInput | number | null
    criadoPor?: NullableIntFieldUpdateOperationsInput | number | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    questoes?: QuestaoUncheckedUpdateManyWithoutProvaNestedInput
    aplicacoesProva?: AplicacaoProvaUncheckedUpdateManyWithoutProvaNestedInput
    resultados?: ResultadoUncheckedUpdateManyWithoutProvaNestedInput
  }

  export type TurmaCreateManyEscolaInput = {
    id?: number
    nome: string
    serie: number
    turno: string
    anoLetivo: string
    professorResponsavel?: string | null
    sala?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type AlunoCreateManyEscolaInput = {
    id?: number
    nome: string
    matricula: string
    dataNascimento?: Date | string | null
    genero?: string | null
    responsavel?: string | null
    telefoneResponsavel?: string | null
    emailResponsavel?: string | null
    turmaId?: number | null
    fotoUrl?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type UsuarioCreateManyEscolaInput = {
    id?: number
    nome: string
    email: string
    senha: string
    tipo: string
    fotoUrl?: string | null
    ultimoAcesso?: Date | string | null
    ativo?: boolean
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type DesempenhoHabilidadeCreateManyEscolaInput = {
    id?: number
    habilidadeId: number
    turmaId?: number | null
    provaId?: number | null
    totalQuestoes: number
    totalAcertos: number
    percentualAcertos: Decimal | DecimalJsLike | number | string
    dataAvaliacao: Date | string
    anoLetivo: string
    dataCriacao?: Date | string
  }

  export type TurmaUpdateWithoutEscolaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    serie?: IntFieldUpdateOperationsInput | number
    turno?: StringFieldUpdateOperationsInput | string
    anoLetivo?: StringFieldUpdateOperationsInput | string
    professorResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    sala?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    alunos?: AlunoUpdateManyWithoutTurmaNestedInput
    aplicacoesProva?: AplicacaoProvaUpdateManyWithoutTurmaNestedInput
    desempenhoHabilidades?: DesempenhoHabilidadeUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateWithoutEscolaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    serie?: IntFieldUpdateOperationsInput | number
    turno?: StringFieldUpdateOperationsInput | string
    anoLetivo?: StringFieldUpdateOperationsInput | string
    professorResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    sala?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    alunos?: AlunoUncheckedUpdateManyWithoutTurmaNestedInput
    aplicacoesProva?: AplicacaoProvaUncheckedUpdateManyWithoutTurmaNestedInput
    desempenhoHabilidades?: DesempenhoHabilidadeUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateManyWithoutTurmasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    serie?: IntFieldUpdateOperationsInput | number
    turno?: StringFieldUpdateOperationsInput | string
    anoLetivo?: StringFieldUpdateOperationsInput | string
    professorResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    sala?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlunoUpdateWithoutEscolaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    emailResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    turma?: TurmaUpdateOneWithoutAlunosNestedInput
    resultados?: ResultadoUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateWithoutEscolaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    emailResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    turmaId?: NullableIntFieldUpdateOperationsInput | number | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    resultados?: ResultadoUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateManyWithoutAlunosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    emailResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    turmaId?: NullableIntFieldUpdateOperationsInput | number | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUpdateWithoutEscolaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ultimoAcesso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateWithoutEscolaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ultimoAcesso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ultimoAcesso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DesempenhoHabilidadeUpdateWithoutEscolaInput = {
    totalQuestoes?: IntFieldUpdateOperationsInput | number
    totalAcertos?: IntFieldUpdateOperationsInput | number
    percentualAcertos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAvaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
    anoLetivo?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    habilidade?: HabilidadeBnccUpdateOneRequiredWithoutDesempenhoHabilidadesNestedInput
    turma?: TurmaUpdateOneWithoutDesempenhoHabilidadesNestedInput
    prova?: ProvaUpdateOneWithoutDesempenhoHabilidadesNestedInput
  }

  export type DesempenhoHabilidadeUncheckedUpdateWithoutEscolaInput = {
    id?: IntFieldUpdateOperationsInput | number
    habilidadeId?: IntFieldUpdateOperationsInput | number
    turmaId?: NullableIntFieldUpdateOperationsInput | number | null
    provaId?: NullableIntFieldUpdateOperationsInput | number | null
    totalQuestoes?: IntFieldUpdateOperationsInput | number
    totalAcertos?: IntFieldUpdateOperationsInput | number
    percentualAcertos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAvaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
    anoLetivo?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DesempenhoHabilidadeUncheckedUpdateManyWithoutDesempenhoHabilidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    habilidadeId?: IntFieldUpdateOperationsInput | number
    turmaId?: NullableIntFieldUpdateOperationsInput | number | null
    provaId?: NullableIntFieldUpdateOperationsInput | number | null
    totalQuestoes?: IntFieldUpdateOperationsInput | number
    totalAcertos?: IntFieldUpdateOperationsInput | number
    percentualAcertos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAvaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
    anoLetivo?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlunoCreateManyTurmaInput = {
    id?: number
    nome: string
    matricula: string
    dataNascimento?: Date | string | null
    genero?: string | null
    responsavel?: string | null
    telefoneResponsavel?: string | null
    emailResponsavel?: string | null
    escolaId: number
    fotoUrl?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type AplicacaoProvaCreateManyTurmaInput = {
    id?: number
    provaId: number
    dataAplicacao: Date | string
    horaInicio?: Date | string | null
    horaTermino?: Date | string | null
    observacoes?: string | null
    dataCriacao?: Date | string
  }

  export type DesempenhoHabilidadeCreateManyTurmaInput = {
    id?: number
    habilidadeId: number
    escolaId: number
    provaId?: number | null
    totalQuestoes: number
    totalAcertos: number
    percentualAcertos: Decimal | DecimalJsLike | number | string
    dataAvaliacao: Date | string
    anoLetivo: string
    dataCriacao?: Date | string
  }

  export type AlunoUpdateWithoutTurmaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    emailResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    escola?: EscolaUpdateOneRequiredWithoutAlunosNestedInput
    resultados?: ResultadoUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateWithoutTurmaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    emailResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    escolaId?: IntFieldUpdateOperationsInput | number
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    resultados?: ResultadoUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type AplicacaoProvaUpdateWithoutTurmaInput = {
    dataAplicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaTermino?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    prova?: ProvaUpdateOneRequiredWithoutAplicacoesProvaNestedInput
    resultados?: ResultadoUpdateManyWithoutAplicacaoNestedInput
  }

  export type AplicacaoProvaUncheckedUpdateWithoutTurmaInput = {
    id?: IntFieldUpdateOperationsInput | number
    provaId?: IntFieldUpdateOperationsInput | number
    dataAplicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaTermino?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    resultados?: ResultadoUncheckedUpdateManyWithoutAplicacaoNestedInput
  }

  export type AplicacaoProvaUncheckedUpdateManyWithoutAplicacoesProvaInput = {
    id?: IntFieldUpdateOperationsInput | number
    provaId?: IntFieldUpdateOperationsInput | number
    dataAplicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaTermino?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DesempenhoHabilidadeUpdateWithoutTurmaInput = {
    totalQuestoes?: IntFieldUpdateOperationsInput | number
    totalAcertos?: IntFieldUpdateOperationsInput | number
    percentualAcertos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAvaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
    anoLetivo?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    habilidade?: HabilidadeBnccUpdateOneRequiredWithoutDesempenhoHabilidadesNestedInput
    escola?: EscolaUpdateOneRequiredWithoutDesempenhoHabilidadesNestedInput
    prova?: ProvaUpdateOneWithoutDesempenhoHabilidadesNestedInput
  }

  export type DesempenhoHabilidadeUncheckedUpdateWithoutTurmaInput = {
    id?: IntFieldUpdateOperationsInput | number
    habilidadeId?: IntFieldUpdateOperationsInput | number
    escolaId?: IntFieldUpdateOperationsInput | number
    provaId?: NullableIntFieldUpdateOperationsInput | number | null
    totalQuestoes?: IntFieldUpdateOperationsInput | number
    totalAcertos?: IntFieldUpdateOperationsInput | number
    percentualAcertos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAvaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
    anoLetivo?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultadoCreateManyAlunoInput = {
    id?: number
    provaId: number
    aplicacaoId: number
    respostas?: NullableJsonNullValueInput | InputJsonValue
    pontuacao?: Decimal | DecimalJsLike | number | string | null
    percentual?: Decimal | DecimalJsLike | number | string | null
    dataCorrecao?: Date | string | null
    corrigidoPor?: number | null
    observacoes?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type ResultadoUpdateWithoutAlunoInput = {
    respostas?: NullableJsonNullValueInput | InputJsonValue
    pontuacao?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percentual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dataCorrecao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    corrigidoPor?: NullableIntFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    prova?: ProvaUpdateOneRequiredWithoutResultadosNestedInput
    aplicacao?: AplicacaoProvaUpdateOneRequiredWithoutResultadosNestedInput
  }

  export type ResultadoUncheckedUpdateWithoutAlunoInput = {
    id?: IntFieldUpdateOperationsInput | number
    provaId?: IntFieldUpdateOperationsInput | number
    aplicacaoId?: IntFieldUpdateOperationsInput | number
    respostas?: NullableJsonNullValueInput | InputJsonValue
    pontuacao?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percentual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dataCorrecao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    corrigidoPor?: NullableIntFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultadoUncheckedUpdateManyWithoutResultadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    provaId?: IntFieldUpdateOperationsInput | number
    aplicacaoId?: IntFieldUpdateOperationsInput | number
    respostas?: NullableJsonNullValueInput | InputJsonValue
    pontuacao?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percentual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dataCorrecao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    corrigidoPor?: NullableIntFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestaoCreateManyProvaInput = {
    id?: number
    ordem: number
    enunciado: string
    tipo: string
    opcoes?: NullableJsonNullValueInput | InputJsonValue
    respostaCorreta?: string | null
    valor?: Decimal | DecimalJsLike | number | string
    habilidadeBncc?: string | null
    descricaoBncc?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type AplicacaoProvaCreateManyProvaInput = {
    id?: number
    turmaId: number
    dataAplicacao: Date | string
    horaInicio?: Date | string | null
    horaTermino?: Date | string | null
    observacoes?: string | null
    dataCriacao?: Date | string
  }

  export type ResultadoCreateManyProvaInput = {
    id?: number
    alunoId: number
    aplicacaoId: number
    respostas?: NullableJsonNullValueInput | InputJsonValue
    pontuacao?: Decimal | DecimalJsLike | number | string | null
    percentual?: Decimal | DecimalJsLike | number | string | null
    dataCorrecao?: Date | string | null
    corrigidoPor?: number | null
    observacoes?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type DesempenhoHabilidadeCreateManyProvaInput = {
    id?: number
    habilidadeId: number
    escolaId: number
    turmaId?: number | null
    totalQuestoes: number
    totalAcertos: number
    percentualAcertos: Decimal | DecimalJsLike | number | string
    dataAvaliacao: Date | string
    anoLetivo: string
    dataCriacao?: Date | string
  }

  export type QuestaoUpdateWithoutProvaInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    enunciado?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    opcoes?: NullableJsonNullValueInput | InputJsonValue
    respostaCorreta?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    habilidadeBncc?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoBncc?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestaoUncheckedUpdateWithoutProvaInput = {
    id?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
    enunciado?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    opcoes?: NullableJsonNullValueInput | InputJsonValue
    respostaCorreta?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    habilidadeBncc?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoBncc?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestaoUncheckedUpdateManyWithoutQuestoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
    enunciado?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    opcoes?: NullableJsonNullValueInput | InputJsonValue
    respostaCorreta?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    habilidadeBncc?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoBncc?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AplicacaoProvaUpdateWithoutProvaInput = {
    dataAplicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaTermino?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    turma?: TurmaUpdateOneRequiredWithoutAplicacoesProvaNestedInput
    resultados?: ResultadoUpdateManyWithoutAplicacaoNestedInput
  }

  export type AplicacaoProvaUncheckedUpdateWithoutProvaInput = {
    id?: IntFieldUpdateOperationsInput | number
    turmaId?: IntFieldUpdateOperationsInput | number
    dataAplicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaTermino?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    resultados?: ResultadoUncheckedUpdateManyWithoutAplicacaoNestedInput
  }

  export type ResultadoUpdateWithoutProvaInput = {
    respostas?: NullableJsonNullValueInput | InputJsonValue
    pontuacao?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percentual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dataCorrecao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    corrigidoPor?: NullableIntFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    aluno?: AlunoUpdateOneRequiredWithoutResultadosNestedInput
    aplicacao?: AplicacaoProvaUpdateOneRequiredWithoutResultadosNestedInput
  }

  export type ResultadoUncheckedUpdateWithoutProvaInput = {
    id?: IntFieldUpdateOperationsInput | number
    alunoId?: IntFieldUpdateOperationsInput | number
    aplicacaoId?: IntFieldUpdateOperationsInput | number
    respostas?: NullableJsonNullValueInput | InputJsonValue
    pontuacao?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percentual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dataCorrecao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    corrigidoPor?: NullableIntFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DesempenhoHabilidadeUpdateWithoutProvaInput = {
    totalQuestoes?: IntFieldUpdateOperationsInput | number
    totalAcertos?: IntFieldUpdateOperationsInput | number
    percentualAcertos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAvaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
    anoLetivo?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    habilidade?: HabilidadeBnccUpdateOneRequiredWithoutDesempenhoHabilidadesNestedInput
    escola?: EscolaUpdateOneRequiredWithoutDesempenhoHabilidadesNestedInput
    turma?: TurmaUpdateOneWithoutDesempenhoHabilidadesNestedInput
  }

  export type DesempenhoHabilidadeUncheckedUpdateWithoutProvaInput = {
    id?: IntFieldUpdateOperationsInput | number
    habilidadeId?: IntFieldUpdateOperationsInput | number
    escolaId?: IntFieldUpdateOperationsInput | number
    turmaId?: NullableIntFieldUpdateOperationsInput | number | null
    totalQuestoes?: IntFieldUpdateOperationsInput | number
    totalAcertos?: IntFieldUpdateOperationsInput | number
    percentualAcertos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAvaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
    anoLetivo?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultadoCreateManyAplicacaoInput = {
    id?: number
    alunoId: number
    provaId: number
    respostas?: NullableJsonNullValueInput | InputJsonValue
    pontuacao?: Decimal | DecimalJsLike | number | string | null
    percentual?: Decimal | DecimalJsLike | number | string | null
    dataCorrecao?: Date | string | null
    corrigidoPor?: number | null
    observacoes?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type ResultadoUpdateWithoutAplicacaoInput = {
    respostas?: NullableJsonNullValueInput | InputJsonValue
    pontuacao?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percentual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dataCorrecao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    corrigidoPor?: NullableIntFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    aluno?: AlunoUpdateOneRequiredWithoutResultadosNestedInput
    prova?: ProvaUpdateOneRequiredWithoutResultadosNestedInput
  }

  export type ResultadoUncheckedUpdateWithoutAplicacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    alunoId?: IntFieldUpdateOperationsInput | number
    provaId?: IntFieldUpdateOperationsInput | number
    respostas?: NullableJsonNullValueInput | InputJsonValue
    pontuacao?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percentual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dataCorrecao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    corrigidoPor?: NullableIntFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DesempenhoHabilidadeCreateManyHabilidadeInput = {
    id?: number
    escolaId: number
    turmaId?: number | null
    provaId?: number | null
    totalQuestoes: number
    totalAcertos: number
    percentualAcertos: Decimal | DecimalJsLike | number | string
    dataAvaliacao: Date | string
    anoLetivo: string
    dataCriacao?: Date | string
  }

  export type DesempenhoHabilidadeUpdateWithoutHabilidadeInput = {
    totalQuestoes?: IntFieldUpdateOperationsInput | number
    totalAcertos?: IntFieldUpdateOperationsInput | number
    percentualAcertos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAvaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
    anoLetivo?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    escola?: EscolaUpdateOneRequiredWithoutDesempenhoHabilidadesNestedInput
    turma?: TurmaUpdateOneWithoutDesempenhoHabilidadesNestedInput
    prova?: ProvaUpdateOneWithoutDesempenhoHabilidadesNestedInput
  }

  export type DesempenhoHabilidadeUncheckedUpdateWithoutHabilidadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    escolaId?: IntFieldUpdateOperationsInput | number
    turmaId?: NullableIntFieldUpdateOperationsInput | number | null
    provaId?: NullableIntFieldUpdateOperationsInput | number | null
    totalQuestoes?: IntFieldUpdateOperationsInput | number
    totalAcertos?: IntFieldUpdateOperationsInput | number
    percentualAcertos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAvaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
    anoLetivo?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
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