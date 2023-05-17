const without = function(source, itemsToRemove) {
  const unWanted = [];
  const wanted = [];
  for (let i = 0; i < source.length; i++) {
    //go thru all elements of sourse and check if the current source item matches with anything with itemssToRemove items.
    if (itemsToRemove.includes(source[i])) {
      unWanted.push(source[i]);
    } else {
      wanted.push(source[i]);
    }
  }
  
  return wanted;
};

module.exports = without;