
//1 reverse 
// function reverse(a){
//     const result=a.split('').reverse().join('')
//     return result
// }


// console.log(reverse("Heyyyy"));


//2.without reverse using loop 

// function result(a){
//     let main=""

//     for(let i=a.length-1;i>=0;i--){
//         main+=a[i]

//     }
//     return main
// }

// console.log(result("anu"));


//3 palidrome


// function palin(a){
//     const result =a.split('').reverse().join('')
//     return a===result
// }

// console.log(palin("mam"));


//4.remove the duplicate in array


// const array=[1,2,2,3,3,4,5,4,5]


// const result=array.filter((a,b)=>{
//    const main= array.indexOf(a)===b
//    return main
// })
// console.log(result);




// const main=[...new Set(array)]

// console.log(main);


// 5 find the largest number in array


// let array=[10,20,40,50,40];

// let result=Math.max(...array)
// console.log(result);


// let largest=array[0];


// for(let i=1;i<array.length;i++){
//     if(array[i]<largest){
//         largest=array[i]
//     }
// }

// console.log(largest);



// 6.Find Second Largest Number in Array


// const array=[10, 50, 80, 20, 80]

// const result=[...new Set(array)];
// result.sort((a,b)=>b-a)


// console.log(result[0]);





// function secondLargest(a){
//     let largest=-Infinity;
//     let Second=-Infinity;


//     for(let i=0;i<a.length;i++){

//         if(a[i]>largest){
//             Second=largest

//             largest=a[i]
//         }
//         else if (a[i]>Second&&a[i]!==largest){
//                 Second=a[i]
//         }
//     }
//     return Second
// }

// console.log(secondLargest([10,20,30,40]));




// 7. find the smallest numbeer in array


// const array=[10,30,20,70,80]


// const result=[...new Set(array)];

// const main_result=result.sort((a,b)=>a-b);


// console.log(main_result[0]);


// function samll(item){
//     let small=item[0];

//     for(let i=0;i<item.length;i++){

//         if(item[i]<small){
//             small=item[i]
//         }

//     }
//     return small
// }


// console.log(samll([20,30,50]));



// 8.second smallest number array


// const array=[20,49,34,24,21]

// const result=[...new Set(array)]

// result.sort((a,b)=>a-b)

// console.log(result[1]);


// function secondSmall(a){
//     small=Infinity;
//     secondSmall=Infinity;


//     for(let i=0;i<a.length;i++){

//         if(a[i]<small){
//             secondSmall=small
//             small=a[i]
//         }
//         else if(a[i]<secondSmall&&a[i] !==small){
//             secondSmall=a[i]
//         }
//     }
//     return secondSmall
// }

// console.log(secondSmall([2,3,5,6]));




//9. flatmap


// const array=[1,[2,3],[4,5,6]]

// const result=array.flatMap((a)=>{
//     return a
// })

// console.log(result);


// const array=[1,[2,3],[4,5,6]];

// const result=[];

// for(let i=0;i<array.length;i++){
//     if(Array.isArray(array[i])){
//         for(let j=0;j<array[i].length;j++){
//             result.push(array[i][j])// i take the value like[2,3] and j take the index [0,1]
//         }

//     }
//     else{
//         result.push(array[i])
//     }
// }

// console.log(result);



//10 add the two number find the index


// const array=[20,30,50,45]

// var result=[]

// for(let i=0;i<array.length;i++){
//     for(j=i+1;j<array.length;j++){
//         if(array[i]+array[j]==95){
//              result.push(i,j)
//         }
//     }
// }

// console.log(result);





// function arnagram(a,b){

//     const array=a.split('').sort().join('')
//     const array_2=b.split('').sort().join('')
//     return array ===array_2
// }


// console.log(arnagram("silent","listen"));



//11. missing number


// const array=[1,3,4,5]

// const total=array.length+1


// const formula=(total*(total+1)/2)

// const main_result=array.reduce((a,b)=>a+b)

// const answer=formula-main_result;
// console.log(answer);


//12.swap


// let a=20;
// let b=10;


// [a,b]=[b,a]

// console.log(a);



/* This code snippet is swapping the values of variables `a` and `b` without using a temporary
variable. Here's how it works: */
// var a=39
// var b=32

// var a=a+b;
// var b=a-b;
// var a=a-b

// console.log(a);





// separate number and string


// const array=[37,"king",328,"heyyy"]


// let number=[];
// let string=[];


// for(let i=0;i<array.length;i++){
//     if(typeof array[i]==="number"){
//         number.push(array[i])
//     }
//     else{
//         string.push(array[i])
//     }
// }


// console.log(number);
// console.log(string);




//13 debounce



// function debounce(fn,delay){
//     let timer;
//     return function(){
//         clearTimeout(timer);
//         let result=setTimeout(fn,delay)
//     }


// }


// function hey(){
//     console.log("hello");
    
// }


// const mainResult=debounce(hey,2000)

// mainResult()


// sorting

let arr = [4,2,1,3];

arr.sort((a,b) => b-a);

console.log(arr);














