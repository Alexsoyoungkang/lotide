const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃 Assertion Passed: ${actual} === ${expected}`);
    //this can be used - console.log("Assertion Passed " + actual + " === " + expected);
  } else {
    console.log(`😭😭😭 Assertion Failed: ${actual} !== ${expected}`);
    // = console.log("Assertion Passed " + actual + " === " + expected);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count



const countOnly = function(allItems, itemsToCount) {
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



const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
//console.log("result1", result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

//first attempt - error
/* const countOnly = function(allItems, itemsToCount) {
  let results = {};
  for (const item of allItems) {  //"karl", "Salima" ...
    //Check whether the name as Key exists in the itemsToCount with True value
    if (itemsToCount[item]);
      results[item] += 1;               
    } else {
      results[item] = 1;
    }
  }
  return results;
}; */

/* const countOnly = function(allItems, itemsToCount) {
  const result = {};

  for (const item of allItems) {
   //item =  “a”, “b”, “c”, “a”, “c”, “c”
		if (itemsToCount[item]) {
	// ^^(itemsToCount["a"] -> the value of key "a" is true so go next line, if not exit the if -> go to line 56
      if (result[item]) {
        result[item]++;
      } else {
        result[item] = 1;
      }
    }
  }

  return result;
};
```

const itemsToCount = {
  “a”: true,
  “b”: false,
  “c”: true
};

const allItems = [“a”, “b”, “c”, “a”, “c”, “c”]; */


/*let temp = {
  'rohit1': 1
}
//existence of 'rohit' as key in temp object?
if(temp['rohit']){
  console.log("Rohit key is there");
} else {
  console.log("rohit key is not there");
}
*/

/*The reason you are getting NaN values in the results object is because you are trying to increment a value that does not exist or is not a number.
When you access results[item] in the if statement, if the value does not exist (i.e., undefined), the if statement evaluates to false, and the else block is executed, which sets the value of results[item] to 1.
However, when you try to increment results[item] in the if block, if the value is undefined (which is falsy), the expression results[item] += 1 evaluates to NaN because you are trying to add 1 to an undefined value.
To fix this, you need to initialize the value of results[item] to 0 before incrementing it. This ensures that the value is a number and can be incremented.*/