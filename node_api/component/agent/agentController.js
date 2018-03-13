let {agent}=require('./agentModel');
exports.addAgent=(req,res)=>{
    agent.sync().then(()=>{
        agent.create(req.body).then((result)=>{
            res.send(result);
        })
    })

}