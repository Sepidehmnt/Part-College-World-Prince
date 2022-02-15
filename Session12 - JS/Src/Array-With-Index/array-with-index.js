"use strict";

const arr = ["one", "two", "three", "four"];
const arr2 = [1, 2, 3, 4, 5];

function changeAndPrint(element, array) {
  const newElement = changeArray(element, array);
  if (newElement === null) {
    console.log(newElement);
  } else {
    console.log(`${newElement} ===> `, array);
  }
}

function changeArray(element, array) {
  if (!array[element]) {
    return null;
  } else {
    return array.splice(element, 1, "it's changed");
  }
}

changeAndPrint(6, arr);
changeAndPrint(2, arr);
changeAndPrint(1, arr);
