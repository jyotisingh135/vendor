const Sequelize=require('sequelize');
const sequelize=new Sequelize('vendor1','root','',{
    host:'localhost',
    dialect:'mysql'
});
sequelize.authenticate().then(()=>{
    console.log('connected');
}).catch((err)=>{
    console.log('error',err);
})
module.exports=sequelize;