# 144. Binary Tree Preorder Traversal
# https://leetcode.com/problems/binary-tree-preorder-traversal/


from typing import Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> list[int]:
        head = root
        stack = []
        res = []

        while head or stack:
            if head:
                res.append(head.val)
                if head.right:
                    stack.append(head.right)
                head = head.left
            else:
                head = stack.pop()

        return res    