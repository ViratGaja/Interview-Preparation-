// let string="hello";

// let result="";

// for(let i=string.length-1;i>=0;i--){
//     result+=string[i]
// }

// console.log(result);




// let string = "hello";
// let result = "";
// for (let i = 0; i < string.length; i++) {
//     if (!result.includes(string[i])) {
//         result+=string[i]
//     }

// }
// console.log(result);




// let array=[1,2,2,2,3,4,5];

// let result=array.filter((a,b)=>{
//     const result=array.indexOf(a)!==b
//     return result
// })

// console.log(result);



// const	arr	=	[10,50,	2,	99,	1];

// let largest=Infinity;
// let second=Infinity;

// for(let a of arr){
//     if(a<largest){
//         second=largest
//         largest=a
//     }
//     else if (a<second&&a!=largest){
//         second=a
//     }
// }


// console.log(largest);
// console.log(second)




// let string="hello everybody and welcome to todays match";



// let main=string.split(' ');
// let result=main[0];

// for(let a of main){
//     if(a.length<result.length){
//         result=a
//     }
// }

// console.log(result);



// let string="Hello";

// let obj={

// }

// for(let a of string){
//     obj[a]=(obj[a]||0)+1
// }

// console.log(obj);




// let array=[1,2,3,4,5,6];
// let result=array.filter(a=>a%2==0)
// console.log(result);



// let array=[2,3,4,1,8];

// let result =array.sort((a,b)=>b-a)

// console.log(result);



// let array=[1,3,5,3,4];

// let result=0;

// for(let i=0;i<array.length;i++){
//     result+=array[i]
// }

// console.log(result);



// let a=10;
// let b=20;

// a=a+b;
// b=a-b;
// a=a-b;

// console.log(a);

// const	a	=	[1,	2,	[3,	4],	[5,	6,[1,3]]];


// function flat(array){
//     let result=[];

//     for (let b of array){
//         if(Array.isArray(b)){
//             result.push(...flat(b))

//         }
//         else{
//             result.push(b)
//         }
//     }

//     return result
// }

// console.log(flat(a));


// let	string	=	'hello';

// let result=string.charAt(0).toUpperCase()+string.slice(1);

// console.log(result);




// function debounce(fn,delay){
//     let timer;
//     return function(){
//         clearTimeout(timer);
//         timer=setTimeout(()=>{
//             fn()
//         },delay)
//     }
// }

// function hello(){
//     console.log("hello everybody");
    
// }


// const result=debounce(hello,2000);

// result()




// function hello(fn,delay){

//     let time=0;

//     return function(){
//         let currentTime=Date.now();
//         if(currentTime-time>delay){
//             fn()
//              time=currentTime

//         }

//            }

// }
// function another(){
//     console.log("Hello everybody ");
    
// }

// const result=hello(another,2000)

// result()




// const obj={
//     name:"king",
//     address:{
//         city:"chennai"
//     }
// }


// const alter={...obj};

// alter.address.city="heyyy";

// console.log(obj.address.city);




// const obj={
//     name:'king',
//     address:{
//         city:"hello"
//     }
// }

// const result=JSON.parse(JSON.stringify(obj));


// result.address.city="is there"


// console.log(obj.address.city);





// function hello(city,age){
//     console.log(this.name );
    
// }

// const obj={
//     name:"king"
// }
// const result=hello.bind(obj);

// result()


// const	array	=	[28,	'king',	'hi',	47,	476];


// let string=[];
// let array_1=[];

// for(let a of array){
//     if(typeof(a)==="string"){
//         string.push(a)
//     }
//     else{
//         array_1.push(a)
//     }
// }

// console.log(string);
// console.log(array_1);

// const array=[10,50,30,90];
// let result=[]
// for(let i=0;i<array.length;i++){
//     for(let j=i+1;j<array.length;j++){
//         if(array[i]+array[j]===80){
//             result.push(i,j)
            
//         }
//     }
// }

// console.log(result);


// const	array	=	[2,	3,	0,	0,	3,	4];


// let result=[];

// for(let a of array){
//     if(a!==0){
//         result.push(a)
//     }
// }

// while(result.length<array.length){
//     result.unshift(0)
// }


// console.log(result);




// function hello(a){
//     let result =a.split('').reverse().join('');

//     return a===result


// }

// console.log(hello("madam"));



// function hello(n){

//     if(n===0 || n===1) return 1;

//     return n*hello(n-1)

// }

// console.log(hello(4))



// const array=[1,2,4];

// let total=array.length+1;

// let formula=(total*(total+1))/2;

// let final = array.reduce((a,b)=>a+b);

// let result=formula-final;

// console.log(result);




// function hello(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }

// }


// console.log(hello(4)(5)(10));



// const array=[2,3,4,1];

// for(let i=0;i<array.length;i++){
//     let min=i;
//     for(let j=i+1;j<array.length;j++){
//         if(array[i]>array[j]){
//             min=j
//         }
//     }
//     let temp=array[i];
//     array[i]=array[min];
//     array[min]=temp
// }


// console.log(array);



// function parent(){
//     let count=0;
//     return function(){
//         count++;
//         return count
//     }
// }

// const result =parent();
// console.log(result());
// console.log(result());



// async function hello(){
//     try{
//         const result= await fetch("api_url");
//         const main=await result.json();
//         console.log(main);
        
//     }
//     catch(err){
//         console.log(err);
        
//     }
// }


// const result=new Promise((resolve,reject)=>{
//     let success=true;
//     if(success){
//         resolve("success")
//     }

//     else{
//         reject("failure")
//     }
// })


// result.then((a)=>console.log("successful")
// )
// result.catch((a)=>console.log("errr")
// )


// console.log(result);




// const obj={
//     name:"king",
//     greet:function(){
//         console.log(this.name);
        
//     }
// }

// obj.greet()