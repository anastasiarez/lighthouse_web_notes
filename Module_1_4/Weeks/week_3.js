const round = function (number) {
  return Math.round(number * 100) / 100;
};

const median = function (arr) {
  
  if (arr.length === 0 || arr.length === 1 || arr.length === 2) {
    console.log(null);
    return null;
  }

  const sorted = arr.sort((a, b) => a - b);
  console.log(sorted);
  const middleIndex = Math.floor(sorted.length / 2);
  console.log("this is a mid index " + middleIndex);

  if (sorted.length % 2 === 0) {

    const firstElem = sorted[middleIndex];
    const secondElem = sorted[middleIndex - 1];
    const average = (firstElem + secondElem) / 2;

    console.log('this is a average of two mid numbers ' + round(average));
    return round(average);

  } else {

    console.log('this is a mid number after sorted ' + sorted[middleIndex]);
    return sorted[middleIndex];
  }
}

median([6, 2, 3, 4, 9]);
median([1, 6, 2, 3, 4, 9]);
median([1, 6]);
median([1]);
median([]);