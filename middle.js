// Pseudocode:
// - Take an array and go through each element
// - If array larger than 2 elements, take the middle value
// - For odd number of elements, an array containing a single middle element should be returned
// - For even number of elements, an array containing two elements in the middle should be returned

// Middle function
const middle = function(array) {
  let resultArray = [];
  let midIndex = Math.ceil(array.length / 2 - 1);

  if (array.length <= 2) {
    return resultArray;
  }

  if (array.length % 2 === 0) { // Check if array has an even number of elements
    resultArray.push(array[midIndex], array[midIndex + 1]);
  } else if (array.length % 2 !== 0) { // Check if array has an odd number of elements
    resultArray.push(array[midIndex]);
  }
  return resultArray;
};

module.exports = middle;