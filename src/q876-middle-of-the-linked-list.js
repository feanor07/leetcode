/**
 * {@link https://leetcode.com/problems/middle-of-the-linked-list/}
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function(head) {
  let slow = head;
  let fast = head.next;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return fast === null ? slow : slow.next;
};

module.exports = middleNode;
