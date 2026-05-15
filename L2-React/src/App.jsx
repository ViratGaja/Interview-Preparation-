import { useEffect, useState } from "react"



const App = () => {

  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [edit,setEdit]=useState(null)


    useEffect(()=>{
     const storeData=JSON.parse(localStorage.getItem("users"))
      if(storeData){
        setData(storeData)
      }
    },[])


    useEffect(()=>{
      localStorage.setItem("users",JSON.stringify(data))
    },[data])

  const handleForm = (e) => {
    e.preventDefault();








    if(edit!==null){

      const result=data.map((a)=>a.id===edit?{...a,name,age}:a)
      setData(result)
      setEdit(null)

    }

    else{
          setData([...data, { id: Date.now(), name, age }])

    }
 


    setName('')
    setAge('')

  }

  const removeDate=(id)=>{
    const result=data.filter((a)=>a.id!==id)
    return setData(result)
  }


  const updateData=(a)=>{
     setEdit(a.id)
    setName(a.name);
    setAge(a.age)
  }
   



  return (

    <div>
      <form onSubmit={handleForm} action="">

        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="name" />

        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder="age" />

        <button type="submit">{edit?"update":"submit"}</button>

      </form>




      {data.map((a) => (
        <h1 key={a.id}>{a.name} and {a.age} <button onClick={()=>removeDate(a.id)}>Delete</button><button onClick={()=>updateData(a)}>Edit</button></h1>
      ))}
    </div>
  )

}


export default App