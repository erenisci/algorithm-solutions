# 226. Invert Binary Tree
# https://leetcode.com/problems/invert-binary-tree/


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def invertTree(self, root: TreeNode) -> TreeNode:
        return (
            TreeNode(root.val, self.invertTree(root.right), self.invertTree(root.left))
            if root
            else None
        )
