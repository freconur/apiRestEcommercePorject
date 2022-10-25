const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CategoryService {

  constructor(){
  }
  async create(data) {
    const newcategory = await models.Category.create(data)
    return newcategory;
  }

  async find() {
    const rta = await models.Category.findAll();
    return rta;
  }

  async findOne(id) {
    const category = await models.Category.findByPk(id, {
      // include: ['products']
      include: [{
        association:'products',
          include: ['category', 'marca', 'color']
      }]
    })
    if(!category) {
      throw boom.notFound('user not found')
    }
    return category;
  }

  async update(id, changes) {
    const category = await this.findOne(id)
    const rta = await category.update(changes)
    return rta
  }

  async delete(id) {
    const category = await this.findOne(id)
    await category.destroy()
    return { user }
  }

}

module.exports = CategoryService;
