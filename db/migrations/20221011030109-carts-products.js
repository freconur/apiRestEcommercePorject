'use strict';
const { CART_PRODUCT_TABLE, CartProductSchema } = require('../models/carts-product.model')
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CART_PRODUCT_TABLE, CartProductSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(CART_PRODUCT_TABLE);
  }
};
