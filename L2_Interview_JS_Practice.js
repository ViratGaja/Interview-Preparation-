//1. reverse the string

// function reverse(a){
//     const result=a.split('').reverse().join('')
//     return result
// }


// console.log(reverse("Hello"));


//or


// 2.const array="hello";

// let reverse=''

// for(let i=array.length-1;i>=0;i--){
//     reverse+=array[i]

// }

// console.log(reverse);


//3.remove duplicate

// const array="hello";


// let original="";

// for(let i=0;i<array.length;i++){
//     if(!original.includes(array[i])){
//         original+=array[i]
//     }
// }

// console.log(original);

//or 

//4. const arr = [1,2,2,3,4,4];

// const result=[...new Set(arr)]


// console.log(result);


//or 

//5. const arr = [1,2,2,3,4,4];

// const result=arr.filter((a,b)=>arr.indexOf(a)===b)

// console.log(result);





//6 find the largest number in array


// const arr = [10,50,2,99,1];

// let largest=arr[0];


// for(i=0;i<arr.length;i++){
//     if(arr[i]>largest){
//         largest=arr[i]
//     }

// }

// console.log(largest);


//6 find the smallest number in array

// const arr = [10,50,2,99,1];

// let small=arr[0];


// for(let i=0;i<arr.length;i++){
//     if(arr[i]<small){
//         small=arr[i]
//     }
// }

// console.log(small);






// 7 second largest in array


// const arr = [10,50,2,99,1];


// let largest=-Infinity;
// let Second=-Infinity;


// for(let i=0;i<arr.length;i++){
//     if(arr[i]>largest){

//         Second=largest
//         largest=arr[i]
//     }
//     else if(arr[i]>Second&&arr[i] !==largest){
//         Second=arr[i]
//     }
// }


// console.log(Second);



// 8 second smallest in array


// const arr = [10,50,2,99,1];


// let small=Infinity;

// let second_small=Infinity;



// for(let i=0;i<arr.length;i++){
//     if(arr[i]<small){
//         second_small=small
//         small=arr[i]
//     }

//     else if(arr[i]<second_small&&arr[i] !==small){
//         second_small=arr[i]
//     }
// }

// console.log(second_small);



// 9. string sentences largest


// function largest(a){
//     let largest_sentences=a[0];

//     const result=a.split(' ');


//     for(let b of result){
//         if(b.length>largest_sentences.length){
//             largest_sentences=b
//         }
//     }
//     return largest_sentences
// }

// console.log(largest("hello every body and welcome to todays match"));


// 9. string sentences find the small string



// function small(a){


//     let result=a.split(' ');

//     let small=result[0];
//     for(let b of result){
//         if(b.length<small.length){
//             small=b
//         }
//     }
//     return small
// }
// console.log(small("hello everybody and welcome to todays match"));




//10.Count Characters


// function count(a){

//     let count={}

//     for(let b of a){
//         count[b]=(count[b]||0)+1
//     }

//     return count


// }

// console.log(count("Hello"));




//12.find the even number

// const arr = [1,2,3,4,5,6]

// const result=arr.filter((a)=>a%2===0)

// console.log(result);



// 13.Sum of Array


// const arr = [1,2,3,34,4]

// const result=arr.reduce((a,b)=>a+b)


// console.log(result)

//or


//const arr = [1,2,3,34,4]
// let final=0;


// for(let a of arr){
//     final+=a
// }

// console.log(final);


// 14 Swap Two Numbers


// let a=20;
// let b=40;

// [a,b]=[b,a]

// console.log(a);

//or

// let a=20;
// let b=40;

//  a=a+b;
//  b=a-b
//  a=a-b


// console.log(a);



//14. Flatten Array


// const a=[1,2,[3,4],[5,6]]

// const result=a.flat()

// console.log(result);



//or


// const a=[1,2,[3,4],[5,6]]


// let main_result=[];


// for(let b of a){
//     if(Array.isArray(b)){
//         main_result.push(...b)
//     }
//     else{
//         main_result.push(b)
//     }
// }


// console.log(main_result);


//15. Sort Descending

// const arr = [4,2,1,5,3]

// const result = arr.sort((a,b) => b - a)

// console.log(result)




// 16 Find Duplicate Values

// const arr = [1,2,2,3,4,4]

// const duplicates = arr.filter((item,index)=>
//    arr.indexOf(item) !== index
// )

// console.log(duplicates)



//17 captalize 1st letter


// let string="hello";


// let result=string.charAt(0).toUpperCase()+string.slice(1);

// console.log(result);



// 18 Debouncing 


// function debounce(fn,delay){

//     let timer;

//     return function(){
//         clearTimeout(timer);

//         timer=setTimeout(()=>{
//             fn()
//         },delay)



//     }

// }


// function fn(){
//     console.log("Hello every one ");
    
// }


// const result=debounce(fn,3000)
// result()

// splice() is used to add, remove, or replace elements in an array.

// Syntax
// array.splice(start, deleteCount, item1, item2...)
// Parameter	Meaning
// start	Starting index
// deleteCount	How many elements remove
// item1...	Optional new elements



//19 shallow copy


// const obj={
//     name:"king",
//     address:{
//         city:"delhi"
//     }
// }



// let obj_1={...obj}

// obj_1.address.city="heyyy"


// console.log(obj.address.city);



// 20 deep copy


// const obj={
//     name:"king",
//     address:{
//         city:"chennai"
//     }
// }

// let result=JSON.parse(JSON.stringify(obj))
// result.address.city="change>>>"

// console.log(obj.address.city);



// 21 call.apply,bind

//call
// function result(){
//     console.log(`${this.name}`);
    
// }


// const obj={
//     name:"King"
// }



// result.call(obj)



//apply
// function result(age,city){

//     console.log(`${this.name} and ${age} and ${city}`);
    

// }


// const obj={
//     name:"king"
// }

// result.apply(obj,[36,"king area"])


//find


// function hello(){
//     console.log(`${this.name}`);
    
// }

// const obj={
//     name:"king"
// }

// const result=hello.bind(obj);
// result()


//22. separate the string and number
// const array=[28,"king","hi",47,476]


// let string=[];
// let number=[];

// for(let i=0;i<array.length;i++){
//     if(typeof(array[i])==="string"){
//         string.push(array[i])
//     }
//     else{
//         number.push(array[i])
//     }
// }

// console.log(string);
// console.log(number);




    //23. find the index and add the value


    // const result=[20,50,40,70]


    // for(let i=0;i<result.length;i++){
    //     for(let j=i+1;j<result.length;j++){
    //         if(result[i]+result[j]===70){
    //             console.log(result[i],result[j]);
                
    //         }
    //     }
    // }




    //24. 0 move to last index


//     const array=[2,3,0,0,3,4]

//     let result=[];


//     for(let i=0;i<array.length;i++){
//         if(array[i]!==0){
//             result.push(array[i])
//         }
//     }

//     while(result.length<array.length){
//         result.push(0)
//     }


//     console.log(result);
    





// let array=[1,2,3];


// for(let i=0;i<array.length;i++){
//    let min=i;
//     for(let j=i+1;j<array.length;j++){
//         if(array[j]>array[min]){
//             min=j
//         }
//     }

//     let temp=array[i];
// array[i]=array[min];
// array[min]= temp
// }





// console.log(array);

//25. find
// const array=[10,20,30,40,87]

// const result=array.find((a)=>{
//     if(a>=40){
  
//       return a
        
//     }
// })
// console.log(result); //  40---> find method return the 1st match element


//25. Filter

// const array=[10,20,30,40,87]

// const result=array.find((a)=>{
//     if(a>=40){
  
//       return a
        
//     }
// })
// console.log(result); // 40, 87 filter can return the all matching element



// 26. remove duplicate in string using loop


// const array="hello";

// let result="";

// for(let i=0;i<array.length;i++){
//     if(!result.includes(array[i])){
//         result+=array[i]
//     }
// }
// console.log(result);










//  React.js 

//1. fetch the data and display the frontend

// import { useEffect, useState } from "react"


// function App() {
//   const[data,setData]=useState([]);
//   const[loading,setLoading]=useState(true)
//   const fetchUser=async()=>{
//     try{
      
//       const result=await fetch('https://fakestoreapi.com/products');

//       const main=await result.json()
//       setLoading(false)

//       return setData(main)

//     }
//     catch(err){
//       console.log((err));
      
//     }
//   }
//   useEffect(()=>{
//     fetchUser()
//   },[])

// if(loading) return <h1>Loading......</h1>

//   return (
//     <>
//     {data.map((a)=>(
//       <h1 key={a.id}>{a.title}</h1>
//     ))}
//     </>
//   )
// }

// export default App


//2. hide and show

// import React, { useState } from 'react'

// const App = () => {
//   const [hide, setHide] = useState(false);
//   const [content, setContent] = useState(false)
//   return (
//     <div>
//       <input type={hide ? "text" : "password"} name="" id="" />
//       <button onClick={() => setHide(!hide)}>click</button>
//       <br />
//       <br />
//       <button onClick={()=>setContent(!content)}>{content?"Hide":"Show"}</button>

//       {content && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quia? Deleniti nesciunt veniam nobis incidunt omnis labore id, eos dicta, temporibus nulla laudantium excepturi iusto ipsam recusandae a at natus.</p>}
//       </div>
//   )
// }
// export default App


//3. search, Curd, Local Storage


// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [data, setData] = useState([]);
//   const [name, setName] = useState('')
//   const [age, setAge] = useState('');
//   const [edit, setEdit] = useState(null);
//   const [search, setSearch] = useState("")




//   useEffect(()=>{
//     const users=localStorage.getItem("users");
//     if(users){
//       setData(JSON.parse(users))
//     }

//   },[])


//   useEffect(()=>{
//     localStorage.setItem("users",JSON.stringify(data))
//   },[data])





//   const handleSubmit = (e) => {
//     e.preventDefault();



//     if (edit !== null) {

//       const main_result = data.map((a) => a.id === edit ? { ...a, name, age } : a);
//       setData(main_result)
//       setEdit(null)

//     }
//     else {
//       setData([...data, { id: Date.now(), name, age }]);
//     }
//     setName('');
//     setAge('')
//     return setData
//   }

//   const removeData = (id) => {
//     alert("U want to Delete the Data");

//     const result = data.filter(a => a.id !== id);
//     return setData(result)
//   }

//   const handleUpdate = (a) => {
//     setEdit(a.id);
//     setName(a.name)
//     setAge(a.age)
//   }


//   const search_item = data.filter((a) => {
//     const result = a.name.toUpperCase().includes(search.toUpperCase()) || a.age.toString().includes(search.toUpperCase())

//     return result
//   })

//  return (
//     <div>

//       <input type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)} name="" id="" />

//       <br />
//       <br />


//       <form onSubmit={handleSubmit}>
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' name="" id="" />
//         <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder='Age' />

//         <button type='submit'>Submit</button>

//       </form>


//       <br />
//       <br />


//       {search_item.map((a) => (
//         <h1 key={a.id}>{a.name}and {a.age} <button onClick={() => removeData(a.id)}>Delete</button> <button onClick={() => handleUpdate(a)}>Edit</button></h1>
//       ))}


//     </div>
//   )
// }

// export default App





//4. props 



// import React from 'react'
// import About from './Components/About';

// const App = () => {
//   var name="king hello";
//   var age=38
//   return (
//     <div>
//       <About name={name} age={age}/>
//     </div>
//   )
// }

// export default App


// import React from 'react'

// const About = (props) => {
//   return (
//     <div>

//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>

//     </div>
//   )
// }

// export default About




// 5. context api


// import React, { createContext } from 'react'
// import About from './Components/About'
// export const UserData=createContext()

// const App = () => {
//   const [count,setCount]=useState(0)
//   return (
//     <div>

//       <UserData.Provider  value={{count,setCount}}>
//         <About/>
//       </UserData.Provider>

//     </div>
//   )
// }

// export default App


// import React, { useContext } from 'react'

// import {UserData} from '../App'
    

// const About = () => {
//   const {count,setCount}=useContext(UserData)
//   return (
//     <div>
//  <button onClick={()=>setCount(count+1)}>click</button>
//    {count}
// </div>
//   )
// }

// export default About




//6 useRef


// import React, { useRef } from 'react'

// const App = () => {
//   const Ref=useRef()
//   const buttonClick=()=>{

//     const result=Ref.current.focus()
//     return result
//   }
//   return (
//     <div>

//       <input type="text" ref={Ref}  name="" id="" />
//       <button onClick={buttonClick}>Click</button>

//     </div>
//   )
// }

// export default App



//7. useMemo

// import React, { useMemo, useState } from 'react'

// const App = () => {
//   const [count, setCount] = useState(0);


//   const UseMemo = useMemo(() => {

//     return count * 5

//   }, [count])

//   return (


//     <div>
//       <button onClick={() => setCount(count + 1)}>click</button>
//       {UseMemo}

//     </div>
//   )
// }

// export default App



//8.useCallBack
// import React, { useCallback, useMemo, useState } from 'react'
// import About from './Components/About';

// const App = () => {
//   const [count, setCount] = useState(0);


//  const handleData=useCallback(()=>{

//   console.log("parent Click");
  

//  },[])

//   return (


//     <div>
//       {count}
//       <button onClick={() => setCount(count + 1)}>click</button>


//       <About handleData__1={handleData}/>

//     </div>
    
//   )
// }

// export default App


// import React from 'react'

// const About = React.memo(({handleData__1}) => {
//     console.log("child render");
    
//     return (
//         <div>

//             <button onClick={handleData__1}>heyyyy</button>
//         </div>
//     )

// })


// export default About




//9. Custom Hook

// import React from 'react'
// import About from './Components/About'


// const App = () => {
//   const [toggle,Click]=About()
//   return (
//     <div>


//       <button onClick={Click}>{toggle?"Hide":"Show"}</button>


//       {toggle&&<p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque soluta quisquam voluptates. Ea reprehenderit labore, explicabo optio officiis autem similique quam magnam eligendi, repellat hic molestiae quibusdam cupiditate numquam. Hic?</p>}

//     </div>
//   )
// }

// export default App

// import React, {useState} from "react"

// const About=()=>{

//     const[toggle,setToggle]=useState(false)


//     const Click=()=>{
//         setToggle(!toggle)
//     }
//     return(
//         [toggle,Click]
//     )
// }


// export default About



//10. react-router-dom
// import React from 'react'
// import About from './Components/About'
// import {Routes,Route,BrowserRouter} from 'react-router-dom'
// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//       <Routes>
//         <Route path='/about' element={<About/>} />
//       </Routes>
//       </BrowserRouter>
//       </div>
//   )
// }

// export default App


// import React from 'react'

// const About = () => {
//   return (
//     <div>About</div>
//   )
// }

// export default About




//11. Reducer 


// import React, { useReducer } from 'react'


// function  reducer(state,action){
//   switch(action.type){
//     case "increment":
//       return state+1;
//     case "decrement":
//       return state-1;
//     default:
//      return state
//   }
// }

// const App = () => {
//   const [count,dispatch]=useReducer(reducer,0)
//   return (
//     <div>

//       <h1>{count}</h1>

//       <button onClick={()=>dispatch({type:"increment"})}> Click</button>



//     </div>
//   )
// }

// export default App



//12. Redux



// import { createSlice } from "@reduxjs/toolkit";

// const About = createSlice({

//   name: "counter",

//   initialState: {
//     count: 0
//   },

//   reducers: {

//     increment: (state) => {
//       state.count += 1;
//     },

//     decrement: (state) => {
//       state.count -= 1;
//     },

//     reset: (state) => {
//       state.count = 0;
//     }

//   }

// });




// export const {
//   increment,
//   decrement,
//   reset
// } = About.actions;

// export default About.reducer;


// import { configureStore } from "@reduxjs/toolkit";
// import About from "./About";

// const Store = configureStore({

//   reducer: {
//     counter: About
//   }

// });

// export default Store;




// import {
//   useDispatch,
//   useSelector
// } from "react-redux";

// import {
//   increment,
//   decrement,
//   reset
// } from "./Components/About";

// function App(){

//   const dispatch = useDispatch();

//   const count = useSelector(
//     (state) => state.counter.count
//   );

//   return(

//     <div>

//       <h1>{count}</h1>

//       <button
//         onClick={() =>
//           dispatch(increment())
//         }
//       >
//         +
//       </button>

//       <button
//         onClick={() =>
//           dispatch(decrement())
//         }
//       >
//         -
//       </button>

//       <button
//         onClick={() =>
//           dispatch(reset())
//         }
//       >
//         Reset
//       </button>

//     </div>

//   );
// }

// export default App;



// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { Provider } from "react-redux";
// import store from "./Components/Store"; // ✅ check this path is correct

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );