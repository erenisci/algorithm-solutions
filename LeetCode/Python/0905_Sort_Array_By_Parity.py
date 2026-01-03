# 905. Sort Array By Parity
# https://leetcode.com/problems/sort-array-by-parity/


class Solution:
    def sortArrayByParity(self, nums: list[int]) -> list[int]:
        left = 0
        right = len(nums) - 1

        while left < right:
            if nums[left] % 2 == 0:
                left += 1
            else:
                nums[left], nums[right] = nums[right], nums[left]
                right -= 1

        return nums
