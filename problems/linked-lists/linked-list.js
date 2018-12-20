"use strict";

const LinkedListNode = require("./linked-list-node");

/**
 * A singly linked list with only a head pointer.
 */
class LinkedList {
  constructor(first) {
    this.head = new LinkedListNode(first);
    this._length = 1;
  }

  push(data) {
    let curr = this.head;
    while (curr.next) curr = curr.next;

    const toAdd = new LinkedListNode(data);
    curr.next = toAdd;
    this._length++;
    return toAdd;
  }

  pop() {
    let curr = this.head;
    while (curr.next.next) curr = curr.next;

    const toRemove = curr.next;
    curr.next = null;
    this._length--;
    return toRemove;
  }

  get(pos) {
    if (pos < 0 || pos + 1 > this.size) return -1;

    let curr = this.head;
    while (pos--) curr = curr.next;
    return curr;
  }

  size() {
    return this._length;
  }

  toString() {
    let result = `${this.head.data}`;
    let curr = this.head.next;
    while (curr) {
      result = `${result} -> ${curr.data}`;
      curr = curr.next;
    }
    return result;
  }

  toArray() {
    let result = [];
    let curr = this.head;
    while (curr) {
      result.push(curr);
      curr = curr.next;
    }
    return result;
  }
}

module.exports = LinkedList;
