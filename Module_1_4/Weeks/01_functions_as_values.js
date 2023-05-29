// Regular function
/**
 * Parts of the function:
 * 1) "function" keyword
 * 2) name of the f-n
 * 3) inside parenthesis () we can pass Arguments
 * 4) inside curly brackets {} we can decide what the f-n does
 * 5) if a f-n doesnt have a return at the end, it will add one by default returning Underfined
 * 6) Good practice is to always return something in your f-ns
 */

function addNumbers(num1, num2){
  return num1+num2
}

//UNDERFINED SAMPLE

function addNumbers(num1, num2){
  console.log(num1+num2);
// --> return underfined
}

/**
 * F-s that are treated as values
 */

function getTriangleArea(base, height){
  return (base*height)/2;
}

const myValue = getTriangleArea;

console.log(getTriangleArea);
// ---> [Function: getTriangleArea]. This is just the definition of the f-n


console.log(getTriangleArea()); //--> Nan - because you didnt pass any numbers

console.log(myValue(8, 10)); // --> executing the f-n

/**
 * Where to store a f-n as a value? --> arrays & objects
 */
function sayHello(){return('hello!')};

const array =[1, "hello, world!", false, myValue(2,6)] // --> by storing a f-n in the array you are storing actual result of which f-n will produce.

console.log(array[3]); //--> index of the function in the array + arguments

const array2 =[1, "hello, world!", false, sayHello] 
console.log(array2[3]) // --> [function: "sayHello"]

console.log(array2[3]()) // --> hello! -> you add () to activate the f-n

const myObject = {
  myFunction: sayHello
}

myObject.myFunction();