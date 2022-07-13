const mongoose=require("mongoose");

const validator=require("validator");

const userSchema=mongoose.Schema({
  name:{
   type:String,
   required:true,
  },
  email:{
   type:String,
   requires:true,
   validate(value){
    if(!validator.isEmail(value))
throw new error("Invalid email entered")
   }
  },
  phone:{
   type:Number,
   requires:true
  },
  message:{
   type:String,
   requires:true
  }
})

const User=mongoose.model("User",userSchema)

module.exports=User