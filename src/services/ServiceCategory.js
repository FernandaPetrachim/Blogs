// Resumo: Este código é responsável por duas operações relacionadas a categorias 
// (Category1) no contexto do seu aplicativo Node.js.

// Com essas funções criadas abaixo serão úteis para a gestão de categorias em seu aplicativo, permitindo a criação de novas categorias e a 
// recuperação de todas as categorias existentes. 

const { Category1 } = require('../models');

const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const category = await Category1.create({ name });
    return res.status(201).json({ data: category });
  } catch (error) {
    return res.status(400).json({ message: 'Failed to create category' });
  }
};

const getAllCategories = async (_req, res) => {
  try {
    const categories = await Category1.findAll();
    return res.status(200).json({ data: categories });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
};
