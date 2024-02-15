# 989. Add to Array-Form of Integer
# https://leetcode.com/problems/add-to-array-form-of-integer/description/


class Solution:
    def addToArrayForm(self, num: list[int], k: int) -> list[int]:
        num[-1] += k
        i = len(num) - 1
        while i > 0 and num[i] > 9:
            num[i - 1] += num[i] // 10
            num[i] = num[i] % 10
            i -= 1
        while num[0] > 9:
            num.insert(0, num[0] // 10)
            num[1] = num[1] % 10
        return num
