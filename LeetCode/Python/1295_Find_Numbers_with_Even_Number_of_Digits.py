# 1295. Find Numbers with Even Number of Digits
# https://leetcode.com/problems/find-numbers-with-even-number-of-digits/


class Solution:
    def findNumbers(self, nums: list[int]) -> int:
        count = 0

        for num in nums:
            if len(str(num)) % 2 == 0:
                count += 1

        return count
