//  Resumo do código: O código verifica se name existe e não é uma string vazia. Se isso for verdadeiro,
// ele chama a função next(), permitindo que a execução prossiga para o próximo middleware ou rota na cadeia. Caso contrário, se name for falso ou uma string vazia, ele responde com um status HTTP 400 e uma mensagem indicando que 
// o campo name é obrigatório.
const categories = (req, res, next) => {
  const { name } = req.body;
  if (name && name !== '') {
    next();
  } else {
    return res.status(400).json({ message: '"name" is required' });
  }
};
module.exports = categories;