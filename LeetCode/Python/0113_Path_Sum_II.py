# 113. Path Sum II
# https://leetcode.com/problems/path-sum-ii/


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def pathSum(self, root: TreeNode, targetSum: int) -> list[list[int]]:
        self.ans = []

        def dfs(node, path):
            if not node:
                return

            if not node.left and not node.right:
                if sum(path + [node.val]) == targetSum:
                    self.ans.append(path + [node.val])
                return

            dfs(node.left, path + [node.val])
            dfs(node.right, path + [node.val])

        dfs(root, [])
        return self.ans
