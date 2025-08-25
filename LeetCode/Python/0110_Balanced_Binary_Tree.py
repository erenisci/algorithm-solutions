# 110. Balanced Binary Tree
# https://leetcode.com/problems/balanced-binary-tree/


from typing import Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        def depth_first_search(node):
            if not node:
                return (True, 0)

            left_balanced, left_height = depth_first_search(node.left)
            right_balanced, dright_height = depth_first_search(node.right)
            return (left_balanced and right_balanced and abs(left_height - dright_height) <= 1,
                    1 + max(left_height, dright_height))

        return depth_first_search(root)[0]
