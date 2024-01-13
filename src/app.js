const express = require('express');
const routesPost = require('./routes/routePost');
const routesLogin = require('./routes/routeLogin');
const routesUser = require('./routes/routerUser');
const routesCategory = require('./routes/routeCategory');

const app = express();

app.use(express.json());

// Endpoint padrão
app.get('/', (_request, response) => {
  response.send();
});
// vai estar todas as rotas dentro do route(pasta) e puxar por aqui, deixar código mais limmpo e mais organizado
app.use(routesLogin);
app.use(routesUser);
app.use(routesCategory);
app.use(routesPost);

module.exports = app;
