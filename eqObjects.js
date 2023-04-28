const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃 Assertion Passed: ${actual} === ${expected}`);
    //this can be used - console.log("Assertion Passed " + actual + " === " + expected);
  } else {
    console.log(`😭😭😭 Assertion Failed: ${actual} !== ${expected}`);
    // = console.log("Assertion Passed " + actual + " === " + expected);
  }
};


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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
/* returns true when
  1. They have the same number of keys
  2. The value for each key in one object is the same as the value for that same key in the other object
*/

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




const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject, anotherShirtObject)); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);

//const test = Object.keys(shirtObject);
//console.log(test);