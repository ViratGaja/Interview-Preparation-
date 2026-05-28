import React, { useEffect, useState } from 'react'

export const App = () => {

  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [edit, setEdit] = useState(null);
  const [search, setSearch] = useState("");

  // GET DATA FROM LOCAL STORAGE
  useEffect(() => {

    const result = JSON.parse(localStorage.getItem("User")) || [];

    if(Array.isArray(result)){
      setData(result)
    }

   

  }, []);


  // STORE DATA IN LOCAL STORAGE
  useEffect(() => {

    localStorage.setItem("User", JSON.stringify(data));

  }, [data]);


  // ADD & UPDATE DATA
  const handleData = (e) => {

    e.preventDefault();

    // VALIDATION
    if (!name || !age) {
      alert("Please Enter Name and Age");
      return;
    }

    // UPDATE
    if (edit !== null) {

      const result = data.map((a) =>
        a.id === edit ? { ...a, name, age } : a
      );

      setData(result);
      setEdit(null);

    }

    // ADD
    else {

      setData([
        ...data,
        {
          id: Date.now(),
          name,
          age
        }
      ]);

    }

    // CLEAR INPUT
    setName("");
    setAge("");

  };


  // DELETE DATA
  const removeData = (id) => {

    const result = data.filter((a) => a.id !== id);

    setData(result);

  };


  // EDIT DATA
  const updateData = (a) => {

    setEdit(a.id);

    setName(a.name);
    setAge(a.age);

  };


  // SEARCH FILTER
  const filter_data = data.filter((a) =>

    a.name.toLowerCase().includes(search.toLowerCase()) ||

    a.age.toString().includes(search)

  );


  return (
    <div>

      <h1>CRUD WITH LOCAL STORAGE</h1>

      {/* SEARCH */}
      <input
        type="text"
        placeholder='Search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br /><br />

      {/* FORM */}
      <form onSubmit={handleData}>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Name'
        />

        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder='Age'
        />

        <button type='submit'>
          {edit !== null ? "Update" : "Submit"}
        </button>

      </form>

      <br />

      {/* DISPLAY DATA */}
      {
        filter_data.map((a) => (

          <h3 key={a.id}>

            {a.name} - {a.age}

            <button onClick={() => removeData(a.id)}>
              Delete
            </button>

            <button onClick={() => updateData(a)}>
              Edit
            </button>

          </h3>

        ))
      }

    </div>
  )
}

export default App