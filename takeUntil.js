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


//return a "slice of the array with elements taken from the beginning.
//It should keep going until the callback/predicate returns a truthy value.
const takeUntil = function(array, callback) {
  const result = [];
  for (const item of array) { //item = 1, 2, 5, 7, 2, -1, 2, 4, 5
    if (callback(item)) { // callback = x => x < 0  ex) 1 => 1 < 0
      return result;
    } else {
      result.push(item);
    }
  }
};

module.exports = takeUntil;