// Given an array called villain that has the name of JoJo's Bizzare Adventure's antagonist.
// Using loop method, print each of the villain altogether with their respective parts.
// example:
// Input -> Antagonist()
// Output ->
// Part 1 antagonist is Dio Brando
// Part 2 antagonist is Kars
// Part 3 antagonist is DIO
// Part 4 antagonist is Kira Yoshikage
// Part 5 antagonist is Diavolo
// Part 6 antagonist is Enrico Pucci
// Part 7 antagonist is Funny Valentine
// Part 8 antagonist is Akefu Satoru

const villain = [
  "Dio Brando",
  "Kars",
  "DIO",
  "Kira Yoshikage",
  "Diavolo",
  "Enrico Pucci",
  "Funny Valentine",
  "Akefu Satoru",
];

function Antagonist() {
  let output = ``;
  for (let i = 1; i <= villain.length; i++) {
    output += `Part ${i} antagonist is ${villain[i-1]} \n`;
  }
  return output;
}

console.log(Antagonist())
