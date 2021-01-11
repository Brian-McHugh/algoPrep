# O(n) space | O(n) time
def run_length_encoding(string):
  encoding = ''
  char_count = 1
  
  # edge case: only one character in input string
  if len(string) < 2:
    return '1' + string
    
  # loop thru string
  for i in range(1, len(string)):
    current_char = string[i]
    prev_char = string[i - 1]
    
    # if characters have changed or have hit max of 9
    if current_char != prev_char or char_count == 9:
      encoding += str(char_count) + prev_char
      char_count = 0
      
    # add to character count
    char_count += 1
    
    # what to do at end of string
    if i == (len(string) - 1):
      encoding += str(char_count) + current_char
      
  return encoding

# Testing
test_str1 = "aA"
print(run_length_encoding(test_str1)) # '1a1A'

test_str2 = "AAAAAAAAAAAAABBCCCCDD"
print(run_length_encoding(test_str2)) # '9A4A2B4C2D'

test_str3 = "........______=========AAAA   AAABBBB   BBB"
print(run_length_encoding(test_str3)) # '8.6_9=4A3 3A4B3 3B'
