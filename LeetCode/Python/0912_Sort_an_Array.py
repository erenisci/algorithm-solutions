# 912. Sort an Array
# https://leetcode.com/problems/sort-an-array/


class Solution:
    def sortArray(self, nums: list[int]) -> list[int]:
        min_el = min(nums)
        max_el = max(nums)

        count = [0] * (max_el - min_el + 1)

        for n in nums:
            count[n - min_el] += 1

        j = 0
        for i in range(len(count)):
            while count[i] > 0:
                nums[j] = i + min_el
                count[i] -= 1
                j += 1

        return nums
