import React, { useMemo, useState } from 'react'
import Learn from './Learn'
const App = () => {
  const [data, setData] = useState([]);
  const [item, setItem] = useState("");
  const [edit, setEdit] = useState(null)
  const [search, setSearch] = useState("")

  const handleData = () => {

    if (edit !== null) {
      const Main_result = data.map((b) => b.id === edit ? { ...b, item } : b)
      setData(Main_result)

    }
    else {

      setData([...data, { id: Date.now(), item }]);
      console.log(data)


    }
    setItem("")
    setEdit(null)

  }

  const handleDelete = (id) => {
    const result = data.filter((a) => a.id !== id);
    return setData(result)
  }

  const handleEdit = (b) => {
    setItem(b.item)
    setEdit(b.id)
  }


  //search filter

  const filterData =useMemo(()=>{
    return data.filter((a) => a.item.toLowerCase().includes(search.toLowerCase()))
  },[data,search])
   


  return (
    <div>


      <input type="text" value={item} onChange={(e) => setItem(e.target.value)} placeholder='add product' />

      <button onClick={handleData}>{edit ? "Update" : "Submit"}</button>


      <br /><br />
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search' />


      <ul>
        {filterData.map((a) => (
          <li key={a.id}>{a.item} <button onClick={() => handleDelete(a.id)}>Delete</button>  <button onClick={() => handleEdit(a)}>Edit</button></li>
        ))}
      </ul>

      <Learn/>

    </div>
  )
}

export default App