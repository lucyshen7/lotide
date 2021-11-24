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

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

const without = function(source, itemsToRemove) {
  let output = source;

  for (let i = 0; i < itemsToRemove.length; i++) {
    if (output.includes(itemsToRemove[i])) {
      let index = output.indexOf(itemsToRemove[i]); // Assign index to the position of the value in the output array
      output.splice(index, 1); // Remove 1 element from index
    }
  }
  return output;
};

// TEST CODE:

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], ["1", "2", 3])); // => ["3"]
console.log(without(["1", "2", "3"], ["3"])); // => ["1", "2"]
console.log(without([4, 5, 6], [1, 2, 4])); // => [5, 6]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);