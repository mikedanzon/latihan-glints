let output = "";
const data = 5;

for (let i = 0; i < data; i++) {
    for (let k = 0; k < i; k++) {
        for (let l = 0; l <= k; l++) {
            output += "#";
        }
    }
    for (let m = data; m > i; m--) {
        for (let n = data; n > i; n--) {
            output += 1
        }
    }
    for (let k = 0; k < i; k++) {
        for (let l = 0; l <= k; l++) {
            output += "#";
        }
    }
    output += "\n"
}

console.log(output)