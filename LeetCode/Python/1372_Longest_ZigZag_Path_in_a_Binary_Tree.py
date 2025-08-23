# 1372. Longest ZigZag Path in a Binary Tree
# https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/


from typing import Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def longestZigZag(self, root: Optional[TreeNode]) -> int:
        self.max_len = 0

        def dfs(node: TreeNode | None, direction: str, length: int):
            if not node:
                return

            self.max_len = max(self.max_len, length)

            if direction == "left":
                dfs(node.left, "right", length + 1)
                dfs(node.right, "left", 1)
            else:
                dfs(node.right, "left", length + 1)
                dfs(node.left, "right", 1)

        dfs(root.left, "right", 1)
        dfs(root.right, "left", 1)

        return self.max_len
