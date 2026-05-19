// 1. reverse string


// const string="Hello";

// const result= [...new Set(string)].join('')

// console.log(result);


// const string="kinng";

// let result ="";

// for(let i=0;i<string.length;i++){
//     if(!result.includes(string[i])){
//         result+=string[i]
//     }
// }

// console.log(result);


// remove array

// const array=[2,3,5,5,5,7];


// let result=array.filter((a,b)=>{
//     const result =array.indexOf(a)===b
//     return result
// })


// console.log(result);


// const string="string";

// let result="";

// for(let i=string.length-1;i>=0;i--){
//     result+=string[i]
// }

// console.log(result);



//2. reverse string

// const string="string heyy hello";


// const result=string.split(' ').map(a=>a.split('').reverse().join('')).join(' ')

// console.log(result);




//3. find the large number in array

// const array=[20,30,40,68,90];


// let result=array[0];



// for(let i=0;i<array.length;i++){
//     if(array[i]<result){
//         result=array[i]
//     }
// }

// console.log(result);



// const array=[20,30,40,68,90];

// let largest=Infinity;
// let second=Infinity;


// for(let i=0;i<array.length;i++){
//     if(array[i]<largest){
//         second=largest
//         largest=array[i]
//     }
//     else if(array[i]<second&&array[i] !==largest){
//         second=array[i]
//     }
// }

// console.log(second);




// const string="Hello everybuddy and welcome to todays match";


// let result=string.split(' ');
// let main_result=result[0];


// for(let a of result){
//     if(a.length<main_result.length){
//         main_result=a
//     }
// }
// console.log(main_result);




//count character


// function count(a){
//     let result={};

//     for(let b of a){
//         result[b]=(result[b]||0)+1;
//     }
//     return result

    
// }

// console.log(count("hello"));



// const array=[2,4,5,7,8,3,5,];

// const result=array.filter(a=>a%2===0)
// console.log(result);


// const array=[2,4,5,7,8,3,5];

// const result=array.reduce((a,b)=>a+b)

// console.log(result);


// const arr=[20,45,56];


// let result=0;

// for(let i=0;i<arr.length;i++){
//     result+=arr[i]
// }

// console.log(result);



//

// let a =30;
// let b=50;

// [a,b]=[b,a];
// console.log(a);


// let a= 50;
// let b=30;

// a=a+b;
// b=a-b;
// a=a-b;

// console.log(a);



// const a=[1,2,[3,4],[5,6]]

// let result=[];

// for(let i=0;i<a.length;i++){
//     if(Array.isArray(a[i])){
//         result.push(...a[i])
//     }
//     else{
//         result.push(a[i])
//     }
// }

// console.log(result);



//sorting


// const array=[1,5,6,7,3];
// const result=array.sort((a,b)=>b-a);

// console.log(result);



// const string="hello";


// const final=string.charAt(0).toUpperCase()+string.slice(1);

// console.log(final);


// function debounce(fn,delay){

//     let count;

//     return function (){
//         clearInterval(count);
//         count=setTimeout(()=>{
//             fn()
//         },delay)

//     }
//     return count

// }


// function fn(){
//     console.log("Hello");
    
// }

// const result=debounce(fn,2000);
// result()






//shallow copy



// const obj={
//     name:"king",
//     hello:{
//         city:"Chennai"
//     }
// }


// const result={...obj};

// result.hello.city="mumbai";

// console.log(obj.hello.city);



// const obj={
//     name:"king",
//     hello:{
//         city:"mumbai"
//     }
// }


// const result=JSON.parse(JSON.stringify(obj))

// result.hello.city="chennai";


// console.log(obj.hello.city);



// call, apply , bind




// function hello(name,age){
//     console.log(`${this.name} ${name} ${age}`);
    
// }

// const obj={
//     name:"king"
// }

// const result=hello.bind(obj,"hello",38)

// result()



// const array=[28,"king","hi",47,476]

// let string=[];
// let New_array=[];


// for(let i=0;i<array.length;i++){
//     if(typeof(array[i])==="string"){
//         string.push(array[i])
//     }
//     else{
//         New_array.push(array[i])
//     }

// }

// console.log(string);
// console.log(New_array);



// const result=[80,50,40,70]

// let main=[]
// for(let i=0;i<result.length;i++){
//     for(let j=i+1;j<result.length;j++){
//         if(result[i]+result[j]===90){
//             main.push(i,j)
//         }
//     }
// }


// console.log(main);


//  const array=[2,3,0,0,3,4]


//  let main_result=[];


//  for(let a of array){
//     if(a!==0){
//         main_result.push(a)
//     }

   
//  }

//   while(main_result.length<array.length){
//         main_result.push(0)
//     }



//  console.log(main_result);



//bobble sorting



// const array=[1,2,3,4];


// for(let i=0;i<array.length;i++){
//    let min=i;
//    for(let j=i+1;j<array.length;j++){
//     if(array[j]>array[i]){
//         min=j;
//     }


//    }

//    let temp=array[i];
//    array[i]=array[min];
//    array[min]=temp

// }

// console.log(array);

 











