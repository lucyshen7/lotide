// Implement Map

// Map function will take 2 arguments, an array to map and a callback function
// A map function will return a new array based on the results of the callback function

// eqArrays
// assertArraysEqual // Use chai assert.deepEqual

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