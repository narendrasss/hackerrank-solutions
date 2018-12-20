"use strict";

const DoublyNode = require("./doubly-node");

class DoublyList {
  constructor(first) {
    this.head = new DoublyNode(first);
    this.tail = this.head;
    this._length = 1;
  }

  push(data) {
    let toAdd = new DoublyNode(data);
    toAdd.prev = this.tail;
    this.tail.next = toAdd;
    this.tail = toAdd;
    this._length++;
    return toAdd;
  }

  pop() {
    let toRemove = this.tail;
    const prev = this.tail.prev;
    prev.next = null;
    this.tail = prev;
    this._length--;
    return toRemove;
  }

  size() {
    return this._length;
  }

  toString() {
    let result = `${this.head.data}`;
    let curr = this.head.next;
    while (curr) {
      result = `${result} ${curr.data}`;
      curr = curr.next;
    }
    return result;
  }
}

module.exports = DoublyList;
