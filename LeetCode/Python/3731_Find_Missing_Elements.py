# 3731. Find Missing Elements
# https://leetcode.com/problems/find-missing-elements/


class Solution:
    def findMissingElements(self, nums: list[int]) -> list[int]:
        missing_elements = []

        for i in range(min(nums) + 1, max(nums)):
            if i not in nums:
                missing_elements.append(i)

        return missing_elements
