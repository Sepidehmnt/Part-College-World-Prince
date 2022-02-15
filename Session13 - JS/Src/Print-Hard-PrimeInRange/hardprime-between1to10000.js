"use strict";
const isPrime = num => {
  if (!Number.isInteger(num) || num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const isHardPrimeNumber = inp => {
  let quotient = inp;
  while (quotient !== 0) {
    if (isPrime(quotient)) {
      quotient = Math.floor(quotient / 10);
    } else {
      return false;
    }
  }
  return true;
};
const printHardPrimeInRange = rangeEnd => {
  for (let num = 23; num <= rangeEnd; num++) {
    if (isHardPrimeNumber(num)) {
      console.log(num);
    }
  }
};

printHardPrimeInRange(100);
