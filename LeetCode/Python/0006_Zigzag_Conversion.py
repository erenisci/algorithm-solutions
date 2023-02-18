# 6. Zigzag Conversion
# https://leetcode.com/problems/zigzag-conversion/


class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1:
            return s
        elif numRows == 2:
            return s[0::2] + s[1::2]
        ans = ""
        mod = (numRows - 2) * 2 + 2
        for r in range(numRows):
            for i in range(r, len(s), mod):
                ans += s[i]
                if r > 0 and r < numRows - 1 and i + mod - (2 * r) < len(s):
                    ans += s[i + mod - (2 * r)]
        return ans
