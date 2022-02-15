/*
    DATE STRING FORMATTER

    AUTHOR:           Sepideh Montazer <sepideh.mntzr75@gmail.com>
    RUN:              $ node date_string_formatter.js
    LAST MODIFIED:    2021/06/06 20:40
    DESCRIPTION:      This project will format valid strings to proper date format; if
                      not valid, proper error message will be displayed.
*/

const msg = require("./errors.json");

// Input samples
const lengthProblem = 14008;
const monthProblem = 14001301;
const dayProblem1 = 13980633;
const dayProblem2 = 14010831;
const dayLeapProblem1 = 13981230;
const dayLeapProblem2 = 13991231;
const goodInput = 14031216;

function main() {
  console.log(`${lengthProblem}      =>   ${convertNumToStr(lengthProblem)}`);
  console.log(`${monthProblem}   =>   ${convertNumToStr(monthProblem)}`);
  console.log(`${dayProblem1}   =>   ${convertNumToStr(dayProblem1)}`);
  console.log(`${dayProblem2}   =>   ${convertNumToStr(dayProblem2)}`);
  console.log(`${dayLeapProblem1}   =>   ${convertNumToStr(dayLeapProblem1)}`);
  console.log(`${dayLeapProblem2}   =>   ${convertNumToStr(dayLeapProblem2)}`);
  console.log(`${goodInput}   =>   ${convertNumToStr(goodInput)}`);
}

function convertNumToStr(number) {
  const numStr = number.toString();
  const result = validateInput(numStr);

  if (result === 1) {
    const year = numStr.slice(0, 4);
    const month = numStr.slice(4, 6);
    const day = numStr.slice(6, 8);
    return `"${year}/${month}/${day}"`;
  } else {
    return translateError(result);
  }
}

function validateInput(number) {
  if (number.length === 8) {
    const month = number.slice(4, 6);
    const day = number.slice(6, 8);
    if (month >= 1 && month <= 6) {
      if (day >= 1 && day <= 31) {
        return 1; // Correct
      } else {
        return -2; // Day problem(1-6)
      }
    } else if (month >= 7 && month <= 11) {
      if (day >= 1 && day <= 30) {
        return 1; // Correct
      } else {
        return -3; // Day problem(7-11)
      }
    } else if (month == 12) {
      const year = number.slice(0, 4);
      const isLeap = year % 4 === 3; // we can check leap year
      if (isLeap && (day < 1 || day > 30)) {
        return -4; // Leap problem
      } else if (!isLeap && (day < 1 || day > 29)) {
        return -5; // Non-leap problem
      } else {
        return 1; // Correct
      }
    } else {
      return -1; // Month problem
    }
  } else {
    return 0; // Length problem
  }
}

function translateError(errorCode) {
  let err;

  switch (errorCode) {
    case 0:
      err = msg.length;
      break;
    case -1:
      err = msg.month;
      break;
    case -2:
      err = msg.dayFirstSixMonth;
      break;
    case -3:
      err = msg.daySecondSixMonth;
      break;
    case -4:
      err = msg.dayTwelthMonthLeap;
      break;
    case -5:
      err = msg.dayTwelthMonthNonLeap;
      break;
    default:
      err = msg.somethingWrong;
      break;
  }
  return err;
}

main();
