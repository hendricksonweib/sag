
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/edge.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Ronaldo\\Desktop\\gab8\\src\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "linux-musl"
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\Ronaldo\\Desktop\\gab8\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider      = \"prisma-client-js\"\n  output        = \"../src/generated/prisma\"\n  binaryTargets = [\"native\", \"linux-musl\"]\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL\")\n}\n\n// Modelo de Escolas\nmodel Escola {\n  id              Int      @id @default(autoincrement())\n  nome            String   @db.VarChar(100)\n  regiao          String?  @db.VarChar(50)\n  grupo           String?  @db.VarChar(50)\n  endereco        String?  @db.VarChar(200)\n  telefone        String?  @db.VarChar(20)\n  email           String?  @db.VarChar(100)\n  diretor         String?  @db.VarChar(100)\n  dataCriacao     DateTime @default(now()) @map(\"data_criacao\")\n  dataAtualizacao DateTime @default(now()) @updatedAt @map(\"data_atualizacao\")\n\n  // Relacionamentos\n  turmas                Turma[]\n  alunos                Aluno[]\n  usuarios              Usuario[]\n  desempenhoHabilidades DesempenhoHabilidade[]\n\n  @@map(\"escolas\")\n}\n\n// Modelo de Turmas\nmodel Turma {\n  id                   Int      @id @default(autoincrement())\n  nome                 String   @db.VarChar(50)\n  serie                Int\n  turno                String   @db.VarChar(10)\n  anoLetivo            String   @map(\"ano_letivo\") @db.VarChar(10)\n  escolaId             Int      @map(\"escola_id\")\n  professorResponsavel String?  @map(\"professor_responsavel\") @db.VarChar(100)\n  sala                 String?  @db.VarChar(20)\n  dataCriacao          DateTime @default(now()) @map(\"data_criacao\")\n  dataAtualizacao      DateTime @default(now()) @updatedAt @map(\"data_atualizacao\")\n\n  // Relacionamentos\n  escola                Escola                 @relation(fields: [escolaId], references: [id], onDelete: Restrict)\n  alunos                Aluno[]\n  aplicacoesProva       AplicacaoProva[]\n  desempenhoHabilidades DesempenhoHabilidade[]\n\n  @@index([escolaId], name: \"idx_turmas_escola\")\n  @@index([anoLetivo], name: \"idx_turmas_ano_letivo\")\n  @@map(\"turmas\")\n}\n\n// Modelo de Alunos\nmodel Aluno {\n  id                  Int       @id @default(autoincrement())\n  nome                String    @db.VarChar(100)\n  matricula           String    @unique @db.VarChar(20)\n  dataNascimento      DateTime? @map(\"data_nascimento\")\n  genero              String?   @db.VarChar(1)\n  responsavel         String?   @db.VarChar(100)\n  telefoneResponsavel String?   @map(\"telefone_responsavel\") @db.VarChar(20)\n  emailResponsavel    String?   @map(\"email_responsavel\") @db.VarChar(100)\n  turmaId             Int?      @map(\"turma_id\")\n  escolaId            Int       @map(\"escola_id\")\n  fotoUrl             String?   @map(\"foto_url\") @db.VarChar(255)\n  dataCriacao         DateTime  @default(now()) @map(\"data_criacao\")\n  dataAtualizacao     DateTime  @default(now()) @updatedAt @map(\"data_atualizacao\")\n\n  // Relacionamentos\n  turma      Turma?      @relation(fields: [turmaId], references: [id], onDelete: SetNull)\n  escola     Escola      @relation(fields: [escolaId], references: [id], onDelete: Restrict)\n  resultados Resultado[]\n\n  @@index([turmaId], name: \"idx_alunos_turma\")\n  @@index([escolaId], name: \"idx_alunos_escola\")\n  @@map(\"alunos\")\n}\n\n// Modelo de Provas\nmodel Prova {\n  id              Int       @id @default(autoincrement())\n  nome            String    @db.VarChar(100)\n  descricao       String?   @db.Text\n  dataAplicacao   DateTime? @map(\"data_aplicacao\")\n  tipo            String    @db.VarChar(20)\n  disciplina      String?   @db.VarChar(50)\n  serie           Int?\n  criadoPor       Int?      @map(\"criado_por\")\n  dataCriacao     DateTime  @default(now()) @map(\"data_criacao\")\n  dataAtualizacao DateTime  @default(now()) @updatedAt @map(\"data_atualizacao\")\n\n  // Relacionamentos\n  questoes              Questao[]\n  aplicacoesProva       AplicacaoProva[]\n  resultados            Resultado[]\n  desempenhoHabilidades DesempenhoHabilidade[]\n\n  @@map(\"provas\")\n}\n\n// Modelo de Questões\nmodel Questao {\n  id              Int      @id @default(autoincrement())\n  provaId         Int      @map(\"prova_id\")\n  ordem           Int\n  enunciado       String   @db.Text\n  tipo            String   @db.VarChar(20)\n  opcoes          Json?\n  respostaCorreta String?  @map(\"resposta_correta\") @db.VarChar(255)\n  valor           Decimal  @default(1.0) @db.Decimal(5, 2)\n  habilidadeBncc  String?  @map(\"habilidade_bncc\") @db.VarChar(10)\n  descricaoBncc   String?  @map(\"descricao_bncc\") @db.Text\n  dataCriacao     DateTime @default(now()) @map(\"data_criacao\")\n  dataAtualizacao DateTime @default(now()) @updatedAt @map(\"data_atualizacao\")\n\n  // Relacionamentos\n  prova Prova @relation(fields: [provaId], references: [id], onDelete: Cascade)\n\n  @@index([provaId], name: \"idx_questoes_prova\")\n  @@index([habilidadeBncc], name: \"idx_questoes_habilidade\")\n  @@map(\"questoes\")\n}\n\n// Modelo de Aplicações de Prova\nmodel AplicacaoProva {\n  id            Int       @id @default(autoincrement())\n  provaId       Int       @map(\"prova_id\")\n  turmaId       Int       @map(\"turma_id\")\n  dataAplicacao DateTime  @map(\"data_aplicacao\")\n  horaInicio    DateTime? @map(\"hora_inicio\") @db.Time\n  horaTermino   DateTime? @map(\"hora_termino\") @db.Time\n  observacoes   String?   @db.Text\n  dataCriacao   DateTime  @default(now()) @map(\"data_criacao\")\n\n  // Relacionamentos\n  prova      Prova       @relation(fields: [provaId], references: [id], onDelete: Cascade)\n  turma      Turma       @relation(fields: [turmaId], references: [id], onDelete: Cascade)\n  resultados Resultado[]\n\n  @@map(\"aplicacoes_prova\")\n}\n\n// Modelo de Resultados\nmodel Resultado {\n  id              Int       @id @default(autoincrement())\n  alunoId         Int       @map(\"aluno_id\")\n  provaId         Int       @map(\"prova_id\")\n  aplicacaoId     Int       @map(\"aplicacao_id\")\n  respostas       Json?\n  pontuacao       Decimal?  @db.Decimal(5, 2)\n  percentual      Decimal?  @db.Decimal(5, 2)\n  dataCorrecao    DateTime? @map(\"data_correcao\")\n  corrigidoPor    Int?      @map(\"corrigido_por\")\n  observacoes     String?   @db.Text\n  dataCriacao     DateTime  @default(now()) @map(\"data_criacao\")\n  dataAtualizacao DateTime  @default(now()) @updatedAt @map(\"data_atualizacao\")\n\n  // Relacionamentos\n  aluno     Aluno          @relation(fields: [alunoId], references: [id], onDelete: Cascade)\n  prova     Prova          @relation(fields: [provaId], references: [id], onDelete: Cascade)\n  aplicacao AplicacaoProva @relation(fields: [aplicacaoId], references: [id], onDelete: Cascade)\n\n  @@index([alunoId], name: \"idx_resultados_aluno\")\n  @@index([provaId], name: \"idx_resultados_prova\")\n  @@index([aplicacaoId], name: \"idx_resultados_aplicacao\")\n  @@map(\"resultados\")\n}\n\n// Modelo de Usuários\nmodel Usuario {\n  id              Int       @id @default(autoincrement())\n  nome            String    @db.VarChar(100)\n  email           String    @unique @db.VarChar(100)\n  senha           String    @db.VarChar(255)\n  tipo            String    @db.VarChar(20)\n  escolaId        Int?      @map(\"escola_id\")\n  fotoUrl         String?   @map(\"foto_url\") @db.VarChar(255)\n  ultimoAcesso    DateTime? @map(\"ultimo_acesso\")\n  ativo           Boolean   @default(true)\n  dataCriacao     DateTime  @default(now()) @map(\"data_criacao\")\n  dataAtualizacao DateTime  @default(now()) @updatedAt @map(\"data_atualizacao\")\n\n  // Relacionamentos\n  escola Escola? @relation(fields: [escolaId], references: [id], onDelete: SetNull)\n\n  @@map(\"usuarios\")\n}\n\n// Modelo de Habilidades BNCC\nmodel HabilidadeBncc {\n  id          Int      @id @default(autoincrement())\n  codigo      String   @unique @db.VarChar(10)\n  componente  String   @db.VarChar(50)\n  ano         String   @db.VarChar(10)\n  descricao   String   @db.Text\n  dataCriacao DateTime @default(now()) @map(\"data_criacao\")\n\n  // Relacionamentos\n  desempenhoHabilidades DesempenhoHabilidade[]\n\n  @@map(\"habilidades_bncc\")\n}\n\n// Modelo de Desempenho por Habilidades\nmodel DesempenhoHabilidade {\n  id                Int      @id @default(autoincrement())\n  habilidadeId      Int      @map(\"habilidade_id\")\n  escolaId          Int      @map(\"escola_id\")\n  turmaId           Int?     @map(\"turma_id\")\n  provaId           Int?     @map(\"prova_id\")\n  totalQuestoes     Int      @map(\"total_questoes\")\n  totalAcertos      Int      @map(\"total_acertos\")\n  percentualAcertos Decimal  @map(\"percentual_acertos\") @db.Decimal(5, 2)\n  dataAvaliacao     DateTime @map(\"data_avaliacao\")\n  anoLetivo         String   @map(\"ano_letivo\") @db.VarChar(10)\n  dataCriacao       DateTime @default(now()) @map(\"data_criacao\")\n\n  // Relacionamentos\n  habilidade HabilidadeBncc @relation(fields: [habilidadeId], references: [id], onDelete: Cascade)\n  escola     Escola         @relation(fields: [escolaId], references: [id], onDelete: Cascade)\n  turma      Turma?         @relation(fields: [turmaId], references: [id], onDelete: SetNull)\n  prova      Prova?         @relation(fields: [provaId], references: [id], onDelete: SetNull)\n\n  @@index([habilidadeId], name: \"idx_desempenho_habilidade\")\n  @@index([escolaId], name: \"idx_desempenho_escola\")\n  @@index([turmaId], name: \"idx_desempenho_turma\")\n  @@index([provaId], name: \"idx_desempenho_prova\")\n  @@index([anoLetivo], name: \"idx_desempenho_ano_letivo\")\n  @@map(\"desempenho_habilidades\")\n}\n",
  "inlineSchemaHash": "e038c4ec8847e25c5b05752b09b6dd72d62e20f10e982041ec6809ae12a45d47",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Escola\":{\"dbName\":\"escolas\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regiao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"grupo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endereco\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"200\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"diretor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataCriacao\",\"dbName\":\"data_criacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataAtualizacao\",\"dbName\":\"data_atualizacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"turmas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Turma\",\"nativeType\":null,\"relationName\":\"EscolaToTurma\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alunos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Aluno\",\"nativeType\":null,\"relationName\":\"AlunoToEscola\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarios\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuario\",\"nativeType\":null,\"relationName\":\"EscolaToUsuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desempenhoHabilidades\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DesempenhoHabilidade\",\"nativeType\":null,\"relationName\":\"DesempenhoHabilidadeToEscola\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Turma\":{\"dbName\":\"turmas\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"serie\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"turno\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"anoLetivo\",\"dbName\":\"ano_letivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"escolaId\",\"dbName\":\"escola_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"professorResponsavel\",\"dbName\":\"professor_responsavel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sala\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataCriacao\",\"dbName\":\"data_criacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataAtualizacao\",\"dbName\":\"data_atualizacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"escola\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Escola\",\"nativeType\":null,\"relationName\":\"EscolaToTurma\",\"relationFromFields\":[\"escolaId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alunos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Aluno\",\"nativeType\":null,\"relationName\":\"AlunoToTurma\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aplicacoesProva\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AplicacaoProva\",\"nativeType\":null,\"relationName\":\"AplicacaoProvaToTurma\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desempenhoHabilidades\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DesempenhoHabilidade\",\"nativeType\":null,\"relationName\":\"DesempenhoHabilidadeToTurma\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Aluno\":{\"dbName\":\"alunos\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"matricula\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataNascimento\",\"dbName\":\"data_nascimento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"genero\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"1\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"responsavel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefoneResponsavel\",\"dbName\":\"telefone_responsavel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emailResponsavel\",\"dbName\":\"email_responsavel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"turmaId\",\"dbName\":\"turma_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"escolaId\",\"dbName\":\"escola_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fotoUrl\",\"dbName\":\"foto_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataCriacao\",\"dbName\":\"data_criacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataAtualizacao\",\"dbName\":\"data_atualizacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"turma\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Turma\",\"nativeType\":null,\"relationName\":\"AlunoToTurma\",\"relationFromFields\":[\"turmaId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"SetNull\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"escola\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Escola\",\"nativeType\":null,\"relationName\":\"AlunoToEscola\",\"relationFromFields\":[\"escolaId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resultados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Resultado\",\"nativeType\":null,\"relationName\":\"AlunoToResultado\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Prova\":{\"dbName\":\"provas\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descricao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataAplicacao\",\"dbName\":\"data_aplicacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disciplina\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"serie\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"criadoPor\",\"dbName\":\"criado_por\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataCriacao\",\"dbName\":\"data_criacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataAtualizacao\",\"dbName\":\"data_atualizacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"questoes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Questao\",\"nativeType\":null,\"relationName\":\"ProvaToQuestao\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aplicacoesProva\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AplicacaoProva\",\"nativeType\":null,\"relationName\":\"AplicacaoProvaToProva\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resultados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Resultado\",\"nativeType\":null,\"relationName\":\"ProvaToResultado\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desempenhoHabilidades\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DesempenhoHabilidade\",\"nativeType\":null,\"relationName\":\"DesempenhoHabilidadeToProva\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Questao\":{\"dbName\":\"questoes\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provaId\",\"dbName\":\"prova_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ordem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enunciado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"opcoes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"respostaCorreta\",\"dbName\":\"resposta_correta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"5\",\"2\"]],\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"habilidadeBncc\",\"dbName\":\"habilidade_bncc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descricaoBncc\",\"dbName\":\"descricao_bncc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataCriacao\",\"dbName\":\"data_criacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataAtualizacao\",\"dbName\":\"data_atualizacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"prova\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Prova\",\"nativeType\":null,\"relationName\":\"ProvaToQuestao\",\"relationFromFields\":[\"provaId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AplicacaoProva\":{\"dbName\":\"aplicacoes_prova\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provaId\",\"dbName\":\"prova_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"turmaId\",\"dbName\":\"turma_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataAplicacao\",\"dbName\":\"data_aplicacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"horaInicio\",\"dbName\":\"hora_inicio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Time\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"horaTermino\",\"dbName\":\"hora_termino\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Time\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"observacoes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataCriacao\",\"dbName\":\"data_criacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prova\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Prova\",\"nativeType\":null,\"relationName\":\"AplicacaoProvaToProva\",\"relationFromFields\":[\"provaId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"turma\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Turma\",\"nativeType\":null,\"relationName\":\"AplicacaoProvaToTurma\",\"relationFromFields\":[\"turmaId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resultados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Resultado\",\"nativeType\":null,\"relationName\":\"AplicacaoProvaToResultado\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Resultado\":{\"dbName\":\"resultados\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alunoId\",\"dbName\":\"aluno_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provaId\",\"dbName\":\"prova_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aplicacaoId\",\"dbName\":\"aplicacao_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"respostas\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pontuacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"5\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"percentual\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"5\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataCorrecao\",\"dbName\":\"data_correcao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"corrigidoPor\",\"dbName\":\"corrigido_por\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"observacoes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataCriacao\",\"dbName\":\"data_criacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataAtualizacao\",\"dbName\":\"data_atualizacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"aluno\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Aluno\",\"nativeType\":null,\"relationName\":\"AlunoToResultado\",\"relationFromFields\":[\"alunoId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prova\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Prova\",\"nativeType\":null,\"relationName\":\"ProvaToResultado\",\"relationFromFields\":[\"provaId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aplicacao\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AplicacaoProva\",\"nativeType\":null,\"relationName\":\"AplicacaoProvaToResultado\",\"relationFromFields\":[\"aplicacaoId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Usuario\":{\"dbName\":\"usuarios\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"senha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"escolaId\",\"dbName\":\"escola_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fotoUrl\",\"dbName\":\"foto_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ultimoAcesso\",\"dbName\":\"ultimo_acesso\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ativo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataCriacao\",\"dbName\":\"data_criacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataAtualizacao\",\"dbName\":\"data_atualizacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"escola\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Escola\",\"nativeType\":null,\"relationName\":\"EscolaToUsuario\",\"relationFromFields\":[\"escolaId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"SetNull\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"HabilidadeBncc\":{\"dbName\":\"habilidades_bncc\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"codigo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"componente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ano\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descricao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataCriacao\",\"dbName\":\"data_criacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desempenhoHabilidades\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DesempenhoHabilidade\",\"nativeType\":null,\"relationName\":\"DesempenhoHabilidadeToHabilidadeBncc\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DesempenhoHabilidade\":{\"dbName\":\"desempenho_habilidades\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"habilidadeId\",\"dbName\":\"habilidade_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"escolaId\",\"dbName\":\"escola_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"turmaId\",\"dbName\":\"turma_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provaId\",\"dbName\":\"prova_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalQuestoes\",\"dbName\":\"total_questoes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalAcertos\",\"dbName\":\"total_acertos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"percentualAcertos\",\"dbName\":\"percentual_acertos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"5\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataAvaliacao\",\"dbName\":\"data_avaliacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"anoLetivo\",\"dbName\":\"ano_letivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataCriacao\",\"dbName\":\"data_criacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"habilidade\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HabilidadeBncc\",\"nativeType\":null,\"relationName\":\"DesempenhoHabilidadeToHabilidadeBncc\",\"relationFromFields\":[\"habilidadeId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"escola\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Escola\",\"nativeType\":null,\"relationName\":\"DesempenhoHabilidadeToEscola\",\"relationFromFields\":[\"escolaId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"turma\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Turma\",\"nativeType\":null,\"relationName\":\"DesempenhoHabilidadeToTurma\",\"relationFromFields\":[\"turmaId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"SetNull\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prova\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Prova\",\"nativeType\":null,\"relationName\":\"DesempenhoHabilidadeToProva\",\"relationFromFields\":[\"provaId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"SetNull\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

