const express = require('express');
// criando roteador para o express
const loginMid = require('../middlewares/loginMid');
const loginCon = require('../controllers/loginCon');

const routeLogin = express.Router();

routeLogin.post('/', loginMid, loginCon.login);

module.exports = routeLogin;