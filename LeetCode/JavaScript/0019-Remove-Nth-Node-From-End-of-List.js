// 19. Remove Nth Node From End of List
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function (head, n) {
  const startNode = new ListNode(0);
  startNode.next = head;

  let prev = (cur = startNode);
  for (let i = 0; i <= n; i++) cur = cur.next;

  while (cur != null) {
    cur = cur.next;
    prev = prev.next;
  }
  prev.next = prev.next.next;
  return startNode.next;
};
