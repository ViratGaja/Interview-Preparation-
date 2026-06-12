// function reverse(a){
//     const result=a.split('').reverse().join('');
//     return result
// }

// console.log(reverse("Hello"));


// let string="hello";

// let result="";

// for(let i=string.length-1;i>=0;i--){
//     result+=string[i]
// }


// console.log(result);


// let string="hello";

// let final=""

// for(let i=0;i<string.length;i++){
//     if(!final.includes(string[i])){
//         final+=string[i]
//     }
// }

// console.log(final);


// const	arr	=	[10,	50,	2,	99,	1];

// let small=Infinity;
// let second=Infinity;


// for(let a of arr){
//     if(a<small){
//         second=small
//         small=a
//     }
//     else if(a < second&&a!==small){
//         second=a
//     }
// }


// console.log(second);


// let string="hello everybody and welcome to todays match";

// let match=string.split(' ');

// let result=string.split(' ')[0];

// for(let a of match){
//     if(a.length<result.length){
//         result=a
//     }
// }

// console.log(result);



// character count

// let character="hello";

// let count={

// }

// for(let a of character){
//     count[a]=(count[a]||0)+1;

// }

// console.log(count);

// const	arr	=	[1,	2,	3,	34,	4];

// let sum=0;

// for(let a of arr){
//     sum+=a
// }

// console.log(sum)


// const	a	=	[1,	2,	[3,	4],	[5,[4,5]]];
// function main(a){

//     let result=[];

//     for(let b of a){
//         if(Array.isArray(b)){
//           result.push(...main(b))
//         }

//         else{
//             result.push(b)
//         }
//     }

//     return result

// }

// console.log(main(a));


// const	arr	=	[1,	2,	2,	3,	4,	4];

// const result=arr.filter((a,b)=>{
//     const result =arr.indexOf(a)===b
//     return result
// })

// console.log(result);


// function debounce(logic,delay){

//     let timer;

//     return function(){
//         clearTimeout(timer);
//         timer=setTimeout(()=>{
//             logic()
//         },delay)
//     }

// }

// function heyy(){
//     console.log("hello");
    
// }

// const result=debounce(heyy,2000);
// result()



// function throttle(fn,delay){
//     let time=0;
//     return function(){
//         let current=Date.now();
//         if(current-time>delay){
//             fn()
//         }
//         time=current
//     }
// }

// function heyy(){
//     console.log("hello everybody");
    
// }
// const result=throttle(heyy,2000);
// result()

// const	array	=	[28,	'king',	'hi',	47,	476];

// let string=[];
// let Number=[];

// for(let a of array){
//     if(typeof(a)==="string"){
//         string.push(a)
//     }
//     else{
//         Number.push(a)
//     }
// }

// console.log(string);
// console.log(Number);


// const	arr	=	[80,	50,	40,	70];
// let result=[]
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]+arr[j]===130){
//             result.push(i,j)
//         }
//     }
// }

// console.log(result);


// const	array	=	[2,	3,	0,	0,	3,	4];


// let result=[];


// for(let a of array){
//    if(a!==0){
//     result.push(a)
//    }
// }

// while(result.length<array.length){
//     result.unshift(0)
// }

// console.log(result);

// const missing=[1,2,3,5];

// let total=missing.length+1;

// let formula=(total*(total+1))/2;

// let sum=missing.reduce((a,b)=>a+b);

// let result=formula-sum;
// console.log(result);




// function main(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }

// console.log(main(1)(2)(3));


    let array=[4,2,3,1];

    for(let i=0;i<array.length;i++){
        let min=i
        for(let j=i+1;j<array.length;j++){
            if(array[j]<array[i]){
                min=j
            }
        }

        let temp=array[i];
        array[i]=array[min];
        array[min]=temp
    }


    console.log(array)

