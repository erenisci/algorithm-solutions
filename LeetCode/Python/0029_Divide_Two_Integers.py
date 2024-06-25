# 29. Divide Two Integers
# https://leetcode.com/problems/divide-two-integers/


class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
        if divisor != 0:
            if dividend > 0 and divisor < 0:
                return -(dividend // abs(divisor))

            elif dividend < 0 and divisor > 0:
                return -(abs(dividend) // divisor)

            elif dividend > 0 and divisor > 0:
                return dividend // divisor

            elif dividend < 0 and divisor < 0:
                if dividend // divisor >= pow(2, 31) - 1:
                    return dividend // divisor - 1
                return dividend // divisor

            elif dividend == 0:
                return dividend
