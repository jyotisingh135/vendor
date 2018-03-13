let sequelize=require('../../config/db');
let Sequelize=require('sequelize');
const warehouse=sequelize.define('tblWarehouse',{
    warehouseId:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    warehouseName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    street:{
        type:Sequelize.STRING,
        allowNull:false
    },
    cityId:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    zipCode:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    agentId:{
        type:Sequelize.STRING,
        allowNull:false,
    }
});
module.exports={warehouse};