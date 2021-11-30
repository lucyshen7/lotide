const findKeyByValue = require('../findKeyByValue');
const assert  = require('chai').assert;

describe("#findKeyByValue", () => {
  it("returns 'drama' for 'The Wire'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns undefined for 'That '70s Show'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it("returns 'romance' for 'The Notebook'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Notebook"), "romance");
  });

  it("returns 'comedy' for 'Brooklyn Nine-Nine'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });

  it("returns undefined for 'Squid Game'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Squid Game"), undefined);
  });

});

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  crime: "Brooklyn Nine-Nine",
  romance: "The Notebook"
};