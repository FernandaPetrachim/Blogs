// Resumo: Este código representa um conjunto de funções relacionadas a operações CRUD (Create, Read, Update, Delete) em postagens de blog, envolvendo modelos 
// como BlogPost, Category, PostCategory, e User
const { BlogPost, Category, PostCategory, User } = require('../models');

const validateCategory = async (categoryIds) => {
  const arrayPromise = categoryIds.every((categoryId) =>
    Category.findByPk(categoryId));
  const result = await Promise.all(arrayPromise);

  return result;
};
const createPost = async (newPost, id) => {
  /* try { */
  const { title, content, categoryIds } = newPost;
  const newPost1 = { title, content, userId: id, published: new Date(), updated: new Date() };
  const post = await BlogPost.create(newPost1); 
  const categoriaverificar = await Promise.all(categoryIds.map(async (element) => {
    const procurarCategoria = await Category.findByPk(element);
    return procurarCategoria !== null;
  }));
  if (categoriaverificar.some((result) => !result)) {
    return { status: 400, data: { message: 'one or more "categoryIds" not found' } };
  }
  return { status: 201, data: 'post' };
  /*  } catch (error) {
    return { status: 400, data: { message: 'oiii' } };
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
  createPost, findAll, findById, validateCategory, update,
};
