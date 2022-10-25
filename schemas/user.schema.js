const Joi = require('joi');

const id = Joi.number().integer();
const idGoogle = Joi.string();
const email = Joi.string().email();
const password = Joi.string().min(8);
const tamales = Joi.string().min(5)
const role = Joi.string().min(5)

const createUserSchema = Joi.object({
  email: email.required(),
  idGoogle: idGoogle.required(),
  // password: password.required(),
  // tamales: tamales.required(),
  role: role
});

const updateUserSchema = Joi.object({
  role: role,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
