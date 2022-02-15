"use strict";

const arr = ["red", "blue", 23, true];

const returnMyIndexOf = (collection, target) => {
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] === target) {
      return i;
    }
  }
  return null;
};
console.log(returnMyIndexOf(arr, "blue"));
console.log(returnMyIndexOf(arr, true));
console.log(returnMyIndexOf(arr, "pink"));
