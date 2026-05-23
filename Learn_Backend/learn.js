const express = require("express");
const mongoose = require("mongoose")

const app = express();


app.use(express.json())



mongoose.connect('mongodb://127.0.0.1:27017/learn')
    .then(() => {
        console.log("DB Connected");

    })
    .catch((err) => {
        console.log(err);

    })


const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const User = mongoose.model("user", UserSchema)





app.post('/users', async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            age: req.body.age
        })

        const saveUser = await user.save();

        res.status(201).json({
            message: "User Created",
            data: saveUser
        })

    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
})


app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users)
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }

})




app.get('/users/:id', async (req, res) => {
    try {
        const result = await User.findById(req.params.id);
        if (!result) {
            res.status(404).json({
                message: "User is Not FOund"
            })
        }
        res.json(result)
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
})



app.put('/users/:id',async(req,res)=>{
    try{
        const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true});

        if(!user){
            res.status(404).json({
                message:"not updated"
            })
        }

        res.status(200).json({
            message:"update",
            data:user
        })
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
})



app.delete('/users/:id',async(req,res)=>{
    try{

        const deleteUser=await User.findByIdAndDelete(req.params.id);
        if(!deleteUser){
            res.status(404).json({
                message:"not delete"
            })
        }

        res.status(200).json({
            message:"deleted"
        })

    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
})




app.listen(5000, () => {
    console.log("backend is running");

})