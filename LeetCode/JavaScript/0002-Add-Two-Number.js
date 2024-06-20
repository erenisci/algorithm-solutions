// 2. Add Two Numbers
// https://leetcode.com/problems/add-two-numbers

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  let newNode = new ListNode();
  let current = newNode;

  let rem = 0;
  while (l1 || l2) {
    let sum = rem;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    rem = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
  }
  if (rem > 0) current.next = new ListNode(rem);

  return newNode.next;
};
