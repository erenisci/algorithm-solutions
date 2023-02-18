# 8. String to Integer (atoi)
# https://leetcode.com/problems/string-to-integer-atoi/


class Solution:
    def myAtoi(self, s: str) -> int:
        s = s.strip()
        sign, res, i = 1, 0, 0
        if i < len(s) and (s[i] == "-" or s[i] == "+"):
            if s[i] == "-":
                sign = -1
            i += 1
        while i < len(s) and s[i].isdigit():
            res = res * 10 + int(s[i])
            i += 1
        res = max(min(res * sign, 2**31 - 1), -(2**31))
        return res
