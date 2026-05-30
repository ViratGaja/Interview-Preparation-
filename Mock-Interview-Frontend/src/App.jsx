import React, { useEffect, useState } from 'react'

const App = () => {
  const users = ["Arun", "Bala", "Charan", "David", "Ajay"];
  const [search, setSearch] = useState("");
  const [filteredUser, setFilteredUsers] = useState(users);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {

      const result = users.filter((a) => {
        return a.toUpperCase().includes(search.toUpperCase())
      })
      setFilteredUsers(result);
      setLoading(false);

    }, 1000);

    return () => clearInterval(timer)

  }, [search])


  const handleClear = () => {
    setSearch("")
  }



  return (
    <div>

      <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} />

      <button onClick={handleClear}>clear</button>


      {loading ? (
        <h1>Loading....</h1>
      ) : (
        filteredUser.length === 0 ? (
          <h3>no result found</h3>
        ) : (
          filteredUser.map((user, index) => (
            <h2 key={index}>{user}</h2>
          ))
        )
      )}


    </div>
  )
}

export default App