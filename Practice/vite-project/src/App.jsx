import React, {useCallback, useState} from 'react'


const Child=React.memo(({handleButton})=>{

  return(
    <button onClick={handleButton}>Click here</button>
  )

})






const App = () => {
  const [count,setCount]=useState(0)



  const handleClick=useCallback(()=>{
    console.log("child clicked")
  })




  return (
    <div>

      <button onClick={()=>setCount(count+1)} >button</button>
      {count}
      <Child handleButton={handleClick}/>

    </div>
  )
}

export default App