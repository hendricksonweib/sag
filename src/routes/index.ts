import { Router } from 'express';
// Importações das rotas serão descomentadas à medida que forem implementadas
import escolasRoutes from './escolas';
// import turmasRoutes from './turmas';
// import alunosRoutes from './alunos';
// import provasRoutes from './provas';
// import usuariosRoutes from './usuarios';
// import authRoutes from './auth';

const router = Router();

// Rota base da API
router.get('/', (req, res) => {
  res.json({
    message: 'API do Sistema de Avaliação e Gerenciamento (SAG)',
    status: 'online',
    endpoints: [
      '/escolas',
      '/turmas',
      '/alunos',
      '/provas',
      '/usuarios',
      '/auth'
    ]
  });
});

// Registra as rotas específicas (serão descomentadas à medida que forem implementadas)
router.use('/escolas', escolasRoutes);
// router.use('/turmas', turmasRoutes);
// router.use('/alunos', alunosRoutes);
// router.use('/provas', provasRoutes);
// router.use('/usuarios', usuariosRoutes);
// router.use('/auth', authRoutes);

export default router; 