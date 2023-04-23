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

/*1. let middleNum = [];
  2. if - one or two items in an array returns an ampty array
  3. if - even number
  4. if - odd number
  Math.floor(array.length/2) -> to get the middle value from the array(odd # of elements)
  4. push
  5. return middleNum
*/

const middle = function(array) {
  let middleNum = [];
  if (array.length <= 2) {
    return [];
  }
  //even number
  if (array.length % 2 === 0) {
    middleNum.push(array[(array.length / 2) - 1], array[array.length / 2]);
  //odd number
  } else {
    middleNum.push(array[Math.floor(array.length / 2)]);
  }
  return middleNum;
};


middle([1]); // => []
middle([1, 2]); // => []

middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]

middle([1, 2, 3, 4]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);// => [3, 4]