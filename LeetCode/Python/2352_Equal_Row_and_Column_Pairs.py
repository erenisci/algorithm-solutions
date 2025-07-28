# 2352. Equal Row and Column Pairs
# https://leetcode.com/problems/equal-row-and-column-pairs/


class Solution:
    def equalPairs(self, grid: list[list[int]]) -> int:
        row_count = {}
        for row in grid:
            t = tuple(row)
            row_count[t] = row_count.get(t, 0) + 1

        total = 0
        for col in zip(*grid):
            total += row_count.get(col, 0)

        return total
