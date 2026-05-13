//1. reverse the string

// function reverse(a){
//     const result=a.split('').reverse().join('')
//     return result
// }


// console.log(reverse("Hello"));


//or


// 2.const array="hello";

// let reverse=''

// for(let i=array.length-1;i>=0;i--){
//     reverse+=array[i]

// }

// console.log(reverse);


//3.remove duplicate

// const array="hello";


// let original="";

// for(let i=0;i<array.length;i++){
//     if(!original.includes(array[i])){
//         original+=array[i]
//     }
// }

// console.log(original);

//or 

//4. const arr = [1,2,2,3,4,4];

// const result=[...new Set(arr)]


// console.log(result);


//or 

//5. const arr = [1,2,2,3,4,4];

// const result=arr.filter((a,b)=>arr.indexOf(a)===b)

// console.log(result);





//6 find the largest number in array


// const arr = [10,50,2,99,1];

// let largest=arr[0];


// for(i=0;i<arr.length;i++){
//     if(arr[i]>largest){
//         largest=arr[i]
//     }

// }

// console.log(largest);


//6 find the smallest number in array

// const arr = [10,50,2,99,1];

// let small=arr[0];


// for(let i=0;i<arr.length;i++){
//     if(arr[i]<small){
//         small=arr[i]
//     }
// }

// console.log(small);






// 7 second largest in array


// const arr = [10,50,2,99,1];


// let largest=-Infinity;
// let Second=-Infinity;


// for(let i=0;i<arr.length;i++){
//     if(arr[i]>largest){

//         Second=largest
//         largest=arr[i]
//     }
//     else if(arr[i]>Second&&arr[i] !==largest){
//         Second=arr[i]
//     }
// }


// console.log(Second);



// 8 second smallest in array


// const arr = [10,50,2,99,1];


// let small=Infinity;

// let second_small=Infinity;



// for(let i=0;i<arr.length;i++){
//     if(arr[i]<small){
//         second_small=small
//         small=arr[i]
//     }

//     else if(arr[i]<second_small&&arr[i] !==small){
//         second_small=arr[i]
//     }
// }

// console.log(second_small);



// 9. string sentences largest


// function largest(a){
//     let largest_sentences=a[0];

//     const result=a.split(' ');


//     for(let b of result){
//         if(b.length>largest_sentences.length){
//             largest_sentences=b
//         }
//     }
//     return largest_sentences
// }

// console.log(largest("hello every body and welcome to todays match"));


// 9. string sentences find the small string



// function small(a){


//     let result=a.split(' ');

//     let small=result[0];
//     for(let b of result){
//         if(b.length<small.length){
//             small=b
//         }
//     }
//     return small
// }
// console.log(small("hello everybody and welcome to todays match"));




//10.Count Characters


// function count(a){

//     let count={}

//     for(let b of a){
//         count[b]=(count[b]||0)+1
//     }

//     return count


// }

// console.log(count("Hello"));




//12.find the even number

// const arr = [1,2,3,4,5,6]

// const result=arr.filter((a)=>a%2===0)

// console.log(result);



// 13.Sum of Array


// const arr = [1,2,3,34,4]

// const result=arr.reduce((a,b)=>a+b)


// console.log(result)

//or


//const arr = [1,2,3,34,4]
// let final=0;


// for(let a of arr){
//     final+=a
// }

// console.log(final);


// 14 Swap Two Numbers


// let a=20;
// let b=40;

// [a,b]=[b,a]

// console.log(a);

//or

// let a=20;
// let b=40;

//  a=a+b;
//  b=a-b
//  a=a-b


// console.log(a);



//14. Flatten Array


// const a=[1,2,[3,4],[5,6]]

// const result=a.flat()

// console.log(result);



//or


// const a=[1,2,[3,4],[5,6]]


// let main_result=[];


// for(let b of a){
//     if(Array.isArray(b)){
//         main_result.push(...b)
//     }
//     else{
//         main_result.push(b)
//     }
// }


// console.log(main_result);


//15. Sort Descending

// const arr = [4,2,1,5,3]

// const result = arr.sort((a,b) => b - a)

// console.log(result)




// 16 Find Duplicate Values

// const arr = [1,2,2,3,4,4]

// const duplicates = arr.filter((item,index)=>
//    arr.indexOf(item) !== index
// )

// console.log(duplicates)



//17 captalize 1st letter


// let string="hello";


// let result=string.charAt(0).toUpperCase()+string.slice(1);

// console.log(result);



// 18 Debouncing 


// function debounce(fn,delay){

//     let timer;

//     return function(){
//         clearTimeout(timer);

//         timer=setTimeout(()=>{
//             fn()
//         },delay)



//     }

// }


// function fn(){
//     console.log("Hello every one ");
    
// }


// const result=debounce(fn,3000)
// result()




//19 shallow copy


// const obj={
//     name:"king",
//     address:{
//         city:"delhi"
//     }
// }



// let obj_1={...obj}

// obj_1.address.city="heyyy"


// console.log(obj.address.city);



// 20 deep copy


// const obj={
//     name:"king",
//     address:{
//         city:"chennai"
//     }
// }

// let result=JSON.parse(JSON.stringify(obj))
// result.address.city="change>>>"

// console.log(obj.address.city);



// 21 call.apply,bind

//call
// function result(){
//     console.log(`${this.name}`);
    
// }


// const obj={
//     name:"King"
// }



// result.call(obj)



//apply
// function result(age,city){

//     console.log(`${this.name} and ${age} and ${city}`);
    

// }


// const obj={
//     name:"king"
// }

// result.apply(obj,[36,"king area"])


//find


// function hello(){
//     console.log(`${this.name}`);
    
// }

// const obj={
//     name:"king"
// }

// const result=hello.bind(obj);
// result()


//22. separate the string and number
// const array=[28,"king","hi",47,476]


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
