const { Model, DataTypes, Sequelize } = require('sequelize');

const MARCA_TABLE = 'marca';

const MarcaSchema = {
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


class Marca extends Model {

  static associate(models) {
    this.hasMany(models.Product, {
      as: 'products',
      foreignKey: 'marcaId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: MARCA_TABLE,
      modelName: 'Marca',
      timestamps: false
    }
  }
}

module.exports = { Marca, MarcaSchema, MARCA_TABLE };