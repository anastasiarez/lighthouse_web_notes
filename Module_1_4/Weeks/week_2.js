var planetMoons = {
  mercury: 0,
  venus: 0,
  earth: 1,
  mars: 2,
  jupiter: 67,
  saturn: 62,
  uranus: 27,
  neptune: 14
};

function cosmos(){

for (var planet in planetMoons) { 
  
  // var planet is everything in the first column of the object - keys
  
  var numberOfMoons = planetMoons[planet];
  console.log("Planet: " + planet + ", # of Moons: "+ numberOfMoons);
}}

cosmos();

//objects can sometimes have properties that they inherit from their prototype chain as well as method names. An additional filtering step is sometimes necessary:

for (var planet in planetMoons) {

  // additional filter for object properties:

  if (planetMoons.hasOwnProperty(planet)) {
  }
}
