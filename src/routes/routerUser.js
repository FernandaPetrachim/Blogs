// Resumo: Rotas relacionadas ao usuário, todas juntas para ficar mais tranquilo de enviar para o 
// app e corrigir os erros futuramente.
const express = require('express');
const userCon = require('../controllers/userCon');
const autori = require('../middlewares/authMid');
const usuario = require('../middlewares/userMid');

const routeUser = express.Router();

routeUser.get('/user', autori, userCon.getAllUsers);
routeUser.post('/user', usuario, userCon.createUser);

routeUser.get('/user/:id', autori, userCon.findUserById);

module.exports = routeUser;