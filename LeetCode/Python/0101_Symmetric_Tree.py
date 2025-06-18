# 101. Symmetric Tree
# https://leetcode.com/problems/symmetric-tree/

from typing import Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        def check_symmetric(l, r):
            if not l and not r:
                return True
            if not l or not r:
                return False
            return l.val == r.val and check_symmetric(l.left, r.right) and check_symmetric(l.right, r.left)

        return check_symmetric(root.left, root.right)
