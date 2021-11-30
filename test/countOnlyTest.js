const countOnly   = require('../countOnly');
const assert      = require('chai').assert;

describe("#countOnly", () => {
  it("returns 1 for result['Jason']", () => {
    assert.strictEqual(result1, 1);
  });

  it("returns undefined for result['Karima']", () => {
    assert.strictEqual(result2, undefined); 
  });

  it("returns 2 for ['Fang']]", () => {
    assert.strictEqual(result3, 2); 
  });

  it("returns undefined for ['Agouhanna']", () => {
    assert.strictEqual(result4, undefined);
  });

});

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

let result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

let result1 = result["Jason"];
let result2 = result['Karima'];
let result3 = result['Fang'];
let result4 = result['Agouhanna'];
