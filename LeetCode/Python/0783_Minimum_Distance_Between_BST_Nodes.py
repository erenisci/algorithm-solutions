# 783. Minimum Distance Between BST Nodes
# https://leetcode.com/problems/minimum-distance-between-bst-nodes/


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def minDiffInBST(self, root: TreeNode) -> int:
        self.ans = float("inf")
        self.pred = None
        self.inorder(root)
        return self.ans

    def inorder(self, root: TreeNode) -> None:
        if root is None:
            return

        self.inorder(root.left)
        if self.pred is not None:
            self.ans = min(self.ans, root.val - self.pred)
        self.pred = root.val
        self.inorder(root.right)
