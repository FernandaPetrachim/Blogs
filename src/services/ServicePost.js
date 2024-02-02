// Resumo: Este código representa um conjunto de funções relacionadas a operações CRUD (Create, Read, Update, Delete) em postagens de blog, envolvendo modelos 
// como BlogPost, Category, PostCategory, e User
// Essas funções fornecem operações fundamentais para criar, recuperar, e atualizar postagens de blog no contexto do
// seu aplicativo Node.js
// Para utilizar o método .every(), é necessário fornecer uma função de callback que será
// executada para cada elemento do array. Essa função deve retornar true ou false, indicando 
// se o elemento satisfaz ou não a condição estabelecida. O método .every() irá percorrer todos 
// os elementos do array até encontrar um que não satisfaça a condição, interrompendo a execução e retornando false.
// Caso todos os elementos satisfaçam a condição, o método irá retornar true.
 
const { BlogPost, Category, PostCategory, User } = require('../models');

const validateCategory = async (categoryIds) => {
/*   try { */
  const arrayPromise = categoryIds.every((categoryId) =>
    Category.findByPk(categoryId));
  const result = await Promise.all(arrayPromise);
  console.log('arrayPromise', arrayPromise);
  console.log('result', result);
  
  return result;
  /*  } catch (error) {
    console.error('Erro ao validar categorias:', error);
    throw error;  */
};
/* }; */

const createPost = async (newPost, id) => {
/*   try { */
  const { title, content, categoryIds } = newPost;
  const newPost1 = { title, content, userId: id, published: new Date(), updated: new Date() };
  const categoriaverificar = categoryIds.map(async (element) => {
    const procurarCategoria = await Category.findByPk(element); // findByPk-chave primária
    if (!procurarCategoria) {
      return null;
    }
    return true;
  });
  if (categoriaverificar.some(null)) {
    return { status: 400, data: { message: 'one or more "categoryIds" not found' } };
  }
  
  /* const post = await BlogPost.create(newPost1); */
  /*     const postId = post.id; */
  /*  await Promise.all(categoryIds.map((categoryId) => PostCategory.create({ postId, categoryId })));  */
  return { status: 201, data: 'post' };
  /* } catch (error) {
    return { status: 400, data: { message: 'one or more "categoryIds" not found' } };
  } */
};

const findAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return { status: 200, data: posts };
};
const findById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!post) return { status: 404, data: { message: 'Post does not exist' } };
  return { status: 200, data: post };
};
const update = async (id, title, content, userId) => {
  const { data } = await findById(id);
  if (data.userId !== userId) return { status: 401, data: { message: 'Unauthorized user' } };
  await BlogPost.update({ title, content }, { where: { id } });
  const newPost = await findById(id);
  return newPost;
};
module.exports = {
  createPost,
  findAll,
  findById,
  update,
  validateCategory,
};
