"use strict";

const numbers = [2, 3, 500, 9, 13];
const colors = ["Red", "Green", "Blue", "Brown"];
const emptyArr = [];

function checkAndReturnArr(params) {
  if (params.length === 0) {
    return null;
  }
  // const arrayLength = params.length;
  return params[params.length - 1];
}

console.log(checkAndReturnArr(numbers));
console.log(checkAndReturnArr(colors));
console.log(checkAndReturnArr(emptyArr));
