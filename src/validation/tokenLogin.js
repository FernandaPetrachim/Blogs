// Resumo: validação do token
// variavél que pede no readme 
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const generateToken1 = (payload) => jwt.sign(payload, JWT_SECRET);

module.exports = {
  generateToken1,
};