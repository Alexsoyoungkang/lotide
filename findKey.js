const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃 Assertion Passed: ${actual} === ${expected}`);
    //this can be used - console.log("Assertion Passed " + actual + " === " + expected);
  } else {
    console.log(`😭😭😭 Assertion Failed: ${actual} !== ${expected}`);
    // = console.log("Assertion Passed " + actual + " === " + expected);
  }
};

// for .. of - get each key in the object

const findKey = function(object, callback) {
  for (const key of Object.keys(object)) { //const key = "Blue Hill", "Akaleri", "noma", "elBulli", "Ora", "Akelarre"
    if (callback(object[key])) { //function x => x.stars === 2
      return key;
    }
  } return undefined;
};

module.exports = findKey;
