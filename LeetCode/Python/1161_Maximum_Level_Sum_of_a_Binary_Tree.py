# 1161. Maximum Level Sum of a Binary Tree
# https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/


from collections import deque
from typing import Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def maxLevelSum(self, root: Optional[TreeNode]) -> int:
        q = deque([root])
        level = 1

        max_sum = float('-inf')
        answer_level = 1

        while q:
            level_sum = 0
            for _ in range(len(q)):
                node = q.popleft()
                level_sum += node.val

                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)

            if level_sum > max_sum:
                max_sum = level_sum
                answer_level = level

            level += 1

        return answer_level
