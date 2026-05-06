const mongoose=require("mongoose");


const UserDetails=new mongoose.Schema({
    name:String,
    age:Number,
    address:String
    
})

const User= mongoose.model("DB",UserDetails)

module.exports=User