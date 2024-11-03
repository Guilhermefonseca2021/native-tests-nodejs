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
})
