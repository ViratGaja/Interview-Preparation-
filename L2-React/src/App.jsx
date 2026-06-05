import React from 'react'
import { use } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [edit, setEdit] = useState(null);
  const [search, setSearch] = useState("");


  useEffect(()=>{
    try{
      const user=localStorage.getItem("user")
      if(user){
        setData(JSON.parse(user))
      }
    }
    catch(err){
      console.log(err);
      
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("users",JSON.stringify(data))
  },[data])


  const handleForm = (e) => {
    e.preventDefault();
    console.log("clicked");

    if (edit) {
      const main_result = data.map(a => a.id === edit ? { ...a, name, age } : a)
      setData(main_result);
      setEdit(null)

    }
    else {

      setData([...data, { id: Date.now(), name, age }])

    }



    setName("")
    setAge("")
  }


  const handleRemove = (id) => {
    const result = data.filter(a => a.id !== id);
    setData(result)
  }


  const handleEdit = (item) => {
    setEdit(item.id);
    setName(item.name);
    setAge(item.age)
  }

  const filter = data.filter((a) => {
    const result = a.name.toUpperCase().includes(search.toUpperCase());
    const result_1 = a.age.toUpperCase().includes(search.toUpperCase());
    return result || result_1
  })



  return (
    <div>

      <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Search.....' />

      <form onSubmit={handleForm}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="text" value={age} onChange={((e) => setAge(e.target.value))} placeholder="Age" />
        <button type='submit'>{edit ? "update" : "Submit"}</button>
      </form>


      {filter.map((a) => (
        <h1 key={a.id}>{a.name} and {a.age} <button onClick={() => handleRemove(a.id)}>delete</button><button onClick={() => handleEdit(a)}>edit</button></h1>
      ))}





    </div>
  )
}

export default App