const eqArrays = function(first, second) {
  if (first.length !== second.length) {  // check the length first
    return false;
  }
  for (let i = 0; i < first.length; i++) {  // looping thru each element and compare
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true; // both of if and for are true then return true;
};


const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1); // ['color', 'size']
  const obj2Keys = Object.keys(object2); // ['size', 'color']
  if (obj1Keys.length === obj2Keys.length) {
    for (const key of obj2Keys) { // key = color, size
      const obj1Value = object1[key];  // ex)obj1KeyItem = ["red", "blue"], medium  - they're comparing the same key at the same time
      const obj2Value = object2[key];  // ex) obj2KeyItem = red, medium
      if (Array.isArray(obj1Value) && Array.isArray(obj2Value)) {
        const result = eqArrays(obj1Value, obj2Value);
        if (result === true) {
          return true;
        } else {
          return false;
        }
      } else {
        if (obj1Value === obj2Value) {
          return true;
        } else {
          return false;
        }
      }
    }
  } else {
    return false;
  }
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;
