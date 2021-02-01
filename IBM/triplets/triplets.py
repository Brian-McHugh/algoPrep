'''
Given a list of distinct ints, along with a target threshold,
return the number of 3-int combinations that total up to the
threshold or a sum less than the threshold.
'''

# O(n^3) time | O(n) space
def triplets(nums, threshold):
    # if input list is not already sorted
    #nums.sort()

    # save our triplet solutions
    triplets = []
    
    for i in range(len(nums) - 2):
        first = nums[i]

        for j in range(i + 1, len(nums) - 1):
            middle = nums[j]

            for k in range(j + 1, len(nums)):
                last = nums[k]
                current_sum = first + middle + last

                if current_sum <= threshold:
                    triplets.append([first, middle, last])

    print(triplets)
    return len(triplets)

# Testing
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
t = 13
print(triplets(nums, t)) # >>> 31

nums_1 = [1, 2, 3, 4, 6]
t_1 = 8
print(triplets(nums_1, t_1)) # >>> 3
