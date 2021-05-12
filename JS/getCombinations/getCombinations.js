/*
Input: all chars provided in caps
Input: length of solution string is at least 5, no max length

Output: array of nums of passwords that can be created by each keypad

C: solution string must be valid English word
C: first letter, AKA the "key" letter will be in solution word
C: solution word only contains letters from the keypad
C: chars can be duplicated
*/

// const getCombos = (words, keypads) => {
//   const combos = [];

//   //iterate thru keypads
//   for (let keypad of keypads) {
//     let validPasswords = 0;
//     console.log("keypad: ", keypad);
      
//     // iterate thru words array
//     for (let word of words) {
//       let newWord = new Set(word);
//       console.log("word: ", word);
//       if (!newWord.has(keypad[0])) {
//         console.log("word skipped");
//         continue;
//       }
          
//       console.log("set: ", newWord);
//       let match = true;
//       for (let char of newWord) {
//         console.log("current letter: ", char)
//         if (!keypad.includes(char)) {
//           match = false;
//           break;
//         }
//       }
//       if (match) validPasswords++;
//     }
//     combos.push(validPasswords);
//   }
//   return combos;
// }

const getCombos = (words, keypads) => {
  console.time("run time");
  const combos = [];

  // iterate thru keypads
  for (let keypad of keypads) {
    // ********** map all keypad letters to an object  ***********
    // mark the first letter and pass it to isValid
    let validPasswords = 0;
    const keys = {};
    //const first = keypad[0];

    for (let i = 0; i < keypad.length; i++) {
      if (i === 0) {
        keys[keypad[i]] = "first";
      } else {
        keys[keypad[i]] = true;
      }
    }
    // for (let key of keypad) {
    //   keys[key] = true;
    // }

    //console.log("keys: ", keys);
    //console.log("first: ", first);
      
    // iterate thru words array
    for (let word of words) {
      if (isValid(word, keys)) validPasswords++;
    }

    combos.push(validPasswords);
  }
  console.timeEnd("run time");
  return combos;
}

const isValid = (password, keys) => {
  //let uniqueChars = new Set(password);
  
  //console.log("password: ", password);
  //console.log("keys: ", keys);
  //console.log("first: ", first);
  //if (!uniqueChars.has(keypad[0])) return false;
  //if (!uniqueChars.has(first)) return false;
          
  //console.log("set: ", uniqueChars);
  //for (let char of uniqueChars) {
    //console.log("current letter: ", char)
    //if (!keypad.includes(char)) return false;
    //if (keys[char] === undefined) return false;
  //}
    //const first = keypad[0];
  
  let hasFirst = false;

  for (let char of password) {
    //console.log("char: ", char);
    //console.log("keys[char]: ", keys[char]);
    if (keys[char] === undefined) return false;
    //if (char === first) hasFirst = true;
    if (keys[char] === "first") hasFirst = true;
  }
  //console.log("hasFirst: ", hasFirst);
  return hasFirst;
  //return true;
}

// Testing
var wordLibrary = require('an-array-of-english-words');
const words = ['apple', 'pleas', 'please'];
const keypads = ['aelwxyz', 'aelpxyz', 'aelpsxy', 'saelprt', 'xaebksy'];
const keyboard = { s: 'first', a: true, e: true, l: true, p: true, r: true, t: true };
//const alphabet = ['abcdefghijklm', 'nopqrstuvwxyz'];
console.log(getCombos(words, keypads)) // >>> [0, 1, 3, 2, 0]
//console.log(getCombos(wordLibrary, alphabet)); // run time of ~60ms
//console.log(isValid(words[0], keyboard));

