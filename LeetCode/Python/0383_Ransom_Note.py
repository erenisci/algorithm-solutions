# 383. Ransom Note
# https://leetcode.com/problems/ransom-note/


class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        counts = {}

        for ch in magazine:
            counts[ch] = counts.get(ch, 0) + 1

        print(counts)
        for ch in ransomNote:
            if ch not in counts or counts[ch] == 0:
                return False
            counts[ch] -= 1

        return True