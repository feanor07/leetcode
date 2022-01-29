/**
 * {@link https://leetcode.com/problems/remove-nth-node-from-end-of-list/}
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const { ListNode } = require('../src/data/ListNode');

const removeNthFromEnd = function(head, n) {
  let ahead = head;
  let temp = new ListNode(0, head);
  let behind = temp;

  for (let i = 0; i < n; i++) {
    ahead = ahead.next;
  }

  while (ahead !== null) {
    ahead = ahead.next;
    behind = behind.next;
  }

  behind.next = behind.next.next;

  return temp.next;  
};

module.exports = removeNthFromEnd;
