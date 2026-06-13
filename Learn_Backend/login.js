import express from "express";
import jwt from 'jsonwebtoken'

const app = express();

app.use(express.json())


//Login

const user=[
    {
        id:1,
        email:"king@gmail.com",
        password:"123"
    }
]


app.post('/login',(req,res)=>{
    const {email,password}=req.body;

    if(!email || !password){
        res.status(400).json({
            message:"Enter the email and password"
        })
    }

    const user =user.find(a=>a.email===email && a.password===password);

    if(!user){
        res.status(401).json({
            message:"invalid credential"
        })
    }

    const token=jwt.sign({
        id:user.id,
        email:user.email,
    },
    "secretkey",{
        expiresIn:"1h"
    }


)
    res.status(200).json({
        message:"Login Successfully",
        token
    })

})

app.listen(2000, () => {
    console.log("backend is running")
})