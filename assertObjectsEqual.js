// eqArrays
// Returns true if both arrays are identical.

// eqObjects
// Returns true if both objects have identical keys with identical values.

// const eqArrays = require('./eqArrays');
// const eqObjects = require('./eqObjects'); // use deepEqual? check for objects

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