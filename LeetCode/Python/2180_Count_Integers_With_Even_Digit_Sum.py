# 2180. Count Integers With Even Digit Sum
# https://leetcode.com/problems/count-integers-with-even-digit-sum/


class Solution:
    def countEven(self, num: int) -> int:
        return num // 2 if sum([int(k) for k in str(num)]) % 2 == 0 else (num - 1) // 2
