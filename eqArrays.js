// Pseudocode: Compare each element in two arrays for a perfect match.

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length === 0 && arrayTwo.length === 0) {
    return true;
  }
  if (arrayOne.length === arrayTwo.length ) {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false; // Return a false if not matched
      }
    }
    return true; // Else, return true
  } else {
    return false;
  }
};

module.exports = eqArrays;