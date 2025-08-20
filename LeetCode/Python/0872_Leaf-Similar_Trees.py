# 872. Leaf-Similar Trees
# https://leetcode.com/problems/leaf-similar-trees/


from typing import Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
        return self._leaves(root1) == self._leaves(root2)

    def _leaves(self, node: TreeNode | None) -> list[int]:
        res = []

        def dfs(n: TreeNode | None) -> None:
            if not n:
                return
            if not n.left and not n.right:
                res.append(n.val)
                return
            dfs(n.left)
            dfs(n.right)
        dfs(node)
        return res
