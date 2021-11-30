# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lucyshen/lotide`

**Require it:**

`const _ = require('@lucyshen/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: Returns the first element of an array
* `tail`: Returns the tail end of an array after the first element
* `middle`: Returns the middle element of an array (single element for odd number of elements, two elements for even number of elements)
* `countLetters`: Returns an object counting the number of times a letter appears in a string
* `countOnly`: Given an array of strings and an object specifying what to count, returns a count of how many instances of each string were found in the array 
* `findKey`: Given an object and a callback, scans the object and returns the first key for which the callback returns a truthy value
* `findKeyByValue`: Given an object and a value, scans the object and returns first key with the given value
* `flatten`: Given an array with other arrays inside, it can flatten it into a single-level array 
* `letterPositions`: Returns an object with all the letters that appear in a string, with each letter's index 
* `map`: Given an array and a callback function, performs the function on all elements in the array and returns a new array
* `takeUntil`: Given an array and a callback function, return a new array until the callback condition is met
* `without`: Given a source array and an items to remove array, returns a new array without the specific items
* `eqArrays`: Returns true if each element in two arrays have a perfect match
* `eqObjects`: Returns true if both objects have identical keys with identical values