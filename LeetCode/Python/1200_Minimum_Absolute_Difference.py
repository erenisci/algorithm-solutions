# 1200. Minimum Absolute Difference
# https://leetcode.com/problems/minimum-absolute-difference/


class Solution:
    def minimumAbsDifference(self, arr: list[int]) -> list[list[int]]:
        arr.sort()

        min_diff = float("inf")
        for i in range(1, len(arr)):
            min_diff = min(min_diff, arr[i] - arr[i - 1])

        result = []
        for i in range(1, len(arr)):
            if arr[i] - arr[i - 1] == min_diff:
                result.append([arr[i - 1], arr[i]])

        return result
