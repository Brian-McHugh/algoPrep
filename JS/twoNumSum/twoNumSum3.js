// O(n log(n)) time | O(1) space
const twoNumSum = (array, targetSum) => {

  // sort the given array so we can find the pair
  // working from the outer edges
  array.sort();
  // above defaults to: array.sort((a, b) => a - b);
  let lowIndex = 0;
  let highIndex = array.length - 1;
	
	// iterate through the input array
	while (lowIndex < highIndex) {
    const currentSum = array[lowIndex] + array[highIndex];
    
    if (currentSum === targetSum) {
      return [array[lowIndex], array[highIndex]];
    } else if (currentSum < targetSum) {
      lowIndex++;
    } else if (currentSum > targetSum) {
      highIndex--;
    }
  }
  // return empty array if no pair is found
  return [];
}

// Testing
let array = [5, 2, 7, 4, 1, 6, 3, 8, 9];
let targetSum = 17;

console.log(twoNumSum(array, targetSum));
