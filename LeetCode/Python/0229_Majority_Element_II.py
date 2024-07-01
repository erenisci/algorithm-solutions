# 229. Majority Element II
# https://leetcode.com/problems/majority-element-ii/


class Solution:
    def majorityElement(self, nums: list[int]) -> list[int]:
        s = set(nums)
        dicts = {}
        for num in s:
            dicts[num] = 0
        for num in nums:
            dicts[num] += 1

        key = list(dicts.keys())
        value = list(dicts.values())
        length = len(key)
        liste = []
        for i in range(length):
            if value[i] > len(nums) / 3:
                liste.append(key[i])

        return liste
