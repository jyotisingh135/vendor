let userController=require('../component/user/userController')
let agentController=require('../component/agent/agentController');
let carrierController=require('../component/carrier/carrierController');
exports.route=(app)=>{

    ////////////////Agent///////////////////////

    app.post('/api/agent',agentController.addAgent);
    app.get('api/agent');
    app.put('/api/agent/:id');
    app.delete('/api/agent/:id');


///////////////Login///////////////////
    app.post('/api/login/user',userController.addUser);
    app.post('/api/login',userController.login);
    app.delete('api/login/:id');



}