// let string="hello everybody and welcome";

// let result=string.split(' ').map((a)=>a.split('').reverse().join('')).join(' ');

// console.log(result);


// let string="hello everybody and welcome";

// let result="";

// let hello=string.split(' ');

// for(let a of hello){
//     for(let i=a.length-1;i>=0;i--){
//         result+=a[i];
//     }
//    result+=" "
// }
// console.log(result);



// const string="hello";


// let result="";
// for(let i=string.length-1;i>=0;i--){
//     result+=string[i]
// }
// console.log(result);




// const string="hello";

// let result="";

// for(let i=0;i<string.length;i++){
//     if(!result.includes(string[i])){
//         result+=string[i]
//     }
// }
// console.log(result);


// const number=[1,2,3,3,3,4,5,6];

// const result=number.filter((a,b)=>{
//     const hello=number.indexOf(a)===b;
//     return hello
// })

// console.log(result);


// const number=[1,2,3,3,3,4,5,6];

// const result=[...new Set(number)];

// console.log(result);



// const	arr	=	[10,	50,	2,	99,	1];

// let result=arr[0];

// for(let a of arr){
//     if(a<result){
//         result=a
//     }
// }

// console.log(result);


// const	arr	=	[10,50,	2,	99,	1];


// let  Largest=Infinity;
// let smallest=Infinity;

// for(let a of arr)
// {
//     if(a<Largest){
//         smallest=Largest
//         Largest=a
//     }
//     else if(a<smallest&&a!==Largest){
//         smallest=a
//     }
// }
// console.log(Largest);
// console.log(smallest);



// const string = "hello everybody and welcome to todays match";



// let final = string.split(' ');
// let result = final[0];
// for (let i = 0; i < final.length; i++) {
//     if (final[i].length < result.length) {
//         result = final[i]
//     }
// }

// console.log(result);




// const string="hello";

// const result={

// }

// for(let a of string){
//     result[a]=(result[a]||0)+1
// }

// console.log(result);


// let string=[2,4,5,3,3];

// let result=0;

// for(let a of string){
//     result+=a
// }
// console.log(result);



// let a=10;
// let b=20;

// [a,b]=[b,a];

// console.log(b);



// let a=10;
// let b=20;

// a=a+b;
// b=a-b;
// a=a-b;

// console.log(a);



// const	arr	=	[1,	2,	[3,	4],	[5,	6,[3,5]]];

// function final(b){
//     let result=[];
//     for(let a of b){
//         if(Array.isArray(a)){
//             result.push(...final(a))
//         }
//         else{
//             result.push(a)
//         }
//     }
//     return result

// }


// console.log(final(arr));



// const array=[1,3,4,5,6];

// let result=array.sort((a,b)=>b-a);

// console.log(result);

// let	string	=	'hello';;

// let result=string.charAt(0).toUpperCase()+string.slice(1);

// console.log(result);



// function final(fn,delay){
//     let timer;
//     return function(){
//         clearTimeout(timer);
//         timer=setTimeout(()=>{
//             fn()
//         },delay)
//     }
// }

// function result(){
//     console.log("hello everybody");

// }

// let main_result=final(result,2000);

// main_result()




// function final(fn,delay){
//     let time=0;
//     return function(){
//         let current=Date.now();
//         if(current-time>delay){
//             fn();
//               time=current
//         }

//     }
// }
// function second(){
//     console.log("hello everyBody");

// }

// let result=final(second,1000);
// result()





// const result={
//     name:"hello",
//     address:{
//         city:"mumbai"
//     }
// }

// let hello={...result};

// hello.address.city="chennai";

// console.log(result.address);



// const result = {
//     name: "hello",
//     address: {
//         city: "mumbai"
//     }
// }


// let final=JSON.parse(JSON.stringify(result));

// final.address.city="chennai";

// console.log(result.address);







// function name(){
//     console.log(this.name);

// }

// const obj={
//     name:'hello'
// }

// let result=name.bind(obj)
// result()




// const	array	=	[28,	'king',	'hi',	47,	476];

// let string=[]
// let number=[];


// for(let a of array){
//     if(typeof(a)==="string"){
//         string.push(a)
//     }
//     else{
//         number.push(a)
//     }
// }

// console.log(string);
// console.log(number);


// const arr=[40,60,29,40];
// let result=[]
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]+arr[j]===80){
//             result.push(i,j)
//         }
//     }
// }

// console.log(result);


// const	array	=	[2,	3,	0,	0,	3,	4];

// let result=[];

// for(let a of array){
//     if(a!==0){
//        result.push(a)
//     }
// }
// while(result.length<array.length){
//     result.push(0)
// }
// console.log(result);




// const array=[1,3,4];

// let get=array.length+1;

// let formula=(get*(get+1))/2;

// let final=array.reduce((a,b)=>a+b);

// let result=formula-final;

// console.log(result)




// function hello(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }

// console.log(hello(10)(20)(30));





// let array = [2, 1, 3, 4];

// for (let i = 0; i < array.length; i++) {
//     let min = i;
//     for (let j = i + 1; j < array.length; j++) {
//         if (array[j] > array[i]) {
//             min = j
//         }

//     }

//     let temp = array[i];
//     array[i] = array[min];
//     array[min] = temp;
// }
// console.log(array);




// function hello(){
//     let count=0;
//     return function (){
//         count ++;
//         return count
//     }

// }

// let result=hello();
// console.log(result());
// console.log(result());
