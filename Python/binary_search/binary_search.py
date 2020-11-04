"""
You're going to write a binary search function.
You should use an iterative approach - meaning using loops.
Your function should take two inputs:
a Python list to search through, and the value
you're searching for.
Assume the list only has distinct elements,
meaning there are no repeated values, and 
elements are in a strictly increasing order.
Return the index of value, or -1 if the value
doesn't exist in the list.

I: sorted array of integers; target int to find
O: index of target int if it exists; return -1 if it does not

Example:
array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
target = 33
>>> 3
"""

def binary_search(array, target):
  
    def search(array, target, low, high):
        if low > high:
            return -1
    
        # create a midpoint that rounds down
        mid = low + high // 2
    
        if array[mid] == target:
            return mid
        elif array[mid] > target:
            high = mid - 1
            return search(array, target, low, high)
        else:
            low = mid + 1
            return search(array, target, low, high)
    
    return search(array, target, 0, len(array) - 1)

# Testing
test_list = [1,3,9,11,15,19,29]
test_val1 = 25
test_val2 = 15
print(binary_search(test_list, test_val1))
print(binary_search(test_list, test_val2))


""" Using a while loop
def binary_search(array, target):
    
	low = 0
	high = len(array) - 1
		
    
		
	while low <= high:
		# create a midpoint
    	mid = int((low + high) / 2)
		
		if array[mid] == target:
			return mid
		elif array[mid] > target:
			high = mid - 1
		else:
			low = mid + 1
	
	return -1
"""
