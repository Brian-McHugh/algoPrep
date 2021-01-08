// O(n^2) time | O(1) space
function twoNumSum(array, targetSum) {
	
	// iterate through the input array
	for (let i = 0; i < array.length - 1; i++) {
   let num1 = array[i];

		for (let j = i+1; j < array.length; j++) {
			let num2 = array[j];
			if (num1 + num2 === targetSum) {
				return [num1, num2];
			}
		}
	}
	
	// return empty array if no pair is found
	return [];
}

// Testing
let array = [3, 5, -4, 19, 1, -1, 6, 8, 9];
let targetSum = 17;

console.log(twoNumSum(array, targetSum));