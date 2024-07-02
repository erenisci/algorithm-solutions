# 438. Find All Anagrams in a String
# https://leetcode.com/problems/find-all-anagrams-in-a-string/


class Solution:
    def findAnagrams(self, s: str, p: str) -> list[int]:
        if len(p) > len(s):
            return []

        match, hm = {}, {}
        n = len(p)
        for c in set(s + p):
            hm[c] = 0
            match[c] = 0
        for c in p:
            match[c] += 1
        for c in s[:n]:
            hm[c] += 1
        if match == hm:
            ans = [0]
        else:
            ans = []
        indx = 0

        for c in s[n:]:
            hm[s[indx]] -= 1
            hm[c] += 1
            indx += 1
            if hm == match:
                ans.append(indx)

        return ans
