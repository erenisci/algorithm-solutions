# 1470. Shuffle the Array
# https://leetcode.com/problems/shuffle-the-array/


class Solution:
    def shuffle(self, nums: list[int], n: int) -> list[int]:
        l = []
        for i in range(n):
            l.append(nums[i])
            l.append(nums[i + n])
        return l
