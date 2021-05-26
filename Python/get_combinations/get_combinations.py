'''
Input: all chars provided in caps
Ouput: length of solution string is at least 5, no max length

C: solution string must be valid English word
C: first letter in keypad must be in solution words
C: solution word only contains letters from the keypad
C: chars can be duplicated
'''

def get_combos(words, keypads):
    combos = []

    # create a set of each word



# Testing
words = ['apple', 'pleas', 'please']
keypads = ['aelwxyz', 'aelpxyz', 'aelpsxy', 'saelprt', 'xaebksy']
print(get_combos(words, keypads)) # >>> [0, 1, 3, 2, 0]
