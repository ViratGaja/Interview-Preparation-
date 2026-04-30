const mongoose=require("mongoose")



const DdCOnnection =async()=>{
    try{
        await mongoose.connect('mongodb+srv://gajapathi787_db_user:gaja123@cluster0.isz3hr3.mongodb.net/?appName=Cluster0')
        console.log("Db Connected Successfully");
        
    }
    catch(err){
        console.log(err);
        
    }
}

DdCOnnection()


module.exports=DdCOnnection