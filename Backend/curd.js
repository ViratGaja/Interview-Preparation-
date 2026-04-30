const express=require("express")
const DB=require('./config/db')
const userRoutes=require('./routes/userRouter')
const app=express()

DB()

app.use(express.json())
app.use('/api/users',userRoutes)

app.listen(3000,()=>{
    console.log("backend Server is Running");
    
})