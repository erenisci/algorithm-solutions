# 268. Missing Number
# https://leetcode.com/problems/missing-number/


class Solution:
    def missingNumber(self, nums: list[int]) -> int:
        return (len(nums) * (len(nums) + 1) // 2) - sum(nums)
