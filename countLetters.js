const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// countLetters

const countLetters = function(string) {
  let obj = {};

  let str = string.split(" ").join(""); // Remove spaces in string
  // console.log(str)

  for (const letter of str) { // Loop through each letter of str
    if (obj[letter]) { // If the key exists in the obj, increment value by 1
      obj[letter] += 1;
    } else { // If the key does not exist, set value to 1
      obj[letter] = 1; 
    }
  }
  return obj;
}

module.exports = countLetters;

// TEST CODE
let obj1 = {};
obj1 = (countLetters("lighthouse in the house"));

assertEqual(obj1["h"], 4);
assertEqual(obj1["e"], 3);
assertEqual(obj1["n"], 1);