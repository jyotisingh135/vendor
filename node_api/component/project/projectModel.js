let sequelize=require('../../config/db');
let Sequelize=require('sequelize');
const project=sequelize.define('tblProject',{
    projectId:{
        type:Sequelize.STRING,
        primaryKey:true
    },
    projectQuote:{
        type:Sequelize.STRING,
        allowNull:true
    },
    projectName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    customerId:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
});
module.exports={project};