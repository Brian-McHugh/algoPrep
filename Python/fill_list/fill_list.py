# O(n + m) time | O(1) space
def fill_list(nums1, m, nums2, n):
    """
    Do not return anything, modify nums1 in-place instead.
    Fill in existing zeroes in nums1 to form a sorted list.
    """
    # pointers to keep track of nums being compared
    nums1_p = m - 1
    nums2_p = n - 1
    
    # iterate backwards thru nums1 and assign the higher int at each idx
    for idx in range(n + m - 1, -1, -1):
        # break if we run out of ints in nums2
        if nums2_p < 0:
            break
        if nums1_p >= 0 and nums1[nums1_p] > nums2[nums2_p]:
            nums1[idx] = nums1[nums1_p]
            nums1_p -= 1
        else:
            nums1[idx] = nums2[nums2_p]
            nums2_p -= 1


# Testing
nums1 = [1,2,3,0,0,0]
m = 3
nums2 = [2,5,6]
n = 3
fill_list(nums1, m, nums2, n)
print(nums1)  # >>> [1,2,2,3,5,6]
