'use strict';
const { ProductSchema, PRODUCT_TABLE } = require('../models/product.model');
const { CategorySchema, CATEGORY_TABLE } = require('../models/category.model');
const { MarcaSchema, MARCA_TABLE } = require('../models/marca.model')
const { GeneroSchema, GENERO_TABLE } = require('../models/genero.model');
const { ColorSchema, COLOR_TABLE } = require('../models/color.model');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(MARCA_TABLE, MarcaSchema);
    await queryInterface.createTable(GENERO_TABLE, GeneroSchema);
    await queryInterface.createTable(COLOR_TABLE, ColorSchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);

  },

  async down (queryInterface) {
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(GENERO_TABLE);
    await queryInterface.dropTable(COLOR_TABLE);
    await queryInterface.dropTable(MARCA_TABLE)

  }
};
