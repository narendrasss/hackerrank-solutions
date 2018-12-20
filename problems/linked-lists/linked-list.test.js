"use strict";

const LinkedList = require("./linked-list");

const list = new LinkedList(1);

test("Should add 2 to list", () => {
  list.push(2);
  expect(list.get(1).data).toEqual(2);
});

test("Should correctly print string", () => {
  expect(list.toString()).toEqual("1 -> 2");
});

test("Should remove 2 from list", () => {
  const removed = list.pop();
  expect(removed.data).toBe(2);
  expect(list.size).toBe(1);
});
