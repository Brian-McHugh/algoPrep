# O(n) time | O(n) space
def two_num_sum(array, targetSum):
  # store the matching pair needed to reach targetSum
  deficits = {}
  
  for num in array:
    deficit = targetSum - num
    
    if deficit in deficits:
      return [deficit, num]
    else:
      deficits[num] = num
			
  # return an empty array if no pair is found
  return []


# Testing
ex = [3, 5, -4, 8, 11, 1, -1, 6]
print(two_num_sum(ex, 10))
