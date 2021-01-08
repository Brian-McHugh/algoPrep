# O(n^2) time | O(1) space
def two_num_sum(array, targetSum):
  for i in range(len(array) - 1):
    first_num = array[i]
    
    for j in range(i + 1, len(array)):
      second_num = array[j]
      if targetSum - first_num == second_num:
        return [first_num, second_num]
			
  # return an empty array if no pair is found
  return []

# Testing
ex = [3, 5, -4, 8, 11, 1, -1, 6]
print(two_num_sum(ex, 10))
