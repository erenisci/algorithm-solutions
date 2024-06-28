# 70. Climbing Stairs
# https://leetcode.com/problems/climbing-stairs/


class Solution:
    def climbStairs(self, n: int) -> int:
        a, b, s = 0, 1, 0
        while n > 0:
            s = a + b
            a = b
            b = s
            n -= 1
        return s
