const eqArrays = require('./eqArrays')

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

module.exports = eqObjects;