// Typescript is all about providing types that what type should it follows over javascript


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

// function sum(num1: number, num2: number) {
//     return (num1 + num2);
// }

// let ans : any = sum(4, 5);
// ans = "Kunal"
// console.log(ans);

// let ans = sum(4, 5);
// // ans = "Kunal" -> cannot do this
// console.log(ans);

// let ans : number = sum(4, 5);
// // ans = "Kunal" -> cannot do this
// console.log(ans);


// Object in function -> syntax important

// function greet(user: {
//     name: string,
//     age: number,
// }) {
//     console.log("hello, " + user.name);
// }

// let user = {
//     name: "Kunal",
//     age: 21
// }

// greet(user);

// ------------------------------------------------------------------------


// Interfaces in ts:

// interface userType {
//     name: string,
//     age: number
// }
// function greet(user: userType) {
//     console.log("hello, " + user.name);
// }

// let user: userType = {
//     name: "Kunal",
//     age: 21
// }

// greet(user);


// --------------------------------------------------------------------------


// Types in ts:

// interface userType {
//     name: string,
//     age: number
// }
// function greet(user: userType) {
//     console.log("hello, " + user.name);
// }

// let user: userType = {
//     name: "Kunal",
//     age: 21
// }

// greet(user);