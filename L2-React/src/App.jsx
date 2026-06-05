import React, { useState } from 'react'

const App = () => {
  const[formData,setFormData]=useState({
    name:"",
    email:"",
    password:""
  })
  const [error,setError]=useState({})

  const handleForm=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  const submitForm=(e)=>{
    e.preventDefault();

    let newError={};

    if(formData.name===""){
      newError.name="Name field is required"
    }
    if(formData.email===""){
      newError.email="Email field is required"
    }
    else if(!formData.email.includes("@")){
      newError.email="enter the valid email"
    }
     if (formData.password === "") {
      newError.password = "Password is required"
     }
     else if(formData.password.length<6){
      newError.password="password must be 6 character"
     }

     setError(newError)

     if(Object.keys(newError).length===0){
      alert("submit Success")
     }

  }
  return (
    <div>

      <form>
        <input type="text" value={formData.name} onChange={handleForm} placeholder='name' name="name" id="" />
        {error.name &&<p style={{color:"red"}}>{error.name}</p>}<br /> <br />
        
        <input type="email" value={formData.email} onChange={handleForm} placeholder='email' name="email" id="" />
        {error.name &&<p style={{color:"red"}}>{error.email}</p>}<br /> <br />
        <input type="password"value={formData.password} onChange={handleForm} placeholder='password' name="password" id="" />
        {error.name &&<p style={{color:"red"}}>{error.password}</p>}<br /> <br />
        <button onClick={submitForm}>Submit</button>
      </form>


    </div>
  )
}

export default App