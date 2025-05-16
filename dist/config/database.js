"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
exports.testConnection = testConnection;
exports.closeConnection = closeConnection;
const prisma_1 = require("../../src/generated/prisma");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connectionString = process.env.DATABASE_URL || '';
const maskedConnectionString = connectionString.replace(/:([^:@]+)@/, ':***@');
console.log(`🔌 Tentando conectar ao banco de dados: ${maskedConnectionString}`);
let prisma;
try {
    exports.prisma = prisma = new prisma_1.PrismaClient({
        log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
        errorFormat: 'pretty',
    });
    console.log('✅ Cliente Prisma inicializado com sucesso');
}
catch (error) {
    console.error('❌ Erro ao inicializar o Prisma Client:', error);
    throw new Error('Falha ao inicializar o Prisma. Execute "npm run prisma:generate" e tente novamente.');
}
async function testConnection() {
    try {
        await prisma.$connect();
        console.log('✅ Conexão com o banco de dados estabelecida com sucesso');
        const result = await prisma.$queryRaw `SELECT VERSION() as version`;
        console.log(`📊 Versão do MySQL: ${JSON.stringify(result)}`);
        return true;
    }
    catch (error) {
        console.error('❌ Erro ao conectar ao banco de dados:', error);
        return false;
    }
}
async function closeConnection() {
    await prisma.$disconnect();
    console.log('🔌 Conexão com o banco de dados encerrada');
}
//# sourceMappingURL=database.js.map