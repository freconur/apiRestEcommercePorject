const faker = require('faker');
const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ProductsService {

  constructor(){}

  async create(data) {
    const newProduct = await models.Product.create(data)
    return newProduct;
  }

  async find() {
    const rta = await models.Product.findAll({
      // include: ['category']
      // include: ['category', 'marca','genero', 'color' ]
      include: ['category','marca']
    });
    return rta;
  }
async findByName(name) {
  const rta = await models.Product.findAll({
    include: ['marca'] 
  })
  const products =  rta.filter(product => product.name.toLowerCase().includes(name.toString().toLowerCase()));
  return products
}
  async findOne(id) {
    const product = await models.Product.findByPk(id,{
      include: ['category', 'marca', 'genero', 'color']
    }
      )
    if(!product) {
      throw boom.notFound('product not found')
    }
    return product;
  }

  async update(id, changes) {
    const product = await this.findOne(id)
    const rta = await product.update(changes)
    return rta
  }

  async delete(id) {
    const product = await this.findOne(id)
    await product.destroy()
    return { product }
  }

}

module.exports = ProductsService;
