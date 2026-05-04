import { useState } from 'react'

import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const [edit, setEdit] = useState(null)



  const handleForm = (e) => {
    e.preventDefault();


    if (edit !== null) {
      const main_result = data.map(a => a.id === edit ? { ...a, name, age } : a)
      setData(main_result);
      setEdit(null);
    
    }
    else {
      setData([...data, { id: Date.now(), name, age }])
    
    }


 setName("");
  setAge("");
  }


  const remove = (id) => {
    alert("Do You Want to Remove it Item")
    const result = data.filter((a) => a.id !== id)
    return setData(result);
  }



  const handleEdit = (item) => {
    setEdit(item.id);
    setName(item.name);
    setAge(item.age)

  }






  return (
    <>
      <div className='norm'>
        <h2>Hello</h2>
        <form onSubmit={handleForm} action="">
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder='Age' />

          <button type='submit'>{edit?"Update":"Submit"}</button>
        </form>
      </div>


      <table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((a, b) => (
            <tr key={a.id}>
              <td>{b + 1}</td>
              <td>{a.name}</td>
              <td>{a.age}</td>
              <td><button onClick={() => remove(a.id)}>Delete</button><button onClick={() => handleEdit(a)}>Edit</button></td>



            </tr>
          ))}
        </tbody>
      </table>







    </>
  )
}

export default App

