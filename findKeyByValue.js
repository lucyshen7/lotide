// Pseudocode:
// - Take in an object and a value
// - Scan the object and return first key with the given value
// - Return undefined if no key with that given value is found

const findKeyByValue = function(object, value) {
  for (const key in object) {
    if (value === object[key]) {
      return key;
    }
  }
};

module.exports = findKeyByValue;