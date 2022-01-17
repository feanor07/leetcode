const middleNode = require('../src/q876-middle-of-the-linked-list');
const { createLinkedList } = require('../src/data/ListNode');

test('checks single node', () => {
  expect(middleNode(createLinkedList([1])).print()).toEqual("1");
})

test('checks even sized linked list', () => {
  expect(middleNode(createLinkedList([1,2])).print()).toEqual("2");
  expect(middleNode(createLinkedList([1,2,3,4])).print()).toEqual("3,4");
})

test('checks odd sized linked list', () => {
  expect(middleNode(createLinkedList([1,2,3])).print()).toEqual("2,3");
  expect(middleNode(createLinkedList([1,2,3,4,5])).print()).toEqual("3,4,5");
})
