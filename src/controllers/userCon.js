const ServiceUser = require('../services/ServiceUser');

const createUsuario = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { status, data } = await ServiceUser.createUsuario({ displayName, email, password, image });

  return res.status(status).json(data);
};

const getAllUsers = async (_req, res) => {
  const { status, data } = await ServiceUser.findAll();

  return res.status(status).json(data);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await ServiceUser.findById(id);

  return res.status(status).json(data);
};

const deleteUser = async (req, res) => {
  const { id } = req.user;
  const { status, data } = await ServiceUser.deleteUser(id);

  return res.status(status).json(data);
};

module.exports = {
  createUsuario,
  getAllUsers,
  findById,
  deleteUser,
};
