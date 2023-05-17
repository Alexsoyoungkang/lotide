const countLetters = function(str) {
  const counts = {};

  for (const letter of str) {
    if (letter !== " ") {
      if (counts[letter]) {
        counts[letter] += 1;
      } else {
        counts[letter] = 1;
      }
    }
  } 
  return counts;
};

module.exports = countLetters;