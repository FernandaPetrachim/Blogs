// este middleware garante que os campos password e email estejam presentes em uma requisição de 
// login e responde com um erro se algum desses campos estiver ausente. 
const login = (req, res, next) => {
  const { password, email } = req.body;
  if (password === '' || email === '') {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = login;
