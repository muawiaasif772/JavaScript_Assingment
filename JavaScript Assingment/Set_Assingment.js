// Remove Duplicates from an Array
// Write a function that takes an array as input and returns a new array with duplicate elements removed using a Set.

// const numbers = [1, 2, 2, 3, 3, 4, 5, 5];
// Output: [1, 2, 3, 4, 5]

// let evens=new Set([3,4,4,5,6,7])

function removeDuplicate(array){
    return [...new Set(array)]
}
let numbers=[2,2,4,6,3,3,6]
let result=removeDuplicate(numbers)
console.log(result)
// Find Common Elements between Two Arrays
// Write a function that takes two arrays as input and returns a new array containing the common elements using Set.
function Comman(array1,array2){
    let set1=new Set(array1)
    let set2=new Set(array2)
    return [...set2].filter(ele=>set1.has(ele))
}
let array1=[2,2,4,6,3,3,6]
let array2=[1,2,3,4,5,6,7,8]
let commans=Comman(array1,array2)
console.log(commans)
// Count Unique Characters in a String
// Write a function that takes a string as input and returns the count of unique characters in the string using Set.
// const text = 'hello';
// Output: 4
function unique(str){
    let uni=new Set(str)
    return [...uni].length
}
let text='muawia asif'
let str=unique(text)
console.log(str)




