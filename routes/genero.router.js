const express = require('express');
const GeneroService = require('../services/genero.service');
const validatorHandler = require('../middlewares/validator.handler');

const {
  createGeneroSchema,
  getGeneroSchema,
  updateGeneroSchema,
} = require('../schemas/genero.schema');

const router = express.Router();
const service = new GeneroService();

router.get('/', async (req, res, next) => {
  try {
    const genero = await service.find();
    res.json(genero);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getGeneroSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const genero = await service.findOne(id);
      res.json(genero);
    } catch (error) {
      next(error);
    }
  }
);
router.post(
  '/',
  validatorHandler(createGeneroSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newGenero = await service.create(body);
      res.status(201).json(newGenero);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(getGeneroSchema, 'params'),
  validatorHandler(updateGeneroSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const genero = await service.update(id, body);
      res.json(genero);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getGeneroSchema, 'params'),
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
