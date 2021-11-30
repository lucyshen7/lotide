const flatten = require('../flatten');
const assert  = require('chai').assert;

describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("returns [1, 2, 3, 4, 5, 6] for [1, [2], [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, [2], [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

});