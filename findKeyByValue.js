// assertEqual

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Implement findKeyByValue

// Pseudocode:
// - Take in an object and a value
// - Scan the object and return first key with the given value
// - Return undefined if no key with that given value is found

const findKeyByValue = function(object, value) {
  for (const key in object) {
    if (value === object[key]) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

// TEST CODE

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  crime: "Brooklyn Nine-Nine",
  romance: "The Notebook"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Notebook"), "romance");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Squid Game"), undefined);