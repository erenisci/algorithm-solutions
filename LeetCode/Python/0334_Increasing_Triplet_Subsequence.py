# 334. Increasing Triplet Subsequence
# https://leetcode.com/problems/increasing-triplet-subsequence/


class Solution:
    def increasingTriplet(self, nums):
        i = j = float("inf")
        for k in nums:
            if k <= i:
                i = k
            elif k <= j:
                j = k
            else:
                return True
