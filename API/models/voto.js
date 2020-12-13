'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Voto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Voto.hasOne(models.Carta, {
        through: 'CartaRole',
        foreignKey: 'ID',
        sourceKey: 'IDCarta',
        as: 'Carta'
      })

      Voto.hasOne(models.Usuario, {
        through: 'UsuariosRole',
        foreignKey: 'ID',
        sourceKey: 'IDUsuario',
        as: 'Usuario'
      })

      Voto.hasOne(models.Historia, {
        through: 'HistoriaRole',
        foreignKey: 'ID',
        sourceKey: 'IDHistoria',
        as: 'Historia'
      })
    }
  };
  Voto.init({
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    IDUsuario: DataTypes.INTEGER,
    IDCarta: DataTypes.INTEGER,
    IDHistoria: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Voto',
  });
  return Voto;
};