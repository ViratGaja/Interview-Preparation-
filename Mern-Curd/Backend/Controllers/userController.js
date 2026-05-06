const User=require("../models/User")




const UserCreate=async(req,res)=>{
    try{
        const new_User=await User.create(req.body);
        res.json(new_User)

    }
    catch(err){
        console.log(err)
    }
}



const AllData=async(req,res)=>{
    try{

        const all_user=await User.find()
        res.json(all_user)

    }
    catch(err){
        console.log(err)
    }
}



const single=async(req,res)=>{
    const single_value=await User.findById(req.params.id);
    res.json(single_value);


}



const change=async(req,res)=>{
    try{
         const data_change=await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
         res.json(data_change)

    }
    catch(err){
        console.log(err)
    }   
   
}


const delete_user=async(req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    res.json("Deleted Successfully")
}


module.exports={UserCreate,AllData,single,change,delete_user}