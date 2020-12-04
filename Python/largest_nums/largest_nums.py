"""
Input: array of three or more ints
Output: sorted array of three largest nums, ascending
Consideration: cannot use the native sort method
Consideration: should return duplicates if there are any

Example:
Input: [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
Output: [18, 141, 541]
"""

def largest_nums(array):
	largest = [float('-inf'), float('-inf'), float('-inf')]
	
	for num in array:
		if num > largest[2]:
			largest[0] = largest[1]
			largest[1] = largest[2]
			largest[2] = num
		elif num > largest[1]:
			largest[0] = largest[1]
			largest[1] = num
		elif num > largest[0]:
			largest[0] = num
			
	return largest


#Testing
ex_arr = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
print(largest_nums(ex_arr))