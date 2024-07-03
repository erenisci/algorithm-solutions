# 1137. N-th Tribonacci Number
# https://leetcode.com/problems/n-th-tribonacci-number/


class Solution:
    def tribonacci(self, n: int) -> int:
        if n == 0:
            return 0
        elif n == 1:
            return 1
        elif n == 2:
            return 1
        a, b, c, d = 0, 1, 1, 0
        while n - 2 > 0:
            d = a + b + c
            a = b
            b = c
            c = d
            n -= 1
        return d
