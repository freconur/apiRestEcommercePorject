const express = require('express');
const ColorService = require('../services/color.service');
const validatorHandler = require('../middlewares/validator.handler');

const {
  createColorSchema,
  getColorSchema,
  updateColorSchema,
} = require('../schemas/color.schema');

const router = express.Router();
const service = new ColorService();

router.get('/', async (req, res, next) => {
  try {
    const color = await service.find();
    res.json(color);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getColorSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const color = await service.findOne(id);
      res.json(color);
    } catch (error) {
      next(error);
    }
  }
);
router.post(
  '/',
  validatorHandler(createColorSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newColor = await service.create(body);
      res.status(201).json(newColor);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(getColorSchema, 'params'),
  validatorHandler(updateColorSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const color = await service.update(id, body);
      res.json(color);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getColorSchema, 'params'),
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
