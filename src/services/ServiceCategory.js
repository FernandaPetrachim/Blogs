// Resumo: Este código é responsável por duas operações relacionadas a categorias 
// (Category1) no contexto do seu aplicativo Node.js.

// Com essas funções criadas abaixo serão úteis para a gestão de categorias em seu aplicativo, permitindo a criação de novas categorias e a 
// recuperação de todas as categorias existentes. 
// onde faço as verificacoes, se existe no banco.
const { Category } = require('../models');

const createCategories = async (name) => {
  const categories = await Category.create({ name });
  return { status: 201, data: categories };
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return { status: 200, data: categories };
};

module.exports = {
  createCategories,
  getAllCategories,
};
