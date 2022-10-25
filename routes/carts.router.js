const express = require('express');

const validatorHandler = require('../middlewares/validator.handler');
const CartService = require('../services/carts.service');
const {
  getCartSchema,
  createCartSchema,
  addItemCartSchema,
  updateItemCartSchema,
} = require('../schemas/carts.schema');

const router = express.Router();
const service = new CartService();
router.get('/add-item', async (req, res, next) => {
  try {
    const item = await service.findAddItemCart();
    res.json(item);
  } catch (error) {
    next(error);
  }
}
);
router.get(
  '/:id/total-products',
  validatorHandler(getCartSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const cart = await service.total(id);
      res.json(cart);
    } catch (error) {
      next(error);
    }
  }
);
router.get(
  '/:id',
  validatorHandler(getCartSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const cart = await service.findOne(id);
      res.json(cart);
    } catch (error) {
      next(error);
    }
  }
);
router.get('/', async (req, res, next) => {
  try {
    const cart = await service.find();
    res.json(cart);
  } catch (error) {
    next(error);
  }
});

router.post(
  '/',
  validatorHandler(createCartSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCart = await service.create(body);
      res.status(201).json(newCart);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/add-item',
  validatorHandler(addItemCartSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newItem = await service.addItemCart(body);
      res.status(201).json(newItem);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/add-item/:id',
  validatorHandler(getCartSchema, 'params'),
  // validatorHandler(updateItemCartSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      // const body = req.body;
      // const item = await service.updateItemCart(id, body);
      const item = await service.findOneAddItem(id);
      res.status(201).json(item);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/add-item/:id',
  validatorHandler(getCartSchema, 'params'),
  validatorHandler(updateItemCartSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const item = await service.updateItemCart(id, body);
      // const item = await service.findOneAddItem(id);
      res.status(201).json(item);
    } catch (error) {
      next(error);
    }
  }
);
router.delete(
  '/add-item/:id',
  validatorHandler(getCartSchema, 'params'),
  // validatorHandler(updateItemCartSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.deleteItemCart(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);
router.delete(
  '/:id',
  validatorHandler(getCartSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
