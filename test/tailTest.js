const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it and no print bc there's no console.log
console.log(tail(words));
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(words).length, 2);
//js can't compare array values

const test = [];
const result = tail(test);
assertEqual(result.length, 0);

