const removeNthFromEnd = require('../src/q19-remove-nth-node-from-end-of-list');
const { createLinkedList } = require('../src/data/ListNode');

test('checks remove nth from end', () => {
  expect(removeNthFromEnd(createLinkedList([1,2,3,4,5]),2).print()).toEqual("1,2,3,5");
  expect(removeNthFromEnd(createLinkedList([1]),1)).toBeNull();
  expect(removeNthFromEnd(createLinkedList([1,2]),1).print()).toEqual("1");
});
