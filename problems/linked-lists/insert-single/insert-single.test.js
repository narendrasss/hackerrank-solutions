"use strict";

const LinkedList = require("../linked-list");
const add = require("./insert-single");

const list = new LinkedList(16);
list.push(13);
list.push(7);

test("Should insert 1 at position 2", () => {
  add(list, 1, 2);
  expect(list.toString()).toEqual("16 -> 13 -> 1 -> 7");
});
