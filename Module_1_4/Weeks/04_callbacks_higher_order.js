
/**
 * CALLBACK
 * A function that is passed as the argument of another function
 */

//1) Array
const mexicanFood = ['tacos', 'enchiladas', 'pozole', 'chilaquiles'];

//2) Function that will be passed (callback) to a loop as an instructions what loop should be doing;

const logFood = (item, index, array) => {
  console.log('The dish ' + item + ' is at position ' + index)
}

/**
 * HIGHER ORDER FUNCTION
 * A function that receives a function as an argument
 */

mexicanFood.forEach(logFood); //--> we take our array mexicanFood, we add forEach loop which will be working with this array. Then we pass logFood function. It tells the ForEach loop what it should do when iterrating over the items;

/**
 * Code below demonstrates two ways to iterate over an array and perform some action for each element: using the built-in forEach method and a custom implementation (myForEach). Both approaches achieve the same result of logging the animal names and their indices to the console.
 */

// 1st Option 

const animalsArray = [
  'frog',
  'bear',
  'penguin',
  'raccoon',
  'lion',
  'another frog 🐸',
]

animalsArray.forEach((animal) => {console.log(animal)})
//is using the built-in forEach method of arrays to iterate over each element of animalsArray and log it to the console. This will print each animal name on a separate line.


//2nd Option

//myForEach is a custom implementation of the forEach method. It takes an array and a callback function as parameters. Its a function (callback) inside the loop and inside the main function

const myForEach = (array, callback) => {
  for(let i=0; i<array.length; i++) { 
    callback(array[i], i, array); 
    
    //Inside the myForEach function, a for loop is used to iterate over each element of the array. The callback function is called for each element of the array, passing the current element, its index, and the entire array as arguments.
  }
}

myForEach (animalsArray, (animal, index, array) => { //two arguments: animalsArray and an anonymous arrow function. 
  //  callback(array[i], i, array) --> (animal, index, array)

    console.log(`${animal} is at index ${index}`); 
    //console.log(array);
  }
)
