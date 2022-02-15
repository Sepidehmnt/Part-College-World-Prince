"use strict";

function getBoolFromStr(param) {
  if (typeof param !== "string") {
    return null;
  }
  const reversedString = param.split("").reverse().join("");
  if (reversedString === param) {
    return true;
  } else {
    return false;
  }
}
console.log(getBoolFromStr(123));
console.log(getBoolFromStr("level"));
console.log(getBoolFromStr("madam"));
console.log(getBoolFromStr("188881"));
console.log(getBoolFromStr("ali"));
console.log(getBoolFromStr("sepideh"));
