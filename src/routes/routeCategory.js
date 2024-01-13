// Resumo: criando todas as rotas para categorias em um só lugar, para lidar mais fácil com possivel 
// erros e ficar mais organziado o código

const express = require('express');
const autori = require('../middlewares/authMid');
const CategoryCon = require('../controllers/categoryCon');
const categoriesMid = require('../middlewares/categoriesMid');

const routesCategory = express.Router();

routesCategory.get('/categories', autori, CategoryCon.getAllCategories);
routesCategory.post('/categories', autori, categoriesMid, CategoryCon.createCategory);

// Rotas relacionadas às categorias
routesCategory.get('/categories', autori, CategoryCon.getAllCategories);
routesCategory.post('/categories', autori, categoriesMid, CategoryCon.createCategory);

module.exports = routesCategory;