const express = require('express');
const routeLogin = require('./routeLogin');

const routes = express.Router();
// routelogin
routes.use('/login', routeLogin);

module.export = routes;