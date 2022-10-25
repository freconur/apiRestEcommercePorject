const Joi = require('joi');

const id = Joi.number().integer();
const userId = Joi.number().integer();
const productCartId = Joi.number().integer();
const cartId = Joi.number().integer();
const amount = Joi.number().integer().min(1);

const getCartSchema = Joi.object({
  id: id.required(),
});

const createCartSchema = Joi.object({
  userId: userId.required(),
});
const addItemCartSchema = Joi.object({
  cartId: cartId.required(),
  productCartId: productCartId.required(),
  amount: amount.required(),
});
const updateItemCartSchema = Joi.object({
  // cartId: cartId.required(),
  // productCartId: productCartId.required(),
  amount: amount,
});

module.exports = { getCartSchema, createCartSchema, addItemCartSchema, updateItemCartSchema };
