// O(n^2) time | O(1) space
function twoNumSum(array, targetSum) {
  // create an output array
	let sumPair = [];
	
	// iterate through the input array
	for (let i = 0; i < array.length - 1; i++) {
   let num1 = array[i];
		for (let j = i+1; j < array.length; j++) {
			let num2 = array[j];
			if (num1 + num2 === targetSum) {
				sumPair.push(num1);
				sumPair.push(num2);
				break;
			}
		}
	}
	
	// return output array
	return sumPair;
}


let array = [3, 5, -4, 8, 11, 1, -1, 6];
let targetSum = 10;

console.log(twoNumSum(array, targetSum));