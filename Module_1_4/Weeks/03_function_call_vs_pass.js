const sayHello = (person, message) => {
  
  return `${person} says ${message}`;// same as --> return person + 'says' + message;
}

/**
 * PASSING A FUNCTION
 */
console.log(sayHello) // --> returns [Function: sayHello]


/**
 * CALLING A FUNCTION
 */
console.log(sayHello('Bob', 'can we build it??'));