// O(n) time | O(n) space
function twoNumSum(array, targetSum) {
  // create an output array
  let sumPair = [];
  let prevNums = {};
	
	// iterate through the input array
	for (let num of array) {
    let deficit = targetSum - num;
    
    if (deficit in prevNums) {
      sumPair.push(deficit, num);
      return sumPair;
    } else {
      prevNums[num] = num;
    }
  }
  
  // return output array
  return sumPair;
}

let array = [3, 5, -4, 8, 11, 1, -1, 6];
let targetSum = 10;

console.log(twoNumSum(array, targetSum));
