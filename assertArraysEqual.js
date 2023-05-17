/* In the eqArrays function, when the loop is at a particular index i,
it compares the value at that index in the first array (first[i]) with
the value at the same index in the second array (second[i]).*/
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    return `Assertion Passed: ${arrayOne} === ${arrayTwo}`;
  } else {
    return `Assertion Failed: ${arrayOne} !== ${arrayTwo}`;
  }
};

module.exports = assertArraysEqual;