const eqObjects = require('../eqObjects');
const assert    = require('chai').assert;

describe("#eqObjects", () => {
  it("returns true for ab & ba", () => {
    assert.strictEqual(eqObjects(ab, ba), true);
  });

  it("returns false for ab & abc", () => {
    assert.strictEqual(eqObjects(ab, abc), false);
  });

  it("returns true for cd & dc", () => {
    assert.strictEqual(eqObjects(cd, dc), true);
  });

  it("returns false for cd & cd2", () => {
    assert.strictEqual(eqObjects(cd, cd2), false);
  });

  // Recursive eqObjects

  it("returns true for obj1 & obj2", () => {
    assert.strictEqual(eqObjects(obj1, obj2), true);
  });

  it("returns false for obj3 & obj4", () => {
    assert.strictEqual(eqObjects(obj3, obj4), false);
  });

  it("returns false for obj5 & obj6", () => {
    assert.strictEqual(eqObjects(obj5, obj6), false);
  });

});

// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const abc = { a: "1", b: "2", c: "3" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };

// Recursive eqObjects

const obj1 = { a: { z: 1 }, b: 2 };
const obj2 = { a: { z: 1 }, b: 2 };

const obj3 = { a: { y: 0, z: 1 }, b: 2 };
const obj4 = { a: { z: 1 }, b: 2 };

const obj5 = { a: { y: 0, z: 1 }, b: 2 };
const obj6 = { a: 1, b: 2 };