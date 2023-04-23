/* In the eqArrays function, when the loop is at a particular index i,
it compares the value at that index in the first array (first[i]) with
the value at the same index in the second array (second[i]).*/


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

//test cases
//assertArraysEqual([1, 2, 3], [1, 2]);
//assertArraysEqual([1, 2, 3], [1, 2, 3]);
//assertArraysEqual(1, [1, 2, 3]);