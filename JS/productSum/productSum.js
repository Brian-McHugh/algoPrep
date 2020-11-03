/* Tip: You can use the Array.isArray function to check whether an item
   is a list or an integer.

  I: special array: an array that consists of ints and/or other special arrays
  O: sum of all the elements in the special array
	C: depths of special arrays are multipliers of their sum

  Time: O(n)
	Space: O(d) because of recursive calls; d = depth of deepest array
*/

productSum = (array, multiplier = 1) => {
  let sum = 0;
	
	// loop thru array
	for (let elem of array) {
		// if element is an array, add recursive call to productSum and increment multiplier
		if (Array.isArray(elem)) {
			sum += productSum(elem, multiplier + 1)
		} else {
			// if element is not an array then add the element to our sum
			sum += elem;
		}
	}
	
	return sum * multiplier;
}
