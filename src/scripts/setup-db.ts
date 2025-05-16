import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente
dotenv.config();

/**
 * Script para verificar a conexão com o banco de dados e configurar o ambiente inicial
 */
async function setupDatabase() {
  console.log('🔍 Verificando conexão com o banco de dados...');

  const prisma = new PrismaClient();

  try {
    // Tenta conectar ao banco de dados
    await prisma.$connect();
    console.log('✅ Conexão com o banco de dados estabelecida com sucesso!');
    
    // Verifica se o banco de dados está vazio executando uma consulta simples
    const escolaCount = await prisma.escola.count();
    console.log(`ℹ️ Número de escolas no banco de dados: ${escolaCount}`);
    
    if (escolaCount === 0) {
      console.log('🌱 Banco de dados vazio. Execute o comando "npm run prisma:seed" para popular com dados iniciais.');
    }
    
    // Lista as tabelas disponíveis no esquema
    console.log('📋 Tabelas disponíveis no esquema:');
    const dmmf = await prisma._getDmmf();
    dmmf.datamodel.models.forEach((model: { name: string }) => {
      console.log(`   - ${model.name}`);
    });
    
    console.log('✨ Banco de dados pronto para uso!');
  } catch (error) {
    console.error('❌ Erro ao conectar ao banco de dados:', error);
    console.log('\n🔧 Sugestões para resolver o problema:');
    console.log('1. Verifique se o contêiner MySQL está rodando com "docker-compose ps"');
    console.log('2. Certifique-se de que a string de conexão no arquivo .env está correta');
    console.log('3. Execute as migrações com "npm run prisma:migrate"');
    console.log('4. Reinicie o contêiner MySQL com "npm run db:down" e "npm run db:up"');
    
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// Executa a função
setupDatabase().catch(console.error); 