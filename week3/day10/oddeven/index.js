function funOddEven() {
    var number = document.getElementById("number").value;
    var output = "";
    if (number % 2 === 0) {
        output = "Even";
    } else {
        output = "Odd";
    }
    document.getElementById("hasil").innerHTML = output;
}