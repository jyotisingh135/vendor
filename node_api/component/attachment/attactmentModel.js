let sequelize=require('../../config/db');
let Sequelize=require('sequelize');
const attachment=sequelize.define('tblAttachment',{
    attachmentId:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    fileName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    accessId:{
        type:Sequelize.STRING,
        allowNull:false
    }
});
module.exports={attachment};