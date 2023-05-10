const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("#assertArraysEqual", () => {
  it("returns Assertion Passed: 1,2,3 === 1,2,3 for [1, 2, 3], [1, 2, 3]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), "Assertion Passed: 1,2,3 === 1,2,3");
  });

  it(`returns Assertion Failed: 1,2,3 !== 3,2,1 for ["1", "2", "3"], ["3", "2", "1"]`, () => {
    assert.strictEqual(assertArraysEqual(["1", "2", "3"], ["3", "2", "1"]), `Assertion Failed: 1,2,3 !== 3,2,1`);
  });
});