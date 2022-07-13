const express=require('express');
const path=require('path')
require("./db/conn");
const user=require("./model/usermessage")
const hbs=require("hbs");
const { extend } = require('jquery');
const app=express();
const port=process.env.PORT || 3000;

//setting path 
//checking our path from path.join
// console.log(path.join(__dirname,"../public"));
const staticpath = path.join(__dirname,"../public")
const templatepath = path.join(__dirname,"../Templates/views")
const partialspath = path.join(__dirname,"../Templates/partials")
app.use(express.urlencoded({extended:false}))
app.use(express.static(staticpath))
app.use('/css',express.static(path.join(__dirname,  "../node_modules/bootstrap/dist/css")))
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")))
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")))
//setting our view engine
app.set("view engine","hbs")
app.set("views",templatepath)
hbs.registerPartials(partialspath)
//routing
app.get('/',(req,res)=>{
res.render("index")
})
app.post("/contact",async(req,res)=>{
try {
 // 
 const userData=new user(req.body);
 await userData.save();
 res.status(201).render("index")
} catch (error) {
 res.status(500).send(error)
}
})

app.listen(port,()=>{
 console.log(`Server is listening at ${port}`)
})