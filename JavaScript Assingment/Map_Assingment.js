// Write a function that takes an array of numbers and returns a new array containing the squares of each number.

// const numbers = [1, 2, 3, 4, 5];
// // Output: [1, 4, 9, 16, 25]
function square(arr){
    return arr.map(ele=>ele*ele)
}
let numbers=[3,5,7,9,11,13]
let newNumbers=square(numbers)
console.log(newNumbers)
// outPut [ 9,25,49,81,121,169]

// Capitalize Names
// Write a function that takes an array of names and returns a new array with each name capitalized.

// const names = ['john', 'jane', 'bob'];

// Output: ['John', 'Jane', 'Bob']
function IsCapitalize(names) {
    return names.map(name => {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    });
}

let array = ['muawia', 'hamza', 'asif', 'talha'];
let Capital = IsCapitalize(array);
console.log(Capital); 
// Task 3: Array of Object Properties
// Given an array of objects, create a new array containing a specific property from each object.

// const people = [ { name: 'John', age: 30 }, { name: 'Jane', age: 25 }, { name: 'Bob', age: 40 } ];
// // Output: ['John', 'Jane', 'Bob']
// // Output: [30, 25, 40]
let person=[
    {
        name:'Muawia',age:20,city:'Uch'
    },
    {
        name:'hamza',age:15,city:'TMP'
    },
    {
        name:'talha',age:12,city:'BWP'
    }
]
 let na=person.map((ele)=>ele.name)
 console.log(na)
 let cit=person.map((ele)=>ele.city)
 console.log(cit)
 let ag=person.map((ele)=>ele.age)
 console.log(ag)


   
