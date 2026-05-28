const Employee=require('../models/Employee');


const CreateEmployee=async(req,res)=>{
    try{
        const user=await Employee.create(req.body);
        res.status(201).json(user)

    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}


const GetAll=async(req,res)=>{
    try{
        const all_user=await Employee.find();
        res.status(200).json(all_user)

    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}



const SingleGet=async(req,res)=>{
    try{
        const singleUser=await Employee.findById(req.params.id)
        res.status(200).json(singleUser)
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}




const UpdateUser=async(req,res)=>{
    try{
        const update=await Employee.findByIdAndUpdate(
            req.params.id,
            
            req.body,
            {new:true}
        )
        res.status(200).json(update)

    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}


const Delete_user=async(req,res)=>{
    try{
        const deleteUser=await Employee.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Employee Deleted" });

    }
     catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}


module.exports={CreateEmployee,GetAll,SingleGet,UpdateUser,Delete_user}