# 1523. Count Odd Numbers in an Interval Range
# https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/


class Solution:
    def countOdds(self, low: int, high: int) -> int:
        if low % 2 == 0:
            return (high - low + 1) // 2
        return (high - low + 2) // 2
