

// let string='hello everyone and welcome to todays match';
// let first=string.split(' ');
// let small=first[0];
// for(let a of first){
//     if(a.length<small.length){
//         small=a
//     }
// }


// console.log(small);




// let array=[10,20,30,40];


// let total=0;

// for(let a of array){
//     total+=a
// }
// console.log(total);


//flatten
// const	a	=	[1,	2,	[3,	4],	[5,	6]]

// let result=[];

// function main(a){

//     for(let b of a){
//         if(Array.isArray(b)){
//             main(b)
//         }
//         else{
//             result.push(b)
//         }
//     }

// }
// main(a);


// console.log(result);




// let	string	=	'hello';

// let result= string.charAt(0).toUpperCase()+string.slice(1)

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

// function name(){
//     console.log("hello");

// }

// const result=debounce(name,2000);
// result()



// const obj={
//     name:"king",
//     address:{
//         city:"chennai"
//     }
// }


// const result={...obj};

// result.address.city="Bangalore";


// console.log(obj.address.city);



// const obj={
//     name:"king",
//     address:{
//         city:"chennai"
//     }
// }


// const result=JSON.parse(JSON.stringify(obj));
// result.address.city="Mumbai"
// console.log(obj.address.city);




// function name(){
//     console.log(`${this.name}`);

// }

// const obj={
//     name:"king"
// }

// const result=name.bind(obj)

// result()

// const	array	=	[28,	'king',	'hi',	47,	476]


// let result=[];
// let result_1=[];


// for(let a of array){
//     if(typeof(a)==="string"){
//         result.push(a)
//     }
//     else{
//         result_1.push(a)
//     }
// }

// console.log(result);
// console.log(result_1);



// const	arr	=	[90,50,	40,	70];


// for (let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]+arr[j]===110 ){
//             console.log(i,j);

//         }
//     }
// }




// function fact(a){
//     if(a===0||a===1) return 1
//     const result= a *fact(a-1)
//     return result
// }

// console.log(fact(5));



// let number=[1,2,3,5];


// let final=number.length+1;

// let formula=(final*(final+1))/2;

// let sum=number.reduce((a,b)=>a+b);

// let result=formula-sum

// console.log(result);





let array = [4, 2, 3, 1];


for (let i = 0; i < array.length; i++) {
    let min = i

    for (let j = i + 1; j < array.length; j++) {
        if(array[j]<array[i]){
            min=j
        }
    }
temp = array[i];
array[i]=array[min];

array[min]=temp
}


console.log(array);





