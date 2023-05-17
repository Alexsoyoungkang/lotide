// returns the "tail" of an array: everything except for the first item (head)
// should return a new array.
const tail = function(array) {
  if (array.length <= 1) {
    return [];
  }
  return array.slice(1); //returning array, not value
};

module.exports = tail;