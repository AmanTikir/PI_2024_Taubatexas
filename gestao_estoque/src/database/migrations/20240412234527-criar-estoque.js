'use strict';


module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.createTable('estoque', {
      id_estoque: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull: false,
      },
      localizacao_estoque: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },

    })


  },

  down (queryInterface, Sequelize) {
    return queryInterface.dropTable('estoque')
  }
};





