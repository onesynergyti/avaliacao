'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Carta.belongsToMany(models.Voto, {
        through: 'CartaRole',
        foreignKey: 'IDCarta'
      })
    }
  };
  Carta.init({
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    Valor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Carta',
  });
  return Carta;
};