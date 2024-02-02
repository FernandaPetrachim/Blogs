// Resumo do código: o next() só seja chamado quando o token for verificado com sucesso, 
// evitando assim a execução do restante do código se houver problemas com o token.

const { JWT_SECRET } = process.env;

const jwt = require('jsonwebtoken');

const autori = (req, res, next) => {
  const { authorization } = req.headers; // authorization está no teste e lá está com letra Maiuscula
  function extracaoToken(bearerToken) {
    return bearerToken.split(' ')[1]; // split dividir
  }

  if (!authorization || authorization === '') {
    return res.status(401).json({ message: 'Token not found' });
  }
  const token = extracaoToken(authorization);

  try {
    const converter = jwt.verify(token, JWT_SECRET);
    req.user = converter;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = autori;
