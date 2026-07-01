const now = new Date();

// Current Time
const currentTime = now.toLocaleTimeString();

// Today's Date
const currentDate = now.getDate();

// Current Month (1-12)
const currentMonth = now.getMonth() + 1;

// Current Year
const currentYear = now.getFullYear();

console.log("Current Time:", currentTime);
console.log("Today's Date:", currentDate);
console.log("Current Month:", currentMonth);
console.log("Current Year:", currentYear);




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