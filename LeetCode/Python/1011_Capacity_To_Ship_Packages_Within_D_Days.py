# 1011. Capacity To Ship Packages Within D Days
# https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/


class Solution:
    def shipWithinDays(self, weights: list[int], days: int) -> int:
        left = 0
        right = 0
        for i in weights:
            left = max(left, i)
            right += i
        ans = right
        while left <= right:
            mid = (left + right) // 2
            if self.check(weights, days, mid):
                ans = mid
                right = mid - 1
            else:
                left = mid + 1
        return ans

    def check(self, weights: list[int], days: int, capacity: int) -> bool:
        required_days = 1
        curr_weight = 0
        for i in weights:
            if curr_weight + i > capacity:
                required_days += 1
                curr_weight = 0
            curr_weight += i
        if required_days > days:
            return False
        return True
