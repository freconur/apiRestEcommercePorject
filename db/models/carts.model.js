const { Model, DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./user.model')

const CART_TABLE = 'carts';
const CartSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
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

class Cart extends Model {
  static associate(models) {
    this.belongsTo(models.User,{ as:'user' })
    // this.belongsTo(models.Customer, {
    //   as: 'customer',
    // });
    this.belongsToMany(models.Product, {
      as:'items',
      through: models.CartProduct,
      foreignKey:'cartId',
      otherKey:'productCartId'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CART_TABLE,
      modelName: 'Cart',
      timestamps: false
    }
  }
}


module.exports = { CART_TABLE, CartSchema, Cart }