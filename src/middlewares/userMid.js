// veriica o tamanho do display
const usuario = (req, res, next) => {
  const { displayName, password } = req.body;
  if (password.length < 6) {
    return res.status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
  }
  if (displayName.length < 8) {
    return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  next();
};
    
module.exports = usuario;