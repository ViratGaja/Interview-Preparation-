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

// function palindrome(a){
//     const result=a.split('').reverse().join('')
//     return result
// }

// const result=palindrome("madameee")

// console.log(result);



// 16.remove the duplicate in string



// const string="Helllo"

// let result=""

// for(let i=0;i<string.length;i++){
//     if(!result.includes(string[i])){
//         result+=string[i]
//     }
// }

// console.log(result)


//17. shallow copy and deep copy


//shallow copy 

// const obj={
//     name:"king",
//     address:{
//         city:"chennai"
//     }
// }

// const result={...obj}
// result.address.city="Delhi"

// console.log(obj.address.city);



//deep copy

// const final={
//     name:"virat",
//     address:{
//         city:"Delhi"
//     }
// }

// const main=JSON.parse(JSON.stringify(final))
// main.address.city="Bangalore"

// console.log(final.address.city);





//18 separate the string and number

 
// const combine=[1,"hey",3,5,"heko","heiii",33]

// const str=[];
// const number=[];


// for(let i=0;i<combine.length;i++){
//     if(typeof combine[i]==="string"){
//         str.push(combine[i])
//     }
//     else{
//         number.push(combine[i])
//     }
// }


// console.log(str);
// console.log(number);



//19 swap

// let a=300;
// let b=200;



// a=a+b; //500

// b=a-b; //300

// a=a-b //200

// console.log(a,b);



//20.find the longest sentences in string


// function find(a){

//     let longest="";
//     const result=a.split(' ');

//     result.forEach(b=>{
//         if(b.length>longest.length){
//             longest=b

//         }
        
//     })
//     return longest
// }


// const main_result=find("hello everybody and welcome to todAYS MATCH")

// console.log(main_result);



//21.find small sentences 

// function small(a){
//     let result=a.split(' ')[0]

//     const result_main= a.split(' ')

//     result_main.forEach(b=>{
//         if(b.length<result.length){
//             result=b
//         }
//     })
//     return result
// }

// const main_result=small("hello everybody and welcome to todAYS MATCH")
// console.log(main_result)



//22. for loop and while loop do while

// for(let i=0;i<9;i++){
//     console.log(i);
    
// }


// let i=0;
// while(i<5){
//     console.log(i);
//     i++
    
// }



// let i=0;

// do{
//     console.log(i)
//     i++
// }while(i<5)



// function hello(a,b){

//     if(a.length !=b.length){
//         return false
//     }


//     for(let i=0;i<a.length;i++){
//         if(a[i]!=b[i]){
//             return false
//         }
       
//     }

    
//  return true
// }


// const result=hello("heyye","heyyd")
// console.log(result)




// for(var i=0;i<4;i++){
//     setTimeout(()=>{
//         console.log(i);
        
//     },1000)
// }





// function hello(item){
//     const result=item.filter((a,b)=>item.indexOf(a)!==b);
//     return result

// }

// const result=hello([1,2,2,3,4,4])
// console.log(result)



const arr = [1, 2, 2, 3, 4, 4, 4];

const result=arr.reduce((acc,cur)=>{
    acc[cur]=(acc[cur]||0)+1
    return acc
},{})

console.log(result);
