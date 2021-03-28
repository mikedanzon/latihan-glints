// https://www.codewars.com/kata/546f922b54af40e1e90001da/javascript
// 6 Kyu

function alphabetPosition(text) {
    let a = text.split(" ").join("").toLowerCase().split("")
    let b = [];
    let regex = /[a-zA-Z]/g; //only letter a-z and A-Z
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let result = "";
    for (let i = 0; i < a.length; i++) {
      if (a[i].match(regex)) {
        b.push(a[i])
      }
    }
    for (let i = 0; i < b.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (b[i] == alphabet[j]) {
          result += `${j+1} `;
        }
      }
    }
    return result.slice(0,-1);
}

// Best Answer on Codewars
// function alphabetPosition(text) {
//     return text
//       .toUpperCase()
//       .match(/[a-z]/gi)
//       .map( (c) => c.charCodeAt() - 64)
//       .join(' ');
//}