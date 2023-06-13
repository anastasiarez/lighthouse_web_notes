const titleCase = function(text) {
  if (text === "") {
    return ("");
  }
  let sentence = text.toLowerCase().split(" ");
  for (let i = 0; i < sentence.length; i++) {
    //sentence is an array; sentence[i] is each word
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  let newStr = sentence.join(" ");
  return(newStr);
};

titleCase("this is an example"); // "This Is An Example"
titleCase("test"); //  "Test"
titleCase("i r cool"); // "I R Cool"
titleCase("WHAT HAPPENS HERE"); // "What Happens Here"
titleCase(""); // ""
titleCase("A"); // "A"

