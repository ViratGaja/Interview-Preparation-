import express from "express";


const app = express();

app.use(express.json())


const AuthMiddleWare=(req,res,next)=>{
    const token=req.headers.authorization;

    if(!token){
        res.status(400).json({
            message:"Please enter the validate token"
        })
    }
    if(token !=="mysecrettoken"){
        res.status(403).json({
            message:"unAuthorization"
        })
    }

    next()
}


app.use("/use",AuthMiddleWare,(req,res)=>{
    res.send("Hello everybody")
})


app.listen(2000, () => {
    console.log("backend is running")
})