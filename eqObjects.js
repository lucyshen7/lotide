// eqObjects

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqArrays = require('./eqArrays');
// const assertEqual = require('./assertEqual');

const eqObjects = function(object1, object2) {
  let output = false;
  let keys1 = Object.keys(object1); // Store array of keys from object1 and object2 using Object.keys() function
  let keys2 = Object.keys(object2);

  if (keys1.length === keys2.length) { // Compare lengths using Object.keys().length, if same length of keys, continue, if not, return false
    for (const key of keys1) { // After that check, loop through the keys returned by Object.keys for one of the objects (not both). Use for..of since the keys are an array. Other loop types can work too, but this one is most elegant and idiomatic, thanks to ES6
      if (Array.isArray(object1[key]) && Array.isArray(object2[key]) && (object1[key].length === object2[key].length)) { // Check if the key's values are arrays using the bracket notation (don't know name of key)
        // console.log("arrays equal?", eqArrays(object1[key], object2[key]));
        output = eqArrays(object1[key], object2[key]); // Use eqArrays to check if arrays are equal
      } else if (object1[key] === object2[key]) { // Else, assume primitive value and continue to compare. Inside our loop, compare both objects' values for that key. Use === to ensure that the types are the same!
        output = true;
      } else { // If not matched, let output be false;
        output = false;
      }
    }
  }

  return output;
};

module.exports = eqObjects;