const loginService = require('../services/ServiceLogin');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verifica se os campos estão preenchidos
    if (!email || !password) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const { status, data } = await loginService.loginEmailPassword(email, password);

    if (status === 404) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    return res.status(status).json(data);
  } catch (error) {
    console.error('Erro no controlador de login:', error);
    return res.status(500).json({ message: 'Erro interno no servidor' });
  }
};

module.exports = {
  login,
};