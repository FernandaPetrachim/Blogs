// Resumo: Este código é responsável por duas operações relacionadas a categorias 
// (Category1) no contexto do seu aplicativo Node.js.

// Com essas funções criadas abaixo serão úteis para a gestão de categorias em seu aplicativo, permitindo a criação de novas categorias e a 
// recuperação de todas as categorias existentes. 

const { Category } = require('../models');

const createCategories = async (name) => {
  const categories = await Category({ name });
  return { status: 201, data: categories };
};

const getAllCategories = async (_req, res) => {
  try {
    const categories = await Category.findAll();
    return res.status(200).json({ data: categories });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createCategories,
  getAllCategories,
};
