//Task: Write a program that takes any number of command line arguments, all strings, and reverses them before outputting them one at a time to the console.
//node reverse.js 1 fish 2 fish
// 1
// hsif
// 2
// hsif
// to be able to pass args via command line; its an array - remove first two; loop over the array; take 


const commandLineArguments = process.argv.splice(2);

const reverse = function (commandLineArguments) {
  for (const item of commandLineArguments) {
    if (typeof item === "number") {
      console.log(item);
    } else if (typeof item === "string") {
      var newString = "";
      for (var i = item.length - 1; i >= 0; i--) { 
        
        //to itterate the string from the end and then log it backwards adding one character by one
        
        newString += item[i];
      }
      console.log(newString);
    }
  }
}


reverse(commandLineArguments)