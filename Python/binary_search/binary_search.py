"""
I: sorted array of integers; target int to find
O: index of target int if it exists; return -1 if it does not

Example:
array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
target = 33
>>> 3
"""
def binarySearch(array, target):
  
    def search(array, target, low, high):
        if low > high:
            return -1
    
        # create a midpoint
        mid = int((low + high) / 2)
    
        if array[mid] == target:
            return mid
        elif array[mid] > target:
            high = mid - 1
            return search(array, target, low, high)
        else:
            low = mid + 1
            return search(array, target, low, high)
    
    return search(array, target, 0, len(array) - 1)


""" Using a while loop
def binarySearch(array, target):
    
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
