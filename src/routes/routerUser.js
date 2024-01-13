// Rotas relacionadas ao usuário
const express = require('express');
const userCon = require('../controllers/userCon');
const autori = require('../middlewares/authMid');
const usuario = require('../middlewares/userMid');

const routeUser = express.Router();

routeUser.get('/user', autori, userCon.getAllUsers);
routeUser.post('/user', usuario, userCon.createUser);

routeUser.get('/user/:id', autori, userCon.findUserById);

module.export = routeUser;