import { Router, RequestHandler } from 'express';
import { 
  getEscolas, 
  getEscolaById, 
  createEscola, 
  updateEscola, 
  deleteEscola 
} from '../controllers/escolasController';

const router = Router();

/**
 * @route   GET /api/v1/escolas
 * @desc    Obter todas as escolas
 * @access  Private
 */
router.get('/', getEscolas as RequestHandler);

/**
 * @route   GET /api/v1/escolas/:id
 * @desc    Obter uma escola pelo ID
 * @access  Private
 */
router.get('/:id', getEscolaById as RequestHandler);

/**
 * @route   POST /api/v1/escolas
 * @desc    Criar uma nova escola
 * @access  Private/Admin
 */
router.post('/', createEscola as RequestHandler);

/**
 * @route   PUT /api/v1/escolas/:id
 * @desc    Atualizar uma escola existente
 * @access  Private/Admin
 */
router.put('/:id', updateEscola as RequestHandler);

/**
 * @route   DELETE /api/v1/escolas/:id
 * @desc    Excluir uma escola
 * @access  Private/Admin
 */
router.delete('/:id', deleteEscola as RequestHandler);

export default router; 