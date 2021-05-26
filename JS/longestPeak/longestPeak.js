// O(n) time | O(1) space
function longestPeak(array) {
	let longest = 0;
	  
	for (let i = 1; i < array.length - 1; i++) {
		let currentChain = 0;
		let currentNumLower = array[i];
		let currentNumHigher = array[i];
		let j = i;
		let k = i;
		let prevNum = array[j - 1];
		let nextNum = array[k + 1];
    
		if (prevNum < currentNumLower && currentNumHigher > nextNum) {
			currentChain++;
			// if num to the left is less, increase our count
			while (prevNum < currentNumLower) {
				currentChain++;
				j--;
				currentNumLower = prevNum;
				prevNum = array[j - 1];
			}
			// if num to the right is lower, increase count again
			while (currentNumHigher > nextNum) {
				currentChain++;
				k++;
				currentNumHigher = nextNum;
				nextNum = array[k + 1];
			}
		}
		
		if (currentChain > longest) longest = currentChain;
	}
	// if length of longest peak array < 3, return 0
	if (longest < 3) return 0;

	return longest;
}


// Testing
const chain = [5, 4, 3, 2, 1, 2, 10, 12, -3, 5, 6, 7, 10];
console.log(longestPeak(chain)); // 5

const chain1 = [1, 1, 1, 2, 3, 10, 12, -3, -3, 2, 3, 45, 800, 99, 98, 0, -1, -1, 2, 3, 4, 5, 0, -1, -1]
console.log(longestPeak(chain1)); // 9
