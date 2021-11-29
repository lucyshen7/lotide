// Implement Map

// Map function will take 2 arguments, an array to map and a callback function
// A map function will return a new array based on the results of the callback function

// assertArraysEqual copied over

// eqArrays

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

// assertArraysEqual

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }

};

const map = function(array, callback) {
  let results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;


// TEST CODE

const words = ["ground", "control", "to", "major", "tom"];
const dogNames = ["max", "lulu", "ginger"];
const usernames = ["lola", "aidan", "penelope"];

const results1 = map(words, word => word[0]); // Callback function in this case takes the value of the first index (letter) of each element (word) in the array
const sayHiToDog = map(dogNames, dogName => `Hi ${dogName}`);
const makeUsername = map(usernames, username => username + 50);

assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ]); // Should pass
assertArraysEqual(sayHiToDog,[ 'Hi max', 'Hi lulu', 'Hi ginger' ]);
assertArraysEqual(makeUsername, [ 'lola50', 'aidan50', 'penelope50' ]);
assertArraysEqual(results1, [ 'lola50', 'aidan50', 'penelope50' ]); // Should fail