const express=require("express");
const app=express()
const Main_DB=require('./Config/db')
const dotenv=require("dotenv")
const router=require('./routes/UserRoutes')
const cors=require('cors')
dotenv.config()
Main_DB()

app.use(express.json())
app.use(cors())

app.use('/api/users',router)


app.listen(5000,(req,res)=>{
    console.log("backend is running")
})