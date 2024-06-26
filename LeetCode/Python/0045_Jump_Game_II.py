# 45. Jump Game II
# https://leetcode.com/problems/jump-game-ii/


class Solution:
    def jump(self, nums: list[int]) -> int:
        answer = 0
        current = next = 0
        while next < len(nums) - 1:
            distance = 0
            for i in range(current, next + 1):
                distance = max(distance, nums[i] + i)
            current = next + 1
            next = distance
            answer += 1
        return answer
