"use strict";

const randomStr = (length, repeat) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return repeat ? repeatStr(length, chars) : nonRepeatStr(length, chars);
};

const repeatStr = (length, chars) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.random() * chars.length);
  }
  return result;
};

const nonRepeatStr = (length, chars) => {
  let randomChar,
    result = "";
  for (let i = 0; i < length; i++) {
    do {
      randomChar = chars.charAt(Math.random() * chars.length);
    } while (result.includes(randomChar));
    result += randomChar;
  }
  return result;
};

console.log(randomStr(8, true));
console.log(randomStr(7, false));
