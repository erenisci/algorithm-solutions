# 2215. Find the Difference of Two Arrays
# https://leetcode.com/problems/find-the-difference-of-two-arrays/


class Solution:
    def findDifference(self, nums1: list[int], nums2: list[int]) -> list[list[int]]:
        set1 = set(nums1)
        set2 = set(nums2)

        diff1 = list(set1 - set2)
        diff2 = list(set2 - set1)

        return [diff1, diff2]
