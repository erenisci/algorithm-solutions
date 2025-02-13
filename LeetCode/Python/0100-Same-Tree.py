# 100. Same Tree
# https://leetcode.com/problems/same-tree/

from typing import Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        def preorder(node, result):
            if not node:
                result.append(None)
                return

            result.append(node.val)
            preorder(node.left, result)
            preorder(node.right, result)

        result_p = []
        result_q = []

        preorder(p, result_p)
        preorder(q, result_q)

        return result_p == result_q
