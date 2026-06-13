import express from "express";


const app = express();

app.use(express.json())


//middleware

const user=(req,res)=>{
    console.log(`${req.method} and ${req.url}`);

    next()
    
}

app.use(user)



app.listen(2000, () => {
    console.log("backend is running")
})