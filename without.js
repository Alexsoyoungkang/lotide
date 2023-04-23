const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
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

/* return a new array with only those elements from source that are not present in the itemsToRemove array.
   1.let unwanted = [] for the source item that matches with any from the itemsToRemoved array
   2.let wanted = [] for no-matching items from source array.
   3.for loop - source element
   4.if - includes() method
   5.push
   6.return wanted
*/

const without = function(source, itemsToRemove) {
  let unWanted = [];
  let wanted = [];
  for (let i = 0; i < source.length; i++) {
    //go thru all elements of sourse and check if the current source item matches with anything with itemssToRemove items.
    if (itemsToRemove.includes(source[i])) {
      unWanted.push(source[i]);
    } else {
      wanted.push(source[i]);
    }
  } return wanted;
};



without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

/*test
assertArraysEqual(without(["hi", "hello", "3"], ["hello", "bye", "3"]), ['3']);

const words = ["hello", "world", "lighthouse"];
const wordsTwo = ["bye", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(without(words, wordsTwo), ["hello", "world", "lighthouse"]);*/