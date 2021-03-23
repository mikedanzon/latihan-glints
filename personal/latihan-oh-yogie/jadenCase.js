// Jaden Smith is notorious because he is always capitalize every tweets he writes
// make a function that can convert regular phrase into "Jaden Phrase"
// input : "I like food and math"
// output: "I Like Food And Math"

const jadenCase = (str) => {
  let words = str.split(" ");
  let results = [];
  for (let i = 0; i < words.length; i++) {
      results.push(words[i][0].toUpperCase()+words[i].slice(1))
  }
  return results.join(" ");
};

// do not edit code below
function Test(fun, result, preview) {
  console.log(fun === result, preview);
}

Test(
  jadenCase("this is sparta"),
  "This Is Sparta",
  jadenCase("This Is Sparta")
);
Test(
  jadenCase("you only live once"),
  "You Only Live Once",
  jadenCase("You Only Live Once")
);
Test(
  jadenCase("glints academy batch 11 front end class"),
  "Glints Academy Batch 11 Front End Class",
  jadenCase("Glints Academy Batch 11 Front End Class")
);
