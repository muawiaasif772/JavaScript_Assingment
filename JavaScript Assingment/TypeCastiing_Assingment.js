//1 Understanding Type Conversion
// Explain type conversion in JavaScript. What does it mean to convert data from one type to another?
//Ans:  type conversion mean cahnging of one variable data type into other data type


// Describe the two main types of type conversion: implicit and explicit. Briefly explain the difference between them.
// implicit type casting is done by compiler
// explicit it is done by programmer
// Implicit Type Conversion

// Write a JavaScript program that demonstrates implicit type conversion.
// Include examples of the following:
// Adding a string and a number.
// Concatenating a string and a boolean value.
// Using a string in a mathematical operation.
// Observe the results and explain how the conversion happens implicitly.


console.log(5+'2')
// output 52

let bool=true;
let  myNmae='Muhammad Muawia this is:'
console.log( myNmae + true)
// implicit typecasting
let bol=true;
let  str='Muhammad Muawia this is:'
// explicit type casting

console.log( myNmae + String(true))
let num=5;
 str='10'
// explicit type casting

console.log(num+Number(str))
// output 15
num=5;
str='10'
// implicit typecasting
console.log(str-num)
// output 5
num=5
str='hello'
// implicit typecasting

console.log(str-num)

// NaN
num=5
str='10'
console.log(str*num)
// implicit typecasting

// out put 50
// Explicit Type Casting

// List three methods for explicit type casting in JavaScript. These methods typically involve functions or operators.
// Write a program that showcases each explicit type casting method.
// Convert a number stored as a string to a number using Number().
// Convert a boolean value to a string using String().
// Convert a value to a boolean using Boolean().
// In each case, print the original value and the converted value to demonstrate the effect.
 str = "123";
 num = Number(str);
console.log(num); 
console.log(typeof num); 
 str = "123";
 num = parseInt(str); //
console.log(num); 
console.log(typeof num); 
num=23;
str=num.toString()
console.log(str, typeof str)
// Output: string
 bool = true;
 str = String(bool);
console.log(str); 
console.log(typeof str); 

bool = false;
str = String(bool);
console.log(str); 
console.log(typeof str); 

bool = false;
str = Boolean(bool);
console.log(str); 
console.log(typeof str); 














