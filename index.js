// index.js
const head            = require('./head');
const tail            = require('./tail');
const middle          = require('./middle');
const countLetters    = require('./countLetters');
const countOnly       = require('./countOnly');
const findKey         = require('./findKey');
const findKeyByValue  = require('./findKeyByValue');
const flatten         = require('./flatten');
const letterPositions = require('./letterPositions');
const map             = require('./map');
const takeUntil       = require('./takeUntil');
const without         = require('./without');
const eqArrays        = require('./eqArrays');
const eqObjects       = require('./eqObjects');

module.exports = {
  head:            head,
  tail:            tail,
  middle:          middle,
  countLetters:    countLetters,
  countOnly:       countOnly,
  findKey:         findKey,
  findKeyByValue:  findKeyByValue,
  flatten:         flatten,
  letterPositions: letterPositions,
  map:             map,
  takeUntil:       takeUntil,
  without:         without,
  eqArrays:        eqArrays,
  eqObjects:       eqObjects
};