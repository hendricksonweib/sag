
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.EscolaScalarFieldEnum = {
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

exports.Prisma.TurmaScalarFieldEnum = {
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

exports.Prisma.AlunoScalarFieldEnum = {
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

exports.Prisma.ProvaScalarFieldEnum = {
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

exports.Prisma.QuestaoScalarFieldEnum = {
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

exports.Prisma.AplicacaoProvaScalarFieldEnum = {
  id: 'id',
  provaId: 'provaId',
  turmaId: 'turmaId',
  dataAplicacao: 'dataAplicacao',
  horaInicio: 'horaInicio',
  horaTermino: 'horaTermino',
  observacoes: 'observacoes',
  dataCriacao: 'dataCriacao'
};

exports.Prisma.ResultadoScalarFieldEnum = {
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

exports.Prisma.UsuarioScalarFieldEnum = {
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

exports.Prisma.HabilidadeBnccScalarFieldEnum = {
  id: 'id',
  codigo: 'codigo',
  componente: 'componente',
  ano: 'ano',
  descricao: 'descricao',
  dataCriacao: 'dataCriacao'
};

exports.Prisma.DesempenhoHabilidadeScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.EscolaOrderByRelevanceFieldEnum = {
  nome: 'nome',
  regiao: 'regiao',
  grupo: 'grupo',
  endereco: 'endereco',
  telefone: 'telefone',
  email: 'email',
  diretor: 'diretor'
};

exports.Prisma.TurmaOrderByRelevanceFieldEnum = {
  nome: 'nome',
  turno: 'turno',
  anoLetivo: 'anoLetivo',
  professorResponsavel: 'professorResponsavel',
  sala: 'sala'
};

exports.Prisma.AlunoOrderByRelevanceFieldEnum = {
  nome: 'nome',
  matricula: 'matricula',
  genero: 'genero',
  responsavel: 'responsavel',
  telefoneResponsavel: 'telefoneResponsavel',
  emailResponsavel: 'emailResponsavel',
  fotoUrl: 'fotoUrl'
};

exports.Prisma.ProvaOrderByRelevanceFieldEnum = {
  nome: 'nome',
  descricao: 'descricao',
  tipo: 'tipo',
  disciplina: 'disciplina'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.QuestaoOrderByRelevanceFieldEnum = {
  enunciado: 'enunciado',
  tipo: 'tipo',
  respostaCorreta: 'respostaCorreta',
  habilidadeBncc: 'habilidadeBncc',
  descricaoBncc: 'descricaoBncc'
};

exports.Prisma.AplicacaoProvaOrderByRelevanceFieldEnum = {
  observacoes: 'observacoes'
};

exports.Prisma.ResultadoOrderByRelevanceFieldEnum = {
  observacoes: 'observacoes'
};

exports.Prisma.UsuarioOrderByRelevanceFieldEnum = {
  nome: 'nome',
  email: 'email',
  senha: 'senha',
  tipo: 'tipo',
  fotoUrl: 'fotoUrl'
};

exports.Prisma.HabilidadeBnccOrderByRelevanceFieldEnum = {
  codigo: 'codigo',
  componente: 'componente',
  ano: 'ano',
  descricao: 'descricao'
};

exports.Prisma.DesempenhoHabilidadeOrderByRelevanceFieldEnum = {
  anoLetivo: 'anoLetivo'
};


exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
