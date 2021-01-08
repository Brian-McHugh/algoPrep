# O(n) time | O(1) space
def two_num_sum(array, targetSum):
  # sort the input array to search faster & save space
  array.sort()
  left_idx = 0
  right_idx = len(array) - 1
  
  while left_idx < right_idx:
    current_total = array[left_idx] + array[right_idx]
    
    if current_total == targetSum:
      return [array[left_idx], array[right_idx]]
    elif current_total < targetSum:
      left_idx += 1
    else:
      right_idx -= 1
  
  # return an empty array if no pair is found
  return []


# Testing
ex = [3, 5, -4, 8, 11, 1, -1, 6]
print(two_num_sum(ex, 10))
