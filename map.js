// Implement Map
// Map function will take 2 arguments, an array to map and a callback function
// A map function will return a new array based on the results of the callback function

const map = function(array, callback) {
  let results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;