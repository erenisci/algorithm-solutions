# 322. Coin Change
# https://leetcode.com/problems/coin-change/description/


class Solution:
    def coinChange(self, coins: list[int], amount: int) -> int:
        dp = [amount + 1] * (amount + 1)
        dp[0] = 0
        for i in coins:
            for j in range(i, amount + 1):
                dp[j] = min(dp[j], dp[j - i] + 1)
        return dp[amount] if dp[amount] <= amount else -1
