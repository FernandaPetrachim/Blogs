// Resumo do códiog: a função loginEmailPassword parece tratar a autenticação do usuário, 
// verificando se as credenciais fornecidas são válidas, gerando um token JWT se forem, e retornando um objeto de 
// resposta com o status e o token correspondente. 
// gerei token, busquei no validation

const generateToken1 = require('../validation/tokenLogin');
const { User } = require('../models');

const loginEmailPassword = async (email, password) => {
  const user = await User.findOne({
    where: { email, password },
    attributes: { exclude: ['password', 'email'] },
  });

  if (!user) {
    return { status: 400, data: { message: 'Invalid fields' } };
  }

  const { id1 } = user.dataValues;
  const token = generateToken1.generateToken1({ id1 });

  return { status: 200, data: { token } };
};

module.exports = {
  loginEmailPassword,
};
