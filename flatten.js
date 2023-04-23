const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

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


/* 1.let flattened = [];
   2.loop thru each element
   3.if array.isArray.array[i] -> true - const of loop for the current array[i]
   4.push the current items to flattened
   5.else -> push else array[i] to  flattened
   6.return flattened
 */

const flatten = function(array) {
  let flattened = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (const element of array[i]) {
        flattened.push(element);
      }
    } else {
      flattened.push(array[i]);
    }
  } return flattened;
};


flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
//test flatten([["hi", 2], 3, [4],  5, [6]])
//assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);