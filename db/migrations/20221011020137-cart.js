'use strict';
const { CartSchema, CART_TABLE } = require('../models/carts.model')
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CART_TABLE, CartSchema);
  },

  async down (queryInterface) {
    await queryInterface.createTable(CART_TABLE);
  }
};
