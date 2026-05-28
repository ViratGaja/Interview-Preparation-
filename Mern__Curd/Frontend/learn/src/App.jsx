import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
const API = "http://localhost:5000/api/employees"


const App = () => {

  const [employees, setEmployees] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: ""
  })

  const [edit, setEdit] = useState(null)


  const FetchUser = async () => {
    try {
      const Api = await axios.get(API)
      setEmployees(Api.data)

    }
    catch (err) {
      console.log(err)
    }
  }


  useEffect(() => {
    FetchUser()
  }, [])


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }









  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      if (edit) {
        await axios.put(`${API}/${edit}`, formData);
        setEdit(null)
      }

      else {
        await axios.post(API, formData)
      }
      setFormData({
        name: "",
        email: "",
        role: "",
      });
      FetchUser();

    }
    catch (error) {
      console.log(error);
    }
  }

  const handleDelete =async(id)=>{
    try{
      await axios.delete(`${API}/${id}`)
      FetchUser();

    }
    catch(err){
      console.log(err);
      
    }
  }


  const handleEdit=(emp)=>{
    setFormData({
      name:emp.name,
      email:emp.email,
      role:emp.role,
    })
    setEdit(emp._id)
  }
















  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h2 className="text-center mb-4">
          MERN CRUD Application
        </h2>

        {/* FORM */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="role"
              placeholder="Enter Role"
              className="form-control"
              value={formData.role}
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn btn-primary w-100">
            {edit ? "Update Employee" : "Add Employee"}
          </button>
        </form>
      </div>

      {/* EMPLOYEE LIST */}
      <div className="row mt-4">
  {Array.isArray(employees) &&
    employees.map((emp) => (
      <div className="col-md-4 mb-3" key={emp._id}>
        <div className="card p-3 shadow-sm">
          <h4>{emp.name}</h4>

          <p>
            <strong>Email:</strong> {emp.email}
          </p>

          <p>
            <strong>Role:</strong> {emp.role}
          </p>

          <div className="d-flex gap-2">
            <button
              className="btn btn-warning w-50"
              onClick={() => handleEdit(emp)}
            >
              Edit
            </button>

            <button
              className="btn btn-danger w-50"
              onClick={() => handleDelete(emp._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    ))}
</div>
    </div>
  )
}

export default App