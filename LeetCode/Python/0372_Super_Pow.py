# 372. Super Pow
# https://leetcode.com/problems/super-pow/


class Solution:
    def superPow(self, a: int, b: list[int]) -> int:
        return pow(a, int("".join(map(str, b))), 1337)
