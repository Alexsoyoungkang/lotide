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

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2));


const ob = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const test = findKey(ob, x => x.stars === 2);
//console.log("test:", test);
assertEqual(test, "noma");

const test1 = findKey(ob, x => x.stars === 4);
//console.log("test1:", test1);
assertEqual(test1, undefined);


const test2 = findKey(ob, x => x.stars > 2);
//console.log("test2:", test2);
assertEqual(test2, "Akaleri");





