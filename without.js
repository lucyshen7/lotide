// const eqArrays = require('./eqArrays');
// const assertArraysEqual = require('./assertArraysEqual'); // use deepEqual

const without = function(source, itemsToRemove) {
  let output = source;
  for (let i = 0; i < itemsToRemove.length; i++) {
    if (output.includes(itemsToRemove[i])) {
      let index = output.indexOf(itemsToRemove[i]); // Assign index to the position of the value in the output array
      output.splice(index, 1); // Remove 1 element at index from the output array
    }
  }
  return output;
};

module.exports = without;

// TEST CODE:

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], ["1", "2", 3])); // => ["3"]
console.log(without(["1", "2", "3"], ["3"])); // => ["1", "2"]
console.log(without([4, 5, 6], [1, 2, 4])); // => [5, 6]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);