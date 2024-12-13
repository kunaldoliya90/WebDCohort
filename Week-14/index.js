"use strict";
// let x: number = 1; // c++ -> int x = 1;
// // x = "Kunal" - cannot do in TS 
// console.log(x);
// function greet(firstName: string){
//     console.log("Hello, " + firstName);
// }
// any type in ts [ let x : any = 1; x = true, x = 'Kunal' ]
// greet("Kunal");
// // greet(1) -> cannot take number if I want't to support both what I can do is
// function greet(firstName: string | number){
//     console.log("Hello, " + firstName);
// }
// -> sum function
function sum(num1, num2) {
    return (num1 + num2);
}
let ans = sum(4, 5);
console.log(ans);
