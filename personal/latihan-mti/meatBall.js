// Level 2
function meatBall(meat, flour, water, recipe) {
  // CODE HERE
  let total = 0;
  let meatTotal = meat;
  let flourTotal = flour;
  let waterTotal = water;
  while (meatTotal >= recipe.meat && flourTotal >= recipe.flour && waterTotal >= recipe.water) {
    total++;
    meatTotal -= recipe.meat;
    flourTotal -= recipe.flour;
    waterTotal -= recipe.water;
  }
  if (meatTotal > 0) {
    if (flourTotal > 0 || waterTotal > 0) {
      if (flourTotal > 0) {
        if (waterTotal > 0) {
          return `${total} meat ball with ${meatTotal} meat, ${flourTotal} flour, and ${waterTotal} water remain`
        } else {
          return `${total} meat ball with ${meatTotal} meat and ${flourTotal} flour remain`
        }
      }
    } else {
      return `${total} meat ball with ${meatTotal} meat remain`
    }
  }
  if (flourTotal > 0) {
    if (waterTotal > 0) {
      return `${total} meat ball with ${flourTotal} flour and ${waterTotal} water remain`
    } else {
      return `${total} meat ball with ${flourTotal} flour remain`
    }
  }
  if (waterTotal > 0) {
    return `${total} meat ball with ${waterTotal} water remain`
  }
  return `${total} meat ball`
}

function test(fun, result) {
  console.log(fun === result);
}

const standardRecipe = {
  meat: 1,
  flour: 2,
  water: 1,
};

const tastyRecipe = {
  meat: 1.5,
  flour: 1.5,
  water: 1,
};

test(
  meatBall(30, 61.5, 30, standardRecipe),
  '30 meat ball with 1.5 flour remain'
);
test(
  meatBall(12, 25, 11, standardRecipe),
  '11 meat ball with 1 meat and 3 flour remain'
);
test(meatBall(23, 20, 20, tastyRecipe),
  '13 meat ball with 3.5 meat, 0.5 flour, and 7 water remain'
);
test(
  meatBall(42, 45, 51, standardRecipe),
  '22 meat ball with 20 meat, 1 flour, and 29 water remain'
);
test(
  meatBall(15, 55, 21, standardRecipe),
  '15 meat ball with 25 flour and 6 water remain'
);
test(
  meatBall(33, 24, 19, tastyRecipe),
  '16 meat ball with 9 meat and 3 water remain'
);
