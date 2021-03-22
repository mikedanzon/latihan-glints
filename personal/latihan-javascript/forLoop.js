// function looping(x) {
//     let output = "";
//     for (let i = 0; i <= x; i++) {
//         for (let j = x; j >= i; j--) {
//             output += " ";
//         }
//         for (let k = 0; k <= i; k++) {
//             output += "*";
//         }
//         output += "\n";
//     }
//     return output;
// }

// console.log(looping(5)) 

function looping(x) {
    let output = "";
    for (let i = 1; i <= x; i++) {
        for (let j = i; j <= x; j++) {
            output += "$";
        }
        for (let k = 1; k <= i; k++) {
            output += "*";
        }
        for (let l = 1; l < i; l++) {
            output += "*";
        }
        for (let u = i; u <= x; u++) {
            output += "$";
        }
        output += "\n";
    }
    return output;
}

console.log(looping(5))

//      *
//     **
//    ***
//   ****
//  *****