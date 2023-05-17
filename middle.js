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