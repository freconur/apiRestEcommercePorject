const express = require('express');

const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');
const orderRouter = require('./orders.router');
const customerRouter = require('./customer.router')
const marcaRouter = require('./marca.router')
const generoRouter = require('./genero.router')
const colorRouter = require('./color.router')
const cartRouter = require('./carts.router')
function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
  router.use('/orders', orderRouter);
  router.use('/customers', customerRouter);
  router.use('/marcas', marcaRouter);
  router.use('/generos', generoRouter);
  router.use('/colors', colorRouter);
  router.use('/carts', cartRouter);
}

module.exports = routerApi;
