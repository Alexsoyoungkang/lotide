const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//TEST CODE
eqArrays([1, 2, 3], [1, 2, 3]); // => true
const testOne = eqArrays([1, 2, 3], [3, 2, 1]); // => false

const testTwo = eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
const testThree = eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(testOne, false);
assertEqual(testTwo, true);
assertEqual(testThree, false);