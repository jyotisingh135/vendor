'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tblAgents', {
        agentId:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        agentName:{
            type:Sequelize.STRING(40),
            allowNull:false
        },
        companyName:{
            type:Sequelize.STRING(40),
            allowNull:false
        },
        street:{
            type:Sequelize.STRING(30),
            allowNull:false
        },
        zipCode:{
            type:Sequelize.INTEGER,
            allowNull:false
        },
        classification:{
            type:Sequelize.CHAR(1),
            allowNull:false
        },
        warehouseId:{
            type:Sequelize.INTEGER,
            allowNull:true
        },
        coi:{
            type:Sequelize.STRING(20),
            allowNull:false
        },
        paymentTerms:{
            type:Sequelize.TEXT,
            allowNull:true
        },
        creditLimit:{
            type:Sequelize.DATEONLY,
            allowNull:false
        },
        active:{
            type:Sequelize.BOOLEAN,
            allowNull:false,
            defaultValue: false
        }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tblAgents');
  }
};