# 119. Pascal's Triangle II
# https://leetcode.com/problems/pascals-triangle-ii/


class Solution:
    def getRow(self, rowIndex: int) -> list[int]:
        numRows = rowIndex + 1
        liste = []
        for i in range(numRows):
            elements = []
            for j in range(i + 1):
                if j == 0:
                    elements.append(1)
                elif j == i:
                    elements.append(1)
                else:
                    elements.append(liste[i - 1][j - 1] + liste[i - 1][j])
            liste.append(elements)
        return liste[rowIndex]
