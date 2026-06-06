import React, { useState } from 'react'

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const [error, setError] = useState({})

  const handleForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const HandleSubmit = (e) => {
    e.preventDefault();


    let newError = {};

    if (formData.name === "") {
      newError.name = "Please enter the name"
    }

    if (formData.email === "") {
      newError.email = "please enter the email"
    }
    else if (!formData.email.includes("@")) {
      newError.email = "please enter the @"
    }


    if (formData.password === "") {
      newError.password = "Please enter the password"
    }
    else if (formData.password.length < 6) {
      newError.password = "must be password above 6"
    }

    setError(newError);

    if (Object.keys(newError).length === 0) {
      alert("Form Submitted")
    }
  }

  return (
    <div>


      <form action="">

        <input type="text" name='name' value={formData.name} onChange={handleForm} placeholder='Name' /> <br /> <br />
        {error.name && <p style={{ color: "red" }}>{error.name}</p>}
        <input type="email" name='email' value={formData.email} onChange={handleForm} placeholder='email' /><br /> <br />
        {error.email && <p style={{ color: "red" }}>{error.email}</p>}
        <input type="password" name='password' value={formData.password} onChange={handleForm} placeholder='password' /> <br /><br />
        {error.password && <p style={{ color: "red" }}>{error.password}</p>}
        <button type='submit' onClick={HandleSubmit} >Submit</button>
      </form>



    </div>
  )
}

export default App