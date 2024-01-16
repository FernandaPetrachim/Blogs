const { User } = require('../models');
const generateToken1 = require('../validation/tokenLogin');

// Objetivo: Recuperar todos os registros da tabela de usuários.
const findAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return { status: 200, data: users };
};

// Recuperar um registro da tabela de usuários com base no seu identificador único (ID).
const findById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });

  if (!user) {
    return { status: 404, data: { message: 'User does not exist' } };
  }

  return { status: 200, data: user };
};
// Objetivo: Excluir um usuário da tabela com base no seu identificador único.
const excluir = async (id2) => {
  await User.destroy({ where: { id2 } });

  return { status: 204, data: {} };
};

// Objetivo: Criar um novo usuário no banco de dados.
const createUsuario = async ({ displayName, email, password, image }) => {
  const getByEmail = await User.findOne({
    where: { email },
    attributes: { exclude: ['password', 'email'] },
  });

  if (getByEmail) {
    return { status: 409, data: { message: 'User already registered' } };
  }

  // regex validação do email
  const regex = /^\S+@\S+\.\S+$/;
  if (regex.test(email) === false) {
    return { status: 400, data: { message: '"email" must be a valid email' } };
  }
  // Criação do Usuário 
  const userUsuario = await User.create({ displayName, email, password, image });
  // Extração do ID do Usuário 
  const { id } = userUsuario.dataValues;
  // Geração do Token de Autenticação
  const token3 = generateToken1.generateToken1({ id });
  return { status: 201, data: { token3 } };
};

module.exports = {
  findAll,
  findById,
  excluir,
  createUsuario,
};
