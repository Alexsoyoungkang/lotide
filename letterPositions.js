
/* const results = {}; currently undefined
   loop thru sentence to get each item
   if - sentence[i] !== ' '
   if (results[sentence[i]]) {
        results.push()
      } else {
        results[sentence[i]] = []; initialize an array into results
        results[sentence[i]].push(i)
      }
    return results
*/

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
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

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};



console.log(letterPositions("lighthouse in the house"));
const positions = letterPositions("lighthouse in the house");
assertArraysEqual(positions["i"], [1, 11]);
assertArraysEqual(letterPositions("hello").e, [1]);



//test
//results['test'] = [];
//results['test'].push(2, 3);