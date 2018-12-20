"use strict";

const LinkedList = require("../linked-list");
const LinkedListNode = require("../linked-list-node");

/**
 * Adds a new node at the given position to the given
 * list. Returns the head of the updated list.
 * @param {LinkedList} list
 * @param {any} data
 * @param {number} pos
 * @returns {LinkedListNode}
 */
function add(list, data, pos) {
  if (pos < 0 || pos >= list.size()) return null;

  let toAdd = new LinkedListNode(data);
  let curr = list.head;
  for (let i = 0; i < pos - 1; i++) curr = curr.next;
  const temp = curr.next;
  curr.next = toAdd;
  toAdd.next = temp;
  return toAdd;
}

module.exports = add;
