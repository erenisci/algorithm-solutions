// 83. Remove Duplicates from Sorted List
// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function (head) {
  if (!head) return head;

  let tempNode = head.next,
    tempValue = head.val,
    tempHead = head;
  while (tempNode) {
    if (tempValue === tempNode.val) {
      tempHead.next = tempNode.next;
    } else {
      tempHead = tempHead.next;
      tempValue = tempHead.val;
    }
    tempNode = tempNode.next;
  }
  return head;
};
