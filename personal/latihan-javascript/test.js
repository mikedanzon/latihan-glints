function sevenBoom(arr) {
    let number = arr.toString();
    let result = number.replace(/,/g, "")
    for (let i = 0; i <= result.length; i++) {
        if (result[i] == 7) {
            return "Boom!";
        }
    }
    return "there is no 7 in the array";
}

sevenBoom([2, 55, 60, 97, 86])