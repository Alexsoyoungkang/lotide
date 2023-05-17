const flatten = function(array) {
  const flattened = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (const element of array[i]) {
        flattened.push(element);
      }
    } else {
      flattened.push(array[i]);
    }
  } return flattened;
};

module.exports = flatten;