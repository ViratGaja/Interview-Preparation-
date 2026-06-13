import express from "express";


const app = express();

app.use(express.json())


const register=[]

//Register

app.post('/register',(req,res)=>{
    const {name,email,password}=req.body;

    if(!email || !password  || !name){
        res.status(400).json({
            message:"please enter the required field"
        })
    }


    const existing=register.find(u=>u.email===email);

    if(existing){
        res.status(400).json({
            message:"Already email is there"
        })
    }


    const result={
        id:register.length+1,
        name,
        email,
        password
    }

    register.push(result);


    res.status(200).json({
        message:"successfully register",
        result
    })




})







app.listen(2000, () => {
    console.log("backend is running")
})