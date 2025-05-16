import { startServer } from './app';

// Inicia o servidor
startServer().catch(error => {
  console.error('Falha ao iniciar o servidor:', error);
  process.exit(1);
}); 