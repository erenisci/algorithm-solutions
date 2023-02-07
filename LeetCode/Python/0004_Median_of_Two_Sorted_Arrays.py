# 4. Median of Two Sorted Arrays
# https://leetcode.com/problems/median-of-two-sorted-arrays/


class Solution:
    def findMedianSortedArrays(self, nums1: list[int], nums2: list[int]) -> float:
        nums3 = sorted(nums1 + nums2)
        if len(nums3) % 2 != 0:
            return nums3[len(nums3) // 2]
        else:
            return (nums3[len(nums3) // 2 - 1] + nums3[len(nums3) // 2]) / 2.0
