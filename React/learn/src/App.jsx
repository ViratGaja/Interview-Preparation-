// import { useEffect, useState } from 'react'


// function App() {
//     const [data,setData]=useState([])

//     useEffect(()=>{

//       fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((a)=>a.json())
//       .then((b)=>setData(b))
// },[])


// const handleRemove=(id)=>{
//   const result= data.filter((a)=>a.id !== id)
//   setData(result)
  
// }





//   return (
//     <>

//     <h1>Hello Every Body</h1>
//     <ul>
//       {data.map((a)=>(
//         <li key={a.id}>{a.title} <button onClick={()=>handleRemove(a.id)}>delete</button></li>
//       ))}
//     </ul>
     
     
//     </>
//   )
// }

// export default App

//use ref for Dom access
// import React, { useRef } from 'react'

// const App = () => {

//   const User=useRef();

//   const heyy=()=>{
//     User.current.focus()
//   }



//   return (
//     <div>


//     <input ref={User}  type="text" />
//     <button onClick={heyy}>Heyy click</button>

//     </div>
//   )
// }

// export default App



import React, { useRef } from 'react'

const App = () => {
  const heyy=useRef(0);

  const change=()=>{
    heyy.current++;
    console.log(heyy.current);
    
  }




  return (
    <div>
      <button onClick={change}>click here</button>
      
    </div>
  )
}
 export default App