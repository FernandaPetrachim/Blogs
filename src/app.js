const express = require('express');
/* const loginMiddleware = require('./middlewares/loginMid'); */
const categoriesMid = require('./middlewares/categoriesMid');
const postMid = require('./middlewares/postMid');
const onepostMid = require('./middlewares/onePostMid');
const userCon = require('./controllers/userCon');
const postCon = require('./controllers/postCon');
/* const loginController = require('./controllers/loginCon'); */
const CategoryCon = require('./controllers/categoryCon');
const autori = require('./middlewares/authMid');
const usuario = require('./middlewares/userMid');
const routes = require('./routes');

const app = express();

app.use(express.json());

// Endpoint padrão
app.get('/', (_request, response) => {
  response.send();
});
// vai estar todas as rotas dentro do index e puxar por aqui
app.use(routes);

// Rotas relacionadas ao usuário
app.get('/user', autori, userCon.getAllUsers);
app.post('/user', usuario, userCon.createUser);

app.get('/user/:id', autori, userCon.findUserById);

// Rotas relacionadas às categorias
app.get('/categories', autori, CategoryCon.getAllCategories);
app.post('/categories', autori, categoriesMid, CategoryCon.createCategory);

// Rotas relacionadas aos posts
app.get('/post', autori, postCon.getAllPosts);
app.post('/post', autori, postMid, postCon.createPost);
app.get('/post/search', autori, postCon.createPost);
app.get('/post/:id', autori, postCon.findPostById);
app.put('/post/:id', autori, onepostMid, postCon.updatePost);
app.delete('/post/:id', autori, postCon.deletePost);

module.exports = app;
