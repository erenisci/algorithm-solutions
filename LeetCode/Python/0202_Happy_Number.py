# 202. Happy Number
# https://leetcode.com/problems/happy-number/


class Solution:
    def isHappy(self, n: int) -> bool:
        i = 6
        while i > 0:
            s = 0
            for r in str(n):
                p = int(r) ** 2
                s += p
            if s == 1:
                return True
            else:
                n = s
            i -= 1
        return False
