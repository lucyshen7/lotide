const map     = require('../map');
const assert  = require('chai').assert;

describe("#map", () => {
  it("returns [ 'g', 'c', 't', 'm', 't' ] for results1'", () => {
    assert.deepEqual(results1,[ 'g', 'c', 't', 'm', 't' ]);
  });

  it("returns [ 'Hi max', 'Hi lulu', 'Hi ginger' ] for sayHiToDog", () => {
    assert.deepEqual(sayHiToDog,[ 'Hi max', 'Hi lulu', 'Hi ginger' ]);
  });

  it("returns [ 'lola50', 'aidan50', 'penelope50' ] for makeUsername", () => {
    assert.deepEqual(makeUsername, [ 'lola50', 'aidan50', 'penelope50' ]);
  });

  it("does not return [ 'lola50', 'aidan50', 'penelope50' ] for results1", () => {
    assert.notDeepEqual(results1, [ 'lola50', 'aidan50', 'penelope50' ]);
  });

});

// TEST CODE

const words = ["ground", "control", "to", "major", "tom"];
const dogNames = ["max", "lulu", "ginger"];
const usernames = ["lola", "aidan", "penelope"];

const results1 = map(words, word => word[0]); // Callback function in this case takes the value of the first index (letter) of each element (word) in the array
const sayHiToDog = map(dogNames, dogName => `Hi ${dogName}`);
const makeUsername = map(usernames, username => username + 50);