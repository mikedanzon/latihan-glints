// const arr = [10, 20, 30, 40, 50, 60];

// const bigNumber = (num) => num > 30;

// console.log(arr.findIndex(bigNumber));

// const arrays = [
//   {
//     name: "yogie",
//     city: "bandung",
//   },
//   {
//     name: "amir",
//     city: "jakarta",
//   },
//   {
//     name: "asep",
//     city: "tasik",
//   },
// ];

// console.log(arrays.findIndex((finds) => finds.city === "jakarta"));

const idxOf = ["macbook pro", "asus lite", "lenovo pro", "dell lite"];

// console.log(idxOf.indexOf("asus"));
// console.log(idxOf);
// console.log(idxOf.reverse());
// console.log(idxOf.sort());

const names = "yogie"; // [y,o,g,i,e]
const bigG = () => {
  const splt = names.split("");
  //   return splt;
  return `${splt[2]
    .toString()
    .toUpperCase()} ${splt[4].toString().toUpperCase()}`;
};
console.log(bigG());

// const numbers = "20";
// console.log(numbers + 21);

// const flt = " 40.5 kilometers";
// console.log(flt);

// console.log(parseFloat(flt));

// console.log(parseInt(numbers) + 21);

// console.log(names.toLowerCase())

// console.log(idxOf.includes("macbook pro"))

// const macPro = () => {
//   //   idxOf.includes("macbook")
//   //     ? console.log("ada macbook pro")
//   //     : console.log("ga ada macbook pro");
// };

// macPro();

// const hello = "hello world"
// console.log(hello.substring(0, 2))
