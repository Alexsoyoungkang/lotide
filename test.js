const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃 Assertion Passed: ${actual} === ${expected}`);
    //this can be used - console.log("Assertion Passed " + actual + " === " + expected);
  } else {
    console.log(`😭😭😭 Assertion Failed: ${actual} !== ${expected}`);
    // = console.log("Assertion Passed " + actual + " === " + expected);
  }
};

const eqArrays = function (first, second) {
  if (first.length !== second.length) {  // check the length first 
    return false;
  }
  for (let i = 0; i < first.length; i++) {  // looping thru each element and compare 
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true; // both of if and for are true then return true;
};

const eqObjects = function (object1, object2) {
  const objOneArr = Object.keys(object1);  // [ 'color', 'size' ]
  const objTwoArr = Object.keys(object2);
  if (objOneArr.length === objTwoArr.length) { //2 === 2
    for (const objOneKey of objOneArr) {  // list of values = color, size
      //console.log(objOneKey); // = color, size
      const valueObj1 = object1[objOneKey]; // objOneKey is a certain key so object1 and object2 will be comparing value for the same key ex) object1['color'] = red, object1['size'] = medium -> red, medium
      const valueObj2 = object2[objOneKey]; //  
      //console.log(valueObj1)
      if (Array.isArray(valueObj1) && Array.isArray(valueObj2)) { // if valueobj1 && valueobj2 are array
        const result = eqArrays(valueObj1, valueObj2) // then run function eqArrays with those two above -> if it's true then 
        if (!result) { // if the function eqArrays(valueObj1, valueObj2) is false then return false, line 40
          return false;
        } 
      } else { // if valueobj1 && valueobj2 are not array
        if (valueObj1 !== valueObj2) { //checking if the value of a specific key in object1 is not equal to the value of the same key in object2
          return false;
        } 
      }
    } return true;
  } else {
    return false;
  }
};



// const eqObjects = function(object1, object2) {
//   const obj1Keys = Object.keys(object1); // ['color', 'size']
//   const obj2Keys = Object.keys(object2); // ['size', 'color']
//   if (obj1Keys.length === obj2Keys.length) {
//     for (const key of obj2Keys ) { // key = color, size
//       const obj1Value = object1[key];  // obj1KeyItem = ["red", "blue"], medium  - they're comparing the same key at the same time
//       const obj2Value = object2[key];  // obj2KeyItem = red, medium 
//       if (Array.isArray(obj1Value) && Array.isArray(obj2Value)) {
//         const result = eqArrays(obj1Value, obj2Value)
//         if (result === true) {
//           return true;
//         } else {
//           return false;
//         }
//       } else {
//         if (obj1Value === obj2Value) {
//           return true;
//         } else {
//           return false;
//         }
//       }
//     }
//   } else {
//     return false;
//   }
// };


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject, anotherShirtObject)); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false