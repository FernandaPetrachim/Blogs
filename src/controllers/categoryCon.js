const ServiceCategory = require('../services/ServiceCategory');
// parte da resposta d asolicitação, parte que vai responder
const createCategory = async (req, res) => {
  const { name } = req.body;
  const { status, data } = await ServiceCategory.createCategories(name);

  return res.status(status).json(data);
};

const getAllCategories = async (_req, res) => {
  const { status, data } = await ServiceCategory.getAllCategories();

  return res.status(status).json(data);
};

module.exports = {
  createCategory,
  getAllCategories,
};