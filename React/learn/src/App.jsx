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


//useref
// import React, { useRef } from 'react'

// const App = () => {
//   const heyy=useRef(0);

//   const change=()=>{
//     heyy.current++;
//     console.log(heyy.current);
    
//   }




//   return (
//     <div>
//       <button onClick={change}>click here</button>
      
//     </div>
//   )
// }
//  export default App



//


// import React from 'react'
// import { useState } from 'react'

// function App(){
//   const [count, setCount] = useState(0);

//   const expensive = () => {
//     console.log("Calculating...");
//     return count * 2;
//   };

//   return (
//     <>
//       <h1>{expensive()}</h1>
//       <button onClick={()=>setCount(count+1)}>Click</button>
//     </>
//   );
// }

// export default App
// import React from 'react'
// import { useCallback } from 'react';
// import { useState } from 'react'


// function App(){
//   const [count, setCount] = useState(0);

//  const change=useCallback(()=>{
//   console.log("parent click");
  
//  },[])

//   return (
//     <>
//     <Child onclick={change} />

//     <button onClick={()=>setCount(count+1)} >Count</button>
//    {count}
//     </>
//   );
// }
// export default App


// const Child=React.memo(({onclick})=>{
//   console.log("child");
//   return <button onClick={onclick}>Clicked</button>
  
// })

// import React from "react";
// import { useContext } from "react";
// import { createContext } from "react";


// const Data=createContext();


// function App(){

//   const value="king"


//   return(
//     <Data.Provider value={value}>
//       <Child />
//     </Data.Provider>
//   )
// }


// function Child(){
//   const Use=useContext(Data)

//   return <h1>{Use}</h1>
// }

// export default App



// function reducer(state,action){

//   switch(action.type){
//     case "increment":
//       return {count:state.count+1};
//     case "decrement":
//       return {count: state.count-1}
//     default:
//       state;
//   }


// }






// import React, { useReducer } from 'react'

// const App = () => {
//   const [state,dispatch]=useReducer(reducer,{count:0})
//   return (
//     <div>
//       <h1>{state.count}</h1>
//       <button onClick={()=>dispatch({type:"increment"})}>increment</button>

//       <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>

//     </div>
//   )
// }

// export default App



import React from 'react'
import Counter from './features/counter/Counter'

const App = () => {
  return (
    <div>
      <Counter/>
    </div>
  )
}

export default App