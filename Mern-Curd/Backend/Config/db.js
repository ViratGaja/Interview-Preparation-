
const mongoose=require("mongoose")


const Main_DB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB Connect")

    }
    catch(err){
        console.log(err);
        
    }   
}


module.exports=Main_DB;

