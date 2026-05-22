
const express = require("express");
const mongoose = require("mongoose")
const app = express();

app.use(express.json())

const result = [];


mongoose.connect('mongodb://127.0.0.1:27017/learn').
    then(() => {
        console.log("DB Running");

    })
    .catch((err) => {
        console.log(err);

    })







app.post('/users', (req, res) => {
    result.push(req.body);
    res.json(result)
})



app.get("/all_users", (req, res) => {
    res.json(result)
})




app.put('/all_users/:id', (req, res) => {
    const id = req.params.id;
    result[id] = req.body;
    res.json(result[id])

})


app.delete('/all_users/:id', (req, res) => {
    const id = req.params.id;
    result.splice(id, 1)
    res.send("Delete Successfully")
})




app.listen(5000, (req, res) => {
    console.log("backend running");

})



// const mongoose=require("mongoose");


// const DB=new mongoose.Schema({
//     name:String,
//     age:Number

// })

// const User=mongoose.model("user",DB);

// module.exports=User



// app.post('/users', async (req, res) => {
//     try {
//         const User = new User(req.body);
//         await User.save();
//         res.json(User)
//     }
//     catch(err){
//         res.status(500).json({
//             message:`err.message`
//         })
//     }
   
// })

// app.get('/users',async(req,res)=>{
//     const all = await User.find();
//     res.json(all)
// })



// 
// const jwt=require("jsonwebtoken");


// const token=jwt.sign(
//     {id:1},
//     "secretkey",
//     {expiresIn:"1h"}
// )

// console.log(token);


// const auth=(req,res,err,next)=>{
//     console.log("middle ware is running");
//     next()
// }



// app.use(auth)



// app.get('/dashboad',auth,(req,res)=>{
//     console.log("product router");
    
// })


// app.get("/test",async(req,res)=>{
//     try{
//         const number=32423;
//         const result=await (number.toString());
//         console.log(result);
        
//     }
//     catch(err){
//         console.log(err);
        
//     }
// })
