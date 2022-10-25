const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class OrderService {

  constructor(){
  }

  async create(data) {
    const newOrder = await models.Order.create(data);
    return newOrder;
  }

  async find() {
    const rta = await models.Order.findAll();
    return rta;
  }

  async addItem(data) {
    const item = await models.OrderProduct.create(data);
    return item;
  }

  async findOne(id) {
    const order = await models.Order.findByPk(id, {
      include: [
        'user',
        'items'
      ]
    });
    return order;
  }

  async update(id, changes) {
    const order = await this.findOne(id)
    const rta = await order.update(changes)
    return rta;
  }

  async delete(id) {
    const cart = await this.findOne(id)
    await cart.destroy()
    return { id };
  }
  //////////add-item-order/////////////////////
  async addItem(data) {
    const item = await models.OrderProduct.create(data);
    return item;
  }
  async findAddItemOrder() {
    const item = await models.OrderProduct.findAll()
    return item
  }
  async findOneItemOrder(id) {
    const item = await models.OrderProduct.findByPk(id)
    return item
  }
  async updateItemOrder(id, changes) {
    const findItem = await this.findOneItemOrder(id);
    const rta = await findItem.update(changes)
    return rta;
  }
  async deleteItemOrder(id) {
    const cart = await this.findOneItemOrder(id)
    await cart.destroy()
    return { id };
  }
  //////////add-item-order/////////////////////

}

module.exports = OrderService;
