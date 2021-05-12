/*
Input: all chars provided in caps
Input: length of solution string is at least 5, no max length

Output: array of nums of passwords that can be created by each keypad

C: solution string must be valid English word
C: first letter, AKA the "key" letter will be in solution word
C: solution word only contains letters from the keypad
C: chars can be duplicated
*/

const getCombos = (words, keypads) => {
  console.time("run time");
  const keypadObjects = [];
  const wordObjects = [];
  const solutions = [];
  
  // iterate over keypads to create an object of characters
  for (let keypad of keypads) {
    const keys = {};
    keys["first"] = keypad[0];
    //let validPasswords = 0;

    // for each keypad, create an object of that keypad
    for (let i = 0; i < keypad.length; i++) {
      // mark the first letter to rule out passwords that don't include it
      if (i === 0) {
        keys[keypad[i]] = "first";
        keys["first"] = keypad[i]
      } else {
        keys[keypad[i]] = true;
      }
    }
    keypadObjects.push(keys);
  }
  
  for (let word of words) {
    const chars = {};
    //let validPasswords = 0;

    // for each keypad, create an object of that keypad
    for (let char of word) chars[char] = true;
    wordObjects.push(chars);
  }
  
  for (let keypadObj of keypadObjects) {
    let validPasswords = 0;
    for (let wordObj of wordObjects) {
      if (isValid(wordObj, keypadObj)) validPasswords++;
    }
    solutions.push(validPasswords);
  }
    
  console.timeEnd("run time");
  return solutions;
}

const isValid = (wordObj, keypadObj) => {
  //let hasFirst = false;

  if (wordObj[keypadObj["first"]] === undefined) return false;
      
  // check each char in word against each key in kepyad
  for (let key in wordObj) {
    if (keypadObj[key] === undefined) return false;
    //if (keypad[char] === "first") hasFirst = true;
  }
  //return hasFirst;
  return true;
}

// Testing
var wordLibrary = require('an-array-of-english-words');
const words = ['apple', 'pleas', 'please'];
const keypads = ['aelwxyz', 'aelpxyz', 'aelpsxy', 'saelprt', 'xaebksy'];
const alphabet = ['abcdefghijklm', 'nopqrstuvwxyz'];

//console.log(getCombos(words, keypads)) // >>> [0, 1, 3, 2, 0]
console.log(getCombos(wordLibrary, alphabet)); // run time of ~530ms

