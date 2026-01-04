# 1051. Height Checker
# https://leetcode.com/problems/height-checker/


class Solution:
    def heightChecker(self, heights: list[int]) -> int:
        count = [0] * 101
        for h in heights:
            count[h] += 1

        mismatch_count = 0
        current_height = 1

        for h in heights:
            while count[current_height] == 0:
                current_height += 1

            if h != current_height:
                mismatch_count += 1

            count[current_height] -= 1

        return mismatch_count
