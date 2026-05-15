

// function reverse(a){
//     const result=a.split('').reverse().join('');
//     return result
// }


// console.log(reverse("hello"));


// let string="hello";

// let reverse='';


// for(let i=string.length-1;i>=0;i--){
//     reverse+=string[i]
// }

// console.log(reverse);



// let arr=[2,3,4,4,4,5,6];


// const result=[...new Set(arr)];

// console.log(result);


// let arr=[2,3,4,4,4,5,6]

// const result=arr.filter((a,b)=>arr.indexOf(a)===b);

// console.log(result);


// let string="hello";


// const result=string.charAt(0).toUpperCase()+string.slice(1);
// console.log(result);



// function count(b){

//     let count={};

//     for(let a of b){
//         count[a]=(count[a]||0)+1    
//     }

//     return count
// }


// console.log(count("hhhheeel"));



// const array=[20,10,29,39,40,34];


// let largest=array[0];


// for(let i=0;i<array.length;i++){
//     if(array[i]<largest){
//         largest=array[i]
//     }
// }

// console.log(largest);


// const array=[20,10,29,39,40,34];


// let largest=Infinity;

// let second=Infinity;



// for(let i=0;i<array.length;i++){
//     if(array[i]<largest){
//         second=largest
//         largest=array[i]
//     }
//         else if(array[i]<second&&array[i]!==largest){

//             second=array[i]

//         }
//     }


// console.log(second);



// function hii(a){

   
//     const result =a.split(' ');



//  let main_result=a.split(' ')[0]
//     for(let b of result){
//         if(b.length<main_result.length){
//             main_result=b
//         }
//     }
//     return main_result
// }


// const result=hii("Hello everybuddy and welcome to todays match");
// console.log(result);





// const array=[2,3,4,5,4];


// const result=array.reduce((a,b)=>a+b);

// console.log(result);



// const array=[2,3,4,5,4];

// const result=array.filter(a=>a%2===0);

// console.log(result);





// const array=[3,2,4,5,6,7,7];


// const result=array.sort((a,b)=>a-b);

// console.log(result);



let array=[1,2,3];


for(let i=0;i<array.length;i++){
   let min=i;
    for(let j=i+1;j<array.length;j++){
        if(array[j]>array[min]){
            min=j
        }
    }

    let temp=array[i];
array[i]=array[min];
array[min]= temp
}





console.log(array);
