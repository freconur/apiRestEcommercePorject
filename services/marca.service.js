const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class MarcaService {
  constructor() {}

  async create(data) {
    const newMarca = await models.Marca.create(data);
    return newMarca;
  }
  async find() {
    const rta = await models.Marca.findAll();
    return rta;
  }
  async findOne(id) {
    const marca = await models.Marca.findByPk(id, {
      include: ['products']
    });
    if (!marca) {
      throw boom.notFound('user not found');
    }
    return marca;
  }
  async update(id, changes) {
    const marca = await this.findOne(id)
    const rta = await marca.update(changes)
    return rta
  }
  async delete(id) {
    const marca = await this.findOne(id)
    await marca.destroy()
    return { user }
  }
}

module.exports = MarcaService
