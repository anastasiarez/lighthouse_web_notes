// /**
// Create an object to store the frequency count of each number.
// Iterate over the array and update the frequency count in the object.
// Find the maximum frequency count.
// Retrieve the number(s) that have the maximum frequency count.
//  */

// const findMostFrequentNumber = function (arr) {
//   // Step 1: Create an object to store frequency counts
//   const frequencyCount = {};

//   // Step 2: Update frequency count for each number in the array
//   for (let num of arr) {
//     frequencyCount[num] = (frequencyCount[num] || 0) + 1;
//   }

//   // Step 3: Find the maximum frequency count
//   let maxFrequency = 0;
//   for (let num in frequencyCount) {
//     if (frequencyCount[num] > maxFrequency) {
//       maxFrequency = frequencyCount[num];
//     }
//   }

//   // Step 4: Retrieve number(s) with the maximum frequency count
//   const mostFrequentNumbers = [];
//   for (let num in frequencyCount) {
//     if (frequencyCount[num] === maxFrequency) {
//       mostFrequentNumbers.push(Number(num));
//     }
//   }

//   return mostFrequentNumbers;
// };

// // Example usage
// const numbers = [1, 3, 5, 3, 7, 5, 3, 1, 9, 5, 7, 5];
// const mostFrequent = findMostFrequentNumber(numbers);
// console.log(mostFrequent); // Output: [3, 5]
// mode([6,2,3,4,9,6,1,0,5]); // --6


//stdev = sqrt(sum((x - populationMean)^2)/numberOfValues)
//take a square root using `Math.sqrt(number)`

/** *    
 * stdev([6,2,3,4,9,6,1,0,5]);
 * Returns:
 *    2.67
 *  */


const round = function (number) {
  return Math.round(number * 100) / 100;
};

const stdev = function (arr) {
  let numOfDataPoints = 0;
  for (let i = 0; i < arr.length; i++) {
    numOfDataPoints = arr.length;
    //console.log('numOfDataPoints ' + numOfDataPoints);
  }

  let sumOfDataPoints = 0;
  for (let i = 0; i < arr.length; i++) {
    sumOfDataPoints = sumOfDataPoints + arr[i];
    //console.log('sumOfDataPoints ' + sumOfDataPoints);
  }

  let average = sumOfDataPoints / numOfDataPoints;
  // console.log('average ' + average);

  let deviations = 0;
  let deviationsArray = [];

  for (let i = 0; i < arr.length; i++) {
    deviations = (arr[i] - average) * (arr[i] - average);
    deviationsArray.push(deviations);

    //console.log('deviationsArray ' + deviationsArray);
  }

  let sumOfDeviationsArray = 0;
  for (let i = 0; i < deviationsArray.length; i++) {
    sumOfDeviationsArray = sumOfDeviationsArray + deviationsArray[i];

    // console.log('sumOfDeviationsArray ' + sumOfDeviationsArray);
  }

  let variance = 0;
  variance = round(sumOfDeviationsArray / numOfDataPoints);
  console.log('variance ' + variance);

  let final = Math.sqrt(variance);
  final = final.toFixed(2);
  console.log('final ' + final);

  return final;

};

stdev([6, 2, 3, 4, 9, 6, 1, 0, 5]); // 2.67
stdev([2,4,4,4,5,5,7,9]) // === 2
stdev([-2,6,8,2,9]) // === 4.08
stdev([2,2,5]) // === 1.41
stdev([5,5,0,0,0]) // === 2.45