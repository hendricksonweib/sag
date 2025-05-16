# SAG Sistema - Configuração Local com MySQL em Docker

Este guia explica como executar o SAG Sistema localmente com o banco de dados MySQL em um contêiner Docker.

## Requisitos

- Node.js 18+ instalado na máquina local
- Docker instalado e funcionando
- NPM ou Yarn

## Configuração Inicial

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd sag-sistema
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o arquivo `.env`:
   ```
   DATABASE_URL="mysql://sag_user:sag_password@localhost:3306/sag_sistema"
   PORT=3000
   NODE_ENV=development
   JWT_SECRET="sag-sistema-secret-key-2025"
   JWT_EXPIRES_IN="24h"
   ```

4. Execute a configuração completa (banco de dados + migrações):
   ```bash
   npm run setup
   ```
   Este comando fará:
   - Iniciar o contêiner MySQL
   - Gerar o cliente Prisma
   - Executar as migrações do banco de dados
   - Verificar a conectividade

## Comandos Disponíveis

### Banco de Dados

- **Iniciar o banco de dados**:
  ```bash
  npm run db:up
  ```

- **Parar o banco de dados**:
  ```bash
  npm run db:down
  ```

- **Verificar status do banco de dados**:
  ```bash
  npm run db:status
  ```

### Prisma

- **Gerar cliente Prisma**:
  ```bash
  npm run prisma:generate
  ```

- **Criar ou atualizar migrações**:
  ```bash
  npm run prisma:migrate
  ```

- **Popular o banco com dados iniciais**:
  ```bash
  npm run prisma:seed
  ```

- **Explorar o banco de dados com Prisma Studio**:
  ```bash
  npm run prisma:studio
  ```

### Aplicação

- **Desenvolvimento**:
  ```bash
  npm run dev
  ```

- **Desenvolvimento com inicialização do banco**:
  ```bash
  npm run dev:full
  ```

- **Compilar TypeScript**:
  ```bash
  npm run build
  ```

- **Iniciar modo produção**:
  ```bash
  npm start
  ```

## Solução de Problemas

### Erro de Conexão com o Banco

1. Verifique se o contêiner está rodando:
   ```bash
   docker ps
   ```

2. Verifique os logs do MySQL:
   ```bash
   docker logs sag-mysql
   ```

3. Confirme a URL de conexão no arquivo `.env`

4. Tente reiniciar o contêiner:
   ```bash
   npm run db:down
   npm run db:up
   ```

### Erro no Prisma

1. Regenere o cliente Prisma:
   ```bash
   npm run prisma:reset
   ```

2. Verifique a versão do Prisma:
   ```bash
   npx prisma -v
   ```

## Observações

- O banco de dados é persistido mesmo quando você para o contêiner
- Para limpar completamente o banco, remova o volume do Docker 