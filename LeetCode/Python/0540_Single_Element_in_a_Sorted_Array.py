# 540. Single Element in a Sorted Array
# https://leetcode.com/problems/single-element-in-a-sorted-array/


class Solution:
    def singleNonDuplicate(self, nums: list[int]) -> int:
        left, right = 0, len(nums) - 1
        while left < right:
            mid = (left + right) // 2
            if mid % 2 == 1:
                mid -= 1
            if nums[mid] != nums[mid + 1]:
                right = mid
            else:
                left = mid + 2
        return nums[left]
