let sequelize=require('../../config/db');
let Sequelize=require('sequelize');
const contact=sequelize.define('tblContact',{
    contactId:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    firstName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    lastName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    work:{
        type:Sequelize.BIGINT,
        allowNull:false
    },
    cell:{
        type:Sequelize.BIGINT,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    contactType:{
        type:Sequelize.STRING,
        allowNull:false
    },
    accessId: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
module.exports={contact};