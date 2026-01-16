# 347. Top K Frequent Elements
# https://leetcode.com/problems/top-k-frequent-elements/


from collections import Counter


class Solution:
    def topKFrequent(self, nums: list[int], k: int) -> list[int]:
        freq = Counter(nums)

        buckets = [[] for _ in range(len(nums) + 1)]
        for num, count in freq.items():
            buckets[count].append(num)

        result = []
        for count in range(len(buckets) - 1, 0, -1):
            for num in buckets[count]:
                result.append(num)
                if len(result) == k:
                    return result
