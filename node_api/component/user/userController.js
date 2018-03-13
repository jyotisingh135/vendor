let {user}=require('./userModel');
let sequelize=require('../../config/db');
exports.addUser=(req,res)=>{
        console.log(req.body);
    user.sync().then(()=>{
        user.create(req.body).then((user)=>{
            res.send(user);
        })

})}

exports.login=(req,res)=>{
        sequelize.query("select * from tblUsers where email='"+req.body.email+"' and password='"+req.body.password+"'",{type:sequelize.QueryTypes.SELECT}).then((tblUsers)=>{
            console.log(tblUsers[0]);
            if(tblUsers[0]!==undefined){
                tblUsers.map((v)=>{

                    res.send({email: v.email, userType: v.userType, msg: 'success'})
                })

            }
            else{
                console.log('fail');
                res.send({email: '', userType: '', msg: 'fail'})
            }
        });
}
