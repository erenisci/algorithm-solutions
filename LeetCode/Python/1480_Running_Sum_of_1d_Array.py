# 1480. Running Sum of 1d Array
# https://leetcode.com/problems/running-sum-of-1d-array/


class Solution:
    def runningSum(self, nums: list[int]) -> list[int]:
        acc = 0
        for i in range(len(nums)):
            acc = acc + nums[i]
            nums[i] = acc
        return nums
