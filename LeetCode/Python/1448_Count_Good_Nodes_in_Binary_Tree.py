# 1448. Count Good Nodes in Binary Tree
# https://leetcode.com/problems/count-good-nodes-in-binary-tree/


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        def dfs(node, curr_max):
            if not node:
                return 0

            good = 1 if node.val >= curr_max else 0
            new_max = max(curr_max, node.val)
            
            return good + dfs(node.left, new_max) + dfs(node.right, new_max)

        return dfs(root, root.val)