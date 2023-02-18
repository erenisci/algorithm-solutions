# 7. Reverse Integer
# https://leetcode.com/problems/reverse-integer/


from math import pow


class Solution:
    def reverse(self, x: int) -> int:
        if x < 0:
            x = int(str(x * -1)[::-1]) * -1
            if x < pow(-2, 31):
                return 0
        else:
            x = int(str(x)[::-1])
            if x > pow(2, 31) - 1:
                return 0
        return x
