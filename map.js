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

module.exports = map;
