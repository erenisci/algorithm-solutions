# 1790. Check if One String Swap Can Make Strings Equal
# https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/


class Solution:
    def areAlmostEqual(self, s1: str, s2: str) -> bool:
        char = 0
        for i, j in zip(s1, s2):
            if i != j:
                char += 1
        return s1 == s2 or sorted(s1) == sorted(s2) and char == 2
