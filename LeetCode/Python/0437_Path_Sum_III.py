# 437. Path Sum III
# https://leetcode.com/problems/path-sum-iii/


from typing import Optional


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> int:
        pSum = defaultdict(int)
        pSum[0] = 1

        def dfs(root,total):
            count = 0

            if root:
                total += root.val
                count = pSum[total-targetSum]

                pSum[total] += 1
                count += dfs(root.left, total) + dfs(root.right, total)
                
                pSum[total] -= 1
            return count
        return dfs(root, 0)