# 164. Maximum Gap
# https://leetcode.com/problems/maximum-gap/


class Solution:
    def maximumGap(self, nums: list[int]) -> int:
        m = 0
        if len(nums) < 2:
            return m
        nums.sort()
        for i in range(0, len(nums)-1):
            if nums[i+1]-nums[i] > m:
                m = nums[i+1]-nums[i]
        return m
