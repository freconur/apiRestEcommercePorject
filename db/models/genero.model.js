const { Model, DataTypes, Sequelize } = require('sequelize');

const GENERO_TABLE = 'genero';

const GeneroSchema = {
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


class Genero extends Model {

  static associate(models) {
    this.hasMany(models.Product, {
      as: 'products',
      foreignKey: 'generoId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: GENERO_TABLE,
      modelName: 'Genero',
      timestamps: false
    }
  }
}

module.exports = { Genero, GeneroSchema, GENERO_TABLE };