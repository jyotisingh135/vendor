let sequelize=require('../../config/db');
let Sequelize=require('sequelize');
const carrier=sequelize.define('tblCarrier',{
    carrierId:{
        type:Sequelize.STRING,
        primaryKey:true
    },
    carrierName:{
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
    cityId:{
      type:Sequelize.INTEGER,
      allowNull:false
    },
    zipCode:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    classification:{
        type:Sequelize.BOOLEAN,
        allowNull:false
    },
    active:{
        type:Sequelize.BOOLEAN,
        allowNull:false
    }
});
module.exports={carrier};