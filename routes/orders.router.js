const express = require('express');

const OrderService = require('../services/order.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
  getOrderSchema,
  createOrderSchema,
  addItemSchema,
  updateItemOrderSchema,
  UpdateOrderSchema
} = require('../schemas/order.schema');

const router = express.Router();
const service = new OrderService();

router.get('/add-item-order', async (req, res, next) => {
  try {
    const item = await service.findAddItemOrder();
    res.json(item);
  } catch (error) {
    next(error);
  }
}
);

router.get(
  '/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const order = await service.findOne(id);
      res.json(order);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/', async (req, res, next) => {
  try {
    const order = await service.find();
    res.json(order);
  } catch (error) {
    next(error);
  }
});
router.post(
  '/',
  validatorHandler(createOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newOrder = await service.create(body);
      res.status(201).json(newOrder);
    } catch (error) {
      next(error);
    }
  }
);
router.post(
  '/',
  validatorHandler(createOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newOrder = await service.create(body);
      res.status(201).json(newOrder);
    } catch (error) {
      next(error);
    }
  }
);
router.patch('/:id',
  validatorHandler(getOrderSchema, 'params'),
  validatorHandler(UpdateOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);
router.post(
  '/add-item-order',
  validatorHandler(addItemSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newItem = await service.addItem(body);
      res.status(201).json(newItem);
    } catch (error) {
      next(error);
    }
  }
);
router.get(
  '/add-item-order/:id',
  validatorHandler(getOrderSchema, 'params'),
  // validatorHandler(updateItemCartSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      // const body = req.body;
      // const item = await service.updateItemCart(id, body);
      const item = await service.findOneItemOrder(id);
      res.status(201).json(item);
    } catch (error) {
      next(error);
    }
  }
);
router.patch(
  '/add-item-order/:id',
  validatorHandler(getOrderSchema, 'params'),
  validatorHandler(updateItemOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const item = await service.updateItemOrder(id, body);
      // const item = await service.findOneAddItem(id);
      res.status(201).json(item);
    } catch (error) {
      next(error);
    }
  }
);
router.delete(
  '/add-item-order/:id',
  validatorHandler(getOrderSchema, 'params'),
  // validatorHandler(updateItemCartSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.deleteItemOrder(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);
router.delete(
  '/:id',
  validatorHandler(getOrderSchema, 'params'),
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
