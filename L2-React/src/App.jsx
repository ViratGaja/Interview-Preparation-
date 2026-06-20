import React, { useState } from 'react'

const App = () => {
 
  const [form,setForm]=useState({
    name:"",
    email:"",
    password:""
  });
  const[err,setErr]=useState({})

  const handle_form=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  const form_handle=(e)=>{
    e.preventDefault()

    let newError={};

    if(form.name===""){
      newError.name="please enter name"
    }
    if(form.email===""){
      newError.email="please enter the email"
    }
    else if(!form.email.includes("@")){
      newError.email="please enter @"
    }
    if(form.password===""){
      newError.password="please enter the password"
    }
    else if(form.password.length<6){
      newError.password="please enter the above 6"
    }

    setErr(newError);


    if(Object.keys(newError).length===0){
      alert("From Submitted")
    }

  } 
  return (
    <div>
      
      
      <form onClick={form_handle} action="">

        <input type="text" onChange={handle_form} name='name' placeholder='name' />
        {err.name && <p style={{color:"red"}}>{err.name}</p>}
        <br /> <br />
        <input type="email" onChange={handle_form} name='email' placeholder='email' />
         {err.email && <p style={{color:"red"}}>{err.email}</p>}
        <br /> <br />
        <input type="password" onChange={handle_form} name='password' placeholder='password' /><br /> <br />
          {err.password && <p style={{color:"red"}}>{err.password}</p>}
        <button type="submit">Submit</button>

      </form>





    </div>
  )
}

export default App