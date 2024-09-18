// Promise class gives u promise, that I will return something to you in future

// Eg setTimeout function promises to call logName function after 3 sec
// function logName(){
//     console.log("Kunal");
// }
// setTimeout(logName, 3000);

// CallBack based approach
// setTimeout(callback, 3000);

// Promise based approach

// function setTimeoutPromisified(ms){
//     let p = new Promise(resolve => setTimeout(resolve, ms));
//     // return object of a promise class
//     return p;
// }

// function callback(){

// }
// setTimeoutPromisified(3000).then(callback);

// Calling is promise is easy defining your own promise is hard...
// const d = new Date();
/*
    class Date{
    
    ........
    
    }

*/

// Promise in JS an object that repsents eventual completion or failure of an asunchronous poeration and its resulting value.
// promises are used to handle asynchronous

// ------------------------------------------------------------

// Understanding promise from basics again

// function random() {}

// let p = new Promise(random);

// function callback() {
//   console.log("Promise Succeed");
// }
// p.then(callback);
// console.log(p);

// ------------------------------------------------------------

// Promisified version of fs.readFile fs.writeFile, fs.cleanFile
// let fs = require("fs").promises;
// fs.readFile("./a.txt", "utf-8").then(funX);

// // console.log(content);

// function funX() {
//   console.log("File Read Successfully");
// }

// ------------------------------------------------------------

// Promisified version of fs.writeFile fs.writeFile, fs.cleanFile
let fs = require("fs").promises;
fs.writeFile("./a.txt", "utf-8").then(funX);

// console.log(content);

function funX() {
  console.log("File Write Successfully");
}
