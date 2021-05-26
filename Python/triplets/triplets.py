'''
Given a list of distinct ints, along with a target threshold,
return the number of 3-int combinations that total up to the
threshold or a sum less than the threshold.
'''

# O(n^2) time | O(n) space
def triplets(nums, target):
    # if input list is not already sorted
    nums.sort()
    # number of 3-num combos that work 
    combos = 0
    
    # since we need 3 nums we'll exclude last 2 nums for loop
    for first_idx in range(len(nums) - 2):
      mid_idx = first_idx + 1
      last_idx = len(nums) - 1
      while mid_idx < last_idx:
        total = nums[first_idx] + nums[mid_idx] + nums[last_idx]
        if total <= target:
          combos += last_idx - mid_idx
          mid_idx += 1
        else:
          last_idx -= 1
    
    return combos


# O(n^3) time | O(n) space
#def triplets(nums, target):
    # save our triplet solutions
    # triplets = []

    # for i in range(len(nums) - 2):
    #     first = nums[i]

    #     for j in range(i + 1, len(nums) - 1):
    #         middle = nums[j]

    #         for k in range(j + 1, len(nums)):
    #             last = nums[k]
    #             current_sum = first + middle + last

    #             if current_sum <= target:
    #                 triplets.append([first, middle, last])

    # print(triplets)
    # return len(triplets)

# Testing
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
t = 13
print(triplets(nums, t)) # >>> 31

nums_1 = [1, 2, 3, 4, 6]
t_1 = 8
print(triplets(nums_1, t_1)) # >>> 3

nums_2 = [-2, 0, 1, 3]
t_2 = 3
print(triplets(nums_2, t_2)) # >>> 3