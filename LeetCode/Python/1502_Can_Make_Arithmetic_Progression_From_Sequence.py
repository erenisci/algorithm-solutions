# 1502. Can Make Arithmetic Progression From Sequence
# https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/


class Solution:
    def canMakeArithmeticProgression(self, arr: list[int]) -> bool:
        arr.sort()
        a = arr[0] - arr[1]
        for i in range(len(arr) - 1):
            if arr[i] - arr[i + 1] != a:
                return False
        return True
