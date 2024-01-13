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