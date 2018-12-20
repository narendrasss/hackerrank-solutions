"use strict";

const LinkedList = require("../linked-list");
const hasCycle = require("./cycle");

const list = new LinkedList(1);
list.push(2);
list.push(3);

list.get(2).next = list.get(1);

test("Should return true for a list with a cycle", () => {
  expect(hasCycle(list)).toBeTruthy();
});
