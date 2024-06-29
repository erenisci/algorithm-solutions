# 121. Best Time to Buy and Sell Stock
# https://leetcode.com/problems/best-time-to-buy-and-sell-stock/


class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        ans, min_idx = 0, prices[0]
        for i in range(1, len(prices)):
            if prices[i] < min_idx:
                min_idx = prices[i]
            else:
                ans = max(ans, prices[i] - min_idx)
        return ans
