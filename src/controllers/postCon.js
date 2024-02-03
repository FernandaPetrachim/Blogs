const postService = require('../services/ServicePost');

const createPost = async (req, res) => {
  const newPost = req.body;
  const { id } = req.user;
  console.log(req.user);
  const { status, data } = await postService.createPost(newPost, id);

  return res.status(status).json(data);
};

const getAllPosts = async (_req, res) => {
  const { status, data } = await postService.findAll();

  return res.status(status).json(data);
};

const findPostById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await postService.findById(id);

  return res.status(status).json(data);
};

const updatePost = async (req, res) => {
  const userId = req.user.id;
  const { id } = req.params;
  const { title, content } = req.body;
  const { status, data } = await postService.update(id, title, content, userId);

  return res.status(status).json(data);
};

const deletePost = async (req, res) => {
  const userId = req.user.id;
  const { id } = req.params;
  const { status, data } = await postService.deletePost(id, userId);

  return res.status(status).json(data);
};

const searchPosts = async (req, res) => {
  const { q } = req.query;
  const { status, data } = await postService.searchPosts(q);

  return res.status(status).json(data);
};

module.exports = {
  createPost,
  getAllPosts,
  findPostById,
  updatePost,
  deletePost,
  searchPosts,
};
