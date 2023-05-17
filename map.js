const eqArrays = function(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

// Our map function will take in two arguments:
// An array to map
// A callback function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {  // item = ground, control, to, major, tom
    results.push(callback(item));
  }
  return results;
};

module.exports = map;
