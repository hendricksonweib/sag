
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.16.2
 * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
 */
Prisma.prismaVersion = {
  client: "4.16.2",
  engine: "4bc8b6e1b66cb932731fb1bdbbc550d1e010de81"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
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

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
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
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
