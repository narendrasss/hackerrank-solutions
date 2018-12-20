"use strict";

const DoublyList = require("../doubly-list");
const sortedInsert = require("./sourted-double");

const list = new DoublyList(1);
list.push(3);
list.push(4);
list.push(10);

test("Should add 5 between 4 and 10", () => {
  sortedInsert(list, 5);
  expect(list.toString()).toEqual("1 3 4 5 10");
});
