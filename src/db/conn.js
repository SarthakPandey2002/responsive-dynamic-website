const mongoose=require("mongoose")


//connecting mongoDb
mongoose.connect("mongodb://localhost:27017/WebDev",{
 //useCreateIndex:true,
 //useNewParser:true,
 useUnifiedTopology:true
}).then(()=>{
 console.log("Connection with mongoDb successful")
}).catch((error)=>{
console.log(error)
})
//It returns a promise