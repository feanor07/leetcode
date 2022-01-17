function ListNode(val) {
  this.val = val
  this.next = null
}

ListNode.prototype.print = function() {
  let str = this.val.toString();
  let temp = this.next;

  while (temp !== null) {
      str += `,${temp.val.toString()}`;
      temp = temp.next;
  }

  return str;
}

function createLinkedList(array) {
  if (array === null || array === undefined || !Array.isArray(array) || array.length === 0) {
      return null;
  }

  const head = new ListNode(array[0]);

  let temp = head;

  for (let i = 1; i < array.length; i++) {
      const node = new ListNode(array[i]);
      temp.next = node;
      temp = node;
  }

  return head;
}

module.exports = { ListNode, createLinkedList };
