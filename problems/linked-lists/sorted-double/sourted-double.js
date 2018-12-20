"use strict";

const DoublyList = require("../doubly-list");
const DoublyNode = require("../doubly-node");

/**
 * Inserts a new node in its correct place given a
 * sorted doubly linked list.
 * @param {DoublyList} list
 * @param {number} data
 * @returns {DoublyList}
 */
function sortedInsert(list, data) {
  const toAdd = new DoublyNode(data);
  let curr = list.head;
  while (curr) {
    if (curr.next && data < curr.next.data) {
      const temp = curr.next;
      curr.next = toAdd;
      toAdd.prev = curr;
      temp.prev = toAdd;
      toAdd.next = temp;
      return;
    }
    curr = curr.next;
  }
  list.push(data);
}

module.exports = sortedInsert;
