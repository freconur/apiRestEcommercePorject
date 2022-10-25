const express = require('express');
const {getOrderSchema, createOrderSchema} = require('../schemas/order.schema')
const OrderService = require('../services/order.service');
const validatorHandler = require('../middlewares/validator.handler')
const router = express.Router(); 
const service = new OrderService()

router.post('/', 
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

module.exports = router;
