'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Historia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Historia.belongsToMany(models.Voto, {
        through: 'HistoriaRole',
        foreignKey: 'IDHistoria'        
      })
    }
  };
  Historia.init({
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    Descricao: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Historia',
  });
  return Historia;
};