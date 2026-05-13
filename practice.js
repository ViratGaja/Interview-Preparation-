

// debounce



// function debounce (fn,delay){
//     let timer;
//     return function(){
//         clearTimeout(timer);
//         let result =setTimeout(fn,delay)
//         return result
//     }
// }


// function data(){
//     console.log("hello everybody");

// }


// const main_result=debounce(data,3000);
// main_result()




//reverse the string



// function hi(a){
//     const result=a.split(' ').map(b=>b.split('').reverse().join(''))
//     return result
// }

// console.log(hi("hello everybody"));



// function hmm(a){
//     let reverse=""


//     for(let i=a.length-1;i>=0;i--){
//         reverse+=a[i]

//     }


// return reverse
// }


// console.log(hmm("hello"));

// function hello(a){
//     const reverse=a.split('').reverse().join('')
//     return a===reverse
// }

// console.log(hello("mam"));






//remove duplicate

// let arr = [1,2,2,3,4,4];




// let result= arr.filter((a,b)=>{
//     return   arr.indexOf(a)===(b);


// })


// console.log(result);





//find largest number


// let arr = [10,50,30];




// let longest=arr[0];


// for(let i=0;i<arr.length;i++){
//     if(arr[i]>longest){
//         longest=arr[i]
//     }
// }
// console.log(longest);



//missing number


// let missing=[1,2,3,5]

// let length=missing.length+1;


// let formula=(length*(length+1)/2)

// let sum=missing.reduce((a,b)=>a+b,0)

// let final_answer=formula-sum;

// console.log(final_answer);


//flatten array


// let arr = [1,[2,3],[4,5]];

//    const result=arr.flatMap((a)=>{
//     return a
//    })

//    console.log(result);


// let result=[];

// for(let i=0;i<arr.length;i++){
//     if(Array.isArray(arr[i])){
//         result.push(...arr[i])
//     }
//     else{
//         result.push(arr[i])
//     }

// }

// console.log(result);




//count


// function count(a){
//     const obj={};

//     for(let count of a){

//         obj[count]=(obj[count]||0)+1
//     }
//     return obj
// }

// console.log(count("hello"));




// function hey() {

//     let count = 0


//     return function () {
//         count++
//         console.log(count);



//     }

// }

// const result = hey();
// result()
// result()




// const result=new Promise((resolve,reject)=>{
//     let success=true

//     if(success){
//         resolve("clear")
//     }
//     else{
//         reject("failure")
//     }
// })

// result.then((a)=>console.log("success")
// )
// .catch((err)=>console.log(err)
// )




//remove duplicate in string



// const result="hello";


// let main="";


// for(let i=0;i<result.length;i++){
//     if(!main.includes(result[i])){
//         main+=result[i]
//     }
// }

// console.log(main);
