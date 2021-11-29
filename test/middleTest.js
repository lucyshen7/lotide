const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// TEST CODE

assertArraysEqual(middle([1]), []); // => should PASS // Revised code for assertArraysEqual
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4, 5]); // => should FAIL