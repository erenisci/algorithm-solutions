# 66. Plus One
# https://leetcode.com/problems/plus-one/


class Solution:
    def plusOne(self, digits: list[int]) -> list[int]:
        new_int = str(int("".join(map(lambda x: str(x), digits))) + 1)
        new_list = [int(i) for i in new_int]
        return new_list
