FROM node:18-alpine

WORKDIR /app

# Instala ferramentas necessárias e OpenSSL para o Prisma
RUN apk add --no-cache bash netcat-openbsd openssl openssl-dev

# Define variáveis de ambiente para corrigir o problema do OpenSSL com Prisma
ENV PRISMA_QUERY_ENGINE_LIBRARY=/app/node_modules/@prisma/engines/libquery_engine-linux-musl.so.node
ENV PRISMA_SCHEMA_ENGINE_LIBRARY=/app/node_modules/@prisma/engines/libquery_engine-linux-musl.so.node
ENV PRISMA_MIGRATION_ENGINE_LIBRARY=/app/node_modules/@prisma/engines/migration-engine-linux-musl

# Copia arquivos de configuração
COPY package*.json ./
COPY tsconfig.json ./
COPY prisma ./prisma/

# Instala dependências
RUN npm install

# Gera o cliente Prisma
RUN npx prisma generate

# Copia o código fonte
COPY . .

# Compila o TypeScript
RUN npm run build

# Dá permissão de execução aos scripts
RUN chmod +x /app/wait-for-it.sh
RUN chmod +x /app/docker-entrypoint.sh

# Expõe a porta da aplicação
EXPOSE 3000

# Define o comando de entrada
ENTRYPOINT ["/app/docker-entrypoint.sh"]

# Define o comando padrão
CMD ["npm", "start"] 