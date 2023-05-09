//1.Check if both arrays have the same length. If not, return false.
//2.Loop through each element in the first array and compare it with the element in the same position
//in the second array. If any of the elements do not match, return false.
//3.If the loop finishes without returning false, the arrays are equal, so return true.

/* In the eqArrays function, when the loop is at a particular index i,
it compares the value at that index in the first array (first[i]) with
the value at the same index in the second array (second[i]).*/

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

module.exports = eqArrays;

