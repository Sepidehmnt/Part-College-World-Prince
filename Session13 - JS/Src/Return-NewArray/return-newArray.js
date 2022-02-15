"use strict";

const arr1 = [100, 88, 5, 15, "part", 2, 3];
const arr2 = ["mouse", "keyboard", "monitor", "laptop", "mousepad"];
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reverseArray = (arr) => {
  let newArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
};
console.log(reverseArray(arr1));
console.log(reverseArray(arr2));
console.log(reverseArray(arr3));
