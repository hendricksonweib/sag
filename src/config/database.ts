import { PrismaClient } from '../../src/generated/prisma';
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente
dotenv.config();

// Mostra a URL do banco de dados com a senha ocultada para debug
const connectionString = process.env.DATABASE_URL || '';
const maskedConnectionString = connectionString.replace(/:([^:@]+)@/, ':***@');
console.log(`🔌 Tentando conectar ao banco de dados: ${maskedConnectionString}`);

// Cria uma instância global do Prisma Client com tratamento de erro
let prisma: PrismaClient;

try {
  prisma = new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    errorFormat: 'pretty',
  });
  console.log('✅ Cliente Prisma inicializado com sucesso');
} catch (error) {
  console.error('❌ Erro ao inicializar o Prisma Client:', error);
  throw new Error('Falha ao inicializar o Prisma. Execute "npm run prisma:generate" e tente novamente.');
}

// Função para testar a conexão com o banco de dados
async function testConnection() {
  try {
    await prisma.$connect();
    console.log('✅ Conexão com o banco de dados estabelecida com sucesso');
    
    // Verifica a versão do servidor MySQL 
    const result = await prisma.$queryRaw`SELECT VERSION() as version`;
    console.log(`📊 Versão do MySQL: ${JSON.stringify(result)}`);
    
    return true;
  } catch (error) {
    console.error('❌ Erro ao conectar ao banco de dados:', error);
    return false;
  }
}

// Função para fechar a conexão (útil para testes ou quando precisar encerrar o app)
async function closeConnection() {
  await prisma.$disconnect();
  console.log('🔌 Conexão com o banco de dados encerrada');
}

export { prisma, testConnection, closeConnection }; 