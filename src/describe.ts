import { describe, it } from "node:test";
import { ListManager } from "../ListManager";
import assert from "node:assert";

describe("ListManager capacity", () => {
  it("should be initialized to 0 when a maximum capacity is not provided", () => {
    const empty = new ListManager();
    assert.strictEqual(empty.capacity(), 0);
  });

  it("should have a capacity of 5", () => {
    const fruits = new ListManager(5);
    assert.strictEqual(fruits.capacity(), 5);
  });

  it("should reduce capacity from 5 to 4 when an item is added", () => {
    const fruits = new ListManager(5);
    fruits.addItem("apple");
    assert.strictEqual(fruits.capacity(), 4);
  });
});

describe("Dummy test suit", () => {
  it("should always pass ", () => {
    assert.ok(true, "This assertion will always pass");
  });
});

// skip the entire suite
describe('A test suite', { skip: true }, () => {
});

describe('A test suite', () => {
  // skip option allows you to skip a set of tests depending on the Node.js environment
  it('should pass', { skip: process.env.NODE_ENV === "development" }, () => {
  });
});