// assertArraysEqual copied over (eqArrays and assertArraysEqual)

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


const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }

};

// Implement takeUntil

// The function will take 2 parameters:
// 1. The aray to work with
// 2. The callback ("predicate")

const takeUntil = function(array, callBack) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    // console.log("item before callBack:", item)

    if (!callBack(item)) {
      // console.log("!callBack(item):", !callBack(item))
      result.push(item);
    } else {
      return result;
    }
  }
}

module.exports = takeUntil;

// TEST CODE

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0); // first parameter is an array, second parameter is a function (condition statement) which returns true or false (predicate)
// console.log(results1);

// console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ','); // first param is array, second param is callback/ predicate which will return return true or false
// console.log(results2);

assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]); // Should pass
assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);
assertArraysEqual(results1, [ 1, 2, 5, 7 ]); // Should fail