const generarToken1 = require('../validation/tokenLogin');
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
  const token2 = generarToken1.generarToken1({ id1 });

  return { status: 200, data: { token2 } };
};

module.exports = {
  loginEmailPassword,
};