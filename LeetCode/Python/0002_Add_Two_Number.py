# 2. Add Two Numbers
# https://leetcode.com/problems/add-two-numbers/


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        k = 0
        root = current = None
        while l1 or l2 is not None:
            if l1 and l2 is not None:
                c = (l1.val + l2.val + k) % 10
                k = (l1.val + l2.val + k) // 10
                l1 = l1.next
                l2 = l2.next
            elif l1 is not None and l2 is None:
                c = (l1.val + k) % 10
                k = (l1.val + k) // 10
                l1 = l1.next
            elif l2 is not None and l1 is None:
                c = (l2.val + k) % 10
                k = (l2.val + k) // 10
                l2 = l2.next
            if root is None:
                root = current = ListNode(c)
            else:
                current.next = ListNode(c)
                current = current.next
        if k != 0:
            current.next = ListNode(k)
        return root
