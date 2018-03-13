let sequelize=require('../../config/db');
let Sequelize=require('sequelize');
const user=sequelize.define('tblUser',{
    userId:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    username:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    },
    userType:{
        type:Sequelize.CHAR,
        allowNull:false
    }
});
module.exports={user};