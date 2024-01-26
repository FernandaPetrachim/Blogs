// Resumo: Este código representa um conjunto de funções relacionadas a operações CRUD (Create, Read, Update, Delete) em postagens de blog, envolvendo modelos 
// como BlogPost, Category, PostCategory, e User
// Essas funções fornecem operações fundamentais para criar, recuperar, e atualizar postagens de blog no contexto do
// seu aplicativo Node.js
const { BlogPost, Category, PostCategory, User } = require('../models');

const validateCategory = async (categoryIds) => {
  const arrayPromise = categoryIds.map((categoryId) =>
    Category.findByPk(categoryId));
  const result = await Promise.all(arrayPromise);
  console.log('arrayPromise', arrayPromise);
  console.log('result', result);
  
  return arrayPromise;
};

const createPost = async (newPost, id) => {
  const { title, content, categoryIds } = newPost;
  const newPost1 = { title, content, userId: id, published: new Date(), updated: new Date() };
  const xablau = await validateCategory(categoryIds);
  console.log('oiiiiiiiiiiiiiiiiiiiiiiiiii', xablau);

  const post = await BlogPost.create(newPost1);
  const postId = post.id;

  const promises = categoryIds.map((categoryId) =>
    PostCategory.create({ postId, categoryId }));
  await Promise.all(promises);
  return { status: 201, data: post };
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
};