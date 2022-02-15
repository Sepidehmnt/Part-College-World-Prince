"use strict";

function getAge(inp1, inp2) {
  if (!Number.isInteger(inp2) || inp2 < 1) {
    return "Not a valid age!";
  }
  if (inp1 === "M") {
    const monthsOfAge = inp2 * 12;
    return monthsOfAge;
  } else if (inp1 === "D") {
    const DaysOfAge = inp2 * 365;
    return DaysOfAge;
  } else {
    return "it's an invalid input!";
  }
}
console.log(getAge("", -1));
console.log(getAge("M", 10));
console.log(getAge("D", 10));
console.log(getAge("S", 10));
