// function xMasTree(n){
//     let output = "";
//     for (var i = 0; i < n; i++) {
//         for (var j = i; j < n; j++) {
//             output += "_";
//         }
//         for (var k = 0; k < i; k++) {
//             output += "#";
//         }
//         for (var l = 0; l < j; l++) {
//             output += "_";
//         }
//         for (var m = 0; m < k; m++) {
//             output += "#";
//         }
//         output += "\n";
//     }
//     return output;
// }

// console.log(xMasTree(5))

function accum(s) {
    let output = "";
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j <= i; j++) {
            output += s[i];
        }
        output += "-";
    }
    let result = output.toLowerCase().split("-").join("-");
    return result;
}

console.log(accum("ZpglnRxqenU"));
