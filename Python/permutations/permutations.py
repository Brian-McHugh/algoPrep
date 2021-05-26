
# Upper Bound: O(n^2*n!) time | O(n*n!) space
# Roughly: O(n*n!) time | O(n*n!) space

def permutations(s):
    permutations = []
    str_list = list(s)
    print(str_list)
    permutations_helper(str_list, [], permutations)
    return permutations

def permutations_helper(str_list, current_permutation, permutations):
    #str_list = list(string)
    if not len(str_list) and len(current_permutation):
        permutations.append(str(current_permutation))
        print(permutations)
    else:
        for i in range(len(str_list)):
            new_str_list = str_list[:i] + str_list[i + 1:]
            new_permutation = current_permutation + [str_list[i]]
            permutations_helper(str_list, [], permutations)

# Testing
word = 'hefg'
print(permutations(word))
