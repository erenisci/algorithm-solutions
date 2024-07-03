# 1281. Subtract the Product and Sum of Digits of an Integer
# https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/


class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        n = str(n)
        product = 1
        summary = 0
        for i in range(len(n)):
            product *= int(n[i])
            summary += int(n[i])
        return product - summary
