"use strict";

function sortNaturalNumbers(param) {
  if (!Number.isInteger(param) || param < 1) {
    return null;
  }
  const num = param.toString().split("");
  num.sort(function (a, b) {
    return b - a;
  });
  return num.join("");
}
console.log(sortNaturalNumbers(-1));
console.log(sortNaturalNumbers(4158));
console.log(sortNaturalNumbers(111152));
console.log(sortNaturalNumbers(4386520));
console.log(sortNaturalNumbers(6));
