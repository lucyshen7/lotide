// assertArraysEqual function

// const eqArrays = require('./eqArrays'); // use deepEqual

// Implement assertArraysEqual for asserting that two arrays are equal

const assertArraysEqual = require('./assertArraysEqual');

// Implement a function called letterPositions

const letterPositions = function(sentence) {
  const results = {};
  let str = sentence; // console.log(str);

  for (let i = 0; i < str.length; i++) { // Loop through each letter of str // console.log(i);
    if (results[str[i]]) { // If the key exists in the object, push the index into existing array
      results[str[i]].push(i); // console.log("results array is: ", results[str[i]], "letter is", str[i])
    } else { // If the key does not exist, create key and array for key, and push str[i] (letter) to array
      results[str[i]] = [];
      results[str[i]].push(i);
    }
  }
  return results; // Return object
};

module.exports = letterPositions;

// TEST CODE
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse in the house").u, [7, 20]);
assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);