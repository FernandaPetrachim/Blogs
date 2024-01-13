const express = require('express');
const autori = require('../middlewares/authMid');
const postCon = require('../controllers/postCon');
const postMid = require('../middlewares/postMid');
const onepostMid = require('../middlewares/onePostMid');

const routePost = express.Router();

// Rotas relacionadas aos posts
routePost.get('/post', autori, postCon.getAllPosts);
routePost.post('/post', autori, postMid, postCon.createPost);
routePost.get('/post/search', autori, postCon.createPost);
routePost.get('/post/:id', autori, postCon.findPostById);
routePost.put('/post/:id', autori, onepostMid, postCon.updatePost);
routePost.delete('/post/:id', autori, postCon.deletePost);
