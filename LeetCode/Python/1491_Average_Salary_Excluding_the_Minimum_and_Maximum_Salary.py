# 1491. Average Salary Excluding the Minimum and Maximum Salary
# https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/


class Solution:
    def average(self, salary: list[int]) -> float:
        salary = sorted(salary)[1 : len(salary) - 1]
        return sum(salary) / len(salary)
