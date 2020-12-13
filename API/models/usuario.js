'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuario.belongsToMany(models.Voto, {
        through: 'UsuariosRole',
        foreignKey: 'IDUsuario'        
      })
    }
  };
  Usuario.init({
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    Nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};