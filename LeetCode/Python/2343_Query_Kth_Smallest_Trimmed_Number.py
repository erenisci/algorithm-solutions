# 2343. Query Kth Smallest Trimmed Number
# https://leetcode.com/problems/query-kth-smallest-trimmed-number/


class Solution:
    def smallestTrimmedNumbers(self, nums: List[str], queries: List[List[int]]) -> List[int]:
        answer = []

        for k, trim in queries:
            trimmed = []
            for i, num in enumerate(nums):
                trimmed_part = num[-trim:]
                trimmed.append((trimmed_part, i))

            trimmed.sort(key=lambda x: (x[0], x[1]))

            answer.append(trimmed[k - 1][1])

        return answer