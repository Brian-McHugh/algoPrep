'''
Given a list of distinct ints, along with a target threshold, return
the number of 3-int combinations that total up to the threshold.
'''

# O(n^2) time | O(n) space  (the sort would be O(n log n))
def triplets(nums, threshold):
    # if input list not already sorted
    nums.sort()

    # save our triplet solutions
    triplets = []
    
    for i in range(len(nums) - 2):
        start = i
        slider = start + 1
        end = len(nums) - 1
        
        while slider < end:
            current_sum = nums[start] + nums[slider] + nums[end]

            if current_sum == threshold:
                triplets.append([nums[start], nums[slider], nums[end]])
                slider += 1
                end -= 1
            elif current_sum < threshold:
                slider += 1
            elif current_sum > threshold:
                end -= 1

    return triplets

# Testing
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
t = 13
print(triplets(nums, t))

nums_1 = [1, 2, 3, 4, 5]
t_1 = 8
print(triplets(nums_1, t_1))

nums_2 = [12, 3, 1, 2, -6, 5, -8, 6]
t_2 = 0
print(triplets(nums_2, t_2))
