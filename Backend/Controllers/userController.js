const User = require('../models/User');




//Create USer


exports.createUse = async (req, res) => {

    try {
        const user = await User.create(req.body);
        res.json(user)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

//get All user

exports.getUser = async (req, res) => {
    try {
        const Users = await User.find();
        res.json(Users)
    }
   catch(err){
    res.status(500).json({message:err.message})
   }
}



//read single


exports.SingleUser=async(req,res)=>{
    try{
        const SingleUser=await User.findById(req.params.id);
        res.json(SingleUser)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}



//update

exports.UpdateUsr=async(req,res)=>{
    try{
        const updatedUser=await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json(updatedUser)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}


//DeleteUser

exports.DeleteUser=async(req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
        res.json({message:"User Deleted"})
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}