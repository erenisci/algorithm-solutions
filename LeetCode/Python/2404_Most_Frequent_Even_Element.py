# 2404. Most Frequent Even Element
# https://leetcode.com/problems/most-frequent-even-element/


class Solution:
    def mostFrequentEven(self, nums: list[int]) -> int:
        dicts = {}
        s = set(nums)
        length = len(nums)

        for num in s:
            if num % 2 == 0:
                dicts[num] = 0

        for num in nums:
            if num % 2 == 0:
                dicts[num] += 1

        if dicts == {}:
            return -1

        key = sorted(list(dicts.keys()))
        value = sorted(list(dicts.values()))
        for i in range(len(key)):
            if dicts[key[i]] == value[-1]:
                return key[i]
