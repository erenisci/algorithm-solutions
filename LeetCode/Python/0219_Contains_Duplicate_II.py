# 219. Contains Duplicate II
# https://leetcode.com/problems/contains-duplicate-ii/


class Solution:
    def containsNearbyDuplicate(self, nums: list[int], k: int) -> bool:
        dic = {}
        for idx, num in enumerate(nums):
            if (num in dic) and (idx - dic[num] <= k):
                return True
            dic[num] = idx
        return False
