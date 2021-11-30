const findKey = require('../findKey');
const assert  = require('chai').assert;

describe("#findKey", () => {
  it("returns 'noma' for 2 stars'", () => {
    assert.strictEqual(findKey(obj, x => x.stars === 2), "noma");
  });

  it("returns 'Akaleri' for 3 stars'", () => {
    assert.strictEqual(findKey(obj, x => x.stars === 3), "Akaleri");
  });

  it("returns undefined for 5 stars'", () => {
    assert.strictEqual(findKey(obj, x => x.stars === 5), undefined);
  });

});

// TEST CODE

let obj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};