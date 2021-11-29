// TEST/ASSERTION FUNCTIONS
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

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

// Pseudocode:
// - Take an array and go through each element
// - If array larger than 2 elements, take the middle value
// - For odd number of elements, an array containing a single middle element should be returned
// - For even number of elements, an array containing two elements in the middle should be returned

// ACTUAL FUNCTION
const middle = function(array) {
  let resultArray = [];
  let midIndex = Math.ceil(array.length / 2 - 1);

  if (array.length <= 2) {
    return resultArray;
  }

  if (array.length % 2 === 0) { // Check if array has an even number of elements
    resultArray.push(array[midIndex], array[midIndex + 1]);
  } else if (array.length % 2 !== 0) { // Check if array has an odd number of elements
    resultArray.push(array[midIndex]);
  }
  return resultArray;
};

// TEST CODE
assertArraysEqual(middle([1]), []); // => should PASS // Revised code for assertArraysEqual
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4, 5]); // => should FAIL