# 14. Longest Common Prefix
# https://leetcode.com/problems/longest-common-prefix/


class Solution:
    def longestCommonPrefix(self, strs: list[str]) -> str:
        ans = strs[0]
        for i in strs:
            while not i.startswith(ans):
                ans = ans[:-1]
        return ans
