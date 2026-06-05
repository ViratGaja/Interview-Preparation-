import React, { useState } from 'react'

const App = () => {
  const [result, setResult] = useState("");
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");

  const add=()=>{
    setResult(Number(first)+Number(second))
  }


  const minus=()=>{
    setResult(Number(first)-Number(second))
  }
  const multiple=()=>{
    setResult(Number(first)*Number(second))
  }
  const sub=()=>{

    if(second===0){
      alert("cannot divide 0")
    }
    else{
      
    setResult(Number(first) / Number(second))

    }
  }


  const reset=()=>{
    setFirst("");
    setSecond("")
  }

  return (
    <div>
      <form action="">

      <input type="number" value={first} onChange={(e) => setFirst(e.target.value)} />
      <input type="number" value={second} onChange={(e) => setSecond(e.target.value)} />

</form>
      <br /><br />
      <div>
        <button onClick={add}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={multiple}>*</button>
        <button onClick={sub}>/</button>
      </div>

      <button onClick={reset}>reset</button>

      <h1>Result:{result}</h1>
    </div>
  )
}

export default App