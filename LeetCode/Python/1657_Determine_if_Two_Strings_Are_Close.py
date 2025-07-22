# 1657. Determine if Two Strings Are Close
# https://leetcode.com/problems/determine-if-two-strings-are-close/


class Solution:
    def closeStrings(self, word1: str, word2: str) -> bool:
        s1, s2 = set(word1), set(word2)
        if s1 != s2:
            return False
        return sorted(word1.count(char) for char in s1) == sorted(word2.count(char) for char in s2)
