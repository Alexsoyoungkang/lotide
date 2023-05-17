const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const assertEqual = require("./assertEqual");
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const findKey = require('./findKey');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');
const flatten = require('./flatten');
const countOnly = require('./countOnly');
const letterPositions = require('./letterPositions');
const findKeyByValue = require('./findKeyByValue');
const eqObjects = require('./eqObjects');


module.exports = {
  head,
  tail,
  middle,
  eqArrays,
  assertEqual,
  assertArraysEqual,
  assertObjectsEqual,
  countLetters,
  findKey,
  map,
  takeUntil,
  without,
  flatten,
  countOnly,
  letterPositions,
  findKeyByValue,
  eqObjects
};