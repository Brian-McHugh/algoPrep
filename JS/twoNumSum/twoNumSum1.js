// O(n) time | O(n) space
function twoNumSum(array, targetSum) {
  // save previously seen nums
  let prevNums = {};
	
	// iterate through the input array
	for (let num of array) {
    let deficit = targetSum - num;
    
    if (deficit in prevNums) {
      return [deficit, num];
    } else {
      prevNums[num] = num;
    }
  }
  
  // return empty array if no pair is found
  return [];
}

// Testing
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let targetSum = 17;

console.log(twoNumSum(array, targetSum));
