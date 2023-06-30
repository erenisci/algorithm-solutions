# 35. Search Insert Position
# https://leetcode.com/problems/search-insert-position/description/?envType=study-plan&id=algorithm-i


class Solution:
    def searchInsert(self, nums: list[int], target: int) -> int:
        low, high = 0, len(nums)
        while low < high:
            mid = low + (high - low) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] > target:
                high = mid
            else:
                low = mid + 1
        return high
