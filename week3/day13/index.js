const umur = (num) => {
    let output = "";
    if (num.length == 0) {
        output = "Please insert your age";
    } else if (num < 18) {
        output = "You are still under age";
    } else if (num > 18) {
        output = "You are old";
    } else {
        output = "Number only please";
    }
    return output;
}

console.log(umur(13))