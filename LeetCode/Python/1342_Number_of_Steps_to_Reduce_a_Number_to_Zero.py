# 1342. Number of Steps to Reduce a Number to Zero
# https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/


class Solution:
    def numberOfSteps(self, num: int) -> int:
        steps = 0
        while 0 < num:
            if not num % 2:
                num /= 2
            else:
                num -= 1
            steps += 1
            print(num)
        return steps
