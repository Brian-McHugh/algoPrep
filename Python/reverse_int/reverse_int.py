def reverse_int(x):
  '''
  Given a signed 32-bit integer x, return x with its digits reversed.
  If reversing x causes the value to go outside the signed 32-bit integer
  range [-231, 231 - 1], then return 0.
  Input: x = -123
  Output: x = -321
  '''
  if x < 0:
    # convert input to a string
    xs = str(x)
    # slice notation is count down from end by -1, exclusive of xs[0]
    remaining_num = xs[:0:-1]
    num_str = '-' + remaining_num
    num = int(num_str)
  else:
    # convert input to a string
    xs = str(x)
    # slice notation is count down from end to the start of xs
    num = int(xs[::-1])
    #xs_list = list(xs)
    #xs_list.reverse()
    #num_str = ''.join(xs_list)
    #num = int(num_str)
    
  if num < -2**31 or num > (2**31 -1):
    return 0
  
  return num

# Testing
x = -321
print(reverse_int(x))  # -123
