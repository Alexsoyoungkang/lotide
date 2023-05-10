const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("returns 😃😃😃 Assertion Passed: 1 === 1 for 1, 1", () => {
    assert.strictEqual(assertEqual(1, 1), "😃😃😃 Assertion Passed: 1 === 1");
  });

  it(`returns 😃😃😃 Assertion Passed: hello === hello for "hello", "hello"`, () => {
    assert.strictEqual(assertEqual("hello", "hello"), `😃😃😃 Assertion Passed: hello === hello`);
  });
});