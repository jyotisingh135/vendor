let sequelize=require('../../config/db');
let Sequelize=require('sequelize');
const agent=sequelize.define('tblAgent',{
    agentId:{
        type:Sequelize.STRING,
        primaryKey:true
    },
    agentName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    companyName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    street:{
        type:Sequelize.STRING,
        allowNull:false
    },
    zipId:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    classification:{
        type:Sequelize.CHAR,
        allowNull:false
    },
    warehouseId:{
        type:Sequelize.INTEGER,
        allowNull:true,
    },
    paymentTerms:{
        type:Sequelize.TEXT,
        allowNull:true,
    },
    creditLimit:{
        type:Sequelize.DATEONLY,
        allowNull:true
    },
    active:{
        type:Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:false
    }
});
module.exports={agent};