import { describe, it } from "node:test";
import assert from "node:assert/strict";

describe("Feature X", () => {
  // you can use the todo method like this when you're reminding yourself
  // to write a test
  it.todo("should handle edge case A");
  // or you can provide the `todo` option when you're reminding yourself
  // to fix an existing test that's currently failing
  it("should log errors correctly", { todo: true }, () => {
    // this will still be executed, but it won't fail the test suite
    throw new Error("this does not fail the test");
  });
});