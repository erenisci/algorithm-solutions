# 985. Sum of Even Numbers After Queries
# https://leetcode.com/problems/sum-of-even-numbers-after-queries/description/


class Solution:
    def sumEvenAfterQueries(
        self, nums: list[int], queries: list[list[int]]
    ) -> list[int]:
        summ = sum(i for i in nums if i % 2 == 0)
        liste = []
        for plus, index in queries:
            if nums[index] % 2 == 0:
                summ -= nums[index]
            nums[index] += plus

            if nums[index] % 2 == 0:
                summ += nums[index]
            liste.append(summ)

        return liste
