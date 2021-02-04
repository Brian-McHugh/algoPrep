'''
Take a string of numbers and return a square matrix
of those numbers in the form of a list matrix of ints
'''

# O(n) time | O(1) space
def create_matrix(nums_str, cols, rows):
    matrix = []

    for i in range(len(nums_str)):
        # when i equals the length of a row
        if i % cols == 0:
            # create substrings the length of the rows in matrix
            sub = nums_str[i:i+cols]
            # create a new list for each row
            row = []

            for j in sub:
                row.append(int(j))
                
            print(sub)
            matrix.append(row)
            
    return matrix


# Testing
cols = 3  # 
rows = 3
nums_str = '123894765'
#nums_list = [1, 2, 3, 8, 9, 4, 7, 6, 5]
print(create_matrix(nums_str, cols, rows))
