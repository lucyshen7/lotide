// assertEqual

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// eqArrays

const eqArrays = function(arrayOne, arrayTwo) {
  let output = ""; 

  if (arrayOne.length === arrayTwo.length) {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] === arrayTwo[i]) {
        output = true; // Assign a truthy value to output if matched
      } else {
        output = false; // Assign a falsey value to output if not matched
      };
    };    
  return output;
  }
  return false;
};

// eqObjects

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

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
}

module.exports = eqObjects;

// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);