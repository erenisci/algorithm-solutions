# 1. Two Sum
# https://leetcode.com/problems/two-sum/


class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        d = {key: value for value, key in enumerate(nums)}
        for i in range(len(nums)):
            value = target - nums[i]
            if value in d and d[value] != i:
                return [d[value], i]
