// /*

// FIRST OPTION

// for (let num = 100; num <= 200; num++) {
//   if (num % 3 === 0 && num % 4 === 0) {
//     console.log("LoopyLightHouse");
//   } else if (num % 3 === 0) {
//     console.log("Loopy");
//   } else if (num % 4 === 0) {
//     console.log("LightHouse");
//   } else {
//     console.log(num);
//   }
//  }
//  console.log(num);
// */

// /*

// SECOND OPTION

// for (const num of nums) {
//   let output = "";

//   if (num % 3 === 0) {
//     output += "Loopy";
//   }
//   if (num % 4 === 0) {
//     output += "LightHouse";
//   }
//   console.log(output === "" ? num : output); --> Ternary Operator: condition ? valueIfTrue : valueIfFalse
// ? separates condition & a value; : separates two possible outcomes of the condition
// }

// */

// /*

// Lecture 1 - May 18

// Write a node program that takes in an unlimited number of command line argumetns (CLA) and prints out the sum of them.
// If any argument is not a whole number or its a negative number, skipit. 

// This is how it should look like: node example.js 1 hello 2 -4 3 1 (here is our node program, our .js file and we are passing extra arguments that are numbers and strings. I want it to give me a sum of just even positive numbers. In the example case the output should be 7 (1+2+3+1))

// Questions to solve:
 
// 1) How do we add CLA to node? --> use process.argv; colsole log it to see what it does. Its an array with our node program and our .js file.

// console.log(process.argv)  -->
// [
//   '/home/labber/.nvm/versions/node/v12.18.4/bin/node',
//   '/home/labber/week_1/Week_1.js'
// ]

// 2) How can we make sure that we work only with numbers?
// add it to a variable for ease of use. Also, since we want to work only with numbers we can separate first two arguments in the array by using .splice method.(2) means to remove first 2 args */

// const commandLineArguments = process.argv.splice(2);

// //console.log(commandLineArguments)

// // 3) Now we can work arount sum. Start with a new var that is 0

// let total = 0;

// /*
// 4) Since we have an array we need to itterate over it and pick positive whole numbere. Use for of loop and if statements.

// For Of Loop:
// for (variable of iterable){} -->

// const message = "Hello";
// for (const char of message) {
// console.log(char);}

// Output:
// H
// e
// l
// l
// o

// for (const item of commandLineArguments){
//   console.log(item);
//   total = total + item;
// }

// console.log("total", total);

// 5) Input and Output of the code above is:
// In:
// node Week_1.js 1 2 3 Hi -4 1.5
// Out:
// total 0123Hi-41.5
// We need to convert all items to numbers. Use Number() method

// for (const item of commandLineArguments){
//   //console.log(item);
//   const converted = Number(item);
//   total = total + converted;
// }

// console.log("total", total);

// output is: total 0123Hi-41.5123NaN-41.5
// NaN is Not a Number. We need to fix this by using if statement and Integer (an integer is a whole number that does not include a fractional or decimal part.)method. Or you can use %

// for (const item of commandLineArguments){
//   //console.log(item);
//   const converted = Number(item);

//   if(Number.isInteger(converted))
//   total = total + converted;
// }

// console.log("total", total);

// 6) We have to make sure it doesn't count negative numbers
// */

// for (const item of commandLineArguments) {
//   const converted = Number(item);
//   if (Number.isInteger(converted) && converted > 0) {
//     total = total + converted;
//   }
// }

// console.log("total", total);


if (5 > 10) {
  console.log("Impossible!");
}
console.log("Phew, logical fallacies avoided.");