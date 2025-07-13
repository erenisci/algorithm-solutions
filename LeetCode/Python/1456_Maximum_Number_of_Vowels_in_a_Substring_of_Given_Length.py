# 1456. Maximum Number of Vowels in a Substring of Given Length
# https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/


class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        currVow = 0
        for i in s[:k]:
            if i in 'aeiou':
                currVow += 1

        maxVow = currVow
        for i, c in enumerate(s[k:]):
            if s[i] in 'aeiou':
                if c not in 'aeiou':
                    currVow -= 1
            else:
                if c in 'aeiou':
                    currVow += 1
                    if maxVow < currVow:
                        maxVow = currVow

        return maxVow
