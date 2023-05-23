//Write a program that takes any number of command line arguments, converts each to pig latin then puts the translated words together into one sentence logged to the console.
//Convert a word to pig latin by taking its first letter, moving it to the end of the word, then adding "ay" after it all.
//node pig-latin.js pig latin
//igpay atinlay

const commandLineArguments = process.argv.splice(2);

function convertToPigLatin(word) {
  if (typeof word === "string" && word.length > 1) {
    const firstLetter = word.charAt(0);

    //Returns the character at the specified index. Index 0 --> first letter of the word

    const restOfWord = word.slice(1);

    //Removes everything before specified index

    return restOfWord + firstLetter + "ay";
  } else {
    return word;
  }
}

function convertCommandLineArgumentsToPigLatin(args) {
  const pigLatinArray = [];
  for (const item of args) {
    const pigLatinWord = convertToPigLatin(item);
    pigLatinArray.push(pigLatinWord);
  }
  const pigLatinSentence = pigLatinArray.join(" ");
  //The .join(" ") method is used to concatenate the elements of an array into a single string, with each element separated by a specified separator. In this case, the separator is a space character " ", which means that each element will be separated by a space.
  
  console.log(pigLatinSentence);
}

convertCommandLineArgumentsToPigLatin(commandLineArguments);

//the convertToPigLatin function handles the conversion of an individual word to pig Latin. The convertCommandLineArgumentsToPigLatin function iterates over the command line arguments, converts each word to pig Latin using convertToPigLatin, and stores the pig Latin words in an array. Finally, it joins the pig Latin words into a sentence using join and logs it to the console.