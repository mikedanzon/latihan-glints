// https://www.codewars.com/kata/5592e3bd57b64d00f3000047/javascript
// 6 Kyu

function findNb(m) {
    let result = 0;
    let multi = 0;
    for (let i = 0; i < m; i++) {
        m = Math.sqrt((m+multi))
        result++
    }
}

// n^3 + (n-1)^3 +  + 1^3

console.log(findNb(4183059834009))

// Best Answer on Codewars
