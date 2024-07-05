# 1822. Sign of the Product of an Array
# https://leetcode.com/problems/sign-of-the-product-of-an-array/


class Solution:
    def arraySign(self, nums: list[int]) -> int:
        a = 1
        for num in nums:
            a *= num
        if a > 0:
            return 1
        elif a < 0:
            return -1
        else:
            return 0
