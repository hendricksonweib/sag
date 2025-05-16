import { Request, Response } from 'express';
import { prisma } from '../config/database';

/**
 * @desc    Obter todas as escolas
 * @route   GET /api/v1/escolas
 * @access  Private
 */
export const getEscolas = async (req: Request, res: Response) => {
  try {
    const escolas = await prisma.escola.findMany({
      orderBy: {
        nome: 'asc'
      }
    });

    res.status(200).json({
      success: true,
      count: escolas.length,
      data: escolas
    });
  } catch (error) {
    console.error('Erro ao buscar escolas:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar escolas',
      error: (error as Error).message
    });
  }
};

/**
 * @desc    Obter uma escola pelo ID
 * @route   GET /api/v1/escolas/:id
 * @access  Private
 */
export const getEscolaById = async (req: Request, res: Response) => {
  try {
    const escolaId = parseInt(req.params.id);

    const escola = await prisma.escola.findUnique({
      where: { id: escolaId },
      include: {
        turmas: true
      }
    });

    if (!escola) {
      return res.status(404).json({
        success: false,
        message: 'Escola não encontrada'
      });
    }

    res.status(200).json({
      success: true,
      data: escola
    });
  } catch (error) {
    console.error('Erro ao buscar escola:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar escola',
      error: (error as Error).message
    });
  }
};

/**
 * @desc    Criar uma nova escola
 * @route   POST /api/v1/escolas
 * @access  Private/Admin
 */
export const createEscola = async (req: Request, res: Response) => {
  try {
    const { nome, regiao, grupo, endereco, telefone, email, diretor } = req.body;

    // Validação básica
    if (!nome) {
      return res.status(400).json({
        success: false,
        message: 'O nome da escola é obrigatório'
      });
    }

    const escola = await prisma.escola.create({
      data: {
        nome,
        regiao,
        grupo,
        endereco,
        telefone,
        email,
        diretor,
      }
    });

    res.status(201).json({
      success: true,
      data: escola,
      message: 'Escola criada com sucesso'
    });
  } catch (error) {
    console.error('Erro ao criar escola:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao criar escola',
      error: (error as Error).message
    });
  }
};

/**
 * @desc    Atualizar uma escola existente
 * @route   PUT /api/v1/escolas/:id
 * @access  Private/Admin
 */
export const updateEscola = async (req: Request, res: Response) => {
  try {
    const escolaId = parseInt(req.params.id);
    const { nome, regiao, grupo, endereco, telefone, email, diretor } = req.body;

    // Verificar se a escola existe
    const escolaExists = await prisma.escola.findUnique({
      where: { id: escolaId }
    });

    if (!escolaExists) {
      return res.status(404).json({
        success: false,
        message: 'Escola não encontrada'
      });
    }

    // Atualizar a escola
    const escola = await prisma.escola.update({
      where: { id: escolaId },
      data: {
        nome,
        regiao,
        grupo,
        endereco,
        telefone,
        email,
        diretor,
      }
    });

    res.status(200).json({
      success: true,
      data: escola,
      message: 'Escola atualizada com sucesso'
    });
  } catch (error) {
    console.error('Erro ao atualizar escola:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao atualizar escola',
      error: (error as Error).message
    });
  }
};

/**
 * @desc    Excluir uma escola
 * @route   DELETE /api/v1/escolas/:id
 * @access  Private/Admin
 */
export const deleteEscola = async (req: Request, res: Response) => {
  try {
    const escolaId = parseInt(req.params.id);

    // Verificar se a escola existe
    const escolaExists = await prisma.escola.findUnique({
      where: { id: escolaId }
    });

    if (!escolaExists) {
      return res.status(404).json({
        success: false,
        message: 'Escola não encontrada'
      });
    }

    // Verificar se existem turmas ou alunos associados à escola
    const turmaCont = await prisma.turma.count({
      where: { escolaId }
    });

    const alunoCont = await prisma.aluno.count({
      where: { escolaId }
    });

    if (turmaCont > 0 || alunoCont > 0) {
      return res.status(400).json({
        success: false,
        message: 'Não é possível excluir a escola pois existem turmas ou alunos associados',
        turmas: turmaCont,
        alunos: alunoCont
      });
    }

    // Excluir a escola
    await prisma.escola.delete({
      where: { id: escolaId }
    });

    res.status(200).json({
      success: true,
      message: 'Escola excluída com sucesso'
    });
  } catch (error) {
    console.error('Erro ao excluir escola:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao excluir escola',
      error: (error as Error).message
    });
  }
}; 