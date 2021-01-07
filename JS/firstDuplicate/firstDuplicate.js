/*
Given an array a that contains only numbers in the range from 1 to
a.length, find the first duplicate number for which the second occurrence
has the minimal index. In other words, if there are more than 1 duplicated
numbers, return the number for which the second occurrence has a smaller
index than the second occurrence of the other number does. If there are
no such elements, return -1.
*/

function firstDuplicate(a) {
  // object to save nums we've seen before
  const nums = {};

  // iterate through the array
  for (let elem of a) {
      if (nums[elem] === 0) {
          return elem;
      } else {
          nums[elem] = 0;
      }
  }
  return -1;
}


// Testing
const exampleArr = [2, 1, 3, 5, 3, 2];
console.log(firstDuplicate(exampleArr)); // 3
