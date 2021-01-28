def reverse_capitalize(s):
  """
  Do not return anything, modify s in-place instead.
  YOU CANNOT USE: s.reverse()
  SOLUTION IF YOU COULD USE s.reverse()
  s_arr = list(s)
  s_arr.reverse()
  return ''.join(s_arr).title()
  """
  # no need to convert chars to lowercase because title() will fix this
  # s = s.lower()

  # create a list/array of the chars
  s_list = list(s)
  
  # create pointers to swap chars
  start = 0
  end = len(s_list) - 1
  
  # swap chars, moving from the ends, inward
  while start < end:
    # temp variable while we switch out chars
    temp_start = s_list[start]
    
    s_list[start] = s_list[end]
    s_list[end] = temp_start
    
    start += 1
    end -= 1
  
  # convert array back to a string
  reversed_s = ''.join(s_list)
  # capitalize each word in the string
  capitalized_s = reversed_s.title()

  return capitalized_s


# Testing
ex_str = 'Hello World'
print(reverse_capitalize(ex_str))
# OUTPUT >>> 'Dlrow Olleh'

ex_s = 'Hello'
print(reverse_capitalize(ex_s))
# OUTPUT >>> 'Olleh'