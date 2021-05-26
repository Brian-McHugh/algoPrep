'''
 - each element can only occur once in each subsequence

'''

def partition_list(input_list, k):
    if len(input_list) % k != 0:
        return 'No'
    
    n_subsequences = len(input_list) / k
    subsequences = [[0] * k] * k
    print(subsequences)

    input_list.sort()

    for i in range(len(input_list)):

        if i % (i - k) == 0:

        for i in range(k):
            print('i: ', i)

            for j in range(k):
                #print('j: ', j)
                subsequences[i][j] = num



        # if i % (k - 1) == 0:
        #     sub_list = []

        #     for j in range(k):
        #         sub_list.append(input_list[i - j])
            
        #     subsequences.append(sub_list)
    print(subsequences)
        
    for sub in subsequences:
        if len(sub) > len(set(sub)):
            print('flagged')
            return 'No'
    
    return 'Yes'

# Testing
input_list = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]
k = 4
print(partition_list(input_list, k))