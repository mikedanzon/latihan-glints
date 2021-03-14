// function sevenBoom(arr) {
//     let number = arr.toString();
//     let result = number.replace(/,/g, "")
//     for (let i = 0; i <= result.length; i++) {
//         if (result[i] == 7) {
//             return "Boom!";
//         }
//     }
//     return "there is no 7 in the array";
// }
// sevenBoom([2, 55, 60, 97, 86])

// Remove everything except letters
// function lettersOnly(str) {
// 	let result = str.match(/[a-zA-Z]+/g);
// 	let resultString = result.toString();
//     let finalResult = resultString.replace(/,/g,"");
// 	return finalResult;
// }
// console.log(lettersOnly("dsfo3kdsofk3123341"))

// Remove first letter from string
// function newWord(str) {
// 	let result = str.substring(1);
//     return result;
// }

// Sort Numbers in Descending Order
// function sortDescending(num) {
// 	return parseInt(num.toString().split('').sort().reverse().join(''));
// }

// Reverse the Case
// function reverseCase(str) {
// 	let result = "";
//     for (let i = 0; i < str.length; i++) {
//         var character = str[i];
//         if (character == character.toLowerCase()) {
//             result = result + character.toUpperCase();
//         } else {
//             result = result + character.toLowerCase();
//         }
//     }
//     return result;
// }

// Finding nemo
// function findNemo(sentence) {
//     let kalimat = sentence.split(" ");
// 	let result = "";
//     for (let i = 0; i < kalimat.length; i++) {
//         if (kalimat[i] === "Nemo") {
//             return result = "I found Nemo at " + [i+1] + "!";
//         } else {
//             result = "I can't find Nemo :(";
//         }
//     }
//     return result;
// }
// console.log(findNemo("What is up people Nemo yo wassup?"))