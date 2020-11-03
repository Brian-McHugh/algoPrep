// O(n) time | O(1) time
function isPalindrome(string) {
  let leftIndex = 0;
	let rightIndex = string.length - 1;
	
	while (leftIndex < rightIndex) {
		if (string[leftIndex] !== string[rightIndex]) {
			return false;
		} else {
			leftIndex++;
			rightIndex--;
		}
	}
	return true;
}



/* Alternative using JS native array methods

const isPalindrome = (string) => {
	return string === string.split('').reverse().join('');
}

*/