const assertEqual = require('./assertEqual');

const tail = function(array) {
  let newArray = [];
  newArray = array.slice(1);
  return newArray;  // return newArray;
};

module.exports = tail;