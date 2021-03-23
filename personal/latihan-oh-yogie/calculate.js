// make a four simple functions that can calculate add, subtract, times, and divided by
// example:
// input -> Plus(2 ,2) , Minus(4-2), Times(10,2), Divide(50,10)
// output -> (4),  (2), (20), (5)


function Plus(number1, number2) {
  return number1 + number2;
}

function Minus(n1, n2) {
  return n1 - n2;
}

function Times(int1, int2) {
  return int1 * int2;
}

function Divide(num, nums) {
  return num / nums;
}

// do not edit code below
function Test(fun, result, preview) {
  console.log(fun === result, preview);
}

Test(Plus(1, 2), 3, `result ${Plus(1, 2)}`);
Test(Plus(2, -4), -2, `result ${Plus(2, -4)}`);
Test(Minus(10, 6), 4, `result ${Minus(10, 6)}`);
Test(Divide(100, 4), 25, `result ${Divide(100, 4)}`);
Test(Times(6, 7), 42, `result ${Times(6, 7)}`);
