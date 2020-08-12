// O(n log(n)) time | O(1) space
const twoNumSum = (array, targetSum) => {
  // create an array to store our ouput
  let sumPair = [];

  // sort the given array so we can find the pair
  // working from the outer edges
  array.sort((a, b) => a - b);
  let lowIndex = 0;
  let highIndex = array.length-1;
	
	// iterate through the input array
	while (lowIndex < highIndex) {
    const currentSum = array[lowIndex] + array[highIndex];
    
    if (currentSum === targetSum) {
      sumPair.push(array[lowIndex], array[highIndex]);
      return sumPair;
    } else if (currentSum < targetSum) {
      lowIndex++;
    } else if (currentSum > targetSum) {
      highIndex--;
    }
  }
  // return output array
  return sumPair;
}

let array = [3, 5, -4, 8, 11, 1, -1, 6];
let targetSum = 10;

console.log(twoNumSum(array, targetSum));
