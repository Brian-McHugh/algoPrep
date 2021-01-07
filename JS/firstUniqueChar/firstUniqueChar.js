/*
Given a string s consisting of small English letters, find and return
the first instance of a non-repeating character in it. If there is no
such character, return '_'.
*/

firstUniqueChar = (str) => {
  
  const chars = {};

  for (let char of str) {
    if (!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char]++;
    }
  }

  for (let char of str) {
    if (chars[char] === 1) {
      return char;
    }
  }

  return '_';
}


// Testing
const example = "abacabad";
console.log(firstUniqueChar(example)); // 'c'

const example1 = "abcdefghijklmnopqrstuvwxyziflskecznslkjfabe";
console.log(firstUniqueChar(example1)); // 'd'
