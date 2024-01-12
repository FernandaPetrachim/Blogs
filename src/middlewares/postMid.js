// este middleware garante que os campos content,
// title e categoryIds estejam presentes em uma requisição de criação ou
// atualização de postagem e responde com um erro se algum desses campos estiver ausente. 
// Isso ajuda a garantir que as requisições de postagem contenham os dados necessários antes
// de serem processadas pelo restante da lógica da aplicação.

const post = (req, res, next) => {
  const { content, title, categoryIds } = req.body;
  if (!content || !title || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  
  next();
};
    
module.exports = post;