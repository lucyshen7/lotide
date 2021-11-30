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

module.exports = flatten;