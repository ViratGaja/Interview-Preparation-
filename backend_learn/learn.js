const express=require("express");


const app=express();


app.use(express.json())







let AllData=[];

app.post('/users',(req,res)=>{
    const data={
        id:AllData.length+1,
        name:req.body.name,
        age:req.body.age
    }
    AllData.push(data)

    res.json(AllData)
})




app.get('/all',(req,res)=>{
    res.json(AllData)
})



app.get('/all/:id',(req,res)=>{
    const {id}=req.params
    const result=AllData.find(a=>a.id===parseInt(id));
    res.json(result)
})


app.delete('/all/:id',(req,res)=>{
    const {id}=req.params;
    const result=AllData.filter(a=>a.id !==parseInt(id));

    res.json({
        message:"deleted successfully",
        data:result
    })
})

app.put("/all/:id",(req,res)=>{
    const {id}=req.params;
    const result=AllData.find(a=>a.id===parseInt(id));
    if(!result){
        res.status(400).json({
            message:"please enter valid"
        })
    }

    result.name=req.body.name;
    result.age=req.body.age;


    res.json({
        message:"update",
        result  
    })
})




const middleware=(req,res)=>{
    const token=req.header.authorization

    if(!token){
        res.status(404).json({
            message:"not token"
        })
    }

    if(token !=="12345"){
          res.status(404).json({
            message:"not token"
        })
    }

    next()
}


app.get('',middleware,(req,res)=>{
res.json({
    message:"success"
})
})










const PORT=4000

app.listen(PORT,()=>{
    console.log("backend is running");
    
})

