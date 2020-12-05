'''
Input: string of lowercase letters + positive int representing
      number of positions to shift letters
Output: new string after all letters have been shifted

ord('char')
>>> int

chr(int)
>>> 'char'
'''

# O(n) time | O(n) space
def letter_encryptor(str, key):
  new_str = []
  
  if key > 26:
    key = key % 26
    
  for char in str:
    ascii_total = ord(char) + key
    if ascii_total < 123:
      new_str.append(chr(ascii_total))
    else:
      new_ascii = ascii_total - 26
      new_str.append(chr(new_ascii))
      
  output = ''.join(new_str)
  return output


# Testing
ex_str = "mvklahvjcnbwqvtutmfafkwiuagjkzmzwgf"
print(letter_encryptor(ex_str, 7))
