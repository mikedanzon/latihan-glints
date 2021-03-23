// Tonight we are going to make a function regarding Covid health protocol.
// The function has three parameters.
// The return will be depending on the parameters
// example"
// Input -> isAlive = true, isPandemic = true, isVaccine = false
// Output -> "Gunakan masker saat keluar rumah, cuci tangan setiap hari, dan jaga jarak minimal 2 meter dengan orang lain"

// do no edit the message
const isAliveFalse = "RIP";
const isPandemicTrue =
  "Use face mask, regularly wash your hands, and social distance yourself from others";
const isVaccinneTrue = "Register for vaccination immediately";

function Covid(isAlive, isPandemic, isVaccinne) {

}

// do not edit the code below
function Test(fun, result) {
  console.log(fun === result, fun);
}
Test(Covid(false, true, true), isAliveFalse);
Test(Covid(true, false, false), isPandemicTrue);
Test(Covid(true, true, false), isPandemicTrue);
Test(Covid(true, true, true), isVaccinneTrue);
Test(Covid(true, false, true), isVaccinneTrue);
