# 485. Max Consecutive Ones
# https://leetcode.com/problems/max-consecutive-ones/


class Solution:
    def findMaxConsecutiveOnes(self, nums: list[int]) -> int:
        max_cons, temp = 0, 0

        for num in nums:
            if num == 1:
                temp += 1
            else:
                if max_cons < temp:
                    max_cons = temp
                temp = 0

        if max_cons < temp:
            max_cons = temp

        return max_cons
