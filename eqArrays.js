const assertEqual = require('./assertEqual');

/* Pseudocode
- Compare each element in two arrays for a perfect match.
*/

const eqArrays = function(arrayOne, arrayTwo) {
  let output = "";
  
  if (arrayOne.length === 0 && arrayTwo.length === 0) {
    return true;
  }

  if (arrayOne.length === 0 || arrayTwo.length === 0) {
    return false;
  }

  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] === arrayTwo[i]) {
      output = true; // Assign a truthy value to output if matched
    } else {
      output = false; // Assign a falsey value to output if not matched
    }
  }
  return output;
};

module.exports = eqArrays;