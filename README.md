# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @alexsoyoungkang/lotide`

**Require it:**

`const _ = require('@alexsoyoungkang/lotide/index');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arrayOne, arrayTwo)`: comparing two arrays and returning an appropriate message(Passed or Failed) if they match or not.
* `assertEqual(actual, expected)`: compareing the two values it takes in and returning a message telling us if they match or not.
* `assertObjectsEqual(actual, expected)`: taking in two objects and printing out an appropriate message to the console if it passed or failed.
* `countLetters(str)`: taking in a sentence (as a string) and then returning a count of each of the letters in that sentence.
* `countOnly(allItems, itemsToCount)`: taking in a collection of items and returning counts for a specific subset of those items.
* `eqArrays(first, second)`: taking in two arrays and returning true or false, based on a perfect match.
* `eqObjects(object1, object2)`: taking in two objects and returning true or false, based on a perfect match.
* `findKey(object, callback)`: takeing in an object and a callback and returning the first key for which the callback returns a truthy value.
* `findKeyByValue(object, value)`: takeing in an object and a value and returning the first key which contains the given value. If no key of given value found then returning undefined.
* `flatten(array)`: taking in an array containing elements including nested arrays of elements, and returning a "flattened" version of the array.
* `head(array)`: returning the first element from the array.
* `letterPositions(sentence)`: returning all the indices (zero-based positions) in the string where each character is found.
* `map(array, callback)`: returning a new array based on the results of the callback function.
* `middle(array)`:  taking in an array and returning the middle-most element(s) of the given array.
* `tail(array)`: returning everything except for the first item (head) of the provided array.
* `takeUntil(array, callback)`: collecting items from a provided array until the callback provided returns a truthy value and returning a slice of the array with elements taken from the beginning.
* `without(source, itemsToRemove)`: returning a subset of a given array, removing unwanted elements.