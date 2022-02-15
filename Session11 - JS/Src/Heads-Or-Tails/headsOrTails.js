"use strict";

function headAndTail(params) {
  if (params === "cheat" || params === "CHEAT") {
    return coinFlipChance(0.8);
  } else {
    return coinFlipChance(0.5);
  }
}
function coinFlipChance(chance) {
  return Math.random() <= chance ? "Head" : "Tail";
}

console.log(`This is for unqual chance: ${headAndTail("cheat")}`);
console.log(`This is for unqual chance: ${headAndTail("CHEAT")}`);
console.log(`This is for equal chance: ${headAndTail("")}`);
