/*1. let middleNum = [];
  2. if - one or two items in an array returns an ampty array
  3. if - even number
  4. if - odd number
  Math.floor(array.length/2) -> to get the middle value from the array(odd # of elements)
  4. push
  5. return middleNum
*/

const middle = function(array) {
  let middleNum = [];
  if (array.length <= 2) {
    return [];
  }
  //even number
  if (array.length % 2 === 0) {
    middleNum.push(array[(array.length / 2) - 1], array[array.length / 2]);
  //odd number
  } else {
    middleNum.push(array[Math.floor(array.length / 2)]);
  }
  return middleNum;
};

module.exports = middle;