# 976. Largest Perimeter Triangle
# https://leetcode.com/problems/largest-perimeter-triangle/


class Solution:
    def largestPerimeter(self, nums: list[int]) -> int:
        nums = sorted(nums)[::-1]
        for i in range(len(nums) - 2):
            if nums[i] < nums[i + 1] + nums[i + 2]:
                return nums[i] + nums[i + 1] + nums[i + 2]
        return 0
