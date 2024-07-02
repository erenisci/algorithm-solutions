# 622. Design Circular Queue
# https://leetcode.com/problems/design-circular-queue/


class DLL:
    def __init__(self, val=0):
        self.next = None
        self.prev = None
        self.val = val


class MyCircularQueue:
    def __init__(self, k: int):
        self.size = 0
        self.cap = k
        self.head = self.tail = DLL()
        self.head.next = self.tail
        self.tail.prev = self.head

    def enQueue(self, value: int) -> bool:
        if self.size == self.cap:
            return False
        nd = DLL(value)
        prev = self.tail.prev
        prev.next = nd
        nd.prev = prev
        nd.next = self.tail

        self.tail.prev = nd
        self.size += 1
        return True

    def deQueue(self) -> bool:
        if not self.size:
            return False
        nd = self.head.next
        nd.next.prev = self.head

        self.head.next = nd.next
        self.size -= 1
        return True

    def Front(self) -> int:
        return self.head.next.val if self.size else -1

    def Rear(self) -> int:
        return self.tail.prev.val if self.size else -1

    def isEmpty(self) -> bool:
        return self.size == 0

    def isFull(self) -> bool:
        return self.size == self.cap
