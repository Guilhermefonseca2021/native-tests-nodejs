// tests/list_manager.test.js
import { test } from "node:test";
import { ListManager } from "../ListManager";
import assert from "node:assert/strict";

// Since the t.test() method returns a promise, you must await each of them
test("test list capacity", async (t) => {
  await t.test("capacity is initialized to 5", () => {
    const fruits = new ListManager(5);
    assert.strictEqual(fruits.capacity(), 5);
  });

  await t.test("capacity is reduced to 4", () => {
    const fruits = new ListManager(5);
    fruits.addItem("apple");
    assert.strictEqual(fruits.capacity(), 4);
  });

  await t.test("capacity is initialized to 0", () => {
    const empty = new ListManager();
    assert.strictEqual(empty.capacity(), 0);
  });
});
