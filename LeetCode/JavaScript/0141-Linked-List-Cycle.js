// 141. Linked List Cycle
// https://leetcode.com/problems/linked-list-cycle/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

var hasCycle = function (head) {
  if (head === null) return false;

  let prev = head;
  let cur = head.next;
  while (prev !== cur) {
    if (!cur || !cur.next) return false;
    prev = prev.next;
    cur = cur.next.next;
  }
  return true;
};
