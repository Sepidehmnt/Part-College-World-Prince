"use strict";

const word = "WorldPrince";
const sub1 = "eWorld";
const sub2 = "Prince";
const sub3 = "WorldPrinceWorldPri";
const sub4 = "Qrince";

const returnSubstring = (str, subStr) => {
  const concatWord = word.concat(str);
  if (concatWord.includes(subStr) && subStr.length <= word.length) {
    return true;
  } else {
    return false;
  }
};
console.log(returnSubstring(word, sub1));
console.log(returnSubstring(word, sub2));
console.log(returnSubstring(word, sub3));
console.log(returnSubstring(word, sub4));
