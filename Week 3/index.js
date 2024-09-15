// Sunchronous code

// function sum (a, b){
//   return parseInt(a)+b;
// }

// let ans = sum(20, 30);
// // console.log(ans);

// function sum(n){
//   let ans = 0;
//   for(let i = 1; i<= n; i++){
//     ans += i;
//   }
//   return ans;

//   // return n*(n+1)/2;
// }

// let ans2 = sum(5);
// console.log(ans2);

// i/o Heavy Operation
// Reading a file || Clock || HTTP Requests

// Reading from aingle files
// const fs = require("fs");
// const contents = fs.readFileSync("./a.txt", "utf-8");
// console.log(contents);

// Reading from two files

// Synchronously -
// let fs = require("fs");
// let contentsx = fs.readFileSync("./a.txt", "utf-8");
// console.log(contentsx);
// let contentsy = fs.readFileSync("./b.txt", "utf-8");
// console.log(contentsy);


// Asynchronously
// let fs = require("fs");
// function read(err, data) {
//   console.log(data);
// }
// fs.readFile("./a.txt", "utf-8", read);
// fs.readFile("./b.txt", "utf-8", read);

// console.log("Done!");


// Async
// function timeout(){
//     console.log("Click The Button");
// }
// console.log("hi");
// setTimeout(timeout, 1000);

// console.log("Welcome to Loupe");

// let c = 0;
// // will run for 3-4 sec
// for(let i=0; i<10000000000; i++){
//     c=c+1;
// }

// console.log("Expensive operation done");
