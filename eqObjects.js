// eqObjects - Returns true if both objects have identical keys with identical values.

const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1).sort(); // Store array of keys from object1 and object2 using Object.keys() function
  const keys2 = Object.keys(object2).sort();
  if (eqArrays(keys1, keys2)) {
    if (keys1.length === keys2.length) { // Compare lengths using Object.keys().length, if same length of keys, continue, if not, return false
      for (const key of keys1) { // After that check, loop through the keys returned by Object.keys for one of the objects (not both).
        const value1 = object1[key];
        const value2 = object2[key];
        if (typeof value1 === 'object' && !Array.isArray(value1) && typeof value2 === 'object' && !Array.isArray(value2)) {
          return eqObjects(value1, value2); // recursive eqObjects
        }
        if (Array.isArray(value1) && Array.isArray(value2) && (value1.length === value2.length)) { // Check if the key's values are arrays (bracket notation; don't know name of key)
          return eqArrays(value1, value2); // Use eqArrays to check if arrays are equal
        } else if (value1 !== value2) {
          return false; // If not matched, return false
        }
      }
      return true; // Return true at this point
    } else {
      return false;
    }
  } else {
    return false;
  }
};

module.exports = eqObjects;