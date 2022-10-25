const Joi = require('joi');

const id = Joi.number().integer();
// const customerId = Joi.number().integer();
const userId = Joi.number().integer();
const delivered = Joi.boolean()
const productId = Joi.number().integer();
const orderId = Joi.number().integer();
const amount = Joi.number().integer().min(1);

const getOrderSchema = Joi.object({
  id: id.required(),
});

const createOrderSchema = Joi.object({
  // customerId: customerId.required(),
  userId: userId.required(),
  delivered: delivered
});
const UpdateOrderSchema = Joi.object({
  delivered: delivered
});
const addItemSchema = Joi.object({
  orderId: orderId.required(),
  productId: productId.required(),
  amount: amount.required(),
  // delivered: delivered.required()
});
const updateItemOrderSchema = Joi.object({
  amount: amount
})

module.exports = { UpdateOrderSchema, updateItemOrderSchema, getOrderSchema, createOrderSchema, addItemSchema };
