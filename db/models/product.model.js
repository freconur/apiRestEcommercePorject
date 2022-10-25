const { Model, DataTypes, Sequelize } = require('sequelize');

const { CATEGORY_TABLE } = require('./category.model');
const { COLOR_TABLE } = require('./color.model');
const { GENERO_TABLE } = require('./genero.model');
const { MARCA_TABLE } = require('./marca.model');

const PRODUCT_TABLE = 'product';

const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  categoryId: {
    field: 'category_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CATEGORY_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  marcaId: {
    field: 'marca_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: MARCA_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  generoId: {
    field: 'genero_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: GENERO_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  colorId: {
    field: 'color_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: COLOR_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}


class Product extends Model {

  static associate(models) {
    this.belongsTo(models.Category, { as: 'category' });
    this.belongsTo(models.Marca, { as: 'marca' });
    this.belongsTo(models.Genero, { as: 'genero' });
    this.belongsTo(models.Color, { as: 'color' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false
    }
  }
}

module.exports = { Product, ProductSchema, PRODUCT_TABLE };