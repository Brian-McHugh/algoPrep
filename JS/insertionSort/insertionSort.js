/*
Input: array of ints
Output: sorted version of input array
*/

const insertionSort = (arr) => {
  // loop thru second num in array to the end
  for (let i = 1; i < arr.length; i++) {
    let j = i+1;
    
    // at for loop index from above, work backwards
		// and swap nums that are out of order
    while (j > 0 && arr[j] < arr[j-1]) {
      swap(j, arr)
      j--;
    } 
  }
  return arr;
}

const swap = (index, array) => {
  let temp = array[index-1];
  array[index-1] = array[index];
  array[index] = temp;

  return array;
}

// Testing 
const ex_arr = [-10, -10, -9, -7, -7, -6, -5, -2, 2, 2, 3, 3, 4, 5, 8, 8, 9, 10];
console.log(insertionSort(ex_arr));