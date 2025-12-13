# 1672. Richest Customer Wealth
# https://leetcode.com/problems/richest-customer-wealth/


class Solution:
    def maximumWealth(self, accounts: list[list[int]]) -> int:
        maxSum = 0
        for person in accounts:
            maxSum = max(maxSum, sum(person))
        return maxSum
        