// All about the first Class

// Let's say I am writing any function in cpp:

// int sum(int abstract, int b){
//     return a + b;
// } 

// how different from js : Loosely typed language does need to mention type eg int - Type Safety

// function sum(a, b){
//     return a + b;
// }

// in Typescript

// function sum(a: number, b: number): number {
//     return a + b;
// }

// function isEven(num1: number) : boolean{
//     if(num1 % 2 == 0) return true;
//     else return false;
// }

// the above are primitives -> we cannot create complex objects eg User
// let User = {
//     name: " Kunal",
//     age: 21,
//     address: {
//         city:" Indore",
//         country: 'India',
//         pincode: 65464
//     }
// }
// function isLegal(user : ?) : boolean{

// }


// so how to solve this problem ? using interfaces

interface User {
    name: string,
    age: number,
    address: {
        city: string,
        country: string,
        pincode: number
    };
}

let user: User = {
    name: " Kunal",
    age: 21,
    address: {
        city: " Indore",
        country: 'India',
        pincode: 65464
    }
}
function isLegal(user: User): boolean {
    return user.age >= 18;
}

let x : boolean = isLegal(user);
if(x == true){
    console.log("User is Legal");
}else{
    console.log("I am not legal");
}

// but as application becomes complex we need inrerface an types
