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
