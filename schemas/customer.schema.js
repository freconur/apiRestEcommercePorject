const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3);
const lastName = Joi.string().min(3);
const email = Joi.string().email();
const idGoogle = Joi.string();
const role = Joi.string();
const tamales = Joi.string();
const phone = Joi.number().min(9);
const userId = Joi.number().integer();

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone,
  user: Joi.object({
    email: email.required(),
    idGoogle: idGoogle.required(),
    // password: password.required(),
    role
    // tamales: tamales.required()
  }),
});

const updateCustomerSchema = Joi.object({
  name,
  lastName,
  phone,
  userId
});

const getCustomerSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createCustomerSchema,
  updateCustomerSchema,
  getCustomerSchema,
};
