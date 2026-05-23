

// const array="hello king";

// const result=array.split(' ').map((a)=>a.split('').reverse().join('')).join(' ')
// console.log(result);



// const string="hello";


// let result="";

// for(i=string.length-1;i>=0;i--){
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



// const array=[0,1,1,3,4,6,4,4,];

// const result=[...new Set(array)];

// console.log(result);


// const array=[0,1,1,3,4,6,4,4,];


// const result=array.filter((a,b)=>{
//     const main=array.indexOf(a)===b;
//     return main
// })


// console.log(result);




// const array=[10,20,30,40];

// let largest=array[0];

// for(let i=0;i<array.length;i++){
//     if(array[i]<largest){
//         largest=array[i]
//     }
// }

// console.log(largest);




// const sentences="hello everybuddy and welcome to todays match";

// let separate=sentences.split(' ');

// let largest=sentences.split(' ')[0]


// for(let a of separate){
//     if(a.length<largest.length){
//         largest=a
//     }
// }

// console.log(largest);




// const array=[10,20,50,60,30,40];

// let largest=Infinity;
// let second_small=Infinity;


// for(let i=0;i<array.length;i++){
//     if(array[i]<largest){
//         second_small=largest
//         largest=array[i]
//     }
//     else if(array[i] < second_small&&array[i] !==largest){
//         second_small=array[i]
//     }
// }

// console.log(second_small);





// let count ="hellllo";


// let result={};

// for(let i=0;i<count.length;i++){
//     result[count[i]]=(result[count[i]]||0)+1;

// }

// console.log(result);


// const array=[10,20,30,40,50];

// let count=0;


// for(let i=0;i<array.length;i++){
//     count+=array[i]
// }


// console.log(count);



// let a=20;
// let b=30;

// a=a+b;
// b=a-b;
// a=a-b;

// console.log(a);



// const a = [1, 2, [3, 4], [5, 6]];


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



// const array=[4, 2, 1, 5, 3];



// for(let i=0;i<array.length;i++){
//     let min=i
//     for(let j=i+1;j<array.length;j++){
//         if(array[j]>array[min]){
//             min=j
//         }
       

        
    
//     }
//     let temp=array[i];
// array[i]=array[min];
// array[min]=temp;

// }



// console.log(array);


// const string="hello";

// const result=string.charAt().toUpperCase()+string.slice(1);
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
//     console.log("hello");
    
// }
// const result=debounce(fn,3000);

// result()



// const array = [28, 'king', 'hi', 47, 476];


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

// const result = [20, 50,80, 40, 70];
// let result_1=[]

// for(let i=0;i<result.length;i++){
//     for(let j=i+1;j<result.length;j++){
//         if(result[i]+result[j]===130){
//            result_1.push(i,j)
            
//         }
//     }
// }

// console.log(result_1);



// const array = [2, 3, 0, 0, 3, 4];


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



// const missing=[1,2,4];


// let a=missing.length+1;

// let formula=(a*(a+1))/2;

// let final=missing.reduce((a,b)=>a+b);

// let output=formula-final;

// console.log(output)


// function fact(a){
//     if(a===0 || a==-1) return 1;
//     return a*(a-1)
// }

// console.log(fact(5));


// function palindrome(a){
//     const result=a.split('').reverse().join('');
//     return a===result
// }

// console.log(palindrome("mam"));
