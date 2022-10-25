const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3);
const lastName = Joi.string().min(3);
const phone = Joi.number().min(9)

const createCustomerSchema = Joi.object({
    name: name.required(),
    lastName: lastName.required(),
    phone: phone
})

const updateCustomerSchema = Joi.object({
    name: name,
    lastName: lastName,
    phone: phone
})

const getCustomerSchema = Joi.object({
    id:id.required()
})

module.exports = {createCustomerSchema, updateCustomerSchema, getCustomerSchema}