//1. Write a JavaScript program to find the missing number from an array.

// const array= [1,2,3,5];

// const length=array.length+1;

// const formula=(length*(length+1)/2)

// const single=array.reduce((a,b)=>a+b);

// const result=formula-single

// console.log(result);


//Reverse a string in JavaScript.


//2. const string="gajapathi";


// let reverseString="";

// for(let i=string.length-1;i>=0;i--){
//     reverseString+=string[i]
// }

// console.log(reverseString);




// 3.Find duplicate elements from an array.


// const array=[1,2,3,2,4,5,1];

// const result=array.filter((a,b)=>array.indexOf(a)!==b);
// console.log(result);


//4.Check whether a string is palindrome or not.


    // let string="madam";


    // let result=string.split('').reverse('').join('');

    // let main=string===result;
    // console.log(main);




    // 5.Find the largest number in an array without using Math.max().


    // let array=[10,40,2,99,23];

    // let result=array[0];


    // for(let a of array){
    //     if(a>result){
    //         result=a
    //     }
    // }


    // console.log(result);


    // 6.Move all zeros to the end of the array.


    // let array=[0,1,0,3,12];

    // let result=[];


    // for(let i=0;i<array.length;i++){
    //     if(array[i] !==0){
    //         result.push(array[i])
    //     }
    // }

    // while(result.length<array.length){

    //     result.push(0)

    // }
    
    // console.log(result);



    // 7.Find the second largest number in an array.


    // const array=[10,5,20,8,15];

    // let largest=-Infinity;
    // let secondLargest=-Infinity;


    // for(let i=0;i<array.length;i++){
    //     if(array[i]>largest){
    //         secondLargest=largest
    //         largest=array[i]
    //     }
    //     else if(array[i]>secondLargest&&array[i] !==largest){
    //         secondLargest=array[i]
    //     }
        
    // }
    

    // console.log(secondLargest);
    

    // 8.Count the frequency of each element in an array.   

    // let array=[1,2,2,3,1,1];

    // const count={};


    // for(let a of array){
    //     count[a]=(count[a]||0)+1
    // }

    // console.log(count);


    //9.Check whether two strings are anagrams or not.


    // function result(a,b){

    //     const result=a.split('').sort().join('');
    //     const result_1=b.split('').sort().join('');

    //     return result===result_1

    // }
    // console.log(result("listen","silent"));


    //10.Flatten the nested array.


    // let array=[1,[2,3],[4,[5,6]]]

    // let result=[];


    // for(let a of array){
    //     if(Array.isArray(a)){
    //         for(let b of a){
    //             if(Array.isArray(b)){
    //                 for(let c of b){
    //                     result.push(c)
    //                 }

    //             }
    //             else{
    //                 result.push(b)
    //             }
    //         }

    //     }
    //     else{
    //         result.push(a)
    //     }
    // }
    // console.log(result);
    



    // let array=[1,[2,3],[4,[5,6]]];


    // let result_1=[];



    // function result(arr){



    //     for(let a of arr){
    //         if(Array.isArray(a)){
    //             result(a)

    //         }
    //         else{
    //             result_1.push(a)
    //         }
    //     }
        





    // }
    // result(array)
    // console.log(result_1);
    