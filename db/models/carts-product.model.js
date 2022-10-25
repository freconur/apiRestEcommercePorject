const { Model, DataTypes, Sequelize } = require('sequelize');
const { CART_TABLE } = require('./carts.model')
const { PRODUCT_TABLE } = require('./product.model')

const CART_PRODUCT_TABLE = 'cart_product';
const CartProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  amount: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  cartId: {
    field: 'cart_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CART_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  productCartId: {
    field: 'product_cart_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PRODUCT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class CartProduct extends Model {
  static associate(models) {
    //
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CART_PRODUCT_TABLE,
      modelName: 'CartProduct',
      timestamps: false
    }
  }
}


module.exports = { CartProduct, CART_PRODUCT_TABLE, CartProductSchema }