const number1 = 2000;
const number2 = 6000000;
const number3 = 1000000000;

function convertNumToString(params) {
  const numToStr = params.toString();
  let result = numToStr.replace(/000/g, "K");
  result = result.replace(/KK/g, "M");
  result = result.replace(/MK/g, "B");
  return result;
}

console.log(`${number1}  => ${convertNumToString(number1)}`);
console.log(`${number2}  => ${convertNumToString(number2)}`);
console.log(`${number3}  => ${convertNumToString(number3)}`);
