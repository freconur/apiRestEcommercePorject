const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class CartService {

  constructor(){
  }

  async create(data) {
    const newCart = await models.Cart.create(data);
    return newCart;
  }

  async find() {
    const rta = await models.Cart.findAll();
    return rta;
  }

  
  ////////para addItem/////////////////
  async addItemCart(data) {
    const newItem = await models.CartProduct.create(data);
    return newItem;
  }
  async findAddItemCart() {
    const item = await models.CartProduct.findAll()
    return item
  }
  async findOneAddItem(id) {
    const item = await models.CartProduct.findByPk(id)
    return item
  }

  async updateItemCart(id, changes) {
    const findItem = await this.findOneAddItem(id);
    const rta = await findItem.update(changes)
    return rta;
  }
  ////////para addItem/////////////////

  async findOne(id) {
    const cart = await models.Cart.findByPk(id, {
      // include: ['user', 'items']
      include: [
        'user',
        {
          association:'items',
          include: ['marca', 'category']
        }
      ]
    });
    return cart;
  }
  async total(id) {
    const totalAmount = await this.findOne(id);
    let amount = 0
    totalAmount.items.forEach(item => {
      amount = amount + item.CartProduct.amount
    })
    return (amount)
  }
  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    const cart = await this.findOne(id)
    await cart.destroy()
    return { id };
  }
  async deleteItemCart(id) {
    const cart = await this.findOneAddItem(id)
    await cart.destroy()
    return { id };
  }
}

module.exports = CartService;
