"""
Input: array of ints
Output: sorted version of input array
"""

# O(n**2) | O(1) space
def insertion_sort(array):
    # index from the second num in array to the end
	for i in range(1, len(array)):
		j = i
		# at for loop index from above, work backwards and swap nums
		# that are out of order
		while j > 0 and array[j] < array[j-1]:
			swap(j, array)
			j -= 1
	
	return array
		
# helper function that simply switches adjacent nums
def swap(index, arr):
	arr[index], arr[index-1] = arr[index-1], arr[index]
		

# Testing
ex_arr = [-10, -10, -9, -7, -7, -6, -5, -2, 2, 2, 3, 3, 4, 5, 8, 8, 9, 10]
print(insertion_sort(ex_arr))
