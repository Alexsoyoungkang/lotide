const assertArraysEqual = require('../assertArraysEqual');

//TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
const one = ["a", "b", "c"];
const two = ["a", "b", "c"];
assertArraysEqual(one, two);