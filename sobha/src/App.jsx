import React, { useEffect, useState } from 'react'

const App = () => {
  const[data,setData]=useState([]);
  const [name,setName]=useState("");
  const [age,setAge]=useState("");
  const [edit,setEdit]=useState(null);
  const [search,setSearch]=useState("");




  useEffect(()=>{
    const StoreData=JSON.parse(sessionStorage.getItem("users"))
    if(StoreData){
      setData(StoreData)
    }
  },[]);

  useEffect(()=>{
    sessionStorage.setItem("users",JSON.stringify(data))
  },[data])




  const handleData=(e)=>{
    e.preventDefault()


    if(edit !==null){
      const main_result=data.map(a=>a.id===edit?{...a,name,age}:a);
      setData(main_result);
      setEdit(null)

    }
    else{

    setData([...data,{id:Date.now(),name,age}]);
    }


    setName("");
    setAge("")






  }
      const remove=(id)=>{
      const result=data.filter(a=>a.id!==id);
      return setData(result)
    }

const handleEdit=(a)=>{
  setEdit(a.id);
  setName(a.name);
  setAge(a.age)
}

const main_result=data.filter((a)=>{
  const result=a.name.toUpperCase().includes(search.toUpperCase()) || a.age.toString().includes(search.toString())
   return result

})




  return (
    <div>
      <input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder='Search' />
      <form onSubmit={handleData} action="">
      <input type="text" onChange={(e)=>setName(e.target.value)} value={name} placeholder='Name' />
      <input type="text" onChange={(e)=>setAge(e.target.value)} value={age} placeholder='age' />
      <button type='submit'>{edit?"update":"submit"}</button>
      </form>


      {main_result.map((a)=>(
        <h1 key={a.id}>{a.name} and {a.age} <button onClick={()=>remove(a.id)}>Delete</button> <button onClick={()=>handleEdit(a)}>Edit</button></h1>
      ))}




    </div>
  )
}

export default App