"use strict";

const LinkedList = require("../linked-list");
const LinkedListNode = require("../linked-list-node");

/**
 * Returns true if the list contains a cycle.
 * @param {LinkedList} list
 * @returns {Boolean}
 */
function hasCycle(list) {
  let seen = [];
  let curr = list.head;
  while (curr) {
    if (seen.includes(curr)) return true;
    seen.push(curr);
    curr = curr.next;
  }
  return false;
}

module.exports = hasCycle;
