const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

// Pseudocode:
// - Report back how many instances of each string were found in the allItems array of strings
// - Add if condition to only increment our count in results if the item is found in the object

// inside the loop,
// increment the counter for each item:
// set a property with that string key to:
// the value that was already there (or zero if nothing there) with 1 added to it.

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) { // Check each element of the array
    // console.log("item is:", item)
    if (itemsToCount[item]) { // If key exists inside the array (truthy value),
      // console.log("it exists inside the object. obj key is: ", item, "obj value is:", itemsToCount[item])
      if (results[item]) { // Check if the results object has the item (name)
        results[item] += 1;
      } else {
        results[item] = 1; // Sets a property with that string key to 1
      }
    }
  }
  return results;
};

// TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

let result1 = {};
result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);