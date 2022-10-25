const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class GeneroService {
  constructor() {}

  async create(data) {
    const newGenero = await models.Genero.create(data);
    return newGenero;
  }
  async find() {
    const rta = await models.Genero.findAll();
    return rta;
  }
  async findOne(id) {
    const genero = await models.Genero.findByPk(id, {
      include: ['products']
    });
    if (!genero) {
      throw boom.notFound('user not found');
    }
    return genero;
  }
  async update(id, changes) {
    const genero = await this.findOne(id)
    const rta = await genero.update(changes)
    return rta
  }
  async delete(id) {
    const genero = await this.findOne(id)
    await genero.destroy()
    return { user }
  }
}

module.exports = GeneroService
