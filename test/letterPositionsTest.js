const letterPositions = require('../letterPositions');
const assert  = require('chai').assert;

let object1 = letterPositions("hello");
let object2 = letterPositions("lighthouse in the house");

describe("#letterPositions", () => {
  it("returns [1] for object1.e", () => {
    assert.deepEqual(object1.e, [1]);
  });

  it("returns [7, 20] for object2.u", () => {
    assert.deepEqual(object2.u, [7, 20]);
  });

  it("returns [7, 20] for object2.u", () => {
    assert.deepEqual(object2.e, [9, 16, 22]);
  });

});