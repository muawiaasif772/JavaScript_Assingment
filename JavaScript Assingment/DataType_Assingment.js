// Compare and contrast primitive and complex data types, highlighting their differences and use cases.
// 
// Task 3: Deep and Shallow Copy

// // Scenario: You are working on a web application for managing student records. The system keeps track of students, their courses, and grades. The dataset is structured with nested objects and arrays.

//*********Task 1**********
// ---------------primitive------------
// let num=42;
// let str='Muawia Asif'
// let A=null;
// let bol=true;
// let sym=Symbol('muawia')
// let bigInt=1234567890123456;
// // ------------complex---------
// let arry=['apple','banana','kahjor','mangos']
// let obj={
//     name:'muawia',city:'Uch Sharief',age:18
// }
// let now=new Date()

// Task 2: Practical Applications

// Write a program that converts a string containing a number into an actual number using parseInt or parseFloat.
// Implement a function that checks if a given variable is an object or not, using the typeof operator.
// Illustrate how to access and modify elements in an array.
// Show how to add and remove properties from an object.


// let stri="20"
// let convert=parseInt(stri)
// console.log(typeof convert)

// let object={
//     name:'muawia',city:'Uch Sharief',age:18
// }
// console.log(typeof object )

// let arry2=[2,4,6,8]
// // access
// console.log(arry2[1])
// // ouput 4
// // modify
// arry2[1]=1
// console.log(arry2[1])
// // ouput 1
// let person = {
//     name: 'Amit',
//     age: 24,
//     occupation: 'Engineer',
// };
 

// person.city = 'uch shaareef';
// person.email = 'muawiaasif772@gmail.com';
// console.log(person)
// // remove properties
// delete person.age
// delete person.email
// console.log(person)
// Task 3: Deep and Shallow Copy

// // Scenario: You are working on a web application for managing student records. The system keeps track of students, their courses, and grades. The dataset is structured with nested objects and arrays.
studentRecords = [
    {
      id: 1,
      name: "Alice",
      courses: ["Math", "English"],
      grades: { Math: 90, English: 85 },
    },
    {
      id: 2,
      name: "Bob",
      courses: ["History", "Biology"],
      grades: { History: 78, Biology: 92 },
    },
  ];




//2-Shallow Copy Exercise:*****
let array=[...studentRecords] 
array[0].courses='Urdu'
console.log(array)

// // 3-Deep Copy Exercise: 

const deepCopy = JSON.parse(JSON.stringify(studentRecords));
deepCopy[0].grades.Math = 95;

console.log(studentRecords[0].grades.Math); 
console.log(deepCopy[0].grades.Math); 


 



