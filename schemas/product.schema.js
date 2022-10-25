const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(100);
const price = Joi.number().integer().min(10);
const description = Joi.string().min(1)
const image = Joi.string().uri();
const categoryId = Joi.number().integer();
const marcaId = Joi.number().integer();
const generoId = Joi.number().integer();
const colorId = Joi.number().integer();


const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  description: description,
  image: image.required(),
  categoryId: categoryId.required(),
  marcaId: marcaId.required(),
  generoId: generoId.required(),
  colorId: colorId.required()
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image,
  description,
  categoryId,
  marcaId,
  generoId,
  colorId
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema }
