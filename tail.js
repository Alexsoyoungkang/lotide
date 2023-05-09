// returns the "tail" of an array: everything except for the first item (head)
// should return a new array.

const tail = function(array) {
  if (array.length <= 1) {
    return [];
  }
  return array.slice(1); //returning array, not value
};

module.exports = tail;

//const words = ["Yo Yo", "Lighthouse", "Labs"];
//console.log(tail(words)); // no need to capture the return value since we are not checking it and no print bc there's no console.log
// assertEqual(words.length, 3); // original array should still have 3 elements!
// // js can't compare array values

// const test = [];
// const result = tail(test);
// assertEqual(result.length, 0);

