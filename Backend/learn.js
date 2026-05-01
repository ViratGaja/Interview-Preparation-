const express=require("express")


const app= express()

app.use(express.json())

// app.get("/hello",(req,res)=>{
//     res.json({message:"Heyy this is for hello"})
// })

const users=[]
// app.post('/user',(req,res)=>{

//     const {name,age}=req.body;
//     const NewUsers={id:users.length+1,name,age}
//     users.push(NewUsers)
//     res.json({message:"success add"})
// })



app.post('/user',(req,res)=>{
    const {name,age}=req.body;
    
    const newUser={id:users.length+1,name,age}

    if(!name){
        res.status(400).json({message:"user name is missing"})
    }
    users.push(newUser)
    res.json(users)
})








app.get('/users',(req,res)=>{
    res.json(users)
})





app.get('/user/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const user = users.find(a => a.id === id);    

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});





app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next()
    
})



app.listen(4000,()=>{
    console.log("Server is running")
})