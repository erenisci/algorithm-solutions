# 414. Third Maximum Number
# https://leetcode.com/problems/third-maximum-number/


class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        first = second = third = None

        for n in nums:
            if n == first or n == second or n == third:
                continue

            if first is None or n > first:
                third = second
                second = first
                first = n
            elif second is None or n > second:
                third = second
                second = n
            elif third is None or n > third:
                third = n

        return third if third is not None else first