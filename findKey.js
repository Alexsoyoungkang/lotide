const findKey = function(object, callback) {
  for (const key of Object.keys(object)) { //const key = "Blue Hill", "Akaleri", "noma", "elBulli", "Ora", "Akelarre"
    if (callback(object[key])) { //function x => x.stars === 2
      return key;
    }
  } return undefined;
};

module.exports = findKey;
