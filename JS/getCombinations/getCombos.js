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
  const solutions = [];
  
  // iterate over keypads to create an object of characters
  for (let keypad of keypads) {
    const keys = {};
    let validPasswords = 0;

    // for each keypad, create an object of that keypad
    for (let i = 0; i < keypad.length; i++) {
      // mark the first letter to rule out passwords that don't include it
      if (i === 0) {
        keys[keypad[i]] = 'first';
      } else {
        keys[keypad[i]] = true;
      }
    }
    // iterate over words array
    for (let word of words) {
      let isValid = true;
      let hasFirst = false;
      
      // check each char in word against each key in kepyad
      for (let char of word) {
        if (keys[char] === undefined) {
          isValid = false;
          break;
        }
        if (keys[char] === 'first') hasFirst = true;
      }
      if (isValid && hasFirst) validPasswords++;
    }
    solutions.push(validPasswords);
  }
    
  console.timeEnd("run time");
  return solutions;
}

// Testing
var wordLibrary = require('an-array-of-english-words');
const words = ['apple', 'pleas', 'please'];
const keypads = ['aelwxyz', 'aelpxyz', 'aelpsxy', 'saelprt', 'xaebksy'];
const alphabet = ['abcdefghijklm', 'nopqrstuvwxyz'];

//console.log(getCombos(words, keypads)) // >>> [0, 1, 3, 2, 0]
console.log(getCombos(wordLibrary, alphabet));

