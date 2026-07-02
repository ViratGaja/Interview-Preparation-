

// let result=array.filter((a,b)=>{
//     const result=array.indexOf(a)!==b;
//     return result



// })

// console.log(result);

// let array=[1,2,3,3,3,4,4,5,5];

// let final={

// }

// for(let a of array){
//     final[a]=(final[a]||0)+1
// }

// console.log(final);



// function palindrome(a){

//     const result=a.split('').reverse().join("");

//     return a===result



// }

// console.log(palindrome("mad"));




// emp = [
//     {
//         "name": "john",
//         "DOB": 1994
//     },
//     {
//         "name": "joseph",
//         "DOB": 2000
//     }
// ]


// const result={...emp};

// let time=Date.now();

// console.log(time);





// const emp = [
//     {
//         name: "john",
//         DOB: 1994
//     },
//     {
//         name: "joseph",
//         DOB: 2000
//     }
// ];

// const currentYear=new Date().getFullYear();


// const result=emp.map((item)=>{
//     const main={
//         ...item,
//         age:currentYear-item.DOB
//     }
//     return main
// })


// console.log(result);






// const arr = [10,20,20,30,40,40];

// let result=arr.filter((a,b)=>{
//     const result=arr.indexOf(a)===b;
//     return result
// })
// console.log(result);


// const arr = [10,5,30,20,30,15];


// let largest=-Infinity;
// let second=-Infinity;


// for(let a of arr){
//     if(a>largest){
//         second=largest
//         largest=a
//     }
//     else if(a > second&&a !==largest){
//         second=a
//     }
// }
// console.log(largest);
// console.log(second);


// let string="JavaScript";

// let result='';

// for(let i=string.length-1;i>=0;i--){
//     result+=string[i]

// }

// console.log(result);



// const result="programming";

// const hello={

// }

// for( let a of result){
//     hello[a]=(hello[a]||0)+1
// }

// console.log(hello);


//merger two array
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];


// const result=[...arr1,...arr2];

// console.log(result);



//2. Intersection of Two Arrays

// const arr1 = [1,2,3,4];
// const arr2 = [3,4,5,6];

// const result=arr1.filter((item)=>arr2.includes(item));

// console.log(result)


// const arr2 = [3,4,5,6];

// let result=arr2.sort((a,b)=>b-a);

// console.log(result);


// const emp = [
//     {name:"John",salary:30000},
//     {name:"Peter",salary:50000},
//     {name:"Joseph",salary:40000}
// ];

// const result=emp.reduce((acc,cur)=>{
//     let main=cur.salary<acc.salary?cur:acc;
//     return main
// })


// console.log(result);



// const emp = [
//     {salary:30000},
//     {salary:40000},
//     {salary:50000}
// ];

// const final=emp.reduce((acc,curr)=>{
//     const result=acc+curr.salary;
//     return result
// },0)


// console.log(final);

