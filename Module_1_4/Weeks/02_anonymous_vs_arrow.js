//1) Regular f-n

function getSquareArea(side){
  return side*side;
}

//2) Anonymous f-n - doesnt have a name (can be used inside the other f-n, or assigned to a var

const myFunction = function(side){
  return side*side;
}

myFunction(3);

//3) Arrow f-n (word function is replaced by => and arguments are typed before it). 

const arrowFunction = (side) => {
  return side*side;
}

arrowFunction(2);
