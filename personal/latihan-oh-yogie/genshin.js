// Given an array that consist of the characters from Genshin Impact.
// make a function to return the number of the characters,
// the character with the highest level, and the character with the lowest level.
// example
// Input -> genshin()
// Output -> "I have 5 characters. My most played character is Razor level 90 and my least played character is Amber level 7."

const characters = [
  {
    name: "Aether",
    level: 24,
  },
  {
    name: "Klee",
    level: 12,
  },
  {
    name: "Razor",
    level: 90,
  },
  {
    name: "Amber",
    level: 7,
  },
  {
    name: "Barbara",
    level: 44,
  },
];
const genshin = () => {
  // write code here
  let indexSort = characters.sort((a,b) => b.level - a.level);
  let indexHigh = indexSort[0];
  let indexLow = indexSort[indexSort.length - 1];
  return `I have ${characters.length} characters. My most played character is ${indexHigh.name} level ${indexHigh.level} and my least played character is ${indexLow.name} level ${indexLow.level}.`
};

function Test(fun, result) {
  console.log(fun === result, fun);
}

Test(
  genshin(),
  "I have 5 characters. My most played character is Razor level 90 and my least played character is Amber level 7."
);
