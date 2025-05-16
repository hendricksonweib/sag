#!/bin/sh
set -e

echo "🚀 Iniciando o contêiner da API SAG..."

# Espera o MySQL iniciar
echo "⏳ Aguardando o serviço MySQL iniciar..."
/app/wait-for-it.sh db 3306

# Verifica conectividade com o banco de dados
echo "🔍 Verificando conectividade com o banco de dados..."
if ! nc -z db 3306; then
  echo "❌ Falha ao conectar ao banco de dados MySQL na porta 3306."
  exit 1
fi
echo "✅ Conectividade com o banco de dados verificada."

# Debug: Mostra a URL do banco de dados (mascarando a senha)
echo "ℹ️ Tentando conectar a: ${DATABASE_URL//:*@/:***@}"

# Pausa para garantir que o MySQL esteja totalmente inicializado
echo "⏳ Aguardando 5 segundos para garantir inicialização completa do MySQL..."
sleep 5

# Diagnóstico do Prisma
echo "📊 Executando diagnóstico do Prisma..."
npx prisma -v
npx prisma --help

# Regenerar o cliente Prisma (pode ajudar a resolver problemas com binários)
echo "🔄 Regenerando cliente Prisma..."
npx prisma generate

# Executa as migrações do Prisma com debug
echo "🔄 Executando migrações do banco de dados..."
npx prisma migrate deploy

# Verifica se a migração foi bem-sucedida
if [ $? -ne 0 ]; then
  echo "❌ Falha ao executar migrações do Prisma."
  echo "ℹ️ Tentando executar diagnóstico..."
  npx prisma diagnose
  exit 1
fi

# Executa o seed do banco de dados
echo "🌱 Executando seed do banco de dados..."
npx prisma db seed

# Executa o comando original
echo "✅ Iniciando a aplicação..."
exec "$@" 