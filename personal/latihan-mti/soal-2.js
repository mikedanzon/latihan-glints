const Bonus = (cokelat) => {
    // write your code here
    var totalCokelat = cokelat;
    var bonus = Math.floor(total / 5)
    if (bonus / 5 >= 4) {
        
        return Bonus()
    }
    
    return total;
};

var total = 0;

const test = (testCase, result) => {
    if (testCase !== result) return console.log(false);
    return console.log(true);
};
 
test(Bonus(60), 74);
test(Bonus(100), 124);
test(Bonus(1000), 1249);
test(Bonus(1234), 1539);

//  30 pcs , karena 30 dapet 6 , 5 dapet 1
//  6 / 5 (tiap kelipatan 5 dapet 1 dari yang di dapat dari awal , kalo bonus > 5 loop trus / 5 sampe bonus < 5)
//  30 + 6 + 6/5 (hasil akhir)