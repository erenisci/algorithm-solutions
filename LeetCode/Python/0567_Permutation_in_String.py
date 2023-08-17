# 567. Permutation in String
# https://leetcode.com/problems/permutation-in-string/


class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        s1Count = {char: 0 for char in "abcdefghijklmnopqrstuvwxyz"}
        for char in s1:
            s1Count[char] += 1
        s2Count = {char: 0 for char in "abcdefghijklmnopqrstuvwxyz"}
        l = 0
        for r in range(len(s2)):
            s2Count[s2[r]] += 1
            if r - l == len(s1):
                s2Count[s2[l]] -= 1
                l += 1
            if s1Count == s2Count:
                return True
        return False
