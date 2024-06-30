# 169. Majority Element
# https://leetcode.com/problems/majority-element/


class Solution:
    def majorityElement(self, nums: list[int]) -> int:
        s = set(nums)
        length = len(nums)
        dicts = {}
        for num in s:
            dicts[num] = 0
        for num in nums:
            dicts[num] += 1
        value = list(dicts.values())
        key = list(dicts.keys())
        return key[value.index(max(value))]
