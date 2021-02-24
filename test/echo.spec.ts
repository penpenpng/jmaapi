import assert from "assert";
import { describe, it } from "mocha";
import { echo } from "@/greet";

describe("echo", () => {
  it("sholud echo the same value", () => {
    assert.strictEqual(echo(5), 5);
  });
});
