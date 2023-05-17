const findKeyByValue = function(obj, value) {
  let results;
  for (const key of Object.keys(obj)) {
    if (obj[key] === value) {
      results = key;
    }
  } return results;
};

module.exports = findKeyByValue;