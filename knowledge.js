

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





const emp = [
    {
        name: "john",
        DOB: 1994
    },
    {
        name: "joseph",
        DOB: 2000
    }
];

const currentYear=new Date().getFullYear();


const result=emp.map((item)=>{
    const main={
        ...item,
        age:currentYear-item.DOB
    }
    return main
})


console.log(result);






