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

// Our map function will take in two arguments:
// An array to map
// A callback function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {  // item = ground, control, to, major, tom
    results.push(callback(item));
  }
  return results;
};


const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]); //words = array, word => word[0] = callback
//console.log(results1);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);


// test cases using at least three different ways of using map.
const resultLength = map(words, word => word.length);
//console.log(resultLength);
assertArraysEqual(resultLength, [ 6, 7, 2, 5, 3 ]);

const resultTypeof = map(words, word => typeof word);
// console.log(resultTypeof);
assertArraysEqual(resultTypeof, [ 'string', 'string', 'string', 'string', 'string' ]);

const resultIncludes = map(words, word => word.includes("major"));
//console.log(resultIncludes);
assertArraysEqual(resultIncludes, [ false, false, false, true, false ]);



//Different ways to use the function
const results2 = words.map(word => word[0]);

const firstLetter = function(array) {  //callback declarition
  return array[0];
};
const results3 = words.map(firstLetter); // callback
console.log("results3:", results3);


//assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
//assertArraysEqual(results2, [ 'g', 'c', 't', 'm', 't' ]);
//assertArraysEqual(results3, [ 'g', 'c', 't', 'm', 't' ]);
