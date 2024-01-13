const ServiceUser = require('../services/ServiceUser');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { status, data } = await ServiceUser
    
    .createUser({ displayName, email, password, image });

  return res.status(status).json(data);
};

const getAllUsers = async (_req, res) => {
  const { status, data } = await ServiceUser.getAllUsers();

  return res.status(status).json(data);
};

const findUserById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await ServiceUser.findUserById(id);

  return res.status(status).json(data);
};

const deleteUser = async (req, res) => {
  const { id } = req.user;
  const { status, data } = await ServiceUser.deleteUser(id);

  return res.status(status).json(data);
};

module.exports = {
  createUser,
  getAllUsers,
  findUserById,
  deleteUser,
};
