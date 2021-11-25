// eqArrays
// Returns true if both arrays are identical.

const eqArrays = function(arrayOne, arrayTwo) {
  let output = "";

  if (arrayOne.length === arrayTwo.length) {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] === arrayTwo[i]) {
        output = true; // Assign a truthy value to output if matched
      } else {
        output = false; // Assign a falsey value to output if not matched
      }
    }
    return output;
  }
  return false;
};

// eqObjects
// Returns true if both objects have identical keys with identical values.

const eqObjects = function(object1, object2) {
  let output = false;

  if (Object.keys(object1).length === Object.keys(object2).length) { // Compare lengths using Object.keys().length
    
    for (const key of Object.keys(object1)) { // After that check, loop through the keys returned by Object.keys for one of the objects (not both). Use for..of since the keys are an array. Other loop types can work too, but this one is most elegant and idiomatic, thanks to ES6
      
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // Check if values are arrays
        // console.log("arrays equal?", eqArrays(object1[key], object2[key]));
        output = eqArrays(object1[key], object2[key]);
      } else if (object1[key] === object2[key]) { // Inside our loop, compare both objects' values for that key. Use === to ensure that the types are the same!
        output = true;
      } else {
        output = false;
      }
    }
  }
  return output;
};

// assertObjectsEqual
// FUNCTION IMPLEMENTATION

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect; // <= add this line
  // console.log(`Example label: ${inspect(object1)}`);

  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

// TEST CODE
const ab = { a: "1", b: 2 };
const ba = { b: 2, a: "1" };

assertObjectsEqual(ab, ba);

assertObjectsEqual({Chance: 2, Cody: 1}, {Chance: 2, Cody: 1}); // => should PASS
assertObjectsEqual({Chance: 2, Cody: 1}, {Chance: 2, Cody: 1, Sammie: 3}); // => should FAIL