// 


// let result="hello";
// let final="";

// for(let i=0;i<result.length;i++){
//     if(!final.includes(result[i])){
//         final+=result[i]
//     }
// }

// console.log(final);



// let result=[1,2,2,3,3,4,4,5];

// let main=result.filter((a,b)=>{
//     const hello=result.indexOf(a)===b
//     return hello
// })

// console.log(main);


// const	arr	=	[10,	50,	2,	99,	1];

// let long=Infinity;
// let second=Infinity;

// for(let a of arr){
//     if(a<long){
//         second=long
//         long=a
//     }
//     else if (a<second &&a !==long){
//         second=a
//     }
// }


// console.log(long);
// console.log(second);



// let string="hello every and welcome to today match";


// let main=string.split(' ');

// let result=main[0];
// for(let a of main){
//     if(a.length<result.length){
//         result=a
//     }
// }

// console.log(result);


// const arr="hello";

// let result={

// }

// for(let a of arr){
//     result[a]=(result[a]||0)+1
// }
// console.log(result);




// const sum=[3,4,6,2,4];

// let final=0;

// for(let a of sum){
//     final+=a
// }

// console.log(final);



// let a=10;
// let b=20;

// [a,b]=[b,a]

// console.log(a);


// let a=10;
// let b=20;

// a=a+b;
// b=a-b;
// a=a-b

// console.log(a);



// let	a	=	[1,	2,	[3,	4],	[5,	6,[1,2,3,4,]]];

// function final(item){
//     let result=[];

//     for(let b of item){
//         if(Array.isArray(b)){
//             result.push(...final(b))
//         }
//         else{
//             result.push(b)
//         }
//     }

//     return result
// }
// console.log(final(a));



// const	arr	=	[4,	2,	1,	5,	3];

// let result=arr.sort((a,b)=>b-a);

// console.log(result);

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





// function throttle(fn,delay){
//     let time=0;
//     return function(){
//         let current=Date.now();
//         if(current-time>delay){
//             fn()
//             time=current
//         }
//     }
// }

// function hello(){
//     console.log("hello everybody");
    
// }

// const result=throttle(hello,2000);

// result()


// const	array	=	[28,	'king',	'hi',	47,	476];

// let string=[];
// let number=[];


// for(let a of array){
//     if(typeof(a)==="string"){
//         string.push(a)
//     }
//     else if(typeof(a)==="number"){
//         number.push(a)
//     }
// }

// console.log(string);
// console.log(number);



// const	arr	=	[20,	50,	40,	70];
// let result=[]
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]+arr[j]===110){
//             result.push(i,j)
//         }
//     }
// }

// console.log(result);



// let arr	=	[2,	3,	0,	0,	3,	4];

// let result=[];


// for(let a of arr){
//     if(a!==0){
//         result.push(a)
//     }
// }

// while(result.length<arr.length){
//     result.push(0)
// }


// console.log(result);



// let missing=[1,2,4];

// for(let i=1;i<=4;i++){
//     if(!missing.includes(i)){
//         console.log(i);
        
//     }
// }



// let result=[1,3,4];

// let length=result.length+1;

// let formula=(length*(length+1))/2;

// let sum=result.reduce((a,b)=>a+b);

// let final=formula-sum
// console.log(final);



// const bubble=[4,2,3,1];


// for(let i=0;i<bubble.length;i++){
//     let min=i
//     for(let j=i+1;j<bubble.length;j++){
//         if(bubble[j]<bubble[i]){
//             min=j
//         }
//     }

//     let temp=bubble[i];
//     bubble[i]=bubble[min];
//     bubble[min]=temp
// }


// console.log(bubble);




function outer(){
    let count=0;
     function inner(){
        return count++
    }
    return inner
}

const result=outer();
console.log(result());
console.log(result());
