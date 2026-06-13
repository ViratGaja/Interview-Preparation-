import express from "express";


const app = express();

app.use(express.json())

const todo = []

//post
app.post('/todo', (req, res) => {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({
            message: "please enter the title"
        })
    }
    const result = {
        id: todo.length + 1,
        title
    }
    todo.push(result);
    res.status(201).json(todo)
})




//get
app.get('/all',(req,res)=>{
    res.json(todo)
})



//particular value
app.get('/all/:id',(req,res)=>{
    const {id}=req.params;

    const todos=todo.find(a=>a.id===Number(id));

    if(!todos){
        return res.status(400).json({
            message:"not match"
        })
    }

    res.status(200).json(todos)

})



//delete
app.delete('/all/:id',(req,res)=>{
    const {id}=req.params;


    const result=todo.filter(a=>a.id !==Number(id))
    res.status(200).json(result)
})


//put
app.put('/all/:id',(req,res)=>{
    const {id}=req.params;
    const result=todo.map(a=>a.id===Number(id)?{...a,...req.body}:a);
    res.status(200).json(result)
})






app.listen(2000, () => {
    console.log("backend is running")
})