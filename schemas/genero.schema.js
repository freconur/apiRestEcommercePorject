const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const image = Joi.string().uri();

const createGeneroSchema = Joi.object({
  name: name.required(),
  image: image.required()
});

const updateGeneroSchema = Joi.object({
  name: name,
  image: image
});

const getGeneroSchema = Joi.object({
  id: id.required(),
});

module.exports = { createGeneroSchema, updateGeneroSchema, getGeneroSchema }
