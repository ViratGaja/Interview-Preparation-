// Remove Duplicate in Array in build in method


// 1. const array=[1,3,4,3,5,6,2,2,3]

// const result=[...new Set(array)]
// console.log(result)


// without built in method


// 2. const array=[1,2,2,2,3,4,5,5,5,6]

// const result=array.filter((item,index)=>{
//     return array.indexOf(item)===index
// })

// console.log(result)




// reverse the string


// 3. const string="Hello"

// const result= string.split('').reverse().join('')

// console.log(result)


// 4. const string="Hello Everybody"

// const result= string.split(' ').map(a=>a.split('').reverse().join('')).join(' ')

// console.log(result)



//5. const string="Hello"


// const final=''

// for(i=string.length-1;i>=0;i--){
//     final += string[i]
// }

// console.log(final)





// 6.const string="Hello Everything"


// let final=''

// for(i=string.length-1;i>=0;i--){
//     final += string[i]
// }

// console.log(final)




//7. which two value can add got the result

// let array=[200,400,300,100]

// function result(array){
// for(let i=0;i<array.length-1;i++){
//     for(let j=i+1;j<array.length;j++){
//         if(array[i]+array[j]==700){
//             return [array[i],array[j]]
//         }
//     }
// }
// }

// console.log(result(array))




// 8. 1st letter capital


// let string="hello"


// function capital(a){
//     return a.charAt(0).toUpperCase()+a.slice(1)
// }


// const result=capital(string)

// console.log(result)



// 9.anagram
// function meaning(a,b){
//     const item=a.split('').sort().join('')
//     const item_2=b.split('').sort().join('')
//     return item=== item_2
// }

// const result= meaning("listen","silent")


// console.log(result)


// 10.closure


// function outer(){
//     let name="king"

//     return function(){
//         console.log(name)
//     }
// }

// const outer_result=outer()
// outer_result() 


// or


// function outer(){
//     let count=0;
//     return function(){
//         count++;
//         return count
//     }
// }

// const main_result=outer()
// console.log(main_result());
// console.log(main_result())



// 11. compare the array


// function compare(a,b){
//     const array=JSON.stringify(a);
//     const array_1=JSON.stringify(b)
//     return array===array_1
// }


// const final=compare([1,2,4,3],[1,2,3])

// console.log(final)



// 12.constructor 


// function result(name,age){
//     this.name=name;
//     this.age=age
// }

// const main=new result("king",20)
// console.log(main);


// Odd or even number

// const arr=[1,3,2,4,5,6]

// const result=arr.filter(a=>{
//     if(a%2===0){
//         console.log("even")
//     }
//     else{
//         console.log("odd")
//     }
// })



// 13.factorial

// function main(n){
//     if(n===0||n===1) return 1
//     return n *main(n-1)
// }
// console.log(main(5));

/* 14.How can you copy an object in JavaScript?*/

// const obj={
//     name:"king",
//     age:19
// }

// const result=obj
// console.log(result);




// 15.padlindrome

function palindrome(a){
    const result=a.split('').reverse().join('')
    return result
}

const result=palindrome("madameee")

console.log(result);
