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

// interface User {
//     name: string,
//     age: number,
//     address: {
//         city: string,
//         country: string,
//         pincode: number
//     };
// }

// let user: User = {
//     name: " Kunal",
//     age: 21,
//     address: {
//         city: " Indore",
//         country: 'India',
//         pincode: 65464
//     }
// }
// function isLegal(user: User): boolean {
//     return user.age >= 18;
// }

// let x: boolean = isLegal(user);
// if (x == true) {
//     console.log("User is Legal");
// } else {
//     console.log("I am not legal");
// }

// but as application becomes complex we need inrerface an types


// Let's say I want to make address optional

// interface User {
//     name: string,
//     age: number,
//     address?: { // Change in this line added ? for making address optional
//         city?: string,
//         country?: string,
//         pincode: number
//     };
// }
// let User2: User = {
//     name: "Kunal",
//     age: 22,
// }

// function isLegal(user: User): boolean {
//     return user.age >= 18;
// }

// let x: boolean = isLegal(User2);
// if (x == true) {
//     console.log("User is Legal");
// } else {
//     console.log("I am not legal");
// }

// Now we will see example where one interface will use other interface in it 

// let;s say I am using address interface which can be used by other interface w.g

// interface Address {
//     address: {
//         city: string,
//         country?: string,
//         pincode: number
//     };
// }
// interface User {
//     name: string,
//     age: number,
//     address: Address
// }
// interface Office {
//     address: Address
// }


// ------------------------------------------------------------------------------------------------



// interface People {
//     name: string,
//     age: number,
//     // greet: () => string // One way to write function
//     // greet2(): string
// }

// // create an object called person : People (people type)
// let person: People = {
//     name: "Kunal",
//     age: 21,
//     // greet: () => {
//     //     return "Hi"
//     // }
// }

// class Manager implements People {
//     name: string;
//     age: number;
//     good: string

//     constructor(name: string, age: number, good: string) {
//         this.name = name;
//         this.age = age;
//         this.good = good
//     }
// }

// let user = new Manager("Kunal", 21, "Yes");
// console.log(user.name);
// console.log(user.age);
// console.log(user.good);

// let greeting = person.greet();
// console.log(greeting);

// When I extends from a class I need to call super() of parent constructor in the childrens constructor
// Learn Extends and Implenents in TS


// ------------------------------------------------------------------------------------------------

// Types

// difference btween Interface and Types
// we can create abstract classes
// Type - lets aggregate data together
// little syntax change of "=" in assigning

// interface User {
//     name: string;
//     age: number;
// }

// type User2 = {
//     name: string;
//     age: number
// }

// function isLegal(user: User){
//     return user.age >= 18
// }

// But we can't implement a type as we cn implement in interface
// type -> let you do Unions and Intersection

// Intersection

type Employee = {
    name: string;
    startDate: string;

}
type Manager = {
    name: string;
    department: string;
}
type TeamLead = Employee & Manager; // I can also use "|"  or operator
let e: Employee = {
    name: "Kunal",
    startDate: "01-02-2004",
}
let m: Manager = {
    name: "Kunal",
    department: "CS",
}
let t: TeamLead = {
    name: "Kunal",
    startDate: "01-02-2004",
    department: "CS"
}