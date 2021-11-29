/*
Pseudocode:
- assertArraysEqual will take two arrays and console.log an appropriate message to the console.
*/

const eqArrays = require('./eqArrays');

// Implement assertArraysEqual for asserting that two arrays are equal

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }

};

module.exports = assertArraysEqual;