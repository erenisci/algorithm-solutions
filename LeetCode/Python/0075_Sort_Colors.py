# 75. Sort Colors
# https://leetcode.com/problems/sort-colors/


class Solution:
    def sortColors(self, nums: list[int]) -> None:
        i = 0
        j = 0
        temp = 0
        size = len(nums)
        for i in range(0, size):
            for j in range(0, size - 1 - i):
                if nums[j] > nums[j + 1]:
                    temp = nums[j + 1]
                    nums[j + 1] = nums[j]
                    nums[j] = temp
