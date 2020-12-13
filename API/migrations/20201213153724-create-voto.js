'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Votos', {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      IDUsuario: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Usuarios', key: 'ID'}
      },
      IDCarta: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Carta', key: 'ID'}
      },
      IDHistoria: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Historia', key: 'ID'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Votos');
  }
};