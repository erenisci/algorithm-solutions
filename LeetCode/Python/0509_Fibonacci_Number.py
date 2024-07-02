# 509. Fibonacci Number
# https://leetcode.com/problems/fibonacci-number/description/


class Solution:
    def fib(self, n: int) -> int:
        if n == 0:
            return 0
        elif n == 1:
            return 1
        a, b, c = 0, 1, 0
        while n - 1 > 0:
            c = a + b
            a = b
            b = c
            n -= 1
        return c
