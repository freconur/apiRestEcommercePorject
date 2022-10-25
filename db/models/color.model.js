const { Model, DataTypes, Sequelize } = require('sequelize');

const COLOR_TABLE = 'color';

const ColorSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
}


class Color extends Model {

  static associate(models) {
    this.hasMany(models.Product, {
      as: 'products',
      foreignKey: 'colorId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName:  COLOR_TABLE,
      modelName: 'Color',
      timestamps: false
    }
  }
}

module.exports = { Color, ColorSchema, COLOR_TABLE };