import React from 'react'
import API from '../api'
import { useState } from 'react'
import { useEffect } from 'react';
const UserForm = () => {

    const [data,setData]=useState([]);
    const [form,setForm]=useState({name:"",age:"",address:""})
    const [edit,setEdit]=useState(null)


    const fetchUser=async()=>{
        const res=await API.get('/users');
        setData(res.data)
    }

    useEffect(()=>{
        fetchUser()
    },[])


    const handleSubmit=async(e)=>{
        e.preventDefault();

        console.log("clicked")
        if(edit){
            await API.put(`/users/${edit}`,form)
            setEdit(null)
        }
        else{
            await API.post('/users',form)
        }
        setForm({name:"",age:"",address:""})
        fetchUser()
    }


    const handleDelete=async(id)=>{

        await API.delete(`/users/${id}`)
        fetchUser()

    }


    const handleEdit=(user)=>{
        setForm({
            name:user.name,
            age:user.age,
            address:user.address
        });
        setEdit(user._id)
    }






  return (
    <div>


        <h2>CURD</h2>

        <form onSubmit={handleSubmit} action="">
            <input value={form.name} type="text" onChange={(e)=>setForm({...form,name:e.target.value})}  placeholder='name' name="" id="" />

            <input value={form.age} onChange={(e)=>setForm({...form,age:e.target.value})} type="text" placeholder='age' />

            <input value={form.address} onChange={(e)=>setForm({...form,address:e.target.value})} type="text" placeholder='address' name="" id="" />

            <button type='submit'>{edit?"Update":"Submit"}</button>
        </form>


        <ul>
            {Array.isArray(data)&&data.map(a=>(
                <li key={a._id}>{a.name}-{a.age}-{a.address}
                <button onClick={()=>handleEdit(a)}>Edit</button>
                <button onClick={()=>handleDelete(a._id)}>Delete</button>
                
                </li>
            ))}
        </ul>


        



    </div>
  )
}

export default UserForm