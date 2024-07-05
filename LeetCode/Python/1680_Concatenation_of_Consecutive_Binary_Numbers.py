# 1680. Concatenation of Consecutive Binary Numbers
# https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/


class Solution:
    def concatenatedBinary(self, n: int) -> int:
        s = ""
        for i in range(1, n + 1):
            b = bin(i)[2:]
            s += b
        return int(s, 2) % (10**9 + 7)
