/*
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

// Input: string
// Output: longest substring within the string that exactly matches its reverse version
// Considerations: not just considering words; count white spacesas part of a palindrome
// Edge case: input is empty; odd and even palindromes

// Approach: compare sliced pieces (of all sizes) of input string to sliced
// pieces of (all sizes) reversed version of input string

const longestPalindrome = (string) => {
  // if input string is empty return empty string
  if (string.length < 2) {
    return string;
  }
  
  // create an output string that will change to our longest palindrome
  let longest = '';

  // iterate through array and create slices with one less letter each time
  for (let i = 0; i < string.length; i++) {
    for (let j = string.length; j > 0; j--) {
      let currentStr = string.slice(i, j);
      if (currentStr.length > longest.length && isPalindrome(currentStr)) {
        longest = currentStr;
      }
    }
  }

  // return the largest item in the sorted list
  return longest;
};
  
  
const isPalindrome = (string) => {
  let leftIdx = 0;
  let rightIdx = string.length - 1;
  
  while (leftIdx < rightIdx) {
    if (string[leftIdx] !== string[rightIdx]) return false;
    leftIdx++;
    rightIdx--;
  }
  return true;
}
  
// ASSERTION FUNCTION(S) TO BE USED

// TESTS CASES
//console.log(reverseString("purple"));

let statement = "I can't wait to be done with all this prep work"

//let statementArr = statement.split(" ");
//statementArr.sort();
//console.log(statementArr);

const sentence = "hannah wants to be down at redder creek by noon to rent a kayak";
const sentence1 = "My dad is a racecar athlete";
const sentence2 = "There was a tattarrattat on the racecar. It made a funny noise."; // ' tattarrattat '

//console.log(isPalindrome("keep"));

const phrase = 'RoTaToR';
const phrase2 = '';

console.log(longestPalindrome(sentence1));
console.log(longestPalindrome(phrase2));
