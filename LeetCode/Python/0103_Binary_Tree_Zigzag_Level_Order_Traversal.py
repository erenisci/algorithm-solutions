# 103. Binary Tree Zigzag Level Order Traversal
# https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def zigzagLevelOrder(self, root: TreeNode) -> list[list[int]]:
        ans = dict()

        def bfs(curr=root, level=0):
            nonlocal ans
            if curr != None:
                if level % 2 == 1:
                    if level in ans.keys():
                        ans[level].insert(0, curr.val)
                    else:
                        ans[level] = [curr.val]
                else:
                    if level in ans.keys():
                        ans[level].append(curr.val)
                    else:
                        ans[level] = [curr.val]
                bfs(curr.left, level + 1)
                bfs(curr.right, level + 1)
            return

        bfs()
        return ans.values()
