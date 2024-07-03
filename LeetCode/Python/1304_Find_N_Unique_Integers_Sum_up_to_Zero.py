# 1304. Find N Unique Integers Sum up to Zero
# https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/


class Solution:
    def sumZero(self, n: int) -> list[int]:
        liste = []
        if n % 2 != 0:
            for i in range(0 - n // 2, 1 + n // 2):
                liste.append(i)
            return liste
        else:
            if n == 0:
                return [0]
            for i in range(1 - n, 1 + n, 2):
                liste.append(i)
            return liste
