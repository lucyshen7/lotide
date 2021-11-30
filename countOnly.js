// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

// Pseudocode:
// - Report back how many instances of each string were found in the allItems array of strings
// - Add if condition to only increment our count in results if the item is found in the object
// - inside the loop,increment the counter for each item: set a property with that string key to: the value that was already there (or zero if nothing there) with 1 added to it.

const countOnly = function(allItems, itemsToCount) {
  const result = {};
  for (const item of allItems) { // Check each element of the array // console.log("item is:", item)
    if (itemsToCount[item]) { // If key exists inside the array (truthy value), // console.log("it exists inside the object. obj key is: ", item, "obj value is:", itemsToCount[item])
      if (result[item]) { // Check if the result object has the item (name)
        result[item] += 1;
      } else {
        result[item] = 1; // Sets a property with that string key to 1
      }
    }
  }
  return result;
};

module.exports = countOnly;