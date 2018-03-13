let sequelize=require('../../config/db');
let Sequelize=require('sequelize');
const service=sequelize.define('tblService',{
    serviceId:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    serviceName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    type:{
        type:Sequelize.CHAR,
        allowNull:false
    }
});
module.exports={service};