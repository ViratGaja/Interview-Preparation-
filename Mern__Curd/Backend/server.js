const express=require("express");

const app=express();
const mongoose=require("mongoose");

const cors=require("cors");

require("dotenv").config();
const EmployeeRouter=require('./routes/employeeRoute')

app.use(cors())
app.use(express.json())





app.use('/api/employees',EmployeeRouter)


mongoose.connect(process.env.MONGO_URL)
        .then(()=>{
            console.log("Backend DB is running");
            
        })
        .catch((err)=>{
            console.log(err);
            
        })




app.listen(5000,(req,res)=>{
    console.log("Backend is the Running");
    
})