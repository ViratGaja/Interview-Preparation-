// const express=require("express")
// const mongoose=require("mongoose")
// const app=express()



// app.get("/",(req,res)=>{
//     res.send("Hello everybody and welcome to today match")
// })


// const connectDB=async()=>{
//     try{
//         await mongoose.connect('mongodb+srv://gajapathi787_db_user:gaja123@cluster0.isz3hr3.mongodb.net/myDB')
//         console.log("DB Connected")
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// connectDB()

// app.get("/about",(req,res)=>{
//     res.send("hey this is about page is running")
// })





// app.listen(5000,()=>{
//     console.log(`Server is Running  ${5000}`)
// })



const express=require("express");

const app=express();

app.get(('/',(req,res)=>{
    res.send("Hello")
}))

app.listen((5000,(req,res)=>{
    console.log("Backend is running");
    
}))
