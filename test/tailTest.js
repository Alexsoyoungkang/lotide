const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 2 for [1, 2, 3].length", () => {
    assert.strictEqual(tail([1, 2, 3]).length, 2);
  });

  it("returns '0' for [].length", () => {
    assert.strictEqual(tail([]).length, 0);
  });
});