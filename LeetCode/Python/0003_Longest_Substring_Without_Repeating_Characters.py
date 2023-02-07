# 3. Longest Substring Without Repeating Characters
# https://leetcode.com/problems/longest-substring-without-repeating-characters/


class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        mystr = ""
        res = 0
        for ch in s:
            mystr = mystr[mystr.find(ch) + 1 :] + ch
            res = max(res, len(mystr))
        return res
