# 168. Excel Sheet Column Title
# https://leetcode.com/problems/excel-sheet-column-title/


class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        result = []

        while columnNumber > 0:
            columnNumber -= 1
            result.append(chr(columnNumber % 26 + ord("A")))
            columnNumber //= 26

        return "".join(reversed(result))
