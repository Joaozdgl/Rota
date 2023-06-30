const express = require('express')
const controlers= require('./controlers/recursos');

const routes = express.Router();

routes.get('/',controler.raiz);

module.exports = routes;
