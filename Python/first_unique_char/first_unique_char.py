'''
Given a string s consisting of small English letters, find and return
the first instance of a non-repeating character in it. If there is no
such character, return '_'.
'''

def first_unique_char(s):
  # save each char in string
  chars = {}
    
  for char in s:
    if char not in chars:
      chars[char] = 1
    else:
      chars[char] += 1
            
  for char in s:
    if chars[char] == 1:
      return char
            
  return '_'


#Ideal way:
def first_unique_letter(s):
  
  for char in s:
    if s.index(char) == s.rindex(char):
      return char
  
  return '_'


# Testing
example_s = "abacabad"
print(first_unique_char(example_s))  # 'c'

example_str = "abcdefghijklmnopqrstuvwxyziflskecznslkjfabe"
print(first_unique_letter(example_str))  # 'd'
