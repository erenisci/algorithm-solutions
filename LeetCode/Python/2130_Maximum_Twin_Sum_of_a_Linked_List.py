# 2130. Maximum Twin Sum of a Linked List
# https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/


from typing import Optional


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def pairSum(self, head: Optional[ListNode]) -> int:
        if head is None:
            return 0

        slow = head
        fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        prev = None
        curr = slow
        while curr:
            nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt

        p1 = head
        p2 = prev

        max_sum = p1.val + p2.val
        p1 = p1.next
        p2 = p2.next

        while p2:
            twin_sum = p1.val + p2.val
            if twin_sum > max_sum:
                max_sum = twin_sum
            p1 = p1.next
            p2 = p2.next

        return max_sum
