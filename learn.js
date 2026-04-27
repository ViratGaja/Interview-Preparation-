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




// which two value can add got the result

let array=[200,400,300,100]

function result(array){
for(let i=0;i<array.length-1;i++){
    for(let j=i+1;j<array.length;j++){
        if(array[i]+array[j]==700){
            return [array[i],array[j]]
        }
    }
}
}

console.log(result(array))