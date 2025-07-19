# 1207. Unique Number of Occurrences
# https://leetcode.com/problems/unique-number-of-occurrences


class Solution:
    def uniqueOccurrences(self, arr: list[int]) -> bool:
        freq_map = {}
        for num in arr:
            freq_map[num] = freq_map.get(num, 0) + 1

        frequencies = list(freq_map.values())
        seen = set()

        for freq in frequencies:
            if freq in seen:
                return False
            seen.add(freq)

        return True
