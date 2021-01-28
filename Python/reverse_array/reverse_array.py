def reverse_array(arr):
  """
  Do not return anything, modify arr in-place instead.
  YOU CANNOT USE: arr.reverse()
  """
  start = 0
  end = len(arr) - 1
  
  while start < end:
    temp_start = arr[start]
    
    arr[start] = arr[end]
    arr[end] = temp_start
    
    start += 1
    end -= 1
    
# Testing
ex_arr = ["H","e","l","l","o"," ", "W", "o", "r", "l", "d"]
reverse_array(ex_arr)
print(ex_arr)
