"""
Input: array of ints
Output: sorted version of array (use same array)
Consideration: this algo must iterate twice
"""
# O(n^2) time | O(1) space
def selection_sort(array):
  
  for i in range(len(array) - 1):
    current_num = array[i]
    lowest_num = array[i]
    lowest_num_idx = i
    
    for j in range(i + 1, len(array)):
      next_num = array[j]
      if array[j] < lowest_num:
        lowest_num = array[j]
        lowest_num_idx = j
        
    array[lowest_num_idx] = array[i]
    array[i] = lowest_num
    
  return array
  
# Testing
ex_list1 = [8, 5, 2, 9, 5, 6, 3]
print(selection_sort(ex_list1))
# >>> [2, 3, 5, 5, 6, 8, 9]

ex_list2 = [-7, 2, 3, 8, -10, 4, -6, -10, -2, -7, 10, 5, 2, 9, -9, -5, 3, 8]
print(selection_sort(ex_list2))
# >>> [-10, -10, -9, -7, -7, -6, -5, -2, 2, 2, 3, 3, 4, 5, 8, 8, 9, 10]
