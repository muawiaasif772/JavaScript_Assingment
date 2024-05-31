// ..........let ka variable ka block scope hota ha........
let a=5;
console.log(a)

// ............const...............
// const variable k value ek dufa assing karny ka bad dobara ni kar sakty
const pi=3.14222
// const pi this give us error
// ..........var..........
//  var variable ka scope global hota ha
// 
function varExample() {
    // undefined mily ga q k ham console pahly karwa rahy ha in initialization keay bageir

    console.log(x); 
    var x = 10;
    console.log(x); // 10
}
varExample();
function letExample() {
    console.log(y);     // undefined mily ga q k ham console pahly karwa rahy ha in initialization keay bageir

    let y = 20;
    console.log(y); // 20
}
letExample();
function constExample() {
    // console.log(z);     // undefined mily ga q k ham console pahly karwa rahy ha in initialization keay bageir

    const z = 30;
    console.log(z); // 30
    z = 40; // TypeError: q k ham ek  constant variable ko value reassing kar rahy ha
}
constExample();
function hoistingExample() {
        // ReferenceError ay ga q k ham variable ko console pahly kar rahy ha  initialization keay bageir

    console.log(a); 
    var a = 100;

    console.log(b); 
    // ReferenceError ay ga q k ham variable ko console pahly kar rahy ha  initialization keay bageir
    let b = 200;

    console.log(c);
    const c = 300;
}
hoistingExample();
var globalVar = "I am global";
console.log(globalVar); 
function functionScopeExample() {
    var functionVar = "I am function-scoped";
    console.log(functionVar); 
}
functionScopeExample();
// functionVar ek block scope my ha isleay ReferenceError ay ga

console.log(functionVar); 
{
    let blockVar = "I am block-scoped";
    console.log(blockVar); 
}//  blockVar ek block scope my ha isleay ReferenceError ay ga
console.log(blockVar); 

