import { test } from 'node:test';
import { ListManager } from '../ListManager';
import assert from 'node:assert/strict';


// Overall, this test verifies two things:
test("test capacity after adding item", () => {
    const fruits = new ListManager(5);
    // That the ListManager instance correctly initializes with the given capacity.
    assert.strictEqual(fruits.capacity(), 5);

    fruits.addItem("apple"); 
    // That the capacity() method correctly reports the updated capacity when an item is added to the list.
    assert.strictEqual(fruits.capacity(), 4);
})