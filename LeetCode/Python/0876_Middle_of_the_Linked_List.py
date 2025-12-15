# 876. Middle of the Linked List
# https://leetcode.com/problems/middle-of-the-linked-list/


from typing import Optional


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        length = 0
        current = head

        while current:
            length += 1
            current = current.next

        steps = length // 2
        current = head

        for _ in range(steps):
            current = current.next

        return current
