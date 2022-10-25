const express = require('express');
const MarcaService = require('../services/marca.service');
const validatorHandler = require('../middlewares/validator.handler');

const {
  createMarcaSchema,
  getMarcaSchema,
  updateMarcaSchema,
} = require('../schemas/marca.schema');

const router = express.Router();
const service = new MarcaService();

router.get('/', async (req, res, next) => {
  try {
    const marca = await service.find();
    res.json(marca);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getMarcaSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const marca = await service.findOne(id);
      res.json(marca);
    } catch (error) {
      next(error);
    }
  }
);
router.post(
  '/',
  validatorHandler(createMarcaSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newMarca = await service.create(body);
      res.status(201).json(newMarca);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(getMarcaSchema, 'params'),
  validatorHandler(updateMarcaSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const marca = await service.update(id, body);
      res.json(marca);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getMarcaSchema, 'params'),
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
