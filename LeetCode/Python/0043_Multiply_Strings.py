# 43. Multiply Strings
# https://leetcode.com/problems/multiply-strings/


class Solution:
    def multiply(self, num1: str, num2: str) -> str:
        num1 = int(num1)
        num2 = int(num2)
        result = num1 * num2
        return str(result)
