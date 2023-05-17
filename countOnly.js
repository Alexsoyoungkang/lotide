const countOnly = function(allItems, itemsToCount) {
  const results = {};

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

module.exports = countOnly;