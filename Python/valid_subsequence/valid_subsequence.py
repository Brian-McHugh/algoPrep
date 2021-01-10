'''
Input: two non-empty arrays of ints
Output: t/f on whether the second array is a subsequence of the first
'''
# O(n) time | O(1) space
def valid_subsequence(array, sequence):
  if len(array) < len(sequence):
    return False
    
  seq_idx = 0
  
  for num in array:
    if seq_idx == len(sequence):
      break
    if num == sequence[seq_idx]:
      seq_idx += 1
      
  # if seq_idx matches the length of sequence then all have been matched
  return seq_idx == len(sequence)

# Testing
arr = [1, 1, 6, 1]
seq = [1, 1, 1, 6]
print(valid_subsequence(arr, seq)) # False

'''
# Alternate way:
# O(n) time | O(1) space
def valid_subsequence(array, sequence):
  if len(array) < len(sequence):
	  return False
	
	arr_idx = 0
	seq_idx = 0
	
  while arr_idx < len(array) and seq_idx < len(sequence):   
		if array[arr_idx] == sequence[seq_idx]:
			seq_idx += 1
		arr_idx += 1
  # if seq_idx matches the length of sequence then all have been matched
	return seq_idx == len(sequence)
'''