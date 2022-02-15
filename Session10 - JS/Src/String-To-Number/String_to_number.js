const strOfNumLetter1 = "2m";
const strOfNumLetter2 = "8M";
const strOfNumLetter3 = "5k";

function convertStringToNum(params) {
  let result = params.replace(/M|m/g, "000000");
  result = result.replace(/k/g, "000");
  return parseInt(result);
}

console.log(`${strOfNumLetter1} => ${convertStringToNum(strOfNumLetter1)}`);
console.log(`${strOfNumLetter2} => ${convertStringToNum(strOfNumLetter2)}`);
console.log(`${strOfNumLetter3} => ${convertStringToNum(strOfNumLetter3)}`);
