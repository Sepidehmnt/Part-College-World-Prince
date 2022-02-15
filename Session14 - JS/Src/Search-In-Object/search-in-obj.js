const cards = [
  {
    name: "Miner",
    level: 12,
    rarity: "troop",
    info: "The Miner can burrow his way underground",
  },
  {
    name: "Fireball",
    level: 11,
    type: "spell",
    target: "Miner",
  },
];

const search = (arr, word, prop) => {
  if (prop === undefined) {
    return arr.filter(obj => Object.values(obj).find(val => val === word));
  } else {
    return arr.filter(obj => obj[prop] === word);
  }
};

console.log(search(cards, "Miner"));
console.log(search(cards, "Miner", "target"));
console.log(search(cards, "Golem"));
