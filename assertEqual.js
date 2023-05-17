//Define the assertEqual function and ensure that it can be called.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `😃😃😃 Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `😭😭😭 Assertion Failed: ${actual} !== ${expected}`;
  }
};

module.exports = assertEqual;