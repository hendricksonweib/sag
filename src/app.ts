import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import config from './config';
import { testConnection } from './config/database';
import apiRoutes from './routes';

// Carrega as variáveis de ambiente
dotenv.config();

// Cria a aplicação Express
const app: Express = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota para verificar se a API está funcionando
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'SAG API funcionando!',
    version: '1.0.0',
    environment: config.server.env
  });
});

// Registra as rotas da API
app.use(`${config.api.prefix}/${config.api.version}`, apiRoutes);

// Middleware para tratamento de erros
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Ocorreu um erro no servidor',
    error: config.server.env === 'development' ? err.message : undefined
  });
});

// Middleware para rotas não encontradas
app.use((req: Request, res: Response) => {
  res.status(404).json({
    message: 'Rota não encontrada'
  });
});

// Inicia o servidor
const startServer = async () => {
  try {
    // Testa a conexão com o banco de dados
    const dbConnected = await testConnection();
    
    if (!dbConnected) {
      console.error('❌ Falha ao conectar ao banco de dados. Verifique suas configurações');
      process.exit(1);
    }
    
    const PORT = config.server.port;
    
    app.listen(PORT, () => {
      console.log(`⚡️ Servidor rodando em http://localhost:${PORT}`);
      console.log(`📡 API disponível em http://localhost:${PORT}${config.api.prefix}/${config.api.version}`);
      console.log(`🌎 Ambiente: ${config.server.env}`);
    });
  } catch (error) {
    console.error('❌ Erro ao iniciar o servidor:', error);
    process.exit(1);
  }
};

export { app, startServer }; 