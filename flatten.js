const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arrayOne, arrayTwo) {
  let output = "";
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] === arrayTwo[i]) {
      output = true; // Assign a truthy value to output if matched
    } else {
      output = false; // Assign a falsey value to output if not matched
    }
  }
  return output;
};

// Implement flatten
// Given an array with other arrays inside, it can flatten it into a single-level array
// Pseudocode:
// - Loop through each element of the array
// - If it has another array, remove it
// - Add it back in the master array

const flatten = function(array) {
  // let flatString = "";
  let newArray = [];
  
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

// TEST CODE
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]