// let string="Hello everybuddy";

// let result=string.split(' ').map(a=>a.split('').reverse().join('')).join(' ')

// console.log(result);


// let string="Hello";


// let result='';

// for(let i=string.length-1;i>=0;i--){
//     result+=string[i]
// }


// console.log(result);



// let string="Hello";


// let result='';

// for(let i=0;i<string.length;i++){
//     if(!result.includes(string[i])){
//         result+=string[i]
//     }
// }

// console.log(result);




// let array=[1,2,3,4,5,2,3,4];

// let result =[...new Set(array)];

// console.log(result)


// let array=[1,2,3,4,5,2,3,4];

// let result=array.filter((a,b)=>{
//     const main=array.indexOf(a)!==b;
//     return main
// })


// console.log(result);



// let array=[10,20,30,40];

// let result=array[0];


// for(let a of array){

//     if(a<result){
//         result=a
//     }
// }


// console.log(result);


// let array=[10,20,30,40];

// let largest=Infinity;
// let second=Infinity;


// for(let a of array){
//     if(a<largest){
//         second=largest
//         largest=a
//     }
//     else if(a<second&&a !==largest){
//         second=a
//     }
// }

// console.log(second);



// function largest(a){
//     let main=a.split(' ');
//     let result=main[0];

//     for(let a of main){
//         if(a.length<result.length){
//             result=a
//         }
//     }
//     return result
// }

// console.log(largest("Hello everybody and welcome to todays match"));



// let result="Hello";

// let obj={};

// for(let a of result){
//     obj[a]=(obj[a]||0)+1
// }
// console.log(obj);


// let sum=[29,38,23];

// let result=0;

// for(let i=0;i<sum.length;i++){
//     result+=sum[i]
// }
// console.log(result);


// let	a	=	20;
// let	b	=	40;

// a=a+b;
// b=a-b;
// a=a-b;

// console.log(a);


// const a	=	[1,	2,	[3,	4],	[5,	6]];



// function flat_1(result){
//     let result_1=[];
     
//     for(let a of result){
//         if(Array.isArray(a)){
//             result_1.push(...flat_1(a))
//         }
//         else{
//             result_1.push(a)
//         }
//     }
//     return result_1
// }

// console.log(flat_1(a));



// const a	=	[1,	2,	[3,	4],	[5,	6]];

// let result=[];


// for(let b of a){
//     if(Array.isArray(b)){
//         result.push(...b)

//     }
//     else{
//         result.push(b)
//     }
// }

// console.log(result);


// const	arr	=	[4,	2,	1,	5,	3];

// let result = arr.sort((a,b)=>a-b)

// console.log(result);

// let	string	=	'hello';

// let result=string.charAt(0).toUpperCase()+string.slice(1);
// console.log(result);



// function debounce(fn,delay){

//     let timer;
//     return function(){
//         clearInterval(timer);
//         timer=setTimeout(()=>{
//             fn()
//         },delay)
//     }

// }

// function fn(){
//     console.log("hello everybody");
    
// }


// const result=debounce(fn,3000);
// result()


// const	array	=	[28,	'king',	'hi',	47,	476];


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



// const	arr	=	[10,50,	40,	70];
// let result=[]
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]+arr[j]===60){
//             result.push(i,j)
//         }
//     }
// }

// console.log(result);


// const	array	=	[2,	3,	0,	0,	3,	4];


// let result=[];


// for(let i=0;i<array.length;i++){
//     if(array[i]!==0){
//         result.push(array[i])
//     }
// }

// while(result.length<array.length){
//     result.push(0)
// }


// console.log(result);




// function palindrome(a){
//     const result=a.split('').reverse().join('');
//     return a===result
// }


// console.log(palindrome("madam"));



// function fact(n){
//     if(n==0 || n==1) return 1

//     return n*fact(n-1)
// }

// console.log(fact(5));


// const array=[1,2,3,5];

// let total=array.length+1;

// let result=(total*(total+1))/2;

// let final=array.reduce((a,b)=>a+b);

// let final_result=result-final

// console.log(final_result);



// function currying(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }

// console.log(currying(20)(10)(30));




// let bubble_sorting=[2,3,5,4,1];


// for(let i=0;i<bubble_sorting.length;i++){
//     let min=i;
//     for(let j=i+1;j<bubble_sorting.length;j++){
//         if(bubble_sorting[j]<bubble_sorting[i]){
//             min=j
//         }
//     }

//     let temp=bubble_sorting[i];
//     bubble_sorting[i]=bubble_sorting[min];
//     bubble_sorting[min]=temp
// }

// console.log(bubble_sorting);




function outer(){
    let count=0;
    return function inner(){
        return count++
    }
}
const result=outer();
console.log(result());
console.log(result());

