const express=require("express")
const mongoose=require("mongoose")

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



// app.post('/user',(req,res)=>{
//     const {name,age}=req.body;
    
//     const newUser={id:users.length+1,name,age}

//     if(!name){
//         res.status(400).json({message:"user name is missing"})
//     }
//     users.push(newUser)
//     res.json(users)
// })








// app.get('/users',(req,res)=>{
//     res.json(users)
// })





// app.get('/user/:id', (req, res) => {
//   const id = parseInt(req.params.id);

//   const user = users.find(a => a.id === id);    

//   if (!user) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   res.json(user);
// });





// app.use((req,res,next)=>{
//     console.log(`${req.method} ${req.url}`);
//     next()
    
// })


// app.get("/data", async (req, res) => {
//   await new Promise(resolve => setTimeout(resolve, 2000));

//   res.json({ message: "Data loaded" });
// });
mongoose.connect("mongodb://localhost:27017/learn")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log(err));


const UserSchema=new mongoose.Schema({
    name:String,
    age:Number,
})

const User=mongoose.model("User",UserSchema)



app.post('/user', async(req,res)=>{
    const user= new User(req.body)
    await user.save()
    res.json(user)
})




app.get("/users",async(req,res)=>{
    const user= await User.find();
    res.json(user)
})



app.delete('/users/:id',async(req,res)=>{
    await User.findByIdAndDelete(req.params.id)
    res.json({message:"Deleted"})
})



//login


const jwt=require(jsonwebtoken)


app.post("/login",(req,res)=>{
    const {username}=req.body;

    const token=jwt.sign({username},{secret},{expireIn:"1h"})

    res.json(token)
})


//middleware

const auth=(req,res,next)=>{
    const token=req.headers.authorization?.split(".")[1]

    if(!token) return res.status(401).json({message:"no token"})

        try{
            const decode=jwt.verify(token,"secret")
            req.user=decoded;
            next()
        }
        catch(err){
            console.log(err);
            
        }
}








app.listen(4000,()=>{
    console.log("Server is running")
})