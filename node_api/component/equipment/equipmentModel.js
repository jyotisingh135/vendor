let sequelize=require('../../config/db');
let Sequelize=require('sequelize');
const equipment=sequelize.define('tblEquipment',{
    equipmentId:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    equipmentName:{
        type:Sequelize.STRING,
        allowNull:false
    }
});
module.exports={equipment};