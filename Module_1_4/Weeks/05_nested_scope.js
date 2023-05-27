
const answerToTheUniverse = 42;


const firstGlobalScopeFunction = () => {  // const firstGlobalScopeFunction = () => {} is a GLOBAL SCOPE FUNCTION

  const beer = 'Corona'; //its inside the 1st GSF meaning it can only be accessed within that function

  console.log('first', answerToTheUniverse);
  console.log('isHungry?', isHungry); //isHungry is not defined within the scope of firstGlobalScopeFunction or any parent scope, so it will throw a ReferenceError.
  

  const secondLocalScopeFunction = () => {  // const secondLocalScopeFunction = () => {} is a LOCAL SCOPE FUNCTION

    const isHungry = true;
    console.log('second');

    const thirdLocalScopeFunction = () => {
      console.log('third');

      const fourthLocalScopeFunction = () => {
        console.log('fourth', answerToTheUniverse, beer);
      }
      fourthLocalScopeFunction();
    }
    thirdLocalScopeFunction();
  }
  secondLocalScopeFunction();
}

firstGlobalScopeFunction();

console.log(beer);