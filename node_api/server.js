let express=require('express');
let bodyParser=require('body-parser');
let app=express();
let router=require('./routes/routes');
app.use(bodyParser.json());
router.route(app);
app.listen(3001,()=>{
    console.log('started server on port 3001')
})