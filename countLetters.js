const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃 Assertion Passed: ${actual} === ${expected}`);
    //this can be used - console.log("Assertion Passed " + actual + " === " + expected);
  } else {
    console.log(`😭😭😭 Assertion Failed: ${actual} !== ${expected}`);
    // = console.log("Assertion Passed " + actual + " === " + expected);
  }
};

/* let count = {};
   2. for.. of loop of the string
   3. if each item isn't a space string
   4. if counts object has key, letter
   5. true -> counts[letter] ++, false -> counts[letter] = 1
   6. return; counts
   
*/

const countLetters = function(str) {
  let counts = {};
  for (const letter of str) {
    if (letter !== " ") {
      if (counts[letter]) {
        counts[letter] += 1;
      } else {
        counts[letter] = 1;
      }
    }
  } return counts;
};

const result = countLetters("lighthouse in the house");
console.log(result);
assertEqual(result["g"], 1);
assertEqual(result[" "],undefined);
assertEqual(result["h"], 4);
assertEqual(result["t"], 2);





/*const countOnly = function(allItems, itemsToCount) {
  let results = {};
  for (const item of allItems) { // "karl", "Salima" ...
    if (itemsToCount[item]) { // "Jason": true, "Fang": true
      if (results[item]) {
        results[item] += 1;  //-> {"Jason" : 2}
      } else {
        results[item] = 1; // results = {"Jason" : 1}
      }
    }
  }
  return results;
};
*/
