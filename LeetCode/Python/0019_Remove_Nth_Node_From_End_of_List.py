# 19. Remove Nth Node From End of List
# https://leetcode.com/problems/remove-nth-node-from-end-of-list/

from typing import Optional


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        sNode = ListNode(0, head)
        cur = prev = sNode

        for i in range(n + 1):
            cur = cur.next

        while cur != None:
            cur = cur.next
            prev = prev.next

        prev.next = prev.next.next
        return sNode.next
