// Implement findKey
// - Takes in an object and a callback
// - Scans object and returns the first key for which the callback returns a truthy value
// - If no key is found, then it should return undefined

const findKey = function(object, callBack) {
  let result;
  for (let key in object) {
    if (callBack(object[key])) {
      result = key;
      return result;
    }
  }
  return result;
};

module.exports = findKey;